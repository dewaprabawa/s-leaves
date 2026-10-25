import { ALOHA_ACTIVE_PACKAGE_IDR } from "@/data/alohaUbudSwing"
import { COOKING_CLASS_PRICE_IDR } from "@/data/cultureSales"
import { MELUKAT_PRICE_IDR } from "@/data/cultureSales"
import {
  GRIYA_BEJI_ADMISSION_INTL_IDR,
  GRIYA_BEJI_HEALING_IDR,
  GRIYA_BEJI_PALM_READING_IDR,
  GRIYA_BEJI_PURIFICATION_IDR,
} from "@/data/griyaBeji"
import { SWING_HEAVEN_LUNCH_PRICE_IDR, SWING_HEAVEN_PRICE_IDR } from "@/data/swingHeaven"
import { UTV_BUGGY_SINGLE_IDR, UTV_BUGGY_TANDEM_IDR } from "@/data/utvBuggy"
import { MOTORBIKE_UBUD_IDR } from "@/data/motorbikeTrip"
import {
  CYCLING_LIST_IDR,
  JEEP_SITIN_GROUP_IDR,
  JEEP_SITIN_PAIR_TOTAL_IDR,
  PICKUP_FEE_IDR,
  TIER_PRICES_IDR,
} from "@/lib/pricing"
import { formatIdr } from "@/lib/whatsapp"
import { KECAK_PRICE_IDR } from "@/data/kecakUbud"

const [CYCLE_1, CYCLE_2, CYCLE_3] = TIER_PRICES_IDR.cycling
const [ATV_1] = TIER_PRICES_IDR["single-atv"]
const [RAFT_1, RAFT_2] = TIER_PRICES_IDR.rafting
const [TUBE_1] = TIER_PRICES_IDR["canyon-tubing"]
const [, KINTAMANI_PROMO, ] = TIER_PRICES_IDR["kintamani-day"]
const [KINTAMANI_LIST] = TIER_PRICES_IDR["kintamani-day"]

export type ActivityCompareId =
  | "cycling"
  | "cooking"
  | "swing"
  | "aloha"
  | "melukat"
  | "griya"
  | "atv"
  | "rafting"
  | "tubing"
  | "jeep"
  | "luwak"
  | "full-day"
  | "half-day"
  | "motorbike"
  | "utv"
  | "kintamani"
  | "kecak"

function idr(n: number) {
  return formatIdr(n)
}

