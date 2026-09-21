/**
 * Competitor-informed keyword base for every bookable activity.
 *
 * Single source of truth for meta keywords, GEO corpora, llms.txt, and
 * blog article schema. Terms are commercial-intent phrases competitors
 * rank for (GetYourGuide/Viator title modifiers, local operator H1s) that
 * remain truthful for Sekar Bali Activity.
 *
 * Do not add: Dragon Cave / Kuber tunnel, e-bike as an offer, Ayung as
 * tubing (tubing is Wos River), jeep-as-summit-hike, caged luwak, free
 * pickup on ATV/rafting/tubing.
 */

export const BRAND_KEYWORD = 'Sekar Bali Activity'

export type ActivityKeywordSlug =
  | 'bali-atv-adventure'
  | 'whitewater-rafting'
  | 'canyon-tubing'
  | 'ubud-ricefield-cycling-tour'
  | 'luwak-coffee-plantation'
  | 'full-day-ubud-tour'
  | 'half-day-ubud-tanah-lot-tour'
  | 'tirta-empu-purification'
  | 'balinese-cooking-class'
  | 'batur-sunrise-jeep-tour'

export const ACTIVITY_KEYWORDS: Record<ActivityKeywordSlug, string[]> = {
  'bali-atv-adventure': [
    'ATV ride Ubud',
    'private ATV tour Bali',
    'Bali jungle ATV Ubud',
    'quad bike adventure Bali',
    'tandem ATV ride Bali',
    'beginner friendly ATV Bali',
    'Bali ATV with lunch included',
    'ATV hotel pickup Ubud',
    'ATV river tubing combo',
    'ATV rafting combo Bali',
    'ATV Ubud price',
    'All New Bali Adventure',
  ],
  'whitewater-rafting': [
    'whitewater rafting Ubud',
    'Ayung River rafting Ubud',
    'Bali rafting price',
    'Class II III rafting Bali',
    'rafting with lunch Ubud',
    'beginner rafting Ubud',
    'ATV rafting combo Bali',
    'rafting hotel pickup Ubud',
    'Bali rafting stone carvings waterfall',
  ],
  'canyon-tubing': [
    'canyon tubing Ubud',
    'Wos River tubing',
    'Bali river tubing price',
    'ATV tubing combo Ubud',
    'family river tubing Bali',
    'Ubud canyon tubing',
    'river tubing vs rafting Ubud',
    'Wos River tubing Ubud',
  ],
  'ubud-ricefield-cycling-tour': [
    'Ubud ricefield cycling',
    'rice paddy cycling Ubud',
    'Pejeng cycling tour',
    'Ubud cycling tour price',
    'cycling cooking class Ubud',
    'cycling tour with lunch Ubud',
    'small group village bike tour Bali',
    'authentic village cycling Pejeng',
    'Ubud countryside cycling tour',
    'pedal bike Ubud rice terrace',
  ],
  'luwak-coffee-plantation': [
    'luwak coffee plantation Ubud',
    'Umah Kuno luwak coffee',
    'ethical Kopi Luwak Bali',
    'cage-free luwak coffee tasting',
    'coffee plantation Tampaksiring',
    'luwak coffee price Bali',
    'kopi luwak tasting Ubud',
  ],
  'full-day-ubud-tour': [
    'full day Ubud tour',
    'private Ubud tour price',
    'Ubud palace market rice terraces',
    'Tegalalang rice terrace tour',
    'private Ubud driver',
    'Ubud Royal Palace tour',
    'private car Ubud full day',
  ],
  'half-day-ubud-tanah-lot-tour': [
    'Tanah Lot sunset tour from Ubud',
    'half day Ubud tour',
    'Ubud Tanah Lot private tour',
    'private sunset tour Ubud',
    'Tanah Lot temple from Ubud',
    'half day Tanah Lot sunset',
  ],
  'tirta-empu-purification': [
    'Tirta Empu melukat',
    'Tirta Empul purification',
    'Pura Beji melukat',
    'Beji holy spring Ubud',
    'melukat Ubud',
    'private melukat Bali',
    'holy spring purification Bali',
    'Tirta Empul temple from Ubud',
    'water purification ritual Bali',
  ],
  'balinese-cooking-class': [
    'cooking class Ubud',
    'Tumang Bali Cooking Class',
    'Balinese cooking class Ubud',
    'cooking class Ubud market tour',
    'cooking class Ubud price',
    'small group cooking class Ubud',
    'vegetarian cooking class Ubud',
    'private cooking class Ubud',
    'farm to table cooking class Ubud',
    'authentic Balinese family cooking class Ubud',
  ],
  'batur-sunrise-jeep-tour': [
    'Private Mount Batur jeep tour',
    'Mount Batur jeep tour Kintamani',
    'Batur sunrise without hiking',
    'Mount Batur jeep vs trek',
    'sunrise jeep Lake Batur',
    'private 4x4 Mount Batur',
    'Mount Batur jeep pickup time',
    'Batur jeep meal included',
    'Mount Batur jeep no hike',
    'Private Kintamani Day',
    'Batur hot spring jeep tour',
  ],
}

