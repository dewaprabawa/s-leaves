export const LICENSED_GUIDE_SLUG = "licensed-tour-guide-bali"

/**
 * Licensed guide fee per booking — covers GUIDE_ONLY_HOURS, or the whole scheduled
 * tour as an add-on (when the tour already includes a car/driver).
 */
export const LICENSED_GUIDE_PRICES_IDR = {
  english: 600_000,
  japanese: 700_000,
  french: 750_000,
} as const

export type GuideLanguageKey = keyof typeof LICENSED_GUIDE_PRICES_IDR

export const GUIDE_LANGUAGES: readonly { key: GuideLanguageKey; name: string }[] = [
  { key: "english", name: "English" },
  { key: "japanese", name: "Japanese" },
  { key: "french", name: "French" },
]

export const GUIDE_ONLY_HOURS = 8
export const GUIDE_EXTRA_HOUR_IDR = 150_000
/** Extra hours bookable online; longer days go to WhatsApp. */
export const GUIDE_MAX_EXTRA_HOURS = 4

export const GUIDE_EXTRA_HOUR_ADDON = {
  id: "guide-extra-hour",
  label: "Extra guide hour",
  blurb: `Your booking includes ${GUIDE_ONLY_HOURS} hours. Add hours here if your day runs longer.`,
  perPerson: GUIDE_EXTRA_HOUR_IDR,
  maxQty: GUIDE_MAX_EXTRA_HOURS,
  unitLabel: "per hour",
}

export const GUIDE_SHUTTLE_MAX_GUESTS = 6

/** English guide only — optional car + driver, quoted on WhatsApp. */
export const GUIDE_SHUTTLE_ADDON = {
  id: "guide-private-shuttle",
  label: "Private shuttle (car + driver)",
  blurb: `Need transport too? Add a private car and driver for the whole guided day, extra hours included — up to ${GUIDE_SHUTTLE_MAX_GUESTS} guests per car. Bigger groups get a van quote.`,
  perPerson: 0,
  flat: true as const,
  quoteOnly: true,
}

/**
 * Japanese and French standalone bookings must include a private driver.
 * Ubud-area total (guide + driver) is GUIDE_UBUD_WITH_DRIVER_IDR.
 * Outside Ubud: guide fee + GUIDE_OUTSIDE_DRIVER_IDR.
 */
export const GUIDE_LANGUAGES_REQUIRING_DRIVER: readonly GuideLanguageKey[] = [
  "japanese",
  "french",
]

export const GUIDE_UBUD_WITH_DRIVER_IDR = 850_000
export const GUIDE_OUTSIDE_DRIVER_IDR = 550_000

export function guideRequiresDriver(lang: GuideLanguageKey): boolean {
  return (GUIDE_LANGUAGES_REQUIRING_DRIVER as readonly string[]).includes(lang)
}

/** Driver fee when Japanese/French is booked standalone (not as a tour add-on). */
export function guideRequiredDriverFeeIdr(
  lang: GuideLanguageKey,
  outsideUbud: boolean,
): number {
  if (!guideRequiresDriver(lang)) return 0
  if (outsideUbud) return GUIDE_OUTSIDE_DRIVER_IDR
  return GUIDE_UBUD_WITH_DRIVER_IDR - LICENSED_GUIDE_PRICES_IDR[lang]
}

/** Standalone Japanese/French total for the hotel area. English is guide-only. */
export function guideStandaloneTotalIdr(
  lang: GuideLanguageKey,
  outsideUbud: boolean,
): number {
  if (lang === "english") return LICENSED_GUIDE_PRICES_IDR.english
  return LICENSED_GUIDE_PRICES_IDR[lang] + guideRequiredDriverFeeIdr(lang, outsideUbud)
}

export function guideRequiredDriverFees(lang: GuideLanguageKey): {
  ubud: number
  outside: number
} | null {
  if (!guideRequiresDriver(lang)) return null
  return {
    ubud: guideRequiredDriverFeeIdr(lang, false),
    outside: GUIDE_OUTSIDE_DRIVER_IDR,
  }
}

export const GUIDE_MEET_COPY = {
  title: "Guide meets you at your hotel or first stop",
  body: "The guide's own transport is included. Need a car too? Tick the private shuttle option — price quoted on WhatsApp. Drop your hotel or first-stop pin below.",
  short: "Guide meets you here (guide transport included)",
}

export const GUIDE_WITH_DRIVER_MEET_COPY = {
  title: "Private driver included — pin your hotel",
  body: `Japanese and French licensed guides include a private car and driver (up to ${GUIDE_SHUTTLE_MAX_GUESTS} guests). Ubud-area total IDR ${(GUIDE_UBUD_WITH_DRIVER_IDR / 1000).toFixed(0)},000. Outside Ubud: guide fee + IDR ${(GUIDE_OUTSIDE_DRIVER_IDR / 1000).toFixed(0)},000 for the driver. Drop your hotel pin below.`,
  short: "Hotel pin (private driver included)",
}

export const GUIDE_EXTRA_HOURS_INTRO = `The price covers ${GUIDE_ONLY_HOURS} hours with your guide, once per booking — not per person. English can stay guide only, or add a separate private shuttle (quoted on WhatsApp). Japanese and French include a private driver — IDR ${(GUIDE_UBUD_WITH_DRIVER_IDR / 1000).toFixed(0)},000 total in the Ubud area, or guide fee + IDR ${(GUIDE_OUTSIDE_DRIVER_IDR / 1000).toFixed(0)},000 outside Ubud. Need more time? Extra hours are IDR 150,000 each.`

export const GUIDE_OVERRUN_NOTE =
  "If the day runs past the tour's normal length, extra guide time is IDR 150,000 per hour."
