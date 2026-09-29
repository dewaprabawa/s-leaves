"use client"

import { useState } from "react"
import { BookingPopup } from "@/components/BookingPopup"
import { BOOKABLE_TOURS } from "@/components/BookNowButton"

type Props = {
  activityId: string
  className?: string
  label?: string
  /** When true, popup lets the guest switch between all activities */
  allowSwitchAll?: boolean
  /** Limit the activity switcher to these BOOKABLE_TOURS ids */
  tourOptionIds?: string[]
  /** Pre-select mix-in activities for combo packages */
  initialMixIds?: string[]
}

export default function BookActivityButton({
  activityId,
  className,
  label = "Book this activity",
  allowSwitchAll = true,
  tourOptionIds,
  initialMixIds,
}: Props) {
  const [open, setOpen] = useState(false)
  const tour =
    BOOKABLE_TOURS.find((t) => t.id === activityId) ??
    BOOKABLE_TOURS.find((t) => t.pricingActivityId === activityId) ??
    BOOKABLE_TOURS[0]
  const tourOptions = tourOptionIds
    ? BOOKABLE_TOURS.filter((t) => tourOptionIds.includes(t.id))
    : allowSwitchAll
      ? BOOKABLE_TOURS
      : undefined

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>
      <BookingPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        tour={tour}
        tourOptions={tourOptions}
        initialMixIds={initialMixIds}
      />
    </>
  )
}
