import { buildWhatsAppBookingUrl } from "@/lib/whatsapp"

/** Bali Buggy Adventures — 1-hour UTV, not the imported Polaris 3-lap ticket. */
export const UTV_BUGGY_SLUG = "utv-buggy-bali-adventure"

export const UTV_BUGGY_SINGLE_IDR = 1_200_000
export const UTV_BUGGY_TANDEM_IDR = 1_500_000

export const UTV_BUGGY_SINGLE_ID = "utv-single"
export const UTV_BUGGY_TANDEM_ID = "utv-tandem"

export function isUtvTandemId(id: string) {
  return id === UTV_BUGGY_TANDEM_ID
}

export const UTV_BUGGY_VENUE = "Bali Buggy Adventures"
export const UTV_BUGGY_AREA = "Pemogan · South Denpasar"
export const UTV_BUGGY_ADDRESS =
  "Gg. Merta Shanti No.20 A, Pemogan, Denpasar Selatan, Kota Denpasar, Bali 80221"
export const UTV_BUGGY_SITE = "https://balibuggyadventures.com"
export const UTV_BUGGY_MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Gg.+Merta+Shanti+No.20+A+Pemogan+Denpasar+Selatan+Bali+80221"

export const UTV_BUGGY_DURATION = "About 1 hour · 7 km"
export const UTV_BUGGY_DURATION_ISO = "PT1H"
export const UTV_BUGGY_DRIVER_MIN_AGE = 17
export const UTV_BUGGY_PASSENGER_MIN_AGE = 6

export const UTV_BUGGY_TRACK =
  "Crocodile Cave, water pits, rice fields, mud, circuit, fun speed, and jungle"

/** SERP title job — ≤60 chars. */
export const UTV_BUGGY_SEO_TITLE = "UTV Buggy Bali Pemogan | From IDR 1.2M"
/** SERP description — ~150–160 chars. */
export const UTV_BUGGY_SEO_DESCRIPTION =
  "Bali Buggy Adventures in Pemogan: 1-hour 7 km automatic UTV, lunch included. Single IDR 1,200,000 · tandem 1,500,000. Pickup quoted. WhatsApp."

export const UTV_BUGGY_VS_ATV_ARTICLE_SLUG = "bali-utv-buggy-vs-atv-2026"

export const UTV_BUGGY_SELF_MEET = {
  name: UTV_BUGGY_VENUE,
  address: UTV_BUGGY_ADDRESS,
  mapUrl: UTV_BUGGY_MAP_URL,
}

export const UTV_BUGGY_TIMES = ["09:00", "10:00", "11:00", "13:00", "14:00"] as const

export const UTV_BUGGY_INCLUDED = [
  "Welcome drink",
  "Towel, soap, and shower",
  "Locker",
  "Insurance",
  "Lunch (fried rice or fried noodles)",
  "Safety gear (helmet and boots)",
  "Professional instructor",
] as const

export const UTV_BUGGY_SALES = {
  id: UTV_BUGGY_SINGLE_ID,
  name: "UTV at Bali Buggy Adventures",
  shortName: "UTV buggy",
  tagline: "1-hour / 7 km automatic UTV · Pemogan",
  description:
    "Bali Buggy Adventures in Pemogan, South Denpasar: 1-hour automatic sit-in UTV on a 7 km track (Crocodile Cave, rice fields, mud, circuit, jungle). Single IDR 1,200,000 · tandem IDR 1,500,000 for two on one buggy. Lunch included. Not Sedang ATV and not the jungle-buggies 3-lap Polaris ticket. Pickup quoted or self-meet — not the IDR 400,000 ATV surcharge.",
  highlights: [
    "Single IDR 1,200,000 · tandem IDR 1,500,000 (one buggy)",
    "About 1 hour / 7 km · lunch included",
    "Driver 17+ · passenger 6+ · automatic",
    "Pickup quoted — not the IDR 400,000 Sedang ATV fee",
  ],
  duration: UTV_BUGGY_DURATION,
  image: "/images/adventures/utv-buggy-ricefield.jpg",
  imageAlt: "Two UTV buggies splashing through a muddy ricefield track in Bali",
  tourSlug: UTV_BUGGY_SLUG,
  itineraryHref: `/tours/${UTV_BUGGY_SLUG}`,
  priceIdr: UTV_BUGGY_SINGLE_IDR,
  times: UTV_BUGGY_TIMES,
} as const

export function buildUtvBuggyWhatsAppUrl(guestName = "Guest") {
  return buildWhatsAppBookingUrl({
    guestName,
    activity: UTV_BUGGY_SALES.name,
    activityOption:
      "Single UTV IDR 1,200,000 · tandem IDR 1,500,000 for two on one buggy · 1 hour / 7 km · lunch included",
    time: "09:00",
    price: UTV_BUGGY_SINGLE_IDR,
    notes:
      "Please confirm Bali Buggy Adventures in Pemogan (Gg. Merta Shanti No.20 A). Say single or tandem. Pickup is quoted or self-meet — do not apply the IDR 400,000 Sedang ATV surcharge. This is not Sedang ATV and not the jungle-buggies 3-lap Polaris ticket. No payment to inquire.",
  })
}
