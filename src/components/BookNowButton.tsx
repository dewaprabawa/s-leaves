"use client"

import { useState } from "react"
import { BookingPopup, type TourConfig } from "@/components/BookingPopup"
import { getListPrice } from "@/lib/pricing"

export const BOOKABLE_TOURS: TourConfig[] = [
  {
    id: "single-atv",
    title: "Single ATV Ride",
    times: ["08:00", "09:00", "10:00", "13:00", "14:00"],
    adultPrice: getListPrice("single-atv"),
    kidPrice: 700000,
    minPax: 1,
    meetsAtArena: true,
  },
  {
    id: "tandem-atv",
    title: "Tandem ATV Ride",
    times: ["08:00", "09:00", "10:00", "13:00", "14:00"],
    adultPrice: getListPrice("tandem-atv"),
    kidPrice: null,
    minPax: 2,
    meetsAtArena: true,
  },
  {
    id: "rafting",
    title: "Whitewater Rafting",
    times: ["08:30", "11:00", "14:00"],
    adultPrice: getListPrice("rafting"),
    kidPrice: 450000,
    minPax: 2,
    meetsAtArena: true,
  },
  {
    id: "canyon-tubing",
    title: "Canyon Tubing",
    times: ["08:00", "09:00", "10:00", "13:00", "14:00"],
    adultPrice: getListPrice("canyon-tubing"),
    kidPrice: 300000,
    minPax: 1,
    meetsAtArena: true,
  },
  {
    id: "cycling",
    title: "Ubud Ricefield Cycling Tour",
    times: ["13:30"],
    adultPrice: getListPrice("cycling"),
    kidPrice: null,
    minPax: 1,
    freeUbudPickup: true,
  },
  {
    id: "jeep-sunrise",
    title: "Mount Batur Sunrise Jeep Tour",
    times: ["02:30", "03:00"],
    adultPrice: getListPrice("jeep-sunrise"),
    kidPrice: null,
    minPax: 1,
    pickupIncluded: true,
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
