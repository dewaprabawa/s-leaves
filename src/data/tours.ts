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
    title: "Bali ATV Quad Bike Adventure near Ubud",
    slug: "bali-atv-adventure",
    category: "adventure",
    area: "Sedang / Ubud",
    venue: "All New Bali Adventure, Sedang",
    isTopPick: true,
    pickup: "IDR 400,000 hotel pickup or free self-meet",
    duration: "2–4 Hours",
    basePrice: 750000,
    childPrice: 700000,
    seoTitle: "Private ATV Ride Ubud | From IDR 750K",
    seoDescription:
      "ATV ride Ubud at All New Bali Adventure — single from IDR 750K, tandem 1.1M. Lunch, gear, insurance. Hotel pickup IDR 400K or self-meet. Book WhatsApp.",
    heroImage: {
      url: "/images/adventures/atv-adventure.jpg",
      alt: "ATV jungle adventure ride through tropical rainforest trails",
    },
    gallery: [
      {
        url: "/images/adventures/atv-adventure.jpg",
        alt: "Quad bike ATV ride through Bali jungle trails",
      },
      {
        url: "/images/adventures/canyon-tubing.jpg",
        alt: "River tubing through crystal-clear Bali waters",
      },
    ],
    shortDescription:
      "Private muddy sport ATV ride near Ubud at All New Bali Adventure — beginner-friendly Bali quad bike through jungle mud tracks, river crossings, and scenic trails. All-inclusive: lunch, helmet, boot shoes & insurance. Add Wos River tubing or rafting. From IDR 750K.",
    fullDescription: `**Looking for a Bali Quad Bike / ATV Ride Near Ubud?**

If you want an adrenaline-packed day beyond the usual tourist trail, our Bali ATV Quad Bike Adventure delivers a complete private ATV ride through jungle mud tracks, muddy trails, and river crossings. Every ride is designed for sensation, excitement, and joy — whether you go solo (single ATV) or share a tandem ATV with a partner. Beginner-friendly with a full safety briefing.

### ATV Arena Location: All New Bali Adventure
All ATV rides take place at **All New Bali Adventure** — our dedicated jungle ATV arena near Ubud. This is where you will meet your guide, get fitted with boot shoes and a helmet, and start your safety briefing before hitting the track.

### Complete Bali Quad Bike (ATV) Trips
Hop on a powerful ATV and race scenic off-road trails with expert guides. Packages suit first-timers and thrill-seekers alike. After a safety briefing at All New Bali Adventure, you hit the track for an unforgettable ride through Bali's green countryside — lunch, helmet, boot shoes, and insurance included.

### Combine with River Tubing or Rafting
Want even more adventure? Pair your ATV ride with river tubing on the Wos River, or ask about an ATV + rafting combo. After racing the ATV mud track, cool down as you float the river or paddle whitewater — favourite combos for guests who want a full day of thrills on land and water.

### Plan your ATV day
- [ATV cost near Ubud 2026](/blog/how-much-does-atv-cost-bali-ubud-2026) — single IDR 750K vs tandem IDR 1.1M
- [Single vs tandem ATV](/blog/tandem-atv-ubud-price) — who should share, two-single vs one-bike math
- [All New Bali Adventure arena](/blog/bali-atv-all-new-bali-adventure-location-guide) — self-meet in Sedang vs hotel pickup IDR 400,000
- [Jungle mud vs cave/tunnel tracks](/blog/ubud-atv-track-types-mud-jungle-vs-cave-tunnel) — we are not Kuber or Dragon Cave
- [ATV + Wos River tubing](/blog/atv-river-tubing-wos-river-bali) — land-then-water combo (ask WhatsApp for timing)
- [Private vs mass-market ATV](/blog/private-atv-vs-mass-market-ubud)

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
          "Meet your guide at the All New Bali Adventure ATV arena, get fitted with boot shoes and helmet, and receive a clear safety briefing before the ride.",
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
        name: "ATV + River Tubing Combo",
        priceDiff: 0,
        description: "Ask us for combo pricing · Wos River tubing after the ATV track",
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
          "All of our ATV rides run at All New Bali Adventure — a dedicated jungle arena on Jl. Raya Krasan, Sedang, Kec. Abiansemal, Kabupaten Badung, Bali 80352 (near Ubud). We are not the Kuber tunnel or Dragon Cave tracks; ask WhatsApp if you need pin directions or hotel pickup.",
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
          "Yes. Many guests add Wos River tubing after the ATV track for a land-and-water day. Rafting combos are also available on request — message WhatsApp with your date and guest count.",
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
          "Yes — the All New Bali Adventure track includes jungle mud, soft soil, and river crossings on a 4-wheel sport ATV (quad). You stay on a stable four-wheel machine; no clutch or motocross bike balance required.",
      },
      {
        id: "faq-atv-9",
        question: "Should I book a single ATV or a tandem?",
        answer:
          "Book a single ATV (from IDR 750,000) if each guest wants their own bike. Book tandem (IDR 1,100,000 for two sharing one bike) if you are a couple or one rider prefers not to drive. Both include lunch, gear, and insurance — say 1 or 2 riders on WhatsApp and we will quote the right option.",
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
    basePrice: 950000,
    seoTitle: "Private Mount Batur Jeep | Sunrise or Sunset",
    seoDescription:
      "Private jeep or tracking, sunrise or sunset — min 2 guests. Meal included. Hot spring +IDR 150K with ticket. 2 pax 950K · 3+ 750K.",
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
      "Your private 4×4 to Mount Batur near Kintamani — sit-in or tracking (jeep + guided trek), sunrise or sunset, minimum 2 guests. Same private rates. Meal included. Optional Batur hot spring +IDR 150,000 per person with the entrance ticket included. Hotel pickup included. 2 guests IDR 950,000 · 3+ IDR 750,000 per person.",
    fullDescription: `**What is the Private Mount Batur Jeep Tour?** It is **your private** 4×4 jeep on Mount Batur’s volcanic tracks near Kintamani — about 1,350 metres above sea level — for **sunrise or sunset** over **Lake Batur** and **Mount Agung**. **Minimum 2 guests.** Choose **private jeep** (stay seated, no hike) or **private tracking jeep** (jeep plus a guided trek to the viewpoint). Both variants use the same private per-person rates. A local driver, hot drink, **sit-down meal**, and hotel pickup are included. Food is not cooked inside the 4×4 — the meal is after the viewpoint. **IDR 950,000 per person** for 2 guests, or **IDR 750,000 per person** once 3+ guests share one jeep.

