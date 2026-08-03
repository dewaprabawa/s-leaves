"use server"

export type ReviewFormData = {
  tourId: string;
  authorName: string;
  rating: number;
  comment: string;
  visitDate?: string;
}

export async function submitReview(data: ReviewFormData) {
  try {
    return {
      success: true,
      review: {
        id: `REV-${Date.now()}`,
        authorName: data.authorName,
        rating: data.rating,
        comment: data.comment,
      }
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Failed to submit review."
    }
  }
}
