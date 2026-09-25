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
  pickupIncluded?: boolean
}

const DEFAULT_TIMES = ["08:00", "09:00", "10:00", "13:00", "14:00"] as const

/** Shared catalog for sales/checkout (/book), SEO, and cross-page links */
export const ADVENTURES: AdventureCatalogItem[] = [
  {
    id: "cycling",
    name: "Ubud Ricefield & Village Cycling Tour",
    tagline: "Rice paddies & village life",
    paxLabel: "Per person",
    description:
      "Authentic Ubud countryside / rice paddy cycling through Pejeng village paths — rice harvesting, Balinese home visit, wood carving studio, and lunch included. Pair with an afternoon Tumang Bali Cooking Class for a full culture day.",
    highlights: [
      "Rice paddy & countryside cycling in Pejeng",
      "Lunch included",
      "Balinese house & carving studio",
      "Free Ubud hotel pickup & insurance (ages 6–65)",
    ],
    duration: "2 hours",
    image: "/images/adventures/cycling.jpg",
    imageAlt: "Rice paddy and village cycling tour through green Ubud countryside",
    tourSlug: "ubud-ricefield-cycling-tour",
    times: ["13:30"],
    minPax: 1,
    freeUbudPickup: true,
  },
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
    id: "swing-heaven",
    name: "Swing Heaven Bali",
    tagline: "Jungle swings over the Ayung valley",
    paxLabel: "Per person",
    description:
      "Swing Heaven in Bongkasa near Ubud — 14 jungle swings, nests, and photo spots overlooking the Ayung River. Package from IDR 530,000 (insurance + tea/coffee/water) or IDR 630,000 with lunch. Optional flying dress hire IDR 300,000. Not the Tegallalang swing strip.",
    highlights: [
      "14 swings, nests & jungle beds",
      "Insurance + tea/coffee/water",
      "Lunch package +IDR 100,000",
      "Bongkasa near Ubud — own-phone photos",
    ],
    duration: "1.5–2.5 hours",
    image: "/images/adventures/swing-heaven-ayung.jpg",
    imageAlt: "Guest on a jungle swing over the Ayung River valley at Swing Heaven Bali near Ubud",
    tourSlug: "swing-heaven-bali",
    times: ["08:00", "09:00", "10:00", "11:00", "13:00", "14:00"],
    minPax: 1,
  },
  {
    id: "jeep-sunrise",
    name: "Private Mount Batur Jeep",
    tagline: "Private · tracking · sunrise or sunset",
    paxLabel: "Per person (private · min 2 · meal included)",
    description:
      "Your private 4×4 to Mount Batur near Kintamani — sunrise or sunset at the same private rates, minimum 2 guests. Sit-in private jeep or tracking jeep (jeep + guided trek). Sit-down meal included. Optional Batur hot spring +IDR 150,000 per person with the entrance ticket included. Hotel pickup included. 2 guests IDR 950,000 · 3+ IDR 750,000 per person.",
    highlights: [
      "Private jeep — your vehicle, your group",
      "Sunrise or sunset over Lake Batur and Mount Agung",
      "Sit-down meal included",
      "Optional hot spring +IDR 150,000 · ticket included · hotel pickup",
    ],
    duration: "Sunrise 6–7 hrs · Sunset ~4–5 hrs",
    image: "https://images.unsplash.com/photo-1727335333476-8aa180978ff6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "4x4 jeep ride up Mount Batur's volcanic tracks before sunrise",
    tourSlug: "batur-sunrise-jeep-tour",
    times: ["02:00", "02:30", "03:00", "14:30", "15:30"],
    minPax: 2,
    pickupIncluded: true,
  },
  {
    id: "kintamani-day",
    name: "Private Kintamani Day",
    tagline: "Private · jeep or trek · meal · hot spring · Umah Kuno · rice terrace",
    paxLabel: "Per person (private · min 2 · promo · meal included)",
    description:
      "Your private full-day: jeep or tracking at Mount Batur, natural hot spring with the entrance ticket included, a sit-down meal, Umah Kuno coffee tasting, and a rice-terrace stop. Minimum 2 guests. Promo IDR 1,300,000 per person (was IDR 1,450,000). Hotel pickup included. Meal included on both Jeep and Tracking.",
    highlights: [
      "Private jeep or tracking — you choose",
      "Sit-down meal included",
      "Natural hot spring · ticket included",
      "Umah Kuno coffee tasting · rice terrace · hotel pickup",
    ],
    duration: "Full day",
    image: "https://images.unsplash.com/photo-1727335333476-8aa180978ff6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "4x4 jeep ride up Mount Batur's volcanic tracks before sunrise",
    tourSlug: "batur-sunrise-jeep-tour",
    times: ["02:00", "02:30", "03:00"],
    minPax: 2,
    pickupIncluded: true,
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
