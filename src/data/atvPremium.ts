import { PICKUP_FEE_IDR, TIER_PRICES_IDR } from "@/lib/pricing"

export const ATV_PREMIUM_SLUG = "atv-premium-package-bali"
export const ATV_PREMIUM_DISCOUNT_PERCENT = 10

/** Private Toyota HiAce / 10–15 seater for Land & River groups of 8–15 (Ubud-area day rate). */
export const HIACE_SHUTTLE_IDR = 1_400_000

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
  "atv-rafting-group-hiace-ubud-2026",
  "best-bali-atv-price-for-groups-2026",
])

export type AtvPremiumVehicle = "none" | "car" | "hiace"

export type AtvPremiumPackage = {
  key: string
  name: string
  singles: number
  tandems: number
  /** Guests who also raft the Ayung (Land & River packages). */
  rafters: number
  guests: number
  bikes: number
  /** True when private transport is in the package price. */
  shuttleIncluded: boolean
  vehicle: AtvPremiumVehicle
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

function shuttleFee(vehicle: AtvPremiumVehicle): number {
  if (vehicle === "hiace") return HIACE_SHUTTLE_IDR
  if (vehicle === "car") return PICKUP_FEE_IDR
  return 0
}

function transportLabel(vehicle: AtvPremiumVehicle): string {
  if (vehicle === "hiace") return "private HiAce minibus"
  if (vehicle === "car") return "private shuttle"
  return "self-meet (no shuttle)"
}

function buildPackage(
  key: string,
  name: string,
  {
    singles,
    tandems,
    rafting,
    vehicle,
  }: {
    singles: number
    tandems: number
    rafting: boolean
    vehicle: AtvPremiumVehicle
  },
): AtvPremiumPackage {
  const guests = singles + tandems * 2
  const rafters = rafting ? guests : 0
  const fee = shuttleFee(vehicle)
  const partsIdr =
    singles * tierPrice("single-atv", singles) +
    tandems * tierPrice("tandem-atv", tandems) +
    rafters * tierPrice("rafting", rafters) +
    fee
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
    shuttleIncluded: vehicle !== "none",
    vehicle,
    partsIdr,
    priceIdr,
    savingIdr: partsIdr - priceIdr,
    perGuestIdr: Math.round(priceIdr / guests),
    lineup: `${bikeParts.join(" + ")} + ${transportLabel(vehicle)}`,
  }
}

type Lineup = { singles: number; tandems: number; rafting: boolean }

const ATV_ONLY_LINEUPS: { key: string; name: string; lineup: Lineup }[] = [
  { key: "trio", name: "Premium Trio", lineup: { singles: 1, tandems: 1, rafting: false } },
  { key: "squad", name: "Premium Squad", lineup: { singles: 2, tandems: 1, rafting: false } },
  { key: "crew", name: "Premium Crew", lineup: { singles: 3, tandems: 1, rafting: false } },
]

/** Land & River small groups — private car (Avanza / Innova class). */
const LAND_RIVER_CAR_LINEUPS: { key: string; name: string; lineup: Lineup }[] = [
  { key: "land-river-duo", name: "Land & River Duo", lineup: { singles: 2, tandems: 0, rafting: true } },
  { key: "land-river-trio", name: "Land & River Trio", lineup: { singles: 3, tandems: 0, rafting: true } },
  { key: "land-river-squad", name: "Land & River Squad", lineup: { singles: 4, tandems: 0, rafting: true } },
  { key: "land-river-five", name: "Land & River 5", lineup: { singles: 5, tandems: 0, rafting: true } },
  { key: "land-river-six", name: "Land & River 6", lineup: { singles: 6, tandems: 0, rafting: true } },
  { key: "land-river-seven", name: "Land & River 7", lineup: { singles: 7, tandems: 0, rafting: true } },
]

/** Land & River big groups — private HiAce minibus (8–15 guests). */
const LAND_RIVER_HIACE_LINEUPS: { key: string; name: string; lineup: Lineup }[] = [
  { key: "land-river-eight", name: "Land & River 8", lineup: { singles: 8, tandems: 0, rafting: true } },
  { key: "land-river-ten", name: "Land & River 10", lineup: { singles: 10, tandems: 0, rafting: true } },
  { key: "land-river-twelve", name: "Land & River 12", lineup: { singles: 12, tandems: 0, rafting: true } },
  { key: "land-river-fifteen", name: "Land & River 15", lineup: { singles: 15, tandems: 0, rafting: true } },
]

