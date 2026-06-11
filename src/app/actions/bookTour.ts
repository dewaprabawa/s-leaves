"use server"

import { getPayload } from "@/lib/payload"
import { bookingSchema, type BookingFormData } from "@/lib/validations/booking"
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

    // 3. Double check the tour exists and prices match (Security check to prevent tampered prices)
    const { docs: tours } = await payload.find({
      collection: 'tours',
      where: {
        id: { equals: validatedData.tourId }
      },
      limit: 1
    })

    if (!tours || tours.length === 0) {
      return { success: false, error: "Tour not found." }
    }

    const tour = tours[0]
    const basePrice = tour.pricing?.basePrice || 0
    const childPrice = tour.pricing?.childPrice || 0
    
    const calculatedTotal = (validatedData.adults * basePrice) + (validatedData.children * childPrice)
    
    // Allow a small margin of error or strict check
    if (Math.abs(calculatedTotal - validatedData.totalPrice) > 1) {
      return { success: false, error: "Price mismatch. Please refresh and try again." }
    }

    // 4. Insert into Payload 'bookings' collection
    // This will automatically trigger the `afterChange` hook which sends the CRM webhook.
    const booking = await payload.create({
      collection: 'bookings',
      data: {
        tour: validatedData.tourId as any,
        date: new Date(validatedData.date).toISOString(),
        participants: {
          adults: validatedData.adults,
          children: validatedData.children
        },
        guestDetails: {
          name: validatedData.guestName,
          email: validatedData.email,
          phone: validatedData.phone,
          specialRequests: validatedData.specialRequests
        },
        totalPrice: calculatedTotal,
        status: 'pending'
      }
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
