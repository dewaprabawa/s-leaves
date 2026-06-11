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
      <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 p-6 sm:p-8 rounded-3xl text-center space-y-4">
        <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        </div>
        <h4 className="font-bold text-lg text-gray-900 dark:text-white">Review Submitted!</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm mx-auto">
          {result.message}
        </p>
        <button
          onClick={() => setResult(null)}
          className="mt-2 text-xs font-bold text-emerald-650 hover:underline cursor-pointer"
        >
          Submit another review
        </button>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-gray-50 dark:bg-gray-900/30 p-6 sm:p-8 rounded-3xl border border-gray-200/60 dark:border-gray-800/80 space-y-5"
    >
      <div className="space-y-1.5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-emerald-500" /> Write a Review
        </h3>
        <p className="text-xs text-gray-450 dark:text-gray-400 leading-normal">
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
          <label className="block text-xs font-bold text-gray-750 dark:text-gray-300 ml-1">Your Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              required
              placeholder="e.g. Sarah J."
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Visit Date input */}
        <div className="space-y-1.5">
          <label className="block text-xs font-bold text-gray-750 dark:text-gray-300 ml-1">Date of Visit (Optional)</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="date"
              max={new Date().toISOString().split("T")[0]}
              value={visitDate}
              onChange={(e) => setVisitDate(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold rounded-xl bg-white dark:bg-gray-955 border border-gray-200 dark:border-gray-800 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none text-gray-900 dark:text-white cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Star Selector */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-gray-750 dark:text-gray-300 ml-1">Rating</label>
        <div className="flex items-center gap-1 bg-white dark:bg-gray-950 px-4 py-3 rounded-xl border border-gray-200/80 dark:border-gray-800 w-fit">
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
          <span className="text-xs font-black text-gray-700 dark:text-gray-300 ml-2 min-w-16">
            {rating === 5 ? "Excellent" : rating === 4 ? "Very Good" : rating === 3 ? "Average" : rating === 2 ? "Below Average" : "Poor"}
          </span>
        </div>
      </div>

      {/* Comments Area */}
      <div className="space-y-1.5">
        <label className="block text-xs font-bold text-gray-750 dark:text-gray-300 ml-1">Comments</label>
        <textarea
          required
          rows={4}
          placeholder="Describe your tour details, guides, itinerary tips..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-4 py-3 text-xs font-semibold rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none text-gray-900 dark:text-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !authorName.trim() || !comment.trim()}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
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
