/**
 * Swing Heaven Bali — partner jungle-swing park in Bongkasa (Abiansemal).
 * Prices come from the on-site 2026 package boards (IDR + USD).
 */

export const SWING_HEAVEN_PRICE_IDR = 530_000
export const SWING_HEAVEN_LUNCH_PRICE_IDR = 630_000
/** Hotel driver is included in the ticket and required — no self-meet, no IDR 400K add-on. */
export const SWING_HEAVEN_DRIVER_INCLUDED = true
/** Short notice for booking dialogs / WhatsApp — shuttle is mandatory, not optional. */
export const SWING_HEAVEN_SHUTTLE_NOTICE =
  'Hotel shuttle is included and required. Share your hotel pin — self-meet at Bongkasa is not offered.'
export const SWING_HEAVEN_SHUTTLE_NOTICE_SHORT =
  'Shuttle included & required — no self-meet'
export const SWING_HEAVEN_LUNCH_DIFF_IDR =
  SWING_HEAVEN_LUNCH_PRICE_IDR - SWING_HEAVEN_PRICE_IDR
export const SWING_HEAVEN_DRESS_HIRE_IDR = 300_000
export const SWING_HEAVEN_KOI_POND_IDR = 300_000
export const SWING_HEAVEN_CARD_SURCHARGE_PCT = 3

export function isSwingHeavenBookingId(id: string | undefined | null): boolean {
  if (!id) return false
  return id === 'swing-heaven' || id === 'swing-heaven-lunch' || id === 'swing-heaven-bali'
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
