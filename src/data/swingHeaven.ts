/**
 * Swing Heaven Bali — partner jungle-swing park in Bongkasa (Abiansemal).
 * Prices come from the on-site 2026 package boards (IDR + USD).
 */

export const SWING_HEAVEN_PRICE_IDR = 530_000
export const SWING_HEAVEN_LUNCH_PRICE_IDR = 630_000
/**
 * Hotel shuttle is required (no self-meet). Fee follows the map pin:
 * free within Ubud (5 km) · IDR 400,000 outside Ubud (same flat as ATV/rafting pickup).
 */
export const SWING_HEAVEN_SHUTTLE_REQUIRED = true
export const SWING_HEAVEN_SHUTTLE_FREE_IN_UBUD = true
/** @deprecated Use SWING_HEAVEN_SHUTTLE_REQUIRED — kept for older imports. */
export const SWING_HEAVEN_DRIVER_INCLUDED = true
/** Short notice for booking dialogs / WhatsApp — shuttle is mandatory. */
export const SWING_HEAVEN_SHUTTLE_NOTICE =
  'Required shuttle — free within Ubud · IDR 400,000 outside Ubud. Self-meet at Bongkasa is not offered.'
export const SWING_HEAVEN_SHUTTLE_NOTICE_SHORT = 'Required shuttle'
export const SWING_HEAVEN_LUNCH_DIFF_IDR =
  SWING_HEAVEN_LUNCH_PRICE_IDR - SWING_HEAVEN_PRICE_IDR
export const SWING_HEAVEN_DRESS_HIRE_IDR = 300_000
export const SWING_HEAVEN_KOI_POND_IDR = 300_000
export const SWING_HEAVEN_CARD_SURCHARGE_PCT = 3

export function isSwingHeavenBookingId(id: string | undefined | null): boolean {
  if (!id) return false
  return id === 'swing-heaven' || id === 'swing-heaven-lunch' || id === 'swing-heaven-bali'
}

export function swingHeavenShuttleLabel(isOutUbud: boolean, feeIdr: number): string {
  if (feeIdr <= 0) return 'Required shuttle · free within Ubud'
  if (isOutUbud) return 'Required shuttle · outside Ubud'
  return 'Required shuttle'
}

export const SWING_HEAVEN_VENUE = {
  name: 'Swing Heaven Bali',
  area: 'Bongkasa / Ubud',
  address: 'Jl. Tangga Yuda, Bongkasa, Kec. Abiansemal, Kabupaten Badung, Bali 80352',
  hours: '08:00–17:00 daily',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Jl.+Tangga+Yuda+Bongkasa+Abiansemal+Badung+Bali+80352',
} as const

export const SWING_HEAVEN_SPOTS = [
  'Tandem Bench Swing',
  'Single Swings',
  'Egg Nest',
  'Adrenaline Swing',
  'Libra Swings',
  'Jumping Swing',
  'Romantic Bed Swing',
  'Onion Nests',
  'Jungle Bed',
  'Titanic',
  'Stone',
  'Heart Nests',
  'Bird Nests',
  'Stairs 2 Heaven',
] as const

export const SWING_HEAVEN_ADDONS = {
  dress: {
    id: 'flying-dress',
    label: 'Flying dress hire',
    blurb: `Flowing photo dress for the nests and swings — IDR ${(SWING_HEAVEN_DRESS_HIRE_IDR / 1000).toFixed(0)},000 per person. Confirm size/colour on WhatsApp.`,
    perPerson: SWING_HEAVEN_DRESS_HIRE_IDR,
  },
  koiPond: {
    id: 'koi-pond-boat',
    label: 'Koi pond boat photo',
    blurb: `Boat on the koi pond with ice tea and fruit platter — IDR ${(SWING_HEAVEN_KOI_POND_IDR / 1000).toFixed(0)},000 per person. Photos on your own phone. Confirm lobby availability the same day.`,
    perPerson: SWING_HEAVEN_KOI_POND_IDR,
  },
} as const
