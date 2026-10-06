import {
  COOKING_CLASS_PRICE_IDR,
  COOKING_CLASS_PRIVATE_COUPLE_IDR,
  COOKING_CLASS_PRIVATE_SOLO_IDR,
  COOKING_CLASS_STANDARD_PRICE_IDR,
  MELUKAT_PRICE_IDR,
} from "@/data/cultureSales"
import {
  SWING_HEAVEN_DRESS_HIRE_IDR,
  SWING_HEAVEN_KOI_POND_IDR,
  SWING_HEAVEN_LUNCH_DIFF_IDR,
  SWING_HEAVEN_LUNCH_PRICE_IDR,
  SWING_HEAVEN_PRICE_IDR,
  SWING_HEAVEN_SPOTS,
  SWING_HEAVEN_VENUE,
} from "@/data/swingHeaven"
import {
  GRIYA_BEJI_ADMISSION_DOMESTIC_IDR,
  GRIYA_BEJI_ADMISSION_INTL_IDR,
  GRIYA_BEJI_HEALING_IDR,
  GRIYA_BEJI_PALM_READING_IDR,
  GRIYA_BEJI_PURIFICATION_IDR,
  GRIYA_BEJI_VENUE,
} from "@/data/griyaBeji"
import {
  GIRLS_TRIP_AIRPORT_TRANSFER_IDR,
  GIRLS_TRIP_DRIVER_DAY_FROM_IDR,
  GIRLS_TRIP_SLUG,
} from "@/data/girlsTrip"
import {
  PARK_WORKSHOP_TOURS,
  resolveBaliSafariSlug,
} from "@/data/parkWorkshopTours"
import {
  UTV_BUGGY_ADDRESS,
  UTV_BUGGY_AREA,
  UTV_BUGGY_DURATION,
  UTV_BUGGY_MAP_URL,
  UTV_BUGGY_SINGLE_IDR,
  UTV_BUGGY_SITE,
  UTV_BUGGY_SLUG,
  UTV_BUGGY_TANDEM_IDR,
  UTV_BUGGY_VENUE,
} from "@/data/utvBuggy"
import {
  MOTORBIKE_AREA,
  MOTORBIKE_DURATION,
  MOTORBIKE_EAST_IDR,
  MOTORBIKE_EAST_LIST_IDR,
  MOTORBIKE_ENGINE,
  MOTORBIKE_KINTAMANI_IDR,
  MOTORBIKE_KINTAMANI_LIST_IDR,
  MOTORBIKE_NORTH_IDR,
  MOTORBIKE_NORTH_LIST_IDR,
  MOTORBIKE_PICKUP,
  MOTORBIKE_PRICE_ARTICLE_SLUG,
  MOTORBIKE_SOUTH_IDR,
  MOTORBIKE_SOUTH_LIST_IDR,
  MOTORBIKE_SOUTH_SHUTTLE_AREAS,
  MOTORBIKE_SOUTH_SHUTTLE_IDR,
  MOTORBIKE_TRIP_SLUG,
  MOTORBIKE_UBUD_IDR,
  MOTORBIKE_UBUD_LIST_IDR,
  MOTORBIKE_WATERFALL_IDR,
  MOTORBIKE_WATERFALL_LIST_IDR,
} from "@/data/motorbikeTrip"

const COOKING_PRIVATE_SOLO_DIFF =
  COOKING_CLASS_PRIVATE_SOLO_IDR - COOKING_CLASS_PRICE_IDR

export interface TourAddon {
  id: string
  name: string
  price: number
  description?: string
  isRequired?: boolean
}

export interface TourFaq {
  id: string
  question: string
  answer: string
}

export interface TourItineraryItem {
  id: string
  time: string
  title: string
  description: string
}

export interface TourReview {
  id: string
  authorName: string
  rating: number
  comment: string
  visitDate?: string
}

/** Browse taxonomy for travel & activities (not sports-only). */
export type TourCategoryId =
  | "adventure"
  | "food"
  | "culture"
  | "village"
  | "day-tour"

export const TOUR_CATEGORY_LABELS: Record<TourCategoryId, string> = {
  adventure: "Adventure",
  food: "Food & Workshops",
  culture: "Culture & Heritage",
  village: "Village & Nature",
  "day-tour": "Day Tours",
}

export interface Tour {
  id: string
  title: string
  slug: string
  category: TourCategoryId
  /** Optional area label shown on discovery cards (e.g. Ubud / Pejeng). */
  area?: string
  /** Above-the-fold venue chip (kitchen, arena, trailhead). */
  venue?: string
  /** Above-the-fold pickup chip (free Ubud, island-wide, surcharge). */
  pickup?: string
  /** Featured on homepage top-picks rail when true. */
  isTopPick?: boolean
  /** Star badge: “Recommended by N% of travelers” (ATV + UTV). */
  recommendedByTravelersPercent?: number
  duration: string
  basePrice: number
  childPrice?: number
  /** Google SERP title (≤60 chars). Falls back to `title`. */
  seoTitle?: string
  /** Google SERP meta description (≤160 chars). Falls back to `shortDescription`. */
  seoDescription?: string
  heroImage: {
    url: string
    alt: string
    width?: number
    height?: number
  }
  gallery: { url: string; alt: string }[]
  shortDescription: string
  fullDescription: string
  highlights: string[]
  included: string[]
  notIncluded: string[]
  itinerary: TourItineraryItem[]
  activityOptions?: { name: string; priceDiff: number; description?: string }[]
  addons: TourAddon[]
  faqs: TourFaq[]
  reviews: TourReview[]
  getYourGuideUrl?: string
  youtubeVideoId?: string
}

