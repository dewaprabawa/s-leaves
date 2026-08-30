import * as z from "zod"

export const bookingSchema = z.object({
  tourId: z.string().min(1, "Tour ID is required"),
  tourTitle: z.string().min(1),
  tourSlug: z.string().min(1),
  date: z.string().min(1, "Please select a date"),
  adults: z.number().min(1, "At least 1 adult is required").max(10, "Maximum 10 adults per booking"),
  children: z.number().min(0).max(10),
  infants: z.number().min(0).max(10),
  guestName: z.string().min(2, "Name must be at least 2 characters").max(100),
  guestAge: z.number({ error: "Please enter your age" }).min(1, "Please enter your age").max(120),
  guestType: z.enum(["Adult", "Child"]),
  childrenAges: z.string().max(100).optional(),
  pickupLocation: z.string().min(2, "Please enter your hotel or pickup location").max(200),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number").max(20),
  specialRequests: z.string().max(500).optional(),
  selectedActivityOption: z.string().optional(),
  selectedAddons: z.array(z.string()),
  totalPrice: z.number().min(0)
})

export type BookingFormData = z.infer<typeof bookingSchema>
