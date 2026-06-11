"use server"

import { getPayload } from "@/lib/payload"
import { bookingSchema, type BookingFormData } from "@/lib/validations/booking"
import { calculateTourPrice } from "@/lib/pricing"
import { revalidatePath } from "next/cache"

export async function submitBooking(data: BookingFormData) {
  try {
    // 1. Validate incoming data
    const validatedData = bookingSchema.parse(data)

    // 2. Initialize Payload
    const payload = await getPayload()
    if (!payload) {
      return { success: false, error: "Database service is temporarily unavailable." }
    }

    // 3. Double check the tour exists, check capacity, and validate price (Security checks)
    const { docs: tours } = await payload.find({
      collection: 'tours',
      where: {
        id: { equals: validatedData.tourId }
      },
      limit: 1,
      depth: 2, // Ensure addons details are fetched to resolve pricing
    })

    if (!tours || tours.length === 0) {
      return { success: false, error: "Tour not found." }
    }

    const tour = tours[0] as any

    // 3a. Check Date Capacity
    const selectedDateStr = new Date(validatedData.date).toISOString()
    const maxCapacity = tour.maxParticipantsPerDay || 20

    // Find all active bookings on that day for this tour
    const startOfDay = new Date(validatedData.date)
    startOfDay.setUTCHours(0, 0, 0, 0)
    const endOfDay = new Date(validatedData.date)
    endOfDay.setUTCHours(23, 59, 59, 999)

    const { docs: existingBookings } = await payload.find({
      collection: 'bookings',
      where: {
        'bookingType.value': { equals: validatedData.tourId },
        selectedDate: {
          greater_than_equal: startOfDay.toISOString(),
          less_than_equal: endOfDay.toISOString(),
        },
        status: { not_in: ['cancelled'] },
      },
      limit: 100,
    })

    let currentBookedPax = 0
    for (const b of existingBookings) {
      const pax = b.numberOfPax || {}
      currentBookedPax += (pax.adults || 0) + (pax.children || 0) + (pax.infants || 0)
    }

    const requestedPax = validatedData.adults + validatedData.children + validatedData.infants
    if (currentBookedPax + requestedPax > maxCapacity) {
      const spotsLeft = Math.max(0, maxCapacity - currentBookedPax)
      return { 
        success: false, 
        error: spotsLeft > 0 
          ? `Not enough spots available. Only ${spotsLeft} spot${spotsLeft !== 1 ? 's' : ''} left for this date.` 
          : "This date is fully booked (sold out). Please select another date."
      }
    }

    // 3b. Validate Price
    const pricingResult = calculateTourPrice(tour, {
      date: validatedData.date,
      adults: validatedData.adults,
      children: validatedData.children,
      infants: validatedData.infants,
      selectedAddonIds: validatedData.selectedAddons,
      selectedActivityOption: validatedData.selectedActivityOption,
    })

    const calculatedTotal = pricingResult.grandTotal
    
    if (Math.abs(calculatedTotal - validatedData.totalPrice) > 1) {
      return { success: false, error: `Price validation failed. Expected $${calculatedTotal}, received $${validatedData.totalPrice}. Please refresh.` }
    }

    // 4. Insert into Payload 'bookings' collection
    const booking = await payload.create({
      collection: 'bookings',
      data: {
        bookingType: {
          relationTo: 'tours',
          value: validatedData.tourId,
        },
        selectedDate: selectedDateStr,
        numberOfPax: {
          adults: validatedData.adults,
          children: validatedData.children,
          infants: validatedData.infants,
        },
        selectedAddons: validatedData.selectedAddons,
        selectedActivityOption: validatedData.selectedActivityOption || null,
        customerName: validatedData.guestName,
        customerEmail: validatedData.email,
        customerPhone: validatedData.phone,
        specialRequests: validatedData.specialRequests,
        totalPrice: calculatedTotal,
        status: 'new',
      },
    })

    // Revalidate paths if needed
    revalidatePath(`/tours/${validatedData.tourSlug}`)

    return { 
      success: true, 
      bookingId: booking.id,
      message: "Your booking request has been received!" 
    }

  } catch (error: any) {
    console.error("Booking Error:", error)
    return { 
      success: false, 
      error: error.message || "An unexpected error occurred while processing your booking." 
    }
  }
}

export async function checkAvailability(tourId: string, dateStr: string) {
  try {
    const payload = await getPayload()
    if (!payload) {
      return { success: false, error: "Database service offline" }
    }

    const tour = await payload.findByID({
      collection: 'tours',
      id: tourId,
    })

    if (!tour) {
      return { success: false, error: "Tour not found" }
    }

    const maxCapacity = (tour as any).maxParticipantsPerDay || 20

    const startOfDay = new Date(dateStr)
    startOfDay.setUTCHours(0, 0, 0, 0)
    const endOfDay = new Date(dateStr)
    endOfDay.setUTCHours(23, 59, 59, 999)

    const { docs: bookings } = await payload.find({
      collection: 'bookings',
      where: {
        'bookingType.value': { equals: tourId },
        selectedDate: {
          greater_than_equal: startOfDay.toISOString(),
          less_than_equal: endOfDay.toISOString(),
        },
        status: { not_in: ['cancelled'] },
      },
      limit: 100,
    })

    let currentBookedPax = 0
    for (const b of bookings) {
      const pax = b.numberOfPax || {}
      currentBookedPax += (pax.adults || 0) + (pax.children || 0) + (pax.infants || 0)
    }

    const remainingSpots = Math.max(0, maxCapacity - currentBookedPax)

    return {
      success: true,
      maxCapacity,
      currentBookedPax,
      remainingSpots,
      isSoldOut: remainingSpots <= 0,
    }
  } catch (error) {
    console.error("Availability check failed:", error)
    return { success: false, error: "Failed to query availability database." }
  }
}
