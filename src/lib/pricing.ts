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
  const basePrice = tour.pricing?.basePrice || 0
  const childPrice = tour.pricing?.childPrice || 0
  const infantPrice = tour.pricing?.infantPrice || 0

  // 1. Determine base adult rate (check seasonal overrides first)
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

  // 2. Check group brackets if no seasonal override was applied
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

  // 3. Compute totals
  let optionDiff = 0
  if (booking.selectedActivityOption && tour.activityOptions) {
    const matchedOption = tour.activityOptions.find(
      (opt: any) => opt.name === booking.selectedActivityOption
    )
    if (matchedOption) {
      optionDiff = matchedOption.priceDiff || 0
    }
  }

  const baseAdultPriceWithOption = adultRate + optionDiff
  const adultTotal = booking.adults * baseAdultPriceWithOption
  const childTotal = booking.children * childPrice
  const infantTotal = booking.infants * infantPrice

  // 4. Compute add-ons (if selectedAddonIds are provided)
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
    appliedBracket
  }
}
