import { MELUKAT_PRICE_IDR } from '@/data/cultureSales'

export const GROUP_PURIFICATION_SLUG = 'group-tirta-empul-purification'

/** Standing group promo vs the published solo melukat rate (IDR 780,000). */
export const GROUP_PURIFICATION_DISCOUNT_BY_GUESTS: Record<number, number> = {
  4: 10,
  6: 12,
  8: 12,
  10: 12,
}

export type GroupPurificationPackage = {
  key: string
  name: string
  guests: number
  discountPercent: number
  /** Solo rate × guests (compare-at). */
  partsIdr: number
  /** Promo package total (all guests). */
  priceIdr: number
  savingIdr: number
  perGuestIdr: number
}

function roundThousand(n: number) {
  return Math.round(n / 1000) * 1000
}

function buildPackage(guests: number, name: string): GroupPurificationPackage {
  const discountPercent = GROUP_PURIFICATION_DISCOUNT_BY_GUESTS[guests] ?? 10
  const partsIdr = MELUKAT_PRICE_IDR * guests
  const priceIdr = roundThousand((partsIdr * (100 - discountPercent)) / 100)
  return {
    key: `group-${guests}`,
    name,
    guests,
    discountPercent,
    partsIdr,
    priceIdr,
    savingIdr: partsIdr - priceIdr,
    perGuestIdr: Math.round(priceIdr / guests),
  }
}

export const GROUP_PURIFICATION_PACKAGES: readonly GroupPurificationPackage[] = [
  buildPackage(4, 'Group Melukat · 4'),
  buildPackage(6, 'Group Melukat · 6'),
  buildPackage(8, 'Group Melukat · 8'),
  buildPackage(10, 'Group Melukat · 10'),
]

export const GROUP_PURIFICATION_INCLUDED = [
  'Temple ticket (Tirta Empul entrance) for every guest',
  'Sarong and sash / bathing wrap as needed',
  'Balinese-style offering (canang) for each guest',
  'Licensed guide through the purification — one booking for the whole group',
  'Locker for dry clothes and valuables',
] as const

export const GROUP_PURIFICATION_HERO = {
  url: '/images/melukat/tirta-empul-group-purification-hero-2026.jpg',
  alt: 'Guests under sacred spouts together during a group melukat purification at Tirta Empul',
  width: 1024,
  height: 731,
} as const

export function groupPurificationFromPriceIdr() {
  return GROUP_PURIFICATION_PACKAGES[0].priceIdr
}

export function groupPurificationFromPerGuestIdr() {
  return GROUP_PURIFICATION_PACKAGES[0].perGuestIdr
}
