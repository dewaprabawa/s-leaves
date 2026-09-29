"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import {
  ACTIVITY_MOODS,
  PICKUP_ACTIVITIES,
  PICKUP_AREAS,
  type ActivityMoodId,
  type PickupActivityId,
  type PickupAreaId,
} from "@/data/planners"
import { MOTORBIKE_DESTINATIONS } from "@/data/motorbikeTrip"
import { SITE_URL } from "@/lib/seo"
import {
  checkPickupRule,
  chooseActivity,
  formatPlannerIdr,
  quoteAtvPlanner,
  quoteCookingPlanner,
  quoteJeepPlanner,
  quoteMotorbikePlanner,
  type PlannerQuote,
} from "@/lib/plannerQuotes"
import { buildWhatsAppConsultationUrl } from "@/lib/whatsapp"

const fieldClass =
  "h-12 w-full rounded-xl border border-brand-green/15 bg-white px-4 text-sm text-brand-green outline-none focus:border-accent-gold"
const labelClass = "mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-brand-green-light"
const chipClass = (active: boolean) =>
  `rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
    active
      ? "bg-brand-green text-sand"
      : "border border-brand-green/15 bg-white text-brand-green-light hover:border-accent-gold/40"
  }`

function QuoteResult({
  quote,
  pagePath,
}: {
  quote: PlannerQuote
  pagePath: string
}) {
  return (
    <div className="planner-answer rounded-2xl border border-brand-green/10 bg-white p-5 shadow-sm">
      <p className="text-[11px] font-bold uppercase tracking-wider text-accent-gold-dark">Your estimate</p>
      <h3 className="mt-1 font-display text-2xl font-bold uppercase text-brand-green">{quote.headline}</h3>
      <ul className="mt-4 space-y-2 text-sm text-brand-green-light">
        {quote.lines.map((line) => (
          <li key={line.label} className="flex items-start justify-between gap-4">
            <span>{line.label}</span>
            <span className="shrink-0 font-semibold text-brand-green">{formatPlannerIdr(line.amount)}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-brand-green/10 pt-3 font-display text-3xl font-bold text-brand-green">
        {formatPlannerIdr(quote.total)}
      </p>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-brand-green-light">
        {quote.notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={buildWhatsAppConsultationUrl(quote.whatsappActivity, `${SITE_URL}${pagePath}`)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full btn-gold-shimmer px-6 text-xs font-bold uppercase tracking-wider"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp this estimate
        </a>
        <Link
          href={quote.tourHref}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-brand-green/15 px-6 text-xs font-bold uppercase tracking-wider text-brand-green hover:bg-brand-green hover:text-sand"
        >
          {quote.tourLabel} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function ErrorBox({ message }: { message: string }) {
  return (
    <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
      {message}
    </p>
  )
}

export function AtvPriceCalculator() {
  const [rideType, setRideType] = useState<"single" | "tandem">("single")
  const [quantity, setQuantity] = useState(2)
  const [pickup, setPickup] = useState(false)
  const quote = useMemo(
    () => quoteAtvPlanner({ rideType, quantity, pickup }),
    [rideType, quantity, pickup],
  )

  return (
    <div className="space-y-5">
      <div>
        <span className={labelClass}>Ride type</span>
        <div className="flex flex-wrap gap-2">
          <button type="button" className={chipClass(rideType === "single")} onClick={() => setRideType("single")}>
            Single ATV
          </button>
          <button type="button" className={chipClass(rideType === "tandem")} onClick={() => setRideType("tandem")}>
            Tandem ATV
          </button>
        </div>
      </div>
      <label className="block">
        <span className={labelClass}>{rideType === "tandem" ? "Tandem bikes" : "Riders"}</span>
        <input
          type="number"
          min={1}
          max={12}
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
          className={fieldClass}
        />
      </label>
      <label className="flex items-center gap-3 text-sm text-brand-green">
        <input
          type="checkbox"
          checked={pickup}
          onChange={(event) => setPickup(event.target.checked)}
          className="h-4 w-4 accent-brand-green"
        />
        Add hotel pickup (IDR 400,000 once)
      </label>
      {quote.ok ? <QuoteResult quote={quote} pagePath="/planners/atv-price-calculator" /> : <ErrorBox message={quote.error} />}
    </div>
  )
}

export function MotorbikePriceCalculator() {
  const [destinationIndex, setDestinationIndex] = useState(0)
  const [scooters, setScooters] = useState(2)
  const [southShuttle, setSouthShuttle] = useState(false)
  const quote = useMemo(
    () => quoteMotorbikePlanner({ destinationIndex, scooters, southShuttle }),
    [destinationIndex, scooters, southShuttle],
  )

  return (
    <div className="space-y-5">
      <label className="block">
        <span className={labelClass}>Destination</span>
        <select
          value={destinationIndex}
          onChange={(event) => setDestinationIndex(Number(event.target.value))}
          className={fieldClass}
        >
          {MOTORBIKE_DESTINATIONS.map((dest, index) => (
            <option key={dest.name} value={index}>
              {dest.name} — {formatPlannerIdr(dest.priceIdr)}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className={labelClass}>Scooters</span>
        <input
          type="number"
          min={1}
          max={10}
          value={scooters}
          onChange={(event) => setScooters(Number(event.target.value))}
          className={fieldClass}
        />
      </label>
      <label className="flex items-center gap-3 text-sm text-brand-green">
        <input
          type="checkbox"
          checked={southShuttle}
          onChange={(event) => setSouthShuttle(event.target.checked)}
          className="h-4 w-4 accent-brand-green"
        />
        Collect us from Canggu, Jimbaran, or Nusa Dua (IDR 550,000 once)
      </label>
      {quote.ok ? <QuoteResult quote={quote} pagePath="/planners/motorbike-tour-price" /> : <ErrorBox message={quote.error} />}
    </div>
  )
}

export function JeepPriceCalculator() {
  const [guests, setGuests] = useState(2)
  const [variant, setVariant] = useState<"sit-in" | "tracking">("sit-in")
  const [hotSpring, setHotSpring] = useState(false)
  const quote = useMemo(
    () => quoteJeepPlanner({ guests, variant, hotSpring }),
    [guests, variant, hotSpring],
  )

  return (
    <div className="space-y-5">
      <div>
        <span className={labelClass}>Jeep type</span>
        <div className="flex flex-wrap gap-2">
          <button type="button" className={chipClass(variant === "sit-in")} onClick={() => setVariant("sit-in")}>
            Sit-in (no hike)
          </button>
          <button type="button" className={chipClass(variant === "tracking")} onClick={() => setVariant("tracking")}>
            Tracking (jeep + walk)
          </button>
        </div>
      </div>
      <label className="block">
        <span className={labelClass}>Guests (minimum 2)</span>
        <input
          type="number"
          min={2}
          max={12}
          value={guests}
          onChange={(event) => setGuests(Number(event.target.value))}
          className={fieldClass}
        />
      </label>
      <label className="flex items-center gap-3 text-sm text-brand-green">
        <input
          type="checkbox"
          checked={hotSpring}
          onChange={(event) => setHotSpring(event.target.checked)}
          className="h-4 w-4 accent-brand-green"
        />
        Add Batur hot spring (IDR 150,000 pp, ticket included)
      </label>
      {quote.ok ? <QuoteResult quote={quote} pagePath="/planners/batur-jeep-price" /> : <ErrorBox message={quote.error} />}
    </div>
  )
}

export function CookingPriceCalculator() {
  const [style, setStyle] = useState<"shared" | "private">("shared")
  const [guests, setGuests] = useState(2)
  const quote = useMemo(() => quoteCookingPlanner({ style, guests }), [style, guests])

  return (
    <div className="space-y-5">
      <div>
        <span className={labelClass}>Class type</span>
        <div className="flex flex-wrap gap-2">
          <button type="button" className={chipClass(style === "shared")} onClick={() => setStyle("shared")}>
            Shared promo
          </button>
          <button type="button" className={chipClass(style === "private")} onClick={() => setStyle("private")}>
            Private kitchen
          </button>
        </div>
      </div>
      <label className="block">
        <span className={labelClass}>Guests</span>
        <input
          type="number"
          min={1}
          max={12}
          value={guests}
          onChange={(event) => setGuests(Number(event.target.value))}
          className={fieldClass}
        />
      </label>
      {quote.ok ? <QuoteResult quote={quote} pagePath="/planners/cooking-class-price" /> : <ErrorBox message={quote.error} />}
    </div>
  )
}

export function PickupChecker() {
  const [activity, setActivity] = useState<PickupActivityId>("atv")
  const [area, setArea] = useState<PickupAreaId>("ubud")
  const result = useMemo(() => checkPickupRule({ activity, area }), [activity, area])

  return (
    <div className="space-y-5">
      <label className="block">
        <span className={labelClass}>Activity</span>
        <select
          value={activity}
          onChange={(event) => setActivity(event.target.value as PickupActivityId)}
          className={fieldClass}
        >
          {PICKUP_ACTIVITIES.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className={labelClass}>Hotel area</span>
        <select
          value={area}
          onChange={(event) => setArea(event.target.value as PickupAreaId)}
          className={fieldClass}
        >
          {PICKUP_AREAS.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </label>
      <div className="planner-answer rounded-2xl border border-brand-green/10 bg-white p-5 shadow-sm">
        <p className="text-[11px] font-bold uppercase tracking-wider text-accent-gold-dark">
          {result.included ? "Pickup included" : "Pickup not automatic"}
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold uppercase text-brand-green">{result.headline}</h3>
        {result.feeIdr !== null ? (
          <p className="mt-3 font-display text-3xl font-bold text-brand-green">{formatPlannerIdr(result.feeIdr)}</p>
        ) : null}
        <p className="mt-3 text-sm leading-relaxed text-brand-green-light">{result.detail}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={buildWhatsAppConsultationUrl(result.whatsappActivity, `${SITE_URL}/planners/hotel-pickup-checker`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full btn-gold-shimmer px-6 text-xs font-bold uppercase tracking-wider"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp the hotel pin
          </a>
          <Link
            href={result.tourHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-brand-green/15 px-6 text-xs font-bold uppercase tracking-wider text-brand-green hover:bg-brand-green hover:text-sand"
          >
            {result.tourLabel} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ActivityChooser() {
  const [mood, setMood] = useState<ActivityMoodId>("atv-mud")
  const [guests, setGuests] = useState(2)
  const choice = useMemo(() => chooseActivity(mood), [mood])

  return (
    <div className="space-y-5">
      <div>
        <span className={labelClass}>What kind of day?</span>
        <div className="flex flex-wrap gap-2">
          {ACTIVITY_MOODS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={chipClass(mood === item.id)}
              onClick={() => setMood(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <label className="block">
        <span className={labelClass}>Guests</span>
        <input
          type="number"
          min={1}
          max={12}
          value={guests}
          onChange={(event) => setGuests(Number(event.target.value))}
          className={fieldClass}
        />
      </label>
      <div className="planner-answer rounded-2xl border border-brand-green/10 bg-white p-5 shadow-sm">
        <p className="text-[11px] font-bold uppercase tracking-wider text-accent-gold-dark">
          Match for {guests} guest{guests === 1 ? "" : "s"}
        </p>
        <h3 className="mt-1 font-display text-2xl font-bold uppercase text-brand-green">{choice.title}</h3>
        <p className="mt-3 font-display text-3xl font-bold text-brand-green">
          From {formatPlannerIdr(choice.fromPrice)}
        </p>
        <p className="mt-2 text-sm font-semibold text-brand-green">{choice.pickup}</p>
        <p className="mt-3 text-sm leading-relaxed text-brand-green-light">{choice.why}</p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={buildWhatsAppConsultationUrl(`${choice.title} for ${guests} guests`, `${SITE_URL}/planners/which-bali-activity`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full btn-gold-shimmer px-6 text-xs font-bold uppercase tracking-wider"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp this match
          </a>
          <Link
            href={choice.tourHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-brand-green/15 px-6 text-xs font-bold uppercase tracking-wider text-brand-green hover:bg-brand-green hover:text-sand"
          >
            Open the tour page <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Link href={choice.blogHref} className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent-gold-dark hover:underline">
          {choice.blogLabel} <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}

export function PlannerWidget({ slug }: { slug: string }) {
  switch (slug) {
    case "atv-price-calculator":
      return <AtvPriceCalculator />
    case "motorbike-tour-price":
      return <MotorbikePriceCalculator />
    case "batur-jeep-price":
      return <JeepPriceCalculator />
    case "cooking-class-price":
      return <CookingPriceCalculator />
    case "hotel-pickup-checker":
      return <PickupChecker />
    case "which-bali-activity":
      return <ActivityChooser />
    default:
      return null
  }
}
