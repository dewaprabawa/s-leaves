import {
  type ActivityId,
  type ActivityQuote,
  getCompareAtSubtotal,
  getListPrice,
  quoteActivity,
} from '@/lib/pricing'

/** Activities that can be mixed into a same-day combo */
export type MixableActivityId = Exclude<ActivityId, 'cycling'>

export const ACTIVITY_SHORT_LABEL: Record<ActivityId, string> = {
  'single-atv': 'Single ATV',
  'tandem-atv': 'Tandem ATV',
  rafting: 'Whitewater Rafting',
  'canyon-tubing': 'Canyon Tubing',
  cycling: 'Ricefield Cycling',
}

/** Compatible add-ons for each primary activity (excluding cycling) */
export const MIX_ADDON_OPTIONS: Partial<
  Record<ActivityId, { id: MixableActivityId; label: string; blurb: string }[]>
> = {
  'single-atv': [
    {
      id: 'canyon-tubing',
      label: 'Canyon Tubing',
      blurb: 'Float the Wos River after the ATV track',
    },
    {
      id: 'rafting',
      label: 'Whitewater Rafting',
      blurb: 'Class II–III rapids after your ATV ride',
    },
  ],
  'tandem-atv': [
    {
      id: 'canyon-tubing',
      label: 'Canyon Tubing',
      blurb: 'Cool down on the river after tandem ATV',
    },
    {
      id: 'rafting',
      label: 'Whitewater Rafting',
      blurb: 'Land + water combo for couples & friends',
    },
  ],
  'canyon-tubing': [
    {
      id: 'single-atv',
      label: 'Single ATV',
      blurb: 'Jungle ATV before or after tubing',
    },
    {
      id: 'rafting',
      label: 'Whitewater Rafting',
      blurb: 'Tubing + rafting water day',
    },
  ],
  rafting: [
    {
      id: 'single-atv',
      label: 'Single ATV',
      blurb: 'ATV trails paired with rafting',
    },
    {
      id: 'canyon-tubing',
      label: 'Canyon Tubing',
      blurb: 'Gentler float plus rafting thrills',
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
    id: 'combo-atv-tubing',
    name: 'ATV + Canyon Tubing',
    tagline: 'Land & river classic',
    description:
      'Race jungle ATV trails at All New Bali Adventure, then float the Wos River on a tube. Our most popular same-day mix.',
    primaryId: 'single-atv',
    mixIds: ['canyon-tubing'],
    image: '/images/adventures/atv-adventure.jpg',
    duration: 'Half day',
  },
  {
    id: 'combo-tubing-rafting',
    name: 'Tubing + Rafting',
    tagline: 'Double water day',
    description:
      'Drift canyon tubing, then paddle Class II–III whitewater. Ideal if you want a full water adventure without ATV mud.',
    primaryId: 'canyon-tubing',
    mixIds: ['rafting'],
    image: '/images/adventures/canyon-tubing.jpg',
    duration: 'Half day',
  },
  {
    id: 'combo-atv-rafting',
    name: 'ATV + Rafting',
    tagline: 'Mud then rapids',
    description:
      'ATV jungle ride plus whitewater rafting — maximum thrills on land and river in one booking.',
    primaryId: 'single-atv',
    mixIds: ['rafting'],
    image: '/images/adventures/rafting.jpg',
    duration: 'Full day feel',
  },
  {
    id: 'combo-atv-tubing-rafting',
    name: 'ATV + Tubing + Rafting',
    tagline: 'Ultimate adventure day',
    description:
      'All three: ATV trails, canyon tubing, and whitewater rafting. Best for guests who want everything in one day.',
    primaryId: 'single-atv',
    mixIds: ['canyon-tubing', 'rafting'],
    image: '/images/adventures/atv-adventure.jpg',
    duration: 'Full day',
  },
]

/** Combo discount: 10% for 2 activities, 12% for 3+ */
export function getComboDiscountPercent(activityCount: number): number {
  if (activityCount >= 3) return 12
  if (activityCount >= 2) return 10
  return 0
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
