/**
 * Public IDR planners — Letaido-style hub + unique utility URLs.
 *
 * Letaido's /ai-tools/ method (hub, category pills, one URL per job, try-it-free)
 * is better for SaaS tool keywords. Cloning 59 AI checkers onto a Bali tour
 * site would be worse: off-intent and thin. We keep the information architecture
 * and ship working booking-adjacent calculators on /planners (not /tools/,
 * which is noindex / sitemap-blocked for staff invoices).
 *
 * Keyword jobs: /planners owns "[thing] calculator / checker" tool intent.
 * Money-page heads stay on /tours/[slug]. Compare / worth stay on /blog/*.
 */

export const PLANNER_UPDATED = '2026-09-29'

export type PlannerCategoryId = 'pricing' | 'logistics' | 'chooser'

export const PLANNER_CATEGORY_LABELS: Record<PlannerCategoryId, string> = {
  pricing: 'Pricing',
  logistics: 'Logistics',
  chooser: 'Chooser',
}

export type PlannerQa = {
  question: string
  answer: string
}

export type Planner = {
  slug: string
  category: PlannerCategoryId
  /** SERP title without brand — layout appends `| Sekar Bali Activity` */
  seoTitle: string
  h1: string
  /** One-line job on the hub card (Letaido pattern). */
  job: string
  description: string
  /** Answer-first definition for GEO / speakable. */
  definition: string
  keywords: string[]
  tryLabel: string
  tourHref: string
  tourLabel: string
  blogHref: string
  blogLabel: string
  howItWorks: string[]
  qa: PlannerQa[]
}

