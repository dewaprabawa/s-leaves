"use client"

import { useState } from "react"
import { BookingPopup } from "@/components/BookingPopup"
import {
  BOOKABLE_TOURS,
  initialAtvFleetForActivity,
  resolveBookableTour,
} from "@/components/BookNowButton"

type Props = {
  activityId: string
  className?: string
  label?: string
  /** When true, popup lets the guest switch between all activities */
  allowSwitchAll?: boolean
  /** Pre-selected mix-in activities for combo packages */
  initialMixIds?: string[]
}

export default function BookActivityButton({
  activityId,
  className,
  label = "Book this activity",
  allowSwitchAll = true,
  initialMixIds,
}: Props) {
  const [open, setOpen] = useState(false)
  const tour = resolveBookableTour(activityId) ?? BOOKABLE_TOURS[0]
  const initialFleet = tour.atvFleetMix
    ? initialAtvFleetForActivity(activityId)
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
        tourOptions={allowSwitchAll ? BOOKABLE_TOURS : undefined}
        initialMixIds={initialMixIds}
        initialFleet={initialFleet}
      />
    </>
  )
}
