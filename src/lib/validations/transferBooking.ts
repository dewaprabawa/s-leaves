import * as z from "zod"

export const transferBookingSchema = z.object({
  transferId: z.string().min(1, "Transfer ID is required"),
  transferTitle: z.string().min(1),
  transferSlug: z.string().min(1),
  date: z.string().min(1, "Please select a date"),
  adults: z.number().min(1, "At least 1 adult is required").max(10, "Maximum 10 passengers per booking"),
  children: z.number().min(0).max(10),
  guestName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number").max(20),
  flightNumber: z.string().optional(),
  arrivalTime: z.string().min(1, "Time is required"),
  hotelZone: z.string().min(1, "Drop-off hotel/zone is required"),
  selectedVehicle: z.string().min(1, "Please select a vehicle class"),
  selectedDropPoints: z.array(z.string()),
  transferNotes: z.string().max(1000).optional(),
  specialRequests: z.string().max(500).optional(),
  totalPrice: z.number().min(0)
})

export type TransferBookingFormData = z.infer<typeof transferBookingSchema>
