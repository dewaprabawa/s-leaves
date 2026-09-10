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
  ],
  'whitewater-rafting': [
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
  ],
  'balinese-cooking-class': [
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
      title: 'Base Genep spice paste guide',
      href: '/blog/what-is-base-genep-balinese-spice-paste-guide',
      blurb: 'The bumbu foundation you’ll grind in class.',
    },
    {
      title: '5 essential Balinese spices',
      href: '/blog/5-essential-balinese-spices',
      blurb: 'Flavor building blocks before you book.',
    },
  ],
  'luwak-coffee-plantation': [
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
  ],
  'full-day-ubud-tour': [
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
      title: 'Mount Batur jeep tour price guide (2026)',
      href: '/blog/mount-batur-sunrise-jeep-tour-price-guide-2026',
      blurb: 'Solo, pair, and group IDR tiers plus what\u2019s included.',
    },
    {
      title: 'Jeep vs trekking to Mount Batur',
      href: '/blog/mount-batur-jeep-vs-trekking',
      blurb: 'Why most travelers skip the 2am hike for a 4\u00d7 4.',
    },
    {
      title: 'Ubud hotel pickup explained',
      href: '/blog/ubud-hotel-pickup-bali-adventures-explained',
      blurb: 'How early-morning pickup timing works by area.',
    },
  ],
  'half-day-ubud-tanah-lot-tour': [
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
    title: 'From Chef Wayan Sudiana’s kitchen',
    body: 'Tumang Bali Cooking Class is taught hands-on by Chef Wayan Sudiana in Tumang village — Base Genep on the stone mortar, market tour on morning sessions, and a capped group of 8 so every guest cooks. Sekar Bali Activity handles WhatsApp booking and Ubud-area pickup coordination.',
  },
  'whitewater-rafting': {
    title: 'From our rafting crew',
    body: 'English-speaking river guides run Class II–III sections near Ubud with a full safety briefing, helmets, and life jackets before launch. We pace the day for first-timers and families — splash without extreme drops — then lunch after you dry off.',
  },
  'batur-sunrise-jeep-tour': {
    title: 'From our Kintamani jeep drivers',
    body: 'Our drivers know the volcanic tracks on Mount Batur\u2019s eastern flank well enough to time the climb for first light — hot drink in hand before the sky turns pink over Lake Batur and Mount Agung. No trekking boots needed; you stay seated in a private 4\u00d7 4 the whole way up, with breakfast served on top and an optional coffee plantation stop on the way home.',
  },
}

export function getTourRelatedGuides(slug: string): TourRelatedGuide[] {
  return TOUR_RELATED_GUIDES[slug] ?? []
}

export function getTourHostNote(slug: string) {
  return TOUR_HOST_NOTES[slug]
}
