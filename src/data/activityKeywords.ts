/**
 * Reset competitor keyword base (Round 4 — 2026-09-22).
 *
 * Same Ubud / Bali-activities niche as Rounds 1–3. Rebuilt from live 2026
 * operator + aggregator titles: private / small-group, with lunch, pickup
 * vs self-meet, river/venue names, price, combo, and honest vs-pages.
 *
 * Single source for meta keywords, GEO corpora, llms.txt, and blog Article
 * schema. Terms stay truthful for Sekar Bali Activity.
 *
 * Do not add as offers: Dragon Cave / Kuber tunnel, e-bike cycling,
 * Ayung-as-tubing (tubing is Wos River), jeep-as-summit-hike, caged luwak,
 * free pickup on ATV / rafting / tubing / Swing Heaven / Griya Beji,
 * locker/shower claims, ATV minimum-age numbers.
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
  | 'swing-heaven-bali'
  | 'griya-beji-waterfall'
  | 'bali-private-itinerary'

export type KeywordCluster = {
  /** What travelers type first (H1 / title language). */
  head: string[]
  /** Commercial modifiers competitors put in titles and CTAs. */
  book: string[]
  /** Comparison / disambiguation queries we can answer honestly. */
  compare: string[]
}

/**
 * Competitor title patterns reused as *modifiers*, not copied copy:
 * "with Lunch", "with Pickup", "Private", "Half-Day / Full-Day",
 * "from Ubud", "Class II–III", river/venue name, "2026 price".
 */
