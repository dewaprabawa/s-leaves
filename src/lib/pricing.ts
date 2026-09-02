/**
 * Activity pricing — base costs, tier retail prices, and pickup fees.
 * Base costs are operator floor; retail tiers never go below base.
 */

export type ActivityId =
  | 'single-atv'
  | 'tandem-atv'
  | 'rafting'
  | 'canyon-tubing'
  | 'cycling'

/** Operator base cost (IDR) — do not sell at or below these */
export const BASE_COST_IDR: Record<ActivityId, number> = {
  'single-atv': 350_000,
  'tandem-atv': 450_000, // per tandem bike (2 riders)
  'rafting': 200_000, // per person
  'canyon-tubing': 175_000, // per person
  'cycling': 300_000, // per person (internal floor)
}

/** Tier 1 = 1 unit/pax, tier 2 = 2, tier 3 = 3+ */
export const TIER_PRICES_IDR: Record<ActivityId, [number, number, number]> = {
  'single-atv': [600_000, 575_000, 550_000],
  'tandem-atv': [859_000, 820_000, 790_000], // per tandem bike
  'rafting': [400_000, 375_000, 350_000],
  'canyon-tubing': [359_000, 335_000, 320_000],
  'cycling': [450_000, 425_000, 400_000],
}

export const CHILD_PRICE_IDR: Partial<Record<ActivityId, number>> = {
  'single-atv': 550_000,
  'rafting': 350_000,
  'canyon-tubing': 300_000,
}

export const PICKUP_FEE_IDR = 50_000
export const DROP_SAME_HOTEL_FEE_IDR = 50_000
export const OUT_OF_UBUD_EXTRA_IDR = 50_000 // added on top of pickup fees

/** Typical Grab / GoCar one-way Ubud ↔ arena (for comparison UI) */
export const GRAB_GOCAR_ESTIMATE = {
  oneWayMin: 45_000,
  oneWayMax: 75_000,
  oneWayTypical: 55_000,
} as const

export function getTierIndex(quantity: number): 0 | 1 | 2 {
  if (quantity >= 3) return 2
  if (quantity >= 2) return 1
  return 0
}

export function getTierLabel(quantity: number): string {
  if (quantity >= 3) return '3+ group rate'
  if (quantity >= 2) return '2+ group rate'
  return 'Standard rate'
}

export function getUnitPrice(activityId: string, quantity: number): number {
  const id = activityId as ActivityId
  const tiers = TIER_PRICES_IDR[id]
  if (!tiers) return 0
  const tier = getTierIndex(quantity)
  const price = tiers[tier]
  const floor = BASE_COST_IDR[id]
  return Math.max(price, floor)
}

export type ActivityQuoteInput = {
  activityId: string
  adults: number
  children?: number
}

export type ActivityQuote = {
  activityId: ActivityId
  unitLabel: string
  units: number
  unitPrice: number
  tierLabel: string
  activitySubtotal: number
  childCount: number
  childUnitPrice: number
  childSubtotal: number
}

export function quoteActivity(input: ActivityQuoteInput): ActivityQuote | null {
  const id = input.activityId as ActivityId
  if (!TIER_PRICES_IDR[id]) return null

  const children = input.children ?? 0

  if (id === 'tandem-atv') {
    const units = Math.max(1, Math.floor(input.adults / 2))
    const unitPrice = getUnitPrice(id, units)
    return {
      activityId: id,
      unitLabel: 'tandem bike',
      units,
      unitPrice,
      tierLabel: getTierLabel(units),
      activitySubtotal: units * unitPrice,
      childCount: 0,
      childUnitPrice: 0,
      childSubtotal: 0,
    }
  }

  const billableAdults = Math.max(input.adults, id === 'rafting' ? 2 : 1)
  const unitPrice = getUnitPrice(id, billableAdults)
  const childPrice = CHILD_PRICE_IDR[id] ?? 0

  return {
    activityId: id,
    unitLabel: id === 'single-atv' ? 'rider' : 'person',
    units: billableAdults,
    unitPrice,
    tierLabel: getTierLabel(billableAdults),
    activitySubtotal: billableAdults * unitPrice,
    childCount: children,
    childUnitPrice: childPrice,
    childSubtotal: children * childPrice,
  }
}

export type PickupQuoteInput = {
  wantsPickup: boolean
  freeUbudPickup?: boolean
  isOutUbud: boolean
  sameDropOff: boolean
}

export type PickupQuote = {
  pickupFee: number
  dropFee: number
  outOfUbudFee: number
  total: number
  grabOneWayTypical: number
  grabRoundTripTypical: number
  savingsVsGrabOneWay: number
  savingsVsGrabRoundTrip: number
}