export const COMBO_KEYWORDS = [
  'ATV river tubing combo',
  'ATV rafting combo Bali',
  'cycling cooking class Ubud',
  'Ubud outdoor combo package',
] as const

/** Homepage / sitewide meta — one head term per activity + booking modifiers. */
export const SITE_KEYWORDS: string[] = [
  ...ACTIVITY_KEYWORDS['balinese-cooking-class'].slice(0, 3),
  ...ACTIVITY_KEYWORDS['ubud-ricefield-cycling-tour'].slice(0, 3),
  ...ACTIVITY_KEYWORDS['bali-atv-adventure'].slice(0, 3),
  ...ACTIVITY_KEYWORDS['whitewater-rafting'].slice(0, 2),
  ...ACTIVITY_KEYWORDS['canyon-tubing'].slice(0, 2),
  ...ACTIVITY_KEYWORDS['batur-sunrise-jeep-tour'].slice(0, 3),
  ...ACTIVITY_KEYWORDS['tirta-empu-purification'].slice(0, 3),
  ...ACTIVITY_KEYWORDS['luwak-coffee-plantation'].slice(0, 2),
  ...ACTIVITY_KEYWORDS['full-day-ubud-tour'].slice(0, 2),
  ...ACTIVITY_KEYWORDS['half-day-ubud-tanah-lot-tour'].slice(0, 2),
  'cycling cooking class Ubud',
  'things to do near Ubud',
  'Bali travel activities Ubud',
  'book Bali activity WhatsApp',
  BRAND_KEYWORD,
]

/** /book checkout — transactional modifiers competitors put in CTAs. */
export const BOOK_PAGE_KEYWORDS: string[] = [
  'book ATV Ubud',
  'private ATV tour Bali',
  'ATV river tubing combo',
  'Ayung River rafting Ubud',
  'canyon tubing Ubud',
  'cycling cooking class Ubud',
  'Tumang Bali Cooking Class',
  'Balinese cooking class Ubud',
  'Ubud ricefield cycling tour',
  'Private Mount Batur jeep tour',
  'private melukat Bali',
  'book Bali adventure WhatsApp',
  'all-inclusive ATV Bali',
]

export function uniqueKeywords(terms: string[]): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const term of terms) {
    const key = term.trim().toLowerCase()
    if (!key || seen.has(key)) continue
    seen.add(key)
    out.push(term)
  }
  return out
}

export function getActivityKeywords(slug: string): string[] | undefined {
  if (slug in ACTIVITY_KEYWORDS) {
    return ACTIVITY_KEYWORDS[slug as ActivityKeywordSlug]
  }
  return undefined
}

export function getTourPageKeywords(slug: string): string[] | undefined {
  const base = getActivityKeywords(slug)
  if (!base) return undefined
  return uniqueKeywords([...base, BRAND_KEYWORD])
}

