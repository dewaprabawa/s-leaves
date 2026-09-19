"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Clock3,
  MapPin,
  MessageCircle,
  Search,
  Star,
} from "lucide-react"
import {
  TOURS,
  TOUR_CATEGORY_LABELS,
  getTourCategoryLabel,
  type Tour,
  type TourCategoryId,
} from "@/data/tours"
import { COOKING_GEO_ENTITY } from "@/data/cookingGeo"
import { CONTACT_WHATSAPP_URL } from "@/lib/contact"
import { buildWhatsAppConsultationUrl, formatIdr } from "@/lib/whatsapp"
import { SITE_URL } from "@/lib/seo"

/** Preferred display order — only categories with at least one tour are shown */
const CATEGORY_ORDER: TourCategoryId[] = ["food", "village", "adventure", "day-tour", "culture"]

function matchesQuery(tour: Tour, query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const haystack = [
    tour.title,
    tour.shortDescription,
    tour.area ?? "",
    getTourCategoryLabel(tour.category),
  ]
    .join(" ")
    .toLowerCase()
  return q.split(/\s+/).filter(Boolean).every((term) => haystack.includes(term))
}

function ExperienceGridCard({ tour }: { tour: Tour }) {
  const isCookingClass = tour.slug === "balinese-cooking-class"

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-green/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <Link href={`/tours/${tour.slug}`} className="relative block aspect-[4/3] w-full overflow-hidden bg-sand">
        <Image
          src={tour.heroImage.url}
          alt={tour.heroImage.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <a
        href={buildWhatsAppConsultationUrl(tour.title, `${SITE_URL}/tours/${tour.slug}`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ask about ${tour.title} on WhatsApp`}
        className="absolute right-2.5 top-2.5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#25D366] shadow-md transition-transform hover:scale-110"
      >
        <MessageCircle className="h-4.5 w-4.5" fill="currentColor" strokeWidth={0} />
      </a>

      <Link href={`/tours/${tour.slug}`} className="flex flex-1 flex-col gap-1.5 p-3.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold-dark">
            {getTourCategoryLabel(tour.category)}
          </span>
          {isCookingClass ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-green">
              <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
              {COOKING_GEO_ENTITY.ratingValue.toFixed(1)}
              <span className="text-brand-green-light/70">
                ({COOKING_GEO_ENTITY.reviewCount}+)
              </span>
            </span>
          ) : null}
        </div>

        <h3 className="line-clamp-2 font-bold leading-snug text-brand-green">{tour.title}</h3>

        {tour.area ? (
          <span className="inline-flex items-center gap-1 text-xs text-brand-green-light">
            <MapPin className="h-3.5 w-3.5 text-brand-green-light shrink-0" />
            {tour.area}
          </span>
        ) : null}

        <span className="inline-flex items-center gap-1 text-xs text-brand-green-light">
          <Clock3 className="h-3.5 w-3.5 shrink-0" />
          {tour.duration}
        </span>

        <div className="mt-auto pt-2 border-t border-brand-green/8">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-green-light">
            From
          </span>
          <span className="font-display text-lg font-bold text-brand-green">
            {formatIdr(tour.basePrice)}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default function ExperiencesCatalogClient() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<TourCategoryId | "all">("all")

  // Nudge the floating AI Assistant button above our mobile sticky CTA so they don't overlap
  useEffect(() => {
    document.documentElement.classList.add("has-mobile-book-bar")
    return () => {
      document.documentElement.classList.remove("has-mobile-book-bar")
    }
  }, [])

  const categories = useMemo(
    () => CATEGORY_ORDER.filter((id) => TOURS.some((tour) => tour.category === id)),
    [],
  )

  const filteredTours = useMemo(() => {
    return TOURS.filter((tour) => {
      if (category !== "all" && tour.category !== category) return false
      return matchesQuery(tour, query)
    })
  }, [query, category])

  const hasFilters = query.trim().length > 0 || category !== "all"

  return (
    <div className="space-y-6 pb-20 lg:pb-0">
      {/* Mobile-only sticky CTA so ad traffic can chat instantly without scrolling */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-brand-green/10 bg-white/95 backdrop-blur px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={CONTACT_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex h-12 w-full max-w-7xl items-center justify-center gap-2 rounded-full btn-gold-shimmer px-6 font-bold text-sm uppercase tracking-wider"
        >
          <MessageCircle className="h-4 w-4" /> Chat on WhatsApp — no payment to inquire
        </a>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-green-light" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cooking class, ATV, cycling, jeep tour…"
          autoComplete="off"
          className="h-12 w-full rounded-full border border-brand-green/15 bg-white pl-11 pr-4 text-sm text-brand-green placeholder:text-brand-green-light/70 shadow-sm outline-none transition-colors focus:border-accent-gold"
        />
      </div>

      {/* Category chips */}
      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
            category === "all"
              ? "bg-brand-green text-sand"
              : "bg-white text-brand-green-light border border-brand-green/15 hover:border-accent-gold/40"
          }`}
        >
          All
        </button>
        {categories.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setCategory(id)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
              category === id
                ? "bg-brand-green text-sand"
                : "bg-white text-brand-green-light border border-brand-green/15 hover:border-accent-gold/40"
            }`}
          >
            {TOUR_CATEGORY_LABELS[id]}
          </button>
        ))}
      </div>

      {/* Result count */}
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-brand-green-light">
          <span className="text-brand-green">{filteredTours.length}</span>{" "}
          {filteredTours.length === 1 ? "experience" : "experiences"}
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setCategory("all")
            }}
            className="text-xs font-bold uppercase tracking-wide text-accent-gold-dark hover:underline"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      {/* Grid */}
      {filteredTours.length === 0 ? (
        <div className="rounded-2xl border border-brand-green/10 bg-white py-16 text-center shadow-sm">
          <p className="font-bold text-brand-green">No experiences match your search</p>
          <p className="mt-2 text-sm text-brand-green-light">
            Try a different keyword, or message us directly on WhatsApp.
          </p>
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-xs font-bold uppercase tracking-wider text-sand"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4">
          {filteredTours.map((tour) => (
            <ExperienceGridCard key={tour.id} tour={tour} />
          ))}
        </div>
      )}

      <div className="pt-2 text-center">
        <Link
          href="/book"
          className="inline-flex items-center gap-2 rounded-full border-2 border-brand-green/15 px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-green transition-colors hover:bg-brand-green hover:text-sand"
        >
          Open full booking &amp; checkout page <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
