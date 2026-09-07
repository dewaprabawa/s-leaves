import { getListPrice } from '@/lib/pricing'
import { buildWhatsAppBookingUrl, formatIdr } from '@/lib/whatsapp'

/** Published dinner-class price (matches geoContent / tour SEO). */
export const COOKING_CLASS_PRICE_IDR = 400_000

export const COOKING_CLASS_SALES = {
  id: 'balinese-cooking-class',
  name: 'Traditional Balinese Dinner Cooking Class',
  shortName: 'Balinese Cooking Class',
  tagline: 'Hands-on evening kitchen',
  description:
    'Hands-on Balinese cooking class near Ubud in Pejeng — pound Base Genep, cook 5 authentic dishes at your own station, then share dinner. Ideal after ricefield cycling for a full culture day.',
  highlights: [
    '5 authentic dishes + spice paste lesson',
    'Own cooking station & traditional tools',
    'Dinner you prepare + digital recipe book',
    'Evening class typically 17:30–20:30',
  ],
  duration: '3 hours',
  image: '/images/cooking/stovetop-class.jpg',
  imageAlt: 'Guests cooking at traditional stovetops in a Balinese cooking class',
  tourSlug: 'balinese-cooking-class',
  itineraryHref: '/blog/cycling-cooking-class-ubud-full-day-itinerary',
  priceIdr: COOKING_CLASS_PRICE_IDR,
} as const

export type CultureComboOffer = {
  id: string
  name: string
  tagline: string
  description: string
  duration: string
  timeline: string[]
  cyclingPriceIdr: number
  cookingPriceIdr: number
  totalFromIdr: number
  itineraryHref: string
  cyclingTourHref: string
  cookingTourHref: string
}

/** Featured WhatsApp culture package — not part of ATV mix-discount engine. */
export function getCyclingCookingCombo(): CultureComboOffer {
  const cyclingPriceIdr = getListPrice('cycling')
  const cookingPriceIdr = COOKING_CLASS_PRICE_IDR
  return {
    id: 'combo-cycling-cooking',
    name: 'Cycling + Cooking Class Ubud',
    tagline: 'Culture day classic',
    description:
      'Rice paddy / Pejeng village cycling by day (free Ubud hotel pickup + lunch), then an evening hands-on Balinese dinner cooking class. The high-intent combo competitors rank for — book both on one WhatsApp thread.',
    duration: 'Full day',
    timeline: [
      `Day: Ubud Ricefield Cycling Tour — ${formatIdr(cyclingPriceIdr)} (free Ubud pickup + lunch)`,
      `Evening 17:30–20:30: Balinese Dinner Cooking Class — ${formatIdr(cookingPriceIdr)}`,
    ],
    cyclingPriceIdr,
    cookingPriceIdr,
    totalFromIdr: cyclingPriceIdr + cookingPriceIdr,
    itineraryHref: '/blog/cycling-cooking-class-ubud-full-day-itinerary',
    cyclingTourHref: '/tours/ubud-ricefield-cycling-tour',
    cookingTourHref: '/tours/balinese-cooking-class',
  }
}

export function buildCookingClassWhatsAppUrl(guestName = 'Guest') {
  return buildWhatsAppBookingUrl({
    guestName,
    activity: COOKING_CLASS_SALES.name,
    activityOption: 'Evening dinner class · Pejeng near Ubud',
    time: '17:30',
    price: COOKING_CLASS_SALES.priceIdr,
    notes: 'Please confirm seats for the Balinese cooking class. Happy to pair with ricefield cycling the same day.',
  })
}

export function buildCyclingCookingComboWhatsAppUrl(guestName = 'Guest') {
  const combo = getCyclingCookingCombo()
  return buildWhatsAppBookingUrl({
    guestName,
    activity: combo.name,
    activityOption: `${combo.timeline[0]} · ${combo.timeline[1]}`,
    price: combo.totalFromIdr,
    notes:
      'Please confirm availability for both ricefield cycling (with free Ubud pickup) and the evening cooking class on the same date.',
  })
}