function buildSet(
  rows: { key: string; name: string; lineup: Lineup }[],
  vehicle: AtvPremiumVehicle,
): readonly AtvPremiumPackage[] {
  return rows.map((row) =>
    buildPackage(vehicle === "none" ? `${row.key}-self` : row.key, row.name, {
      ...row.lineup,
      vehicle,
    }),
  )
}

/** ATV-only with private car shuttle (Ubud-area rate). */
export const ATV_PREMIUM_PACKAGES: readonly AtvPremiumPackage[] = buildSet(ATV_ONLY_LINEUPS, "car")

/** ATV-only self-meet — no shuttle. */
export const ATV_PREMIUM_SELF_MEET_PACKAGES: readonly AtvPremiumPackage[] = buildSet(
  ATV_ONLY_LINEUPS,
  "none",
)

/** Land & River 2–7 with private car shuttle. No tubing. */
export const ATV_RAFTING_PREMIUM_PACKAGES: readonly AtvPremiumPackage[] = buildSet(
  LAND_RIVER_CAR_LINEUPS,
  "car",
)

/** Land & River 2–7 self-meet. */
export const ATV_RAFTING_PREMIUM_SELF_MEET_PACKAGES: readonly AtvPremiumPackage[] = buildSet(
  LAND_RIVER_CAR_LINEUPS,
  "none",
)

/** Land & River 8–15 with private HiAce minibus. No tubing. */
export const ATV_RAFTING_HIACE_PACKAGES: readonly AtvPremiumPackage[] = buildSet(
  LAND_RIVER_HIACE_LINEUPS,
  "hiace",
)

/** Land & River 8–15 self-meet (no HiAce). */
export const ATV_RAFTING_HIACE_SELF_MEET_PACKAGES: readonly AtvPremiumPackage[] = buildSet(
  LAND_RIVER_HIACE_LINEUPS,
  "none",
)

export const ALL_ATV_PREMIUM_PACKAGES: readonly AtvPremiumPackage[] = [
  ...ATV_PREMIUM_PACKAGES,
  ...ATV_PREMIUM_SELF_MEET_PACKAGES,
  ...ATV_RAFTING_PREMIUM_PACKAGES,
  ...ATV_RAFTING_PREMIUM_SELF_MEET_PACKAGES,
  ...ATV_RAFTING_HIACE_PACKAGES,
  ...ATV_RAFTING_HIACE_SELF_MEET_PACKAGES,
]

export const ATV_PREMIUM_SHUTTLE_COPY = {
  title: "Private shuttle for your group only",
  body: "Your own car and driver — not shared with other guests. We pick you up at your hotel, take you to the activities, and drive you back at the end of the day. Drop your hotel pin below.",
  short: "Private group shuttle included (hotel pickup + return)",
}

export const ATV_PREMIUM_HIACE_COPY = {
  title: "Private HiAce minibus for your group",
  body: "A private Toyota HiAce (about 10–15 seats) just for your group — hotel pickup, Sedang ATV, Ayung rafting, and return. Not a shared tourist bus. Drop your hotel pin below.",
  short: "Private HiAce minibus included (hotel pickup + return)",
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

export const ATV_RAFTING_HIACE_INCLUDED = [
  "Private HiAce minibus for your group — hotel pickup, Sedang, Ayung, return",
  "1.5-hour single ATV ride for every guest",
  "Ayung River rafting, Class II–III, with river guide",
  "ATV helmet and boots · rafting helmet and life jacket",
  "Lunch included",
  "Insurance for ages 6–65",
] as const

export const ATV_RAFTING_HIACE_SELF_MEET_INCLUDED = [
  "Self-meet — no HiAce (you cover hotel → Sedang → Ayung)",
  "1.5-hour single ATV ride for every guest",
  "Ayung River rafting, Class II–III, with river guide",
  "ATV helmet and boots · rafting helmet and life jacket",
  "Lunch included",
  "Insurance for ages 6–65",
] as const

export function meetCopyForPackage(pkg: AtvPremiumPackage) {
  if (pkg.vehicle === "hiace") return ATV_PREMIUM_HIACE_COPY
  if (pkg.vehicle === "car") return ATV_PREMIUM_SHUTTLE_COPY
  return ATV_PREMIUM_SELF_MEET_COPY
}
