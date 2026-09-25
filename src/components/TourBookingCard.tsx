"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Car, Clock, ExternalLink, MapPin, MessageCircle } from "lucide-react"
import { BookingPopup, type TourConfig } from "@/components/BookingPopup"
import { BOOKABLE_TOURS } from "@/components/BookNowButton"
import PromoPrice from "@/components/PromoPrice"
import { getListPrice, getPromoListPrice } from "@/lib/pricing"
import { formatIdr, buildWhatsAppConsultationUrl } from "@/lib/whatsapp"
import { SITE_URL } from "@/lib/seo"
import { buildGirlsTripWhatsAppUrl, GIRLS_TRIP_SLUG } from "@/data/girlsTrip"
import {
  COOKING_CLASS_PRICE_IDR,
  COOKING_CLASS_PRIVATE_COUPLE_IDR,
  COOKING_CLASS_PRIVATE_SOLO_IDR,
  COOKING_CLASS_STANDARD_PRICE_IDR,
} from "@/data/cultureSales"
import { BALI_SAFARI_PRICES, BALI_SAFARI_SLUG } from "@/data/parkWorkshopTours"

const DEFAULT_TIMES = ["08:00", "09:00", "10:00", "13:00", "14:00"]

export type TourBookingCardProps = {
  tourId: string
  tourSlug: string
  title: string
  duration: string
  pickup?: string
  venue?: string
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
  "swing-heaven-bali": "swing-heaven",
}

function getPromoPricesForSlug(tourSlug: string, fallbackBase: number) {
  if (tourSlug === "balinese-cooking-class") {
    return {
      promoPrice: COOKING_CLASS_PRICE_IDR,
      standardPrice: COOKING_CLASS_STANDARD_PRICE_IDR,
      tierLabel: "Shared class promo / person",
    }
  }
  // ATV SERP / FAQ lead with the 1-rider rate. Do not show the 3+ 700K
  // tier as a "from" promo — it reads as a discount vs IDR 750K.
  if (tourSlug === "bali-atv-adventure") {
    return {
      promoPrice: fallbackBase,
      standardPrice: fallbackBase,
      tierLabel: undefined,
    }
  }
  // Jeep min is 2. Do not show the 3+ 750K tier as a "from" promo —
  // couples read that as bait vs the bookable 2-pax IDR 950K.
  if (tourSlug === "batur-sunrise-jeep-tour") {
    return {
      promoPrice: fallbackBase,
      standardPrice: fallbackBase,
      tierLabel: "Private · min 2 guests · 2-pax rate",
    }
  }
  const activityId = SLUG_TO_ACTIVITY_ID[tourSlug]
  if (tourSlug === GIRLS_TRIP_SLUG) {
    return {
      promoPrice: fallbackBase,
      standardPrice: fallbackBase,
      tierLabel: "Per private car-day · HiAce quoted for 6",
    }
  }
  if (!activityId) {
    return { promoPrice: fallbackBase, standardPrice: fallbackBase, tierLabel: undefined }
  }
  const twoPlusDiscount = activityId === "rafting" || activityId === "canyon-tubing"
  return {
    promoPrice: getPromoListPrice(activityId),
    standardPrice: getListPrice(activityId),
    tierLabel: twoPlusDiscount
      ? "2+ discount — IDR 450,000 per person"
      : activityId === "jeep-sunrise"
        ? "Private · min 2 guests · 3+ group rate"
        : "3+ group rate — book more, save more",
  }
}

const SLUG_TO_BOOKABLE_IDS: Record<string, string[]> = {
  "bali-atv-adventure": ["single-atv", "tandem-atv"],
  "whitewater-rafting": ["rafting"],
  "canyon-tubing": ["canyon-tubing"],
  "ubud-ricefield-cycling-tour": ["cycling"],
  "batur-sunrise-jeep-tour": [
    "jeep-sunrise",
    "jeep-tracking-sunrise",
    "jeep-sunset",
    "jeep-tracking-sunset",
    "jeep-kintamani-day",
    "jeep-kintamani-day-tracking",
  ],
  "swing-heaven-bali": ["swing-heaven", "swing-heaven-lunch"],
  "griya-beji-waterfall": [
    "griya-beji-purification",
    "griya-beji-palm-reading",
    "griya-beji-mental-healing",
  ],
}

