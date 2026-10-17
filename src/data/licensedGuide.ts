export const LICENSED_GUIDE_SLUG = "licensed-tour-guide-bali"

/**
 * Licensed guide fee per booking — covers GUIDE_ONLY_HOURS, or the whole scheduled
 * tour as an add-on (when the tour already includes a car/driver).
 * All languages can book guide only.
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
export const GUIDE_SHUTTLE_ADDON_ID = "guide-private-shuttle"

/**
 * Optional Japanese / French tour option: licensed guide + private driver.
 * Ubud-area total is GUIDE_UBUD_WITH_DRIVER_IDR.
 * Outside Ubud: guide fee + GUIDE_OUTSIDE_DRIVER_IDR.
 */
export const GUIDE_WITH_DRIVER_LANGUAGES: readonly GuideLanguageKey[] = [
  "japanese",
  "french",
]

export const GUIDE_UBUD_WITH_DRIVER_IDR = 850_000
export const GUIDE_OUTSIDE_DRIVER_IDR = 550_000

export function guideOffersWithDriverOption(lang: GuideLanguageKey): boolean {
  return (GUIDE_WITH_DRIVER_LANGUAGES as readonly string[]).includes(lang)
}

/**
 * Private driver fee for a language + hotel area.
 * Ubud: so guide + driver totals GUIDE_UBUD_WITH_DRIVER_IDR.
 * Outside Ubud: flat GUIDE_OUTSIDE_DRIVER_IDR.
 */
export function guideDriverFeeIdr(lang: GuideLanguageKey, outsideUbud: boolean): number {
  if (outsideUbud) return GUIDE_OUTSIDE_DRIVER_IDR
  return GUIDE_UBUD_WITH_DRIVER_IDR - LICENSED_GUIDE_PRICES_IDR[lang]
}

/** Driver line when the Japanese/French with-driver tour option is selected. */
export function guideWithDriverFeeIdr(
  lang: GuideLanguageKey,
  outsideUbud: boolean,
): number {
  if (!guideOffersWithDriverOption(lang)) return 0
  return guideDriverFeeIdr(lang, outsideUbud)
}

/** Total for the Japanese/French with-driver tour option. */
export function guideWithDriverTotalIdr(
  lang: GuideLanguageKey,
  outsideUbud: boolean,
): number {
  if (!guideOffersWithDriverOption(lang)) return LICENSED_GUIDE_PRICES_IDR[lang]
  return LICENSED_GUIDE_PRICES_IDR[lang] + guideWithDriverFeeIdr(lang, outsideUbud)
}

export function guideWithDriverFees(lang: GuideLanguageKey): {
  ubud: number
  outside: number
} | null {
  if (!guideOffersWithDriverOption(lang)) return null
  return {
    ubud: guideDriverFeeIdr(lang, false),
    outside: GUIDE_OUTSIDE_DRIVER_IDR,
  }
}

/** Optional private shuttle on guide-only bookings — published Ubud / outside IDR. */
export function buildGuideShuttleAddon(lang: GuideLanguageKey) {
  const ubud = guideDriverFeeIdr(lang, false)
  const outside = GUIDE_OUTSIDE_DRIVER_IDR
  return {
    id: GUIDE_SHUTTLE_ADDON_ID,
    label: "Private shuttle (car + driver)",
    blurb: `Private car and driver for the whole guided day (up to ${GUIDE_SHUTTLE_MAX_GUESTS} guests). Ubud area ${formatGuideIdr(ubud)}; outside Ubud ${formatGuideIdr(outside)}. Your hotel pin sets the rate. Bigger groups get a van quote on WhatsApp.`,
    perPerson: ubud,
    flat: true as const,
    unitLabel: "per booking · Ubud from-price",
    zonedFeesIdr: { ubud, outside } as const,
  }
}

function formatGuideIdr(amount: number) {
  return `IDR ${amount.toLocaleString("id-ID")}`
}

export const GUIDE_MEET_COPY = {
  title: "Guide meets you at your hotel or first stop",
  body: "The guide's own transport is included. Need a car too? Tick private shuttle — Ubud and outside rates are published — or choose the Japanese/French with-driver tour option. Drop your hotel or first-stop pin below.",
  short: "Guide meets you here (guide transport included)",
}

export const GUIDE_WITH_DRIVER_MEET_COPY = {
  title: "Private driver included — pin your hotel",
  body: `This Japanese/French option includes a private car and driver (up to ${GUIDE_SHUTTLE_MAX_GUESTS} guests). Ubud-area total IDR ${(GUIDE_UBUD_WITH_DRIVER_IDR / 1000).toFixed(0)},000. Outside Ubud: guide fee + IDR ${(GUIDE_OUTSIDE_DRIVER_IDR / 1000).toFixed(0)},000 for the driver. Prefer guide only? Pick the guide-only language option instead.`,
  short: "Hotel pin (private driver included)",
}

export const GUIDE_EXTRA_HOURS_INTRO = `The price covers ${GUIDE_ONLY_HOURS} hours with your guide, once per booking — not per person. Every language can book guide only. Need a car? Add private shuttle (Ubud rate brings the day to IDR ${(GUIDE_UBUD_WITH_DRIVER_IDR / 1000).toFixed(0)},000 total; outside Ubud guide + IDR ${(GUIDE_OUTSIDE_DRIVER_IDR / 1000).toFixed(0)},000), or choose the Japanese/French with-driver tour option. Need more time? Extra hours are IDR 150,000 each.`

export const GUIDE_OVERRUN_NOTE =
  "If the day runs past the tour's normal length, extra guide time is IDR 150,000 per hour."
