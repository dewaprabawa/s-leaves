"use client"

import Link from "next/link"
import { ArrowLeft, Check, Clock, ExternalLink, X } from "lucide-react"
import { getTourBySlug } from "@/data/tours"
import { formatIdr } from "@/lib/whatsapp"

type Props = {
  tourSlug: string
  onClose: () => void
}

export default function BookingTourDetailPanel({ tourSlug, onClose }: Props) {
  const tour = getTourBySlug(tourSlug)

  if (!tour) return null

  return (
    <div className="absolute inset-0 z-[260] flex flex-col bg-sand rounded-3xl overflow-hidden">
      <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-4 py-3 md:px-6 md:py-4 bg-sand/95 backdrop-blur border-b border-brand-green/10">
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to booking
        </button>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white hover:bg-gray-100 text-brand-green border border-brand-green/10 shadow-sm"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-sm text-brand-green-light">
            <span className="inline-flex rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-green">
              {tour.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-green" />
              {tour.duration}
            </span>
            <span className="font-bold text-brand-green">From {formatIdr(tour.basePrice)}</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-green uppercase leading-tight">
            {tour.title}
          </h3>
          <p className="text-sm md:text-base text-brand-green-light leading-relaxed">
            {tour.shortDescription}
          </p>
        </div>

        {tour.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tour.highlights.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-green border border-brand-green/10"
              >
                <Check className="w-3.5 h-3.5 text-accent-gold-dark" />
                {highlight}
              </span>
            ))}
          </div>
        )}

        {tour.itinerary.length > 0 && (
          <section className="rounded-2xl border border-brand-green/10 bg-white p-4 md:p-5 space-y-4">
            <h4 className="font-display text-lg font-bold text-brand-green uppercase">Itinerary</h4>
            <ol className="space-y-3">
              {tour.itinerary.map((item, index) => (
                <li key={item.id} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green text-sand text-xs font-bold">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-brand-green">{item.title}</p>
                    <p className="text-xs text-brand-green-light leading-relaxed mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section className="rounded-2xl border border-brand-green/10 bg-white p-4 md:p-5 space-y-3">
          <h4 className="font-display text-lg font-bold text-brand-green uppercase">Included</h4>
          <ul className="space-y-2">
            {tour.included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-green-light">
                <Check className="w-4 h-4 text-accent-gold-dark shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <Link
          href={`/tours/${tour.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
        >
          Open full tour page <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