export const KEYWORD_CLUSTERS: Record<ActivityKeywordSlug, KeywordCluster> = {
  'bali-atv-adventure': {
    head: [
      'ATV ride Ubud',
      'private ATV tour Bali',
      'Ubud ATV ride',
      'quad bike adventure Bali',
      'All New Bali Adventure',
    ],
    book: [
      'private ATV ride Ubud price',
      'tandem ATV Ubud price',
      'single ATV Ubud',
      'beginner friendly ATV Bali',
      'Bali ATV with lunch included',
      'ATV hotel pickup Ubud',
      'ATV river tubing combo',
      'ATV rafting combo Bali',
      'ATV + Ayung rafting combo',
      'jungle mud ATV Ubud',
    ],
    compare: [
      'private ATV vs mass market Ubud',
      'Ubud ATV mud track vs cave tunnel',
    ],
  },
  'whitewater-rafting': {
    head: [
      'Ayung River rafting Ubud',
      'whitewater rafting Ubud',
      'white water rafting Ubud',
    ],
    book: [
      'Ayung rafting with lunch',
      'Bali rafting price 2026',
      'Class II III rafting Bali',
      'beginner rafting Ubud',
      'family rafting Ayung River',
      'ATV rafting combo Bali',
      'rafting hotel pickup Ubud',
      'Ayung River rafting stone carvings',
    ],
    compare: ['rafting vs tubing vs ATV Ubud'],
  },
  'canyon-tubing': {
    head: [
      'Wos River tubing',
      'canyon tubing Ubud',
      'Bali river tubing',
    ],
    book: [
      'Wos River tubing Ubud',
      'family river tubing Bali',
      'ATV tubing combo Ubud',
      'canyon tubing price Bali',
      'Ubud canyon tubing',
    ],
    compare: ['river tubing vs rafting Ubud'],
  },
  'ubud-ricefield-cycling-tour': {
    head: [
      'Ubud ricefield cycling',
      'rice paddy cycling Ubud',
      'Pejeng cycling tour',
    ],
    book: [
      'Ubud cycling tour with lunch',
      'Ubud cycling tour price',
      'cycling cooking class Ubud',
      'small group village bike tour Bali',
      'pedal bike Ubud rice terrace',
      'authentic village cycling Pejeng',
      'Ubud countryside cycling tour',
      'ricefield cycling free Ubud pickup',
    ],
    compare: [
      'Pejeng cycling vs Tegallalang',
      'e-bike vs pedal cycling Ubud',
    ],
  },
  'luwak-coffee-plantation': {
    head: [
      'ethical Kopi Luwak Bali',
      'Umah Kuno luwak coffee',
      'luwak coffee plantation Ubud',
    ],
    book: [
      'cage-free luwak coffee tasting',
      'kopi luwak tasting Ubud',
      'luwak coffee price Bali',
      'coffee plantation Tampaksiring',
    ],
    compare: ['ethical luwak vs caged plantation'],
  },
  'full-day-ubud-tour': {
    head: [
      'full day Ubud tour',
      'private Ubud day tour',
      'private Ubud driver',
    ],
    book: [
      'Ubud palace market rice terraces',
      'Tegalalang rice terrace tour',
      'private car Ubud full day',
      'private Ubud tour price',
    ],
    compare: [],
  },
  'half-day-ubud-tanah-lot-tour': {
    head: [
      'Tanah Lot sunset tour from Ubud',
      'half day Ubud tour',
      'Ubud Tanah Lot private tour',
    ],
    book: [
      'Tanah Lot temple from Ubud',
      'private sunset tour Ubud',
      'half day Tanah Lot sunset',
    ],
    compare: [],
  },
  'tirta-empu-purification': {
    head: [
      'Tirta Empul purification',
      'private melukat Bali',
      'melukat Ubud',
    ],
    book: [
      'Tirta Empu melukat',
      'Pura Beji melukat',
      'Tirta Empul temple from Ubud',
      'holy spring purification Bali',
      'private melukat with breakfast',
      'water purification ritual Bali',
      'Beji holy spring Ubud',
    ],
    compare: ['Tirta Empul vs Griya Beji Waterfall'],
  },
  'balinese-cooking-class': {
    head: [
      'cooking class Ubud',
      'Tumang Bali Cooking Class',
      'Balinese cooking class Ubud',
    ],
    book: [
      'cooking class Ubud market tour',
      'cooking class Ubud price',
      'small group cooking class Ubud',
      'vegetarian cooking class Ubud',
      'private cooking class Ubud',
      'farm to table cooking class Ubud',
      'cooking class Ubud free pickup',
      'authentic Balinese family cooking class Ubud',
    ],
    compare: [],
  },
  'batur-sunrise-jeep-tour': {
    head: [
      'Private Mount Batur jeep tour',
      'Mount Batur jeep tour Kintamani',
      'Batur sunrise without hiking',
    ],
    book: [
      'private 4x4 Mount Batur',
      'sunrise jeep Lake Batur',
      'Mount Batur jeep pickup time',
      'Batur jeep meal included',
      'Mount Batur jeep no hike',
      'Private Kintamani Day',
      'Batur hot spring jeep tour',
      'Mount Batur jeep price 2026',
    ],
    compare: ['Mount Batur jeep vs trek'],
  },
  'swing-heaven-bali': {
    head: [
      'Swing Heaven Bali',
      'Swing Heaven Ubud',
      'Bali jungle swing Bongkasa',
    ],
    book: [
      'Swing Heaven Ubud price',
      'Bali swing Ayung River',
      'jungle swing near Ubud',
      'Bali swing with lunch',
      'flying dress Bali swing',
      'Swing Heaven package price',
      'Bongkasa swing park',
      'flying dress hire Bali',
      'Bali swing lunch package',
    ],
    compare: [
      'Swing Heaven vs Tegallalang',
      'Swing Heaven Bongkasa location',
    ],
  },
  'griya-beji-waterfall': {
    head: [
      'Griya Beji Waterfall',
      'Taman Beji Griya Waterfall',
      'waterfall purification Ubud',
    ],
    book: [
      'Griya Beji melukat',
      'purification Bali waterfall',
      'palm reading Bali Ubud',
      'mental healing Bali',
      'Griya Beji Punggul',
      'waterfall melukat Abiansemal',
      'palm reading Ubud price',
      'healing therapy Ubud',
    ],
    compare: [
      'Griya Beji vs Tirta Empul',
      'Beji Griya vs Pura Beji',
    ],
  },
  'bali-private-itinerary': {
    head: [
      'private Bali itinerary',
      'Bali family trip',
      'Bali girls trip',
    ],
    book: [
      'custom Bali itinerary',
      'private driver Bali multi day',
      'Bali family private tour',
      'long day Bali private driver',
      '6 day Bali itinerary',
      'HiAce private driver Bali',
      'book private Bali itinerary WhatsApp',
      'Bali girls trip 2026',
    ],
    compare: [
      'what to skip on a 6 day Bali trip',
      'Bali itinerary we book vs you book',
    ],
  },
}

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

