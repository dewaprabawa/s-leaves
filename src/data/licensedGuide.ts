export const LICENSED_GUIDE_SLUG = "licensed-tour-guide-bali"

/** Licensed guide price per booking — covers a guide-only booking of GUIDE_ONLY_HOURS, or the whole scheduled tour as an add-on. */
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

export const GUIDE_ONLY_HOURS = 4
export const GUIDE_EXTRA_HOUR_IDR = 150_000
/** Extra hours bookable online; longer days go to WhatsApp. */
export const GUIDE_MAX_EXTRA_HOURS = 8

export const GUIDE_EXTRA_HOUR_ADDON = {
  id: "guide-extra-hour",
  label: "Extra guide hour",
  blurb: `Your booking includes ${GUIDE_ONLY_HOURS} hours. Add hours here if your day runs longer.`,
  perPerson: GUIDE_EXTRA_HOUR_IDR,
  maxQty: GUIDE_MAX_EXTRA_HOURS,
  unitLabel: "per hour",
}

export const GUIDE_SHUTTLE_MAX_GUESTS = 6

export const GUIDE_SHUTTLE_ADDON = {
  id: "guide-private-shuttle",
  label: "Private shuttle (car + driver)",
  blurb: `Need transport too? Add a private car and driver for the whole guided day, extra hours included — up to ${GUIDE_SHUTTLE_MAX_GUESTS} guests per car. Bigger groups get a van quote.`,
  perPerson: 0,
  flat: true as const,
  quoteOnly: true,
}

export const GUIDE_MEET_COPY = {
  title: "Guide meets you at your hotel or first stop",
  body: "The guide's own transport is included. Need a car too? Tick the private shuttle option — price quoted on WhatsApp. Drop your hotel or first-stop pin below.",
  short: "Guide meets you here (guide transport included)",
}

export const GUIDE_EXTRA_HOURS_INTRO = `The price covers ${GUIDE_ONLY_HOURS} hours with your guide, once per booking — not per person. Book the guide only, or add a separate private shuttle (quoted on WhatsApp). Need more time? Extra hours are IDR 150,000 each.`

export const GUIDE_OVERRUN_NOTE =
  "If the day runs past the tour's normal length, extra guide time is IDR 150,000 per hour."
