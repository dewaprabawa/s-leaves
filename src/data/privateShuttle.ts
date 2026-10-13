import { PICKUP_FEE_IDR } from '@/lib/pricing'

/**
 * How the private shuttle works per tour:
 * - optional: IDR 400,000 once per booking, or self-meet with your own driver / Grab / Gojek
 * - included: built into the package price
 * - required: must be booked (no self-meet), so never say "use your own driver"
 */
export type PrivateShuttleMode = 'optional' | 'included' | 'required'

export const PRIVATE_SHUTTLE_TOURS: Record<string, PrivateShuttleMode> = {
  'bali-atv-adventure': 'optional',
  'atv-rafting-combo': 'optional',
  'whitewater-rafting': 'optional',
  'canyon-tubing': 'optional',
  'griya-beji-waterfall': 'optional',
  'atv-premium-package-bali': 'included',
  'swing-heaven-bali': 'required',
}

export function getPrivateShuttleMode(slug: string): PrivateShuttleMode | null {
  return PRIVATE_SHUTTLE_TOURS[slug] ?? null
}

export const PRIVATE_SHUTTLE_ARTICLE_SLUG = 'private-shuttle-vs-grab-bali-activities-2026'

const fee = `IDR ${PICKUP_FEE_IDR.toLocaleString('en-US')}`

export const PRIVATE_SHUTTLE_POINTS = [
  'Private car for your group only — not shared with other guests.',
  'Your driver waits while you do the activity, then drives you back.',
  'No booking a Grab or Gojek there and back, and no hunting for a ride home afterwards.',
  'Quality local drivers we trust, so you can focus on the activity.',
] as const

export const PRIVATE_SHUTTLE_OWN_DRIVER =
  'Prefer your own driver, a Grab, or a Gojek? That is always fine — self-meet at the venue has no transport fee.'

export function privateShuttlePriceLine(mode: PrivateShuttleMode): string {
  if (mode === 'included') return 'Included in the package price.'
  if (mode === 'required') return `Required for this activity — ${fee} once per booking (no self-meet).`
  return `${fee} once per booking, pickup and return.`
}

export const PRIVATE_SHUTTLE_FAQ_QUESTION = 'Do I need to book a Grab for pickup and drop-off?'

export function privateShuttleFaqAnswer(mode: PrivateShuttleMode): string {
  const core =
    'Your driver collects you at your hotel, waits while you do the activity, and drives you back — a private car for your group only, with quality local drivers we trust. No ordering a Grab or Gojek there and back, so you can focus on the activity.'
  if (mode === 'included') return `No. The private shuttle is included in the package price. ${core}`
  if (mode === 'required') {
    return `No. The shuttle is required for this activity (${fee} once per booking, no self-meet). ${core}`
  }
  return `No — add our private shuttle for ${fee} once per booking. ${core} Prefer your own driver, a Grab, or a Gojek? That is always fine; self-meet at the venue has no transport fee.`
}
