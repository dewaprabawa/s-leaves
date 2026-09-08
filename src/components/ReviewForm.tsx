"use client"

import React, { useState } from "react"
import { submitReview } from "@/app/actions/submitReview"
import { Star, Loader2, CheckCircle2, MessageSquare, User, Calendar } from "lucide-react"

type Props = {
  tourId: string
}

export default function ReviewForm({ tourId }: Props) {
  const [authorName, setAuthorName] = useState("")
  const [rating, setRating] = useState<number>(5)
  const [hoverRating, setHoverRating] = useState<number | null>(null)
  const [visitDate, setVisitDate] = useState("")
  const [comment, setComment] = useState("")
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; error?: string; message?: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!authorName.trim() || !comment.trim()) return

    setIsSubmitting(true)
    setResult(null)

    try {
      const res = await submitReview({
        tourId,
        authorName: authorName.trim(),
        rating,
        comment: comment.trim(),
        visitDate: visitDate || undefined
      })
      setResult(res)
      if (res.success) {
        setAuthorName("")
        setRating(5)
        setVisitDate("")
        setComment("")
      }
    } catch (err) {
      setResult({ success: false, error: "Network error. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (result?.success) {
    return (
      <div className="bg-accent-gold/10 border border-accent-gold/20 p-6 sm:p-8 rounded-3xl text-center space-y-4">
        <div className="w-12 h-12 bg-accent-gold/15 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6 text-accent-gold-dark" />
        </div>
        <h4 className="font-bold text-lg text-brand-green">Review Submitted!</h4>
        <p className="text-sm text-brand-green-light max-w-sm mx-auto">
          {result.message}
        </p>
        <button
          onClick={() => setResult(null)}
          className="mt-2 text-xs font-bold text-accent-gold-dark hover:underline cursor-pointer"
        >
          Submit another review
        </button>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-sand p-6 sm:p-8 rounded-3xl border border-brand-green/10 space-y-5"
    >
      <div className="space-y-1.5">
        <h3 className="text-lg font-bold text-brand-green flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-accent-gold" /> Write a Review
        </h3>
        <p className="text-xs text-gray-450 dark:text-brand-green-light leading-normal">
          Share your experience with other travelers. All submitted reviews are subject to standard moderation.
        </p>
      </div>

      {result?.error && (
        <div className="p-3 text-xs font-semibold bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 rounded-xl border border-red-200/30">
          {result.error}
        </div>
      )}

      {/* Grid Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name input */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-brand-green ml-1">Your Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green-light" />
            <input
              type="text"
              required
              placeholder="e.g. Sarah J."
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl bg-sand border border-brand-green/15 focus:border-accent-gold focus:ring-4 focus:ring-accent-gold/15 outline-none text-brand-green"
            />
          </div>
        </div>

        {/* Visit Date input */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-brand-green ml-1">Date of Visit (Optional)</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green-light" />
            <input
              type="date"
              max={new Date().toISOString().split("T")[0]}
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl bg-white dark:bg-gray-955 border border-brand-green/15 focus:border-accent-gold focus:ring-4 focus:ring-accent-gold/15 outline-none text-brand-green cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Star Selector */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-brand-green ml-1">Rating</label>
        <div className="flex items-center gap-1 bg-sand px-4 py-3 rounded-xl border border-gray-200/80 dark:border-gray-800 w-fit">
          {[1, 2, 3, 4, 5].map((val) => {
            const currentRating = hoverRating !== null ? hoverRating : rating
            const isActive = val <= currentRating
            return (
              <button
                key={val}
                type="button"
                onClick={() => setRating(val)}
                onMouseEnter={() => setHoverRating(val)}
                onMouseLeave={() => setHoverRating(null)}
                className="p-0.5 text-gray-200 dark:text-gray-800 hover:scale-110 active:scale-95 transition-all cursor-pointer"
                aria-label={`Rate ${val} stars`}
              >
                <Star 
                  className={`w-6 h-6 ${
                    isActive 
                      ? "text-amber-500 fill-amber-500" 
                      : "text-gray-200 dark:text-gray-800"
                  }`} 
                />
              </button>
            )
          })}
          <span className="text-xs font-black text-brand-green ml-2 min-w-16">
            {rating === 5 ? "Excellent" : rating === 4 ? "Very Good" : rating === 3 ? "Average" : rating === 2 ? "Below Average" : "Poor"}
          </span>
        </div>
      </div>

      {/* Comments Area */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-brand-green ml-1">Comments</label>
        <textarea
          required
          rows={4}
          placeholder="Describe your tour details, guides, itinerary tips..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-4 py-3 text-xs font-semibold rounded-xl bg-sand border border-brand-green/15 focus:border-accent-gold focus:ring-4 focus:ring-accent-gold/15 outline-none text-brand-green resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !authorName.trim() || !comment.trim()}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-accent-gold hover:bg-accent-gold-dark disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-accent-gold/15 hover:shadow-accent-gold/25 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
      >
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
        ) : (
          "Submit Review"
        )}
      </button>

    </form>
  )
}