export const PLANNERS: Planner[] = [
  {
    slug: 'which-bali-activity',
    category: 'chooser',
    seoTitle: 'Which Bali activity calculator',
    h1: 'Which Bali activity should I book?',
    job: 'Pick mud, scooter, jeep, cooking, or river from your mood — then WhatsApp the match.',
    description:
      'Free chooser for Ubud-area days. Answers which Bali activity to book from mood, guest count, and hotel area, then shows the 2026 IDR from-price.',
    definition:
      'The which-Bali-activity calculator is a free chooser for Sekar Bali Activity days near Ubud. Pick a mood and guest count to see the matching tour, 2026 IDR from-price, and pickup rule — then WhatsApp. It is not a checkout and not a Klook-style marketplace.',
    keywords: [
      'which Bali activity',
      'what to do in Ubud calculator',
      'ATV vs scooter vs jeep Bali',
      'Bali activity chooser',
    ],
    tryLabel: 'Try the chooser',
    tourHref: '/experiences',
    tourLabel: 'Browse every experience',
    blogHref: '/blog/which-bali-wheels-2026',
    blogLabel: 'Which Bali wheels 2026',
    howItWorks: [
      'Choose the day you want: jungle mud, public-road scooter, sunrise 4×4, cooking, cycling, or river.',
      'Add guest count and hotel area so pickup rules stay honest.',
      'Read the matching tour, from-price, and WhatsApp the row — no payment to inquire.',
    ],
    qa: [
      {
        question: 'Is this a booking form?',
        answer:
          'No. It recommends a Sekar Bali Activity tour from your mood and shows the published IDR from-price. Confirm date and guest count on WhatsApp.',
      },
      {
        question: 'Does it include Kuber cave ATV?',
        answer:
          'No. We sell Sedang mud ATV at All New Bali Adventure. We do not sell Kuber’s Payangan cave track.',
      },
      {
        question: 'Is a UTV the same as the Ubud ATV?',
        answer:
          'No. Sedang ATV is a sit-on quad from IDR 750,000. Pemogan UTV is a sit-in hour from IDR 1,200,000. Full table: ATV vs UTV 2026.',
      },
      {
        question: 'What is the flagship adventure combo?',
        answer:
          'ATV + Ayung rafting. From-price IDR 1,250,000 at ticket floors (ATV 750,000 + rafting 500,000). Same-day mix is 10% off at checkout. Pickup IDR 400,000 once or self-meet. Rafting needs two guests.',
      },
    ],
  },
  {
    slug: 'atv-price-calculator',
    category: 'pricing',
    seoTitle: 'ATV Ubud price calculator',
    h1: 'Free ATV Ubud price calculator',
    job: 'Single or tandem ATV plus optional IDR 400,000 hotel pickup.',
    description:
      'Free ATV Ubud price calculator for All New Bali Adventure in Sedang. Single from IDR 750,000, tandem IDR 1,100,000 per bike, pickup IDR 400,000 or self-meet.',
    definition:
      'The ATV Ubud price calculator is a free IDR estimator for Sekar Bali Activity rides at All New Bali Adventure in Sedang. Single ATV starts at IDR 750,000 per rider (IDR 725,000 for 2, IDR 700,000 for 3+). Tandem is IDR 1,100,000 per bike. Hotel pickup is IDR 400,000 or free self-meet. Lunch, gear, and insurance are included. Not Kuber cave.',
    keywords: [
      'ATV Ubud price calculator',
      'Bali ATV cost calculator',
      'tandem ATV Ubud calculator',
      'All New Bali Adventure price',
    ],
    tryLabel: 'Calculate ATV IDR',
    tourHref: '/tours/bali-atv-adventure',
    tourLabel: 'ATV money page',
    blogHref: '/blog/how-much-does-atv-cost-bali-ubud-2026',
    blogLabel: 'ATV cost near Ubud 2026',
    howItWorks: [
      'Choose single (own bike) or tandem (two guests, one bike).',
      'Enter rider or bike count. Group tiers apply automatically.',
      'Tick hotel pickup only if you do not self-meet at Sedang — that add-on is IDR 400,000 once.',
    ],
    qa: [
      {
        question: 'How much is a Bali ATV near Ubud in 2026?',
        answer:
          'Single ATV is IDR 750,000 for 1 rider, IDR 725,000 each for 2, and IDR 700,000 each for 3+. Tandem is IDR 1,100,000 for two sharing one bike. Lunch, helmet, boot shoes, and insurance are included at All New Bali Adventure in Sedang. Stack Ayung rafting the same day from IDR 1,250,000 at ticket floors.',
      },
      {
        question: 'Is hotel pickup included on ATV?',
        answer:
          'No. Hotel pickup is an optional IDR 400,000 surcharge. Self-meet at the Sedang arena has no pickup fee. Do not treat ATV pickup as the free Ubud cycling or cooking shuttle.',
      },
    ],
  },
  {
    slug: 'motorbike-tour-price',
    category: 'pricing',
    seoTitle: 'Bali motorbike tour calculator',
    h1: 'Free Bali motorbike tour price calculator',
    job: 'Ubud to East scooter promo plus the Canggu / Jimbaran / Nusa Dua shuttle.',
    description:
      'Free Bali motorbike tour price calculator. Promo from IDR 450,000 per scooter. Tickets extra. Pickup at your chosen area. South shuttle IDR 550,000 from Canggu, Jimbaran, or Nusa Dua.',
    definition:
      'The Bali motorbike tour price calculator is a free IDR estimator for the guided 125–160cc scooter day. Promo rates run from IDR 450,000 (Ubud) to IDR 800,000 (East) per scooter. Attraction tickets and lunch stay on you. Pickup is at the area you choose. A Canggu, Jimbaran, or Nusa Dua shuttle is IDR 550,000 once per booking — not the IDR 400,000 ATV surcharge.',
    keywords: [
      'Bali motorbike tour price calculator',
      'scooter tour Ubud cost',
      'Bali scooter tour calculator',
      'Canggu scooter shuttle price',
    ],
    tryLabel: 'Calculate scooter IDR',
    tourHref: '/tours/bali-motorbike-traveling-trip',
    tourLabel: 'Motorbike money page',
    blogHref: '/blog/bali-motorbike-tour-price-2026',
    blogLabel: 'Motorbike tour price 2026',
    howItWorks: [
      'Pick a destination: Ubud, waterfalls, Kintamani, South, North, or East.',
      'Enter how many scooters — price is per bike, not per person.',
      'Add the IDR 550,000 shuttle only if we collect you from Canggu, Jimbaran, or Nusa Dua.',
    ],
    qa: [
      {
        question: 'Is the scooter tour the same as ATV?',
        answer:
          'No. The motorbike tour is a public-road 125–160cc automatic day. ATV is a four-wheel jungle-mud ride in Sedang. Dirt bike is a geared enduro we book separately.',
      },
      {
        question: 'Are temple tickets included?',
        answer:
          'No. Entrance tickets and lunch stay on you. The published IDR is the guided scooter only.',
      },
    ],
  },
  {
    slug: 'hotel-pickup-checker',
    category: 'logistics',
    seoTitle: 'Hotel pickup checker Ubud',
    h1: 'Is hotel pickup included in Ubud?',
    job: 'Check free Ubud, island-wide jeep, IDR 400,000, or quoted pickup in one pass.',
    description:
      'Free hotel pickup checker for Sekar Bali Activity. Cycling and cooking include free Ubud pickup. Swing Heaven includes the hotel driver. The Batur jeep includes island-wide pickup. ATV, rafting, tubing, and Griya Beji are IDR 400,000 or self-meet.',
    definition:
      'The hotel pickup checker answers whether hotel pickup is included on a Sekar Bali Activity booking. Pejeng cycling and Tumang cooking include free Ubud-area pickup. Swing Heaven includes a hotel driver in the ticket (required — no self-meet). The private Mount Batur jeep includes island-wide pickup. ATV, rafting, tubing, and Griya Beji are IDR 400,000 or self-meet. Motorbike pickup is at the area you choose. Park and UTV pickup is quoted.',
    keywords: [
      'hotel pickup checker Ubud',
      'is hotel pickup included Bali',
      'Ubud tour pickup fee',
      'Bali activity transfer included',
    ],
    tryLabel: 'Check pickup',
    tourHref: '/blog/ubud-hotel-pickup-bali-adventures-explained',
    tourLabel: 'Pickup guide',
    blogHref: '/blog/ubud-hotel-pickup-bali-adventures-explained',
    blogLabel: 'Hotel pickup explained',
    howItWorks: [
      'Select the activity you want to book.',
      'Select your hotel area: Ubud, Canggu / Jimbaran / Nusa Dua, other south, or elsewhere.',
      'Read the published rule. We do not invent free pickup on ATV, rafting, tubing, or park tickets.',
    ],
    qa: [
      {
        question: 'Which tours include free Ubud hotel pickup?',
        answer:
          'Pejeng ricefield cycling and Tumang Bali Cooking Class include complimentary Ubud-area hotel pickup. Swing Heaven includes a hotel driver in the ticket (required — no self-meet). The private Mount Batur jeep includes island-wide pickup in the published rate. ATV, rafting, tubing, and Griya Beji do not.',
      },
      {
        question: 'What is the IDR 400,000 pickup fee?',
        answer:
          'It is the optional hotel pickup and drop-off surcharge on ATV, rafting, canyon tubing, and Griya Beji. Self-meet has no pickup fee. It is not Swing Heaven (driver included), not the motorbike south shuttle, and not jeep pickup.',
      },
    ],
  },
  {
    slug: 'batur-jeep-price',
    category: 'pricing',
    seoTitle: 'Mount Batur jeep calculator',
    h1: 'Free Mount Batur jeep price calculator',
    job: 'Sit-in or tracking, guest count, optional hot spring — island-wide pickup included.',
    description:
      'Free Mount Batur jeep price calculator. Sit-in IDR 2,000,000 for 2 guests, tracking IDR 1,800,000 for 2, IDR 750,000 per person for 3+. Meal included. Optional hot spring +IDR 150,000.',
    definition:
      'The Mount Batur jeep price calculator is a free IDR estimator for the private Kintamani 4×4. Minimum 2 guests. Sit-in is IDR 2,000,000 for 2 guests. Tracking (jeep plus a guided walk) is IDR 1,800,000 for 2 guests. Three or more guests pay IDR 750,000 per person. Island-wide hotel pickup and a sit-down meal after the viewpoint are included. Food is not cooked inside the 4×4. Not the summit trek.',
    keywords: [
      'Mount Batur jeep price calculator',
      'Batur jeep cost calculator',
      'Kintamani jeep price 2026',
      'private jeep Ubud calculator',
    ],
    tryLabel: 'Calculate jeep IDR',
    tourHref: '/tours/batur-sunrise-jeep-tour',
    tourLabel: 'Jeep money page',
    blogHref: '/blog/mount-batur-sunrise-jeep-tour-price-guide-2026',
    blogLabel: 'Batur jeep price guide 2026',
    howItWorks: [
      'Enter guest count (minimum 2 — this is a private jeep, not a shared trek).',
      'Choose sit-in (stay in the 4×4) or tracking (jeep plus a guided walk).',
      'Add the optional Batur hot spring at IDR 150,000 per person with the entrance ticket included.',
    ],
    qa: [
      {
        question: 'Is the Batur jeep a hike?',
        answer:
          'Sit-in jeep is no hike — you stay in the 4×4 to a crater-rim viewpoint at about 1,350 m. Tracking jeep adds a guided walk to that viewpoint. Neither option is the classic 2-hour Mount Batur summit trek.',
      },
      {
        question: 'Is hotel pickup included on the jeep?',
        answer:
          'Yes. Island-wide hotel pickup is built into the published jeep rate. It is not the IDR 400,000 ATV / rafting surcharge.',
      },
    ],
  },
  {
    slug: 'cooking-class-price',
    category: 'pricing',
    seoTitle: 'Cooking class Ubud calculator',
    h1: 'Free Tumang cooking class price calculator',
    job: 'Shared promo IDR 450,000 or private kitchen IDR 1,000,000 — Ubud pickup included.',
    description:
      'Free Tumang cooking class price calculator. Shared promo IDR 450,000 per person. Private kitchen IDR 1,000,000 per person. Complimentary Ubud-area hotel pickup on both.',
    definition:
      'The Tumang cooking class price calculator is a free IDR estimator for Chef Wayan Suryana’s class near Ubud. Shared small-group is promo IDR 450,000 per person (was IDR 506,370). Private kitchen is IDR 1,000,000 per person. Complimentary Ubud-area hotel pickup is included. Max 8 guests on the shared class.',
    keywords: [
      'cooking class Ubud price calculator',
      'Tumang cooking class calculator',
      'Balinese cooking class cost',
      'private cooking class Ubud price',
    ],
    tryLabel: 'Calculate cooking IDR',
    tourHref: '/tours/balinese-cooking-class',
    tourLabel: 'Cooking money page',
    blogHref: '/blog/cooking-class-ubud-price-2026-worth-it',
    blogLabel: 'Cooking class Ubud price 2026',
    howItWorks: [
      'Choose shared small-group or private kitchen.',
      'Enter guest count. Shared promo is per person; private is IDR 1,000,000 per person.',
      'Ubud-area hotel pickup is already in the published rate — do not add the IDR 400,000 adventure surcharge.',
    ],
    qa: [
      {
        question: 'What is included in the Tumang cooking class price?',
        answer:
          'Hands-on cooking of 10+ dishes, English instruction, and complimentary Ubud-area hotel pickup. The morning session also includes a pasar walk. Shared promo is IDR 450,000 per person.',
      },
      {
        question: 'How much is a private Tumang class?',
        answer:
          'Private kitchen is IDR 1,000,000 per person (IDR 1,000,000 for 1 guest, IDR 2,000,000 for 2 guests). Pickup stays complimentary in the Ubud area.',
      },
    ],
  },
]