export const TOURS: Tour[] = [
  {
    id: "bali-atv-adventure",
    title: "ATV at All New Bali Adventure near Ubud",
    slug: "bali-atv-adventure",
    category: "adventure",
    area: "Sedang / Ubud",
    venue: "All New Bali Adventure, Sedang — not the office",
    isTopPick: true,
    recommendedByTravelersPercent: 96,
    pickup: "IDR 400,000 hotel pickup or free self-meet",
    duration: "2–4 Hours",
    basePrice: 750000,
    childPrice: 700000,
    seoTitle: "ATV All New Bali Adventure | From 750K",
    seoDescription:
      "All New ATV Bali from 750K. Lunch in. Pickup 400K or self-meet. Not the location-guide URL. WhatsApp — no deposit.",
    heroImage: {
      url: "/images/adventures/atv-mud-river-splash.jpg",
      alt: "Muddy quad bike river crossing at All New Bali Adventure near Ubud",
    },
    gallery: [
      {
        url: "/images/adventures/atv-mud-river-splash.jpg",
        alt: "Rider on a green ATV splashing through muddy water near Ubud",
      },
      {
        url: "/images/adventures/atv-mud-jungle-pov.jpg",
        alt: "Rider POV of a muddy jungle ATV track near Ubud",
      },
      {
        url: "/images/adventures/atv-arena-quad-fleet.jpg",
        alt: "Sport ATV quad bikes lined up at All New Bali Adventure in Sedang",
      },
      {
        url: "/images/adventures/atv-arena-briefing-base.jpg",
        alt: "ATV arena briefing base with rubber boots at All New Bali Adventure",
      },
      {
        url: "/images/adventures/atv-adventure.jpg",
        alt: "Quad bike ATV ride through Bali jungle trails",
      },
    ],
    shortDescription:
      "Private muddy sport ATV ride near Ubud at All New Bali Adventure — beginner-friendly Bali quad bike through jungle mud tracks, river crossings, and scenic trails. All-inclusive: lunch, helmet, boot shoes & insurance. Add Wos River tubing or rafting. From IDR 750K.",
    fullDescription: `**Looking for a Bali Quad Bike / ATV Ride Near Ubud?**

If you want an adrenaline-packed day beyond the usual tourist trail, our Bali ATV Quad Bike Adventure delivers a complete private ATV ride through jungle mud tracks, muddy trails, and river crossings. Every ride is designed for sensation, excitement, and joy — whether you go solo (single ATV) or share a tandem ATV with a partner. Beginner-friendly with a full safety briefing.

### ATV Arena Location: All New Bali Adventure — not the office
All ATV rides take place at **All New Bali Adventure** on **Jl. Raya Krasan, Sedang, Kec. Abiansemal** — the jungle arena near Ubud. This is where you meet your guide, get fitted with boot shoes and a helmet, and start the safety briefing.

**Do not go to the Sekar Bali office.** The office on Jalan Tunjung Biru, Banjar Kenderan is Google Business / admin only. There is no ATV track there. Self-meet at the Sedang arena, or book hotel pickup for IDR 400,000.

### Complete Bali Quad Bike (ATV) Trips
Hop on a powerful ATV and race scenic off-road trails with expert guides. Packages suit first-timers and thrill-seekers alike. After a safety briefing at All New Bali Adventure, you hit the track for an unforgettable ride through Bali's green countryside — lunch, helmet, boot shoes, and insurance included.

### Quad biking Ubud price (same as ATV)
**Quad bike** and **ATV** are the same machine here. **Quad biking Ubud price** in 2026: **IDR 750,000** (1), **725,000** (2), **700,000** (3+). Tandem **IDR 1,100,000**. Lunch, helmet, boots, insurance included. Hotel pickup is **IDR 400,000** or free self-meet. There is **no free quad biking Ubud** ride — “free” means no payment to inquire, free self-meet, and the [free ATV price calculator](/planners/atv-price-calculator).

### Not Gorilla Cave — and not a waterfall-cave park
Searches for **Ubud ATV Quad Bike adventure with Gorilla Cave and lunch** or **ATV tour Ubud waterfall** describe other arenas (Alasan Gorilla Cave, Kuber cave + waterfall). We include **lunch**. We do **not** sell Gorilla Cave, Kuber tunnel, or a waterfall cave. Our track is jungle mud and river crossings at All New Bali Adventure in Sedang. Honest compare: [ATV vs Kuber cave](/blog/bali-atv-vs-kuber-cave-2026) · [Ubud quad biking 2026](/blog/ubud-quad-biking-price-2026). Want canyon waterfalls? Book **[ATV + Ayung rafting](/tours/atv-rafting-combo)** — the waterfalls are on the river, not on the ATV track.

### Combine with River Tubing or Rafting
Want even more adventure? The flagship same-day is **[ATV + Ayung rafting](/tours/atv-rafting-combo)** — mud then Class II–III. From **IDR 1,250,000** at ticket floors; **10% mix** at checkout. Gentler water: [Wos River tubing](/tours/canyon-tubing). After the mud track, cool off on the river.

### Plan your ATV day
- [Muddy quad bike Ubud](/blog/ubud-muddy-quad-bike-atv-2026) — jungle puddles, river crossings, boots, photos
- [Good price ATV Ubud](/blog/good-price-atv-quad-bike-ubud-2026) — published 750K / 725K / 700K, not a 235K sticker
- [Ubud quad biking price 2026](/blog/ubud-quad-biking-price-2026) — price, reviews, waterfall, Gorilla Cave (honest)
- [ATV cost near Ubud 2026](/blog/how-much-does-atv-cost-bali-ubud-2026) — single IDR 750K vs tandem IDR 1.1M
- [Single vs tandem ATV](/blog/tandem-atv-ubud-price) — who should share, two-single vs one-bike math
- [All New Bali Adventure arena](/blog/bali-atv-all-new-bali-adventure-location-guide) — self-meet in Sedang vs hotel pickup IDR 400,000
- [Jungle mud vs cave/tunnel tracks](/blog/ubud-atv-track-types-mud-jungle-vs-cave-tunnel) — we are not Kuber or Dragon Cave
- [ATV + Ayung rafting](/tours/atv-rafting-combo) — flagship land + water day from 1.25M
- [ATV vs UTV](/blog/bali-atv-vs-utv-buggy-2026) — Sedang sit-on quad vs Pemogan sit-in hour
- [ATV + Wos River tubing](/blog/atv-river-tubing-wos-river-bali) — gentler river add-on
- [Private vs mass-market ATV](/blog/private-atv-vs-mass-market-ubud)
- [Swing Heaven Bongkasa](/tours/swing-heaven-bali) — same Abiansemal district, jungle-swing photos after the mud track

Message us on WhatsApp to book Single ATV, Tandem ATV, or an ATV + River Tubing combo for your preferred date.`,
    highlights: [
      "ATV arena at All New Bali Adventure",
      "Complete Bali quad bike (ATV) adventure",
      "Optional river tubing on the Wos River",
      "Boot shoes, helmet, lunch & insurance for ages 6–65 included",
      "Suitable for beginners with full safety briefing",
    ],
    included: [
      "ATV ride (single or tandem)",
      "Boot shoes & helmet",
      "Simple menu lunch",
      "Insurance for ages 6–65",
      "Safety briefing and trail guide",
    ],
    notIncluded: [
      "Hotel pickup & drop-off (IDR 400,000 surcharge — optional)",
      "River tubing combo (optional — ask when booking)",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      {
        id: "iti-atv-1",
        time: "Start",
        title: "Arrive at All New Bali Adventure",
        description:
          "Meet your guide at the All New Bali Adventure ATV arena in Sedang (Jl. Raya Krasan) — not the office in Banjar Kenderan. Get fitted with boot shoes and helmet, then the safety briefing.",
      },
      {
        id: "iti-atv-2",
        time: "Midway",
        title: "ATV Jungle Trail at All New Bali Adventure",
        description:
          "Race the ATV track at All New Bali Adventure through jungle paths, muddy stretches, and scenic river crossings packed with sensation and excitement.",
      },
      {
        id: "iti-atv-3",
        time: "Optional",
        title: "Wos River Tubing",
        description:
          "Combine your package with river tubing — explore the Wos River on a tube after your ATV adventure.",
      },
      {
        id: "iti-atv-4",
        time: "Finish",
        title: "Lunch & Wind Down",
        description:
          "Enjoy a simple menu lunch, change into dry clothes, and head back with unforgettable memories.",
      },
    ],
    activityOptions: [
      {
        name: "Single ATV Ride",
        priceDiff: 0,
        description: "1 pax · solo jungle thrill",
      },
      {
        name: "Tandem ATV Ride",
        priceDiff: 350000,
        description: "2 pax · share the adventure",
      },
      {
        name: "ATV + Ayung Rafting Combo",
        priceDiff: 0,
        description: "Flagship land + water · open /tours/atv-rafting-combo · 10% mix at checkout",
      },
      {
        name: "ATV + River Tubing Combo",
        priceDiff: 0,
        description: "Gentler Wos River tube after the ATV track · quote on WhatsApp",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-atv-1",
        question: "How much does an ATV ride near Ubud cost in 2026?",
        answer:
          "Single ATV starts from IDR 750,000 per person and tandem from IDR 1,100,000 for two sharing one bike. Packages include lunch, helmet, boot shoes, insurance (ages 6–65), and a safety briefing at All New Bali Adventure. Hotel pickup is optional at IDR 400,000; self-meet at the Sedang arena has no pickup fee.",
      },
      {
        id: "faq-atv-2",
        question: "Is this ATV tour beginner-friendly?",
        answer:
          "Yes. No riding experience is required. Guides give a full safety briefing before you start, and tandem ATVs are available if you prefer to ride with a partner.",
      },
      {
        id: "faq-atv-3",
        question: "Where is the ATV arena near Ubud?",
        answer:
          "All of our ATV rides run at All New Bali Adventure — a dedicated jungle arena on Jl. Raya Krasan, Sedang, Kec. Abiansemal, Kabupaten Badung, Bali 80352 (near Ubud). This is not the Sekar Bali office on Jalan Tunjung Biru, Banjar Kenderan — that pin is admin / Google Business only and has no ATV track. We are also not the Kuber tunnel or Dragon Cave tracks. Ask WhatsApp for the arena pin or hotel pickup (IDR 400,000).",
      },
      {
        id: "faq-atv-4",
        question: "What is included in the ATV price?",
        answer:
          "Guided ATV ride, boot shoes and helmet, simple menu lunch, insurance for ages 6–65, and an English-speaking safety briefing. Hotel pickup and Wos River tubing are optional add-ons — confirm when you book.",
      },
      {
        id: "faq-atv-5",
        question: "Can I combine ATV with river tubing or rafting?",
        answer:
          "Yes. The flagship same-day is ATV + Ayung rafting — from IDR 1,250,000 at published floors, 10% mix at checkout. Book: https://www.sekarbaliactivity.com/tours/atv-rafting-combo. Couple tandem + two rafts is IDR 2,000,000 before mix. Wos River tubing is the gentler add-on at the same 1.25M floors: https://www.sekarbaliactivity.com/book?combo=combo-atv-tubing. WhatsApp date and guest count.",
      },
      {
        id: "faq-atv-6",
        question: "What should I bring?",
        answer:
          "Bring a change of clothes or dry cloth, sunscreen, and cash for extras. A waterproof phone case helps for trail photos. Towels and changing space are available at the arena.",
      },
      {
        id: "faq-atv-7",
        question: "Do you provide insurance?",
        answer:
          "Yes. We provide insurance for guests aged 6–65 on our adventure packages.",
      },
      {
        id: "faq-atv-8",
        question: "Is this a muddy sport ATV / mud bike ride?",
        answer:
          "Yes — the All New Bali Adventure track includes jungle mud, soft soil, and river crossings on a 4-wheel sport ATV (quad). You stay on a stable four-wheel machine; no clutch or motocross bike balance required. Arena boots are included. Full muddy-ride notes: https://www.sekarbaliactivity.com/blog/ubud-muddy-quad-bike-atv-2026",
      },
      {
        id: "faq-atv-9",
        question: "Should I book a single ATV or a tandem?",
        answer:
          "Book a single ATV (from IDR 750,000) if each guest wants their own bike. Book tandem (IDR 1,100,000 for two sharing one bike) if you are a couple or one rider prefers not to drive. Both include lunch, gear, and insurance — say 1 or 2 riders on WhatsApp and we will quote the right option.",
      },
      {
        id: "faq-atv-10",
        question: "How much is quad biking in Ubud?",
        answer:
          "Quad biking and ATV are the same product. 2026 price: IDR 750,000 (1), 725,000 (2), 700,000 (3+). Tandem IDR 1,100,000. Lunch and gear included at All New Bali Adventure. Pickup IDR 400,000 or self-meet. Full table: https://www.sekarbaliactivity.com/blog/ubud-quad-biking-price-2026",
      },
      {
        id: "faq-atv-11",
        question: "Is there free quad biking in Ubud?",
        answer:
          "No. The ride is from IDR 750,000. What is free: WhatsApp inquire with no deposit, self-meet at the Sedang arena (no pickup fee), 24-hour cancellation, and the ATV price calculator. Do not expect a complimentary quad.",
      },
      {
        id: "faq-atv-12",
        question: "Do you run an ATV tour Ubud waterfall or Gorilla Cave with lunch?",
        answer:
          "Lunch is included. Gorilla Cave and waterfall-cave ATV are other operators (Alasan, Kuber). Our track is jungle mud and river crossings in Sedang — not a cave. For canyon waterfalls, book ATV + Ayung rafting from IDR 1,250,000. Compare: https://www.sekarbaliactivity.com/blog/bali-atv-vs-kuber-cave-2026",
      },
      {
        id: "faq-atv-13",
        question: "What are Ubud quad biking reviews like?",
        answer:
          "Guests book this as a beginner-friendly Ubud quad bike adventure. The money page shows Recommended by 96% of travelers. We do not invent a review count. Lunch, helmet, boots, and insurance are on the card. WhatsApp — no payment to inquire.",
      },
      {
        id: "faq-atv-14",
        question: "What is a good price for ATV or quad bike near Ubud in 2026?",
        answer:
          "Our published good ATV price is IDR 750,000 for one rider, 725,000 each for two singles, and 700,000 each for three+. Lunch, helmet, boots, and insurance are included at All New Bali Adventure. Pickup is IDR 400,000 or self-meet. We do not match 235K–450K shared stickers that skip lunch. Full note: https://www.sekarbaliactivity.com/blog/good-price-atv-quad-bike-ubud-2026",
      },
    ],
    reviews: [],
  },
  {
    id: "atv-rafting-combo",
    title: "ATV + Ayung Rafting Combo near Ubud",
    slug: "atv-rafting-combo",
    category: "adventure",
    area: "Sedang + Ayung / Ubud",
    venue: "All New Bali Adventure, Sedang — not the office · then Ayung River",
    isTopPick: true,
    pickup: "IDR 400,000 once for the day or free self-meet",
    duration: "5–7 Hours",
    basePrice: 1250000,
    seoTitle: "ATV + Rafting Ubud | From 1.25M",
    seoDescription:
      "Book ATV + Ayung rafting near Ubud. ATV from 750K + rafting 500K (450K for 2+). 10% mix at checkout. Pickup 400K or self-meet. WhatsApp.",
    heroImage: {
      url: "/images/adventures/atv-mud-river-splash.jpg",
      alt: "Muddy ATV near Ubud paired with Ayung River whitewater rafting",
    },
    gallery: [
      {
        url: "/images/adventures/atv-mud-river-splash.jpg",
        alt: "Muddy quad bike river crossing before Ayung rafting near Ubud",
      },
      {
        url: "/images/adventures/atv-mud-jungle-pov.jpg",
        alt: "Rider POV of the Sedang jungle mud ATV track",
      },
      {
        url: "/images/adventures/rafting.jpg",
        alt: "Whitewater rafting through a Bali jungle river canyon",
      },
    ],
    shortDescription:
      "Flagship land + water day: Sedang ATV at All New Bali Adventure, then Class II–III Ayung rafting. From IDR 1,250,000 at published ticket floors (ATV 750K + rafting 500K). 10% mix at checkout. Pickup IDR 400,000 once or self-meet.",
    fullDescription: `**Want mud and rapids in one WhatsApp thread?** This is our **flagship adventure day**. Morning [ATV at All New Bali Adventure](/tours/bali-atv-adventure) in Sedang — sit-on quad, jungle mud, river crossings, lunch. Afternoon [Ayung River rafting](/tours/whitewater-rafting) — Class II–III, helmet, life jacket, lunch, insurance. **Hotel pickup is IDR 400,000 once** for the adventure day, or free self-meet at each pin.

**ATV meet is the arena, not the office.** Self-meet at All New Bali Adventure, Jl. Raya Krasan, Sedang. Do not go to Jalan Tunjung Biru, Banjar Kenderan — that is the office pin only.

### 2026 from-price (what you can cite)

| Line | Published IDR |
| --- | --- |
| Single ATV (1 rider) | **750,000** (725,000 each for 2 · 700,000 for 3+) |
| Tandem ATV (2 on one bike) | **1,100,000** / bike |
| Ayung rafting | **500,000** list · **450,000** for 2+ (**min 2**) |
| Same-day mix (2 activities) | **10% off** the activity subtotal at checkout |
| Hotel pickup | **400,000** once · or self-meet |

**From-price on this page is IDR 1,250,000** — one ATV list + one rafting list. Rafting needs **two guests**. A typical couple on two singles is **IDR 2,350,000** before mix (**2,115,000** after 10%). One tandem + two rafting seats is **IDR 2,000,000** before mix (**1,800,000** after 10%). WhatsApp confirms the mix total. We do not invent a third “secret” bundle sticker.

Book the checkout mix: [ATV + rafting](/book?combo=combo-atv-rafting). Single-ATV price story: [ATV + rafting Ubud 2026](/blog/atv-rafting-combo-ubud-2026). Couple share: [tandem ATV + rafting](/blog/atv-tandem-rafting-ubud-2026). Gentler water: [ATV + Wos tubing](/blog/atv-river-tubing-wos-river-bali). Sit-in hour instead of the quad: [ATV vs UTV](/blog/bali-atv-vs-utv-buggy-2026).

### How the day runs
1. **ATV first** — briefing, mud track, lunch at Sedang (2–4 hours including kit).
2. **Transfer** — we time the Ayung slot on WhatsApp. Same 400,000 pickup can cover both pins when you book the hotel collect.
3. **Rafting** — Class II–III splash, lunch on the river ticket, dry clothes after.

Beginner briefing on both tickets. No ATV licence. Rafting wants basic swimming confidence; ages typically **7+** on the river and insurance **6–65** on ATV.

**Ready?** Open [book ATV + rafting](/book?combo=combo-atv-rafting) or WhatsApp **date, guest count, single or tandem, hotel pin**. No payment to inquire.`,
    highlights: [
      "Flagship land + water day — one WhatsApp inbox",
      "Sedang ATV lunch + Ayung rafting lunch both on the tickets",
      "10% mix at checkout when you book both",
      "Pickup IDR 400,000 once or free self-meet",
    ],
    included: [
      "Sedang ATV (single or tandem) with lunch, helmet, boot shoes, insurance 6–65",
      "Ayung Class II–III rafting with lunch, helmet, life jacket, crew, insurance 6–65",
      "English safety briefing on both tickets",
    ],
    notIncluded: [
      "Hotel pickup & drop-off (IDR 400,000 once — optional)",
      "Personal expenses and gratuities",
    ],
    itinerary: [
      {
        id: "iti-combo-1",
        time: "Morning",
        title: "Sedang ATV",
        description:
          "Meet at All New Bali Adventure in Sedang (Jl. Raya Krasan) or hotel collect — not the office in Banjar Kenderan. Briefing, jungle mud, river crossings, lunch.",
      },
      {
        id: "iti-combo-2",
        time: "Midday",
        title: "Transfer to Ayung",
        description:
          "We lock the rafting slot on WhatsApp. Same-day order can flip if the river clock is tighter.",
      },
      {
        id: "iti-combo-3",
        time: "Afternoon",
        title: "Ayung rafting",
        description:
          "Class II–III canyon, lunch on the rafting ticket, change, drop or self-depart.",
      },
    ],
    activityOptions: [
      {
        name: "ATV + Rafting (single ATV)",
        priceDiff: 0,
        description: "From IDR 1,250,000 list · 10% mix at checkout · rafting min 2",
      },
      {
        name: "ATV + Rafting (tandem ATV)",
        priceDiff: 350000,
        description: "1.1M bike + two 450K rafts = 2.0M before 10% · 1.8M after",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-atv-raft-1",
        question: "How much is ATV + rafting near Ubud?",
        answer:
          "Published floors are ATV from IDR 750,000 and Ayung rafting IDR 500,000 (IDR 450,000 for 2+, minimum 2). The from-price on this page is IDR 1,250,000 for one ATV list plus one rafting list. Booking both as a same-day mix takes 10% off the activity subtotal at checkout. Hotel pickup is IDR 400,000 once or self-meet. WhatsApp — no payment to inquire.",
      },
      {
        id: "faq-atv-raft-2",
        question: "Is ATV + rafting the same as ATV + tubing?",
        answer:
          "No. Rafting is a paddle team on Class II–III Ayung water. Tubing is a sit-on-tube float on the Wos River at the same 500,000 / 450,000-for-2+ list. Pick rafting for splash. Pick tubing if you want a gentler add-on.",
      },
      {
        id: "faq-atv-raft-3",
        question: "Can beginners book this combo?",
        answer:
          "Yes. ATV includes a flat-ground briefing; no licence. Rafting is beginner Class II–III with a crew. Basic swimming confidence is required on the river. Ages typically 7+ for rafting; ATV insurance covers 6–65.",
      },
      {
        id: "faq-atv-raft-4",
        question: "Is hotel pickup included?",
        answer:
          "No. Pickup is IDR 400,000 once for the adventure day, or you self-meet at Sedang and at the Ayung put-in. Free Ubud pickup is only on cycling and Tumang cooking class.",
      },
    ],
    reviews: [],
  },
  {
    id: "batur-sunrise-jeep-tour",
    title: "Private Mount Batur Jeep Tour",
    slug: "batur-sunrise-jeep-tour",
    category: "adventure",
    area: "Kintamani / Mount Batur",
    venue: "Crater-rim viewpoint, Mount Batur (~1,350m)",
    pickup: "Island-wide hotel pickup included",
    isTopPick: true,
    duration: "Sunrise 6–7 Hours · Sunset 4–5 Hours",
    basePrice: 1000000,
    seoTitle: "Batur Jeep No Hike | 2M for 2 · 750K",
    seoDescription:
      "Sit-in Mount Batur jeep 2M for 2 (1M pp). Tracking 1.8M for 2 (900K pp). 3+ 750K. Min 2. Meal + island-wide pickup. WhatsApp.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1727335333476-8aa180978ff6?auto=format&fit=crop&w=1200&q=80",
      alt: "4x4 jeep ride up Mount Batur's volcanic tracks before sunrise",
      width: 1200,
      height: 630,
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1727335333476-8aa180978ff6?auto=format&fit=crop&w=1200&q=80",
        alt: "4x4 jeep ride up Mount Batur's volcanic tracks before sunrise",
      },
      {
        url: "https://images.unsplash.com/photo-1693821876313-dc573a92028c?auto=format&fit=crop&w=1200&q=80",
        alt: "Sunrise over Lake Batur seen from the Mount Batur crater rim",
      },
      {
        url: "https://images.unsplash.com/photo-1725946687006-e5cf87668fd9?auto=format&fit=crop&w=1200&q=80",
        alt: "Off-road vehicle parked on the volcanic terrain near Kintamani",
      },
      {
        url: "https://images.unsplash.com/photo-1508591086314-d7deb00cede9?auto=format&fit=crop&w=1200&q=80",
        alt: "Mount Batur summit rising above the morning clouds",
      },
    ],
    shortDescription:
      "Your private 4×4 to Mount Batur near Kintamani — sit-in or tracking (jeep + guided trek), sunrise or sunset, minimum 2 guests. Sit-in IDR 2,000,000 for 2 guests. Tracking IDR 1,800,000 for 2 guests. 3+ IDR 750,000 per person. Meal included. Optional Batur hot spring +IDR 150,000 per person with the entrance ticket included. Hotel pickup included.",
    fullDescription: `**What is the Private Mount Batur Jeep Tour?** It is **your private** 4×4 jeep on Mount Batur’s volcanic tracks near Kintamani — about 1,350 metres above sea level — for **sunrise or sunset** over **Lake Batur** and **Mount Agung**. **Minimum 2 guests.** Choose **private jeep** (stay seated, no hike) or **private tracking jeep** (jeep plus a guided trek to the viewpoint). Sit-in is **IDR 2,000,000 for 2 guests** (IDR 1,000,000 per person). Tracking is **IDR 1,800,000 for 2 guests** (IDR 900,000 per person). **IDR 750,000 per person** once 3+ guests share one jeep, sit-in or tracking. A local driver, hot drink, **sit-down meal**, and hotel pickup are included. Food is not cooked inside the 4×4 — the meal is after the viewpoint.

### Private jeep or tracking jeep
**Private jeep** is the no-hike option: you stay in the 4×4 to a crater-rim viewpoint on Mount Batur’s eastern flank. **Private tracking jeep** is the trek variant: the same private jeep plus a guided walk to the viewpoint — **IDR 1,800,000 for 2 guests**, not a cheaper shared hike.

| | Private jeep | Private tracking jeep |
| --- | --- | --- |
| How you go | Stay seated in the 4×4 | Jeep + guided trek |
| Fitness | Sit in the jeep | Moderate walking |
| 2 guests (minimum) | IDR 2,000,000 total · 1,000,000 pp | IDR 1,800,000 total · 900,000 pp |
| 3+ guests | IDR 750,000 per person | IDR 750,000 per person |
| Best for | Families, couples, skipping the hike | Guests who want a trek with jeep support |

The tracking jeep is still **not** the classic 2-hour Mount Batur **summit** trek — that is a different route. Side-by-side: [Mount Batur jeep vs sunrise trek](/blog/mount-batur-jeep-vs-sunrise-trek).

### Sunrise or sunset
Choose **sunrise** or **sunset** in the booking form — sit-in or tracking, minimum 2 guests. Sunrise and sunset use the same sit-in or tracking package for two guests.

**Sunrise:** pickup typically 02:00–03:00 AM (south Bali earliest, Ubud a little later). About 6–7 hours door to door.

**Sunset:** pickup typically 14:30–15:30. About 4–5 hours door to door. Same crater-rim viewpoint over Lake Batur and Mount Agung.

| | Sunrise | Sunset |
| --- | --- | --- |
| Pickup | 02:00–03:00 AM | 14:30–15:30 |
| Duration | ~6–7 hours | ~4–5 hours |
| Price | Sit-in or tracking 2-guest package · meal included | Sit-in or tracking 2-guest package · meal included |
| Hot spring add-on | Optional +IDR 150,000 (ticket included) | Optional +IDR 150,000 (ticket included) |

Confirm the exact window on WhatsApp with your hotel area.

### How the Morning (or Afternoon) Works
We collect you from your hotel. At the Kintamani base camp you transfer into a rugged 4×4 with an experienced local driver, who navigates the dirt and lava-rock tracks toward the viewpoint while a hot drink is served. Private-jeep guests stay with the vehicle; tracking-jeep guests continue on foot with a guide.

### Viewpoint
Watch the light change over Lake Batur and Mount Agung from the crater-rim viewpoint. A sit-down **meal is included** after you come down — on private jeep and tracking jeep, sunrise or sunset.

### Optional Batur hot spring
Add a soak at a Batur / Toya Devasya hot spring after sunrise or sunset for **IDR 150,000 per person** on top of the jeep rate. **The hot-spring entrance ticket is included** in that add-on — you do not pay a second ticket at the gate. Choose it in the booking form on any jeep variant.

### Optional Coffee Plantation Stop
On the way back we can swing by a local Kintamani coffee plantation for a short, no-obligation stop. For a dedicated ethical tasting near Ubud, see [Luwak Coffee Plantation (Umah Kuno)](/tours/luwak-coffee-plantation). Full sunrise itinerary: [Batur sunrise jeep guide 2026](/blog/mount-batur-sunrise-jeep-tour-guide-2026).

### Private Kintamani Day (promo)
A private full-day itinerary: **jeep or tracking**, **natural hot spring** (entrance ticket included), **meal included**, **Umah Kuno coffee**, and a **rice terrace** stop. Minimum 2 guests. **Promo IDR 1,300,000 per person** (was IDR 1,450,000). Hotel pickup included. Choose **Private Kintamani Day — Jeep** or **Private Kintamani Day — Tracking** in the booking form — **both include the meal**.

| Stop | What you do |
| --- | --- |
| Jeep or tracking | Mount Batur crater-rim 4×4 — sit-in jeep or jeep + guided trek |
| Natural hot spring | Toya Devasya / Batur soak — **entrance ticket included** |
| Meal | Sit-down meal included after the jeep/trek and hot spring |
| Umah Kuno | Coffee tasting at the Bali Umah Kuno coffee place (Tampaksiring) |
| Rice terrace | Tegalalang (or nearby) rice-terrace stop, then hotel drop-off |

Typical clock: pre-dawn Batur jeep or trek → hot spring → meal → Umah Kuno → rice terrace → hotel.

### Group-Friendly Pricing
A private jeep costs the same whether two or three people ride, so the per-person rate drops the more guests you bring. Sit-in and tracking use **different 2-guest packages**; 3+ guests share one per-person rate. **Minimum 2 guests.**

| Guests in one jeep | Sit-in (IDR) | Tracking (IDR) |
| --- | --- | --- |
| 2 (minimum) | 2,000,000 total · 1,000,000 pp · meal included | 1,800,000 total · 900,000 pp · meal included |
| 3+ | 750,000 pp · meal included | 750,000 pp · meal included |
| Hot spring add-on (any jeep) | +150,000 (ticket included) | +150,000 (ticket included) |
| Private Kintamani Day (jeep or tracking) | 1,300,000 promo (was 1,450,000) · meal included | 1,300,000 promo (was 1,450,000) · meal included |

Hotel pickup and drop-off are built into those rates (not the IDR 400,000 ATV/rafting pickup add-on). Message WhatsApp with your guest count for an exact quote.

### What to bring
Warm layer (it is cold on the rim before sunrise), closed shoes — especially on tracking jeep — phone/camera, swimwear and a towel if you add the hot spring or book Private Kintamani Day, and a little cash if you want coffee-plantation souvenirs. We handle the jeep, driver, entrance fee, hot drink, **sit-down meal**, and insurance for ages 6–65. Food is not cooked inside the 4×4 — the included meal is after the viewpoint (sunrise, sunset, tracking, and Private Kintamani Day).`,
    highlights: [
      "Private jeep — your vehicle, your group (sit-in or tracking)",
      "Sunrise or sunset over Lake Batur and Mount Agung",
      "Optional Batur hot spring +IDR 150,000 (ticket included)",
      "Private Kintamani Day promo IDR 1,300,000 (meal + hot spring + Umah Kuno + rice terrace)",
      "Hot drink en route · sit-down meal included (jeep and tracking)",
      "Per-person price drops the more guests share a jeep",
    ],
    included: [
      "Private 4×4 jeep + experienced local driver",
      "Hotel pickup & drop-off",
      "Hot drink on the way",
      "Kintamani / Mount Batur area entrance fee",
      "Guided trek on the tracking jeep variant",
      "Hot-spring entrance ticket when you add the +IDR 150,000 option, or on Private Kintamani Day",
      "Umah Kuno coffee tasting and rice-terrace stop on Private Kintamani Day",
      "Sit-down meal after the viewpoint (private jeep, tracking, sunrise, sunset, and Kintamani Day)",
      "Insurance for ages 6–65",
    ],
    notIncluded: [
      "Food cooked or served inside the 4×4 — the included meal is after the viewpoint",
      "Hot spring unless you add the +IDR 150,000 option (ticket is then included)",
      "Coffee plantation purchases (the stop itself is free to visit)",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      {
        id: "iti-jeep-1",
        time: "02:00–03:00 AM",
        title: "Hotel Pickup",
        description:
          "Sunrise: typically 02:00–03:00 AM. Sunset: typically 14:30–15:30. Exact time depends on your hotel area. We transfer you toward the Kintamani base camp.",
      },
      {
        id: "iti-jeep-2",
        time: "04:00 AM",
        title: "Meet Your Jeep & Driver",
        description:
          "Transfer into a 4×4 jeep at base camp. Private jeep stays with the vehicle to the viewpoint. Tracking jeep continues with a guided trek — sit-in IDR 2,000,000 for 2, tracking IDR 1,800,000 for 2. A hot drink is served on the way.",
      },
      {
        id: "iti-jeep-3",
        time: "05:45 AM",
        title: "Arrive at the Sunrise Viewpoint",
        description:
          "Reach the crater-rim viewpoint on Mount Batur's eastern flank (approx. 1,350m above sea level) and find your spot before the sky lightens.",
      },
      {
        id: "iti-jeep-4",
        time: "06:00 AM",
        title: "Sunrise at the crater rim",
        description:
          "Watch the sunrise over Lake Batur and Mount Agung from the crater-rim viewpoint. A sit-down meal is included after you come down — private jeep and tracking jeep.",
      },
      {
        id: "iti-jeep-5",
        time: "06:45 AM",
        title: "Return to Base Camp",
        description: "Head back down the volcanic tracks to the jeep parking area at base camp.",
      },
      {
        id: "iti-jeep-meal",
        time: "After viewpoint",
        title: "Meal included (jeep or tracking)",
        description:
          "Sit-down meal included on every private jeep and tracking option — sunrise, sunset, and Private Kintamani Day. Food is not cooked inside the 4×4.",
      },
      {
        id: "iti-jeep-6",
        time: "08:00 AM (Optional)",
        title: "Coffee Plantation Stop",
        description: "Optional stop at a local Kintamani coffee plantation on the way back — no obligation to buy. Sunset tours skip this morning slot.",
      },
      {
        id: "iti-jeep-hs",
        time: "After viewpoint (Optional)",
        title: "Batur Hot Spring",
        description:
          "Add Toya Devasya / Batur natural hot spring after sunrise or sunset. Entrance ticket is included when you take the +IDR 150,000 per person option.",
      },
      {
        id: "iti-jeep-7",
        time: "Hotel drop-off",
        title: "Tour Ends",
        description: "Sunrise tours typically finish around 09:30 AM; sunset tours in the evening. Drop-off back at your hotel.",
      },
      {
        id: "iti-jeep-sunset-view",
        time: "~18:00 (Sunset option)",
        title: "Sunset at the crater rim",
        description:
          "Sunset jeep or tracking: afternoon pickup 14:30–15:30, then the same crater-rim viewpoint over Lake Batur and Mount Agung. Same sit-in or tracking 2-guest package as sunrise. Optional hot spring after sunset.",
      },
      {
        id: "iti-kintamani-day-1",
        time: "02:30–03:00 (Private Kintamani Day)",
        title: "Hotel pickup — full-day private",
        description:
          "Minimum 2 guests. Promo IDR 1,300,000 per person (was IDR 1,450,000). Hotel pickup included. Choose jeep (sit-in) or tracking (jeep + trek) in the booking form.",
      },
      {
        id: "iti-kintamani-day-2",
        time: "Sunrise",
        title: "Jeep or tracking at Mount Batur",
        description:
          "Private 4×4 to the crater-rim viewpoint — stay in the jeep, or continue with a guided trek. Same private Kintamani Day promo rate either way.",
      },
      {
        id: "iti-kintamani-day-3",
        time: "Morning",
        title: "Natural hot spring (ticket included)",
        description:
          "Soak at Toya Devasya / Batur. The hot-spring entrance ticket is included in this itinerary — no second ticket at the gate.",
      },
      {
        id: "iti-kintamani-day-meal",
        time: "Late morning",
        title: "Meal included (jeep or tracking)",
        description:
          "Sit-down meal included on Private Kintamani Day — same on the jeep variant and the tracking variant, and the same meal inclusion as sunrise/sunset private jeep.",
      },
      {
        id: "iti-kintamani-day-4",
        time: "Late morning",
        title: "Umah Kuno coffee tasting",
        description:
          "Stop at the Bali Umah Kuno coffee place in Tampaksiring for a tasting (not the optional Kintamani roadside plantation on the short jeep).",
      },
      {
        id: "iti-kintamani-day-5",
        time: "Afternoon",
        title: "Rice terrace, then hotel drop-off",
        description:
          "Rice-terrace stop (typically Tegalalang), then private drop-off back at your hotel.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-jeep-1",
        question: "How much does the private Mount Batur jeep cost?",
        answer:
          "IDR 2,000,000 for 2 guests on sit-in private jeep (IDR 1,000,000 per person, minimum 2), or IDR 1,800,000 for 2 guests on tracking jeep (IDR 900,000 per person). IDR 750,000 per person for 3 or more guests on either variant, sunrise or sunset. Private jeep, driver, hotel pickup, a hot drink, and a sit-down meal are included. Optional Batur hot spring is +IDR 150,000 per person with the entrance ticket included. Message WhatsApp with your guest count for an exact quote.",
      },
      {
        id: "faq-jeep-2",
        question: "What time is hotel pickup?",
        answer:
          "Sunrise pickup is typically 02:00–03:00 AM depending on your hotel area — south Bali (Nusa Dua, Jimbaran, Kuta, Sanur, Seminyak, Canggu) leaves earliest, Ubud guests a little later. Sunset pickup is typically 14:30–15:30. We confirm your exact pickup time on WhatsApp once your date is booked.",
      },
      {
        id: "faq-jeep-3",
        question: "Do we hike up Mount Batur, or stay in the jeep?",
        answer:
          "Choose in the booking form. Private jeep: you stay in the 4×4 to a crater-rim viewpoint (~1,350m) — no hike. Sit-in is IDR 2,000,000 for 2 guests. Private tracking jeep: jeep plus a guided trek to the viewpoint, IDR 1,800,000 for 2 guests. Minimum 2 guests. 3+ guests pay IDR 750,000 per person on either option. Neither option is the classic 2-hour Mount Batur summit trek.",
      },
      {
        id: "faq-jeep-track",
        question: "What is the tracking jeep sunrise variant?",
        answer:
          "Tracking jeep is the trek version of this private jeep: 4×4 plus a guided walk to the sunrise or sunset viewpoint. It is labelled private. For 2 guests tracking is IDR 1,800,000 (IDR 900,000 per person), not the sit-in IDR 2,000,000 package. IDR 750,000 per person for 3+.",
      },
      {
        id: "faq-jeep-sun",
        question: "Can we book sunset instead of sunrise?",
        answer:
          "Yes. Private jeep and tracking jeep are both available at sunrise or sunset. Sit-in and tracking use different 2-guest packages; 3+ guests share the same per-person rate. Sunset pickup is typically 14:30–15:30. Choose Private Jeep Sunrise, Private Tracking Jeep Sunrise, Private Jeep Sunset, or Private Tracking Jeep Sunset in the booking form.",
      },
      {
        id: "faq-kintamani-day",
        question: "What is Private Kintamani Day, and how much does it cost?",
        answer:
          "Private Kintamani Day is a full-day private itinerary: jeep or tracking at Mount Batur, a natural hot spring (entrance ticket included), a sit-down meal, Umah Kuno coffee tasting, and a rice-terrace stop. Minimum 2 guests. Promo IDR 1,300,000 per person (was IDR 1,450,000). Hotel pickup included. The meal is included on both the Jeep and Tracking options. Choose Jeep or Tracking in the booking form.",
      },
      {
        id: "faq-jeep-hs",
        question: "Can we add a Batur hot spring, and is the ticket included?",
        answer:
          "Yes. Any jeep variant (private or tracking, sunrise or sunset) can add a Batur / Toya Devasya hot spring soak for IDR 150,000 per person on top of the jeep rate. The hot-spring entrance ticket is included in that add-on — you do not pay a second ticket at the gate.",
      },
      {
        id: "faq-jeep-4",
        question: "Is breakfast included?",
        answer:
          "Yes. A sit-down meal is included on every private jeep and tracking option — sunrise, sunset, and Private Kintamani Day. Food is not cooked inside the 4×4; you eat after the viewpoint. A hot drink on the way up is included.",
      },
      {
        id: "faq-jeep-5",
        question: "Can we stop at a coffee plantation?",
        answer:
          "Yes — we offer an optional, no-obligation stop at a local Kintamani coffee plantation on the way back to the meeting point.",
      },
      {
        id: "faq-jeep-6",
        question: "Why does the per-person price drop with more guests?",
        answer:
          "A private jeep and driver cost the same whether two or three people ride along, so we split that flat cost across your group — 2 guests sharing a jeep each pay less than a larger split at 3+. Minimum 2 guests. Tracking jeep uses the same split.",
      },
      {
        id: "faq-jeep-7",
        question: "Is hotel pickup included on the Mount Batur jeep tour?",
        answer:
          "Yes. Hotel pickup and drop-off are included in the jeep price island-wide — Ubud, Canggu, Seminyak, Sanur, Kuta, Nusa Dua, and nearby areas. Sunrise pickup is usually 02:00–03:00 AM; sunset is typically 14:30–15:30. Confirmed on WhatsApp.",
      },
      {
        id: "faq-jeep-8",
        question: "Is the Mount Batur sunrise jeep tour suitable for families and non-hikers?",
        answer:
          "Yes — book private jeep if you want to stay seated in the 4×4 with no trek. Tracking jeep adds a guided walk and needs moderate fitness. Insurance covers ages 6–65.",
      },
      {
        id: "faq-jeep-9",
        question: "How long is the private Mount Batur jeep?",
        answer:
          "Sunrise is about 6–7 hours door to door. Sunset is about 4–5 hours. Both include hotel pickup, the jeep ride, time at the viewpoint, a sit-down meal, optional coffee or hot spring, and drop-off. Private Kintamani Day (jeep or tracking) is a full day and also includes a meal.",
      },
      {
        id: "faq-jeep-10",
        question: "What should I wear for a Batur jeep tour?",
        answer:
          "A warm layer (it is cold before sunrise at ~1,350m), closed shoes — required on tracking jeep — and a jacket you can peel off after the sun is up. Bring a camera. A sit-down meal is included after the viewpoint on jeep and tracking (sunrise, sunset, and Private Kintamani Day). A hot drink is included. Pack swimwear and a towel if you add the hot spring or book Kintamani Day.",
      },
      {
        id: "faq-jeep-11",
        question: "Do we reach the Mount Batur summit in the jeep?",
        answer:
          "No. Private jeep drives volcanic tracks to a crater-rim viewpoint on Mount Batur’s eastern flank (~1,350m). Tracking jeep adds a guided trek to the viewpoint, not the classic summit trail. Choose a trek operator if summit walking is the goal.",
      },
    ],
    reviews: [],
  },
  {
    id: "whitewater-rafting",
    title: "Ayung River Whitewater Rafting near Ubud",
    slug: "whitewater-rafting",
    category: "adventure",
    area: "Ayung River / Ubud",
    venue: "Ayung River canyon, Ubud",
    isTopPick: true,
    pickup: "IDR 400,000 hotel pickup or free self-meet",
    duration: "3 Hours",
    basePrice: 500000,
    childPrice: 450000,
    seoTitle: "Ayung River Rafting Ubud | 500K · 450K",
    seoDescription:
      "Ayung River rafting near Ubud. Class II–III. IDR 500,000, or 450,000 for 2+ (min 2). Lunch and gear included. Pickup 400K or self-meet. Book on WhatsApp.",
    heroImage: {
      url: "/images/adventures/rafting.jpg",
      alt: "Whitewater rafting through a Bali jungle river canyon",
      width: 1376,
      height: 768,
    },
    gallery: [
      {
        url: "/images/adventures/rafting.jpg",
        alt: "Rafting crew navigating Bali river rapids",
      },
    ],
    shortDescription:
      "Ayung River rafting near Ubud is a guided Class II–III run. IDR 500,000 per person, or IDR 450,000 for 2+ (minimum 2). Lunch, helmet, life jacket, and insurance included. Hotel pickup IDR 400,000 or self-meet — not free Ubud pickup.",
    fullDescription: `**How much is Ayung River rafting near Ubud?** Sekar Bali Activity lists **IDR 500,000 per person**, or **IDR 450,000 per person for 2+ guests** (minimum 2) on **Class II–III** rapids. Helmet, life jacket, English-speaking crew, lunch, and insurance for ages 6–65 are included. **Hotel pickup is IDR 400,000** or self-meet — not the free Ubud rule on cycling and cooking.

### 2026 price (what Google should cite)

| Guests | Price (IDR) | Included |
| --- | --- | --- |
| 2+ (discount) | **450,000** / person | Lunch, gear, guide, insurance |
| List | **500,000** / person | Same Class II–III run |
| Hotel pickup | **400,000** | Optional · or self-meet free |

Full table and honest vs-cheap-listings notes: [Ayung rafting Ubud price 2026](/blog/rafting-ubud-price-2026). Route detail: [whitewater rafting near Ubud guide](/blog/bali-whitewater-rafting-near-ubud-guide).

### What to Expect on the River
Ayung River rafting near Ubud is a **guided Class II–III** paddle — splash and teamwork, not extreme Class IV+. After a safety briefing and gear fitting, your crew takes the raft through fun rapids and calm stretches. You pass jungle cliffs, waterfalls, and stone carvings on the canyon walls. Helmet, life jacket, lunch, and insurance for ages 6–65 sit in the ticket. Guests should have basic swimming confidence; ages typically 7+. This is **not** Wos River tubing and **not** a cheap shared/resident ticket in the IDR 235,000–350,000 band — we publish **IDR 500,000**, or **IDR 450,000 for 2+** (minimum 2), and we do not match those listings.

### A Great Standalone Adventure or Combo Day
Book this page when you only want the river. The flagship land-and-water day is **[ATV + Ayung rafting](/tours/atv-rafting-combo)** — from **IDR 1,250,000** at ticket floors, **10% mix** at checkout, pickup **IDR 400,000 once** or self-meet. Gentler water on a tube: [Wos River tubing](/tours/canyon-tubing) at the same 500K / 450K-for-2+ list (lunch not included). Side-by-side: [rafting vs tubing vs ATV](/blog/rafting-vs-tubing-vs-atv-near-ubud). Check pickup first on the [hotel pickup checker](/planners/hotel-pickup-checker). WhatsApp locks the same-day slots.

**Available Schedules:**
- **Morning:** 08:30 AM
- **Midday:** 11:00 AM
- **Afternoon:** 02:00 PM`,
    highlights: [
      "Class II-III rapids with professional crew",
      "Jungle canyon scenery and waterfalls",
      "Life jackets and safety briefing included",
      "Lunch included after the ride",
    ],
    included: [
      "Professional rafting crew and guide",
      "Life jacket and safety equipment",
      "Safety briefing before launch",
      "Lunch after rafting",
      "Insurance for ages 6–65",
    ],
    notIncluded: [
      "Hotel pickup & drop-off (IDR 400,000 surcharge — optional)",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      {
        id: "iti-raft-1",
        time: "Start",
        title: "Arrival & Safety Briefing",
        description:
          "Meet your river crew, get fitted with life jackets and helmets, and receive a clear safety briefing before launching.",
      },
      {
        id: "iti-raft-2",
        time: "On River",
        title: "Whitewater Rapids",
        description:
          "Paddle through Class II-III rapids surrounded by jungle cliffs, waterfalls, and ancient stone carvings.",
      },
      {
        id: "iti-raft-3",
        time: "Finish",
        title: "Lunch & Wind Down",
        description:
          "Change into dry clothes and enjoy a simple lunch after your rafting adventure.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-raft-1",
        question: "Do I need rafting experience?",
        answer:
          "No. Our professional crew guides every raft and gives a full safety briefing before you launch. The route is suitable for beginners.",
      },
      {
        id: "faq-raft-2",
        question: "What should I bring?",
        answer:
          "Bring a change of clothes, sunscreen, and a waterproof phone case if you want photos. Towels and changing facilities are available after the trip.",
      },
      {
        id: "faq-raft-3",
        question: "Is hotel pickup included?",
        answer:
          "Hotel pickup is available for an additional IDR 400,000, or meet on site with no transport fee. Free Ubud pickup is included on the cycling tour and Tumang cooking class — not on rafting.",
      },
      {
        id: "faq-raft-4",
        question: "What is the minimum group size?",
        answer: "A minimum of 2 guests is required to run a rafting trip.",
      },
      {
        id: "faq-raft-5",
        question: "Do you provide insurance?",
        answer:
          "Yes. We provide insurance for guests aged 6–65 years old on our rafting packages.",
      },
      {
        id: "faq-raft-6",
        question: "How much does whitewater rafting near Ubud cost?",
        answer:
          "IDR 500,000 per person, or IDR 450,000 per person when 2 or more guests book (minimum 2). Lunch, helmet, life jacket, guide, and insurance for ages 6–65 are included. Hotel pickup is an optional IDR 400,000 add-on. The 2026 price table is on the Ayung rafting Ubud price article.",
      },
      {
        id: "faq-raft-7",
        question: "Is this Ayung River rafting near Ubud?",
        answer:
          "Yes. This is Class II–III whitewater rafting on the Ayung River / Ubud canyon — jungle cliffs, waterfalls, and stone carvings. Beginner-friendly with a full safety briefing. Pair with ATV the same day if you want a land-and-water combo.",
      },
    ],
    reviews: [],
  },
  {
    id: "canyon-tubing",
    title: "Wos River Canyon Tubing near Ubud",
    slug: "canyon-tubing",
    category: "adventure",
    area: "Wos River / Pejeng",
    venue: "Wos River canyon, Pejeng / Ubud",
    pickup: "IDR 400,000 hotel pickup or free self-meet",
    duration: "2.5 Hours",
    basePrice: 500000,
    childPrice: 450000,
    seoTitle: "Wos River Tubing Price | 500K · 450K 2+",
    seoDescription:
      "Wos River canyon tubing Ubud — IDR 500,000, or 450,000 for 2+. Life jacket, guide, insurance. Lunch not included. Pickup IDR 400K. Book WhatsApp.",
    heroImage: {
      url: "/images/adventures/canyon-tubing.jpg",
      alt: "Canyon tubing through crystal-clear Bali waters",
    },
    gallery: [
      {
        url: "/images/adventures/canyon-tubing.jpg",
        alt: "Floating through a hidden Bali canyon on an inflatable tube",
      },
    ],
    shortDescription:
      "Drift through hidden canyons on an inflatable tube. Crystal-clear waters, moss-covered walls, and shafts of sunlight create a magical underground world.",
    fullDescription: `**How much is Wos River tubing near Ubud?** Sekar Bali Activity canyon tubing is **IDR 500,000 per person**, or **IDR 450,000 for 2+ guests**, on the **Wos River** — not the Ayung. Life jacket, English-speaking guide, and insurance for ages 6–65 are included. **Lunch is not included.** **Hotel pickup is IDR 400,000** or self-meet.

### 2026 price (what Google should cite)

| Guests | Price (IDR) | Included |
| --- | --- | --- |
| 1 | **500,000** | Tube, life jacket, guide, insurance |
| 2+ | **450,000** / person | Same Wos float |
| Hotel pickup | **400,000** | Optional · or self-meet free |
| Lunch | **Not included** | Eat before / after, or book ATV lunch |

Full table vs ticket-only listings: [Wos River tubing price 2026](/blog/wos-river-tubing-price-2026). Float detail: [canyon tubing near Ubud](/blog/bali-canyon-tubing-guide-ubud).

### What the float is
A nature guide leads the way while you drift through calm pools and gentle currents. Crystal-clear water, moss-covered rock walls, and shafts of sunlight make this one of the most photogenic adventures near Ubud. No paddle team and no Class II–III drops — that is [Ayung rafting](/tours/whitewater-rafting).

### Pair It with ATV
Many guests race the [All New Bali Adventure ATV](/tours/bali-atv-adventure) first, then cool off on the Wos. Same-day mix from-price is **IDR 1,250,000** (ATV 750K + tubing 500K); checkout takes **10% off**. Pickup **IDR 400,000 once** or self-meet. Same-day flow: [ATV + Wos River tubing](/blog/atv-river-tubing-wos-river-bali) · [checkout](/book?combo=combo-atv-tubing). Compare splash vs mud: [rafting vs tubing vs ATV](/blog/rafting-vs-tubing-vs-atv-near-ubud).

**Available Schedules:**
- Morning and afternoon departures available — message us to confirm your preferred time slot.`,
    highlights: [
      "Hidden canyon scenery",
      "Crystal-clear river water",
      "Life jacket and nature guide included",
      "Great ATV combo add-on",
    ],
    included: [
      "Inflatable tube and life jacket",
      "English-speaking nature guide",
      "Safety briefing",
      "Insurance for ages 6–65",
    ],
    notIncluded: [
      "Hotel pickup & drop-off (IDR 400,000 surcharge — optional)",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      {
        id: "iti-tube-1",
        time: "Start",
        title: "Briefing & Gear Fitting",
        description:
          "Meet your guide, receive a safety briefing, and get fitted with a life jacket before entering the canyon.",
      },
      {
        id: "iti-tube-2",
        time: "On River",
        title: "Canyon Tubing",
        description:
          "Float through hidden canyons on an inflatable tube — crystal-clear water, moss-covered walls, and peaceful jungle scenery.",
      },
      {
        id: "iti-tube-3",
        time: "Finish",
        title: "Return & Wind Down",
        description:
          "Finish the float, change into dry clothes, and head back with unforgettable memories.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-tube-1",
        question: "Do I need to know how to swim?",
        answer:
          "Basic water confidence is helpful, but life jackets are provided and guides stay with the group throughout the float.",
      },
      {
        id: "faq-tube-2",
        question: "Can I combine tubing with ATV?",
        answer:
          "Yes. ATV + Wos tubing from-price is IDR 1,250,000 at ticket floors. Same-day mix takes 10% off. Pickup IDR 400,000 once or self-meet. Book https://www.sekarbaliactivity.com/book?combo=combo-atv-tubing",
      },
      {
        id: "faq-tube-3",
        question: "What should I bring?",
        answer:
          "Bring a change of clothes, sunscreen, and a waterproof phone case. Towels and changing facilities are available at our base.",
      },
      {
        id: "faq-tube-4",
        question: "Is hotel pickup included?",
        answer:
          "Hotel pickup is available for an additional IDR 400,000, or meet on site with no transport fee. Free Ubud pickup is included on the cycling tour and Tumang cooking class — not on canyon tubing.",
      },
      {
        id: "faq-tube-5",
        question: "Do you provide insurance?",
        answer:
          "Yes. We provide insurance for guests aged 6–65 years old on our canyon tubing packages.",
      },
      {
        id: "faq-tube-6",
        question: "How much is canyon tubing near Ubud?",
        answer:
          "IDR 500,000 per person, or IDR 450,000 per person when 2 or more guests book. Life jacket, guide, and insurance for ages 6–65 are included. Lunch is not included. Hotel pickup is an optional IDR 400,000 add-on. The 2026 price table is on the Wos River tubing price article.",
      },
    ],
    reviews: [],
  },
  {
    id: "swing-heaven-bali",
    title: "Swing Heaven Bali Jungle Swing near Ubud",
    slug: "swing-heaven-bali",
    category: "adventure",
    area: SWING_HEAVEN_VENUE.area,
    venue: `${SWING_HEAVEN_VENUE.name}, ${SWING_HEAVEN_VENUE.address}`,
    isTopPick: true,
    pickup: "Hotel driver included — required, no self-meet",
    duration: "1.5–2.5 Hours",
    basePrice: SWING_HEAVEN_PRICE_IDR,
    seoTitle: "Swing Heaven Bali Ubud | From IDR 530K",
    seoDescription:
      "Swing Heaven Bali in Bongkasa from IDR 530K — driver included, required. Lunch 630K. Dress hire 300K. WhatsApp booking.",
    heroImage: {
      url: "/images/adventures/swing-heaven-ayung.jpg",
      alt: "Guest on a jungle swing over the Ayung River valley at Swing Heaven Bali in Bongkasa near Ubud",
      width: 1600,
      height: 1000,
    },
    gallery: [
      {
        url: "/images/adventures/swing-heaven-ayung.jpg",
        alt: "Jungle swing over the Ayung canopy at Swing Heaven Bali in Bongkasa near Ubud",
      },
      {
        url: "/images/adventures/swing-heaven-heart-nest.jpg",
        alt: "Guest in a flying dress on the heart nest photo spot at Swing Heaven Bali",
      },
      {
        url: "/images/adventures/swing-heaven-stairs.jpg",
        alt: "Guest in a flying dress on Stairs 2 Heaven at Swing Heaven Bali in Bongkasa",
      },
      {
        url: "/images/adventures/swing-heaven-hanging-sofa.jpg",
        alt: "Three guests on the hanging sofa swing over the jungle at Swing Heaven Bali",
      },
      {
        url: "/images/adventures/swing-heaven-nest-dress.jpg",
        alt: "Guest in a long white flying dress beside a nest photo spot at Swing Heaven Bali",
      },
      {
        url: "/images/adventures/swing-heaven-onion-nest.jpg",
        alt: "Guest in a flying dress inside the onion nest at Swing Heaven Bali",
      },
    ],
    shortDescription:
      "Jungle swing park in Bongkasa near Ubud — 14 photo spots over the Ayung River valley. Package from IDR 530,000 (tea/coffee/water, insurance, hotel driver) or IDR 630,000 with lunch. Driver included — required, no self-meet. Flying dress hire IDR 300,000. Book via WhatsApp.",
    fullDescription: `**Swing Heaven Bali — jungle swings over the Ayung River (not Tegallalang)**

[Swing Heaven](https://swingheavens.com/) is a locally run jungle swing park on **Jl. Tangga Yuda, Bongkasa** (Abiansemal, Badung) — a short drive from Ubud, overlooking the **Ayung River valley**. This is **not** the Tegallalang rice-terrace swing strip. We book the park for you on one WhatsApp thread with ATV, rafting, cooking, and cycling.

### 2026 packages (per person)
| Package | Price | Includes |
|--------|-------|----------|
| Swing Heaven Package | **IDR ${SWING_HEAVEN_PRICE_IDR.toLocaleString("id-ID")}** (~USD 38) | All swings & photo spots, insurance, tea / coffee / water, hotel driver |
| Package + lunch | **IDR ${SWING_HEAVEN_LUNCH_PRICE_IDR.toLocaleString("id-ID")}** (~USD 45) | Same access + lunch + hotel driver |
| Flying dress hire | **IDR ${SWING_HEAVEN_DRESS_HIRE_IDR.toLocaleString("id-ID")}** | Optional — flowing photo dress |
| Koi pond boat photo | **IDR ${SWING_HEAVEN_KOI_POND_IDR.toLocaleString("id-ID")}** | Optional — ice tea, fruit platter, photos on **your phone**. Confirm lobby availability |

### Photo spots included
${SWING_HEAVEN_SPOTS.map((spot) => `- ${spot}`).join("\n")}

Take photos on **your own phone**. A professional photographer is not included. Park hours **${SWING_HEAVEN_VENUE.hours}**.

### Pickup
**Hotel driver is included and required.** Pickup and drop-off sit in the ticket — no self-meet at Bongkasa and no IDR 400,000 add-on. Share your hotel pin on WhatsApp. This is not the optional ATV / rafting / tubing surcharge.

### Weather & refunds
The Swing Heaven ticket is **non-refundable** once issued. If rain or unsafe weather closes the park, the venue issues a **voucher valid 7 days** from the issue date — not a cash refund. Cancel **24 hours before** we have issued the ticket and our usual [cancellation policy](/cancellation-policy) still applies.

Card payments at the park (if you pay on site) add a **3% surcharge**. WhatsApp bookings with Sekar Bali Activity send payment instructions on official WhatsApp only — no card number and no published bank account on our website.

### Pair it with ATV, cooking, or rafting
Swing Heaven sits in Abiansemal, the same district as our [ATV arena](/tours/bali-atv-adventure). Ask WhatsApp to stack a morning swing with afternoon ATV or [Ayung River rafting](/tours/whitewater-rafting). For a jungle-photo + kitchen day, book morning Swing Heaven then afternoon [Tumang cooking](/tours/balinese-cooking-class) — [swing + cooking itinerary](/blog/swing-heaven-cooking-class-ubud) · [book the combo](/book?activity=combo-swing-cooking). This is **not** Happy Swing.

Honest context if you are still deciding: [Is the Bali Swing worth it?](/blog/is-bali-swing-worth-it) · [Swing Heaven vs Tegallalang](/blog/swing-heaven-vs-tegallalang-bali-swing) · [Bongkasa location](/blog/swing-heaven-bongkasa-location) · [Lunch package](/blog/bali-swing-with-lunch-ubud) · [Flying dress hire](/blog/flying-dress-hire-bali-swing) · [Swing Heaven Ubud guide](/blog/swing-heaven-bali-ubud-guide).`,
    highlights: [
      "14 jungle swings, nests, and photo spots over the Ayung valley",
      "From IDR 530,000 — insurance, tea/coffee/water, and hotel driver",
      "Lunch package IDR 630,000 · flying dress hire IDR 300,000",
      "Driver included — required, no self-meet at Bongkasa",
    ],
    included: [
      "Access to jungle swings and photo spots (14 listed spots)",
      "On-site insurance",
      "Tea, coffee, or water",
      "Hotel driver — pickup and drop-off (required, no self-meet)",
      "Lunch (lunch package only)",
    ],
    notIncluded: [
      "Flying dress hire (IDR 300,000 — optional)",
      "Koi pond boat photo with ice tea and fruit platter (IDR 300,000 — confirm availability)",
      "Professional photographer (use your own phone)",
      "Personal expenses and gratuities",
    ],
    itinerary: [
      {
        id: "iti-swing-1",
        time: "Arrive",
        title: "Check-in at Swing Heaven",
        description:
          "Our driver collects you at the hotel and drops you at Jl. Tangga Yuda, Bongkasa. Confirm package (with or without lunch) and any dress / koi-pond add-ons at the lobby. Self-meet is not offered.",
      },
      {
        id: "iti-swing-2",
        time: "Safety",
        title: "Briefing & harness",
        description:
          "Staff fit a harness for the high swings and explain how each nest, bed, and adrenaline swing works. No prior experience needed.",
      },
      {
        id: "iti-swing-3",
        time: "Photos",
        title: "Swings, nests & jungle beds",
        description:
          "Rotate through the listed photo spots — single and tandem swings, egg / heart / bird / onion nests, jungle bed, Titanic, stone, and Stairs 2 Heaven. Shoot on your own phone.",
      },
      {
        id: "iti-swing-4",
        time: "Finish",
        title: "Drink or lunch",
        description:
          "Tea, coffee, or water is included. Lunch-package guests sit down for the meal. Optional koi-pond boat photo is subject to lobby availability.",
      },
    ],
    activityOptions: [
      {
        name: "Swing Heaven Package (no lunch)",
        priceDiff: 0,
        description: `IDR ${SWING_HEAVEN_PRICE_IDR.toLocaleString("id-ID")} · swings, photo spots, insurance, tea/coffee/water`,
      },
      {
        name: "Swing Heaven Package + lunch",
        priceDiff: SWING_HEAVEN_LUNCH_DIFF_IDR,
        description: `IDR ${SWING_HEAVEN_LUNCH_PRICE_IDR.toLocaleString("id-ID")} · same access + lunch`,
      },
    ],
    addons: [
      {
        id: "flying-dress",
        name: "Flying dress hire",
        price: SWING_HEAVEN_DRESS_HIRE_IDR,
        description: "Optional flowing photo dress for nests and swings.",
      },
      {
        id: "koi-pond-boat",
        name: "Koi pond boat photo",
        price: SWING_HEAVEN_KOI_POND_IDR,
        description: "Ice tea and fruit platter. Photos on your phone. Confirm lobby availability.",
      },
    ],
    faqs: [
      {
        id: "faq-swing-1",
        question: "How much is Swing Heaven Bali near Ubud?",
        answer: `The Swing Heaven Package is IDR ${SWING_HEAVEN_PRICE_IDR.toLocaleString("id-ID")} per person (swings, photo spots, insurance, tea/coffee/water, hotel driver). The lunch package is IDR ${SWING_HEAVEN_LUNCH_PRICE_IDR.toLocaleString("id-ID")}. Flying dress hire is IDR ${SWING_HEAVEN_DRESS_HIRE_IDR.toLocaleString("id-ID")}. Optional koi pond boat photo is IDR ${SWING_HEAVEN_KOI_POND_IDR.toLocaleString("id-ID")} when the lobby has availability. The driver is included and required — no self-meet and no IDR 400,000 add-on.`,
      },
      {
        id: "faq-swing-2",
        question: "Where is Swing Heaven Bali?",
        answer: `${SWING_HEAVEN_VENUE.name} is at ${SWING_HEAVEN_VENUE.address} — Bongkasa, Abiansemal, a short drive from Ubud, overlooking the Ayung River valley. It is not the Tegallalang rice-terrace swing cluster.`,
      },
      {
        id: "faq-swing-3",
        question: "Is a photographer included?",
        answer:
          "No. Photos are on your own phone. Staff can help with angles on the swings. Flying dress hire is optional at IDR 300,000.",
      },
      {
        id: "faq-swing-4",
        question: "Is hotel pickup included?",
        answer:
          "Yes. A hotel driver is included in the Swing Heaven ticket and is required — we do not offer self-meet at Bongkasa and we do not add the IDR 400,000 ATV/rafting surcharge. Share your hotel pin on WhatsApp.",
      },
      {
        id: "faq-swing-5",
        question: "Can I get a refund if it rains?",
        answer:
          "Once the Swing Heaven ticket is issued it is non-refundable. If the park closes for unsafe weather, the venue issues a voucher valid 7 days from the issue date. Cancel 24 hours before we issue the ticket and our usual cancellation policy applies.",
      },
      {
        id: "faq-swing-6",
        question: "Is this the famous Tegallalang Bali Swing?",
        answer:
          "No. Swing Heaven is a separate jungle park in Bongkasa over the Ayung River. Tegallalang swing parks sit on the rice-terrace strip north of Ubud. If you want that stop on a private car day, it is still an optional extra on the Full Day Ubud Tour — not this package.",
      },
    ],
    reviews: [],
  },
  {
    id: "ubud-ricefield-cycling-tour",
    title: "Ubud Ricefield & Village Cycling Tour",
    slug: "ubud-ricefield-cycling-tour",
    category: "village",
    area: "Pejeng / Ubud",
    isTopPick: true,
    pickup: "Free Ubud-area hotel pickup",
    duration: "2 Hours",
    basePrice: 650000,
    seoTitle: "Promo Cycling Ubud | 650K · Was 750K",
    seoDescription:
      "Pejeng cycling promo IDR 650K (was 750K) with lunch and free Ubud pickup. Quiet Subak lanes, not Tegallalang. WhatsApp.",
    heroImage: {
      url: "/images/cycling/rice-field-bikes.jpg",
      alt: "Rice paddy cycling tour through Pejeng village terraces near Ubud",
    },
    gallery: [
      {
        url: "/images/cycling/rice-field-bikes.jpg",
        alt: "Rice paddy cycling tour through Pejeng village terraces near Ubud",
      },
      {
        url: "/images/cycling/rider.jpg",
        alt: "Countryside bike rider on quiet Pejeng village path near Ubud",
      },
      {
        url: "/images/cycling/temple-gate.jpg",
        alt: "Cycling group at a Balinese temple gate in Pejeng village",
      },
      {
        url: "/images/cycling/trail-group.jpg",
        alt: "Small-group village bike tour on a Pejeng countryside trail",
      },
      {
        url: "/images/cycling/jungle-path.jpg",
        alt: "Guided cycling through green pathways near Ubud ricefields",
      },
      {
        url: "/images/cycling/rice-field-walk.jpg",
        alt: "Guests walking through golden rice paddies on the Ubud cycling tour",
      },
      {
        url: "/images/cycling/lunch-stop.jpg",
        alt: "Lunch included on the Ubud ricefield cycling tour",
      },
    ],
    shortDescription: "Authentic 2-hour Ubud countryside cycling tour through rice paddies and Pejeng village paths — rice harvesting, Balinese home visit, wood carving studio, and lunch included. Promo IDR 650K (was 750K) with free Ubud hotel pickup. Pair with an afternoon Tumang Bali Cooking Class for a full culture day.",
    fullDescription: `**Ubud Ricefield & Village Cycling Tour**

Discover the real Bali on two wheels with our Ubud rice paddy cycling tour through Pejeng. This is a relaxing countryside bike ride through beautiful green ricefields and quiet village paths — a cultural immersion designed for all fitness levels.

We pick you up from your hotel in the Ubud area and transport you to the starting point, where you are fitted with a bicycle, helmet, and briefed by your English-speaking guide before setting off into the countryside.

### Rice Paddy & Countryside Cycling
Cycle through stunning green rice paddies and village trails east of central Ubud. Stop to see local farmers at work and try harvesting rice with them. Your Pejeng guide explains traditional Balinese farming methods and the Subak irrigation rhythm of rural life — quieter than crowded Tegallalang photo stops.

### Village Culture & Local Life
Enter a real Balinese family house and see daily local life up close. Visit a local wood carving studio and watch artists at work. Continue cycling through the village past temples, schools, and everyday community activities.

### Lunch Included
Enjoy a free lunch at a chill local village restaurant serving authentic Balinese food — included in your package.

**2026 cycling promo:** **IDR 650,000** per person (was **IDR 750,000**). Two guests **IDR 625,000** each. Three or more **IDR 600,000**. Lunch, bike, helmet, and **free Ubud pickup** stay in the promo.

After the tour we drop you back at your Ubud hotel.

**Available Schedule:**
- **Afternoon departure** — 2-hour tour, ideal for travelers who prefer a later start

**Important Note:**
The itinerary may sometimes change due to field conditions, weather, or village activities. We will always adjust to make sure you still have the best and safest experience.`,
    highlights: [
      "Rice paddy & countryside cycling through Pejeng",
      "Rice harvesting activity with local farmers",
      "Visit a Balinese family house and wood carving studio",
      "Lunch included + free Ubud hotel pickup",
    ],
    included: [
      "Hotel pickup & drop-off (Ubud area — free)",
      "Bicycle, helmet & guide",
      "Lunch included",
      "Bottled water",
      "Insurance for ages 6–65",
    ],
    notIncluded: ["Personal expenses", "Gratuities"],
    itinerary: [
      {
        id: "iti-ubud-cyc-1",
        time: "Start",
        title: "Pickup from Hotel",
        description: "We pick you up at your hotel in the Ubud area and transport you to the cycling starting point.",
      },
      {
        id: "iti-ubud-cyc-2",
        time: "~15 min",
        title: "Ricefield Cycling",
        description: "Relaxing bike ride through beautiful green ricefields and quiet village paths.",
      },
      {
        id: "iti-ubud-cyc-3",
        time: "~15 min",
        title: "Sightseeing & Harvesting Activity",
        description: "See local farmers and try harvesting rice with them. Learn about traditional farming.",
      },
      {
        id: "iti-ubud-cyc-4",
        time: "~15 min",
        title: "Visit Balinese House",
        description: "Enter a real Balinese family house and see daily local life.",
      },
      {
        id: "iti-ubud-cyc-5",
        time: "~15 min",
        title: "Balinese Carving Art",
        description: "Visit a local wood carving studio and see artists at work.",
      },
      {
        id: "iti-ubud-cyc-6",
        time: "~15 min",
        title: "See Local People Life",
        description: "Cycle through the village to see temples, schools, and local activities.",
      },
      {
        id: "iti-ubud-cyc-7",
        time: "~20 min",
        title: "Lunch Stop",
        description: "Enjoy a free lunch at a chill local village restaurant with authentic Balinese food.",
      },
      {
        id: "iti-ubud-cyc-8",
        time: "Finish",
        title: "Drop Back to Hotel",
        description: "After the 2-hour tour we drop you back at your hotel in Ubud.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-ubud-cyc-1",
        question: "How much is the Ubud rice paddy cycling tour?",
        answer:
          "Promo IDR 650,000 per person in 2026 (was IDR 750,000). Two guests IDR 625,000 each, three+ IDR 600,000. 2-hour guided Pejeng village / ricefield ride including bike and helmet, lunch, insurance (ages 6–65), and free hotel pickup and drop-off in the Ubud area.",
      },
      {
        id: "faq-ubud-cyc-2",
        question: "Is hotel pickup included for the cycling tour?",
        answer:
          "Yes — complimentary pickup and drop-off for hotels in the Ubud area. Pickups outside Ubud add an IDR 400,000 surcharge. Tumang Bali Cooking Class also includes complimentary Ubud pickup.",
      },
      {
        id: "faq-ubud-cyc-3",
        question: "Is this the same as Tegallalang or Kintamani downhill cycling?",
        answer:
          "No. We ride quiet Pejeng Subak ricefield and village paths — not the busy Tegallalang photo terraces and not a Kintamani volcano downhill shuttle tour. Ideal if you want culture and scenery without the big-bus crowd.",
      },
      {
        id: "faq-ubud-cyc-4",
        question: "Is the cycling route difficult?",
        answer:
          "The route is mostly flat with gentle village and ricefield paths. It suits most fitness levels, including couples and families comfortable on a bike.",
      },
      {
        id: "faq-ubud-cyc-5",
        question: "Is lunch included?",
        answer:
          "Yes — lunch at a local village restaurant is included in the tour price.",
      },
      {
        id: "faq-ubud-cyc-6",
        question: "Can I combine cycling with a cooking class?",
        answer:
          "Yes. The cycling tour is 2 hours, so many guests ride Pejeng ricefields first and join an afternoon Tumang Bali Cooking Class (shared promo IDR 450,000 / person, Ubud pickup included). Ask WhatsApp for a same-day timeline.",
      },
      {
        id: "faq-ubud-cyc-7",
        question: "What should I wear?",
        answer:
          "Comfortable breathable clothing, closed-toe shoes (sneakers are fine), sunglasses, and sunscreen.",
      },
      {
        id: "faq-ubud-cyc-8",
        question: "Do you provide insurance?",
        answer:
          "Yes. We provide insurance for guests aged 6–65 on the Ubud Ricefield Cycling Tour.",
      },
      {
        id: "faq-ubud-cyc-9",
        question: "Is this an e-bike (electric) tour?",
        answer:
          "No — it's a standard pedal bicycle with helmet included. Because the Pejeng route is mostly flat with gentle village and ricefield paths, most guests don't need electric assist to enjoy the ride comfortably.",
      },
      {
        id: "faq-ubud-cyc-10",
        question: "How long is the Ubud ricefield cycling tour?",
        answer:
          "About 2 hours, including the guided Pejeng village ride, cultural stops, and lunch. Hotel pickup and drop-off in the Ubud area are included.",
      },
    ],
    reviews: [],
  },
  {
    id: "luwak-coffee-plantation",
    title: "Luwak Coffee Plantation Experience (Umah Kuno)",
    slug: "luwak-coffee-plantation",
    category: "food",
    area: "Tampaksiring / Ubud",
    isTopPick: true,
    pickup: "Transport not included",
    duration: "1.5 Hours",
    basePrice: 800000,
    seoTitle: "Umah Kuno Luwak Coffee | Ethical 800K",
    seoDescription:
      "Ethical Luwak coffee tasting at Umah Kuno near Ubud — jungle walk, wood-fire roasting, and a 10-drink tasting flight including Kopi Luwak. IDR 800,000 per person. Min 3 guests.",
    heroImage: {
      url: "/coffee.jpg",
      alt: "Luwak Coffee Plantation Umah Kuno",
      width: 767,
      height: 1024,
    },
    gallery: [
      {
        url: "/images/coffee/umah-kuno.jpg",
        alt: "Traditional Umah Kuno Balinese Compound",
      },
    ],
    shortDescription:
      "Ethical Luwak coffee tasting at Umah Kuno — jungle walk, traditional roasting, and a 10-drink tasting flight. IDR 800,000 per person (minimum 3 guests).",
    fullDescription: `**A Journey Into the Heart of Bali's Coffee Culture**

Bali is world-renowned for its coffee, but the story behind the cup is often hidden from visitors. Our Luwak Coffee Plantation Experience at the beautiful **Umah Kuno** estate offers you a transparent, ethical, and deeply educational look into how Bali's most famous export is cultivated, processed, and enjoyed. 

This standalone 1.5-hour experience is perfect for a relaxing morning or a slow afternoon in the jungle. It is designed for coffee lovers, culture enthusiasts, and families looking for a peaceful escape into nature. It is a dedicated tasting at Umah Kuno near Ubud — not the short optional Kintamani coffee stop on our [private Mount Batur jeep](/tours/batur-sunrise-jeep-tour).

### The Umah Kuno Difference: Ethical and Authentic
The highlight of this tour is learning about *Kopi Luwak*, the most expensive and exclusive coffee in the world, famous for its incredibly smooth, non-bitter taste. The coffee is made from beans that have been naturally fermented in the digestive tract of the Asian Palm Civet (the *Luwak*). 

Unfortunately, much of the industry now relies on caged animals to meet tourist demand. We strongly oppose this practice. We partner exclusively with Umah Kuno because they are a traditional, family-run plantation that relies entirely on wild, free-roaming civets. The civets naturally forage in the jungle at night, selecting only the ripest, most perfect coffee cherries. The farmers collect the beans from the forest floor in the morning. This ethical approach not only protects local wildlife but results in a vastly superior cup of coffee.

### The Jungle Walk
Your experience begins with a guided stroll through a lush, shaded plantation. Your local guide will point out raw cocoa pods hanging from the trees, vanilla orchids climbing up trunks, and various spices like cinnamon and cloves growing wild. You will see exactly how Arabica and Robusta coffee cherries grow on the vine and learn how the farmers determine when they are perfectly ripe for hand-picking.

### The Traditional Roasting Process
Next, you will step into a traditional Balinese outdoor kitchen. Here, the magic happens. You will watch local farmers roast the cleaned coffee beans over an open wood fire in a massive clay pan. The smell of the roasting beans mingling with the woodsmoke is intoxicating. 

You won't just be watching; you will be invited to participate! Grab the heavy wooden pestle and try your hand at grinding the freshly roasted beans in a giant stone mortar, just as the Balinese have done for centuries. 

### The Grand Tasting Flight
The tour concludes on a stunning wooden deck suspended over a lush jungle ravine. Sit back, relax, and enjoy the breathtaking views as your host brings out a massive wooden tasting board. You will be served a flight of 10 different locally produced teas and coffees. You will taste everything from ginger tea and mangosteen peel tea to ginseng coffee and pure Balinese cocoa. 

Finally, the crown jewel is served: a freshly brewed cup of the ethical Kopi Luwak. Sip it slowly, note the incredibly smooth finish, and enjoy the serenity of the jungle.

📍 **Location:** [Umah Kuno on Google Maps](https://share.google/VOs6vwV16r2bVERjV)
    
**Available Schedules (Flexible):**
- **Morning Session:** 10:00 AM – 11:30 AM
- **Afternoon Session:** 2:00 PM – 3:30 PM

*(Note: **IDR 800,000 per person**. Minimum booking of 3 people required for this experience)*`,
    highlights: [
      "Stroll through a lush, shaded plantation",
      "Watch local farmers roast coffee beans over open wood fires",
      "Enjoy a tasting board of 10 different local teas and coffees",
    ],
    included: [
      "Guided plantation tour",
      "Coffee roasting demonstration",
      "Tasting flight of 10 teas and coffees (including Luwak coffee)",
    ],
    notIncluded: ["Transportation to the plantation", "Additional food or drinks"],
    itinerary: [
      {
        id: "iti-cof-1",
        time: "Start",
        title: "Jungle Walk",
        description: "Stroll through a lush, shaded plantation to see raw cocoa, vanilla, and coffee beans growing on the vine.",
      },
      {
        id: "iti-cof-2",
        time: "Midway",
        title: "The Roasting Process",
        description: "Watch how local farmers traditionally roast coffee beans over open wood fires and try your hand at grinding them.",
      },
      {
        id: "iti-cof-3",
        time: "End",
        title: "Tasting Flight",
        description: "Sit on a wooden deck overlooking a jungle ravine and enjoy a tasting board of 10 different local teas and coffees, including the famous Luwak coffee.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-cof-price",
        question: "How much is the Luwak Coffee Plantation Experience?",
        answer:
          "IDR 800,000 per person. Minimum booking is 3 guests. The price includes the guided plantation walk, roasting demonstration, and tasting flight of 10 teas and coffees including ethical Kopi Luwak. Transport to Tampaksiring is not included.",
      },
      {
        id: "faq-cof-1",
        question: "Is transportation included?",
        answer: "No, this is a standalone experience. You will need to arrange your own transport to the plantation in Tampaksiring, which is about 25 minutes from central Ubud.",
      },
      {
        id: "faq-cof-2",
        question: "Is the Luwak coffee truly ethical?",
        answer: "Yes! 100%. Umah Kuno strictly forbids caged civets. The beans are gathered from the forest floor where wild, free-roaming civets have naturally dropped them. This is the authentic, ethical way Kopi Luwak has been harvested for centuries.",
      },
      {
        id: "faq-cof-3",
        question: "Can kids join?",
        answer: "Absolutely! Kids love the jungle walk and participating in grinding the beans. We have non-caffeinated chocolate and teas for them to taste.",
      }
    ],
    reviews: [],
  },
  {
    id: "balinese-cooking-class",
    title: "Tumang Bali Cooking Class near Ubud",
    slug: "balinese-cooking-class",
    category: "food",
    area: "Tumang village / Ubud",
    venue: "Tumang village near Ubud",
    pickup: "Free Ubud-area hotel pickup",
    isTopPick: true,
    duration: "3–4 Hours",
    basePrice: COOKING_CLASS_PRICE_IDR,
    seoTitle: "Cooking Class Ubud | Tumang · Free Pickup 450K",
    seoDescription:
      "Tumang Bali Cooking Class near Ubud — AM market tour, 10+ dishes, max 8 guests. Promo IDR 450,000 (was 506,370) + free Ubud pickup. WhatsApp booking.",
    heroImage: {
      url: "/images/cooking/satay-class.jpg",
      alt: "Guests preparing sate skewers during Tumang Bali Cooking Class near Ubud",
      width: 1200,
      height: 630,
    },
    gallery: [
      {
        url: "/images/cooking/market-guide.jpg",
        alt: "Morning market tour before Tumang Bali Cooking Class",
      },
      {
        url: "/images/cooking/stovetop-class.jpg",
        alt: "Guests cooking at individual stations in the village kitchen",
      },
      {
        url: "/images/cooking/sate-lilit-prep.jpg",
        alt: "Shaping sate lilit on lemongrass during class",
      },
      {
        url: "/images/cooking/crepe-flip-fun.jpg",
        alt: "Guests flipping Dadar Gulung pandan crepes",
      },
      {
        url: "/images/cooking/buffet-spread.jpg",
        alt: "Feast of dishes cooked during Tumang Bali Cooking Class",
      },
      {
        url: "/images/cooking/group-plate.jpg",
        alt: "Happy guests with homemade Balinese dishes",
      },
      {
        url: "/images/cooking/dish.jpg",
        alt: "Freshly prepared Balinese dessert from class",
      },
    ],
    shortDescription:
      "Family-run Tumang Bali Cooking Class near Ubud — morning market tour (AM), rice-field walk, 10+ dishes with Chef Wayan Suryana, max 8 guests, English instruction. Promo IDR 450,000 / person (was IDR 506,370) with complimentary Ubud-area pickup. TripAdvisor Traveler’s Choice 2026.",
    fullDescription: `**Tumang Bali Cooking Class — authentic village kitchen near Ubud**

[Tumang Bali](https://tumangbaliclass.com/) is a family-run cooking school in Tumang village near Ubud for travellers who want hands-on Balinese cuisine — not a hotel demo. Head Chef **Wayan Suryana** teaches Base Genep (bumbu), sate lilit, pepes ikan, sambal matah, lawar, and more. Classes are taught in English. Complimentary pickup in the Ubud area. Max **8 guests** per shared class.

### Why book Tumang through Sekar Bali Activity
We list Tumang as our flagship food experience so you can book adventure, village cycling, and this cooking class on one WhatsApp thread — with clear IDR before you confirm.

### What’s included
- Hands-on cooking of **10+ Balinese dishes**
- **Morning market tour** on the AM session only
- Guided **rice-field walk**
- English instruction with Chef Wayan Suryana
- Vegetarian / vegan menus available
- Complimentary **hotel pickup in the Ubud area**
- Small group — max 8 guests (shared)

### Sessions
- **Morning shared class** — includes traditional pasar (market) tour
- **Afternoon shared class** — rice-field walk + kitchen (ideal after ricefield cycling)
- **Private class** — exclusive kitchen **IDR ${COOKING_CLASS_PRIVATE_SOLO_IDR.toLocaleString("id-ID")} per person** (1 guest **IDR ${COOKING_CLASS_PRIVATE_SOLO_IDR.toLocaleString("id-ID")}**; 2 guests **IDR ${COOKING_CLASS_PRIVATE_COUPLE_IDR.toLocaleString("id-ID")}** total)

### Pricing (2026)
| Option | Price |
|--------|-------|
| Shared class (promo) | **IDR ${COOKING_CLASS_PRICE_IDR.toLocaleString("id-ID")}** per person (was IDR ${COOKING_CLASS_STANDARD_PRICE_IDR.toLocaleString("id-ID")}) |
| Private (1 guest) | **IDR ${COOKING_CLASS_PRIVATE_SOLO_IDR.toLocaleString("id-ID")}** |
| Private (2 guests) | **IDR ${COOKING_CLASS_PRIVATE_COUPLE_IDR.toLocaleString("id-ID")}** total |

### Recognition
TripAdvisor **[Traveler’s Choice 2026](https://www.tripadvisor.com/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html)** · **5.0** rating (1500+ reviews).

### Learn more
Full operator site: [tumangbaliclass.com](https://tumangbaliclass.com/balinese-cooking-class-ubud) · Compare Ubud classes: [compare guide](https://tumangbaliclass.com/compare-ubud-cooking-classes) · [TripAdvisor reviews](https://www.tripadvisor.com/Attraction_Review-g297701-d26364507-Reviews-Tumang_Bali_Cooking_Class-Ubud_Gianyar_Regency_Bali.html)`,
    highlights: [
      "10+ dishes with Chef Wayan Suryana",
      "Morning market tour (AM class) + rice-field walk",
      "Max 8 guests · fully hands-on · English",
      "Complimentary Ubud-area hotel pickup",
      "TripAdvisor Traveler’s Choice 2026",
    ],
    included: [
      "Hands-on cooking class (10+ dishes)",
      "Morning market tour (morning session only)",
      "Rice-field walk",
      "All ingredients and cooking equipment",
      "English-speaking chef / instructor",
      "Meal of the dishes you prepare",
      "Complimentary hotel pickup in the Ubud area",
    ],
    notIncluded: [
      "Hotel pickup outside the Ubud area (ask WhatsApp for a quote)",
      "Personal expenses and gratuities",
      "Private kitchen surcharge (optional)",
    ],
    itinerary: [
      {
        id: "iti-cook-1",
        time: "Pickup",
        title: "Ubud hotel pickup",
        description:
          "Complimentary pickup from hotels in the Ubud area. Morning guests continue to the traditional market; afternoon guests head toward the village kitchen and rice fields.",
      },
      {
        id: "iti-cook-2",
        time: "Market (AM)",
        title: "Traditional pasar tour",
        description:
          "Morning class only — walk the market with your chef, learn herbs and spices used in Base Genep, and shop fresh ingredients for class.",
      },
      {
        id: "iti-cook-3",
        time: "Village",
        title: "Rice-field walk + kitchen briefing",
        description:
          "Stroll the paddies near Tumang, then settle into the family kitchen for a safety and spice introduction.",
      },
      {
        id: "iti-cook-4",
        time: "Cook",
        title: "Hands-on cooking (10+ dishes)",
        description:
          "Pound Base Genep, shape sate lilit, prepare sambal matah, pepes, lawar, and more at your station under Chef Wayan Suryana’s guidance.",
      },
      {
        id: "iti-cook-5",
        time: "Feast",
        title: "Eat what you cooked",
        description:
          "Sit down together for the meal you prepared — vegetarian and vegan menus available when requested at booking.",
      },
    ],
    activityOptions: [
      {
        name: "Shared morning class (market tour)",
        priceDiff: 0,
        description: `08:30 start · pasar + rice-field walk · max 8 · promo IDR ${COOKING_CLASS_PRICE_IDR.toLocaleString("id-ID")}`,
      },
      {
        name: "Shared afternoon class",
        priceDiff: 0,
        description: `Afternoon · rice-field walk + kitchen · max 8 · promo IDR ${COOKING_CLASS_PRICE_IDR.toLocaleString("id-ID")}`,
      },
      {
        name: "Private class (1 guest)",
        priceDiff: COOKING_PRIVATE_SOLO_DIFF,
        description: `Exclusive kitchen · IDR ${COOKING_CLASS_PRIVATE_SOLO_IDR.toLocaleString("id-ID")}`,
      },
      {
        name: "Private class (2 guests)",
        priceDiff: COOKING_PRIVATE_SOLO_DIFF,
        description: `Exclusive kitchen · IDR ${COOKING_CLASS_PRIVATE_SOLO_IDR.toLocaleString("id-ID")} / person · IDR ${COOKING_CLASS_PRIVATE_COUPLE_IDR.toLocaleString("id-ID")} total`,
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-cook-1",
        question: "How much is Tumang Bali Cooking Class?",
        answer: `Shared small-group class is promo IDR ${COOKING_CLASS_PRICE_IDR.toLocaleString("id-ID")} per person (was IDR ${COOKING_CLASS_STANDARD_PRICE_IDR.toLocaleString("id-ID")}). Private kitchen is IDR ${COOKING_CLASS_PRIVATE_SOLO_IDR.toLocaleString("id-ID")} for 1 guest, or IDR ${COOKING_CLASS_PRIVATE_COUPLE_IDR.toLocaleString("id-ID")} for 2 guests. Complimentary Ubud-area hotel pickup is included.`,
      },
      {
        id: "faq-cook-2",
        question: "Is there a market tour?",
        answer:
          "Yes — the morning shared class includes a traditional pasar (market) tour. Afternoon classes focus on the rice-field walk and kitchen.",
      },
      {
        id: "faq-cook-3",
        question: "How many people are in a class?",
        answer:
          "Shared classes are capped at 8 guests so everyone cooks hands-on. Private kitchen options are available.",
      },
      {
        id: "faq-cook-4",
        question: "Can you do vegetarian or vegan?",
        answer:
          "Yes. Tumang offers a full vegetarian / vegan menu — request it when you WhatsApp book, not only as a side option.",
      },
      {
        id: "faq-cook-5",
        question: "Is hotel pickup included?",
        answer:
          "Complimentary pickup is included for hotels in the Ubud area. Pickup from Canggu, Seminyak, or other areas — ask WhatsApp for a transfer quote.",
      },
      {
        id: "faq-cook-6",
        question: "Can I combine this with ricefield cycling?",
        answer:
          "Yes. A popular culture day is Pejeng ricefield cycling (free Ubud pickup + lunch) then an afternoon Tumang cooking class. Prefer jungle-swing photos instead of paddies? Book morning Swing Heaven (Bongkasa — not Happy Swing) then this kitchen on the same WhatsApp thread. Message us to reserve both.",
      },
    ],
    reviews: [],
  },
  {
    id: "full-day-ubud-tour",
    title: "Full Day Ubud Tour: Royal Palace, Art Market & Rice Terraces",
    slug: "full-day-ubud-tour",
    category: "day-tour",
    area: "Ubud & surrounds",
    isTopPick: true,
    pickup: "Private car hotel pickup",
    duration: "10 Hours",
    basePrice: 600000,
    seoTitle: "Full Day Ubud Tour | Palace, Market & Rice Terraces",
    seoDescription:
      "Private full-day Ubud tour: Royal Palace, Art Market & Tegalalang Rice Terraces from IDR 600K. English driver, custom pace. WhatsApp booking.",
    heroImage: {
      url: "/images/adventures/full-day-ubud-tour.jpg",
      alt: "Tegalalang rice terraces framed by jungle palms on the Full Day Ubud Tour",
    },
    gallery: [
      {
        url: "/images/adventures/full-day-ubud-tour.jpg",
        alt: "Tegalalang rice terraces framed by jungle palms on the Full Day Ubud Tour",
      },
    ],
    shortDescription:
      "Private full-day Ubud tour covering the Royal Palace, Art Market, and Tegalalang Rice Terraces — private car, English-speaking driver, and a pace you set yourself. From IDR 600,000.",
    fullDescription: `**Full Day Ubud Tour: Royal Palace, Art Market & Rice Terraces**

Looking for a private full day Ubud tour that covers the classic central-Bali stops without a fixed group schedule? This itinerary pairs Ubud's cultural core with the countryside north of town, with your own car and English-speaking driver setting the pace.

### Morning: Ubud Royal Palace & Art Market
Start at the historic **Ubud Royal Palace** (Puri Saren Agung) to see traditional Balinese architecture, then cross the street to the **Ubud Art Market** for handicrafts, textiles, and souvenirs while the morning trade is still quiet.

### Afternoon: Tegalalang Rice Terraces
After lunch (on your own — see inclusions below), continue north to the **Tegalalang Rice Terraces**. Walk the ridges for classic Bali photos, or add on the Bali Swing nearby at your own cost if you want the jungle-swing photo stop.

### Private & Flexible
This is a private car and driver, not a shared minibus — so you can linger longer at the palace, skip the market, or ask your driver to adjust timing around your flight or dinner plans.`,
    highlights: [
      "Ubud Royal Palace (Puri Saren Agung)",
      "Ubud Art Market for handicrafts & textiles",
      "Tegalalang Rice Terraces",
      "Private car — pace set by you, not a group schedule",
      "English-speaking driver for the full 10 hours",
    ],
    included: ["Private car & transport for 10 hours", "English-speaking driver", "Mineral water"],
    notIncluded: ["Entrance fees (Palace, rice terraces, Bali Swing if added)", "Lunch", "Personal expenses", "Gratuities"],
    itinerary: [
      {
        id: "iti-fdu-1",
        time: "08:30 AM",
        title: "Hotel Pickup",
        description: "Your private driver picks you up from your hotel in the Ubud area."
      },
      {
        id: "iti-fdu-2",
        time: "10:00 AM",
        title: "Ubud Royal Palace & Art Market",
        description: "Explore the center of Ubud — the historic palace, then the traditional Art Market across the street."
      },
      {
        id: "iti-fdu-3",
        time: "02:00 PM",
        title: "Tegalalang Rice Terraces",
        description: "Walk the terraces and optionally add the Bali Swing (own cost) before heading back to your hotel."
      }
    ],
    addons: [],
    faqs: [
      {
        id: "faq-fdu-1",
        question: "How much does the Full Day Ubud Tour cost?",
        answer:
          "From IDR 600,000 for private car, transport, and an English-speaking driver for the full 10-hour day. Entrance fees and lunch are not included — message WhatsApp for a guest-count quote.",
      },
      {
        id: "faq-fdu-2",
        question: "Is this a private tour or a shared group tour?",
        answer:
          "Private. You get your own car and driver, so you can spend more time at the palace or market and less at the rice terraces (or the reverse) — the schedule above is a guide, not a fixed timetable.",
      },
      {
        id: "faq-fdu-3",
        question: "Is the Bali Swing included at Tegalalang?",
        answer:
          "No — the Bali Swing is a separate paid attraction near the rice terraces. Your driver can stop there if you want to add it at your own cost.",
      },
      {
        id: "faq-fdu-4",
        question: "Can I customize the stops or timing?",
        answer:
          "Yes. Since it's a private car and driver (not a shared minibus), tell us your priorities on WhatsApp and we'll adjust the order or timing around your flight or dinner plans.",
      },
    ],
    reviews: []
  },
  {
    id: "half-day-ubud-tanah-lot-tour",
    title: "Half Day Trip: Explore Ubud Culture & Amazing Sunset at Tanah Lot Temple",
    slug: "half-day-ubud-tanah-lot-tour",
    category: "day-tour",
    area: "Ubud → Tanah Lot",
    pickup: "Private car hotel pickup",
    duration: "6 Hours",
    basePrice: 450000,
    seoTitle: "Half Day Ubud & Tanah Lot Sunset Tour | From IDR 450K",
    seoDescription:
      "Half day private tour: Ubud cultural stops then Tanah Lot sea-temple sunset. From IDR 450K, English driver. Ideal if you're short on time. WhatsApp booking.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
      alt: "Tanah Lot Sunset",
    },
    gallery: [],
    shortDescription:
      "Half day private tour pairing Ubud cultural stops with a Tanah Lot sea-temple sunset — private car, English-speaking driver, from IDR 450,000. Ideal if you're short on time.",
    fullDescription: `**Half Day Ubud & Tanah Lot Sunset Tour**

Short on time but don't want to miss the coast? This half day trip pairs an afternoon around Ubud with the classic Tanah Lot sunset — without committing to a full 10-hour day.

### Afternoon: Ubud Surrounds
We start in the early afternoon with a private car and English-speaking driver, visiting cultural sites or temples around the Ubud area (tell us your interests on WhatsApp so your driver can prioritize accordingly).

### Sunset: Tanah Lot Temple
As the afternoon cools, we head to the coast and the iconic sea temple of **Tanah Lot**. Watching the sun dip below the Indian Ocean with the temple silhouetted in the foreground is one of Bali's most photographed sunsets.

### Why Choose the Half Day Option
If your schedule is tight — an early flight, a late arrival, or a full day already booked elsewhere — this half day version still delivers Ubud culture and the Tanah Lot sunset in about 6 hours.`,
    highlights: [
      "Ubud cultural stops in the early afternoon",
      "Tanah Lot Temple sunset over the Indian Ocean",
      "Private car — 6 hours total, ideal for tight schedules",
      "English-speaking driver",
    ],
    included: ["Private car & transport for 6 hours", "English-speaking driver", "Mineral water"],
    notIncluded: ["Entrance fees (temples, Tanah Lot)", "Dinner", "Personal expenses", "Gratuities"],
    itinerary: [
      {
        id: "iti-hdu-1",
        time: "01:00 PM",
        title: "Hotel Pickup",
        description: "Start your half day trip with a private car pickup from your hotel."
      },
      {
        id: "iti-hdu-2",
        time: "02:30 PM",
        title: "Ubud Surrounds",
        description: "Visit key cultural sites or temples around the Ubud area based on your interests."
      },
      {
        id: "iti-hdu-3",
        time: "05:00 PM",
        title: "Tanah Lot Temple Sunset",
        description: "Arrive at Tanah Lot to secure a good spot before sunset over the ocean."
      }
    ],
    addons: [],
    faqs: [
      {
        id: "faq-hdu-1",
        question: "How much does the half day Ubud & Tanah Lot tour cost?",
        answer:
          "From IDR 450,000 for a private car, transport, and an English-speaking driver for the 6-hour trip. Entrance fees are not included — message WhatsApp for a guest-count quote.",
      },
      {
        id: "faq-hdu-2",
        question: "What time does the tour start?",
        answer:
          "Typically an early-afternoon pickup (around 1:00 PM) so you reach Tanah Lot in time for sunset — exact start time can shift slightly by season since sunset time changes through the year. Confirm your date on WhatsApp for the recommended pickup time.",
      },
      {
        id: "faq-hdu-3",
        question: "Is this better than the full day Ubud tour?",
        answer:
          "It depends on your schedule. Choose this half day option if you have a flight, arrival, or another activity taking up the rest of your day — choose the full day tour if you want more time at the Royal Palace, Art Market, and Tegalalang Rice Terraces.",
      },
      {
        id: "faq-hdu-4",
        question: "Is the tour private or shared with other travelers?",
        answer:
          "Private — your own car and English-speaking driver, so timing can flex around sunset and your own pace.",
      },
    ],
    reviews: []
  },
  {
    id: "tirta-empu-purification",
    title: "Tirta Empu Purification (Melukat)",
    slug: "tirta-empu-purification",
    category: "culture",
    area: "Tampaksiring / Ubud",
    venue: "Tirta Empul or Pura Beji holy spring",
    pickup: "Private shuttle included (Ubud area)",
    isTopPick: true,
    duration: "Approx. 3–4 Hours",
    basePrice: MELUKAT_PRICE_IDR,
    seoTitle: "Tirta Empul or Beji Melukat | 1.2M + Breakfast",
    seoDescription:
      "Private melukat at Tirta Empul or Pura Beji near Ubud. Shuttle, guide, and breakfast included. IDR 1,200,000 / person.",
    heroImage: {
      url: "/images/melukat/tirta-empu-spout.jpg",
      alt: "Guest receiving holy spring water during a Tirta Empu melukat purification",
      width: 1600,
      height: 1346,
    },
    gallery: [
      {
        url: "/images/melukat/tirta-empu-spout.jpg",
        alt: "Guest receiving holy spring water during a Tirta Empu melukat purification",
      },
      {
        url: "/images/melukat/tirta-empu-pool.jpg",
        alt: "Guests in the Tirta Empu holy spring pool for a guided melukat ritual",
      },
      {
        url: "/images/melukat/tirta-empu-temple.jpg",
        alt: "Temple courtyard near Tirta Empu on a private purification morning",
      },
    ],
    shortDescription:
      "Private Balinese water purification (melukat) at Tirta Empul or Pura Beji. Dedicated guide, private shuttle, offering, sarong, and breakfast. IDR 1,200,000 per person.",
    fullDescription: `**Private holy-spring purification (Melukat)**

Melukat is a Balinese Hindu water-purification ritual. This is a **private** ceremony for your group — dedicated guide, private shuttle, and **breakfast included**. You choose the spring when you book:

- **Tirta Empul** (Tirta Empu) — the famous holy spring temple in Manukaya, Tampaksiring, about 30–40 minutes north of central Ubud. Maps list it as **Pura Tirta Empul**.
- **Pura Beji** — a quieter holy-spring alternative. Same private guide, shuttle, offering, and breakfast. We confirm the Beji location on WhatsApp.

You are not on a mixed bus tour. The temple grounds themselves remain public and sacred.

### Why book a guided private ritual
A general temple ticket lets you walk the courtyards. It does **not** explain which fountains are for living guests, which are reserved for funeral rites, or how to make the offering. Your guide walks you through prayer, the canang offering, and the sequence under the sacred spouts so the visit stays respectful.

The **IDR 1,200,000 per person** private rate includes:

- Private shuttle pickup and drop-off in the **Ubud area**
- English-speaking local guide
- Temple entrance
- Canang offering
- Temple sarong and sash (plus a separate bathing sarong for the pools)
- **Breakfast** after the ritual

### What happens
After hotel pickup you drive to the spring you chose — Tirta Empul in Tampaksiring, or Pura Beji. At the temple you change into a sarong and sash, present the offering, then enter the purification pools. You move spout to spout as your guide explains each step. Some fountains are skipped on purpose — follow the guide, not the photo queue.

After the ritual there is time to change into dry clothes, then **breakfast is included** before the shuttle returns you to your hotel.

### What to wear and bring
Covered shoulders and a change of clothes. We supply the temple sarong, sash, and bathing wrap. See our [Bali temple dress code](/blog/bali-temple-dress-code) before you go. Women who are menstruating should not enter the inner courtyards or the pools — this is a living religious rule.

### Pairing ideas
Morning melukat, then [Luwak coffee at Umah Kuno](/tours/luwak-coffee-plantation) (Tampaksiring; transport not included on that tasting) or an afternoon [Tumang cooking class](/tours/balinese-cooking-class). Quiet paddies instead of a second temple: [Pejeng cycling](/tours/ubud-ricefield-cycling-tour). Message WhatsApp to reserve both.

**Typical start:** 08:00 or 09:00 so you reach the springs before the mid-morning crowds.`,
    highlights: [
      "Choose Tirta Empul or Pura Beji",
      "Private melukat — your group only",
      "Breakfast included after the ritual",
      "Private shuttle included (Ubud-area hotels)",
      "English-speaking guide through offering and pools",
    ],
    included: [
      "Private shuttle pickup & drop-off (Ubud area)",
      "English-speaking local guide",
      "Melukat ritual at Tirta Empul or Pura Beji",
      "Temple entrance fee",
      "Canang offering",
      "Temple sarong, sash, and bathing wrap",
      "Breakfast",
    ],
    notIncluded: [
      "Hotel pickup outside the Ubud area (ask WhatsApp for a shuttle quote)",
      "Lunch",
      "Personal expenses and gratuities",
      "Optional priest blessing beyond the standard guided ritual",
    ],
    activityOptions: [
      {
        name: "Tirta Empul holy spring",
        priceDiff: 0,
        description:
          "Pura Tirta Empul / Tirta Empu, Tampaksiring — classic public holy spring · breakfast included",
      },
      {
        name: "Pura Beji holy spring",
        priceDiff: 0,
        description:
          "Quieter Beji spring alternative — same private guide, shuttle, and breakfast",
      },
    ],
    itinerary: [
      {
        id: "iti-melukat-1",
        time: "Pickup",
        title: "Private shuttle from your Ubud hotel",
        description:
          "Your driver collects you in the Ubud area (typical 08:00 or 09:00 start). Drive to Tirta Empul (Tampaksiring) or Pura Beji — whichever spring you booked.",
      },
      {
        id: "iti-melukat-2",
        time: "Arrive",
        title: "Sarong, offering, and temple briefing",
        description:
          "Meet your guide at the spring. Change into a sarong and sash, prepare the canang offering, and hear which fountains to use — and which to skip.",
      },
      {
        id: "iti-melukat-3",
        time: "Ritual",
        title: "Melukat in the holy spring pools",
        description:
          "Enter the purification pools and move under the sacred spouts in sequence. The water is cold mountain spring water. Your guide stays with you through each step.",
      },
      {
        id: "iti-melukat-4",
        time: "Breakfast",
        title: "Breakfast included",
        description:
          "Change into dry clothes, then sit down for breakfast — included in the private rate.",
      },
      {
        id: "iti-melukat-5",
        time: "Finish",
        title: "Return shuttle",
        description:
          "Optional courtyard walk, then the private shuttle returns you to your hotel.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-melukat-1",
        question: "How much is a private Tirta Empul or Beji melukat?",
        answer:
          "IDR 1,200,000 per person for a private purification at Tirta Empul or Pura Beji. The price includes a Ubud-area shuttle (pickup and drop-off), an English-speaking guide, temple entrance, canang offering, sarong, and breakfast. Lunch is not included. Pickup outside Ubud — ask WhatsApp for a shuttle quote.",
      },
      {
        id: "faq-melukat-2",
        question: "Is this a private ceremony or a shared group?",
        answer:
          "Private. The shuttle and guide are for your booking only. The temple itself is a public holy site, so other worshippers and visitors will be in the courtyards and pools — you are not renting the entire temple.",
      },
      {
        id: "faq-melukat-3",
        question: "Can I choose Tirta Empul or Pura Beji?",
        answer:
          "Yes. Same private rate for either spring. Tirta Empul (Tirta Empu) is the famous holy spring in Tampaksiring. Pura Beji is a quieter holy-spring alternative. Say which you prefer on WhatsApp when you book.",
      },
      {
        id: "faq-melukat-4",
        question: "Is breakfast included?",
        answer:
          "Yes. Breakfast is included after the ritual. Lunch is not included.",
      },
      {
        id: "faq-melukat-5",
        question: "Is Tirta Empu the same as Tirta Empul?",
        answer:
          "Yes. Tirta Empu is the name we use for this purification booking. Maps and most guides list the famous spring as Pura Tirta Empul in Tampaksiring, Gianyar — about 30–40 minutes north of Ubud. You can also book Pura Beji instead.",
      },
      {
        id: "faq-melukat-6",
        question: "What should I wear for melukat?",
        answer:
          "A sleeved top that covers the shoulders, and a change of dry clothes. We provide the temple sarong, sash, and a bathing wrap for the pools. Do not wear the temple (dry) sarong into the water. Full rules: our Bali temple dress code guide.",
      },
      {
        id: "faq-melukat-7",
        question: "Is hotel shuttle included?",
        answer:
          "Yes — private shuttle pickup and drop-off are included for hotels in the Ubud area. That is part of the IDR 1,200,000 per person rate, not the IDR 400,000 ATV/rafting add-on. Stays in Canggu, Seminyak, or other areas — message WhatsApp for a transfer quote.",
      },
      {
        id: "faq-melukat-8",
        question: "Can anyone join the ritual?",
        answer:
          "Guests of any faith may take part if they follow temple etiquette. Women who are menstruating should not enter the inner courtyards or the purification pools. Children may join when they are comfortable in chest-deep water; tell us ages on WhatsApp.",
      },
    ],
    reviews: [],
  },
  {
    id: "griya-beji-waterfall",
    title: "Griya Beji Waterfall Purification near Ubud",
    slug: "griya-beji-waterfall",
    category: "culture",
    area: GRIYA_BEJI_VENUE.area,
    venue: `${GRIYA_BEJI_VENUE.name}, ${GRIYA_BEJI_VENUE.address}`,
    isTopPick: true,
    pickup: "IDR 400,000 hotel pickup or free self-meet at Griya Beji",
    duration: "1–2.5 Hours",
    basePrice: GRIYA_BEJI_PURIFICATION_IDR,
    seoTitle: "Griya Beji Waterfall Ubud | From 300K",
    seoDescription:
      "Griya Beji waterfall purification near Ubud. Melukat IDR 300,000, palm reading 1M, mental healing 1.5M. Gate extra. Pickup 400K or self-meet. Not Tirta Empul.",
    heroImage: {
      url: "/images/adventures/griya-beji-waterfall.jpg",
      alt: "Guests at Taman Beji Griya Waterfall in Punggul, Abiansemal near Ubud",
      width: 1600,
      height: 1000,
    },
    gallery: [
      {
        url: "/images/adventures/griya-beji-waterfall.jpg",
        alt: "Guests gathered by the spring at Taman Beji Griya Waterfall",
      },
      {
        url: "/images/adventures/griya-beji-purification.jpg",
        alt: "Water purification (melukat) at sacred spring spouts near Ubud",
      },
      {
        url: "/images/adventures/griya-beji-ceremony.jpg",
        alt: "Temple offerings before a Griya Beji purification ceremony",
      },
    ],
    shortDescription:
      "Griya Beji Waterfall near Ubud is waterfall purification (melukat) at Taman Beji Griya in Punggul from IDR 300,000. Palm reading IDR 1,000,000. Mental healing IDR 1,500,000. Gate admission extra. Pickup IDR 400,000 or self-meet — not Tirta Empul or Pura Beji.",
    fullDescription: `**Griya Beji Waterfall — purification, palm reading, mental healing (not Tirta Empul)**

[Taman Beji Griya Waterfall](${GRIYA_BEJI_VENUE.siteUrl}) is a living shrine on **Jl. Mawar, Desa Punggul, Abiansemal** — a short drive from Ubud, in the same Badung district as our ATV arena. The park runs **waterfall melukat**, **palm reading**, and **mental healing**. This is **not** [Tirta Empul or Pura Beji](/tours/tirta-empu-purification) (our private **IDR 1,200,000** temple morning with shuttle and breakfast).

### 2026 park menu (per person)
| Offering | Price | Notes |
|--------|-------|----------|
| Waterfall purification (melukat) | **IDR ${GRIYA_BEJI_PURIFICATION_IDR.toLocaleString("id-ID")}** | Offerings, prayer, spring-fed pool |
| Palm reading | **IDR ${GRIYA_BEJI_PALM_READING_IDR.toLocaleString("id-ID")}** | Hands + birth date · book ahead |
| Mental healing therapy | **IDR ${GRIYA_BEJI_HEALING_IDR.toLocaleString("id-ID")}** | Guided relaxation · not a medical clinic |
| International admission | **IDR ${GRIYA_BEJI_ADMISSION_INTL_IDR.toLocaleString("id-ID")}** | Domestic **IDR ${GRIYA_BEJI_ADMISSION_DOMESTIC_IDR.toLocaleString("id-ID")}** · extra at the gate |

Hours **${GRIYA_BEJI_VENUE.hours}**. We confirm the live board on WhatsApp before you transfer.

### Pickup
Hotel pickup is **IDR 400,000** (same adventure surcharge as ATV / rafting / tubing), or **self-meet at Griya Beji** with no transport fee. Village lanes into Punggul are narrow — a driver who knows Abiansemal helps. Check the [hotel pickup checker](/planners/hotel-pickup-checker) before you assume free Ubud transfer.

### Etiquette
Sarong and sash — swimwear is not ritual dress. Women who are menstruating should not enter the inner grounds or the purification pool. Keep voices low. Healing therapy is **not** a hospital clinic; the park asks guests with psychosis or dissociative disorders not to use hypnotherapy.

Honest comparison: [Griya Beji vs Tirta Empul](/blog/griya-beji-vs-tirta-empul-melukat) · [2026 price guide](/blog/griya-beji-waterfall-ubud-guide) · [palm reading](/blog/palm-reading-bali-griya-beji) · [mental healing](/blog/mental-healing-bali-griya-beji). Pair afternoon [Tumang cooking](/tours/balinese-cooking-class) on a [long driver day](/blog/long-private-driver-day-ubud-2026).`,
    highlights: [
      "Waterfall purification (melukat) from IDR 300,000",
      "Palm reading IDR 1,000,000 · mental healing IDR 1,500,000",
      "Punggul, Abiansemal — not Tirta Empul or Pura Beji",
      "Pickup IDR 400,000 or free self-meet",
    ],
    included: [
      "Chosen ritual or therapy (purification, palm reading, or mental healing)",
      "Park practitioner / pemangku for that offering",
    ],
    notIncluded: [
      "Gate admission (IDR 50,000 international / IDR 20,000 domestic)",
      "Hotel pickup (IDR 400,000 surcharge — optional)",
      "Sarong rental if you do not bring your own (confirm on site)",
      "Lunch and personal expenses",
    ],
    itinerary: [
      {
        id: "iti-griya-1",
        time: "Arrive",
        title: "Check-in at Griya Beji",
        description:
          "Self-meet at Jl. Mawar, Desa Punggul, or arrive with optional hotel pickup. Confirm purification, palm reading, and/or mental healing at the lobby.",
      },
      {
        id: "iti-griya-2",
        time: "Prepare",
        title: "Sarong, offering, intention",
        description:
          "Change into a sarong and sash. The park is a living shrine — swimwear is not the ritual dress.",
      },
      {
        id: "iti-griya-3",
        time: "Ritual",
        title: "Purification, reading, or healing",
        description:
          "Melukat in the spring-fed pool, sit for palm reading with your birth date, or join mental healing. Book the slots you want — they are separate prices.",
      },
      {
        id: "iti-griya-4",
        time: "Leave",
        title: "Change and return",
        description:
          "Dry clothes, then self-depart or return with our pickup. Pair the same district with ATV or Swing Heaven on WhatsApp.",
      },
    ],
    activityOptions: [
      {
        name: "Waterfall purification (melukat)",
        priceDiff: 0,
        description: "Ritual in the spring-fed pool — IDR 300,000. Gate admission extra.",
      },
      {
        name: "Palm reading",
        priceDiff: GRIYA_BEJI_PALM_READING_IDR - GRIYA_BEJI_PURIFICATION_IDR,
        description: "Hands + birth date — IDR 1,000,000. Book ahead.",
      },
      {
        name: "Mental healing therapy",
        priceDiff: GRIYA_BEJI_HEALING_IDR - GRIYA_BEJI_PURIFICATION_IDR,
        description: "Guided relaxation — IDR 1,500,000. Not a medical clinic.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-griya-1",
        question: "How much is Griya Beji Waterfall purification near Ubud?",
        answer:
          "Waterfall purification (melukat) is IDR 300,000 per person on the 2026 park menu. International admission is IDR 50,000 (domestic IDR 20,000) extra at the gate. Hotel pickup is IDR 400,000 or self-meet in Punggul. Confirm the live board on WhatsApp.",
      },
      {
        id: "faq-griya-2",
        question: "Is Griya Beji the same as Pura Beji or Tirta Empul?",
        answer:
          "No. Taman Beji Griya Waterfall is in Desa Punggul, Abiansemal. Our private Tirta Empul or Pura Beji ticket is a different spring, IDR 1,200,000, with shuttle and breakfast. Do not treat the names as one park.",
      },
      {
        id: "faq-griya-3",
        question: "How much is palm reading at Griya Beji?",
        answer:
          "Palm reading is IDR 1,000,000 per person. Book ahead. Gate admission is extra. It is not medical or legal advice.",
      },
      {
        id: "faq-griya-4",
        question: "How much is mental healing at Griya Beji?",
        answer:
          "Mental healing / healing therapy is IDR 1,500,000 per person. It is guided relaxation, not a hospital clinic. The park asks guests with psychosis or dissociative disorders not to use hypnotherapy.",
      },
    ],
    reviews: [],
  },
  {
    id: GIRLS_TRIP_SLUG,
    title: "Private Bali Itinerary: Family, Girls Trip & Long Driver Days",
    slug: GIRLS_TRIP_SLUG,
    category: "day-tour",
    area: "Ubud · Seminyak · Uluwatu · Kintamani",
    venue: "Your villa or hotel + the days we actually operate",
    pickup: "Private driver (car from IDR 600K/day · HiAce quote for 6+)",
    isTopPick: true,
    duration: "1 long day or 2–7 days",
    basePrice: GIRLS_TRIP_DRIVER_DAY_FROM_IDR,
    seoTitle: "Private Bali Itinerary | Family & Groups",
    seoDescription:
      "Family, girls trip, or any private group. Consultation only on WhatsApp — no booking form. We quote the driver, Swing Heaven, jeep, cooking, cycling. Clubs and spa stay yours.",
    heroImage: {
      url: "/images/adventures/private-bali-itinerary.jpg",
      alt: "Guest on a Bali clifftop looking over turquoise water on a private itinerary",
      width: 1600,
      height: 1000,
    },
    gallery: [
      {
        url: "/images/adventures/private-bali-itinerary.jpg",
        alt: "Guest on a Bali clifftop looking over turquoise water on a private itinerary",
      },
      {
        url: "/images/adventures/swing-heaven-ayung.jpg",
        alt: "Jungle swing photo stop on a private Bali itinerary at Swing Heaven Bongkasa",
      },
      {
        url: "/images/adventures/full-day-ubud-tour.jpg",
        alt: "Private-driver countryside day for a family or friend-group Bali itinerary",
      },
      {
        url: "/images/adventures/cycling.jpg",
        alt: "Pejeng ricefield cycling — a calm family morning on a multi-day private trip",
      },
    ],
    shortDescription:
      "Paste a family week, a girls trip, or one long private day. We book the driver (car from IDR 600,000 / day; HiAce quoted for 6+), plus Swing Heaven, Batur jeep, cooking, or cycling. Beach clubs, spa, and Kecak stay on your cards.",
    fullDescription: `**Can you handle a private Bali itinerary — family week, girls trip, or one long driver day?** Yes. Paste the plan on WhatsApp. **Sekar Bali Activity** books the **private driver** plus the days we actually sell: **[Swing Heaven](/tours/swing-heaven-bali)**, **[Mount Batur jeep](/tours/batur-sunrise-jeep-tour)**, **[Tumang cooking](/tours/balinese-cooking-class)**, **[Pejeng cycling](/tours/ubud-ricefield-cycling-tour)**, ATV, Griya Beji, airport transfer. You keep beach clubs, nightclubs, spa, Kecak seats, and restaurant tables.

### Who this is for

| Group | Typical booked days | Pace |
| --- | --- | --- |
| **Family** | Jeep sunrise (no hike), cooking class, cycling, one swing photo stop | Early nights, kid snacks, HiAce if 5+ |
| **Girls / friends** | Swing + koi photo day, jeep or spa-adjacent driver day | Slack for outfits and group photos |
| **Couple** | One long Ubud day + jeep or Tanah Lot sunset | Private car, not a 12-seater |
| **Any private group** | 1 long day (10–14h) or 2–7 stacked driver days | You set the pins; we quote IDR |

This is **not** girls-only. A 6-lady Seminyak week is one sample. A family of four in Ubud for three slow days is the same desk.

### What “easy to handle” means

One thread. We return a **driver-day total + activity lines** with published IDR. We do **not** invent a fake all-inclusive luxury package, and we do **not** sell beach-club tables. The car still drops you at those pins.

| We book | You book | We skip |
| --- | --- | --- |
| Private car from **IDR ${GIRLS_TRIP_DRIVER_DAY_FROM_IDR.toLocaleString("id-ID")}** / day | FINNS, La Favela, Savaya | Nusa Penida on a short clock |
| HiAce / 10–12 seater **quote** for 6+ | Cretya, Taman Dedari, spa | Lovina dolphins |
| [Swing Heaven + koi](/tours/swing-heaven-bali) | Uluwatu + Kecak seats | Extra temples + mall days |
| [Batur jeep](/tours/batur-sunrise-jeep-tour) (pickup included) | Jewelry class, watersports | Three Kintamani cafés |
| Cooking / cycling / ATV / [Griya Beji](/tours/griya-beji-waterfall) | Villa dinners, kids’ rest time | Treating jeep as a summit hike |
| [DPS transfer](/transfers) from **IDR ${GIRLS_TRIP_AIRPORT_TRANSFER_IDR.toLocaleString("id-ID")}** | Club guest lists | Free pickup on swing/ATV/Griya unless a driver day is booked |

### Sample shapes

**One long private day:** hotel pickup → [Pejeng cycling](/tours/ubud-ricefield-cycling-tour) or [Swing Heaven](/tours/swing-heaven-bali) → lunch → [Tumang cooking](/tours/balinese-cooking-class) or a guest restaurant → drop. Same car, published activity IDR. Clock: [long driver day](/blog/long-private-driver-day-ubud-2026) · [cycling + cooking](/book?activity=combo-cycling-cooking) · [swing + cooking](/book?activity=combo-swing-cooking).

**Family 4-day:** arrival transfer → cooking + cycling → no-hike [Batur jeep](/tours/batur-sunrise-jeep-tour) → soft Ubud / [Griya Beji](/tours/griya-beji-waterfall) → airport. Guide: [family private itinerary](/blog/bali-family-private-itinerary-2026).

**Girls 6-day:** Seminyak social → Swing Heaven photo day → Uluwatu + Kecak → soft Ubud → jeep sunrise → water morning + airport. Guide: [6-day girls trip](/blog/bali-6-day-girls-trip-itinerary-2026).

More: [what we book vs you book](/blog/bali-private-itinerary-what-we-book-vs-you-book) · [what to skip](/blog/what-to-skip-on-a-6-day-bali-itinerary) · [long driver day](/blog/long-private-driver-day-ubud-2026)

### How to consult

**Consultation only** — there is no booking form or checkout for this itinerary. WhatsApp **group type (family / girls / friends / couple), dates, villa area, guest count + kids’ ages, car vs HiAce, and the day list**. No payment to inquire. After you agree on the quote, same invoice + official-WhatsApp payment flow as every other activity.`,
    highlights: [
      "Family, girls trip, friends, or couple — one WhatsApp itinerary desk",
      "One long private day or 2–7 stacked driver days",
      "Private driver from IDR 600,000 / car-day · HiAce quoted for 6+",
      "We book Swing Heaven, Batur jeep, cooking, cycling, ATV, Griya Beji, airport runs",
      "You keep clubs, spa, Kecak, and restaurant tables — we still drive those pins",
      "Honest skip list: Penida, Lovina, extra temples, mall days",
    ],
    included: [
      "WhatsApp itinerary desk — driver days + the activities we actually sell",
      "English-speaking private driver on the days you book",
      "Mineral water in the car",
      "Published IDR on Swing Heaven, Batur jeep, cooking, cycling, ATV, Griya Beji, airport transfer",
    ],
    notIncluded: [
      "FINNS, La Favela, Savaya, Cretya, Taman Dedari, spa, jewelry class, Kecak, watersports tickets",
      "HiAce / 10–12 seater rate (quoted — not the car-day from-price)",
      "Swing Heaven photographer (own phone) and park extras (koi boat, flying dress)",
      "Temple / beach-club / restaurant entrance and consumption",
      "Villa, cake, outfits, and night-club guest lists",
    ],
    itinerary: [
      {
        id: "iti-gt-1",
        time: "Long day A",
        title: "Private driver + one booked activity",
        description:
          "Hotel pickup, then Swing Heaven, cooking, cycling, or a guest restaurant. Same car all day. Clubs and spa tables stay yours.",
      },
      {
        id: "iti-gt-2",
        time: "Family stack",
        title: "Cooking + cycling or jeep sunrise",
        description:
          "Tumang cooking (free Ubud pickup) and Pejeng cycling, or a no-hike Batur jeep morning. Early villa return.",
      },
      {
        id: "iti-gt-3",
        time: "Girls-trip photo day",
        title: "Swing Heaven + koi boat",
        description:
          "Bongkasa 09:00–12:30. Photographer not included. Cut extra waterfalls first if the swing runs long.",
      },
      {
        id: "iti-gt-4",
        time: "South-coast day",
        title: "Uluwatu / Tanah Lot — driver only",
        description:
          "We drive. You buy temple and Kecak tickets, or book our half-day Tanah Lot car instead.",
      },
      {
        id: "iti-gt-5",
        time: "Sunrise day",
        title: "Kintamani jeep",
        description:
          "04:30-style pickup. Private 4×4 to the crater-rim viewpoint. Meal included. Not the summit hike.",
      },
      {
        id: "iti-gt-6",
        time: "Departure",
        title: "Airport or one short activity",
        description:
          "DPS transfer from IDR 700,000 / MPV, or a morning ATV/rafting if the flight is late.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-gt-1",
        question: "Can you handle a family, girls trip, or any private multi-day itinerary?",
        answer:
          "Yes — consultation only. There is no booking form. Send group type, dates, villa area, guest count (and kids’ ages), and the day list on WhatsApp. We quote private driver days (car from IDR 600,000 / day; HiAce quoted for 6+) plus Swing Heaven, the Mount Batur jeep, cooking, cycling, or ATV. Beach clubs, spa, Kecak, and watersports stay on your bookings. No payment to inquire.",
      },
      {
        id: "faq-gt-consult",
        question: "Can I book this itinerary in the website form?",
        answer:
          "No. Family weeks, girls trips, and any private long-day or multi-day plan are WhatsApp consultation only. Use the Consultation button — we do not run this product through the booking popup or /book checkout.",
      },
      {
        id: "faq-gt-2",
        question: "Do you book FINNS, La Favela, Cretya, or Savaya?",
        answer:
          "No. Those are guest reservations. Our driver can drop and wait. We only invoice activities and cars we actually operate.",
      },
      {
        id: "faq-gt-3",
        question: "How much is a private driver for a family or a group of 6?",
        answer:
          "A standard private car starts from IDR 600,000 per day (same from-price as the Full Day Ubud Tour). Families or six guests plus bags usually need a HiAce / 10–12 seater — that rate is quoted on WhatsApp, not the car-day figure.",
      },
      {
        id: "faq-gt-4",
        question: "Is Swing Heaven the Tegallalang Bali Swing?",
        answer:
          "No. We book Swing Heaven on Jl. Tangga Yuda, Bongkasa, over the Ayung River. Tegallalang is a different roadside product. Photos are on your own phone.",
      },
      {
        id: "faq-gt-5",
        question: "Is the Kintamani sunrise a hike?",
        answer:
          "No. The private jeep goes to a crater-rim viewpoint at about 1,350m. Tracking adds a guided walk at IDR 1,800,000 for 2 guests (sit-in is IDR 2,000,000 for 2). Neither is the 2-hour summit trek. Pickup is included island-wide.",
      },
    ],
    reviews: [],
  },
  {
    id: MOTORBIKE_TRIP_SLUG,
    title: "Bali Motorbike Tour — Scooter Day from Ubud",
    slug: MOTORBIKE_TRIP_SLUG,
    category: "day-tour",
    area: MOTORBIKE_AREA,
    pickup: MOTORBIKE_PICKUP,
    duration: MOTORBIKE_DURATION,
    basePrice: MOTORBIKE_UBUD_IDR,
    seoTitle: "Bali Motorbike Tour Ubud | Promo 450K",
    seoDescription:
      "Bali motorbike tour from Ubud. Guided 125–160cc scooter. Promo IDR 450K (was 550K). Tickets extra. Ride or pillion. Canggu shuttle 550K. Book on WhatsApp.",
    heroImage: {
      url: "/images/adventures/motorbike-tour-hero.jpg",
      alt: "Smiling guests wearing helmets on a guided Bali motorbike traveling trip",
      width: 1600,
      height: 1000,
    },
    gallery: [
      {
        url: "/images/adventures/motorbike-tour-road.jpg",
        alt: "Guests riding pillion with their guide through Bali streets on the motorbike trip",
      },
      {
        url: "/images/adventures/motorbike-tour-group.jpg",
        alt: "Guests with their Balinese guide after the Bali motorbike traveling trip",
      },
    ],
    shortDescription:
      `A Bali motorbike tour is a guided ${MOTORBIKE_ENGINE} scooter day. Promo from IDR ${(MOTORBIKE_UBUD_IDR / 1000).toFixed(0)}K per bike (was IDR ${(MOTORBIKE_UBUD_LIST_IDR / 1000).toFixed(0)}K) — Ubud, waterfalls, Kintamani, South, North, or East. Tickets not included. Ride yourself (IDP recommended) or pillion. Pickup at your chosen area. Canggu / Jimbaran / Nusa Dua shuttle IDR ${(MOTORBIKE_SOUTH_SHUTTLE_IDR / 1000).toFixed(0)}K once per booking.`,
    fullDescription: `A **Bali motorbike tour** is a guided full-day ride on a **${MOTORBIKE_ENGINE} scooter**, not a jungle-mud ATV and not a private car with a driver. Sekar Bali Activity leads six public-road routes from the Ubud area. **Prices are per scooter.** The figures below are **2026 promo rates** — the bookable charge is unchanged; the “was” column is the compare-at list. Attraction entrance tickets and lunch stay on you. ${MOTORBIKE_PICKUP} — share the pin when you book. Shuttle from **${MOTORBIKE_SOUTH_SHUTTLE_AREAS}** is **IDR ${MOTORBIKE_SOUTH_SHUTTLE_IDR.toLocaleString("id-ID")} once per booking**, not the IDR 400,000 adventure surcharge. Ride your own bike (an International Driving Permit is recommended) or sit pillion.

### 2026 scooter promo (per bike)

| Destination | Promo / scooter | Was | Typical stops |
| --- | --- | --- | --- |
| Ubud | **${MOTORBIKE_UBUD_IDR.toLocaleString("id-ID")}** | ${MOTORBIKE_UBUD_LIST_IDR.toLocaleString("id-ID")} | Rice terrace, Ulun Petanu, Gunung Kawi, Umah Kuno, Monkey Forest |
| Ubud waterfalls | **${MOTORBIKE_WATERFALL_IDR.toLocaleString("id-ID")}** | ${MOTORBIKE_WATERFALL_LIST_IDR.toLocaleString("id-ID")} | Kanto Lampo, Tibumana, Suwat, Tukad Cepung, Tegenungan |
| Kintamani | **${MOTORBIKE_KINTAMANI_IDR.toLocaleString("id-ID")}** | ${MOTORBIKE_KINTAMANI_LIST_IDR.toLocaleString("id-ID")} | Sunrise view, Pura Jati Segara, optional hot spring, Penglipuran |
| South Bali | **${MOTORBIKE_SOUTH_IDR.toLocaleString("id-ID")}** | ${MOTORBIKE_SOUTH_LIST_IDR.toLocaleString("id-ID")} | Tanah Lot, Uluwatu, GWK, Melasti, optional Kedonganan dinner |
| North Bali | **${MOTORBIKE_NORTH_IDR.toLocaleString("id-ID")}** | ${MOTORBIKE_NORTH_LIST_IDR.toLocaleString("id-ID")} | Sangeh, Leke-Leke, Beratan Lake, Jatiluwih |
| East Bali | **${MOTORBIKE_EAST_IDR.toLocaleString("id-ID")}** | ${MOTORBIKE_EAST_LIST_IDR.toLocaleString("id-ID")} | Tukad Cepung, Besakih, Tirta Gangga, Taman Ujung, Virgin Beach |
| Canggu / Jimbaran / Nusa Dua shuttle | **${MOTORBIKE_SOUTH_SHUTTLE_IDR.toLocaleString("id-ID")}** | — | Once per booking · optional · not the IDR 400,000 ATV surcharge |

Included: ${MOTORBIKE_ENGINE} scooter, fuel, helmet, bottled water, English-speaking guide, pickup at your chosen area. **Not included:** temple / waterfall tickets, lunch, gratuities, Canggu / Jimbaran / Nusa Dua shuttle. Price breakdown: [Bali motorbike tour price 2026](/blog/${MOTORBIKE_PRICE_ARTICLE_SLUG}).

### Scooter vs private car vs ATV

| | This motorbike tour | [Full-day Ubud car](/tours/full-day-ubud-tour) | [Sedang ATV](/tours/bali-atv-adventure) |
| --- | --- | --- | --- |
| From price | **${MOTORBIKE_UBUD_IDR.toLocaleString("id-ID")}** / scooter | **600,000** / car | **750,000** / rider |
| You ride? | Yes, or pillion | No — driver | Yes, on a jungle-mud quad |
| Tickets | Extra | Extra | Arena day — lunch included |
| Pickup | Chosen area · Canggu / Jimbaran / Nusa Dua shuttle IDR ${MOTORBIKE_SOUTH_SHUTTLE_IDR.toLocaleString("id-ID")} | Hotel start | IDR 400,000 or self-meet |
| Best when | You want the road and photos | Kids, heat, or no license | You want mud, not public roads |

The [Kintamani dirt bike](/tours/dirt-bike-kintamani-black-lava) from IDR 4,100,000 is a guided enduro on lava — a different machine. Full compare: [motorbike tour vs private driver](/blog/bali-motorbike-tour-vs-private-driver-2026) · [scooter vs ATV](/blog/bali-scooter-tour-vs-atv-2026) · [motorbike vs dirt bike](/blog/bali-motorbike-tour-vs-dirt-bike-2026) · [which Bali wheels](/blog/which-bali-wheels-2026). Promo + shuttle: [motorbike tour price 2026](/blog/${MOTORBIKE_PRICE_ARTICLE_SLUG}). IDP or pillion: [motorbike IDP](/blog/bali-motorbike-tour-idp-license-2026).

### Ubud Traveling Trip — IDR ${MOTORBIKE_UBUD_IDR.toLocaleString("id-ID")} / scooter

![Emerald rice terraces near Ubud, Bali](/images/adventures/moto-ubud.jpg)

The Ubud Traveling Trip is Sekar Bali Activity’s entry **Bali motorbike tour from Ubud** — a guided public-road day on a ${MOTORBIKE_ENGINE} scooter, not a jungle-mud ATV and not a private-car circuit. Promo is **IDR ${MOTORBIKE_UBUD_IDR.toLocaleString("id-ID")} per scooter** (was ${MOTORBIKE_UBUD_LIST_IDR.toLocaleString("id-ID")}). Typical stops: a rice terrace, Ulun Petanu waterfall, Gunung Kawi Tampaksiring, Bali Umah Kuno (traditional old house), and Monkey Forest / Monkey River. Attraction tickets and lunch stay on you. Ride yourself (IDP recommended) or sit pillion. Pickup at your chosen area sits in this promo.

### Ubud Waterfall Trip — IDR ${MOTORBIKE_WATERFALL_IDR.toLocaleString("id-ID")} / scooter

![Bali jungle waterfall into a turquoise pool](/images/adventures/moto-ubud-waterfall.jpg)

The Ubud waterfall scooter tour is a public-road day to **five falls**, priced at **IDR ${MOTORBIKE_WATERFALL_IDR.toLocaleString("id-ID")} promo per scooter** (was ${MOTORBIKE_WATERFALL_LIST_IDR.toLocaleString("id-ID")}). Stops: Kanto Lampo, Tibumana, Suwat, Tukad Cepung, and Tegenungan. Entrance tickets at each fall are paid on site and are not in the scooter price. Lunch is a warung stop you pay yourself. This is not the Sedang ATV track and not a private-car waterfall circuit. Ride (IDP recommended) or pillion. Pickup at your chosen area.

### Kintamani Traveling Trip — IDR ${MOTORBIKE_KINTAMANI_IDR.toLocaleString("id-ID")} / scooter

![Sunrise over Mount Batur and Lake Batur in Kintamani](/images/adventures/moto-kintamani.jpg)

The Kintamani traveling trip is a **public-road ${MOTORBIKE_ENGINE} day** at **IDR ${MOTORBIKE_KINTAMANI_IDR.toLocaleString("id-ID")} promo per scooter** (was ${MOTORBIKE_KINTAMANI_LIST_IDR.toLocaleString("id-ID")}). Stops: sunrise peak view, Pura Jati Segara, optional natural hot spring, Penglipuran Village, and Tukad Cepung Waterfall. Tickets extra. It is not the [private Batur jeep](/tours/batur-sunrise-jeep-tour) (crater-rim 4×4, meal included) and not a [Kintamani dirt-bike enduro](/tours/dirt-bike-kintamani-black-lava). Ride or pillion. Pickup at your chosen area.

### South Bali Traveling Trip — IDR ${MOTORBIKE_SOUTH_IDR.toLocaleString("id-ID")} / scooter

![Uluwatu clifftop temple above the ocean in South Bali](/images/adventures/moto-south.jpg)

The South Bali traveling trip is a guided scooter day to **cliff temples and Melasti**, priced at **IDR ${MOTORBIKE_SOUTH_IDR.toLocaleString("id-ID")} promo per scooter** (was ${MOTORBIKE_SOUTH_LIST_IDR.toLocaleString("id-ID")}). Stops: Tanah Lot, Uluwatu, GWK, and Melasti Beach. Kedonganan seafood dinner is optional and paid separately. Temple tickets stay extra. This is still a public-road ${MOTORBIKE_ENGINE} day — not a private driver circuit and not Sedang ATV. If we collect you from Canggu, Jimbaran, or Nusa Dua, add the **IDR ${MOTORBIKE_SOUTH_SHUTTLE_IDR.toLocaleString("id-ID")} shuttle once per booking**.

### North Bali Traveling Trip — IDR ${MOTORBIKE_NORTH_IDR.toLocaleString("id-ID")} / scooter

![Ulun Danu Beratan lake temple in North Bali](/images/adventures/moto-north.jpg)

The North Bali traveling trip is the **longest western scooter loop**, priced at **IDR ${MOTORBIKE_NORTH_IDR.toLocaleString("id-ID")} promo per scooter** (was ${MOTORBIKE_NORTH_LIST_IDR.toLocaleString("id-ID")}). Stops: Sangeh Monkey Sanctuary, Leke-Leke Waterfall, Beratan Lake & Temple, and Jatiluwih. Tickets and lunch stay on you. Expect more saddle time than the Ubud day. Ride yourself (IDP recommended) or pillion. Pickup at your chosen area — not island-wide jeep pickup and not the IDR 400,000 ATV surcharge.

### East Bali Traveling Trip — IDR ${MOTORBIKE_EAST_IDR.toLocaleString("id-ID")} / scooter

![Tirta Gangga water palace stepping stones in East Bali](/images/adventures/moto-east.jpg)

The East Bali traveling trip is Sekar Bali Activity’s **highest published scooter promo** — **IDR ${MOTORBIKE_EAST_IDR.toLocaleString("id-ID")} per bike** (was ${MOTORBIKE_EAST_LIST_IDR.toLocaleString("id-ID")}). Stops: Tukad Cepung Waterfall, Besakih Mother Temple, Tirta Gangga, Taman Ujung Water Palace, and Virgin Beach. Attraction tickets are paid on site. This is a long public-road day on a ${MOTORBIKE_ENGINE}, not a dirt-bike enduro and not a private car. Ride or pillion. Pickup at your chosen area.

### Good to know
- Motorbikes are ${MOTORBIKE_ENGINE}s.
- Promo is per scooter and excludes attraction entrance tickets. Ubud promo **IDR ${MOTORBIKE_UBUD_IDR.toLocaleString("id-ID")}** (was ${MOTORBIKE_UBUD_LIST_IDR.toLocaleString("id-ID")}); East promo **IDR ${MOTORBIKE_EAST_IDR.toLocaleString("id-ID")}** (was ${MOTORBIKE_EAST_LIST_IDR.toLocaleString("id-ID")}).
- Pickup is at your chosen area — not free Ubud cycling/cooking pickup, not island-wide jeep pickup, and not the IDR 400,000 adventure surcharge.
- Shuttle from **${MOTORBIKE_SOUTH_SHUTTLE_AREAS}** is **IDR ${MOTORBIKE_SOUTH_SHUTTLE_IDR.toLocaleString("id-ID")} once per booking**. Skip it if your pin is already in the ride area.
- An International Driving Permit is recommended if you ride. Say pillion on WhatsApp if you do not want to drive.

Message WhatsApp with your **date, pickup pin, destination, ride or pillion**, and whether you need the Canggu / Jimbaran / Nusa Dua shuttle. Add scooters first on the [motorbike tour calculator](/planners/motorbike-tour-price).`,
    highlights: [
      "125–160cc automatic motorbikes/scooters",
      "Ubud promo IDR 450K (was 550K) · East promo IDR 800K (was 900K)",
      "Ride yourself (IDP recommended) or pillion",
      "Pickup at your chosen area · Canggu / Jimbaran / Nusa Dua shuttle IDR 550K",
      "Not Sedang ATV and not a private car day",
    ],
    included: [
      "Motorbike/scooter rental (125–160cc)",
      "Fuel for the route",
      "Local English-speaking guide",
      "Quality helmet",
      "Bottled water",
      "Pickup at your chosen area",
    ],
    notIncluded: [
      "Attraction entrance tickets (not included)",
      "Lunch & personal expenses",
      "Gratuities",
      `Shuttle from ${MOTORBIKE_SOUTH_SHUTTLE_AREAS} (IDR ${MOTORBIKE_SOUTH_SHUTTLE_IDR.toLocaleString("id-ID")} once per booking)`,
    ],
    activityOptions: [
      { name: "Ubud Traveling Trip", priceDiff: 0, description: `Per scooter (${MOTORBIKE_ENGINE}) · Rice terrace, Ulun Petanu waterfall, Gunung Kawi Tampaksiring, Bali Umah Kuno & Monkey Forest` },
      { name: "Ubud Waterfall Trip", priceDiff: MOTORBIKE_WATERFALL_IDR - MOTORBIKE_UBUD_IDR, description: `Per scooter (${MOTORBIKE_ENGINE}) · Kanto Lampo, Tibumana, Suwat, Tukad Cepung & Tegenungan waterfalls` },
      { name: "Kintamani Traveling Trip", priceDiff: MOTORBIKE_KINTAMANI_IDR - MOTORBIKE_UBUD_IDR, description: `Per scooter (${MOTORBIKE_ENGINE}) · Sunrise peak view, Pura Jati Segara, optional hot spring, Penglipuran Village & Tukad Cepung Waterfall` },
      { name: "South Bali Traveling Trip", priceDiff: MOTORBIKE_SOUTH_IDR - MOTORBIKE_UBUD_IDR, description: `Per scooter (${MOTORBIKE_ENGINE}) · Tanah Lot, Uluwatu, GWK, Melasti Beach & optional Kedonganan seafood sunset dinner` },
      { name: "North Bali Traveling Trip", priceDiff: MOTORBIKE_NORTH_IDR - MOTORBIKE_UBUD_IDR, description: `Per scooter (${MOTORBIKE_ENGINE}) · Sangeh Monkey Sanctuary, Leke-Leke Waterfall, Beratan Lake & Temple, Jatiluwih rice terrace` },
      { name: "East Bali Traveling Trip", priceDiff: MOTORBIKE_EAST_IDR - MOTORBIKE_UBUD_IDR, description: `Per scooter (${MOTORBIKE_ENGINE}) · Tukad Cepung Waterfall, Besakih, Tirta Gangga, Taman Ujung Water Palace & Virgin Beach` },
    ],
    itinerary: [
      {
        id: "iti-moto-1",
        time: "Morning",
        title: "Pickup & Safety Briefing",
        description: "Your guide meets you at your chosen pickup point, fits your helmet, and outlines the route for your selected destination. If you booked the Canggu / Jimbaran / Nusa Dua shuttle, the car collects you first.",
      },
      {
        id: "iti-moto-2",
        time: "Late Morning",
        title: "First temples, waterfalls, or viewpoints",
        description: "Ride the 125–160cc scooter to the first stops on your chosen route — rice terrace, waterfall, temple, or coast. Entrance tickets are paid on site and are not in the scooter promo.",
      },
      {
        id: "iti-moto-3",
        time: "Midday",
        title: "Local Lunch Stop",
        description: "Pause at a scenic local warung to refuel with authentic Balinese food (own expense).",
      },
      {
        id: "iti-moto-4",
        time: "Afternoon",
        title: "Afternoon stops on your chosen route",
        description: "Continue the rest of that destination’s list — remaining waterfalls, temples, villages, or beach — at a pace the group can hold. Tickets stay extra.",
      },
      {
        id: "iti-moto-5",
        time: "Evening",
        title: "Return to Pickup Point",
        description: "Wind back through the countryside and return to your pickup point.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-moto-1",
        question: "What kind of motorbike do you use?",
        answer: "Comfortable 125–160cc automatic motorbikes/scooters — easy to ride and well suited to Bali's roads. This is not a dirt-bike enduro and not the Sedang ATV.",
      },
      {
        id: "faq-moto-2",
        question: "How is the price calculated?",
        answer: `Promo rates are per scooter by destination: Ubud IDR ${MOTORBIKE_UBUD_IDR.toLocaleString("id-ID")} (was ${MOTORBIKE_UBUD_LIST_IDR.toLocaleString("id-ID")}), Ubud Waterfall IDR ${MOTORBIKE_WATERFALL_IDR.toLocaleString("id-ID")} (was ${MOTORBIKE_WATERFALL_LIST_IDR.toLocaleString("id-ID")}), Kintamani IDR ${MOTORBIKE_KINTAMANI_IDR.toLocaleString("id-ID")} (was ${MOTORBIKE_KINTAMANI_LIST_IDR.toLocaleString("id-ID")}), South Bali IDR ${MOTORBIKE_SOUTH_IDR.toLocaleString("id-ID")} (was ${MOTORBIKE_SOUTH_LIST_IDR.toLocaleString("id-ID")}), North Bali IDR ${MOTORBIKE_NORTH_IDR.toLocaleString("id-ID")} (was ${MOTORBIKE_NORTH_LIST_IDR.toLocaleString("id-ID")}), and East Bali IDR ${MOTORBIKE_EAST_IDR.toLocaleString("id-ID")} (was ${MOTORBIKE_EAST_LIST_IDR.toLocaleString("id-ID")}). The promo is the bookable charge — we did not lower it. Attraction entrance tickets and lunch are not included. Shuttle from ${MOTORBIKE_SOUTH_SHUTTLE_AREAS} is IDR ${MOTORBIKE_SOUTH_SHUTTLE_IDR.toLocaleString("id-ID")} once per booking.`,
      },
      {
        id: "faq-moto-3",
        question: "Which destinations can I choose?",
        answer: "Ubud, Ubud Waterfall, Kintamani, South Bali, North Bali, or East Bali. Each trip is planned around that region's best spots — temples, waterfalls, rice terraces, and beaches.",
      },
      {
        id: "faq-moto-4",
        question: "Do I ride myself, and do I need an IDP?",
        answer: "A local English-speaking guide leads the way. You can ride your own scooter — an International Driving Permit is recommended — or ride pillion with a driver. Say which on WhatsApp.",
      },
      {
        id: "faq-moto-5",
        question: "Is pickup included and are tickets extra?",
        answer: `Pickup is at your chosen area — share the pin when booking. That meet is in the scooter promo. It is not free Ubud cycling/cooking pickup and not the IDR 400,000 adventure surcharge. Shuttle from ${MOTORBIKE_SOUTH_SHUTTLE_AREAS} is IDR ${MOTORBIKE_SOUTH_SHUTTLE_IDR.toLocaleString("id-ID")} once per booking. Attraction entrance tickets are paid on site.`,
      },
      {
        id: "faq-moto-shuttle",
        question: "How much is the shuttle from Canggu, Jimbaran, or Nusa Dua?",
        answer: `IDR ${MOTORBIKE_SOUTH_SHUTTLE_IDR.toLocaleString("id-ID")} once per booking when we collect you from Canggu, Jimbaran, or Nusa Dua. It is not the IDR 400,000 ATV/rafting surcharge and not island-wide jeep pickup. Skip it if your pin is already in the ride area. Tickets and lunch stay extra.`,
      },
      {
        id: "faq-moto-jp-cn",
        question: "Can Japanese, Korean, Chinese, or Middle East visitors book this in English?",
        answer: "Yes. The website, WhatsApp booking, and published prices stay in English and Indonesian rupiah. Guides speak English. You do not need Japanese, Korean, Chinese, or Arabic on the form. Ride yourself with an International Driving Permit, or say pillion. If you stay in Canggu, Jimbaran, or Nusa Dua, the shuttle is IDR 550,000 once per booking. https://www.sekarbaliactivity.com/blog/bali-tours-for-japanese-chinese-travelers-2026",
      },
      {
        id: "faq-moto-6",
        question: "Is this the same as a private car day or the Ubud ATV?",
        answer: "No. The Full Day Ubud Tour is a private car from IDR 600,000. ATV at All New Bali Adventure is a jungle-mud quad from IDR 750,000 with lunch included. This is a public-road scooter day. Tickets stay extra here and on the car.",
      },
    ],
    reviews: [],
  },
  {
    id: UTV_BUGGY_SLUG,
    title: "UTV at Bali Buggy Adventures",
    slug: UTV_BUGGY_SLUG,
    category: "adventure",
    area: UTV_BUGGY_AREA,
    venue: UTV_BUGGY_VENUE,
    pickup: "Quoted on WhatsApp or self-meet",
    duration: UTV_BUGGY_DURATION,
    basePrice: UTV_BUGGY_SINGLE_IDR,
    recommendedByTravelersPercent: 96,
    seoTitle: "UTV Buggy Bali | Single 1.2M · Tandem 1.5M",
    seoDescription:
      "Bali Buggy Adventures in Pemogan: 1-hour 7 km UTV. Lunch included. Single IDR 1,200,000 · tandem 1,500,000. WhatsApp.",
    heroImage: {
      url: "/images/adventures/utv-buggy-ricefield.jpg",
      alt: "Two UTV buggies splashing through a muddy ricefield track in Bali",
      width: 1600,
      height: 1000,
    },
    gallery: [
      {
        url: "/images/adventures/utv-buggy-ricefield.jpg",
        alt: "UTV buggies on a muddy ricefield track",
      },
      {
        url: "/images/adventures/utv-buggy-mud-splash.jpg",
        alt: "UTV buggy driver giving a thumbs-up through mud spray",
      },
      {
        url: "/images/adventures/utv-buggy-crocodile-gate.jpg",
        alt: "UTV buggy driving through the crocodile water-gate on the track",
      },
    ],
    shortDescription:
      "Bali Buggy Adventures in Pemogan, South Denpasar. About 1 hour / 7 km automatic UTV. Lunch included. Single IDR 1,200,000 · tandem IDR 1,500,000.",
    fullDescription: `**Want a 1-hour UTV, not a quad?** We book **[${UTV_BUGGY_VENUE}](${UTV_BUGGY_SITE})** in **Pemogan, South Denpasar** — an **automatic** sit-in UTV on a **7 km** line: Crocodile Cave (Goa Buaya), water pits, rice fields, mud, circuit, fun speed, and jungle.

**Track / self-meet:** ${UTV_BUGGY_ADDRESS}. [Open in Maps](${UTV_BUGGY_MAP_URL}). Hotel pickup is **quoted** — do not assume it is in the from-price.

This is **not** [Sedang ATV](/tours/bali-atv-adventure) at All New Bali Adventure. Side-by-side: [ATV vs UTV](/blog/bali-atv-vs-utv-buggy-2026).

### 2026 prices
| Rig | Price | Who |
|-----|-------|-----|
| **Single UTV** | **IDR ${UTV_BUGGY_SINGLE_IDR.toLocaleString("id-ID")}** | One rider (driver, 17+) |
| **Tandem UTV** | **IDR ${UTV_BUGGY_TANDEM_IDR.toLocaleString("id-ID")}** | Two guests on one buggy (passenger 6+) |

### Already included
- Welcome drink
- Towel, soap, and shower
- Locker
- Insurance
- Lunch (fried rice or fried noodles)
- Safety gear (helmet and boots)
- Professional instructor

Hotel pickup is **quoted**. We book the seat; the track crew runs the briefing.

### Terms
1. The guest who **drives** must be able to drive.
2. Minimum age: **17** (driver) · **6** (passenger).
3. The buggy is **automatic** — easy to drive.
4. Duration about **1 hour** on a **7 km** track.
5. Track: Crocodile Cave, water pits, rice fields, mud, circuit, fun speed, jungle.

WhatsApp **date, guest count, and single or tandem**. No payment to inquire.`,
    highlights: [
      "About 1 hour · 7 km automatic UTV",
      "Crocodile Cave, rice fields, mud, circuit, fun speed, jungle",
      "Lunch (fried rice / fried noodles) plus welcome drink, locker, shower",
      "Driver 17+ · passenger 6+ · not Sedang ATV",
    ],
    included: [
      "Welcome drink",
      "Towel, soap, and shower",
      "Locker",
      "Insurance",
      "Lunch (fried rice or fried noodles)",
      "Safety gear (helmet and boots)",
      "Professional instructor",
    ],
    notIncluded: [
      "Hotel pickup unless quoted",
      "Sedang ATV tickets (different venue)",
    ],
    itinerary: [
      {
        id: "iti-utv-1",
        time: "Arrive",
        title: "Briefing + kit",
        description: "Welcome drink, helmet and boots, single or tandem. Driver must be 17+ and able to drive.",
      },
      {
        id: "iti-utv-2",
        time: "About 1 hour",
        title: "7 km track",
        description: "Crocodile Cave, water pits, rice fields, mud, circuit, fun speed, jungle.",
      },
      {
        id: "iti-utv-3",
        time: "Finish",
        title: "Lunch + shower",
        description: "Fried rice or fried noodles. Towel, soap, locker, rinse off the mud.",
      },
    ],
    activityOptions: [
      {
        name: "Single UTV Buggy",
        priceDiff: 0,
        description: `IDR ${UTV_BUGGY_SINGLE_IDR.toLocaleString("id-ID")} · 1 rider · about 1 hour / 7 km`,
      },
      {
        name: "Tandem UTV Buggy",
        priceDiff: UTV_BUGGY_TANDEM_IDR - UTV_BUGGY_SINGLE_IDR,
        description: `IDR ${UTV_BUGGY_TANDEM_IDR.toLocaleString("id-ID")} · 2 guests on one buggy · about 1 hour / 7 km`,
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-utv-1",
        question: "How much is the UTV buggy?",
        answer:
          "Single UTV is IDR 1,200,000 (one rider). Tandem is IDR 1,500,000 for two guests sharing one buggy. About 1 hour on a 7 km automatic track. Lunch (fried rice or fried noodles) is included. Pickup is quoted. WhatsApp — no payment to inquire.",
      },
      {
        id: "faq-utv-2",
        question: "What is included?",
        answer:
          "Welcome drink; towel, soap, and shower; locker; insurance; lunch (fried rice or fried noodles); helmet and boots; and a professional instructor. Hotel pickup is not in the from-price unless we quote it.",
      },
      {
        id: "faq-utv-3",
        question: "What is the minimum age?",
        answer:
          "The driver must be 17 or older and able to drive. A passenger can be 6 or older on a tandem buggy. The buggy is automatic.",
      },
      {
        id: "faq-utv-4",
        question: "Is this the same as your Ubud ATV?",
        answer:
          "No. ATV at All New Bali Adventure in Sedang is a quad-bike jungle-mud ticket from IDR 750,000. This is a sit-in automatic UTV at Bali Buggy Adventures in Pemogan, South Denpasar, for about 1 hour / 7 km. Compare: https://www.sekarbaliactivity.com/blog/bali-atv-vs-utv-buggy-2026",
      },
      {
        id: "faq-utv-5",
        question: "Where is Bali Buggy Adventures?",
        answer:
          "Gg. Merta Shanti No.20 A, Pemogan, Denpasar Selatan, Kota Denpasar, Bali 80221. Venue site: https://balibuggyadventures.com. We book the ticket on WhatsApp; pickup is quoted or self-meet at that pin.",
      },
      {
        id: "faq-utv-6",
        question: "Is hotel pickup included?",
        answer:
          "Usually not in the from-price. We quote a private driver or you self-meet. Say your hotel area on WhatsApp.",
      },
    ],
    reviews: [],
  },
  ...PARK_WORKSHOP_TOURS,
]