export function quotePickup(input: PickupQuoteInput): PickupQuote {
  const grabOne = GRAB_GOCAR_ESTIMATE.oneWayTypical
  const grabRound = grabOne * 2

  if (!input.wantsPickup) {
    return {
      pickupFee: 0,
      dropFee: 0,
      outOfUbudFee: 0,
      total: 0,
      grabOneWayTypical: grabOne,
      grabRoundTripTypical: grabRound,
      savingsVsGrabOneWay: grabOne,
      savingsVsGrabRoundTrip: grabRound,
    }
  }

  if (input.freeUbudPickup && !input.isOutUbud) {
    return {
      pickupFee: 0,
      dropFee: 0,
      outOfUbudFee: 0,
      total: 0,
      grabOneWayTypical: grabOne,
      grabRoundTripTypical: grabRound,
      savingsVsGrabOneWay: grabOne,
      savingsVsGrabRoundTrip: grabRound,
    }
  }

  const pickupFee = PICKUP_FEE_IDR
  const dropFee = input.sameDropOff ? DROP_SAME_HOTEL_FEE_IDR : 0
  const outOfUbudFee = input.isOutUbud ? OUT_OF_UBUD_EXTRA_IDR : 0
  const total = pickupFee + dropFee + outOfUbudFee
  const ourRound = pickupFee + dropFee + outOfUbudFee

  return {
    pickupFee,
    dropFee,
    outOfUbudFee,
    total,
    grabOneWayTypical: grabOne,
    grabRoundTripTypical: grabRound,
    savingsVsGrabOneWay: Math.max(0, grabOne - (pickupFee + outOfUbudFee)),
    savingsVsGrabRoundTrip: Math.max(0, grabRound - ourRound),
  }
}

export function formatTierPriceTable(activityId: ActivityId): string {
  const [t1, t2, t3] = TIER_PRICES_IDR[activityId]
  const unit =
    activityId === 'tandem-atv' ? 'per tandem' : activityId === 'single-atv' ? 'per rider' : 'per person'
  return `1 ${unit}: IDR ${(t1 / 1000).toFixed(0)}k · 2 ${unit}: IDR ${(t2 / 1000).toFixed(0)}k · 3+ ${unit}: IDR ${(t3 / 1000).toFixed(0)}k`
}

/** Starting (tier-1) price for homepage cards */
export function getListPrice(activityId: string): number {
  return getUnitPrice(activityId, 1)
}

export interface PricingCalculationResult {
  baseAdultPrice: number
  adultTotal: number
  childTotal: number
  infantTotal: number
  addonsTotal: number
  grandTotal: number
  appliedOverride?: string
  appliedBracket?: boolean
}

export function calculateTourPrice(
  tour: {
    pricing?: {
      basePrice: number
      childPrice?: number | null
      infantPrice?: number | null
      groupBrackets?: Array<{
        minPax: number
        maxPax: number
        pricePerPax: number
      }> | null
      seasonalOverrides?: Array<{
        name: string
        startDate: string | Date
        endDate: string | Date
        priceOverride: number
      }> | null
    } | null
    addons?: Array<{
      id: string
      name: string
      price: number
    } | string> | null
    activityOptions?: Array<{
      name: string
      priceDiff: number
      description?: string
    }> | null
  },
  booking: {
    date: string
    adults: number
    children: number
    infants: number
    selectedAddonIds?: string[]
    selectedActivityOption?: string
  }
): PricingCalculationResult {
  const basePrice = tour.pricing?.basePrice || (tour as { basePrice?: number }).basePrice || 0
  const childPrice = tour.pricing?.childPrice || 0
  const infantPrice = tour.pricing?.infantPrice || 0

  let adultRate = basePrice
  let appliedOverride: string | undefined

  if (tour.pricing?.seasonalOverrides && booking.date) {
    const selectedDate = new Date(booking.date)
    selectedDate.setHours(0, 0, 0, 0)

    for (const override of tour.pricing.seasonalOverrides) {
      const start = new Date(override.startDate)
      const end = new Date(override.endDate)
      start.setHours(0, 0, 0, 0)
      end.setHours(0, 0, 0, 0)

      if (selectedDate >= start && selectedDate <= end) {
        adultRate = override.priceOverride
        appliedOverride = override.name
        break
      }
    }
  }

  let appliedBracket = false
  if (!appliedOverride && tour.pricing?.groupBrackets) {
    const adultsCount = booking.adults
    const matchingBracket = tour.pricing.groupBrackets.find(
      (b) => adultsCount >= b.minPax && adultsCount <= b.maxPax
    )
    if (matchingBracket) {
      adultRate = matchingBracket.pricePerPax
      appliedBracket = true
    }
  }

  let optionDiff = 0
  if (booking.selectedActivityOption && tour.activityOptions) {
    const matchedOption = tour.activityOptions.find(
      (opt) => opt.name === booking.selectedActivityOption
    )
    if (matchedOption) {
      optionDiff = matchedOption.priceDiff || 0
    }
  }

  const baseAdultPriceWithOption = adultRate + optionDiff
  const adultTotal = booking.adults * baseAdultPriceWithOption
  const childTotal = booking.children * childPrice
  const infantTotal = booking.infants * infantPrice

  let addonsTotal = 0
  if (booking.selectedAddonIds && booking.selectedAddonIds.length > 0 && tour.addons) {
    for (const addonId of booking.selectedAddonIds) {
      const matchedAddon = tour.addons.find((a) => {
        if (typeof a === 'string') return a === addonId
        return a.id === addonId
      })
      if (matchedAddon && typeof matchedAddon !== 'string') {
        addonsTotal += matchedAddon.price
      }
    }
  }

  const grandTotal = adultTotal + childTotal + infantTotal + addonsTotal

  return {
    baseAdultPrice: adultRate,
    adultTotal,
    childTotal,
    infantTotal,
    addonsTotal,
    grandTotal,
    appliedOverride,
    appliedBracket,
  }
}
