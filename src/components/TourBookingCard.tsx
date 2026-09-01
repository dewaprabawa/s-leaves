"use client"

import { useState } from "react"
import { ArrowRight, Clock, ExternalLink } from "lucide-react"
import { BookingPopup, type TourConfig } from "@/components/BookingPopup"
import { BOOKABLE_TOURS } from "@/components/BookNowButton"
import { formatIdr } from "@/lib/whatsapp"

const DEFAULT_TIMES = ["08:00", "09:00", "10:00", "13:00", "14:00"]

export type TourBookingCardProps = {
  tourId: string
  tourSlug: string
  title: string
  duration: string
  basePrice: number
  childPrice?: number
  getYourGuideUrl?: string
  activityOptions?: { name: string; priceDiff: number; description?: string }[]
}

const SLUG_TO_BOOKABLE_IDS: Record<string, string[]> = {
  "bali-atv-adventure": ["single-atv", "tandem-atv"],
  "whitewater-rafting": ["rafting"],
  "canyon-tubing": ["canyon-tubing"],
  "ubud-ricefield-cycling-tour": ["cycling"],
}

function buildTourConfigs(props: TourBookingCardProps): TourConfig[] {
  const mapped = SLUG_TO_BOOKABLE_IDS[props.tourSlug]
  if (mapped) {
    const configs = BOOKABLE_TOURS.filter((t) => mapped.includes(t.id))
    if (configs.length) return configs
  }

  if (props.activityOptions?.length) {
    return props.activityOptions.map((opt, index) => ({
      id: `${props.tourId}-opt-${index}`,
      title: opt.name,
      times: DEFAULT_TIMES,
      adultPrice: props.basePrice + opt.priceDiff,
      kidPrice: props.childPrice ?? null,
      minPax: /tandem/i.test(opt.name) ? 2 : 1,
      getYourGuideUrl: props.getYourGuideUrl,
    }))
  }

  return [
    {
      id: props.tourId,
      title: props.title,
      times: DEFAULT_TIMES,
      adultPrice: props.basePrice,
      kidPrice: props.childPrice ?? null,
      minPax: 1,
      getYourGuideUrl: props.getYourGuideUrl,
    },
  ]
}

export default function TourBookingCard(props: TourBookingCardProps) {
  const [open, setOpen] = useState(false)
  const configs = buildTourConfigs(props)
  const primary = configs[0]

  return (
    <>
      <div className="bg-white rounded-3xl shadow-xl border border-brand-green/10 p-6 md:p-8 space-y-6">
        {props.getYourGuideUrl && (
          <a
            href={props.getYourGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-[#FF5533] hover:bg-[#e64a2c] text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            Book via GetYourGuide <ExternalLink className="w-4 h-4" />
          </a>
        )}

        <div>
          <p className="text-sm text-brand-green-light font-medium mb-1">From</p>
          <p className="text-3xl font-display font-bold text-brand-green">
            {formatIdr(props.basePrice)}
          </p>
          {props.childPrice ? (
            <p className="text-sm text-brand-green-light mt-1">
              Child from {formatIdr(props.childPrice)}
            </p>
          ) : null}
        </div>

        <div className="flex items-center gap-2 text-sm text-brand-green-light">
          <Clock className="w-4 h-4 text-brand-green shrink-0" />
          <span>{props.duration}</span>
        </div>

        <p className="text-xs text-brand-green-light leading-relaxed">
          Tap below to enter your name, age, adult/child, location, and activity — then send everything to WhatsApp with the price included.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-brand-green text-sand font-bold text-sm uppercase tracking-wider hover:bg-brand-green-light transition-colors"
        >
          Book This Adventure <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <BookingPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        tour={primary}
        tourOptions={configs.length > 1 ? configs : undefined}
      />
    </>
  )
}
