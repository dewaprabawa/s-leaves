import {
  buildGeoQASchemas,
  buildGeoWebPageSchema,
} from "@/lib/geo"
import {
  buildAdventureItemListSchema,
  type AdventureOffer,
} from "@/lib/seo"

/** Homepage-only JSON-LD — keep off tour/blog URLs for topical focus. */
const adventureOffers: AdventureOffer[] = [
  {
    name: "Single ATV Jungle Ride",
    description:
      "Private Bali quad bike adventure at All New Bali Adventure arena through jungle trails and muddy tracks. All-inclusive: lunch, boot shoes, helmet, insurance, and optional Wos River tubing combo.",
    price: "750000",
    image: "/images/adventures/atv-mud-river-splash.jpg",
  },
  {
    name: "Tandem ATV Ride",
    description:
      "Private tandem ATV tour at All New Bali Adventure for couples and friends. Share a complete quad bike experience with lunch, safety gear, insurance, and optional river tubing.",
    price: "1100000",
    image: "/images/adventures/atv-arena-quad-fleet.jpg",
  },
  {
    name: "Ayung River Whitewater Rafting near Ubud",
    description:
      "Class II-III Ayung River rafting near Ubud. IDR 500,000 list, or IDR 450,000 for 2+ guests. Lunch included. Hotel pickup IDR 400,000 or self-meet.",
    price: "450000",
    image: "/images/adventures/rafting-ayung-paddle-team.jpg",
  },
  {
    name: "Wos River Canyon Tubing near Ubud",
    description:
      "Wos River canyon tubing near Ubud. IDR 500,000 list, or IDR 450,000 for 2+ guests. Lunch not included. Hotel pickup IDR 400,000 or self-meet.",
    price: "450000",
    image: "/images/adventures/canyon-tubing-waterfall-drop.jpg",
  },
  {
    name: "Ubud Ricefield & Village Cycling Tour",
    description:
      "Ubud rice paddy & countryside cycling through Pejeng — 2 hours, lunch included, free Ubud hotel pickup. Promo IDR 650K (was 750K).",
    price: "650000",
    originalPrice: "750000",
    image: "/images/adventures/cycling-pejeng-group.jpg",
  },
  {
    name: "Private Mount Batur Jeep Tour",
    description:
      "Your private sit-in or tracking 4×4 jeep to Mount Batur near Kintamani — sunrise or sunset, minimum 2 guests. Sit-in IDR 2,300,000 for 2 or IDR 2,850,000 for 3. Tracking IDR 1,800,000 for 2, 3+ IDR 750,000 per person. Sunrise or sunset viewpoint, then the black lava field. Breakfast included. Optional Batur hot spring +IDR 150,000 or Toya Devasya +IDR 300,000 (ticket included). Hotel pickup included.",
    price: "750000",
    image:
      "https://images.unsplash.com/photo-1727335333476-8aa180978ff6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tumang Bali Cooking Class",
    description:
      "Family-run Balinese cooking class near Ubud with Chef Wayan Suryana — morning market tour, rice-field walk, 10+ dishes, max 8 guests, complimentary Ubud pickup. TripAdvisor Traveler\u2019s Choice 2026.",
    price: "450000",
    image: "/images/cooking/satay-class.jpg",
  },
  {
    name: "Luwak Coffee Plantation Experience (Umah Kuno)",
    description:
      "Ethical cage-free Luwak tasting at Umah Kuno — jungle walk, wood-fire roasting, and a tasting flight of 10 teas and coffees. IDR 800,000 per person (minimum 3 guests).",
    price: "800000",
    image: "/coffee.jpg",
  },
]

const homepageSchemas = [
  buildGeoWebPageSchema(),
  ...buildGeoQASchemas(),
  buildAdventureItemListSchema(adventureOffers),
]

export default function HomepageJsonLd() {
  return (
    <>
      {homepageSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