export function getTourBySlug(slug: string): Tour | undefined {
  const resolved = resolveBaliSafariSlug(slug)
  return TOURS.find((tour) => tour.slug === resolved)
}

export function getAllTourSlugs(): string[] {
  return TOURS.map((tour) => tour.slug)
}

export function getTourCategoryLabel(category: TourCategoryId): string {
  return TOUR_CATEGORY_LABELS[category]
}

export function getToursByCategory(category: TourCategoryId): Tour[] {
  return TOURS.filter((tour) => tour.category === category)
}

export function getTopPickTours(): Tour[] {
  return TOURS.filter((tour) => tour.isTopPick)
}

export function getTravelerRecommendPercent(slug: string): number | undefined {
  return getTourBySlug(slug)?.recommendedByTravelersPercent
}

export function searchTours(query: string, limit = 8): Tour[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (terms.length === 0) return []

  const matches = TOURS.map((tour) => {
    const haystack = [
      tour.title,
      tour.shortDescription,
      tour.area ?? "",
      TOUR_CATEGORY_LABELS[tour.category],
      ...tour.highlights,
    ]
      .join(" ")
      .toLowerCase()

    const matchedTerms = terms.filter((term) => haystack.includes(term)).length
    return { tour, matchedTerms }
  }).filter((entry) => entry.matchedTerms > 0)

  // Rank tours that match more of the typed words higher, so multi-word
  // queries (e.g. "atv ubud tour") still surface the best match even when
  // no single field contains that exact phrase verbatim.
  matches.sort((a, b) => b.matchedTerms - a.matchedTerms)

  return matches.slice(0, limit).map((entry) => entry.tour)
}
