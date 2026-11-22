import { PICKUP_FEE_IDR, TIER_PRICES_IDR } from "@/lib/pricing"

export const ATV_PREMIUM_SLUG = "atv-premium-package-bali"
export const ATV_PREMIUM_DISCOUNT_PERCENT = 10

export const ATV_PREMIUM_POST_SLUGS = new Set([
  "premium-atv-adventure-bali-2026",
  "premium-atv-adventure-itinerary-ubud-2026",
  "premium-atv-adventure-worth-it-2026",
  "atv-premium-package-bali-2026",
  "group-atv-package-ubud-2026",
  "atv-package-private-transfer-bali-2026",
  "atv-rafting-premium-package-2026",
  "family-atv-package-ubud-2026",
  "atv-premium-promo-deal-ubud-2026",
  "how-to-book-atv-premium-package-bali-2026",
  "atv-premium-package-vs-kuber-premium-2026",
  "atv-christmas-new-year-promo-ubud-2026",
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
  /** True when the private Ubud-area shuttle is in the package price. */
  shuttleIncluded: boolean
  /** Same activities (+ shuttle when included), booked separately at published rates. */
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
  {
    singles,
    tandems,
    rafting,
    shuttle,
  }: { singles: number; tandems: number; rafting: boolean; shuttle: boolean },
): AtvPremiumPackage {
  const guests = singles + tandems * 2
  const rafters = rafting ? guests : 0
  const partsIdr =
    singles * tierPrice("single-atv", singles) +
    tandems * tierPrice("tandem-atv", tandems) +
    rafters * tierPrice("rafting", rafters) +
    (shuttle ? PICKUP_FEE_IDR : 0)
  const priceIdr = Math.round((partsIdr * (100 - ATV_PREMIUM_DISCOUNT_PERCENT)) / 100 / 1000) * 1000
  const bikeParts = [
    `${singles} single ATV${singles === 1 ? "" : "s"}`,
    ...(tandems ? [`${tandems} tandem ATV`] : []),
    ...(rafting ? [`Ayung rafting for ${guests}`] : []),
  ]
  const transport = shuttle ? "private shuttle" : "self-meet (no shuttle)"
  return {
    key,
    name,
    singles,
    tandems,
    rafters,
    guests,
    bikes: singles + tandems,
    shuttleIncluded: shuttle,
    partsIdr,
    priceIdr,
    savingIdr: partsIdr - priceIdr,
    perGuestIdr: Math.round(priceIdr / guests),
    lineup: `${bikeParts.join(" + ")} + ${transport}`,
  }
}

type Lineup = { singles: number; tandems: number; rafting: boolean }

const ATV_ONLY_LINEUPS: { key: string; name: string; lineup: Lineup }[] = [
  { key: "trio", name: "Premium Trio", lineup: { singles: 1, tandems: 1, rafting: false } },
  { key: "squad", name: "Premium Squad", lineup: { singles: 2, tandems: 1, rafting: false } },
  { key: "crew", name: "Premium Crew", lineup: { singles: 3, tandems: 1, rafting: false } },
]

const LAND_RIVER_LINEUPS: { key: string; name: string; lineup: Lineup }[] = [
  { key: "land-river-duo", name: "Land & River Duo", lineup: { singles: 2, tandems: 0, rafting: true } },
  { key: "land-river-trio", name: "Land & River Trio", lineup: { singles: 3, tandems: 0, rafting: true } },
  { key: "land-river-squad", name: "Land & River Squad", lineup: { singles: 4, tandems: 0, rafting: true } },
]

function buildSet(
  rows: { key: string; name: string; lineup: Lineup }[],
  shuttle: boolean,
): readonly AtvPremiumPackage[] {
  return rows.map((row) =>
    buildPackage(shuttle ? row.key : `${row.key}-self`, row.name, {
      ...row.lineup,
      shuttle,
    }),
  )
}

/** ATV-only with private shuttle included (Ubud-area rate in the package). */
export const ATV_PREMIUM_PACKAGES: readonly AtvPremiumPackage[] = buildSet(ATV_ONLY_LINEUPS, true)

/** ATV-only self-meet — no shuttle; meet at All New Bali Adventure, Sedang. */
export const ATV_PREMIUM_SELF_MEET_PACKAGES: readonly AtvPremiumPackage[] = buildSet(
  ATV_ONLY_LINEUPS,
  false,
)

/** Single ATV + Ayung rafting for every guest, private shuttle. No tubing. */
export const ATV_RAFTING_PREMIUM_PACKAGES: readonly AtvPremiumPackage[] = buildSet(
  LAND_RIVER_LINEUPS,
  true,
)

/** Land & River self-meet — no shuttle; you cover Sedang ↔ Ayung between activities. */
export const ATV_RAFTING_PREMIUM_SELF_MEET_PACKAGES: readonly AtvPremiumPackage[] = buildSet(
  LAND_RIVER_LINEUPS,
  false,
)

export const ALL_ATV_PREMIUM_PACKAGES: readonly AtvPremiumPackage[] = [
  ...ATV_PREMIUM_PACKAGES,
  ...ATV_PREMIUM_SELF_MEET_PACKAGES,
  ...ATV_RAFTING_PREMIUM_PACKAGES,
  ...ATV_RAFTING_PREMIUM_SELF_MEET_PACKAGES,
]

export const ATV_PREMIUM_SHUTTLE_COPY = {
  title: "Private shuttle for your group only",
  body: "Your own car and driver — not shared with other guests. We pick you up at your hotel, take you to the activities, and drive you back at the end of the day. Drop your hotel pin below.",
  short: "Private group shuttle included (hotel pickup + return)",
}

export const ATV_PREMIUM_SELF_MEET_COPY = {
  title: "Self-meet — no shuttle",
  body: "Meet at All New Bali Adventure in Sedang with your own driver, Grab, or scooter. Land & River self-meet means you also cover the short transfer to the Ayung put-in after lunch.",
  short: "Self-meet at All New Bali Adventure (no shuttle)",
}

export const ATV_PREMIUM_INCLUDED = [
  "Private shuttle for your group only — hotel pickup and return",
  "1.5-hour ATV ride on singles and one tandem",
  "Helmet and boot shoes",
  "Lunch at the arena",
  "Safety briefing and trail guide",
  "Insurance for ages 6–65",
] as const

export const ATV_PREMIUM_SELF_MEET_INCLUDED = [
  "Self-meet at All New Bali Adventure, Sedang — no shuttle",
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

export const ATV_RAFTING_PREMIUM_SELF_MEET_INCLUDED = [
  "Self-meet — no shuttle (you cover Sedang ↔ Ayung)",
  "1.5-hour single ATV ride for every guest",
  "Ayung River rafting, Class II–III, with river guide",
  "ATV helmet and boots · rafting helmet and life jacket",
  "Lunch included",
  "Insurance for ages 6–65",
] as const
