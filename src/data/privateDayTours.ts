export const FULL_DAY_UBUD_SLUG = "full-day-ubud-tour"
export const HALF_DAY_TANAH_LOT_SLUG = "half-day-ubud-tanah-lot-tour"

/** Licensed guide (in addition to the driver) for the whole tour, one price per booking. */
export const LICENSED_GUIDE_PRICES_IDR = {
  english: 600_000,
  japanese: 700_000,
  french: 750_000,
} as const

const GUIDE_LANGUAGES = [
  { key: "english", name: "English" },
  { key: "japanese", name: "Japanese" },
  { key: "french", name: "French" },
] as const

export interface PrivateDayTourPricing {
  /** Per-person price by group size: 1, 2, 3, then 4+ guests. */
  tiersIdr: readonly number[]
  guideAddons: {
    id: string
    label: string
    blurb: string
    perPerson: number
    flat: true
    group: string
  }[]
  guideIntro: string
}

function buildPricing(tiersIdr: readonly number[], stops: string): PrivateDayTourPricing {
  return {
    tiersIdr,
    guideAddons: GUIDE_LANGUAGES.map((lang) => ({
      id: `licensed-guide-${lang.key}`,
      label: `Licensed guide — ${lang.name}`,
      blurb: `Government-licensed guide for every stop — ${stops}. Once per booking, on top of your driver.`,
      perPerson: LICENSED_GUIDE_PRICES_IDR[lang.key],
      flat: true,
      group: "licensed-guide",
    })),
    guideIntro:
      "Your driver is not always a licensed guide. Add a government-licensed guide in English, Japanese, or French for the whole tour — one guide per booking. Pick one language.",
  }
}

export const PRIVATE_DAY_TOUR_PRICING: Record<string, PrivateDayTourPricing> = {
  [FULL_DAY_UBUD_SLUG]: buildPricing(
    [600_000, 500_000, 400_000, 350_000],
    "palace, Art Market, and rice terraces",
  ),
  [HALF_DAY_TANAH_LOT_SLUG]: buildPricing(
    [850_000, 700_000, 650_000, 550_000],
    "Ubud cultural stops and Tanah Lot at sunset",
  ),
}

export function getPrivateDayTourPricing(slug: string): PrivateDayTourPricing | undefined {
  return PRIVATE_DAY_TOUR_PRICING[slug]
}