### Private jeep or tracking jeep
**Private jeep** is the no-hike option: you stay in the 4×4 to a crater-rim viewpoint on Mount Batur’s eastern flank. **Private tracking jeep** is the trek variant: the same private jeep plus a guided walk to the viewpoint — same 2 / 3+ private prices, not a cheaper shared hike.

| | Private jeep | Private tracking jeep |
| --- | --- | --- |
| How you go | Stay seated in the 4×4 | Jeep + guided trek |
| Fitness | Sit in the jeep | Moderate walking |
| Price | Same private tiers · min 2 guests | Same private tiers · min 2 guests |
| Best for | Families, couples, skipping the hike | Guests who want a trek with jeep support |

The tracking jeep is still **not** the classic 2-hour Mount Batur **summit** trek — that is a different route. Side-by-side: [Mount Batur jeep vs sunrise trek](/blog/mount-batur-jeep-vs-sunrise-trek).

### Sunrise or sunset
Choose **sunrise** or **sunset** in the booking form — same private rates, minimum 2 guests, private sit-in jeep or private tracking jeep.

**Sunrise:** pickup typically 02:00–03:00 AM (south Bali earliest, Ubud a little later). About 6–7 hours door to door.

**Sunset:** pickup typically 14:30–15:30. About 4–5 hours door to door. Same crater-rim viewpoint over Lake Batur and Mount Agung.

| | Sunrise | Sunset |
| --- | --- | --- |
| Pickup | 02:00–03:00 AM | 14:30–15:30 |
| Duration | ~6–7 hours | ~4–5 hours |
| Price | Same private 2 / 3+ rates · meal included | Same private 2 / 3+ rates · meal included |
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
A private jeep costs the same whether two or three people ride, so the per-person rate drops the more guests you bring. Tracking jeep uses these same private tiers. **Minimum 2 guests.**

