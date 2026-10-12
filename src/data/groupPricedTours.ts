import { GUIDE_LANGUAGES, GUIDE_OVERRUN_NOTE, LICENSED_GUIDE_PRICES_IDR } from "@/data/licensedGuide"

export const FULL_DAY_UBUD_SLUG = "full-day-ubud-tour"
export const HALF_DAY_TANAH_LOT_SLUG = "half-day-ubud-tanah-lot-tour"
export const LUWAK_COFFEE_SLUG = "luwak-coffee-plantation"

export interface GroupPricedTour {
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

function buildPricing(
  tiersIdr: readonly number[],
  { stops, guideIntro, blurbSuffix }: { stops: string; guideIntro: string; blurbSuffix: string },
): GroupPricedTour {
  return {
    tiersIdr,
    guideAddons: GUIDE_LANGUAGES.map((lang) => ({
      id: `licensed-guide-${lang.key}`,
      label: `Licensed guide — ${lang.name}`,
      blurb: `Government-licensed guide for every stop — ${stops}. Once per booking, ${blurbSuffix}.`,
      perPerson: LICENSED_GUIDE_PRICES_IDR[lang.key],
      flat: true,
      group: "licensed-guide",
    })),
    guideIntro,
  }
}

const DRIVER_GUIDE_INTRO = `Your driver is not always a licensed guide. Add a government-licensed guide in English, Japanese, or French for the whole tour — one guide per booking. Pick one language. ${GUIDE_OVERRUN_NOTE}`

export const GROUP_PRICED_TOURS: Record<string, GroupPricedTour> = {
  [FULL_DAY_UBUD_SLUG]: buildPricing([600_000, 500_000, 400_000, 350_000], {
    stops: "palace, Art Market, and rice terraces",
    guideIntro: DRIVER_GUIDE_INTRO,
    blurbSuffix: "on top of your driver",
  }),
  [HALF_DAY_TANAH_LOT_SLUG]: buildPricing([850_000, 700_000, 650_000, 550_000], {
    stops: "Ubud cultural stops and Tanah Lot at sunset",
    guideIntro: DRIVER_GUIDE_INTRO,
    blurbSuffix: "on top of your driver",
  }),
  [LUWAK_COFFEE_SLUG]: buildPricing([850_000, 700_000, 650_000, 550_000], {
    stops: "jungle walk, roasting, and tasting",
    guideIntro: `Want the plantation, roasting, and Kopi Luwak story explained in your language? Add a government-licensed guide in English, Japanese, or French for the whole visit — one guide per booking. Pick one language. ${GUIDE_OVERRUN_NOTE}`,
    blurbSuffix: "on top of the plantation host",
  }),
}

export function getGroupPricedTour(slug: string): GroupPricedTour | undefined {
  return GROUP_PRICED_TOURS[slug]
}
