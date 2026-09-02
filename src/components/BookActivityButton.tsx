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
}

export default function BookActivityButton({
  activityId,
  className,
  label = "Book Now",
  allowSwitchAll = true,
}: Props) {
  const [open, setOpen] = useState(false)
  const tour = BOOKABLE_TOURS.find((t) => t.id === activityId) ?? BOOKABLE_TOURS[0]

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
      />
    </>
  )
}