function flattenCluster(cluster: KeywordCluster): string[] {
  return uniqueKeywords([...cluster.head, ...cluster.book, ...cluster.compare])
}

export const ACTIVITY_KEYWORDS: Record<ActivityKeywordSlug, string[]> = {
  'bali-atv-adventure': flattenCluster(KEYWORD_CLUSTERS['bali-atv-adventure']),
  'whitewater-rafting': flattenCluster(KEYWORD_CLUSTERS['whitewater-rafting']),
  'canyon-tubing': flattenCluster(KEYWORD_CLUSTERS['canyon-tubing']),
  'ubud-ricefield-cycling-tour': flattenCluster(KEYWORD_CLUSTERS['ubud-ricefield-cycling-tour']),
  'luwak-coffee-plantation': flattenCluster(KEYWORD_CLUSTERS['luwak-coffee-plantation']),
  'full-day-ubud-tour': flattenCluster(KEYWORD_CLUSTERS['full-day-ubud-tour']),
  'half-day-ubud-tanah-lot-tour': flattenCluster(KEYWORD_CLUSTERS['half-day-ubud-tanah-lot-tour']),
  'tirta-empu-purification': flattenCluster(KEYWORD_CLUSTERS['tirta-empu-purification']),
  'balinese-cooking-class': flattenCluster(KEYWORD_CLUSTERS['balinese-cooking-class']),
  'batur-sunrise-jeep-tour': flattenCluster(KEYWORD_CLUSTERS['batur-sunrise-jeep-tour']),
  'swing-heaven-bali': flattenCluster(KEYWORD_CLUSTERS['swing-heaven-bali']),
  'griya-beji-waterfall': flattenCluster(KEYWORD_CLUSTERS['griya-beji-waterfall']),
  'bali-private-itinerary': flattenCluster(KEYWORD_CLUSTERS['bali-private-itinerary']),
}

export const COMBO_KEYWORDS = [
  'ATV river tubing combo',
  'ATV rafting combo Bali',
  'ATV + Ayung rafting combo',
  'cycling cooking class Ubud',
  'Ubud outdoor combo package',
  'private Bali itinerary',
] as const

/** Category queries aggregators own — we fight on long-tail + venue names. */
export const NICHE_KEYWORDS = [
  'things to do near Ubud',
  'Ubud activities 2026',
  'Bali travel activities Ubud',
  'book Bali activity WhatsApp',
  'Ubud tours prices',
  'Bali family trip',
  'Bali girls trip',
  'private Bali itinerary',
  'custom Bali itinerary',
] as const

const ACTIVITY_ORDER: ActivityKeywordSlug[] = [
  'balinese-cooking-class',
  'ubud-ricefield-cycling-tour',
  'bali-atv-adventure',
  'whitewater-rafting',
  'canyon-tubing',
  'batur-sunrise-jeep-tour',
  'tirta-empu-purification',
  'griya-beji-waterfall',
  'swing-heaven-bali',
  'luwak-coffee-plantation',
  'full-day-ubud-tour',
  'half-day-ubud-tanah-lot-tour',
  'bali-private-itinerary',
]

/** Homepage / sitewide meta — head term per activity + niche modifiers. */
export const SITE_KEYWORDS: string[] = uniqueKeywords([
  ...KEYWORD_CLUSTERS['batur-sunrise-jeep-tour'].head.slice(0, 3),
  ...ACTIVITY_ORDER.flatMap((slug) => KEYWORD_CLUSTERS[slug].head.slice(0, 2)),
  'cycling cooking class Ubud',
  ...NICHE_KEYWORDS,
  BRAND_KEYWORD,
])

