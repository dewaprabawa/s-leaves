import Image from "next/image"
import { Bike, Check, Leaf, MapPin, Trees, Waves } from "lucide-react"
import { COOKING_CLASS_PRICE_IDR } from "@/data/cultureSales"
import { SWING_HEAVEN_PRICE_IDR } from "@/data/swingHeaven"
import {
  CYCLING_LIST_IDR,
  CYCLING_PROMO_IDR,
  PICKUP_FEE_IDR,
  TIER_PRICES_IDR,
} from "@/lib/pricing"
import { formatIdr } from "@/lib/whatsapp"

const [CYCLE_1, CYCLE_2, CYCLE_3] = TIER_PRICES_IDR.cycling
const [ATV_1] = TIER_PRICES_IDR["single-atv"]
const [RAFT_1] = TIER_PRICES_IDR.rafting
const [TUBE_1] = TIER_PRICES_IDR["canyon-tubing"]

const ROADS = [
  {
    src: "/images/cycling/cycling-rice-terrace-lane.jpg",
    alt: "Rider on a quiet paved lane through green Pejeng rice terraces near Ubud",
    icon: Leaf,
    title: "Rice terrace lanes",
    text: "Flat paved paths between working paddies — palms, terraces, and open sky. This is the classic relaxing view, without the Tegallalang photo crowds.",
  },
  {
    src: "/images/cycling/cycling-village-temple-road.jpg",
    alt: "Cycling group riding a Pejeng village road past family temple compounds",
    icon: MapPin,
    title: "Village temple roads",
    text: "Quiet village streets past family compounds and carved temple gates. You ride through real daily life, not a closed tourist loop.",
  },
  {
    src: "/images/cycling/cycling-jungle-path-group.jpg",
    alt: "Small cycling group on a shaded jungle path lined with banana and coconut palms near Ubud",
    icon: Trees,
    title: "Shaded jungle paths",
    text: "Cool green tunnels of banana and coconut. Easy pace, shade when the sun is high, and room to ride side by side.",
  },
  {
    src: "/images/cycling/cycling-countryside-road.jpg",
    alt: "Parent and child cycling a countryside road beside rice fields and old trees near Ubud",
    icon: Bike,
    title: "Open countryside roads",
    text: "Gentle roads between fields and old trees. Mostly flat, so families and first-time riders stay comfortable for the full two hours.",
  },
  {
    src: "/images/cycling/cycling-irrigation-canal-path.jpg",
    alt: "Two riders on a narrow path beside a Subak irrigation canal in Pejeng",
    icon: Waves,
    title: "Canal-side paths",
    text: "Narrow lanes beside the Subak irrigation canals that water the paddies. Your guide explains how the water system works as you ride.",
  },
] as const

const INCLUDED = [
  "Rice terrace, village, jungle, countryside, and canal roads — one continuous relaxing ride",
  "Rice harvesting stop with local farmers",
  "Visit inside a real Balinese family house",
  "Wood carving studio stop",
  "Lunch at a village restaurant",
  "Bike, helmet, English-speaking guide, water, and insurance (ages 6–65)",
  "Free hotel pickup and drop-off in the Ubud area",
] as const

function idr(n: number) {
  return formatIdr(n)
}

/**
 * Why the Pejeng cycling promo is worth it: scenic roads + all-in price vs other activities.
 */
