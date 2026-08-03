"use server"

import { reviewSchema, type ReviewFormData } from "@/lib/validations/review"

export async function submitReview(data: ReviewFormData) {
  try {
    const validatedData = reviewSchema.parse(data)
    return {
      success: true,
      review: {
        id: `REV-${Date.now()}`,
        authorName: validatedData.authorName,
        rating: validatedData.rating,
        comment: validatedData.comment,
      }
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Failed to submit review."
    }
  }
}
