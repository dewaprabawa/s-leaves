import type { AdminActivity, TransferOption } from '@/lib/adminInvoiceCatalog'
import {
  DROP_SAME_HOTEL_FEE_IDR,
  OUT_OF_UBUD_EXTRA_IDR,
  PICKUP_FEE_IDR,
  quoteActivity,
} from '@/lib/pricing'
import { formatIdr } from '@/lib/whatsapp'

export type InvoiceBuilderPricingInput = {
  activity: AdminActivity
  priceMode: 'auto' | 'manual'
  manualAdultPrice: number
  manualChildPrice: number
  adults: number
  children: number
  locationMode: 'popular' | 'custom' | 'self-meet'
  transferOption: TransferOption
  sameDropOff: boolean
  isOutUbud: boolean
  customTransferFee: number
  customTransferNote: string
}

export type InvoiceBuilderPricingResult = {
  lineItems: { label: string; amount: number }[]
  activityTotal: number
  transferTotal: number
  packageTotal: number
}

export function calculateAdminInvoicePricing(
  input: InvoiceBuilderPricingInput,
): InvoiceBuilderPricingResult {
  const {
    activity,
    priceMode,
    manualAdultPrice,
    manualChildPrice,
    adults,
    children,
    locationMode,
    transferOption,
    sameDropOff,
    isOutUbud,
    customTransferFee,
    customTransferNote,
  } = input

  const lineItems: { label: string; amount: number }[] = []
  let activityTotal = 0

  const useCatalogAuto =
    priceMode === 'auto' && Boolean(activity.catalogId) && !activity.isTemporary

  if (useCatalogAuto && activity.catalogId) {
    const q = quoteActivity({
      activityId: activity.catalogId,
      adults,
      children,
    })
    if (q) {
      if (q.activityId === 'tandem-atv') {
        lineItems.push({
          label: `${activity.name} — ${adults} riders · ${q.units} ${q.unitLabel} × ${formatIdr(q.unitPrice)} (${q.tierLabel})`,
          amount: q.activitySubtotal,
        })
      } else {
        lineItems.push({
          label: `${activity.name} — ${q.units} adult(s) × ${formatIdr(q.unitPrice)} (${q.tierLabel})`,
          amount: q.activitySubtotal,
        })
      }
      activityTotal += q.activitySubtotal
      if (q.childCount > 0 && q.childSubtotal > 0) {
        lineItems.push({
          label: `${activity.name} — ${q.childCount} child(ren) × ${formatIdr(q.childUnitPrice)}`,
          amount: q.childSubtotal,
        })
        activityTotal += q.childSubtotal
      }
    }
  } else {
    const adultUnit = Math.max(0, Number(manualAdultPrice) || 0)
    const childUnit = Math.max(0, Number(manualChildPrice) || 0)
    const adultSub = adults * adultUnit
    lineItems.push({
      label: `${activity.name} — ${adults} adult(s) × ${formatIdr(adultUnit)}`,
      amount: adultSub,
    })
    activityTotal += adultSub
    if (children > 0) {
      const childSub = children * childUnit
      lineItems.push({
        label: `${activity.name} — ${children} child(ren) × ${formatIdr(childUnit)}`,
        amount: childSub,
      })
      activityTotal += childSub
    }
  }

  let transferTotal = 0
  const effectiveTransfer: TransferOption =
    locationMode === 'self-meet' ? 'none' : transferOption

  if (effectiveTransfer === 'other') {
    transferTotal = Math.max(0, Number(customTransferFee) || 0)
    if (transferTotal > 0 || customTransferNote.trim()) {
      lineItems.push({
        label: customTransferNote.trim() || 'Custom transfer',
        amount: transferTotal,
      })
    }
  } else if (effectiveTransfer !== 'none') {
    const wantsPickup =
      effectiveTransfer === 'pickup' || effectiveTransfer === 'pickup-drop'
    const wantsDrop =
      effectiveTransfer === 'drop' ||
      effectiveTransfer === 'pickup-drop' ||
      (effectiveTransfer === 'pickup' && sameDropOff)

    const freeUbud =
      Boolean(activity.freeUbudPickup) && !isOutUbud && wantsPickup

    if (!freeUbud) {
      if (wantsPickup) {
        transferTotal += PICKUP_FEE_IDR
        lineItems.push({ label: 'Hotel pickup', amount: PICKUP_FEE_IDR })
      }
      if (wantsDrop) {
        transferTotal += DROP_SAME_HOTEL_FEE_IDR
        lineItems.push({
          label:
            effectiveTransfer === 'drop'
              ? 'Drop-off transfer'
              : 'Return drop (same hotel)',
          amount: DROP_SAME_HOTEL_FEE_IDR,
        })
      }
      if (isOutUbud && (wantsPickup || wantsDrop)) {
        transferTotal += OUT_OF_UBUD_EXTRA_IDR
        lineItems.push({
          label: 'Out of Ubud surcharge',
          amount: OUT_OF_UBUD_EXTRA_IDR,
        })
      }
    }
  }

  return {
    lineItems,
    activityTotal,
    transferTotal,
    packageTotal: activityTotal + transferTotal,
  }
}
