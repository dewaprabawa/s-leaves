"use server"

import { bookingSchema, type BookingFormData } from "@/lib/validations/booking"

export async function checkAvailability(tourId: string, dateStr: string) {
  return {
    remainingSpots: 15,
    isSoldOut: false,
    maxCapacity: 20,
  }
}

export async function submitBooking(data: BookingFormData) {
  try {
    const validatedData = bookingSchema.parse(data)
    
    // Simulate successful booking confirmation
    return {
      success: true,
      booking: {
        id: `BK-${Date.now()}`,
        status: 'confirmed',
        customerName: validatedData.guestName,
        customerEmail: validatedData.email,
        date: validatedData.date,
        totalPrice: validatedData.totalPrice || 50,
      }
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Failed to submit booking."
    }
  }
}
