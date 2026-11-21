import { CYCLING_LIST_IDR, getListPrice } from '@/lib/pricing'
import { SWING_HEAVEN_PRICE_IDR, SWING_HEAVEN_LUNCH_PRICE_IDR } from '@/data/swingHeaven'
import { SITE_URL } from '@/lib/seo'
import { buildWhatsAppBookingUrl, formatIdr } from '@/lib/whatsapp'

/** Shared small-group list / compare-at rate (matches tumangbaliclass.com). */
export const COOKING_CLASS_STANDARD_PRICE_IDR = 506_370

/** Active shared-class promo rate — IDR 450k / person. */
export const COOKING_CLASS_PRICE_IDR = 450_000

/** Private kitchen — 1 guest (IDR 1,000,000 per person) */
export const COOKING_CLASS_PRIVATE_SOLO_IDR = 1_000_000

/** Private kitchen — 2 guests (total = 2 × private per-person rate) */
export const COOKING_CLASS_PRIVATE_COUPLE_IDR = 2_000_000

/** Exclusive Tirta Empul spiritual melukat — per person; ticket, sarong, offering, licensed guide, locker. Shuttle optional. */
export const MELUKAT_PRICE_IDR = 780_000

export const MELUKAT_SALES = {
  id: 'tirta-empu-purification',
  name: 'Tirta Empu Purification (Melukat)',
  shortName: 'Tirta Empul Melukat',
  tagline: 'Exclusive spiritual tour at Bali’s legendary holy spring',
  description:
    'Exclusive spiritual melukat at Tirta Empul — about 2.5 hours. Licensed guide walks you through purification. Includes temple ticket, sarong, Balinese-style offering, and locker. No breakfast. IDR 780,000 per person. Optional shuttle IDR 400,000 from Ubud or IDR 650,000 from the south coast; self-meet or your own driver is free. Pay on the spot — cash or card.',
  highlights: [
    'Tirta Empul — about 2.5 hours · no breakfast',
    'Licensed guide through the purification',
    'Ticket, sarong, offering, and locker included',
    'Optional shuttle · self-meet free · cash or card',
  ],
  duration: 'Approx. 2.5 hours',
  image: '/images/melukat/tirta-empu-hero-2026-11.jpg',
  imageAlt:
    'Guest at Tirta Empul sacred water spring during a guided melukat purification near Ubud',
  tourSlug: 'tirta-empu-purification',
  itineraryHref: '/tours/tirta-empu-purification',
  priceIdr: MELUKAT_PRICE_IDR,
  times: ['08:00', '09:00'] as const,
} as const

export const COOKING_CLASS_SALES = {
  id: 'balinese-cooking-class',
  name: 'Tumang Bali Cooking Class',
  shortName: 'Tumang Cooking Class',
  tagline: 'Market-to-table village kitchen',
  description:
    'Family-run Tumang Bali cooking class near Ubud with Chef Wayan Suryana — morning market tour (AM session), rice-field walk, 10+ dishes, max 8 guests, English instruction, and complimentary Ubud-area pickup. Promo IDR 450,000 / person (was IDR 506,370). TripAdvisor Traveler’s Choice 2026.',
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
  privateCoupleIdr: COOKING_CLASS_PRIVATE_COUPLE_IDR,
} as const

export type CultureComboOffer = {
  id: string
  name: string
  tagline: string
  description: string
  duration: string
  timeline: string[]
  cyclingPriceIdr: number
  cyclingListPriceIdr: number
  cookingPriceIdr: number
  totalFromIdr: number
  totalCompareAtIdr: number
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
      '2-hour Pejeng ricefield cycling promo IDR 550,000 (was IDR 650,000) with free Ubud hotel pickup + lunch, then an afternoon Tumang Bali Cooking Class — 10+ dishes, rice-field walk, max 8 guests. Book both on one WhatsApp thread.',
    duration: 'Full day',
    timeline: [
      `2 hours: Ubud Ricefield Cycling Tour — promo ${formatIdr(cyclingPriceIdr)} (was ${formatIdr(CYCLING_LIST_IDR)}; free Ubud pickup + lunch)`,
      `Afternoon: Tumang Bali Cooking Class — ${formatIdr(cookingPriceIdr)} promo / person (shared · Ubud pickup included)`,
    ],
    cyclingPriceIdr,
    cyclingListPriceIdr: CYCLING_LIST_IDR,
    cookingPriceIdr,
    totalFromIdr: cyclingPriceIdr + cookingPriceIdr,
    totalCompareAtIdr: CYCLING_LIST_IDR + cookingPriceIdr,
    itineraryHref: '/blog/cycling-cooking-class-ubud-full-day-itinerary',
    cyclingTourHref: '/tours/ubud-ricefield-cycling-tour',
    cookingTourHref: '/tours/balinese-cooking-class',
  }
}

