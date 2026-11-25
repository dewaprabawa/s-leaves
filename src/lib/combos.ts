import {
  type ActivityId,
  type ActivityQuote,
  getCompareAtSubtotal,
  getListPrice,
  quoteActivity,
} from '@/lib/pricing'

/** Activities that can be mixed into a same-day combo */
export type MixableActivityId = Exclude<
  ActivityId,
  | 'cycling'
  | 'kintamani-day'
  | 'swing-heaven'
  | 'swing-heaven-lunch'
  | 'aloha-ubud-swing'
  | 'aloha-ubud-swing-entrance'
  | 'jeep-tracking'
>

export const ACTIVITY_SHORT_LABEL: Record<string, string> = {
  'single-atv': 'Single ATV',
  'tandem-atv': 'Tandem ATV',
  rafting: 'Whitewater Rafting',
  'canyon-tubing': 'Canyon Tubing',
  cycling: 'Ricefield Cycling',
  'jeep-sunrise': 'Private Batur Jeep',
  'jeep-tracking': 'Private Tracking Jeep',
  'kintamani-day': 'Private Kintamani Day',
  'swing-heaven': 'Swing Heaven',
  'swing-heaven-lunch': 'Swing Heaven + Lunch',
  'aloha-ubud-swing': 'Aloha Ubud Swing Active Package',
  'aloha-ubud-swing-entrance': 'Aloha Ubud Swing Entrance',
  'ubud-kecak': 'Ubud Kecak',
}

/** Compatible add-ons for each primary activity (excluding cycling) */
export const MIX_ADDON_OPTIONS: Partial<
  Record<ActivityId, { id: MixableActivityId; label: string; blurb: string }[]>
> = {
  'single-atv': [
    {
      id: 'rafting',
      label: 'Ayung rafting',
      blurb: 'Class II–III after the ATV · same guest count · 10% combo off',
    },
    {
      id: 'canyon-tubing',
      label: 'Wos canyon tubing',
      blurb: 'Gentler river after the ATV · same guest count · 10% combo off',
    },
  ],
  'tandem-atv': [
    {
      id: 'rafting',
      label: 'Ayung rafting',
      blurb: 'Class II–III after tandem ATV · 10% combo off',
    },
    {
      id: 'canyon-tubing',
      label: 'Wos canyon tubing',
      blurb: 'Cool-down float after tandem ATV · 10% combo off',
    },
  ],
  'canyon-tubing': [
    {
      id: 'single-atv',
      label: 'Jungle ATV',
      blurb: 'Sedang mud track before or after tubing · 10% combo off',
    },
  ],
  rafting: [
    {
      id: 'single-atv',
      label: 'Jungle ATV',
      blurb: 'Sedang mud track with your rafting day · 10% combo off',
    },
  ],
}

/** Featured combo packages for homepage / book page */
export type FeaturedCombo = {
  id: string
  name: string
  tagline: string
  description: string
  primaryId: MixableActivityId
  mixIds: MixableActivityId[]
  image: string
  duration: string
}

export const FEATURED_COMBOS: FeaturedCombo[] = [
  {
    id: 'combo-atv-rafting',
    name: 'ATV + Rafting',
    tagline: 'Flagship land + water day',
    description:
      'Sedang ATV then Ayung Class II–III rafting. From IDR 1,250,000 at list (750K + 500K). 10% mix at checkout. Pickup IDR 400,000 once or self-meet.',
    primaryId: 'single-atv',
    mixIds: ['rafting'],
    image: '/images/adventures/rafting.jpg',
    duration: 'Full day feel',
  },
  {
    id: 'combo-atv-tubing',
    name: 'ATV + Canyon Tubing',
    tagline: 'Gentler river add-on',
    description:
      'Sedang ATV then Wos sit-on-tube. From IDR 1,250,000 at list (750K + 500K). 10% mix at checkout. Pickup IDR 400,000 once or self-meet. Tubing lunch not included.',
    primaryId: 'single-atv',
    mixIds: ['canyon-tubing'],
    image: '/images/adventures/atv-mud-river-splash.jpg',
    duration: 'Half day',
  },
  {
    id: 'combo-atv-tubing-rafting',
    name: 'ATV + Tubing + Rafting',
    tagline: 'Ultimate adventure day',
    description:
      'All three: ATV trails, canyon tubing, and whitewater rafting. Best for guests who want everything in one day.',
    primaryId: 'single-atv',
    mixIds: ['canyon-tubing', 'rafting'],
    image: '/images/adventures/atv-arena-quad-fleet.jpg',
    duration: 'Full day',
  },
]

/** Combo discount: 10% for 2 activities, 12% for 3+ */
export function getComboDiscountPercent(activityCount: number): number {
  if (activityCount >= 3) return 12
  if (activityCount >= 2) return 10
  return 0
}

/**
 * Quote single ATV bikes + tandem ATV bikes in one booking.
 * Single and tandem together do **not** unlock a combo discount — only a
 * different activity (rafting / tubing) does.
 */
