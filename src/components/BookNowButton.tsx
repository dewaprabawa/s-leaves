"use client"

import { useState } from "react"
import { BookingPopup, type TourConfig } from "@/components/BookingPopup"
import { getListPrice, JEEP_HOT_SPRING_IDR } from "@/lib/pricing"
import {
  SWING_HEAVEN_ADDONS,
  SWING_HEAVEN_LUNCH_PRICE_IDR,
  SWING_HEAVEN_VENUE,
} from "@/data/swingHeaven"
import {
  GRIYA_BEJI_HEALING_IDR,
  GRIYA_BEJI_OFFERS,
  GRIYA_BEJI_PALM_READING_IDR,
  GRIYA_BEJI_PURIFICATION_IDR,
  GRIYA_BEJI_VENUE,
} from "@/data/griyaBeji"

const JEEP_HOT_SPRING_ADDON = {
  id: "hotspring",
  label: "Add Batur hot spring (ticket included)",
  blurb: `Existing jeep price + IDR ${(JEEP_HOT_SPRING_IDR / 1000).toFixed(0)},000 per person. Toya Devasya / Batur entrance ticket is included — no second ticket at the gate.`,
  perPerson: JEEP_HOT_SPRING_IDR,
}

const JEEP_BOOKING_SHARED = {
  adultPrice: getListPrice("jeep-sunrise"),
  kidPrice: null as null,
  minPax: 2,
  pickupIncluded: true as const,
  pricingActivityId: "jeep-sunrise",
  optionalAddons: [JEEP_HOT_SPRING_ADDON],
}

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
    kidPrice: 450000,
    minPax: 1,
    meetsAtArena: true,
  },
  {
    id: "swing-heaven",
    title: "Swing Heaven Package",
    times: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00"],
    adultPrice: getListPrice("swing-heaven"),
    kidPrice: null,
    minPax: 1,
    pricingActivityId: "swing-heaven",
    selfMeet: {
      name: SWING_HEAVEN_VENUE.name,
      address: SWING_HEAVEN_VENUE.address,
      mapUrl: SWING_HEAVEN_VENUE.mapUrl,
    },
    optionalAddonsIntro:
      "Optional extras at Swing Heaven — flying dress hire and the koi pond boat photo (confirm lobby availability). Neither includes a professional photographer.",
    optionalAddons: [SWING_HEAVEN_ADDONS.dress, SWING_HEAVEN_ADDONS.koiPond],
  },
  {
    id: "swing-heaven-lunch",
    title: "Swing Heaven Package + Lunch",
    times: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00"],
    adultPrice: SWING_HEAVEN_LUNCH_PRICE_IDR,
    kidPrice: null,
    minPax: 1,
    pricingActivityId: "swing-heaven-lunch",
    selfMeet: {
      name: SWING_HEAVEN_VENUE.name,
      address: SWING_HEAVEN_VENUE.address,
      mapUrl: SWING_HEAVEN_VENUE.mapUrl,
    },
    optionalAddonsIntro:
      "Optional extras at Swing Heaven — flying dress hire and the koi pond boat photo (confirm lobby availability). Lunch is already in this package.",
    optionalAddons: [SWING_HEAVEN_ADDONS.dress, SWING_HEAVEN_ADDONS.koiPond],
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
    title: "Private Jeep Sunrise",
    times: ["02:00", "02:30", "03:00"],
    ...JEEP_BOOKING_SHARED,
  },
  {
    id: "jeep-tracking-sunrise",
    title: "Private Tracking Jeep Sunrise",
    times: ["02:00", "02:30", "03:00"],
    ...JEEP_BOOKING_SHARED,
  },
  {
    id: "jeep-sunset",
    title: "Private Jeep Sunset",
    times: ["14:30", "15:30"],
    ...JEEP_BOOKING_SHARED,
  },
  {
    id: "jeep-tracking-sunset",
    title: "Private Tracking Jeep Sunset",
    times: ["14:30", "15:30"],
    ...JEEP_BOOKING_SHARED,
  },
  {
    id: "jeep-kintamani-day",
    title: "Private Kintamani Day — Jeep",
    times: ["02:00", "02:30", "03:00"],
    adultPrice: getListPrice("kintamani-day"),
    kidPrice: null,
    minPax: 2,
    pickupIncluded: true,
    pricingActivityId: "kintamani-day",
  },
  {
    id: "jeep-kintamani-day-tracking",
    title: "Private Kintamani Day — Tracking",
    times: ["02:00", "02:30", "03:00"],
    adultPrice: getListPrice("kintamani-day"),
    kidPrice: null,
    minPax: 2,
    pickupIncluded: true,
    pricingActivityId: "kintamani-day",
  },
  {
    id: GRIYA_BEJI_OFFERS.purification.id,
    title: GRIYA_BEJI_OFFERS.purification.label,
    times: ["09:00", "10:00", "11:00", "14:00", "15:00"],
    adultPrice: GRIYA_BEJI_PURIFICATION_IDR,
    kidPrice: null,
    minPax: 1,
    selfMeet: {
      name: GRIYA_BEJI_VENUE.name,
      address: GRIYA_BEJI_VENUE.address,
      mapUrl: GRIYA_BEJI_VENUE.mapUrl,
    },
  },
  {
    id: GRIYA_BEJI_OFFERS.palmReading.id,
    title: GRIYA_BEJI_OFFERS.palmReading.label,
    times: ["09:00", "10:00", "11:00", "14:00", "15:00"],
    adultPrice: GRIYA_BEJI_PALM_READING_IDR,
    kidPrice: null,
    minPax: 1,
    selfMeet: {
      name: GRIYA_BEJI_VENUE.name,
      address: GRIYA_BEJI_VENUE.address,
      mapUrl: GRIYA_BEJI_VENUE.mapUrl,
    },
  },
  {
    id: GRIYA_BEJI_OFFERS.healing.id,
    title: GRIYA_BEJI_OFFERS.healing.label,
    times: ["09:00", "10:00", "11:00", "14:00", "15:00"],
    adultPrice: GRIYA_BEJI_HEALING_IDR,
    kidPrice: null,
    minPax: 1,
    selfMeet: {
      name: GRIYA_BEJI_VENUE.name,
      address: GRIYA_BEJI_VENUE.address,
      mapUrl: GRIYA_BEJI_VENUE.mapUrl,
    },
  },
]

type Props = {
  className?: string
  label?: string
  onOpen?: () => void
}

export default function BookNowButton({ className, label = "Book this activity", onOpen }: Props) {
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