export function buildMelukatWhatsAppUrl(guestName = 'Guest') {
  return buildWhatsAppBookingUrl({
    guestName,
    activity: MELUKAT_SALES.name,
    activityOption:
      'Exclusive Tirta Empul spiritual melukat · ticket + sarong + offering + licensed guide + locker · IDR 780,000 / person · shuttle optional',
    time: '08:00',
    price: MELUKAT_SALES.priceIdr,
    notes:
      'Please confirm an exclusive Tirta Empul purification (melukat) on this date. Price is IDR 780,000 per person and includes temple ticket, sarong, Balinese-style offering, licensed guide, and locker. Optional private shuttle IDR 400,000 from Ubud or IDR 650,000 from the south coast; self-meet or my own driver is free. Pay on the spot — cash or card. Share hotel name and guest count.',
    pageUrl: `${SITE_URL}/tours/tirta-empu-purification`,
  })
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
      'Please confirm Tumang Bali Cooking Class seats (shared promo IDR 450,000 / person, was IDR 506,370; or private IDR 1,000,000 per person). Morning includes market tour. Happy to pair with ricefield cycling the same day.',
    pageUrl: `${SITE_URL}/tours/balinese-cooking-class`,
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
      'Please confirm availability for Pejeng ricefield cycling promo 550K (was 650K, free Ubud pickup + lunch) and an afternoon Tumang Bali Cooking Class on the same date.',
    pageUrl: `${SITE_URL}/book?activity=combo-cycling-cooking`,
  })
}

export type SwingCookingComboOffer = {
  id: string
  name: string
  tagline: string
  description: string
  duration: string
  timeline: string[]
  swingPriceIdr: number
  cookingPriceIdr: number
  totalFromIdr: number
  itineraryHref: string
  swingTourHref: string
  cookingTourHref: string
}

/** Jungle-swing morning + afternoon Tumang kitchen — competitor “swing + cooking” day. */
export function getSwingCookingCombo(): SwingCookingComboOffer {
  const swingPriceIdr = SWING_HEAVEN_PRICE_IDR
  const cookingPriceIdr = COOKING_CLASS_PRICE_IDR
  return {
    id: 'combo-swing-cooking',
    name: 'Swing Heaven + Tumang Cooking Class',
    tagline: 'Jungle swing then village kitchen',
    description:
      'Morning Swing Heaven in Bongkasa (jungle swings over the Ayung River — not Tegallalang, not Happy Swing), then afternoon Tumang Bali Cooking Class. Published ticket + promo kitchen rate on one WhatsApp thread. Swing Heaven includes the hotel driver (required, no self-meet). Cooking includes free Ubud pickup.',
    duration: 'Full day',
    timeline: [
      `Morning: Swing Heaven Package — ${formatIdr(swingPriceIdr)} (lunch package ${formatIdr(SWING_HEAVEN_LUNCH_PRICE_IDR)} · hotel driver included, required)`,
      `Afternoon: Tumang Bali Cooking Class — ${formatIdr(cookingPriceIdr)} promo / person (shared · Ubud pickup included)`,
    ],
    swingPriceIdr,
    cookingPriceIdr,
    totalFromIdr: swingPriceIdr + cookingPriceIdr,
    itineraryHref: '/blog/swing-heaven-cooking-class-ubud',
    swingTourHref: '/tours/swing-heaven-bali',
    cookingTourHref: '/tours/balinese-cooking-class',
  }
}

export function buildSwingCookingComboWhatsAppUrl(guestName = 'Guest') {
  const combo = getSwingCookingCombo()
  return buildWhatsAppBookingUrl({
    guestName,
    activity: combo.name,
    activityOption: `${combo.timeline[0]} · ${combo.timeline[1]}`,
    price: combo.totalFromIdr,
    notes:
      'Please confirm Swing Heaven in the morning (Bongkasa — not Tegallalang / Happy Swing) and an afternoon Tumang Bali Cooking Class on the same date. Swing Heaven includes the hotel driver (required, no self-meet). Cooking includes free Ubud pickup. Say lunch package or dress hire if you want them.',
    pageUrl: `${SITE_URL}/book?activity=combo-swing-cooking`,
  })
}