export function quoteAtvFleet(input: {
  singleBikes: number
  tandemBikes: number
  children?: number
  mixIds?: string[]
}): MixedActivityQuote | null {
  const singles = Math.max(0, Math.floor(input.singleBikes))
  const tandems = Math.max(0, Math.floor(input.tandemBikes))
  const children = input.children ?? 0
  if (singles + tandems === 0) return null
  if (children > 0 && singles === 0) return null

  const quotes: ActivityQuote[] = []
  const labels: string[] = []

  if (singles > 0) {
    const q = quoteActivity({
      activityId: 'single-atv',
      adults: singles,
      children,
    })
    if (!q) return null
    quotes.push(q)
    labels.push(ACTIVITY_SHORT_LABEL['single-atv'])
  }

  if (tandems > 0) {
    const q = quoteActivity({
      activityId: 'tandem-atv',
      adults: tandems * 2,
    })
    if (!q) return null
    quotes.push(q)
    labels.push(ACTIVITY_SHORT_LABEL['tandem-atv'])
  }

  const guestAdults = singles + tandems * 2
  const mixIds = (input.mixIds ?? []).filter(
    (id) => id !== 'single-atv' && id !== 'tandem-atv',
  )
  for (const id of mixIds) {
    const q = quoteActivity({
      activityId: id,
      adults: Math.max(guestAdults, id === 'rafting' ? 2 : 1),
      children,
    })
    if (!q) return null
    quotes.push(q)
    labels.push(ACTIVITY_SHORT_LABEL[q.activityId] ?? q.activityId)
  }

  const activitiesSubtotal = quotes.reduce(
    (sum, q) => sum + q.activitySubtotal + q.childSubtotal,
    0,
  )
  const compareAtSubtotal = quotes.reduce(
    (sum, q) => sum + getCompareAtSubtotal(q) + q.childSubtotal,
    0,
  )
  // ATV bike mix counts as one activity for discount; water add-ons add more.
  const activityCountForDiscount = 1 + mixIds.length
  const discountPercent = getComboDiscountPercent(activityCountForDiscount)
  const discountAmount = Math.round(activitiesSubtotal * (discountPercent / 100))
  const discountedSubtotal = activitiesSubtotal - discountAmount

  return {
    quotes,
    labels,
    activitiesSubtotal,
    compareAtSubtotal,
    discountPercent,
    discountAmount,
    discountedSubtotal,
  }
}

export function atvFleetGuestCount(singleBikes: number, tandemBikes: number): number {
  return Math.max(0, Math.floor(singleBikes)) + Math.max(0, Math.floor(tandemBikes)) * 2
}

export type MixedActivityQuote = {
  quotes: ActivityQuote[]
  labels: string[]
  activitiesSubtotal: number
  compareAtSubtotal: number
  discountPercent: number
  discountAmount: number
  discountedSubtotal: number
}

export function quoteMixedActivities(input: {
  primaryId: string
  mixIds: string[]
  adults: number
  children?: number
}): MixedActivityQuote | null {
  const ids = [input.primaryId, ...input.mixIds.filter((id) => id !== input.primaryId)]
  const uniqueIds = [...new Set(ids)]
  const quotes: ActivityQuote[] = []
  const labels: string[] = []

  for (const id of uniqueIds) {
    const q = quoteActivity({
      activityId: id,
      adults: input.adults,
      children: input.children,
    })
    if (!q) return null
    quotes.push(q)
    labels.push(ACTIVITY_SHORT_LABEL[q.activityId] ?? q.activityId)
  }

  const activitiesSubtotal = quotes.reduce(
    (sum, q) => sum + q.activitySubtotal + q.childSubtotal,
    0,
  )
  const compareAtSubtotal = quotes.reduce(
    (sum, q) => sum + getCompareAtSubtotal(q) + q.childSubtotal,
    0,
  )
  const discountPercent = getComboDiscountPercent(quotes.length)
  const discountAmount = Math.round(activitiesSubtotal * (discountPercent / 100))
  const discountedSubtotal = activitiesSubtotal - discountAmount

  return {
    quotes,
    labels,
    activitiesSubtotal,
    compareAtSubtotal,
    discountPercent,
    discountAmount,
    discountedSubtotal,
  }
}

/** Starting list price for a featured combo (1 pax / 1 unit, with discount) */
export function getComboListPrice(combo: FeaturedCombo): number {
  const mix = quoteMixedActivities({
    primaryId: combo.primaryId,
    mixIds: combo.mixIds,
    adults: combo.primaryId === 'rafting' ? 2 : 1,
    children: 0,
  })
  return mix?.discountedSubtotal ?? 0
}

/** Undiscounted sum of list prices for compare-at display */
export function getComboCompareAtPrice(combo: FeaturedCombo): number {
  const adults = combo.primaryId === 'rafting' ? 2 : 1
  const ids = [combo.primaryId, ...combo.mixIds]
  return ids.reduce((sum, id) => {
    const q = quoteActivity({ activityId: id, adults, children: 0 })
    return sum + (q ? getCompareAtSubtotal(q) : getListPrice(id) * adults)
  }, 0)
}

export function getFeaturedComboById(id: string): FeaturedCombo | undefined {
  return FEATURED_COMBOS.find((c) => c.id === id)
}