function primaryBookLabel(tourSlug: string): string {
  switch (tourSlug) {
    case "batur-sunrise-jeep-tour":
      return "Book Private Jeep"
    case "balinese-cooking-class":
      return "Book Cooking Class"
    case "bali-atv-adventure":
      return "Book ATV Ride"
    case "ubud-ricefield-cycling-tour":
      return "Book Cycling Tour"
    case "whitewater-rafting":
      return "Book Rafting"
    case "canyon-tubing":
      return "Book Canyon Tubing"
    case "swing-heaven-bali":
      return "Book Swing Heaven"
    case "griya-beji-waterfall":
      return "Book Waterfall"
    case "tirta-empu-purification":
      return "Book Melukat"
    case "luwak-coffee-plantation":
      return "Book Coffee Tasting"
    case "full-day-ubud-tour":
      return "Book Full-Day Tour"
    case "half-day-ubud-tanah-lot-tour":
      return "Book Tanah Lot Tour"
    default:
      return "Book This Experience"
  }
}

function stickyBookLabel(tourSlug: string): string {
  const full = primaryBookLabel(tourSlug)
  if (full === "Book This Experience") return "Book"
  return full.replace(/^Book /, "")
}

function buildTourConfigs(props: TourBookingCardProps): TourConfig[] {
  const mapped = SLUG_TO_BOOKABLE_IDS[props.tourSlug]
  if (mapped) {
    const configs = BOOKABLE_TOURS.filter((t) => mapped.includes(t.id))
    if (configs.length) return configs
  }

  const isPrivateDayTour =
    props.tourSlug === "full-day-ubud-tour" ||
    props.tourSlug === "half-day-ubud-tanah-lot-tour" ||
    props.tourSlug === GIRLS_TRIP_SLUG
  const isMelukat = props.tourSlug === "tirta-empu-purification"
  const isLuwak = props.tourSlug === "luwak-coffee-plantation"

  if (props.activityOptions?.length) {
    return props.activityOptions.map((opt, index) => {
      const isMorning = /morning/i.test(opt.name)
      const isPrivate = /private/i.test(opt.name)
      const isNight = /night/i.test(opt.name)
      const isSafari = props.tourSlug === BALI_SAFARI_SLUG
      return {
        id: `${props.tourId}-opt-${index}`,
        title: opt.name,
        times: isMelukat
          ? ["08:00", "09:00"]
          : isNight
            ? ["17:00", "18:00"]
            : isSafari
              ? ["08:00", "09:00"]
            : isMorning
              ? ["08:30"]
              : isPrivate
                ? ["08:30", "13:30"]
                : ["13:30"],
        adultPrice: props.basePrice + opt.priceDiff,
        kidPrice: props.childPrice ?? null,
        minPax: /tandem|2 guests/i.test(opt.name) ? 2 : isLuwak ? 3 : 1,
        getYourGuideUrl: props.getYourGuideUrl,
        freeUbudPickup: props.tourSlug === "balinese-cooking-class",
        pickupIncluded: isMelukat,
        pickupNotOffered: isLuwak,
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
          : isLuwak
            ? ["10:00", "14:00"]
            : isMelukat
              ? ["08:00", "09:00"]
              : DEFAULT_TIMES,
      adultPrice: props.basePrice,
      kidPrice: props.childPrice ?? null,
      minPax: isLuwak ? 3 : 1,
      getYourGuideUrl: props.getYourGuideUrl,
      freeUbudPickup: props.tourSlug === "balinese-cooking-class",
      pickupIncluded: isPrivateDayTour || isMelukat,
      pickupNotOffered: isLuwak,
    },
  ]
}

export default function TourBookingCard(props: TourBookingCardProps) {
  const [open, setOpen] = useState(false)
  const configs = buildTourConfigs(props)
  const primary = configs[0]
  const { promoPrice, standardPrice, tierLabel } = getPromoPricesForSlug(props.tourSlug, props.basePrice)
  const hasPromo = standardPrice > promoPrice
  const consultationActivity =
    props.tourSlug === "balinese-cooking-class"
      ? `${props.title} — promo ${formatIdr(COOKING_CLASS_PRICE_IDR)} / person`
      : props.tourSlug === "bali-atv-adventure"
        ? `${props.title} — single from ${formatIdr(props.basePrice)}`
        : props.tourSlug === "batur-sunrise-jeep-tour"
          ? `${props.title} — 2 guests from ${formatIdr(props.basePrice)} (min 2)`
          : props.title
  const consultationUrl =
    props.tourSlug === GIRLS_TRIP_SLUG
      ? buildGirlsTripWhatsAppUrl()
      : buildWhatsAppConsultationUrl(
          consultationActivity,
          `${SITE_URL}/tours/${props.tourSlug}`,
        )
  const isPrivateItinerary = props.tourSlug === GIRLS_TRIP_SLUG

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
            <p className="text-[11px] font-medium text-brand-green-light leading-none">
              {isPrivateItinerary ? "Consult from" : "From"}
            </p>
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
          {isPrivateItinerary ? (
            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center justify-center gap-1.5 h-11 rounded-full btn-gold-shimmer px-5 font-bold text-xs uppercase tracking-wider"
              aria-label={`WhatsApp consultation about ${props.title}`}
            >
              <MessageCircle className="w-4 h-4" />
              Consultation <ArrowRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <>
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
                {stickyBookLabel(props.tourSlug)}{" "}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          )}
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
          {props.tourSlug === "bali-atv-adventure" ? (
            <p className="text-sm text-brand-green-light mt-1">
              Tandem {formatIdr(getListPrice("tandem-atv"))} for two sharing
            </p>
          ) : null}
          {props.tourSlug === "batur-sunrise-jeep-tour" ? (
            <p className="text-sm text-brand-green-light mt-1">
              3+ {formatIdr(getPromoListPrice("jeep-sunrise"))} / person · Kintamani Day promo{" "}
              {formatIdr(getPromoListPrice("kintamani-day"))}
            </p>
          ) : null}
          {props.tourSlug === "swing-heaven-bali" ? (
            <p className="text-sm text-brand-green-light mt-1">
              Lunch package {formatIdr(getListPrice("swing-heaven-lunch"))} · dress hire extra
            </p>
          ) : null}
          {props.tourSlug === "griya-beji-waterfall" ? (
            <p className="text-sm text-brand-green-light mt-1">
              Palm reading IDR 1,000,000 · mental healing IDR 1,500,000 · admission extra
            </p>
          ) : null}
          {props.tourSlug === BALI_SAFARI_SLUG ? (
            <p className="text-sm text-brand-green-light mt-1">
              Hopper to Rhino · Night Safari {formatIdr(BALI_SAFARI_PRICES.night)} · pick a package
            </p>
          ) : null}
          {props.tourSlug === "balinese-cooking-class" ? (
            <p className="text-sm text-brand-green-light mt-1">
              Private {formatIdr(COOKING_CLASS_PRIVATE_SOLO_IDR)} / person ·{" "}
              {formatIdr(COOKING_CLASS_PRIVATE_COUPLE_IDR)} for 2
            </p>
          ) : null}
          {isPrivateItinerary ? (
            <p className="text-sm text-brand-green-light mt-1">
              Consultation only · activities extra · clubs and spa stay yours
            </p>
          ) : null}
          {props.childPrice ? (
            <p className="text-sm text-brand-green-light mt-1">
              Child from {formatIdr(props.childPrice)}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5 text-sm text-brand-green-light">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-brand-green shrink-0" />
            <span>{props.duration}</span>
          </div>
          {props.pickup ? (
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-brand-green shrink-0" />
              <span>{props.pickup}</span>
            </div>
          ) : null}
          {props.venue ? (
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-green shrink-0" />
              <span>{props.venue}</span>
            </div>
          ) : null}
        </div>

        <p className="text-xs text-brand-green-light leading-relaxed">
          {isPrivateItinerary
            ? "Consultation only — there is no booking form or checkout for this itinerary. WhatsApp group type, dates, villa area, guest count, and your day list. We reply with a driver + activity quote. No payment to inquire."
            : "Tap below to enter your name, age, adult/child, location, and activity — then send everything to WhatsApp with the price included. Or start a free WhatsApp consultation if you still have questions."}
        </p>

        <div className="space-y-3">
          {isPrivateItinerary ? (
            <a
              href={consultationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 h-12 rounded-full btn-gold-shimmer font-bold text-sm uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Consultation <ArrowRight className="w-4 h-4" />
            </a>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="w-full flex items-center justify-center gap-2 h-12 rounded-full btn-gold-shimmer font-bold text-sm uppercase tracking-wider"
              >
                {primaryBookLabel(props.tourSlug)}{" "}
                <ArrowRight className="w-4 h-4" />
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
            </>
          )}
        </div>
      </div>

      {isPrivateItinerary ? null : (
        <BookingPopup
          isOpen={open}
          onClose={() => setOpen(false)}
          tour={primary}
          tourOptions={configs.length > 1 ? configs : undefined}
        />
      )}
    </>
  )
}
