/**
 * Related blog guides per tour slug — strengthens internal linking / reduces orphans.
 */
export type TourRelatedGuide = {
  title: string
  href: string
  blurb: string
}

export const TOUR_RELATED_GUIDES: Record<string, TourRelatedGuide[]> = {
  'bali-atv-adventure': [
    {
      title: 'Things to do near Ubud 2026',
      href: '/blog/things-to-do-near-ubud-2026',
      blurb: 'ATV next to rafting, cooking, and jeep prices.',
    },
    {
      title: 'ATV cost near Ubud (2026)',
      href: '/blog/how-much-does-atv-cost-bali-ubud-2026',
      blurb: 'Single & tandem IDR tiers, inclusions, and pickup fees.',
    },
    {
      title: 'All New Bali Adventure arena guide',
      href: '/blog/bali-atv-all-new-bali-adventure-location-guide',
      blurb: 'Self-meet directions to the Sedang activity base.',
    },
    {
      title: 'ATV + Wos River tubing combo',
      href: '/blog/atv-river-tubing-wos-river-bali',
      blurb: 'How the land-then-water day works.',
    },
    {
      title: 'Private ATV vs mass-market quads',
      href: '/blog/private-atv-vs-mass-market-ubud',
      blurb: 'What “private / small-group” actually means near Ubud.',
    },
    {
      title: 'Jungle mud vs cave/tunnel tracks',
      href: '/blog/ubud-atv-track-types-mud-jungle-vs-cave-tunnel',
      blurb: 'Why we are not the Kuber tunnel or Dragon Cave routes.',
    },
  ],
  'whitewater-rafting': [
    {
      title: 'Things to do near Ubud 2026',
      href: '/blog/things-to-do-near-ubud-2026',
      blurb: 'Compare rafting with tubing and ATV in one table.',
    },
    {
      title: 'Whitewater rafting near Ubud guide',
      href: '/blog/bali-whitewater-rafting-near-ubud-guide',
      blurb: 'Class II–III route, who it suits, and what’s included.',
    },
    {
      title: 'Rafting vs tubing vs ATV',
      href: '/blog/rafting-vs-tubing-vs-atv-near-ubud',
      blurb: 'Pick intensity and budget with a clear side-by-side.',
    },
    {
      title: 'Adventure package prices 2026',
      href: '/blog/bali-adventure-packages-prices-2026',
      blurb: 'IDR tables for rafting, ATV, and tubing.',
    },
  ],
  'canyon-tubing': [
    {
      title: 'Things to do near Ubud 2026',
      href: '/blog/things-to-do-near-ubud-2026',
      blurb: 'Tubing price next to ATV and rafting.',
    },
    {
      title: 'Canyon tubing near Ubud',
      href: '/blog/bali-canyon-tubing-guide-ubud',
      blurb: 'Wos River float — gentler than rafting.',
    },
    {
      title: 'ATV + tubing combo',
      href: '/blog/atv-river-tubing-wos-river-bali',
      blurb: 'Race the track, then float the river.',
    },
    {
      title: 'Rafting vs tubing vs ATV',
      href: '/blog/rafting-vs-tubing-vs-atv-near-ubud',
      blurb: 'Compare splash vs mud in one page.',
    },
  ],
  'ubud-ricefield-cycling-tour': [
    {
      title: 'Things to do near Ubud 2026',
      href: '/blog/things-to-do-near-ubud-2026',
      blurb: 'Cycling next to cooking, ATV, and day tours.',
    },
    {
      title: 'Is an Ubud cycling tour worth it?',
      href: '/blog/is-ubud-cycling-tour-worth-it',
      blurb: 'Honest pros/cons of Pejeng ricefield cycling.',
    },
    {
      title: 'Pejeng vs Tegallalang cycling',
      href: '/blog/pejeng-rice-terrace-cycling-vs-tegallalang',
      blurb: 'Quiet village paths vs crowded photo stops.',
    },
    {
      title: 'Cycling + cooking class itinerary',
      href: '/blog/cycling-cooking-class-ubud-full-day-itinerary',
      blurb: 'Full culture day with Tumang afternoon class.',
    },
    {
      title: 'Ubud hotel pickup explained',
      href: '/blog/ubud-hotel-pickup-bali-adventures-explained',
      blurb: 'When free Ubud pickup applies.',
    },
    {
      title: 'E-bike vs pedal bike',
      href: '/blog/ebike-vs-pedal-ubud-cycling-tour',
      blurb: 'This ride is a standard pedal bike on flat Pejeng lanes.',
    },
    {
      title: 'What to wear on the ride',
      href: '/blog/what-to-wear-ubud-ricefield-cycling',
      blurb: 'Closed shoes, sun kit, and the 2-hour afternoon clock.',
    },
    {
      title: 'Family cycling in Pejeng',
      href: '/blog/ubud-cycling-tour-for-families',
      blurb: 'Kids who already ride, lunch included, insurance 6–65.',
    },
  ],
  'balinese-cooking-class': [
    {
      title: 'Things to do near Ubud 2026',
      href: '/blog/things-to-do-near-ubud-2026',
      blurb: 'Cooking next to cycling, jeep, and day-tour prices.',
    },
    {
      title: 'Cooking class Ubud price 2026 — worth it?',
      href: '/blog/cooking-class-ubud-price-2026-worth-it',
      blurb: 'IDR 450K promo, pickup, duration, and an honest verdict.',
    },
    {
      title: 'Vegetarian / vegan Tumang menu',
      href: '/blog/vegetarian-vegan-cooking-class-ubud',
      blurb: 'Full plant-based menu if you request it at booking.',
    },
    {
      title: 'Morning vs afternoon class',
      href: '/blog/morning-vs-afternoon-ubud-cooking-class',
      blurb: 'Market tour AM vs kitchen PM — same promo IDR.',
    },
    {
      title: 'Cycling + Tumang cooking itinerary',
      href: '/blog/cycling-cooking-class-ubud-full-day-itinerary',
      blurb: 'Morning paddies, afternoon kitchen.',
    },
    {
      title: 'Inside a Balinese cooking class',
      href: '/blog/inside-balinese-cooking-class-pejeng',
      blurb: 'What the day feels like with a village chef.',
    },
    {
      title: 'Ubud hotel pickup explained',
      href: '/blog/ubud-hotel-pickup-bali-adventures-explained',
      blurb: 'Free Ubud pickup on Tumang cooking — when a surcharge applies.',
    },
    {
      title: 'Base Genep spice paste guide',
      href: '/blog/what-is-base-genep-balinese-spice-paste-guide',
      blurb: 'The bumbu foundation you’ll grind in class.',
    },
    {
      title: '5 essential Balinese spices',
      href: '/blog/5-essential-balinese-spices',
      blurb: 'Flavor building blocks before you book.',
    },
    {
      title: 'What is lawar?',
      href: '/blog/what-is-lawar-balinese-dish',
      blurb: 'Ceremonial salad vs the guest-friendly plate you cook.',
    },
    {
      title: 'How a Balinese kitchen works',
      href: '/blog/how-traditional-balinese-kitchens-work',
      blurb: 'Paon layout, mortar, and why you get your own station.',
    },
    {
      title: 'Why we pound spices by hand',
      href: '/blog/pound-spices-by-hand-not-blender',
      blurb: 'Mortar vs blender — when heat ruins Base Genep.',
    },
  ],
  'tirta-empu-purification': [
    {
      title: 'Tirta Empu melukat near Ubud',
      href: '/blog/tirta-empu-melukat-ubud-guide',
      blurb: 'Tirta Empul or Pura Beji, breakfast included, and IDR 1.2M price.',
    },
    {
      title: 'Bali temple dress code',
      href: '/blog/bali-temple-dress-code',
      blurb: 'Sarong, sash, and pool etiquette before you enter.',
    },
    {
      title: 'Ubud hotel pickup explained',
      href: '/blog/ubud-hotel-pickup-bali-adventures-explained',
      blurb: 'How the included Ubud-area shuttle differs from the ATV add-on.',
    },
    {
      title: 'Ethical luwak nearby',
      href: '/blog/how-to-spot-ethical-luwak-coffee-in-bali',
      blurb: 'Pair a Tampaksiring morning with Umah Kuno tasting.',
    },
  ],
  'luwak-coffee-plantation': [
    {
      title: 'Umah Kuno Luwak price 2026',
      href: '/blog/luwak-coffee-plantation-umah-kuno-price-2026',
      blurb: 'IDR 800,000 · min 3 guests · transport not included.',
    },
    {
      title: 'How to spot ethical luwak coffee',
      href: '/blog/how-to-spot-ethical-luwak-coffee-in-bali',
      blurb: 'Questions to ask before tasting.',
    },
    {
      title: 'Ethical luwak sourcing',
      href: '/blog/luwak-coffee-ethical-sourcing',
      blurb: 'What “ethical” should mean in practice.',
    },
    {
      title: 'Things to do near Ubud 2026',
      href: '/blog/things-to-do-near-ubud-2026',
      blurb: 'See coffee next to cooking, cycling, and day tours.',
    },
  ],
  'full-day-ubud-tour': [
    {
      title: 'Full day Ubud tour guide 2026',
      href: '/blog/full-day-ubud-tour-guide-2026',
      blurb: 'From IDR 600K — what’s included vs paid on site.',
    },
    {
      title: 'Perfect one-day Ubud itinerary',
      href: '/blog/perfect-one-day-ubud-itinerary',
      blurb: 'Palace, market, and rice terraces pacing.',
    },
    {
      title: 'Ubud travel guide 2026',
      href: '/blog/ubud-travel-guide-escape-crowds-2026',
      blurb: 'How to skip the worst crowds.',
    },
    {
      title: 'Bali temple dress code',
      href: '/blog/bali-temple-dress-code',
      blurb: 'Sarong rules before temple stops.',
    },
  ],
  'batur-sunrise-jeep-tour': [
    {
      title: 'Things to do near Ubud 2026',
      href: '/blog/things-to-do-near-ubud-2026',
      blurb: 'Jeep next to cooking, cycling, and ATV in one table.',
    },
    {
      title: 'Private Mount Batur jeep price guide (2026)',
      href: '/blog/mount-batur-sunrise-jeep-tour-price-guide-2026',
      blurb: 'Private · min 2 guests · pair and group IDR tiers plus pickup — meal included.',
    },
    {
      title: 'Jeep vs sunrise trek',
      href: '/blog/mount-batur-jeep-vs-sunrise-trek',
      blurb: 'Crater-rim 4×4 vs the 2-hour summit walk — meal included on the jeep.',
    },
    {
      title: 'Pickup times from Canggu, Seminyak & Ubud',
      href: '/blog/mount-batur-jeep-pickup-times-canggu-ubud-2026',
      blurb: 'Island-wide 02:00–03:00 clock — south Bali earliest.',
    },
    {
      title: 'Private Mount Batur jeep guide 2026',
      href: '/blog/mount-batur-sunrise-jeep-tour-guide-2026',
      blurb: 'Hour-by-hour itinerary and what to bring — sit-down meal included.',
    },
    {
      title: 'Ubud hotel pickup explained',
      href: '/blog/ubud-hotel-pickup-bali-adventures-explained',
      blurb: 'How early-morning pickup timing works by area.',
    },
    {
      title: 'Sunrise vs sunset jeep',
      href: '/blog/mount-batur-jeep-sunrise-vs-sunset',
      blurb: 'Same private IDR — 02:00 dawn or a 14:30–15:30 sunset.',
    },
    {
      title: 'Sit-in jeep vs tracking jeep',
      href: '/blog/mount-batur-sit-in-jeep-vs-tracking',
      blurb: 'Stay seated or add a guided walk — still not the summit.',
    },
    {
      title: 'Private Kintamani Day itinerary',
      href: '/blog/private-kintamani-day-jeep-itinerary',
      blurb: 'Promo 1.3M: jeep, hot spring ticket, meal, coffee, terrace.',
    },
  ],
  'half-day-ubud-tanah-lot-tour': [
    {
      title: 'Tanah Lot sunset half-day 2026',
      href: '/blog/half-day-ubud-tanah-lot-sunset-tour-2026',
      blurb: 'From IDR 450K · 6 hours · entrance fees not included.',
    },
    {
      title: 'Full day vs half day',
      href: '/blog/full-day-ubud-tour-guide-2026',
      blurb: 'When the 10-hour Ubud car is the better fit.',
    },
    {
      title: 'Morning vs afternoon tours',
      href: '/blog/morning-vs-afternoon-tours-bali',
      blurb: 'When sunset temple timing works best.',
    },
    {
      title: 'Bali temple dress code',
      href: '/blog/bali-temple-dress-code',
      blurb: 'What to wear at Tanah Lot.',
    },
    {
      title: 'Ubud travel guide 2026',
      href: '/blog/ubud-travel-guide-escape-crowds-2026',
      blurb: 'Pair a half-day with quieter Ubud time.',
    },
  ],
}

