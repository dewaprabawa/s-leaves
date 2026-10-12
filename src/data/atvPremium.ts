import { PICKUP_FEE_IDR, TIER_PRICES_IDR } from "@/lib/pricing"

export const ATV_PREMIUM_SLUG = "atv-premium-package-bali"
export const ATV_PREMIUM_DISCOUNT_PERCENT = 10

export const ATV_PREMIUM_POST_SLUGS = new Set([
  "atv-premium-package-bali-2026",
  "group-atv-package-ubud-2026",
  "atv-package-private-transfer-bali-2026",
  "atv-rafting-premium-package-2026",
])

export type AtvPremiumPackage = {
  key: string
  name: string
  singles: number
  tandems: number
  /** Guests who also raft the Ayung (Land & River packages). */
  rafters: number
  guests: number
  bikes: number
  /** Same activities + hotel shuttle, booked separately at published rates. */
  partsIdr: number
  priceIdr: number
  savingIdr: number
  perGuestIdr: number
  lineup: string
}

function tierPrice(id: keyof typeof TIER_PRICES_IDR, quantity: number) {
  if (quantity <= 0) return 0
  const tiers = TIER_PRICES_IDR[id]
  return tiers[Math.min(quantity, tiers.length) - 1]
}

function buildPackage(
  key: string,
  name: string,
  { singles, tandems, rafting }: { singles: number; tandems: number; rafting: boolean },
): AtvPremiumPackage {
  const guests = singles + tandems * 2
  const rafters = rafting ? guests : 0
  const partsIdr =
    singles * tierPrice("single-atv", singles) +
    tandems * tierPrice("tandem-atv", tandems) +
    rafters * tierPrice("rafting", rafters) +
    PICKUP_FEE_IDR
  const priceIdr = Math.round((partsIdr * (100 - ATV_PREMIUM_DISCOUNT_PERCENT)) / 100 / 1000) * 1000
  const bikeParts = [
    `${singles} single ATV${singles === 1 ? "" : "s"}`,
    ...(tandems ? [`${tandems} tandem ATV`] : []),
    ...(rafting ? [`Ayung rafting for ${guests}`] : []),
  ]
  return {
    key,
    name,
    singles,
    tandems,
    rafters,
    guests,
    bikes: singles + tandems,
    partsIdr,
    priceIdr,
    savingIdr: partsIdr - priceIdr,
    perGuestIdr: Math.round(priceIdr / guests),
    lineup: `${bikeParts.join(" + ")} + private shuttle`,
  }
}

export const ATV_PREMIUM_PACKAGES: readonly AtvPremiumPackage[] = [
  buildPackage("trio", "Premium Trio", { singles: 1, tandems: 1, rafting: false }),
  buildPackage("squad", "Premium Squad", { singles: 2, tandems: 1, rafting: false }),
  buildPackage("crew", "Premium Crew", { singles: 3, tandems: 1, rafting: false }),
]

/** Single ATV + Ayung rafting for every guest, private shuttle. No tubing. */
export const ATV_RAFTING_PREMIUM_PACKAGES: readonly AtvPremiumPackage[] = [
  buildPackage("land-river-duo", "Land & River Duo", { singles: 2, tandems: 0, rafting: true }),
  buildPackage("land-river-trio", "Land & River Trio", { singles: 3, tandems: 0, rafting: true }),
  buildPackage("land-river-squad", "Land & River Squad", { singles: 4, tandems: 0, rafting: true }),
]

export const ALL_ATV_PREMIUM_PACKAGES: readonly AtvPremiumPackage[] = [
  ...ATV_PREMIUM_PACKAGES,
  ...ATV_RAFTING_PREMIUM_PACKAGES,
]

export const ATV_PREMIUM_SHUTTLE_COPY = {
  title: "Private shuttle for your group only",
  body: "Your own car and driver — not shared with other guests. We pick you up at your hotel, take you to the activities, and drive you back at the end of the day. Drop your hotel pin below.",
  short: "Private group shuttle included (hotel pickup + return)",
}

export const ATV_PREMIUM_INCLUDED = [
  "Private shuttle for your group only — hotel pickup and return",
  "1.5-hour ATV ride on singles and one tandem",
  "Helmet and boot shoes",
  "Lunch at the arena",
  "Safety briefing and trail guide",
  "Insurance for ages 6–65",
] as const

export const ATV_RAFTING_PREMIUM_INCLUDED = [
  "Private shuttle for your group only — all day, hotel pickup and return",
  "1.5-hour single ATV ride for every guest",
  "Ayung River rafting, Class II–III, with river guide",
  "ATV helmet and boots · rafting helmet and life jacket",
  "Lunch included",
  "Insurance for ages 6–65",
] as const
