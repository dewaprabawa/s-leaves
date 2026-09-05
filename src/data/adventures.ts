import {
  CHILD_PRICE_IDR,
  getListPrice,
  getPromoListPrice,
  type ActivityId,
} from "@/lib/pricing"

export type AdventureCatalogItem = {
  id: ActivityId
  name: string
  tagline: string
  paxLabel: string
  description: string
  highlights: string[]
  duration: string
  image: string
  imageAlt: string
  tourSlug: string
  times: string[]
  minPax: number
  freeUbudPickup?: boolean
}

const DEFAULT_TIMES = ["08:00", "09:00", "10:00", "13:00", "14:00"] as const

/** Shared catalog for sales/checkout (/book), SEO, and cross-page links */
export const ADVENTURES: AdventureCatalogItem[] = [
  {
    id: "single-atv",
    name: "Single ATV Ride",
    tagline: "Solo jungle thrill",
    paxLabel: "Per rider",
    description:
      "Private Bali ATV tour at All New Bali Adventure arena — jungle trails, muddy tracks, and river crossings. Beginner friendly with expert guides. Add optional Wos River tubing for the best ATV + tubing combo near Ubud.",
    highlights: ["Solo ride freedom", "Boot shoes & helmet", "Simple lunch included", "Insurance for ages 6–65"],
    duration: "2 hours",
    image: "/images/adventures/atv-adventure.jpg",
    imageAlt: "ATV jungle adventure ride through tropical rainforest trails",
    tourSlug: "bali-atv-adventure",
    times: [...DEFAULT_TIMES],
    minPax: 1,
  },
  {
    id: "tandem-atv",
    name: "Tandem ATV Ride",
    tagline: "Share the adventure",
    paxLabel: "Per tandem bike",
    description:
      "Private tandem ATV tour at All New Bali Adventure arena — share a quad bike adventure with a partner through jungle trails. All-inclusive with lunch, safety gear, and optional Wos River tubing combo.",
    highlights: ["Ride together", "Boot shoes & helmet", "Simple lunch included", "Insurance for ages 6–65"],
    duration: "2 hours",
    image: "/images/adventures/atv-adventure.jpg",
    imageAlt: "Tandem ATV ride through Bali jungle trails",
    tourSlug: "bali-atv-adventure",
    times: [...DEFAULT_TIMES],
    minPax: 2,
  },
  {
    id: "rafting",
    name: "Whitewater Rafting",
    tagline: "Ride the rapids",
    paxLabel: "Per person",
    description:
      "Navigate Class II-III rapids through a stunning river canyon surrounded by towering jungle cliffs, waterfalls, and ancient stone carvings.",
    highlights: ["Class II-III rapids", "Canyon scenery", "Lunch included", "Professional crew"],
    duration: "3 hours",
    image: "/images/adventures/rafting.jpg",
    imageAlt: "Whitewater rafting through a Bali jungle river canyon",
    tourSlug: "whitewater-rafting",
    times: ["08:30", "11:00", "14:00"],
    minPax: 2,
  },
  {
    id: "canyon-tubing",
    name: "Canyon Tubing",
    tagline: "Float through paradise",
    paxLabel: "Per person",
    description:
      "Drift through hidden canyons on an inflatable tube. Crystal-clear waters, moss-covered walls, and shafts of sunlight create a magical underground world. Pair it with an ATV ride for the ultimate combo.",
    highlights: ["Hidden canyons", "Crystal-clear water", "Life jacket provided", "Nature guide"],
    duration: "2.5 hours",
    image: "/images/adventures/canyon-tubing.jpg",
    imageAlt: "Canyon tubing on crystal-clear Bali river waters",
    tourSlug: "canyon-tubing",
    times: [...DEFAULT_TIMES],
    minPax: 1,
  },
  {
    id: "cycling",
    name: "Ubud Ricefield & Village Cycling Tour",
    tagline: "Rice paddies & village life",
    paxLabel: "Per person",
    description:
      "Authentic Ubud countryside / rice paddy cycling through Pejeng village paths — rice harvesting, Balinese home visit, wood carving studio, and lunch included.",
    highlights: [
      "Rice paddy & countryside cycling in Pejeng",
      "Lunch included",
      "Balinese house & carving studio",
      "Free Ubud hotel pickup & insurance (ages 6–65)",
    ],
    duration: "Full day",
    image: "/images/adventures/cycling.jpg",
    imageAlt: "Rice paddy and village cycling tour through green Ubud countryside",
    tourSlug: "ubud-ricefield-cycling-tour",
    times: ["13:30"],
    minPax: 1,
    freeUbudPickup: true,
  },
]

export function getAdventureById(id: string): AdventureCatalogItem | undefined {
  return ADVENTURES.find((a) => a.id === id)
}

export function getAdventureListPrice(id: ActivityId): number {
  return getListPrice(id)
}

/** Best group tier (3+) unit price for promo display */
export function getAdventurePromoPrice(id: ActivityId): number {
  return getPromoListPrice(id)
}

export function getAdventureChildPrice(id: ActivityId): number | null {
  return CHILD_PRICE_IDR[id] ?? null
}
