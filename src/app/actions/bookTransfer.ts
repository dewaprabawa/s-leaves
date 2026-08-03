"use server"

export async function submitTransferBooking(data: any) {
  try {
    return {
      success: true,
      booking: {
        id: `TR-${Date.now()}`,
        status: 'confirmed',
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        pickupDate: data.pickupDate,
        totalPrice: data.totalPrice || 35,
      }
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Failed to submit transfer booking."
    }
  }
}
