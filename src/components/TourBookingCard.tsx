"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Clock, ExternalLink, MessageCircle } from "lucide-react"
import { BookingPopup, type TourConfig } from "@/components/BookingPopup"
import { BOOKABLE_TOURS } from "@/components/BookNowButton"
import PromoPrice from "@/components/PromoPrice"
import { getListPrice, getPromoListPrice } from "@/lib/pricing"
import { formatIdr, buildWhatsAppConsultationUrl } from "@/lib/whatsapp"
import { SITE_URL } from "@/lib/seo"
import {
  COOKING_CLASS_PRICE_IDR,
  COOKING_CLASS_STANDARD_PRICE_IDR,
} from "@/data/cultureSales"

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

const SLUG_TO_ACTIVITY_ID: Record<string, string> = {
  "bali-atv-adventure": "single-atv",
  "whitewater-rafting": "rafting",
  "canyon-tubing": "canyon-tubing",
  "ubud-ricefield-cycling-tour": "cycling",
  "batur-sunrise-jeep-tour": "jeep-sunrise",
}

function getPromoPricesForSlug(tourSlug: string, fallbackBase: number) {
  if (tourSlug === "balinese-cooking-class") {
    return {
      promoPrice: COOKING_CLASS_PRICE_IDR,
      standardPrice: COOKING_CLASS_STANDARD_PRICE_IDR,
      tierLabel: "Shared class promo / person",
    }
  }
  const activityId = SLUG_TO_ACTIVITY_ID[tourSlug]
  if (!activityId) {
    return { promoPrice: fallbackBase, standardPrice: fallbackBase, tierLabel: undefined }
  }
  return {
    promoPrice: getPromoListPrice(activityId),
    standardPrice: getListPrice(activityId),
    tierLabel: "3+ group rate — book more, save more",
  }
}

const SLUG_TO_BOOKABLE_IDS: Record<string, string[]> = {
  "bali-atv-adventure": ["single-atv", "tandem-atv"],
  "whitewater-rafting": ["rafting"],
  "canyon-tubing": ["canyon-tubing"],
  "ubud-ricefield-cycling-tour": ["cycling"],
  "batur-sunrise-jeep-tour": ["jeep-sunrise"],
}

function buildTourConfigs(props: TourBookingCardProps): TourConfig[] {
  const mapped = SLUG_TO_BOOKABLE_IDS[props.tourSlug]
  if (mapped) {
    const configs = BOOKABLE_TOURS.filter((t) => mapped.includes(t.id))
    if (configs.length) return configs
  }

  const isPrivateDayTour =
    props.tourSlug === "full-day-ubud-tour" ||
    props.tourSlug === "half-day-ubud-tanah-lot-tour"

  if (props.activityOptions?.length) {
    return props.activityOptions.map((opt, index) => {
      const isMorning = /morning/i.test(opt.name)
      const isPrivate = /private/i.test(opt.name)
      return {
        id: `${props.tourId}-opt-${index}`,
        title: opt.name,
        times: isMorning ? ["08:30"] : isPrivate ? ["08:30", "13:30"] : ["13:30"],
        adultPrice: props.basePrice + opt.priceDiff,
        kidPrice: props.childPrice ?? null,
        minPax: /tandem/i.test(opt.name) ? 2 : 1,
        getYourGuideUrl: props.getYourGuideUrl,
        freeUbudPickup: props.tourSlug === "balinese-cooking-class",
      }
    })
  }

  return [
    {
      id: props.tourId,
      title: props.title,
      times:
        props.tourSlug === "balinese-cooking-class"
          ? ["08:30", "13:30"]
          : DEFAULT_TIMES,
      adultPrice: props.basePrice,
      kidPrice: props.childPrice ?? null,
      minPax: 1,
      getYourGuideUrl: props.getYourGuideUrl,
      freeUbudPickup: props.tourSlug === "balinese-cooking-class",
      pickupIncluded: isPrivateDayTour,
    },
  ]
}

export default function TourBookingCard(props: TourBookingCardProps) {
  const [open, setOpen] = useState(false)
  const configs = buildTourConfigs(props)
  const primary = configs[0]
  const { promoPrice, standardPrice, tierLabel } = getPromoPricesForSlug(props.tourSlug, props.basePrice)
  const hasPromo = standardPrice > promoPrice
  const consultationUrl = buildWhatsAppConsultationUrl(
    props.title,
    `${SITE_URL}/tours/${props.tourSlug}`,
  )

  // Nudge the floating AI Assistant button above our mobile sticky CTA so they don't overlap
  useEffect(() => {
    document.documentElement.classList.add("has-mobile-book-bar")
    return () => {
      document.documentElement.classList.remove("has-mobile-book-bar")
    }
  }, [])

  return (
    <>
      {/* Mobile-only sticky CTA so guests can book or consult without scrolling */}
      <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-brand-green/10 bg-white/95 backdrop-blur px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] [padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]">
        <div className="mx-auto flex max-w-7xl items-center gap-2">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium text-brand-green-light leading-none">From</p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg font-bold text-brand-green leading-tight truncate">
                {formatIdr(promoPrice)}
              </span>
              {hasPromo ? (
                <span className="text-xs text-brand-green-light line-through opacity-70 shrink-0">
                  {formatIdr(standardPrice)}
                </span>
              ) : null}
            </div>
          </div>
          <a
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center justify-center gap-1.5 h-11 rounded-full border-2 border-brand-green bg-white px-3 font-bold text-xs uppercase tracking-wider text-brand-green"
            aria-label={`WhatsApp consultation about ${props.title}`}
          >
            <MessageCircle className="w-4 h-4" />
            Consult
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex shrink-0 items-center justify-center gap-1.5 h-11 rounded-full btn-gold-shimmer px-4 font-bold text-xs uppercase tracking-wider"
          >
            Book <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-brand-green/10 p-6 md:p-8 space-y-6">
        {props.getYourGuideUrl && (
          <a
            href={props.getYourGuideUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-accent-gold hover:bg-accent-gold-dark text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            Book via GetYourGuide <ExternalLink className="w-4 h-4" />
          </a>
        )}

        <div>
          <p className="text-sm text-brand-green-light font-medium mb-1">From</p>
          <PromoPrice
            price={promoPrice}
            originalPrice={standardPrice}
            variant="card"
            from
            tierLabel={tierLabel}
          />
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
          Tap below to enter your name, age, adult/child, location, and activity — then send everything to WhatsApp with the price included. Or start a free WhatsApp consultation if you still have questions.
        </p>

        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full flex items-center justify-center gap-2 h-12 rounded-full btn-gold-shimmer font-bold text-sm uppercase tracking-wider"
          >
            Book This Experience <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={consultationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 h-12 rounded-full border-2 border-brand-green bg-white font-bold text-sm uppercase tracking-wider text-brand-green hover:bg-brand-green/5 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Consultation
          </a>
        </div>
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
