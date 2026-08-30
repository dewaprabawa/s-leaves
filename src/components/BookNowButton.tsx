"use client"

import { useState } from "react"
import { BookingPopup, type TourConfig } from "@/components/BookingPopup"

export const BOOKABLE_TOURS: TourConfig[] = [
  {
    id: "single-atv",
    title: "Single ATV Ride",
    times: ["08:00", "09:00", "10:00", "13:00", "14:00"],
    adultPrice: 650000,
    kidPrice: 550000,
    minPax: 1,
  },
  {
    id: "tandem-atv",
    title: "Tandem ATV Ride",
    times: ["08:00", "09:00", "10:00", "13:00", "14:00"],
    adultPrice: 859000,
    kidPrice: null,
    minPax: 2,
  },
  {
    id: "rafting",
    title: "Whitewater Rafting",
    times: ["08:30", "11:00", "14:00"],
    adultPrice: 400000,
    kidPrice: 350000,
    minPax: 2,
  },
  {
    id: "canyon-tubing",
    title: "Canyon Tubing",
    times: ["08:00", "09:00", "10:00", "13:00", "14:00"],
    adultPrice: 359000,
    kidPrice: 300000,
    minPax: 1,
  },
  {
    id: "cycling",
    title: "Village Cycling Tour",
    times: ["08:30", "13:30"],
    adultPrice: 650000,
    kidPrice: 550000,
    minPax: 1,
  },
]

type Props = {
  className?: string
  label?: string
  onOpen?: () => void
}

export default function BookNowButton({ className, label = "Book Now", onOpen }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          setOpen(true)
          onOpen?.()
        }}
      >
        {label}
      </button>
      <BookingPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        tour={BOOKABLE_TOURS[0]}
        tourOptions={BOOKABLE_TOURS}
      />
    </>
  )
}
