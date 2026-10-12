export const FULL_DAY_UBUD_SLUG = "full-day-ubud-tour"

/** Per-person price by group size: 1, 2, 3, then 4+ guests. */
export const FULL_DAY_UBUD_TIER_PRICES_IDR = [600_000, 500_000, 400_000, 350_000] as const

export function fullDayUbudPricePerPerson(guests: number): number {
  const tiers = FULL_DAY_UBUD_TIER_PRICES_IDR
  return tiers[Math.min(Math.max(guests, 1), tiers.length) - 1]
}

/** Licensed guide (in addition to the driver) for the whole day, one price per booking. */
export const LICENSED_GUIDE_PRICES_IDR = {
  english: 600_000,
  japanese: 700_000,
  french: 750_000,
} as const

const GUIDE_BLURB =
  "Government-licensed guide for every stop of the day — palace, Art Market, and rice terraces. Once per booking, on top of your driver."

export const FULL_DAY_UBUD_GUIDE_ADDONS = [
  {
    id: "licensed-guide-english",
    label: "Licensed guide — English",
    blurb: GUIDE_BLURB,
    perPerson: LICENSED_GUIDE_PRICES_IDR.english,
    flat: true as const,
    group: "licensed-guide",
  },
  {
    id: "licensed-guide-japanese",
    label: "Licensed guide — Japanese",
    blurb: GUIDE_BLURB,
    perPerson: LICENSED_GUIDE_PRICES_IDR.japanese,
    flat: true as const,
    group: "licensed-guide",
  },
  {
    id: "licensed-guide-french",
    label: "Licensed guide — French",
    blurb: GUIDE_BLURB,
    perPerson: LICENSED_GUIDE_PRICES_IDR.french,
    flat: true as const,
    group: "licensed-guide",
  },
]

export const FULL_DAY_UBUD_GUIDE_INTRO =
  "Your driver is not always a licensed guide. Add a government-licensed guide in English, Japanese, or French for the whole tour — one guide per booking. Pick one language."
