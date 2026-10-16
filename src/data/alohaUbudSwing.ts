import { PICKUP_FEE_IDR, PICKUP_FEE_SOUTH_IDR } from '@/lib/pricing'

/** Aloha Ubud Swing — Tegallalang swing park we book with required private shuttle. */
export const ALOHA_UBUD_SWING_SLUG = 'aloha-ubud-swing'

export const ALOHA_ACTIVE_PACKAGE_IDR = 400_000
export const ALOHA_ENTRANCE_PACKAGE_IDR = 50_000
export const ALOHA_DRESS_HIRE_IDR = 300_000
export const ALOHA_OWN_DRESS_FEE_IDR = 100_000
export const ALOHA_PHOTOGRAPHER_IDR = 300_000
export const ALOHA_OUTSIDE_PHOTOGRAPHER_FEE_IDR = 100_000
export const ALOHA_CARD_SURCHARGE_PCT = 3

/**
 * Hotel shuttle is required (no self-meet). Zone rates: Ubud IDR 400,000 /
 * south coast IDR 650,000 once per booking.
 */
export const ALOHA_SHUTTLE_REQUIRED = true
export const ALOHA_SHUTTLE_FEE_IDR = PICKUP_FEE_IDR
export const ALOHA_SHUTTLE_SOUTH_FEE_IDR = PICKUP_FEE_SOUTH_IDR
export const ALOHA_SHUTTLE_NOTICE =
  'Required shuttle — IDR 400,000 from Ubud, or IDR 650,000 from the south coast. Self-meet at Tegallalang is not offered.'
export const ALOHA_SHUTTLE_NOTICE_SHORT = 'Required shuttle'
export const ALOHA_SHUTTLE_MUST_LABEL = 'Include shuttle — must'
export const ALOHA_SHUTTLE_MUST_SUBLINE =
  'Hotel shuttle is required. Every Aloha Ubud Swing booking includes the shuttle.'

export const ALOHA_UBUD_SWING_VENUE = {
  name: 'Aloha Ubud Swing',
  area: 'Tegallalang / Ubud',
  address: 'Jl. Raya Tegallalang, Tegallalang, Kabupaten Gianyar, Bali 80561',
  hours: '08:00–17:00 daily',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=-8.4639133,115.2765114',
  website: 'https://alohaubudswing.com',
  phoneDisplay: '+62 81 999 333 462',
} as const

/** Active Package 1 inclusions — each activity once per guest. */
export const ALOHA_ACTIVE_SPOTS = [
  'Adrenaline Swing',
  'Libra Swing',
  'Single Swing',
  'Tandem Swing',
  'Bed Swing',
  'Chicken Nest',
  'Bird Nest',
  'Swan Lovers',
] as const

export const ALOHA_UBUD_SWING_PHOTOS = [
  {
    url: '/images/adventures/aloha-ubud-swing/single-swing.jpg',
    alt: 'Guest on the single swing over the valley at Aloha Ubud Swing Tegallalang',
  },
  {
    url: '/images/adventures/aloha-ubud-swing/libra-swing.jpg',
    alt: 'Guest in a flying dress on the Libra Swing at Aloha Ubud Swing',
  },
  {
    url: '/images/adventures/aloha-ubud-swing/bird-nest.jpg',
    alt: 'Guest in a yellow dress in the bird nest at Aloha Ubud Swing',
  },
  {
    url: '/images/adventures/aloha-ubud-swing/bed-swing.jpg',
    alt: 'Guest on the bed swing photo spot at Aloha Ubud Swing',
  },
  {
    url: '/images/adventures/aloha-ubud-swing/activities.jpg',
    alt: 'Jungle swing activities at Aloha Ubud Swing near Tegallalang',
  },
  {
    url: '/images/adventures/aloha-ubud-swing/gate.jpg',
    alt: 'Entrance gate at Aloha Ubud Swing Tegallalang',
  },
  {
    url: '/images/adventures/aloha-ubud-swing/hero.jpg',
    alt: 'Aloha Ubud Swing park overlook near Tegallalang Ubud',
  },
  {
    url: '/images/adventures/aloha-ubud-swing/park-view.jpg',
    alt: 'Park view at Aloha Ubud Swing Tegallalang',
  },
] as const

export const ALOHA_ADDONS = {
  dress: {
    id: 'aloha-dress-hire',
    label: 'Rental dress',
    blurb: `Park dress hire — IDR ${(ALOHA_DRESS_HIRE_IDR / 1000).toFixed(0)},000 per dress / person. Confirm size and colour on WhatsApp.`,
    perPerson: ALOHA_DRESS_HIRE_IDR,
  },
  ownDress: {
    id: 'aloha-own-dress-fee',
    label: 'Bring your own special dress',
    blurb: `If you bring your own special dress (must meet park safety standards) — IDR ${(ALOHA_OWN_DRESS_FEE_IDR / 1000).toFixed(0)},000 per dress.`,
    perPerson: ALOHA_OWN_DRESS_FEE_IDR,
  },
  photographer: {
    id: 'aloha-photographer',
    label: 'Park photographer',
    blurb: `Park photographer service — IDR ${(ALOHA_PHOTOGRAPHER_IDR / 1000).toFixed(0)},000 per person.`,
    perPerson: ALOHA_PHOTOGRAPHER_IDR,
  },
  outsidePhotographer: {
    id: 'aloha-outside-photographer',
    label: 'Outside photographer fee',
    blurb: `Bring your own photographer — park fee IDR ${(ALOHA_OUTSIDE_PHOTOGRAPHER_FEE_IDR / 1000).toFixed(0)},000 per guest.`,
    perPerson: ALOHA_OUTSIDE_PHOTOGRAPHER_FEE_IDR,
  },
} as const

export const ALOHA_ADDONS_INTRO =
  `Required shuttle IDR ${(PICKUP_FEE_IDR / 1000).toFixed(0)},000 from Ubud or IDR ${(PICKUP_FEE_SOUTH_IDR / 1000).toFixed(0)},000 from the south coast — no self-meet. Optional: rental dress, own-dress fee, park photographer, or outside-photographer fee. Card payments at the park add ${ALOHA_CARD_SURCHARGE_PCT}%. Each Active Package activity is once per guest.`

export const ALOHA_ENTRANCE_ADDONS_INTRO =
  `Entrance Package includes 1 Cute Chicken Nest only. Required shuttle IDR ${(PICKUP_FEE_IDR / 1000).toFixed(0)},000 from Ubud or IDR ${(PICKUP_FEE_SOUTH_IDR / 1000).toFixed(0)},000 from the south coast — no self-meet. Optional dress and photographer add-ons available.`

export function isAlohaUbudSwingSlug(slug: string | undefined | null): boolean {
  return slug === ALOHA_UBUD_SWING_SLUG
}

export function isAlohaUbudSwingBookingId(id: string | undefined | null): boolean {
  if (!id) return false
  return (
    id === 'aloha-ubud-swing' ||
    id === 'aloha-ubud-swing-entrance' ||
    id === ALOHA_UBUD_SWING_SLUG
  )
}

export function alohaShuttleLabel(isOutUbud: boolean, feeIdr: number): string {
  if (feeIdr <= 0) return 'Required shuttle'
  return isOutUbud
    ? 'Required shuttle · south coast IDR 650,000'
    : 'Required shuttle · Ubud IDR 400,000'
}