/** Short first-hand host notes for E-E-A-T on money pages */
export const TOUR_HOST_NOTES: Record<
  string,
  { title: string; body: string }
> = {
  'bali-atv-adventure': {
    title: 'From our Sedang arena hosts',
    body: 'Our crew briefs every rider at All New Bali Adventure on Jl. Raya Krasan, Sedang (Abiansemal) — gear fit, trail rules, and English safety instructions before you hit the mud. We run beginner-friendly single and tandem sessions daily and can add Wos River tubing the same afternoon when water levels allow.',
  },
  'ubud-ricefield-cycling-tour': {
    title: 'From our Pejeng cycling hosts',
    body: 'Born-and-raised Pejeng guides lead the ricefield routes we ride every week — Subak channels, village lanes, and lunch stops away from Tegallalang bus crowds. Free Ubud hotel pickup is built into the day so you start on the bike, not hunting for parking.',
  },
  'balinese-cooking-class': {
    title: 'From Chef Wayan Suryana’s kitchen',
    body: 'Tumang Bali Cooking Class is taught hands-on by Chef Wayan Suryana in Tumang village — Base Genep on the stone mortar, market tour on morning sessions, and a capped group of 8 so every guest cooks. Sekar Bali Activity handles WhatsApp booking and Ubud-area pickup coordination.',
  },
  'whitewater-rafting': {
    title: 'From our rafting crew',
    body: 'English-speaking river guides run Class II–III sections near Ubud with a full safety briefing, helmets, and life jackets before launch. We pace the day for first-timers and families — splash without extreme drops — then lunch after you dry off.',
  },
  'tirta-empu-purification': {
    title: 'From our holy-spring hosts',
    body: 'We run private melukat mornings at Tirta Empul or Pura Beji most days — hotel shuttle from the Ubud area, a canang offering, breakfast after the ritual, and a guide who tells you which fountains to use and which to skip. The temple is public and sacred: we keep the ritual unhurried and respectful, then return you in dry clothes. Lunch is not included.',
  },
  'batur-sunrise-jeep-tour': {
    title: 'From our Kintamani jeep drivers',
    body: 'We run the pre-dawn 4×4 tracks on Mount Batur’s eastern flank most mornings — hotel pickup, a hot drink on the way up, and a sit-down meal after the crater-rim viewpoint (~1,350m). This is not the summit trek: you stay in the jeep (or walk with a tracking guide) and watch Lake Batur and Mount Agung light up without a 2-hour hike in the dark.',
  },
  'luwak-coffee-plantation': {
    title: 'From our Umah Kuno hosts',
    body: 'We only send guests to Umah Kuno because the civets stay free-roaming — you will not see a caged Luwak show. The 1.5-hour walk, wood-fire roast, and 10-drink flight are the product. Transport is not in the IDR 800,000 rate; say your hotel area on WhatsApp and we will tell you how to arrive.',
  },
  'full-day-ubud-tour': {
    title: 'From our Ubud drivers',
    body: 'The published palace–market–Tegalalang order is a starting map, not a locked timetable. We wait while you eat lunch and can skip a stop if the parking lot is a circus. Entrance fees stay separate so the car rate stays honest.',
  },
  'half-day-ubud-tanah-lot-tour': {
    title: 'From our sunset-run drivers',
    body: 'The non-negotiable is arriving at Tanah Lot before the light goes. We shift the 1:00 PM-ish pickup with the season and keep Ubud stops short on purpose. Bring a sarong; the temple ticket is paid at the gate.',
  },
  'canyon-tubing': {
    title: 'From our Wos River crew',
    body: 'Tubing is the easy water half-day — sit on the tube, follow the guide, no paddle team. We often run it after an ATV session when the river level allows. Say if you want both on one WhatsApp thread.',
  },
}

export function getTourRelatedGuides(slug: string): TourRelatedGuide[] {
  return TOUR_RELATED_GUIDES[slug] ?? []
}

export function getTourHostNote(slug: string) {
  return TOUR_HOST_NOTES[slug]
}
