"use server"

import { getPayload } from "@/lib/payload"
import { transferBookingSchema, type TransferBookingFormData } from "@/lib/validations/transferBooking"
import { revalidatePath } from "next/cache"

export async function submitTransferBooking(data: TransferBookingFormData) {
  try {
    // 1. Validate incoming data
    const validatedData = transferBookingSchema.parse(data)

    // 2. Initialize Payload
    const payload = await getPayload()
    if (!payload) {
      return { success: false, error: "Database service is temporarily unavailable." }
    }

    // 3. Double check the transfer exists and prices match
    const { docs: transfers } = await payload.find({
      collection: 'transfers',
      where: {
        id: { equals: validatedData.transferId }
      },
      limit: 1
    })

    if (!transfers || transfers.length === 0) {
      return { success: false, error: "Transfer route not found." }
    }

    const transfer = transfers[0]

    // Validate flight number for airport transfers
    if (transfer.transferType === 'airport' && (!validatedData.flightNumber || validatedData.flightNumber.trim() === '')) {
      return { success: false, error: "Flight number is required for airport transfers." }
    }
    
    // Find the chosen vehicle configuration
    const vehicleConfig = transfer.vehicles?.find(
      (v: any) => v.name === validatedData.selectedVehicle
    )
    
    if (!vehicleConfig) {
      return { success: false, error: "Selected vehicle class is invalid for this route." }
    }
    
    const vehiclePrice = vehicleConfig.basePrice || 0
    let dropPointsSurcharge = 0
    
    // Sum prices of selected drop points
    if (validatedData.selectedDropPoints && validatedData.selectedDropPoints.length > 0) {
      for (const dpName of validatedData.selectedDropPoints) {
        const dpConfig = transfer.dropPoints?.find((d: any) => d.name === dpName)
        if (dpConfig) {
          dropPointsSurcharge += dpConfig.additionalPrice || 0
        }
      }
    }
    
    const calculatedTotal = vehiclePrice + dropPointsSurcharge
    
    if (Math.abs(calculatedTotal - validatedData.totalPrice) > 1) {
      return { success: false, error: "Price mismatch. Please check selections and try again." }
    }

    // 4. Insert into Payload 'bookings' collection
    const booking = await payload.create({
      collection: 'bookings',
      data: {
        bookingType: {
          relationTo: 'transfers',
          value: validatedData.transferId,
        },
        selectedDate: new Date(validatedData.date).toISOString(),
        numberOfPax: {
          adults: validatedData.adults,
          children: validatedData.children,
        },
        flightDetails: {
          flightNumber: validatedData.flightNumber,
          arrivalTime: validatedData.arrivalTime,
          hotelZone: validatedData.hotelZone,
        },
        selectedVehicle: validatedData.selectedVehicle,
        selectedDropPoints: validatedData.selectedDropPoints.map((name: string) => ({ name })),
        transferNotes: validatedData.transferNotes,
        customerName: validatedData.guestName,
        customerEmail: validatedData.email,
        customerPhone: validatedData.phone,
        specialRequests: validatedData.specialRequests,
        totalPrice: calculatedTotal,
        status: 'new',
      },
    })

    // Revalidate transfers path
    revalidatePath("/transfers")

    return { 
      success: true, 
      bookingId: booking.id,
      message: "Your private transfer booking request has been received!" 
    }

  } catch (error: any) {
    console.error("Transfer Booking Error:", error)
    return { 
      success: false, 
      error: error.message || "An unexpected error occurred while processing your transfer booking." 
    }
  }
}
