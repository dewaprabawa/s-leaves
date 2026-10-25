import { PICKUP_FEE_IDR, PICKUP_FEE_SOUTH_IDR } from '@/lib/pricing'

/**
 * How the private shuttle works per tour:
 * - optional: Ubud IDR 400,000 or south coast IDR 650,000 once per booking, or self-meet
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
  'ubud-kecak-dance': 'optional',
  'atv-premium-package-bali': 'included',
  'swing-heaven-bali': 'required',
  'aloha-ubud-swing': 'required',
}

export function getPrivateShuttleMode(slug: string): PrivateShuttleMode | null {
  return PRIVATE_SHUTTLE_TOURS[slug] ?? null
}

export const PRIVATE_SHUTTLE_ARTICLE_SLUG = 'private-shuttle-vs-grab-bali-activities-2026'

export const PRIVATE_SHUTTLE_SOUTH_AREAS =
  'Canggu, Kuta, Legian, Seminyak, Jimbaran, Sanur, Nusa Dua, or Uluwatu'

export type PrivateShuttleAddon = {
  key: 'ubud' | 'south'
  title: string
  priceIdr: number
  priceLabel: string
  body: string
}

const idr = (n: number) => `IDR ${n.toLocaleString('id-ID')}`

export const PRIVATE_SHUTTLE_ADDONS: readonly PrivateShuttleAddon[] = [
  {
    key: 'ubud',
    title: 'Private shuttle from Ubud',
    priceIdr: PICKUP_FEE_IDR,
    priceLabel: `${idr(PICKUP_FEE_IDR)} once`,
    body:
      'Hotel pickup and drop-off in Ubud. A car and driver for your group only: the driver waits during the activity, then drives you back, so there is no Grab to book.',
  },
  {
    key: 'south',
    title: 'Private shuttle from the south coast',
    priceIdr: PICKUP_FEE_SOUTH_IDR,
    priceLabel: `${idr(PICKUP_FEE_SOUTH_IDR)} once`,
    body: `Hotel pickup and drop-off in ${PRIVATE_SHUTTLE_SOUTH_AREAS}. A car and driver for your group only: the driver waits during the activity, then drives you back.`,
  },
] as const

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
  if (mode === 'required') {
    return `Required for this activity — ${idr(PICKUP_FEE_IDR)} from Ubud, or ${idr(PICKUP_FEE_SOUTH_IDR)} from the south coast (no self-meet).`
  }
  return `${idr(PICKUP_FEE_IDR)} from Ubud, or ${idr(PICKUP_FEE_SOUTH_IDR)} from the south coast — once per booking, pickup and return.`
}

export const PRIVATE_SHUTTLE_FAQ_QUESTION = 'Do I need to book a Grab for pickup and drop-off?'

export function privateShuttleFaqAnswer(mode: PrivateShuttleMode): string {
  const core =
    'Your driver collects you at your hotel, waits while you do the activity, and drives you back — a private car for your group only, with quality local drivers we trust. No ordering a Grab or Gojek there and back, so you can focus on the activity.'
  const tiers = `Ubud ${idr(PICKUP_FEE_IDR)} once, or south coast (${PRIVATE_SHUTTLE_SOUTH_AREAS}) ${idr(PICKUP_FEE_SOUTH_IDR)} once.`
  if (mode === 'included') return `No. The private shuttle is included in the package price. ${core}`
  if (mode === 'required') {
    return `No. The shuttle is required for this activity — ${tiers} ${core}`
  }
  return `No — add our private shuttle: ${tiers} ${core} Prefer your own driver, a Grab, or a Gojek? That is always fine; self-meet at the venue has no transport fee.`
}

export function privateShuttleBookingLabel(isOutUbud: boolean): string {
  return isOutUbud
    ? `Private shuttle from the south coast · ${idr(PICKUP_FEE_SOUTH_IDR)} once`
    : `Private shuttle from Ubud · ${idr(PICKUP_FEE_IDR)} once`
}
