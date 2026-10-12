import { PICKUP_FEE_IDR, TIER_PRICES_IDR } from "@/lib/pricing"

export const ATV_PREMIUM_SLUG = "atv-premium-package-bali"
export const ATV_PREMIUM_DISCOUNT_PERCENT = 10

export const ATV_PREMIUM_POST_SLUGS = new Set([
  "atv-premium-package-bali-2026",
  "group-atv-package-ubud-2026",
  "atv-package-private-transfer-bali-2026",
])

export type AtvPremiumPackageKey = "trio" | "squad" | "crew"

export type AtvPremiumPackage = {
  key: AtvPremiumPackageKey
  name: string
  singles: number
  tandems: number
  guests: number
  bikes: number
  /** Single ATVs + one tandem + hotel shuttle, booked separately at published rates. */
  partsIdr: number
  priceIdr: number
  savingIdr: number
  perGuestIdr: number
  lineup: string
}

function buildPackage(key: AtvPremiumPackageKey, name: string, singles: number): AtvPremiumPackage {
  const tandems = 1
  const singleTiers = TIER_PRICES_IDR["single-atv"]
  const singleUnit = singleTiers[Math.min(singles, singleTiers.length) - 1]
  const tandemUnit = TIER_PRICES_IDR["tandem-atv"][0]
  const partsIdr = singles * singleUnit + tandems * tandemUnit + PICKUP_FEE_IDR
  const priceIdr = Math.round((partsIdr * (100 - ATV_PREMIUM_DISCOUNT_PERCENT)) / 100 / 1000) * 1000
  const guests = singles + tandems * 2
  return {
    key,
    name,
    singles,
    tandems,
    guests,
    bikes: singles + tandems,
    partsIdr,
    priceIdr,
    savingIdr: partsIdr - priceIdr,
    perGuestIdr: Math.round(priceIdr / guests),
    lineup: `${singles} single ATV${singles === 1 ? "" : "s"} + 1 tandem ATV + private shuttle`,
  }
}

export const ATV_PREMIUM_PACKAGES: readonly AtvPremiumPackage[] = [
  buildPackage("trio", "Premium Trio", 1),
  buildPackage("squad", "Premium Squad", 2),
  buildPackage("crew", "Premium Crew", 3),
]

export const ATV_PREMIUM_FROM_IDR = ATV_PREMIUM_PACKAGES[0].priceIdr
export const ATV_PREMIUM_TO_IDR = ATV_PREMIUM_PACKAGES[ATV_PREMIUM_PACKAGES.length - 1].priceIdr

export const ATV_PREMIUM_SHUTTLE_COPY = {
  title: "Private shuttle for your group only",
  body: "Your own car and driver — not shared with other guests. We pick you up at your hotel, take you to All New Bali Adventure in Sedang, and drive you back after lunch. Drop your hotel pin below.",
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
