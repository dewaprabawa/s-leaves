import { getListPrice } from '@/lib/pricing'
import { buildWhatsAppBookingUrl, formatIdr } from '@/lib/whatsapp'

/** Shared small-group list / compare-at rate (matches tumangbaliclass.com). */
export const COOKING_CLASS_STANDARD_PRICE_IDR = 506_370

/** Active shared-class promo rate — IDR 450k / person. */
export const COOKING_CLASS_PRICE_IDR = 450_000

/** Private kitchen — 1 guest */
export const COOKING_CLASS_PRIVATE_SOLO_IDR = 633_090

/** Private kitchen — minimum 2 guests (total for two) */
export const COOKING_CLASS_PRIVATE_COUPLE_IDR = 1_266_180

export const COOKING_CLASS_SALES = {
  id: 'balinese-cooking-class',
  name: 'Tumang Bali Cooking Class',
  shortName: 'Tumang Cooking Class',
  tagline: 'Market-to-table village kitchen',
  description:
    'Family-run Tumang Bali cooking class near Ubud with Chef Wayan Sudiana — morning market tour (AM session), rice-field walk, 10+ dishes, max 8 guests, English instruction, and complimentary Ubud-area pickup. Promo IDR 450,000 / person (was IDR 506,370). TripAdvisor Traveler’s Choice 2026.',
  highlights: [
    '10+ dishes · Base Genep, sate lilit, sambal matah & more',
    'Morning market tour (AM class) + rice-field walk',
    'Max 8 guests · fully hands-on · English',
    'Complimentary hotel pickup in the Ubud area',
  ],
  duration: '3–4 hours',
  image: '/images/cooking/satay-class.jpg',
  imageAlt:
    'Guests preparing sate skewers during Tumang Bali Cooking Class near Ubud',
  tourSlug: 'balinese-cooking-class',
  itineraryHref: '/tours/balinese-cooking-class',
  externalUrl: 'https://tumangbaliclass.com/balinese-cooking-class-ubud',
  priceIdr: COOKING_CLASS_PRICE_IDR,
  standardPriceIdr: COOKING_CLASS_STANDARD_PRICE_IDR,
  privateSoloIdr: COOKING_CLASS_PRIVATE_SOLO_IDR,
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

/** Featured WhatsApp culture package — cycling day + afternoon Tumang class. */
export function getCyclingCookingCombo(): CultureComboOffer {
  const cyclingPriceIdr = getListPrice('cycling')
  const cookingPriceIdr = COOKING_CLASS_PRICE_IDR
  return {
    id: 'combo-cycling-cooking',
    name: 'Cycling + Tumang Cooking Class',
    tagline: 'Culture day classic',
    description:
      'Pejeng ricefield cycling by day (free Ubud hotel pickup + lunch), then an afternoon Tumang Bali Cooking Class — 10+ dishes, rice-field walk, max 8 guests. Book both on one WhatsApp thread.',
    duration: 'Full day',
    timeline: [
      `Day: Ubud Ricefield Cycling Tour — ${formatIdr(cyclingPriceIdr)} (free Ubud pickup + lunch)`,
      `Afternoon: Tumang Bali Cooking Class — ${formatIdr(cookingPriceIdr)} promo / person (shared · Ubud pickup included)`,
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
    activityOption:
      'Shared class · choose morning (market tour) or afternoon · max 8 guests · Ubud pickup included · promo IDR 450k / person',
    time: '08:30',
    price: COOKING_CLASS_SALES.priceIdr,
    notes:
      'Please confirm Tumang Bali Cooking Class seats (shared promo IDR 450,000 / person, was IDR 506,370; or private IDR 633,090 for 1 guest). Morning includes market tour. Happy to pair with ricefield cycling the same day.',
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
      'Please confirm availability for Pejeng ricefield cycling (free Ubud pickup) and an afternoon Tumang Bali Cooking Class on the same date.',
  })
}