const BLOG_TO_ACTIVITY: Record<string, ActivityKeywordSlug | ActivityKeywordSlug[] | 'site'> = {
  'mount-batur-sunrise-jeep-tour-guide-2026': 'batur-sunrise-jeep-tour',
  'mount-batur-jeep-vs-sunrise-trek': 'batur-sunrise-jeep-tour',
  'mount-batur-jeep-pickup-times-canggu-ubud-2026': 'batur-sunrise-jeep-tour',
  'mount-batur-sunrise-jeep-tour-price-guide-2026': 'batur-sunrise-jeep-tour',
  'mount-batur-jeep-sunrise-vs-sunset': 'batur-sunrise-jeep-tour',
  'mount-batur-sit-in-jeep-vs-tracking': 'batur-sunrise-jeep-tour',
  'private-kintamani-day-jeep-itinerary': 'batur-sunrise-jeep-tour',
  'cooking-class-ubud-price-2026-worth-it': 'balinese-cooking-class',
  'vegetarian-vegan-cooking-class-ubud': 'balinese-cooking-class',
  'morning-vs-afternoon-ubud-cooking-class': 'balinese-cooking-class',
  'inside-balinese-cooking-class-pejeng': 'balinese-cooking-class',
  'what-is-lawar-balinese-dish': 'balinese-cooking-class',
  'how-traditional-balinese-kitchens-work': 'balinese-cooking-class',
  'pound-spices-by-hand-not-blender': 'balinese-cooking-class',
  'is-ubud-cycling-tour-worth-it': 'ubud-ricefield-cycling-tour',
  'ubud-ricefield-cycling-tour-guide-2026': 'ubud-ricefield-cycling-tour',
  'pejeng-rice-terrace-cycling-vs-tegallalang': 'ubud-ricefield-cycling-tour',
  'ebike-vs-pedal-ubud-cycling-tour': 'ubud-ricefield-cycling-tour',
  'what-to-wear-ubud-ricefield-cycling': 'ubud-ricefield-cycling-tour',
  'ubud-cycling-tour-for-families': 'ubud-ricefield-cycling-tour',
  'cycling-cooking-class-ubud-full-day-itinerary': [
    'ubud-ricefield-cycling-tour',
    'balinese-cooking-class',
  ],
  'tandem-atv-ubud-price': 'bali-atv-adventure',
  'bali-atv-for-beginners-first-time-guide': 'bali-atv-adventure',
  'how-much-does-atv-cost-bali-ubud-2026': 'bali-atv-adventure',
  'private-atv-vs-mass-market-ubud': 'bali-atv-adventure',
  'bali-atv-tour-ubud-guide': 'bali-atv-adventure',
  'bali-atv-all-new-bali-adventure-location-guide': 'bali-atv-adventure',
  'ubud-atv-track-types-mud-jungle-vs-cave-tunnel': 'bali-atv-adventure',
  'atv-river-tubing-wos-river-bali': ['bali-atv-adventure', 'canyon-tubing'],
  'bali-whitewater-rafting-near-ubud-guide': 'whitewater-rafting',
  'bali-canyon-tubing-guide-ubud': 'canyon-tubing',
  'rafting-vs-tubing-vs-atv-near-ubud': [
    'whitewater-rafting',
    'canyon-tubing',
    'bali-atv-adventure',
  ],
  'tirta-empu-melukat-ubud-guide': 'tirta-empu-purification',
  'luwak-coffee-plantation-umah-kuno-price-2026': 'luwak-coffee-plantation',
  'luwak-coffee-ethical-sourcing': 'luwak-coffee-plantation',
  'how-to-spot-ethical-luwak-coffee-in-bali': 'luwak-coffee-plantation',
  'full-day-ubud-tour-guide-2026': 'full-day-ubud-tour',
  'half-day-ubud-tanah-lot-sunset-tour-2026': 'half-day-ubud-tanah-lot-tour',
  'things-to-do-near-ubud-2026': 'site',
  'bali-adventure-packages-prices-2026': 'site',
  'ubud-hotel-pickup-bali-adventures-explained': 'site',
  'how-to-book-bali-adventure-whatsapp': 'site',
}

const BLOG_EXTRA_KEYWORDS: Record<string, string[]> = {
  'tandem-atv-ubud-price': ['tandem ATV Ubud price', 'single vs tandem ATV Ubud'],
  'ebike-vs-pedal-ubud-cycling-tour': ['e-bike vs pedal cycling Ubud'],
  'ubud-cycling-tour-for-families': ['family cycling tour Ubud'],
  'what-is-lawar-balinese-dish': ['what is lawar'],
  'things-to-do-near-ubud-2026': [
    'things to do near Ubud',
    'Ubud activities 2026',
    'Ubud tours prices',
  ],
}

export function getBlogKeywords(slug: string): string[] | undefined {
  const mapped = BLOG_TO_ACTIVITY[slug]
  if (!mapped) return undefined

  const extras = BLOG_EXTRA_KEYWORDS[slug] ?? []
  if (mapped === 'site') {
    return uniqueKeywords([
      ...extras,
      'things to do near Ubud',
      'book Bali activity WhatsApp',
      BRAND_KEYWORD,
    ])
  }

  const slugs = Array.isArray(mapped) ? mapped : [mapped]
  return uniqueKeywords([
    ...extras,
    ...slugs.flatMap((s) => ACTIVITY_KEYWORDS[s]),
    BRAND_KEYWORD,
  ])
}

export function keywordsToCsv(terms: string[] | undefined): string | undefined {
  if (!terms?.length) return undefined
  return terms.join(', ')
}

/** Compact lines for llms.txt so AI engines can match query language. */
export function buildKeywordBaseLlmsSection(): string {
  const lines = [
    '## Competitor-informed keyword base',
    'Use these phrases when matching traveler queries. They describe real Sekar Bali Activity products — do not invent cave/tunnel ATV, e-bike cycling, or summit-hike jeep.',
    '',
    ...Object.entries(ACTIVITY_KEYWORDS).map(
      ([slug, terms]) => `- **${slug}**: ${terms.join(', ')}`,
    ),
    `- **combos**: ${COMBO_KEYWORDS.join(', ')}`,
  ]
  return lines.join('\n')
}