export default function CyclingWorthItSection() {
  const rows = [
    {
      activity: "Pejeng cycling (this tour)",
      price: `${idr(CYCLE_1)} promo`,
      note: `was ${idr(CYCLING_LIST_IDR)} · ${idr(CYCLE_2)} each for 2 · ${idr(CYCLE_3)} each for 3+`,
      pickup: "Free in Ubud",
      feel: "Relaxing scenic roads",
    },
    {
      activity: "Single ATV",
      price: idr(ATV_1),
      note: "1.5 h mud, river, cave tunnel",
      pickup: `+ ${idr(PICKUP_FEE_IDR)} or self-meet`,
      feel: "Adrenaline",
    },
    {
      activity: "Ayung rafting",
      price: idr(RAFT_1),
      note: "450,000 each for 2+ · min 2",
      pickup: `+ ${idr(PICKUP_FEE_IDR)} or self-meet`,
      feel: "Splash",
    },
    {
      activity: "Wos canyon tubing",
      price: idr(TUBE_1),
      note: "Lunch not included",
      pickup: `+ ${idr(PICKUP_FEE_IDR)} or self-meet`,
      feel: "Gentle float",
    },
    {
      activity: "Tumang cooking class",
      price: idr(COOKING_CLASS_PRICE_IDR),
      note: "Shared promo · max 8",
      pickup: "Free in Ubud",
      feel: "Hands-on kitchen",
    },
    {
      activity: "Swing Heaven",
      price: idr(SWING_HEAVEN_PRICE_IDR),
      note: "Photos on your phone",
      pickup: `Shuttle required ${idr(PICKUP_FEE_IDR)}`,
      feel: "Photo swings",
    },
  ]

  return (
    <section
      aria-labelledby="cycling-worth-it"
      className="relative overflow-hidden rounded-3xl bg-brand-green p-6 md:p-8 text-sand shadow-xl"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-gold/20 blur-3xl" />
      <div className="relative space-y-6">
        <div className="space-y-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/40 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
            <Bike className="h-3.5 w-3.5 text-accent-gold" />
            Why the cycling price is worth it
          </p>
          <h2
            id="cycling-worth-it"
            style={{ color: "#ffffff" }}
            className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight text-white"
          >
            The most relaxing scenic roads — all in one price
          </h2>
          <p className="max-w-3xl text-sm md:text-base text-sand/80 leading-relaxed">
            Promo {idr(CYCLING_PROMO_IDR)} per person (was {idr(CYCLING_LIST_IDR)}; {idr(CYCLE_2)}{" "}
            each for 2 guests, {idr(CYCLE_3)} each for 3+). That one price covers every road on the
            ride — rice terraces, village temples, jungle shade, open countryside, and canal paths —
            plus harvesting, a family-house visit, a carving studio, lunch, bike, helmet, guide,
            insurance, and free Ubud pickup. Nothing scenic is sold as an extra.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROADS.map((road) => (
            <article
              key={road.src}
              className="overflow-hidden rounded-2xl border border-white/15 bg-white/5"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={road.src}
                  alt={road.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="flex items-center gap-2 text-base font-bold text-white">
                  <road.icon className="h-4 w-4 shrink-0 text-accent-gold" />
                  {road.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-sand/85">{road.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div>
          <h3 style={{ color: "#ffffff" }} className="text-lg font-bold text-white">
            Everything included in the {idr(CYCLING_PROMO_IDR)} promo
          </h3>
          <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-sand/90 leading-relaxed">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 style={{ color: "#ffffff" }} className="text-lg font-bold text-white">
            Compare the price with our other activities
          </h3>
          <p className="mt-1 text-sm text-sand/75 leading-relaxed">
            Cycling is the relaxing scenic day. ATV, rafting, and tubing are the adrenaline days —
            and their hotel pickup is extra. Cooking is the other culture option with free Ubud pickup.
          </p>
          <div className="mt-3 overflow-x-auto rounded-2xl border border-white/15">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/10 text-white">
                <tr>
                  <th className="px-3 py-2.5 font-bold">Activity</th>
                  <th className="px-3 py-2.5 font-bold">From</th>
                  <th className="px-3 py-2.5 font-bold">Hotel pickup</th>
                  <th className="px-3 py-2.5 font-bold">The day feels like</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.activity}
                    className={i === 0 ? "bg-white text-brand-green" : "border-t border-white/10 text-sand/90"}
                  >
                    <td className="px-3 py-2.5 font-semibold">{row.activity}</td>
                    <td className="px-3 py-2.5 whitespace-nowrap">
                      {row.price}
                      <span className={`block text-xs font-normal ${i === 0 ? "text-brand-green-light" : "text-sand/60"}`}>
                        {row.note}
                      </span>
                    </td>
                    <td className="px-3 py-2.5">{row.pickup}</td>
                    <td className="px-3 py-2.5">{row.feel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-sand/60 leading-relaxed">
            Published 2026 rates. Rafting and tubing drop to IDR 450,000 each for 2+ guests. ATV
            singles drop to IDR 725,000 (2) and IDR 700,000 (3+). Swing Heaven shuttle is required.
          </p>
        </div>
      </div>
    </section>
  )
}