export function getPlannerBySlug(slug: string): Planner | undefined {
  return PLANNERS.find((planner) => planner.slug === slug)
}

export function getPlannerSlugs(): string[] {
  return PLANNERS.map((planner) => planner.slug)
}

export type PickupActivityId =
  | 'atv'
  | 'rafting'
  | 'tubing'
  | 'swing'
  | 'griya-beji'
  | 'cycling'
  | 'cooking'
  | 'jeep'
  | 'motorbike'
  | 'melukat'
  | 'coffee'
  | 'utv'
  | 'parks'
  | 'itinerary'

export type PickupAreaId = 'ubud' | 'south-shuttle' | 'south-other' | 'elsewhere'

export const PICKUP_ACTIVITIES: Array<{
  id: PickupActivityId
  label: string
  href: string
}> = [
  { id: 'atv', label: 'Sedang ATV', href: '/tours/bali-atv-adventure' },
  { id: 'rafting', label: 'Ayung rafting', href: '/tours/whitewater-rafting' },
  { id: 'tubing', label: 'Canyon tubing', href: '/tours/canyon-tubing' },
  { id: 'swing', label: 'Swing Heaven', href: '/tours/swing-heaven-bali' },
  { id: 'griya-beji', label: 'Griya Beji Waterfall', href: '/tours/griya-beji-waterfall' },
  { id: 'cycling', label: 'Pejeng cycling', href: '/tours/ubud-ricefield-cycling-tour' },
  { id: 'cooking', label: 'Tumang cooking class', href: '/tours/balinese-cooking-class' },
  { id: 'jeep', label: 'Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
  { id: 'motorbike', label: 'Motorbike / scooter tour', href: '/tours/bali-motorbike-traveling-trip' },
  { id: 'melukat', label: 'Tirta Empu / Beji melukat', href: '/tours/tirta-empu-purification' },
  { id: 'coffee', label: 'Umah Kuno luwak', href: '/tours/luwak-coffee-plantation' },
  { id: 'utv', label: 'UTV at Bali Buggy Adventures', href: '/tours/utv-buggy-bali-adventure' },
  { id: 'parks', label: 'Park / workshop tickets', href: '/tours/bali-bird-park' },
  { id: 'itinerary', label: 'Private itinerary / driver day', href: '/tours/bali-private-itinerary' },
]

export const PICKUP_AREAS: Array<{ id: PickupAreaId; label: string }> = [
  { id: 'ubud', label: 'Ubud / Pejeng / Tegallalang' },
  { id: 'south-shuttle', label: 'Canggu, Jimbaran, or Nusa Dua' },
  { id: 'south-other', label: 'Kuta, Seminyak, Sanur, or other south' },
  { id: 'elsewhere', label: 'Elsewhere in Bali' },
]

export type ActivityMoodId =
  | 'atv-mud'
  | 'scooter'
  | 'jeep-sitin'
  | 'jeep-tracking'
  | 'cooking'
  | 'cycling'
  | 'rafting'
  | 'tubing'
  | 'swing'
  | 'utv'
  | 'dirt-bike'

export const ACTIVITY_MOODS: Array<{
  id: ActivityMoodId
  label: string
  hint: string
}> = [
  { id: 'atv-mud', label: 'Jungle mud ATV', hint: 'River crossings, not temples' },
  { id: 'scooter', label: 'Public-road scooter day', hint: 'Temples, waterfalls, coasts' },
  { id: 'jeep-sitin', label: 'Sunrise, no hike', hint: 'Private 4×4 to the crater rim' },
  { id: 'jeep-tracking', label: 'Sunrise with a guided walk', hint: 'Jeep plus trek — not the summit' },
  { id: 'cooking', label: 'Cook Balinese food', hint: 'Tumang kitchen near Ubud' },
  { id: 'cycling', label: 'Easy ricefield cycling', hint: 'Pejeng, not Tegallalang crowds' },
  { id: 'rafting', label: 'River rapids', hint: 'Ayung Class II–III' },
  { id: 'tubing', label: 'Gentle river float', hint: 'Wos River canyon tubing' },
  { id: 'swing', label: 'Jungle swing photos', hint: 'Swing Heaven in Bongkasa' },
  { id: 'utv', label: 'Automatic UTV (not ATV)', hint: 'Pemogan, 1 hour / 7 km' },
  { id: 'dirt-bike', label: 'Dirt bike / enduro', hint: 'Tabanan or Kintamani lava' },
]
