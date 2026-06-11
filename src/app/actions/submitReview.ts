"use server"

import { getPayload } from "@/lib/payload"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const reviewSchema = z.object({
  tourId: z.string().min(1, "Tour is required"),
  authorName: z.string().min(2, "Name must be at least 2 characters"),
  rating: z.number().min(1).max(5),
  comment: z.string().min(5, "Comment must be at least 5 characters"),
  visitDate: z.string().optional(),
})

export async function submitReview(data: {
  tourId: string
  authorName: string
  rating: number
  comment: string
  visitDate?: string
}) {
  try {
    const validatedData = reviewSchema.parse(data)
    
    const payload = await getPayload()
    if (!payload) {
      return { success: false, error: "Database connection failed. Please try again." }
    }

    // Check that the tour exists
    const tourExists = await payload.findByID({
      collection: 'tours',
      id: validatedData.tourId,
    })

    if (!tourExists) {
      return { success: false, error: "Associated tour not found." }
    }

    // Create a new pending review
    await payload.create({
      collection: 'reviews',
      data: {
        tour: validatedData.tourId,
        authorName: validatedData.authorName,
        rating: validatedData.rating,
        comment: validatedData.comment,
        status: 'pending', // Requires admin moderation
        visitDate: validatedData.visitDate ? new Date(validatedData.visitDate).toISOString() : undefined,
      }
    })

    // Revalidate the tour page cache
    revalidatePath(`/tours/${tourExists.slug}`)

    return { 
      success: true, 
      message: "Thank you! Your review has been submitted and is pending moderation." 
    }
  } catch (error: any) {
    console.error("Failed to submit review:", error)
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0]?.message || "Invalid review inputs." }
    }
    return { success: false, error: error.message || "An error occurred while submitting your review." }
  }
}