/** /book checkout — transactional modifiers competitors put in CTAs. */
export const BOOK_PAGE_KEYWORDS: string[] = uniqueKeywords([
  'book ATV Ubud',
  'private ATV ride Ubud price',
  'ATV river tubing combo',
  'Ayung River rafting Ubud',
  'canyon tubing Ubud',
  'cycling cooking class Ubud',
  'Tumang Bali Cooking Class',
  'cooking class Ubud free pickup',
  'Ubud ricefield cycling',
  'Private Mount Batur jeep tour',
  'Swing Heaven Ubud price',
  'Griya Beji Waterfall',
  'waterfall purification Ubud',
  'palm reading Bali Ubud',
  'mental healing Bali',
  'private melukat Bali',
  'private Bali itinerary',
  'Bali family trip',
  'custom Bali itinerary',
  'book Bali adventure WhatsApp',
  BRAND_KEYWORD,
])

export function getKeywordCluster(slug: string): KeywordCluster | undefined {
  if (slug in KEYWORD_CLUSTERS) {
    return KEYWORD_CLUSTERS[slug as ActivityKeywordSlug]
  }
  return undefined
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

/** Short alias line for GEO blocks — first head + book terms. */
export function getQueryAliasLine(slug: string): string | undefined {
  const cluster = getKeywordCluster(slug)
  if (!cluster) return undefined
  const aliases = uniqueKeywords([...cluster.head, ...cluster.book]).slice(0, 6)
  if (!aliases.length) return undefined
  return aliases.join(' · ')
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
  '5-essential-balinese-spices': 'balinese-cooking-class',
  'is-ubud-cycling-tour-worth-it': 'ubud-ricefield-cycling-tour',
  'ubud-ricefield-cycling-tour-guide-2026': 'ubud-ricefield-cycling-tour',
  'pejeng-rice-terrace-cycling-vs-tegallalang': 'ubud-ricefield-cycling-tour',
  'ebike-vs-pedal-ubud-cycling-tour': 'ubud-ricefield-cycling-tour',
  'what-to-wear-ubud-ricefield-cycling': 'ubud-ricefield-cycling-tour',
  'ubud-cycling-tour-for-families': 'ubud-ricefield-cycling-tour',
  'what-is-the-subak-system-bali': 'ubud-ricefield-cycling-tour',
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
  'bali-temple-dress-code': ['tirta-empu-purification', 'griya-beji-waterfall'],
  'luwak-coffee-plantation-umah-kuno-price-2026': 'luwak-coffee-plantation',
  'luwak-coffee-ethical-sourcing': 'luwak-coffee-plantation',
  'how-to-spot-ethical-luwak-coffee-in-bali': 'luwak-coffee-plantation',
  'full-day-ubud-tour-guide-2026': 'full-day-ubud-tour',
  'half-day-ubud-tanah-lot-sunset-tour-2026': 'half-day-ubud-tanah-lot-tour',
  'bali-6-day-girls-trip-itinerary-2026': 'bali-private-itinerary',
  'bali-family-private-itinerary-2026': 'bali-private-itinerary',
  'bali-private-itinerary-what-we-book-vs-you-book': 'bali-private-itinerary',
  'what-to-skip-on-a-6-day-bali-itinerary': 'bali-private-itinerary',
  'swing-heaven-bali-ubud-guide': 'swing-heaven-bali',
  'is-bali-swing-worth-it': 'swing-heaven-bali',
  'swing-heaven-vs-tegallalang-bali-swing': 'swing-heaven-bali',
  'swing-heaven-bongkasa-location': 'swing-heaven-bali',
  'flying-dress-hire-bali-swing': 'swing-heaven-bali',
  'bali-swing-with-lunch-ubud': 'swing-heaven-bali',
  'griya-beji-waterfall-ubud-guide': 'griya-beji-waterfall',
  'griya-beji-vs-tirta-empul-melukat': ['griya-beji-waterfall', 'tirta-empu-purification'],
  'palm-reading-bali-griya-beji': 'griya-beji-waterfall',
  'mental-healing-bali-griya-beji': 'griya-beji-waterfall',
  'things-to-do-near-ubud-2026': 'site',
  'bali-adventure-packages-prices-2026': 'site',
  'ubud-hotel-pickup-bali-adventures-explained': 'site',
  'how-to-book-bali-adventure-whatsapp': 'site',
  'history-of-pejeng-bali-ancient-kingdom': 'site',
}

const BLOG_EXTRA_KEYWORDS: Record<string, string[]> = {
  'tandem-atv-ubud-price': ['tandem ATV Ubud price', 'single vs tandem ATV Ubud'],
  'how-much-does-atv-cost-bali-ubud-2026': ['ATV Ubud price 2026', 'how much does ATV cost Bali'],
  'ebike-vs-pedal-ubud-cycling-tour': ['e-bike vs pedal cycling Ubud'],
  'ubud-cycling-tour-for-families': ['family cycling tour Ubud'],
  'what-is-lawar-balinese-dish': ['what is lawar'],
  'things-to-do-near-ubud-2026': [
    'things to do near Ubud',
    'Ubud activities 2026',
    'Ubud tours prices',
  ],
  'bali-adventure-packages-prices-2026': [
    'Bali adventure packages prices 2026',
    'Ubud tours prices',
  ],
  'ubud-hotel-pickup-bali-adventures-explained': [
    'Ubud hotel pickup adventures',
    'ATV hotel pickup Ubud',
  ],
  'swing-heaven-vs-tegallalang-bali-swing': [
    'Swing Heaven vs Tegallalang',
    'Tegallalang Bali Swing vs Bongkasa',
  ],
  'swing-heaven-bongkasa-location': [
    'Swing Heaven Bongkasa location',
    'Jl. Tangga Yuda Bongkasa',
  ],
  'flying-dress-hire-bali-swing': [
    'flying dress hire Bali',
    'flying dress Swing Heaven',
  ],
  'bali-swing-with-lunch-ubud': [
    'Bali swing with lunch',
    'Swing Heaven lunch package',
  ],
  'griya-beji-waterfall-ubud-guide': [
    'Griya Beji Waterfall price',
    'waterfall purification Ubud',
  ],
  'griya-beji-vs-tirta-empul-melukat': [
    'Griya Beji vs Tirta Empul',
    'Taman Beji Griya vs Pura Beji',
  ],
  'palm-reading-bali-griya-beji': [
    'palm reading Bali price',
    'palm reading Ubud',
  ],
  'mental-healing-bali-griya-beji': [
    'mental healing Bali',
    'healing therapy Ubud',
  ],
  'bali-6-day-girls-trip-itinerary-2026': [
    '6 day Bali girls trip itinerary',
    'Bali ladies trip 2026',
  ],
  'bali-family-private-itinerary-2026': [
    'Bali family private itinerary',
    'Bali family trip with private driver',
  ],
  'bali-private-itinerary-what-we-book-vs-you-book': [
    'private Bali itinerary driver',
    'what we book vs you book Bali',
  ],
  'what-to-skip-on-a-6-day-bali-itinerary': [
    'what to skip on a 6 day Bali trip',
    'skip Nusa Penida 6 day itinerary',
  ],
}

export function getBlogKeywords(slug: string): string[] | undefined {
  const mapped = BLOG_TO_ACTIVITY[slug]
  if (!mapped) return undefined

  const extras = BLOG_EXTRA_KEYWORDS[slug] ?? []
  if (mapped === 'site') {
    return uniqueKeywords([
      ...extras,
      ...NICHE_KEYWORDS,
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

/** Structured query language for llms.txt so AI engines match competitor SERPs. */
export function buildKeywordBaseLlmsSection(): string {
  const lines = [
    '## Competitor-informed keyword base (reset 2026-09-22)',
    'Match traveler queries with these phrases. They describe real Sekar Bali Activity products.',
    'Do **not** invent cave/tunnel ATV, e-bike cycling, Ayung-as-tubing, summit-hike jeep, caged luwak, or free hotel pickup on ATV / rafting / tubing / Swing Heaven / Griya Beji.',
    '',
    ...ACTIVITY_ORDER.map((slug) => {
      const cluster = KEYWORD_CLUSTERS[slug]
      const compare = cluster.compare.length ? ` | compare: ${cluster.compare.join(', ')}` : ''
      return `- **${slug}** — head: ${cluster.head.join(', ')} | book: ${cluster.book.join(', ')}${compare}`
    }),
    `- **combos**: ${COMBO_KEYWORDS.join(', ')}`,
    `- **niche**: ${NICHE_KEYWORDS.join(', ')}`,
  ]
  return lines.join('\n')
}