| Guests in one jeep | Price per person (IDR) |
| --- | --- |
| 2 (minimum) | 950,000 · meal included |
| 3+ | 750,000 · meal included |
| Hot spring add-on (any jeep) | +150,000 (ticket included) |
| Private Kintamani Day (jeep or tracking) | 1,300,000 promo (was 1,450,000) · meal included |

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
          "Transfer into a 4×4 jeep at base camp. Private jeep stays with the vehicle to the viewpoint. Tracking jeep continues with a guided trek — same private rates. A hot drink is served on the way.",
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
          "Sunset jeep or tracking: afternoon pickup 14:30–15:30, then the same crater-rim viewpoint over Lake Batur and Mount Agung. Same private rates as sunrise. Optional hot spring after sunset.",
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
          "IDR 950,000 per person for 2 guests sharing a private jeep (minimum 2), and IDR 750,000 per person for 3 or more guests. Private jeep and tracking jeep use these same private rates, for sunrise or sunset. Private jeep, driver, hotel pickup, a hot drink, and a sit-down meal are included. Optional Batur hot spring is +IDR 150,000 per person with the entrance ticket included. Message WhatsApp with your guest count for an exact quote.",
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
          "Choose in the booking form. Private jeep: you stay in the 4×4 to a crater-rim viewpoint (~1,350m) — no hike. Private tracking jeep: jeep plus a guided trek to the viewpoint, at the same private 2 / 3+ rates. Minimum 2 guests. Neither option is the classic 2-hour Mount Batur summit trek.",
      },
      {
        id: "faq-jeep-track",
        question: "What is the tracking jeep sunrise variant?",
        answer:
          "Tracking jeep is the trek version of this private jeep: 4×4 plus a guided walk to the sunrise or sunset viewpoint. It is labelled private and costs the same as private jeep — IDR 950,000 per person for 2 guests (minimum 2), IDR 750,000 per person for 3+.",
      },
      {
        id: "faq-jeep-sun",
        question: "Can we book sunset instead of sunrise?",
        answer:
          "Yes. Private jeep and tracking jeep are both available at sunrise or sunset at the same private rates. Sunset pickup is typically 14:30–15:30. Choose Private Jeep Sunrise, Private Tracking Jeep Sunrise, Private Jeep Sunset, or Private Tracking Jeep Sunset in the booking form.",
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
    title: "Whitewater Rafting Adventure",
    slug: "whitewater-rafting",
    category: "adventure",
    area: "Ayung River / Ubud",
    isTopPick: true,
    pickup: "IDR 400,000 hotel pickup or free self-meet",
    duration: "3 Hours",
    basePrice: 500000,
    childPrice: 450000,
    seoTitle: "Ayung River Rafting Ubud | 500K · 450K for 2+",
    seoDescription:
      "Ayung River Class II–III rafting near Ubud — IDR 500,000, discount IDR 450,000 for 2+ (min 2). Lunch, gear, guide, insurance. Pickup IDR 400K. Book WhatsApp.",
    heroImage: {
      url: "/images/adventures/rafting.jpg",
      alt: "Whitewater rafting through a Bali jungle river canyon",
    },
    gallery: [
      {
        url: "/images/adventures/rafting.jpg",
        alt: "Rafting crew navigating Bali river rapids",
      },
    ],
    shortDescription:
      "Navigate Class II-III rapids through a stunning river canyon surrounded by towering jungle cliffs, waterfalls, and ancient stone carvings.",
    fullDescription: `**Ride the Rapids Through Bali's Jungle Canyon**

Our Whitewater Rafting Adventure takes you down the Ayung River canyon near Ubud, where Class II-III rapids, jungle walls, and hidden waterfalls create one of the most exciting half-day experiences in central Bali.

This is a guided rafting trip suitable for beginners and families with older children. Professional river crew, safety equipment, and lunch are all included.

### What to Expect on the River
After a safety briefing and gear fitting, your crew paddles you through a mix of fun rapids and calm stretches. Along the way you will pass towering jungle cliffs, see waterfalls spilling into the river, and spot ancient stone carvings on the canyon walls.

### A Great Standalone Adventure or Combo Day
Whitewater rafting pairs perfectly with an ATV ride or canyon tubing session for a full land-and-water adventure day. Message us on WhatsApp to check combo availability and departure times.

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
          "IDR 500,000 per person, or IDR 450,000 per person when 2 or more guests book (minimum 2). Lunch, helmet, life jacket, guide, and insurance for ages 6–65 are included. Hotel pickup is an optional IDR 400,000 add-on.",
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
    title: "Canyon Tubing Adventure",
    slug: "canyon-tubing",
    category: "adventure",
    area: "Wos River / Pejeng",
    pickup: "IDR 400,000 hotel pickup or free self-meet",
    duration: "2.5 Hours",
    basePrice: 500000,
    childPrice: 450000,
    seoTitle: "Canyon Tubing Ubud | 500K · 450K for 2+",
    seoDescription:
      "Wos River canyon tubing near Ubud — IDR 500,000, discount IDR 450,000 for 2+. Life jacket, guide, insurance. Hotel pickup IDR 400K. Book WhatsApp.",
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
    fullDescription: `**Float Through Hidden Bali Canyons**

Our Canyon Tubing Adventure is a relaxing but unforgettable float through narrow jungle canyons on an inflatable tube. Crystal-clear water, moss-covered rock walls, and shafts of sunlight make this one of the most photogenic adventures near Ubud.

A nature guide leads the way while you drift through calm pools and gentle currents. Life jackets are provided, and no prior experience is needed.

### Pair It with ATV for the Ultimate Combo
Many guests combine canyon tubing with a morning ATV ride through the jungle — land thrills in the morning, cool water in the afternoon. Ask us on WhatsApp about ATV + tubing combo packages.

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
          "Yes — canyon tubing pairs perfectly with our ATV jungle ride. Ask us about combo pricing when you book on WhatsApp.",
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
          "IDR 500,000 per person, or IDR 450,000 per person when 2 or more guests book. Life jacket, guide, and insurance for ages 6–65 are included. Hotel pickup is an optional IDR 400,000 add-on.",
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
    pickup: "IDR 400,000 hotel pickup or free self-meet at Swing Heaven",
    duration: "1.5–2.5 Hours",
    basePrice: SWING_HEAVEN_PRICE_IDR,
    seoTitle: "Swing Heaven Bali Ubud | From IDR 530K",
    seoDescription:
      "Swing Heaven Bali in Bongkasa near Ubud — jungle swings, nests & photo spots from IDR 530K. Lunch package 630K. Dress hire 300K. WhatsApp booking.",
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
      "Jungle swing park in Bongkasa near Ubud — 14 photo spots over the Ayung River valley. Package from IDR 530,000 (tea/coffee/water + insurance) or IDR 630,000 with lunch. Flying dress hire IDR 300,000. Book via WhatsApp.",
    fullDescription: `**Swing Heaven Bali — jungle swings over the Ayung River (not Tegallalang)**

[Swing Heaven](https://swingheavens.com/) is a locally run jungle swing park on **Jl. Tangga Yuda, Bongkasa** (Abiansemal, Badung) — a short drive from Ubud, overlooking the **Ayung River valley**. This is **not** the Tegallalang rice-terrace swing strip. We book the park for you on one WhatsApp thread with ATV, rafting, cooking, and cycling.

### 2026 packages (per person)
| Package | Price | Includes |
|--------|-------|----------|
| Swing Heaven Package | **IDR ${SWING_HEAVEN_PRICE_IDR.toLocaleString("id-ID")}** (~USD 38) | All swings & photo spots, insurance, tea / coffee / water |
| Package + lunch | **IDR ${SWING_HEAVEN_LUNCH_PRICE_IDR.toLocaleString("id-ID")}** (~USD 45) | Same access + lunch |
| Flying dress hire | **IDR ${SWING_HEAVEN_DRESS_HIRE_IDR.toLocaleString("id-ID")}** | Optional — flowing photo dress |
| Koi pond boat photo | **IDR ${SWING_HEAVEN_KOI_POND_IDR.toLocaleString("id-ID")}** | Optional — ice tea, fruit platter, photos on **your phone**. Confirm lobby availability |

### Photo spots included
${SWING_HEAVEN_SPOTS.map((spot) => `- ${spot}`).join("\n")}

Take photos on **your own phone**. A professional photographer is not included. Park hours **${SWING_HEAVEN_VENUE.hours}**.

### Pickup
Hotel pickup is **IDR 400,000** (same adventure surcharge as ATV / rafting / tubing), or **self-meet at Swing Heaven** with no transport fee. Grab from central Ubud is usually cheaper if you only need a one-way drop.

### Weather & refunds
The Swing Heaven ticket is **non-refundable** once issued. If rain or unsafe weather closes the park, the venue issues a **voucher valid 7 days** from the issue date — not a cash refund. Cancel **24 hours before** we have issued the ticket and our usual [cancellation policy](/cancellation-policy) still applies.

Card payments at the park (if you pay on site) add a **3% surcharge**. WhatsApp bookings with Sekar Bali Activity use the published bank transfer on the invoice — no card number on our website.

### Pair it with ATV or rafting
Swing Heaven sits in Abiansemal, the same district as our [ATV arena](/tours/bali-atv-adventure). Ask WhatsApp to stack a morning swing with afternoon ATV or [Ayung River rafting](/tours/whitewater-rafting).

Honest context if you are still deciding: [Is the Bali Swing worth it?](/blog/is-bali-swing-worth-it) · [Swing Heaven vs Tegallalang](/blog/swing-heaven-vs-tegallalang-bali-swing) · [Bongkasa location](/blog/swing-heaven-bongkasa-location) · [Lunch package](/blog/bali-swing-with-lunch-ubud) · [Flying dress hire](/blog/flying-dress-hire-bali-swing) · [Swing Heaven Ubud guide](/blog/swing-heaven-bali-ubud-guide).`,
    highlights: [
      "14 jungle swings, nests, and photo spots over the Ayung valley",
      "From IDR 530,000 — insurance + tea/coffee/water included",
      "Lunch package IDR 630,000 · flying dress hire IDR 300,000",
      "Bongkasa near Ubud — not the Tegallalang swing strip",
    ],
    included: [
      "Access to jungle swings and photo spots (14 listed spots)",
      "On-site insurance",
      "Tea, coffee, or water",
      "Lunch (lunch package only)",
    ],
    notIncluded: [
      "Hotel pickup & drop-off (IDR 400,000 surcharge — optional)",
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
          "Self-meet at Jl. Tangga Yuda, Bongkasa, or arrive with our optional hotel pickup. Confirm package (with or without lunch) and any dress / koi-pond add-ons at the lobby.",
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
        answer: `The Swing Heaven Package is IDR ${SWING_HEAVEN_PRICE_IDR.toLocaleString("id-ID")} per person (swings, photo spots, insurance, tea/coffee/water). The lunch package is IDR ${SWING_HEAVEN_LUNCH_PRICE_IDR.toLocaleString("id-ID")}. Flying dress hire is IDR ${SWING_HEAVEN_DRESS_HIRE_IDR.toLocaleString("id-ID")}. Optional koi pond boat photo is IDR ${SWING_HEAVEN_KOI_POND_IDR.toLocaleString("id-ID")} when the lobby has availability. Hotel pickup is an optional IDR 400,000 add-on.`,
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
          "No. Self-meet at Swing Heaven is free. Optional hotel pickup is IDR 400,000 — the same adventure surcharge as ATV, rafting, and canyon tubing. Free Ubud pickup is only on ricefield cycling and Tumang cooking class.",
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
    basePrice: 750000,
    seoTitle: "Rice Paddy Cycling Ubud | Free Pickup 750K",
    seoDescription:
      "Rice paddy cycling in Pejeng near Ubud — quiet Subak lanes, lunch included, free Ubud hotel pickup from IDR 750K. Book on WhatsApp.",
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
    shortDescription: "Authentic 2-hour Ubud countryside cycling tour through rice paddies and Pejeng village paths — rice harvesting, Balinese home visit, wood carving studio, and lunch included. Small-group village bike tour from IDR 750K with free Ubud hotel pickup. Pair with an afternoon Tumang Bali Cooking Class for a full culture day.",
    fullDescription: `**Ubud Ricefield & Village Cycling Tour**

Discover the real Bali on two wheels with our Ubud rice paddy cycling tour through Pejeng. This is a relaxing countryside bike ride through beautiful green ricefields and quiet village paths — a cultural immersion designed for all fitness levels.

We pick you up from your hotel in the Ubud area and transport you to the starting point, where you are fitted with a bicycle, helmet, and briefed by your English-speaking guide before setting off into the countryside.

### Rice Paddy & Countryside Cycling
Cycle through stunning green rice paddies and village trails east of central Ubud. Stop to see local farmers at work and try harvesting rice with them. Your Pejeng guide explains traditional Balinese farming methods and the Subak irrigation rhythm of rural life — quieter than crowded Tegallalang photo stops.

### Village Culture & Local Life
Enter a real Balinese family house and see daily local life up close. Visit a local wood carving studio and watch artists at work. Continue cycling through the village past temples, schools, and everyday community activities.

### Lunch Included
Enjoy a free lunch at a chill local village restaurant serving authentic Balinese food — included in your package.

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
          "IDR 750,000 per person in 2026 (IDR 725,000 for 2 guests, IDR 700,000 for 3+) for a 2-hour guided Pejeng village / ricefield ride, including bike and helmet, lunch, insurance (ages 6–65), and free hotel pickup and drop-off in the Ubud area.",
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
    seoTitle: "Luwak Coffee Plantation Umah Kuno | IDR 800K",
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
          "Yes. A popular culture day is Pejeng ricefield cycling (free Ubud pickup + lunch) then an afternoon Tumang cooking class. Message WhatsApp to reserve both.",
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
Morning melukat, then [Luwak coffee at Umah Kuno](/tours/luwak-coffee-plantation) (Tampaksiring; transport not included on that tasting) or an afternoon [Tumang cooking class](/tours/balinese-cooking-class). Message WhatsApp to reserve both.

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
    seoTitle: "Griya Beji Waterfall Melukat | From 300K",
    seoDescription:
      "Griya Beji Waterfall in Punggul — purification IDR 300K, palm reading 1M, mental healing 1.5M. Not Tirta Empul. WhatsApp booking.",
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
      "Waterfall purification (melukat) at Taman Beji Griya in Punggul from IDR 300,000. Palm reading IDR 1,000,000. Mental healing IDR 1,500,000. Not Tirta Empul or Pura Beji.",
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
Hotel pickup is **IDR 400,000** (same adventure surcharge as ATV / Swing Heaven), or **self-meet at Griya Beji** with no transport fee. Village lanes into Punggul are narrow — a driver who knows Abiansemal helps.

### Etiquette
Sarong and sash — swimwear is not ritual dress. Women who are menstruating should not enter the inner grounds or the purification pool. Keep voices low. Healing therapy is **not** a hospital clinic; the park asks guests with psychosis or dissociative disorders not to use hypnotherapy.

Honest comparison: [Griya Beji vs Tirta Empul](/blog/griya-beji-vs-tirta-empul-melukat) · [2026 price guide](/blog/griya-beji-waterfall-ubud-guide) · [palm reading](/blog/palm-reading-bali-griya-beji) · [mental healing](/blog/mental-healing-bali-griya-beji).`,
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

**One long private day:** hotel pickup → [Pejeng cycling](/tours/ubud-ricefield-cycling-tour) or [Swing Heaven](/tours/swing-heaven-bali) → lunch → [Tumang cooking](/tours/balinese-cooking-class) or a guest restaurant → drop. Same car, published activity IDR.

**Family 4-day:** arrival transfer → cooking + cycling → no-hike [Batur jeep](/tours/batur-sunrise-jeep-tour) → soft Ubud / [Griya Beji](/tours/griya-beji-waterfall) → airport. Guide: [family private itinerary](/blog/bali-family-private-itinerary-2026).

**Girls 6-day:** Seminyak social → Swing Heaven photo day → Uluwatu + Kecak → soft Ubud → jeep sunrise → water morning + airport. Guide: [6-day girls trip](/blog/bali-6-day-girls-trip-itinerary-2026).

More: [what we book vs you book](/blog/bali-private-itinerary-what-we-book-vs-you-book) · [what to skip](/blog/what-to-skip-on-a-6-day-bali-itinerary)

### How to consult

**Consultation only** — there is no booking form or checkout for this itinerary. WhatsApp **group type (family / girls / friends / couple), dates, villa area, guest count + kids’ ages, car vs HiAce, and the day list**. No payment to inquire. After you agree on the quote, same invoice + Seabank flow as every other activity.`,
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
          "No. The private jeep goes to a crater-rim viewpoint at about 1,350m. Tracking adds a guided walk at the same private rates. Neither is the 2-hour summit trek. Pickup is included island-wide.",
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
