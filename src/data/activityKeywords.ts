/**
 * Competitor keyword base (Round 6 — 2026-09-23).
 *
 * Round 5 deepened ATV / cycling / purification / swing+cooking.
 * Round 6 targets page-1 commercial SERPs competitors still win with
 * dedicated *price* pages: Ayung rafting Ubud price, Wos River tubing
 * price, Batur jeep no-hike, and honest pickup-not-included language.
 *
 * Single source for meta keywords, GEO corpora, llms.txt, and blog Article
 * schema. Terms stay truthful for Sekar Bali Activity.
 *
 * Do not add as offers: Dragon Cave / Kuber tunnel, e-bike cycling,
 * Ayung-as-tubing (tubing is Wos River), jeep-as-summit-hike, caged luwak,
 * free pickup on ATV / rafting / tubing / Griya Beji,
 * locker/shower claims, ATV minimum-age numbers, Happy Swing tickets.
 */

import { resolveBaliSafariSlug } from '@/data/parkWorkshopTours'

export const BRAND_KEYWORD = 'Sekar Bali Activity'

export type ActivityKeywordSlug =
  | 'bali-atv-adventure'
  | 'atv-rafting-combo'
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
  | 'aloha-ubud-swing'
  | 'griya-beji-waterfall'
  | 'bali-private-itinerary'
  | 'bali-motorbike-traveling-trip'
  | 'licensed-tour-guide-bali'
  | 'atv-premium-package-bali'

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
      'Bali quad bike tour Ubud',
      'All New Bali Adventure', // money-page title must keep this phrase (venue #2 slot)
      'Bali ATV Ubud',
      'Bali ATV tour Ubud',
      'Bali Quad Bike',
    ],
    book: [
      'Best ATV in Bali Ubud',
      'ATV ride Bali location',
      'Bali ATV and rafting',
      'private ATV ride Ubud price',
      'how much is ATV in Ubud',
      'ATV Ubud price 2026',
      'Quad biking ubud price',
      'Ubud quad bike adventure',
      'Bali Quad biking',
      'Best ATV ride in Ubud',
      'Ubud Quad Biking reviews',
      'tandem ATV Ubud price',
      'single ATV Ubud',
      'beginner friendly ATV Bali',
      'Bali ATV with lunch included',
      'ATV hotel pickup Ubud',
      'best price ATV Ubud',
      'ATV Ubud best rate 2026',
      'good price ATV Ubud',
      'good price quad bike Ubud',
      'muddy quad bike Ubud',
      'muddy ATV Ubud',
      'muddy sport ATV Bali',
      'ATV river tubing combo',
      'ATV rafting combo Bali',
      'ATV + Ayung rafting combo',
      'jungle mud ATV Ubud',
      'ATV river crossing Ubud',
      'ATV Swing Heaven combo',
    ],
    compare: [
      'best ATV in Bali reddit',
      'private ATV vs mass market Ubud',
      'Ubud ATV mud track vs cave tunnel',
      'single vs tandem ATV Ubud',
      'All New Bali Adventure vs Kuber',
      'Kuber ATV vs Sedang ATV',
      'ATV vs UTV Bali',
      'Free quad biking ubud',
      'ATV tour Ubud waterfall',
      'Ubud ATV Quad Bike adventure with Gorilla Cave and lunch',
    ],
  },
  'atv-rafting-combo': {
    head: [
      'ATV rafting combo Bali',
      'ATV + rafting Ubud',
      'ATV and rafting package Bali',
      'ATV single + rafting Ubud',
    ],
    book: [
      'ATV rafting combo Ubud price',
      'book ATV and rafting Ubud',
      'ATV Ayung rafting combo 2026',
      'land and water Bali adventure',
      'ATV rafting with lunch Ubud',
      'tandem ATV rafting Ubud',
      'ATV tandem + rafting combo',
      'couple ATV rafting Ubud',
    ],
    compare: [
      'ATV rafting vs ATV tubing',
      'ATV + rafting vs booking separate',
      'single vs tandem ATV rafting',
    ],
  },
  'atv-premium-package-bali': {
    head: [
      'ATV premium package Bali',
      'private ATV package Bali',
      'group ATV package Ubud',
      'ATV package with private transfer Bali',
      'ATV rafting premium package Bali',
    ],
    book: [
      'ATV package Bali price 2026',
      'single and tandem ATV package',
      'family ATV package Bali',
      'ATV Bali with hotel pickup',
      'ATV for 3 4 5 people Bali',
      'private shuttle ATV Ubud',
      'ATV and rafting package with private transfer',
      'ATV rafting package for 2 Bali',
    ],
    compare: [
      'ATV package vs booking separately',
      'single vs tandem ATV for groups',
    ],
  },
  'whitewater-rafting': {
    head: [
      'Ayung River rafting Ubud',
      'whitewater rafting Ubud',
      'white water rafting Ubud',
      'Ayung rafting Ubud price',
    ],
    book: [
      'Ayung rafting with lunch',
      'Bali rafting price 2026',
      'rafting Ubud price 2026',
      'how much is rafting in Ubud',
      'best price rafting Ubud',
      'Ayung rafting best rate 2026',
      'Class II III rafting Bali',
      'beginner rafting Ubud',
      'family rafting Ayung River',
      'ATV rafting combo Bali',
      'rafting hotel pickup Ubud',
      'Ayung River rafting stone carvings',
      'Ayung rafting lunch included',
    ],
    compare: [
      'rafting vs tubing vs ATV Ubud',
      'Ayung rafting vs cheap group ticket',
    ],
  },
  'canyon-tubing': {
    head: [
      'Wos River tubing',
      'canyon tubing Ubud',
      'Bali river tubing',
      'Wos River tubing price',
    ],
    book: [
      'Wos River tubing Ubud',
      'family river tubing Bali',
      'ATV tubing combo Ubud',
      'canyon tubing price Bali',
      'canyon tubing Ubud price 2026',
      'how much is river tubing Ubud',
      'Ubud canyon tubing',
      'Wos tubing ticket only',
    ],
    compare: [
      'river tubing vs rafting Ubud',
      'Wos tubing vs Ayung rafting',
    ],
  },
  'ubud-ricefield-cycling-tour': {
    head: [
      'Ubud ricefield cycling',
      'rice paddy cycling Ubud',
      'Pejeng cycling tour',
      'village bike tour Ubud',
      'Subak cycling Ubud',
    ],
    book: [
      'Ubud cycling tour with lunch',
      'Ubud cycling tour price',
      'cycling cooking class Ubud',
      'cycling and cooking class in Ubud',
      'small group village bike tour Bali',
      'pedal bike Ubud rice terrace',
      'authentic village cycling Pejeng',
      'Ubud countryside cycling tour',
      'ricefield cycling free Ubud pickup',
      'best price cycling Ubud',
      'Ubud cycling tour best rate',
      'rice field bike tour Ubud',
    ],
    compare: [
      'Pejeng cycling vs Tegallalang',
      'e-bike vs pedal cycling Ubud',
      'cycling vs cooking class Ubud',
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
  'licensed-tour-guide-bali': {
    head: [
      'licensed tour guide Bali',
      'Bali tour guide',
      'private tour guide Bali',
      'Japanese speaking guide Bali',
      'French speaking guide Bali',
      'English speaking guide Bali',
      'Withlocals Bali alternative',
      'Bali private guide marketplace alternative',
    ],
    book: [
      'hire a tour guide in Bali',
      'Bali tour guide price',
      'Bali guide per hour',
      'licensed guide Ubud',
      'guide only no driver Bali',
      'book licensed guide Bali WhatsApp',
    ],
    compare: [
      'licensed guide vs driver guide Bali',
      'do I need a licensed guide in Bali',
      'Bali tour guide license KTPP',
      'Withlocals vs licensed guide Bali',
      'Withlocals Bali guide alternative',
      'marketplace local guide vs KTPP Bali',
    ],
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
      'Tirta Empul water purification ceremony',
      'melukat ceremony Ubud',
    ],
    book: [
      'Tirta Empu melukat',
      'Pura Beji melukat',
      'Tirta Empul temple from Ubud',
      'holy spring purification Bali',
      'private melukat with breakfast',
      'water purification ritual Bali',
      'Beji holy spring Ubud',
      'private Tirta Empul tour with pickup',
      'spiritual cleansing Bali',
      'Tirta Empul from Ubud with breakfast',
      'melukat cooking class Ubud',
    ],
    compare: [
      'Tirta Empul vs Griya Beji Waterfall',
      'private melukat vs walk-in ticket',
    ],
  },
  'balinese-cooking-class': {
    head: [
      'cooking class Ubud',
      'Tumang Bali Cooking Class',
      'Balinese cooking class Ubud',
      'hands-on cooking class Ubud',
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
      'cycling and cooking class in Ubud',
      'cooking class jungle swing Ubud',
      'Swing Heaven cooking class Ubud',
    ],
    compare: [
      'cycling vs cooking class Ubud',
      'Swing Heaven vs cooking class day',
    ],
  },
  'batur-sunrise-jeep-tour': {
    head: [
      'Private Mount Batur jeep tour',
      'Mount Batur jeep tour Kintamani',
      'Batur sunrise without hiking',
      'Jeep tour Mount Batur sunrise',
      'Mount Batur 4WD Jeep',
      'Mount Batur Jeep Tour price',
    ],
    book: [
      'Mount Batur sunrise Jeep tour from Ubud',
      'Mount Batur Sunrise Jeep Tour Natural Hot Spring',
      'Jeep tour Mount Batur cost',
      'Mount Batur jeep tour time',
      'private 4x4 Mount Batur',
      'sunrise jeep Lake Batur',
      'Mount Batur jeep pickup time',
      'Batur jeep breakfast included',
      'Mount Batur jeep no hike',
      'Mount Batur sunrise no hiking required',
      'Private Kintamani Day',
      'Batur hot spring jeep tour',
      'Mount Batur jeep price 2026',
    ],
    compare: ['Mount Batur jeep vs trek', 'Jeep tour Mount Batur reviews'],
  },
  'swing-heaven-bali': {
    head: [
      'Swing Heaven Bali',
      'Swing Heaven Ubud',
      'Bali jungle swing Bongkasa',
      'Bali jungle swing Ubud',
      'Swing Heaven photo spots',
      'Swing Heaven bird nest',
    ],
    book: [
      'Swing Heaven Ubud price',
      'Bali swing Ayung River',
      'jungle swing near Ubud',
      'Bali swing with lunch',
      'flying dress Bali swing',
      'Swing Heaven package price',
      'Swing Heaven price 2026',
      'Bongkasa swing park',
      'flying dress hire Bali',
      'Bali swing lunch package',
      'Swing Heaven cooking class Ubud',
      'jungle swing and cooking class Ubud',
      'ATV Swing Heaven combo',
      'Swing Heaven Stairs 2 Heaven',
      'Swing Heaven koi pond boat',
      'Swing Heaven onion nest',
      'Swing Heaven heart nest',
      'what is Bali jungle swing',
      'why spend on Bali swing',
      'Bali swing Instagram',
      'Bali swing Reels',
      'Bali swing TikTok',
      'Bali swing couples photos',
      'Bali swing honeymoon',
      'is Bali swing worth the money',
    ],
    compare: [
      'Swing Heaven vs Tegallalang',
      'Swing Heaven Bongkasa location',
      'Swing Heaven vs Happy Swing',
      'Swing Heaven vs Aloha Ubud Swing',
    ],
  },
  'aloha-ubud-swing': {
    head: [
      'Aloha Ubud Swing',
      'Aloha Swing Tegallalang',
      'Bali swing Tegallalang',
      'Ubud swing Tegallalang',
      'Aloha Ubud Swing price',
    ],
    book: [
      'Aloha Ubud Swing Active Package',
      'Aloha Swing price 2026',
      'Tegallalang swing package',
      'Aloha Ubud Swing dress hire',
      'Aloha Ubud Swing photographer',
      'Bali swing with shuttle Ubud',
      'Aloha chicken nest Tegallalang',
      'Aloha bird nest Ubud',
    ],
    compare: [
      'Aloha Ubud Swing vs Swing Heaven',
      'Aloha Swing Tegallalang location',
      'Tegallalang swing vs Bongkasa',
    ],
  },
  'griya-beji-waterfall': {
    head: [
      'Griya Beji Waterfall',
      'Taman Beji Griya Waterfall',
      'waterfall purification Ubud',
      'Griya Beji waterfall purification',
    ],
    book: [
      'Griya Beji melukat',
      'purification Bali waterfall',
      'waterfall purification ceremony Ubud',
      'palm reading Bali Ubud',
      'mental healing Bali',
      'Griya Beji Punggul',
      'waterfall melukat Abiansemal',
      'palm reading Ubud price',
      'healing therapy Ubud',
      'Griya Beji cooking class Ubud',
    ],
    compare: [
      'Griya Beji vs Tirta Empul',
      'Beji Griya vs Pura Beji',
      'waterfall purification vs Tirta Empul ceremony',
    ],
  },
  'bali-private-itinerary': {
    head: [
      'private Bali itinerary',
      'Bali family trip',
      'Bali girls trip',
      'long private driver day Ubud',
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
      'private family Bali itinerary 2026',
    ],
    compare: [
      'what to skip on a 6 day Bali trip',
      'Bali itinerary we book vs you book',
    ],
  },
  'bali-motorbike-traveling-trip': {
    head: [
      'Bali motorbike tour',
      'Bali scooter tour Ubud',
      'guided motorbike trip Bali',
    ],
    book: [
      'Bali motorbike tour price',
      'Bali scooter tour from Ubud',
      'Ubud motorbike traveling trip',
      'Bali scooter day trip price',
      'best price scooter tour Bali',
      'best price motorbike tour Ubud',
      'Ubud waterfall scooter tour',
      'Bali motorbike tour IDP',
      'East Bali motorbike tour',
      'South Bali scooter tour',
      'Kintamani scooter tour',
      'Canggu motorbike tour pickup',
      'Nusa Dua scooter tour shuttle',
      'Bali tour for Japanese travelers',
      'Bali tour for Korean travelers',
      'Bali tour for Chinese travelers',
      'Bali tour for Middle East travelers',
      'UAE Bali tour English booking',
    ],
    compare: [
      'Bali motorbike tour vs private driver',
      'Bali scooter tour vs ATV',
      'Bali motorbike tour vs dirt bike',
      'Kintamani scooter vs Batur jeep',
      'which Bali activity to book',
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
  'atv-rafting-combo': flattenCluster(KEYWORD_CLUSTERS['atv-rafting-combo']),
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
  'aloha-ubud-swing': flattenCluster(KEYWORD_CLUSTERS['aloha-ubud-swing']),
  'griya-beji-waterfall': flattenCluster(KEYWORD_CLUSTERS['griya-beji-waterfall']),
  'bali-private-itinerary': flattenCluster(KEYWORD_CLUSTERS['bali-private-itinerary']),
  'bali-motorbike-traveling-trip': flattenCluster(KEYWORD_CLUSTERS['bali-motorbike-traveling-trip']),
  'licensed-tour-guide-bali': flattenCluster(KEYWORD_CLUSTERS['licensed-tour-guide-bali']),
  'atv-premium-package-bali': flattenCluster(KEYWORD_CLUSTERS['atv-premium-package-bali']),
}

export const COMBO_KEYWORDS = [
  'ATV river tubing combo',
  'ATV rafting combo Bali',
  'ATV + Ayung rafting combo',
  'ATV single + rafting Ubud',
  'tandem ATV rafting Ubud',
  'ATV tubing combo Ubud',
  'ATV Swing Heaven combo',
  'cycling cooking class Ubud',
  'cycling and cooking class in Ubud',
  'jungle swing and cooking class Ubud',
  'Swing Heaven cooking class Ubud',
  'cooking class jungle swing Ubud',
  'melukat cooking class Ubud',
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
  'Bali Safari ticket',
  'Bali Safari package comparison',
  'Bali canyoning',
  'Bali Bird Park',
  'Bali Zoo elephant mud fun',
  'Ubud batik class',
  'Ubud silver class',
  'Kintamani dirt bike',
  'UTV buggy Bali',
  'Bali motorbike tour',
  'Bali scooter tour Ubud',
] as const

const ACTIVITY_ORDER: ActivityKeywordSlug[] = [
  'balinese-cooking-class',
  'ubud-ricefield-cycling-tour',
  'bali-atv-adventure',
  'atv-rafting-combo',
  'atv-premium-package-bali',
  'whitewater-rafting',
  'canyon-tubing',
  'batur-sunrise-jeep-tour',
  'tirta-empu-purification',
  'griya-beji-waterfall',
  'swing-heaven-bali',
  'aloha-ubud-swing',
  'luwak-coffee-plantation',
  'full-day-ubud-tour',
  'half-day-ubud-tanah-lot-tour',
  'bali-private-itinerary',
  'bali-motorbike-traveling-trip',
  'licensed-tour-guide-bali',
]

/** Homepage / sitewide meta — head term per activity + niche modifiers. */
export const SITE_KEYWORDS: string[] = uniqueKeywords([
  ...KEYWORD_CLUSTERS['batur-sunrise-jeep-tour'].head.slice(0, 3),
  ...ACTIVITY_ORDER.flatMap((slug) => KEYWORD_CLUSTERS[slug].head.slice(0, 2)),
  'Tirta Empul water purification ceremony',
  'Bali Bird Park',
  'Bali Safari ticket',
  'Bali canyoning',
  'Ubud batik class',
  ...NICHE_KEYWORDS,
  BRAND_KEYWORD,
])

/**
 * Keyword jobs (avoid cannibalization):
 * - `/` owns brand + jeep/cooking/ATV discovery (SITE_KEYWORDS)
 * - `/experiences` owns catalog browse — not money-page heads
 * - `/book` owns WhatsApp checkout + combo handoff — not "ATV ride Ubud"
 * - `/tours/[slug]` owns commercial head terms
 * - `/blog/*` owns how / vs / worth / when / where (compare + extras only)
 * - `/planners` owns calculator / checker tool intent — not money-page heads
 */
export const EXPERIENCES_PAGE_KEYWORDS: string[] = uniqueKeywords([
  'browse Ubud experiences',
  'Sekar Bali Activity catalog',
  'Ubud activity list',
  BRAND_KEYWORD,
])

export const PLANNERS_PAGE_KEYWORDS: string[] = uniqueKeywords([
  'Bali activity calculator',
  'ATV Ubud price calculator',
  'hotel pickup checker Ubud',
  'Mount Batur jeep calculator',
  'Bali motorbike tour calculator',
  'cooking class Ubud calculator',
  BRAND_KEYWORD,
])

/** /book checkout — transactional modifiers competitors put in CTAs. */
export const BOOK_PAGE_KEYWORDS: string[] = uniqueKeywords([
  'book Bali adventure WhatsApp',
  'WhatsApp checkout Ubud',
  'ATV river tubing combo',
  'ATV rafting combo Bali',
  'book ATV and rafting Ubud',
  'best price ATV Ubud',
  'best price rafting Ubud',
  'best price cycling Ubud',
  'best price scooter tour Bali',
  'cycling cooking class Ubud',
  'jungle swing and cooking class Ubud',
  'Swing Heaven cooking class Ubud',
  BRAND_KEYWORD,
])

/** Park tickets and Ubud workshops we book (imported catalog — +IDR 200K vs source from-price). */
export const PARK_WORKSHOP_KEYWORD_CLUSTERS: Record<string, KeywordCluster> = {
  'bali-bird-park': {
    head: ['Bali Bird Park', 'Bali Bird Park ticket', 'Bali Bird Park Batubulan'],
    book: [
      'Bali Bird Park price 2026',
      'Bali Bird Park from Ubud',
      'Bali Bird Park with pickup',
      'family bird park Bali',
    ],
    compare: ['Bali Bird Park vs Bali Zoo'],
  },
  'elephant-mud-fun-at-bali-zoo-park': {
    head: ['Bali Zoo elephant mud fun', 'elephant mud fun Bali', 'Bali Zoo ticket'],
    book: [
      'Bali Zoo elephant price 2026',
      'Bali Zoo mud fun Ubud',
      'Bali Zoo elephant mud fun with lunch',
    ],
    compare: ['Bali Zoo vs Bali Safari', 'Bali Zoo vs Taro elephant'],
  },
  'bali-safari-and-marine-park': {
    head: [
      'Bali Safari ticket',
      'Bali Safari and Marine Park',
      'Bali Safari Jungle Hopper',
      'Bali Safari from Ubud',
      'Bali Safari night safari',
      'Bali Safari elephant ride',
    ],
    book: [
      'Bali Safari Jungle Hopper price',
      'cheapest Bali Safari ticket',
      'Bali Safari Dragon package price',
      'Bali Safari with lunch',
      'Bali Safari Leopard package price',
      'Bali Safari elephant ride 10 minutes',
      'Bali Safari Rhino package price',
      'Bali Safari unlimited safari',
      'Bali Safari elephant ride price',
      '30 minute elephant ride Bali Safari',
      'Bali Safari night package price',
      'Bali Safari night safari from Ubud',
    ],
    compare: [
      'Jungle Hopper vs Dragon Bali Safari',
      'Leopard vs Dragon Bali Safari',
      'Rhino vs Leopard Bali Safari',
      'Bali Safari night vs day',
      'Bali Safari night vs Taro dinner',
      'elephant ride Bali Safari vs Taro',
    ],
  },
  canyoning: {
    head: ['Bali canyoning', 'canyoning Ubud', 'Kalimudah canyon Bali'],
    book: [
      'Bali canyoning price 2026',
      'Bali canyoning from Ubud',
      'family canyoning Bali',
    ],
    compare: ['canyoning vs canyon tubing Bali', 'canyoning vs UTV buggy'],
  },
  'night-safari-dinner-under-the-stars-elephant-safari-park-lodge': {
    head: ['Taro night safari dinner', 'Elephant Safari Park Lodge dinner'],
    book: ['Taro elephant park dinner price', 'Taro night safari from Ubud'],
    compare: ['Taro night safari vs Bali Safari night'],
  },
  'jungle-safari-ride-and-lunch-elephant-safari-park-lodge': {
    head: ['Taro elephant jungle ride', 'Elephant Safari Park Lodge'],
    book: ['Taro elephant ride lunch price', 'Taro elephant safari from Ubud'],
    compare: ['Taro elephant ride vs Bali Safari'],
  },
  'utv-buggy-bali-adventure': {
    head: ['UTV buggy Bali', 'Bali Buggy Adventures', 'UTV ride Bali'],
    book: [
      'UTV buggy Bali price',
      'single UTV buggy Bali',
      'tandem UTV buggy Bali',
    ],
    compare: ['UTV vs ATV Ubud'],
  },
  'dirt-bike-kintamani-black-lava': {
    head: ['Kintamani dirt bike', 'Bali enduro Kintamani', 'black lava dirt bike Bali'],
    book: ['Kintamani black lava dirt bike price', 'KTM 250 enduro Bali'],
    compare: ['dirt bike vs Mount Batur jeep'],
  },
  'silver-making-class': {
    head: ['silver making class Ubud', 'Celuk silver class'],
    book: ['Ubud silver class price', 'silver class 5 grams Bali'],
    compare: ['silver class vs batik class Ubud'],
  },
  'batik-class': {
    head: ['batik class Ubud', 'batik workshop Bali'],
    book: ['Ubud batik class price', '3 hour batik class Ubud'],
    compare: ['batik vs silver class Ubud'],
  },
}

export function getKeywordCluster(slug: string): KeywordCluster | undefined {
  const resolved = resolveBaliSafariSlug(slug)
  if (resolved in KEYWORD_CLUSTERS) {
    return KEYWORD_CLUSTERS[resolved as ActivityKeywordSlug]
  }
  return PARK_WORKSHOP_KEYWORD_CLUSTERS[resolved]
}

export function getActivityKeywords(slug: string): string[] | undefined {
  const resolved = resolveBaliSafariSlug(slug)
  if (resolved in ACTIVITY_KEYWORDS) {
    return ACTIVITY_KEYWORDS[resolved as ActivityKeywordSlug]
  }
  const extra = PARK_WORKSHOP_KEYWORD_CLUSTERS[resolved]
  return extra ? flattenCluster(extra) : undefined
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
  'what-is-base-genep-balinese-spice-paste-guide': 'balinese-cooking-class',
  'top-5-traditional-balinese-foods': 'balinese-cooking-class',
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
  'swing-heaven-cooking-class-ubud': ['swing-heaven-bali', 'balinese-cooking-class'],
  'tandem-atv-ubud-price': 'bali-atv-adventure',
  'bali-atv-for-beginners-first-time-guide': 'bali-atv-adventure',
  'how-much-does-atv-cost-bali-ubud-2026': 'bali-atv-adventure',
  'ubud-quad-biking-price-2026': 'bali-atv-adventure',
  'ubud-muddy-quad-bike-atv-2026': 'bali-atv-adventure',
  'good-price-atv-quad-bike-ubud-2026': 'bali-atv-adventure',
  'private-atv-vs-mass-market-ubud': 'bali-atv-adventure',
  'bali-atv-tour-ubud-guide': 'bali-atv-adventure',
  'bali-atv-all-new-bali-adventure-location-guide': 'bali-atv-adventure',
  'ubud-atv-track-types-mud-jungle-vs-cave-tunnel': 'bali-atv-adventure',
  'atv-river-tubing-wos-river-bali': ['bali-atv-adventure', 'canyon-tubing'],
  'atv-rafting-combo-ubud-2026': ['atv-rafting-combo', 'bali-atv-adventure', 'whitewater-rafting'],
  'atv-tandem-rafting-ubud-2026': ['atv-rafting-combo', 'bali-atv-adventure', 'whitewater-rafting'],
  'best-price-atv-rafting-cycling-scooter-ubud-2026': [
    'bali-atv-adventure',
    'whitewater-rafting',
    'ubud-ricefield-cycling-tour',
    'bali-motorbike-traveling-trip',
  ],
  'bali-whitewater-rafting-near-ubud-guide': 'whitewater-rafting',
  'rafting-ubud-price-2026': 'whitewater-rafting',
  'bali-canyon-tubing-guide-ubud': 'canyon-tubing',
  'wos-river-tubing-price-2026': 'canyon-tubing',
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
  'atv-premium-package-bali-2026': ['atv-premium-package-bali', 'bali-atv-adventure'],
  'group-atv-package-ubud-2026': ['atv-premium-package-bali', 'bali-atv-adventure'],
  'atv-package-private-transfer-bali-2026': ['atv-premium-package-bali', 'bali-atv-adventure'],
  'private-shuttle-vs-grab-bali-activities-2026': ['bali-atv-adventure', 'whitewater-rafting', 'canyon-tubing'],
  'atv-rafting-premium-package-2026': ['atv-premium-package-bali', 'atv-rafting-combo'],
  'family-atv-package-ubud-2026': ['atv-premium-package-bali', 'bali-atv-adventure'],
  'atv-premium-promo-deal-ubud-2026': ['atv-premium-package-bali', 'bali-atv-adventure'],
  'licensed-tour-guide-bali-2026': 'licensed-tour-guide-bali',
  'withlocals-bali-guide-alternative-2026': 'licensed-tour-guide-bali',
  'japanese-speaking-guide-bali-2026': 'licensed-tour-guide-bali',
  'japanese-guide-bali-price-2026': 'licensed-tour-guide-bali',
  'japanese-guide-with-private-driver-bali-2026': 'licensed-tour-guide-bali',
  'japanese-licensed-guide-ubud-day-2026': ['licensed-tour-guide-bali', 'full-day-ubud-tour'],
  'tirta-empul-with-japanese-guide-2026': ['licensed-tour-guide-bali', 'tirta-empu-purification'],
  'french-speaking-guide-bali-2026': 'licensed-tour-guide-bali',
  'is-a-tour-guide-worth-it-bali-2026': 'licensed-tour-guide-bali',
  'bali-temples-with-a-guide-2026': ['licensed-tour-guide-bali', 'tirta-empu-purification'],
  'first-time-in-bali-local-guide-2026': ['licensed-tour-guide-bali', 'full-day-ubud-tour'],
  'half-day-ubud-tanah-lot-sunset-tour-2026': 'half-day-ubud-tanah-lot-tour',
  'bali-motorbike-tour-price-2026': 'bali-motorbike-traveling-trip',
  'bali-tours-for-japanese-chinese-travelers-2026': 'bali-motorbike-traveling-trip',
  'bali-motorbike-tour-vs-private-driver-2026': 'bali-motorbike-traveling-trip',
  'bali-scooter-tour-vs-atv-2026': ['bali-motorbike-traveling-trip', 'bali-atv-adventure'],
  'bali-motorbike-tour-vs-dirt-bike-2026': 'bali-motorbike-traveling-trip',
  'ubud-waterfall-scooter-tour-2026': 'bali-motorbike-traveling-trip',
  'bali-motorbike-tour-idp-license-2026': 'bali-motorbike-traveling-trip',
  'east-south-bali-motorbike-tour-2026': 'bali-motorbike-traveling-trip',
  'kintamani-scooter-vs-batur-jeep-2026': ['bali-motorbike-traveling-trip', 'batur-sunrise-jeep-tour'],
  'bali-october-november-december-2026-deals': ['whitewater-rafting', 'batur-sunrise-jeep-tour'],
  'bali-rafting-rainy-season-oct-dec-2026': 'whitewater-rafting',
  'mount-batur-jeep-new-year-sunrise-2026': 'batur-sunrise-jeep-tour',
  'kintamani-dirt-bike-rainy-season-2026': 'site',
  'atv-rafting-from-seminyak-canggu-kuta-2026': ['bali-atv-adventure', 'whitewater-rafting', 'atv-rafting-combo'],
  'best-atv-bali-ubud-2026': 'bali-atv-adventure',
  'bali-atv-ride-locations-2026': 'bali-atv-adventure',
  'mount-batur-sunrise-jeep-hot-spring-2026': 'batur-sunrise-jeep-tour',
  'mount-batur-jeep-tour-reviews-2026': 'batur-sunrise-jeep-tour',
  'bali-atv-rafting-jeep-with-kids-2026': ['whitewater-rafting', 'bali-atv-adventure', 'batur-sunrise-jeep-tour'],
  'mount-batur-jeep-tour-whats-included-2026': 'batur-sunrise-jeep-tour',
  'ubud-2-day-adventure-plan-jeep-atv-rafting-2026': ['batur-sunrise-jeep-tour', 'atv-rafting-combo'],
  'bali-atv-vs-kuber-cave-2026': 'bali-atv-adventure',
  'bali-atv-vs-utv-buggy-2026': 'bali-atv-adventure',
  'which-bali-wheels-2026': 'site',
  'bali-6-day-girls-trip-itinerary-2026': 'bali-private-itinerary',
  'bali-family-private-itinerary-2026': 'bali-private-itinerary',
  'bali-private-itinerary-what-we-book-vs-you-book': 'bali-private-itinerary',
  'what-to-skip-on-a-6-day-bali-itinerary': 'bali-private-itinerary',
  'long-private-driver-day-ubud-2026': 'bali-private-itinerary',
  'bali-safari-packages-compared-2026': 'site',
  'bali-zoo-vs-bali-safari-vs-taro': 'site',
  'bali-canyoning-vs-tubing-vs-buggies': ['canyon-tubing', 'bali-atv-adventure'],
  'ubud-workshop-classes-2026': 'site',
  'kintamani-dirt-bike-vs-batur-jeep': 'batur-sunrise-jeep-tour',
  'bali-bird-park-from-ubud-2026': 'site',
  'swing-heaven-bali-ubud-guide': 'swing-heaven-bali',
  'swing-heaven-package-price-2026': 'swing-heaven-bali',
  'swing-heaven-photo-spots-bali-2026': 'swing-heaven-bali',
  'swing-heaven-bird-nest-bali-2026': 'swing-heaven-bali',
  'swing-heaven-atv-combo-ubud-2026': ['swing-heaven-bali', 'bali-atv-adventure'],
  'is-bali-swing-worth-it': 'swing-heaven-bali',
  'what-is-bali-jungle-swing-2026': 'swing-heaven-bali',
  'why-spend-on-bali-swing-2026': 'swing-heaven-bali',
  'bali-swing-instagram-moments-2026': 'swing-heaven-bali',
  'bali-swing-couples-honeymoon-photos-2026': 'swing-heaven-bali',
  'swing-heaven-vs-tegallalang-bali-swing': ['swing-heaven-bali', 'aloha-ubud-swing'],
  'swing-heaven-bongkasa-location': 'swing-heaven-bali',
  'flying-dress-hire-bali-swing': 'swing-heaven-bali',
  'bali-swing-with-lunch-ubud': 'swing-heaven-bali',
  'aloha-ubud-swing-price-2026': 'aloha-ubud-swing',
  'aloha-ubud-swing-tegallalang-guide-2026': 'aloha-ubud-swing',
  'aloha-ubud-swing-vs-swing-heaven-2026': ['aloha-ubud-swing', 'swing-heaven-bali'],
  'griya-beji-waterfall-ubud-guide': 'griya-beji-waterfall',
  'griya-beji-vs-tirta-empul-melukat': ['griya-beji-waterfall', 'tirta-empu-purification'],
  'palm-reading-bali-griya-beji': 'griya-beji-waterfall',
  'mental-healing-bali-griya-beji': 'griya-beji-waterfall',
  'whats-new-in-bali-ubud-2026': 'site',
  'things-to-do-near-ubud-2026': 'site',
  'bali-adventure-packages-prices-2026': 'site',
  'ubud-hotel-pickup-bali-adventures-explained': 'site',
  'how-to-book-bali-adventure-whatsapp': 'site',
  'history-of-pejeng-bali-ancient-kingdom': 'site',
}

const BLOG_EXTRA_KEYWORDS: Record<string, string[]> = {
  'atv-premium-package-bali-2026': [
    'ATV premium package Bali 2026',
    'ATV package with private shuttle',
    'Bali ATV group discount',
  ],
  'group-atv-package-ubud-2026': [
    'ATV for a group of 3 Bali',
    'ATV for 4 people Ubud',
    'ATV for 5 people Bali',
    'family ATV Ubud tandem',
  ],
  'atv-rafting-premium-package-2026': [
    'ATV rafting package Bali 2026',
    'ATV and rafting with private driver',
    'Land and River package Ubud',
    'ATV rafting no tubing',
  ],
  'family-atv-package-ubud-2026': [
    'family ATV package Ubud',
    'family ATV Bali with kids',
    'ATV for families near Ubud',
    'kids tandem ATV Bali',
    'family adventure package Ubud price',
  ],
  'atv-premium-promo-deal-ubud-2026': [
    'ATV promo Ubud 2026',
    'ATV deal Bali package',
    'best ATV package deal Ubud',
    'ATV discount Bali premium package',
    'cheap ATV Ubud worth it',
  ],
  'private-shuttle-vs-grab-bali-activities-2026': [
    'Grab to ATV Ubud',
    'private shuttle ATV rafting Ubud',
    'driver waits during rafting Bali',
    'Ubud activity transport Grab or private driver',
  ],
  'aloha-ubud-swing-price-2026': [
    'Aloha Ubud Swing price 2026',
    'Aloha Active Package 450000',
    'Aloha Entrance Package 50000',
    'Tegallalang swing price Ubud',
  ],
  'aloha-ubud-swing-tegallalang-guide-2026': [
    'Aloha Ubud Swing location',
    'Jl Raya Tegallalang swing',
    'Aloha Swing hours',
  ],
  'aloha-ubud-swing-vs-swing-heaven-2026': [
    'Aloha vs Swing Heaven',
    'Tegallalang swing vs Bongkasa',
    'which Bali swing park',
  ],
  'atv-package-private-transfer-bali-2026': [
    'ATV Bali from Seminyak private transfer',
    'ATV Bali from Canggu with pickup',
    'ATV Ubud private car',
  ],
  'is-a-tour-guide-worth-it-bali-2026': [
    'is a tour guide worth it in Bali',
    'do I need a tour guide in Bali',
    'benefits of a tour guide Bali',
    'Bali driver vs tour guide',
  ],
  'bali-temples-with-a-guide-2026': [
    'Bali temple tour with guide',
    'Tirta Empul with a guide',
    'Bali temple etiquette',
    'odalan ceremony Bali visitors',
  ],
  'first-time-in-bali-local-guide-2026': [
    'first time in Bali tips',
    'first time in Bali guide',
    'local guide Bali first trip',
    'Bali itinerary 5 days with guide',
  ],
  'withlocals-bali-guide-alternative-2026': [
    'Withlocals Bali alternative',
    'Withlocals Bali guide alternative',
    'alternative to Withlocals Bali',
    'licensed guide vs Withlocals Bali',
    'Bali private guide without marketplace',
  ],
  'licensed-tour-guide-bali-2026': [
    'licensed tour guide Bali price 2026',
    'how much is a tour guide in Bali',
    'Bali guide without driver',
    'SE 7 2025 Bali licensed guide',
  ],
  'japanese-speaking-guide-bali-2026': [
    'Japanese guide Bali',
    'Japanese speaking tour guide Ubud',
    'バリ島 日本語ガイド',
    'バリ島 ガイド 料金',
  ],
  'japanese-guide-bali-price-2026': [
    'Japanese guide Bali price',
    'Japanese tour guide cost Bali 2026',
    'バリ島 日本語ガイド 料金',
    'バリ ガイド 値段',
    'how much Japanese guide Bali',
  ],
  'japanese-guide-with-private-driver-bali-2026': [
    'Japanese guide with private driver Bali',
    'Japanese guide and car Bali',
    'バリ島 日本語ガイド ドライバー付き',
    'Japanese speaking guide Ubud with driver',
  ],
  'japanese-licensed-guide-ubud-day-2026': [
    'Japanese guide Ubud itinerary',
    'Japanese licensed guide Ubud day',
    'ウブド 日本語ガイド ツアー',
    'Ubud temple day Japanese guide',
  ],
  'tirta-empul-with-japanese-guide-2026': [
    'Tirta Empul Japanese guide',
    'melukat Japanese speaking guide',
    'ティルタエンプル 日本語ガイド',
    'Tirta Empul melukat Japanese',
  ],
  'french-speaking-guide-bali-2026': [
    'French guide Bali',
    'French speaking tour guide Ubud',
    'guide francophone Bali',
    'guide francophone Ubud prix',
  ],
  'bali-atv-all-new-bali-adventure-location-guide': [
    'All New Bali Adventure',
    'All New Bali Adventure location',
    'All New Bali Adventure Sedang',
  ],
  'tandem-atv-ubud-price': ['tandem ATV Ubud price', 'single vs tandem ATV Ubud'],
  'how-much-does-atv-cost-bali-ubud-2026': [
    'How much does it cost to ride an ATV in Ubud, Bali?',
    'ATV Ubud price 2026',
    'how much does ATV cost Bali',
    'ATV price Bali',
    'ATV price in Bali',
    'how much is ATV in Bali',
    'harga ATV Ubud',
  ],
  'whats-new-in-bali-ubud-2026': [
    "What's new in Bali in 2026?",
    'What are the top adventures to do in Bali?',
    'What are some unique experiences I can have in Bali?',
    'How much does it cost to ride an ATV in Ubud, Bali?',
    'new in Bali 2026 Ubud',
    'top adventures Bali Ubud',
    'unique experiences Ubud 2026',
  ],
  'ubud-quad-biking-price-2026': [
    'Quad biking ubud price',
    'Free quad biking ubud',
    'ATV tour Ubud waterfall',
    'Ubud Quad Biking reviews',
    'Ubud quad bike adventure',
    'Best ATV ride in Ubud',
    'Ubud ATV Quad Bike adventure with Gorilla Cave and lunch',
    'Bali Quad biking',
  ],
  'ubud-muddy-quad-bike-atv-2026': [
    'muddy quad bike Ubud',
    'muddy ATV Ubud',
    'muddy sport ATV Bali',
    'jungle mud ATV Ubud',
    'ATV river crossing Ubud',
    'mud bike Bali Ubud',
  ],
  'good-price-atv-quad-bike-ubud-2026': [
    'good price ATV Ubud',
    'good price quad bike Ubud',
    'good price ATV Bali 2026',
    'published ATV price Ubud',
    'ATV Ubud 750000',
  ],
  'rafting-ubud-price-2026': [
    'Ayung rafting Ubud price',
    'rafting Ubud price 2026',
    'how much is rafting in Ubud',
  ],
  'wos-river-tubing-price-2026': [
    'Wos River tubing price',
    'canyon tubing Ubud price 2026',
    'how much is river tubing Ubud',
  ],
  'ebike-vs-pedal-ubud-cycling-tour': ['e-bike vs pedal cycling Ubud'],
  'ubud-cycling-tour-for-families': ['family cycling tour Ubud'],
  'what-is-lawar-balinese-dish': ['what is lawar'],
  '5-essential-balinese-spices': ['Balinese spices cooking class', 'Base Genep spices'],
  'what-is-base-genep-balinese-spice-paste-guide': [
    'what is Base Genep',
    'Balinese spice paste',
  ],
  'top-5-traditional-balinese-foods': ['traditional Balinese food', 'Ayam Betutu'],
  'things-to-do-near-ubud-2026': [
    'things to do near Ubud',
    'Ubud activities 2026',
    'what to book first in Ubud',
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
  'swing-heaven-package-price-2026': [
    'Swing Heaven Bali price 2026',
    'Swing Heaven package IDR 530000',
    'Swing Heaven lunch package 630000',
  ],
  'swing-heaven-photo-spots-bali-2026': [
    'Swing Heaven photo spots',
    'Swing Heaven 14 swings nests',
    'Stairs 2 Heaven Bali',
  ],
  'swing-heaven-bird-nest-bali-2026': [
    'Swing Heaven bird nest',
    'Bali swing bird nest photo',
    'bird nest Swing Heaven dress',
  ],
  'swing-heaven-atv-combo-ubud-2026': [
    'Swing Heaven ATV combo',
    'ATV and jungle swing same day Ubud',
    'Bongkasa swing Sedang ATV',
  ],
  'what-is-bali-jungle-swing-2026': [
    'what is a Bali jungle swing',
    'how does Bali swing work',
    'Bali jungle swing explained',
    'Swing Heaven how it works',
  ],
  'why-spend-on-bali-swing-2026': [
    'why spend on Bali swing',
    'is Bali swing worth the money',
    'Bali swing cost worth it',
    'should I book Bali jungle swing',
  ],
  'bali-swing-instagram-moments-2026': [
    'Bali swing Instagram',
    'Bali swing Reels ideas',
    'Swing Heaven Instagram spots',
    'Bali swing TikTok',
    'best Bali swing photos',
  ],
  'bali-swing-couples-honeymoon-photos-2026': [
    'Bali swing couples photos',
    'Bali swing honeymoon',
    'Swing Heaven for couples',
    'honeymoon jungle swing Bali',
  ],
  'bali-swing-with-lunch-ubud': [
    'Bali swing with lunch',
    'Swing Heaven lunch package',
  ],
  'swing-heaven-cooking-class-ubud': [
    'jungle swing and cooking class Ubud',
    'Swing Heaven cooking class Ubud',
    'cooking class jungle swing Ubud',
    'Swing Heaven vs Happy Swing',
  ],
  'cycling-cooking-class-ubud-full-day-itinerary': [
    'cycling and cooking class in Ubud',
    'rice paddy cycling cooking class',
  ],
  'what-is-the-subak-system-bali': [
    'Subak cycling Ubud',
    'rice paddy irrigation Bali',
  ],
  'tirta-empu-melukat-ubud-guide': [
    'private melukat Ubud',
    'Tirta Empul price',
    'Tirta Empul water purification ceremony',
    'melukat ceremony Ubud',
  ],
  'griya-beji-waterfall-ubud-guide': [
    'Griya Beji Waterfall price',
    'waterfall purification Ubud',
    'Griya Beji waterfall purification',
    'waterfall purification ceremony Ubud',
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
  'long-private-driver-day-ubud-2026': [
    'long private driver day Ubud',
    'long day Bali private driver',
  ],
  'bali-safari-packages-compared-2026': [
    'Bali Safari package comparison',
    'Jungle Hopper vs Dragon vs Leopard vs Rhino',
  ],
  'bali-zoo-vs-bali-safari-vs-taro': [
    'Bali Zoo vs Bali Safari',
    'Taro elephant park vs Bali Safari',
  ],
  'bali-canyoning-vs-tubing-vs-buggies': [
    'canyoning vs canyon tubing Bali',
    'UTV vs ATV Ubud',
  ],
  'ubud-workshop-classes-2026': [
    'Ubud batik class price',
    'Ubud silver class',
  ],
  'kintamani-dirt-bike-vs-batur-jeep': [
    'dirt bike vs Mount Batur jeep',
    'Kintamani dirt bike price',
  ],
  'bali-october-november-december-2026-deals': [
    'Bali in October',
    'Bali in November',
    'Bali in December',
    'Bali New Year 2027 activities',
    'Bali year end promo',
    'Bali rainy season activities',
  ],
  'bali-rafting-rainy-season-oct-dec-2026': [
    'Bali rafting rainy season',
    'Ayung rafting December',
    'Bali rafting November',
    'rafting Ubud wet season',
  ],
  'best-atv-bali-ubud-2026': [
    'Best ATV in Bali Ubud',
    'best ATV in Bali reddit',
    'best quad bike Bali',
    'Bali ATV tour Ubud',
    'Bali ATV Ubud',
  ],
  'bali-atv-ride-locations-2026': [
    'ATV ride Bali location',
    'where to ride ATV in Bali',
    'Bali quad bike location',
    'ATV Payangan vs Sedang',
    'Bali Quad Bike',
  ],
  'mount-batur-sunrise-jeep-hot-spring-2026': [
    'Mount Batur Sunrise Jeep Tour Natural Hot Spring',
    'Mount Batur jeep and hot spring',
    'Batur jeep Toya Devasya',
    'Mount Batur 4WD jeep hot spring price',
  ],
  'mount-batur-jeep-tour-reviews-2026': [
    'Jeep tour Mount Batur reviews',
    'Mount Batur jeep tour worth it',
    'Mount Batur jeep tour TripAdvisor',
    'Mount Batur 4WD Jeep reviews',
  ],
  'atv-rafting-from-seminyak-canggu-kuta-2026': [
    'ATV from Seminyak',
    'ATV Canggu pickup',
    'rafting from Seminyak',
    'Ayung rafting pickup Canggu',
    'Bali ATV pickup Kuta',
    'Ubud ATV from Nusa Dua',
  ],
  'bali-atv-rafting-jeep-with-kids-2026': [
    'Bali ATV with kids',
    'Bali rafting with kids',
    'Ayung rafting minimum age',
    'ATV minimum age Bali',
    'Mount Batur jeep with kids',
    'Bali family adventure',
  ],
  'mount-batur-jeep-tour-whats-included-2026': [
    "Mount Batur jeep what's included",
    'Mount Batur jeep tour price with pickup',
    'Batur jeep hidden costs',
    'cheap Mount Batur jeep tour',
    'Mount Batur jeep breakfast included',
  ],
  'ubud-2-day-adventure-plan-jeep-atv-rafting-2026': [
    'Bali 2 day adventure itinerary',
    'Mount Batur jeep and ATV',
    'Batur sunrise and rafting',
    'Bali adventure itinerary 2026',
    'ATV rafting and jeep Bali',
  ],
  'mount-batur-jeep-new-year-sunrise-2026': [
    'Mount Batur jeep New Year',
    'Batur sunrise Christmas',
    'Mount Batur sunrise December',
    'Batur jeep 1 January sunrise',
  ],
  'kintamani-dirt-bike-rainy-season-2026': [
    'Kintamani dirt bike rainy season',
    'Bali dirt bike December',
    'Kintamani dirt bike price',
    'Bali Mountain Dirt Bike Adventure',
  ],
  'bali-bird-park-from-ubud-2026': [
    'Bali Bird Park price 2026',
    'Bali Bird Park from Ubud',
  ],
  'bali-tours-for-japanese-chinese-travelers-2026': [
    'Bali tour for Japanese travelers',
    'Bali tour for Korean travelers',
    'Bali tour for Chinese travelers',
    'Bali tour for Middle East travelers',
    'book Bali tour in English from Japan',
    'UAE Bali tour English booking',
    'Nusa Dua Bali tour pickup Middle East',
  ],
  'bali-motorbike-tour-price-2026': [
    'Bali motorbike tour price 2026',
    'Bali scooter tour promo',
    'Canggu motorbike tour pickup',
    'Jimbaran scooter shuttle',
    'Nusa Dua motorbike tour shuttle',
  ],
  'bali-motorbike-tour-vs-private-driver-2026': [
    'Bali motorbike tour vs private driver',
    'Bali scooter vs private car Ubud',
  ],
  'bali-scooter-tour-vs-atv-2026': [
    'Bali scooter tour vs ATV',
    'motorbike tour vs ATV Ubud',
    'scooter or ATV Bali',
  ],
  'bali-motorbike-tour-vs-dirt-bike-2026': [
    'Bali motorbike tour vs dirt bike',
    'scooter vs enduro Bali',
    'dirt bike vs scooter tour Bali',
  ],
  'ubud-waterfall-scooter-tour-2026': [
    'Ubud waterfall scooter tour',
    'Kanto Lampo scooter tour',
    'Tukad Cepung scooter tour',
  ],
  'bali-motorbike-tour-idp-license-2026': [
    'Bali motorbike tour IDP',
    'International Driving Permit Bali scooter',
    'pillion Bali motorbike tour',
  ],
  'east-south-bali-motorbike-tour-2026': [
    'East Bali motorbike tour',
    'South Bali scooter tour',
    'Besakih scooter tour',
    'Uluwatu motorbike tour',
  ],
  'kintamani-scooter-vs-batur-jeep-2026': [
    'Kintamani scooter vs Batur jeep',
    'Kintamani motorbike tour',
    'scooter or jeep Mount Batur',
  ],
  'bali-atv-vs-kuber-cave-2026': [
    'All New Bali Adventure vs Kuber',
    'Kuber ATV vs Sedang ATV',
    'Kuber cave ATV alternative',
  ],
  'bali-atv-vs-utv-buggy-2026': [
    'ATV vs UTV Bali',
    'ATV vs UTV Ubud',
    'quad bike vs UTV buggy Bali',
    'Sedang ATV vs Pemogan UTV',
  ],
  'atv-rafting-combo-ubud-2026': [
    'ATV rafting combo Ubud price',
    'ATV + rafting package Bali',
    'book ATV and rafting same day',
    'ATV single + rafting Ubud',
  ],
  'atv-tandem-rafting-ubud-2026': [
    'tandem ATV rafting Ubud',
    'ATV tandem + rafting combo',
    'couple ATV rafting Ubud',
    'tandem ATV + Ayung rafting price',
  ],
  'atv-river-tubing-wos-river-bali': [
    'ATV tubing combo Ubud',
    'ATV + canyon tubing price',
    'ATV river tubing Wos',
    'book ATV and tubing same day',
  ],
  'best-price-atv-rafting-cycling-scooter-ubud-2026': [
    'best price ATV Ubud',
    'best price rafting Ubud',
    'best price cycling Ubud',
    'best price scooter tour Bali',
    'best price motorbike tour Ubud',
  ],
  'which-bali-wheels-2026': [
    'which Bali activity to book',
    'ATV vs UTV vs dirt bike Bali',
    'Bali scooter vs ATV vs jeep',
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
  // Spokes get compare + extras only. Head terms stay on /tours/[slug],
  // except the All New Bali Adventure location guide, which owns the
  // venue-name query via BLOG_EXTRA_KEYWORDS (tour title still names the arena).
  return uniqueKeywords([
    ...extras,
    ...slugs.flatMap((s) => {
      const cluster = getKeywordCluster(s)
      if (!cluster) return []
      return [...cluster.compare, ...cluster.book.slice(0, 2)]
    }),
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
    '## Competitor-informed keyword base (Round 6 — 2026-09-23)',
    'Match traveler queries with these phrases. They describe real Sekar Bali Activity products.',
    'Do **not** invent cave/tunnel ATV, e-bike cycling, Ayung-as-tubing, summit-hike jeep, caged luwak, or free hotel pickup on ATV / rafting / tubing / Griya Beji. Swing Heaven includes a hotel driver (required — no self-meet).',
    '',
    ...ACTIVITY_ORDER.map((slug) => {
      const cluster = KEYWORD_CLUSTERS[slug]
      const compare = cluster.compare.length ? ` | compare: ${cluster.compare.join(', ')}` : ''
      return `- **${slug}** — head: ${cluster.head.join(', ')} | book: ${cluster.book.join(', ')}${compare}`
    }),
    '',
    'Park tickets and Ubud workshops we book (source from-price + IDR 200,000). Pickup is quoted — do not invent free hotel pickup.',
    ...Object.entries(PARK_WORKSHOP_KEYWORD_CLUSTERS).map(([slug, cluster]) => {
      const compare = cluster.compare.length ? ` | compare: ${cluster.compare.join(', ')}` : ''
      return `- **${slug}** — head: ${cluster.head.join(', ')} | book: ${cluster.book.join(', ')}${compare}`
    }),
    `- **combos**: ${COMBO_KEYWORDS.join(', ')}`,
    `- **niche**: ${NICHE_KEYWORDS.join(', ')}`,
  ]
  return lines.join('\n')
}