const ROWS: {
  id: ActivityCompareId
  activity: string
  price: string
  note: string
  pickup: string
  feel: string
}[] = [
  {
    id: "cycling",
    activity: "Pejeng cycling",
    price: `${idr(CYCLE_1)} promo`,
    note: `was ${idr(CYCLING_LIST_IDR)} · ${idr(CYCLE_2)} for 2 · ${idr(CYCLE_3)} for 3+`,
    pickup: "Free in Ubud",
    feel: "Relaxing scenic roads, lunch included",
  },
  {
    id: "cooking",
    activity: "Tumang cooking class",
    price: idr(COOKING_CLASS_PRICE_IDR),
    note: "Shared promo · max 8 · private kitchen from IDR 1,000,000",
    pickup: "Free in Ubud",
    feel: "Market, cook, and eat",
  },
  {
    id: "swing",
    activity: "Swing Heaven",
    price: idr(SWING_HEAVEN_PRICE_IDR),
    note: `${idr(SWING_HEAVEN_LUNCH_PRICE_IDR)} with lunch`,
    pickup: `Shuttle required ${idr(PICKUP_FEE_IDR)}`,
    feel: "Jungle swings, photos on your phone",
  },
  {
    id: "aloha",
    activity: "Aloha Ubud Swing",
    price: idr(ALOHA_ACTIVE_PACKAGE_IDR),
    note: "Includes required IDR 50,000 park fee",
    pickup: `Shuttle required ${idr(PICKUP_FEE_IDR)}`,
    feel: "Tegallalang photo swings",
  },
  {
    id: "melukat",
    activity: "Tirta Empul or Beji melukat",
    price: idr(MELUKAT_PRICE_IDR),
    note: "Private · guide, entrance, offering, sarong, breakfast",
    pickup: "Ubud shuttle included",
    feel: "Private holy-spring ceremony",
  },
  {
    id: "griya",
    activity: "Griya Beji waterfall melukat",
    price: idr(GRIYA_BEJI_PURIFICATION_IDR),
    note: `Palm ${idr(GRIYA_BEJI_PALM_READING_IDR)} · healing ${idr(GRIYA_BEJI_HEALING_IDR)} · gate +${idr(GRIYA_BEJI_ADMISSION_INTL_IDR)} intl`,
    pickup: `+ ${idr(PICKUP_FEE_IDR)} or self-meet`,
    feel: "Waterfall purification in Punggul",
  },
  {
    id: "atv",
    activity: "Single ATV",
    price: idr(ATV_1),
    note: "725,000 for 2 · 700,000 for 3+ · tandem 1,100,000",
    pickup: `+ ${idr(PICKUP_FEE_IDR)} or self-meet`,
    feel: "Jungle mud, river, cave tunnel, lunch",
  },
  {
    id: "rafting",
    activity: "Ayung rafting",
    price: idr(RAFT_1),
    note: `${idr(RAFT_2)} each for 2+ · min 2 · lunch included`,
    pickup: `+ ${idr(PICKUP_FEE_IDR)} or self-meet`,
    feel: "Class II–III splash",
  },
  {
    id: "tubing",
    activity: "Wos canyon tubing",
    price: idr(TUBE_1),
    note: "450,000 each for 2+ · lunch not included",
    pickup: `+ ${idr(PICKUP_FEE_IDR)} or self-meet`,
    feel: "Gentle canyon float",
  },
  {
    id: "jeep",
    activity: "Mount Batur sit-in jeep",
    price: `${idr(JEEP_SITIN_PAIR_TOTAL_IDR)} for 2`,
    note: `${idr(JEEP_SITIN_GROUP_IDR)} each for 3+ · breakfast included · min 2`,
    pickup: "Island-wide pickup included",
    feel: "Sunrise or sunset, no hike",
  },
  {
    id: "kintamani",
    activity: "Private Kintamani Day",
    price: `${idr(KINTAMANI_PROMO)} promo`,
    note: `Was ${idr(KINTAMANI_LIST)} · min 2 · jeep, hot spring, coffee stop`,
    pickup: "Hotel pickup included",
    feel: "One private volcano day",
  },
  {
    id: "luwak",
    activity: "Umah Kuno Luwak coffee",
    price: idr(850_000),
    note: `${idr(700_000)} each for 2 · ${idr(550_000)} each for 4+`,
    pickup: "Transport not included",
    feel: "Jungle walk and tasting flight",
  },
  {
    id: "full-day",
    activity: "Full Day Ubud tour",
    price: idr(600_000),
    note: `${idr(500_000)} each for 2 · ${idr(350_000)} each for 4+ · tickets extra`,
    pickup: "Private car included",
    feel: "Palace, market, rice terraces",
  },
  {
    id: "half-day",
    activity: "Half day Ubud & Tanah Lot",
    price: idr(850_000),
    note: `${idr(700_000)} each for 2 · ${idr(550_000)} each for 4+ · tickets extra`,
    pickup: "Private car included",
    feel: "Ubud stops, then sunset",
  },
  {
    id: "motorbike",
    activity: "Ubud motorbike tour",
    price: `${idr(MOTORBIKE_UBUD_IDR)} / scooter`,
    note: "Other routes cost more · tickets and lunch extra",
    pickup: "Pickup in the ride area",
    feel: "Guided scooter day",
  },
  {
    id: "utv",
    activity: "UTV buggy",
    price: idr(UTV_BUGGY_SINGLE_IDR),
    note: `Tandem ${idr(UTV_BUGGY_TANDEM_IDR)} · lunch included`,
    pickup: "Quoted or self-meet",
    feel: "1-hour buggy trail",
  },
  {
    id: "kecak",
    activity: "Ubud Kecak, Kutuh Kaja",
    price: idr(KECAK_PRICE_IDR),
    note: "Adult or child · Sunday and Tuesday 19:00",
    pickup: `Optional ${idr(PICKUP_FEE_IDR)} · or 10-minute walk`,
    feel: "Temple courtyard Ramayana and fire",
  },
]

export default function ActivityPriceCompare({
  highlight,
}: {
  highlight?: ActivityCompareId
}) {
  return (
    <div>
      <h3 style={{ color: "#ffffff" }} className="text-lg font-bold text-white">
        Compare the price with every activity
      </h3>
      <p className="mt-1 text-sm text-sand/75 leading-relaxed">
        One published 2026 menu. Cycling and cooking include free Ubud pickup. Melukat at Tirta
        Empul or Pura Beji includes the Ubud shuttle. Swing parks require a shuttle. ATV, rafting,
        tubing, and Griya Beji charge pickup separately, or you can self-meet.
      </p>
      <div className="mt-3 overflow-x-auto rounded-2xl border border-white/15">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-white/10 text-white">
            <tr>
              <th className="px-3 py-2.5 font-bold">Activity</th>
              <th className="px-3 py-2.5 font-bold">From</th>
              <th className="px-3 py-2.5 font-bold">Hotel pickup</th>
              <th className="px-3 py-2.5 font-bold">What the price covers</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row) => {
              const on = row.id === highlight
              return (
                <tr
                  key={row.id}
                  className={on ? "bg-white text-brand-green" : "border-t border-white/10 text-sand/90"}
                >
                  <td className="px-3 py-2.5 font-semibold">{row.activity}</td>
                  <td className="px-3 py-2.5 whitespace-nowrap">
                    {row.price}
                    <span className={`block text-xs font-normal ${on ? "text-brand-green-light" : "text-sand/60"}`}>
                      {row.note}
                    </span>
                  </td>
                  <td className="px-3 py-2.5">{row.pickup}</td>
                  <td className="px-3 py-2.5">{row.feel}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-sand/60 leading-relaxed">
        South-coast shuttle is IDR 650,000 where a shuttle is charged. Swing dress hire and the koi
        pond are optional. Griya Beji international admission is paid at the gate. Healing is not a
        medical clinic.
      </p>
    </div>
  )
}
