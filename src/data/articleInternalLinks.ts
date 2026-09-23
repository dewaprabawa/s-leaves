/**
 * Internal link graph for GEO / Google crawl.
 * Every money-activity article points at siblings + the hub + one other
 * activity so jeep, cooking, ATV, rafting, swing, and Griya are not silos.
 */

export type ArticleLink = {
  title: string
  href: string
}

const HUB: ArticleLink = {
  title: 'Things to do near Ubud 2026',
  href: '/blog/things-to-do-near-ubud-2026',
}

const PRICES: ArticleLink = {
  title: 'Adventure package prices 2026',
  href: '/blog/bali-adventure-packages-prices-2026',
}

const PICKUP: ArticleLink = {
  title: 'Ubud hotel pickup explained',
  href: '/blog/ubud-hotel-pickup-bali-adventures-explained',
}

export const ACTIVITY_ARTICLE_CLUSTERS = {
  jeep: [
    { title: 'Private Mount Batur jeep guide', href: '/blog/mount-batur-sunrise-jeep-tour-guide-2026' },
    { title: 'Batur jeep price guide 2026', href: '/blog/mount-batur-sunrise-jeep-tour-price-guide-2026' },
    { title: 'Jeep vs sunrise trek', href: '/blog/mount-batur-jeep-vs-sunrise-trek' },
    { title: 'Jeep pickup times (Canggu / Ubud)', href: '/blog/mount-batur-jeep-pickup-times-canggu-ubud-2026' },
    { title: 'Sunrise vs sunset jeep', href: '/blog/mount-batur-jeep-sunrise-vs-sunset' },
    { title: 'Sit-in jeep vs tracking', href: '/blog/mount-batur-sit-in-jeep-vs-tracking' },
    { title: 'Private Kintamani Day', href: '/blog/private-kintamani-day-jeep-itinerary' },
    { title: 'Book the Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
  ],
  cooking: [
    { title: 'Cooking class Ubud price 2026', href: '/blog/cooking-class-ubud-price-2026-worth-it' },
    { title: 'Inside Tumang cooking class', href: '/blog/inside-balinese-cooking-class-pejeng' },
    { title: 'Vegetarian cooking class', href: '/blog/vegetarian-vegan-cooking-class-ubud' },
    { title: 'Morning vs afternoon class', href: '/blog/morning-vs-afternoon-ubud-cooking-class' },
    { title: 'Cycling + cooking itinerary', href: '/blog/cycling-cooking-class-ubud-full-day-itinerary' },
    { title: 'Book Tumang cooking class', href: '/tours/balinese-cooking-class' },
  ],
  cycling: [
    { title: 'Ubud ricefield cycling guide', href: '/blog/ubud-ricefield-cycling-tour-guide-2026' },
    { title: 'Is an Ubud cycling tour worth it?', href: '/blog/is-ubud-cycling-tour-worth-it' },
    { title: 'Pejeng vs Tegallalang', href: '/blog/pejeng-rice-terrace-cycling-vs-tegallalang' },
    { title: 'E-bike vs pedal', href: '/blog/ebike-vs-pedal-ubud-cycling-tour' },
    { title: 'Family cycling Ubud', href: '/blog/ubud-cycling-tour-for-families' },
    { title: 'Book Pejeng cycling', href: '/tours/ubud-ricefield-cycling-tour' },
  ],
  atv: [
    { title: 'ATV cost near Ubud 2026', href: '/blog/how-much-does-atv-cost-bali-ubud-2026' },
    { title: 'Tandem ATV price', href: '/blog/tandem-atv-ubud-price' },
    { title: 'ATV for beginners', href: '/blog/bali-atv-for-beginners-first-time-guide' },
    { title: 'All New Bali Adventure location', href: '/blog/bali-atv-all-new-bali-adventure-location-guide' },
    { title: 'Mud track vs cave/tunnel', href: '/blog/ubud-atv-track-types-mud-jungle-vs-cave-tunnel' },
    { title: 'Book ATV near Ubud', href: '/tours/bali-atv-adventure' },
  ],
  rafting: [
    { title: 'Ayung River rafting guide', href: '/blog/bali-whitewater-rafting-near-ubud-guide' },
    { title: 'Rafting vs tubing vs ATV', href: '/blog/rafting-vs-tubing-vs-atv-near-ubud' },
    { title: 'Book Ayung rafting', href: '/tours/whitewater-rafting' },
  ],
  tubing: [
    { title: 'Wos River canyon tubing', href: '/blog/bali-canyon-tubing-guide-ubud' },
    { title: 'ATV + tubing combo', href: '/blog/atv-river-tubing-wos-river-bali' },
    { title: 'Book canyon tubing', href: '/tours/canyon-tubing' },
  ],
  swing: [
    { title: 'Swing Heaven Ubud guide', href: '/blog/swing-heaven-bali-ubud-guide' },
    { title: 'Swing Heaven vs Tegallalang', href: '/blog/swing-heaven-vs-tegallalang-bali-swing' },
    { title: 'Bongkasa location', href: '/blog/swing-heaven-bongkasa-location' },
    { title: 'Is the Bali Swing worth it?', href: '/blog/is-bali-swing-worth-it' },
    { title: 'Book Swing Heaven', href: '/tours/swing-heaven-bali' },
  ],
  griya: [
    { title: 'Griya Beji Waterfall guide', href: '/blog/griya-beji-waterfall-ubud-guide' },
    { title: 'Griya Beji vs Tirta Empul', href: '/blog/griya-beji-vs-tirta-empul-melukat' },
    { title: 'Palm reading at Griya Beji', href: '/blog/palm-reading-bali-griya-beji' },
    { title: 'Mental healing at Griya Beji', href: '/blog/mental-healing-bali-griya-beji' },
    { title: 'Book Griya Beji', href: '/tours/griya-beji-waterfall' },
  ],
  melukat: [
    { title: 'Tirta Empu melukat guide', href: '/blog/tirta-empu-melukat-ubud-guide' },
    { title: 'Griya Beji vs Tirta Empul', href: '/blog/griya-beji-vs-tirta-empul-melukat' },
    { title: 'Bali temple dress code', href: '/blog/bali-temple-dress-code' },
    { title: 'Book Tirta Empul / Beji', href: '/tours/tirta-empu-purification' },
  ],
  coffee: [
    { title: 'Umah Kuno Luwak price 2026', href: '/blog/luwak-coffee-plantation-umah-kuno-price-2026' },
    { title: 'Ethical luwak sourcing', href: '/blog/luwak-coffee-ethical-sourcing' },
    { title: 'How to spot ethical luwak', href: '/blog/how-to-spot-ethical-luwak-coffee-in-bali' },
    { title: 'Book Umah Kuno tasting', href: '/tours/luwak-coffee-plantation' },
  ],
  dayTour: [
    { title: 'Full day Ubud tour guide', href: '/blog/full-day-ubud-tour-guide-2026' },
    { title: 'Tanah Lot sunset half day', href: '/blog/half-day-ubud-tanah-lot-sunset-tour-2026' },
    { title: 'Book full-day Ubud', href: '/tours/full-day-ubud-tour' },
    { title: 'Book Tanah Lot sunset', href: '/tours/half-day-ubud-tanah-lot-tour' },
  ],
  girlsTrip: [
    { title: '6-day Private Bali itinerary', href: '/blog/bali-6-day-girls-trip-itinerary-2026' },
    { title: 'Family private itinerary', href: '/blog/bali-family-private-itinerary-2026' },
    { title: 'What we book vs you book', href: '/blog/bali-private-itinerary-what-we-book-vs-you-book' },
    { title: 'What to skip on a 6-day trip', href: '/blog/what-to-skip-on-a-6-day-bali-itinerary' },
    { title: 'Consult on a private Bali itinerary', href: '/tours/bali-private-itinerary' },
    { title: 'Book Swing Heaven photo day', href: '/tours/swing-heaven-bali' },
    { title: 'Book the Batur sunrise jeep', href: '/tours/batur-sunrise-jeep-tour' },
  ],
  parks: [
    { title: 'Bali Safari packages compared', href: '/blog/bali-safari-packages-compared-2026' },
    { title: 'Bali Zoo vs Safari vs Taro', href: '/blog/bali-zoo-vs-bali-safari-vs-taro' },
    { title: 'Bali Bird Park from Ubud', href: '/blog/bali-bird-park-from-ubud-2026' },
    { title: 'Book Bali Bird Park', href: '/tours/bali-bird-park' },
    { title: 'Book Jungle Hopper', href: '/tours/jungle-hopper-bali-safari-and-marine-park' },
    { title: 'Book Bali Zoo mud fun', href: '/tours/elephant-mud-fun-at-bali-zoo-park' },
  ],
  canyonBuggy: [
    { title: 'Canyoning vs tubing vs buggies', href: '/blog/bali-canyoning-vs-tubing-vs-buggies' },
    { title: 'Book Bali canyoning', href: '/tours/canyoning' },
    { title: 'Book jungle buggies', href: '/tours/jungle-buggies-complete-3-laps-tour' },
    { title: 'Wos River canyon tubing', href: '/blog/bali-canyon-tubing-guide-ubud' },
    { title: 'Book Sedang ATV', href: '/tours/bali-atv-adventure' },
  ],
  workshops: [
    { title: 'Ubud workshop classes 2026', href: '/blog/ubud-workshop-classes-2026' },
    { title: 'Book batik class', href: '/tours/batik-class' },
    { title: 'Book silver class', href: '/tours/silver-making-class' },
    { title: 'Book canang class', href: '/tours/balinese-offering-class' },
    { title: 'Tumang cooking class', href: '/tours/balinese-cooking-class' },
  ],
  dirtBike: [
    { title: 'Kintamani dirt bike vs Batur jeep', href: '/blog/kintamani-dirt-bike-vs-batur-jeep' },
    { title: 'Book Kintamani dirt bike', href: '/tours/dirt-bike-kintamani-black-lava' },
    { title: 'Book Tabanan dirt bike', href: '/tours/dirt-bike-tabanan-day-night' },
    { title: 'Book the Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
  ],
  site: [
    HUB,
    PRICES,
    PICKUP,
    { title: 'How to book on WhatsApp', href: '/blog/how-to-book-bali-adventure-whatsapp' },
    { title: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
    { title: 'Tumang cooking class', href: '/tours/balinese-cooking-class' },
    { title: 'ATV near Ubud', href: '/tours/bali-atv-adventure' },
    { title: 'Swing Heaven Bali', href: '/tours/swing-heaven-bali' },
    { title: 'Griya Beji Waterfall', href: '/tours/griya-beji-waterfall' },
  ],
} as const

type ClusterId = keyof typeof ACTIVITY_ARTICLE_CLUSTERS

const SLUG_TO_CLUSTER: Record<string, ClusterId> = {
  'mount-batur-sunrise-jeep-tour-guide-2026': 'jeep',
  'mount-batur-sunrise-jeep-tour-price-guide-2026': 'jeep',
  'mount-batur-jeep-vs-sunrise-trek': 'jeep',
  'mount-batur-jeep-pickup-times-canggu-ubud-2026': 'jeep',
  'mount-batur-jeep-sunrise-vs-sunset': 'jeep',
  'mount-batur-sit-in-jeep-vs-tracking': 'jeep',
  'private-kintamani-day-jeep-itinerary': 'jeep',
  'cooking-class-ubud-price-2026-worth-it': 'cooking',
  'inside-balinese-cooking-class-pejeng': 'cooking',
  'vegetarian-vegan-cooking-class-ubud': 'cooking',
  'morning-vs-afternoon-ubud-cooking-class': 'cooking',
  'what-is-lawar-balinese-dish': 'cooking',
  'how-traditional-balinese-kitchens-work': 'cooking',
  'pound-spices-by-hand-not-blender': 'cooking',
  '5-essential-balinese-spices': 'cooking',
  'what-is-base-genep-balinese-spice-paste-guide': 'cooking',
  'is-ubud-cycling-tour-worth-it': 'cycling',
  'ubud-ricefield-cycling-tour-guide-2026': 'cycling',
  'pejeng-rice-terrace-cycling-vs-tegallalang': 'cycling',
  'ebike-vs-pedal-ubud-cycling-tour': 'cycling',
  'what-to-wear-ubud-ricefield-cycling': 'cycling',
  'ubud-cycling-tour-for-families': 'cycling',
  'what-is-the-subak-system-bali': 'cycling',
  'cycling-cooking-class-ubud-full-day-itinerary': 'cooking',
  'tandem-atv-ubud-price': 'atv',
  'bali-atv-for-beginners-first-time-guide': 'atv',
  'how-much-does-atv-cost-bali-ubud-2026': 'atv',
  'private-atv-vs-mass-market-ubud': 'atv',
  'bali-atv-tour-ubud-guide': 'atv',
  'bali-atv-all-new-bali-adventure-location-guide': 'atv',
  'ubud-atv-track-types-mud-jungle-vs-cave-tunnel': 'atv',
  'atv-river-tubing-wos-river-bali': 'tubing',
  'bali-whitewater-rafting-near-ubud-guide': 'rafting',
  'rafting-vs-tubing-vs-atv-near-ubud': 'rafting',
  'bali-canyon-tubing-guide-ubud': 'tubing',
  'swing-heaven-bali-ubud-guide': 'swing',
  'is-bali-swing-worth-it': 'swing',
  'swing-heaven-vs-tegallalang-bali-swing': 'swing',
  'swing-heaven-bongkasa-location': 'swing',
  'flying-dress-hire-bali-swing': 'swing',
  'bali-swing-with-lunch-ubud': 'swing',
  'griya-beji-waterfall-ubud-guide': 'griya',
  'griya-beji-vs-tirta-empul-melukat': 'griya',
  'palm-reading-bali-griya-beji': 'griya',
  'mental-healing-bali-griya-beji': 'griya',
  'tirta-empu-melukat-ubud-guide': 'melukat',
  'bali-temple-dress-code': 'melukat',
  'luwak-coffee-plantation-umah-kuno-price-2026': 'coffee',
  'luwak-coffee-ethical-sourcing': 'coffee',
  'how-to-spot-ethical-luwak-coffee-in-bali': 'coffee',
  'full-day-ubud-tour-guide-2026': 'dayTour',
  'half-day-ubud-tanah-lot-sunset-tour-2026': 'dayTour',
  'bali-6-day-girls-trip-itinerary-2026': 'girlsTrip',
  'bali-family-private-itinerary-2026': 'girlsTrip',
  'bali-private-itinerary-what-we-book-vs-you-book': 'girlsTrip',
  'what-to-skip-on-a-6-day-bali-itinerary': 'girlsTrip',
  'bali-safari-packages-compared-2026': 'parks',
  'bali-zoo-vs-bali-safari-vs-taro': 'parks',
  'bali-bird-park-from-ubud-2026': 'parks',
  'bali-canyoning-vs-tubing-vs-buggies': 'canyonBuggy',
  'ubud-workshop-classes-2026': 'workshops',
  'kintamani-dirt-bike-vs-batur-jeep': 'dirtBike',
  'perfect-one-day-ubud-itinerary': 'dayTour',
  'things-to-do-near-ubud-2026': 'site',
  'bali-adventure-packages-prices-2026': 'site',
  'ubud-hotel-pickup-bali-adventures-explained': 'site',
  'how-to-book-bali-adventure-whatsapp': 'site',
  'history-of-pejeng-bali-ancient-kingdom': 'site',
}

/** Other-activity hops so Google can walk jeep ↔ cooking ↔ ATV ↔ Griya. */
const CROSS_CLUSTER: Record<ClusterId, ArticleLink[]> = {
  jeep: [
    { title: 'Tumang cooking class (free Ubud pickup)', href: '/tours/balinese-cooking-class' },
    { title: 'Pejeng ricefield cycling', href: '/tours/ubud-ricefield-cycling-tour' },
    { title: 'ATV at All New Bali Adventure', href: '/tours/bali-atv-adventure' },
    { title: 'Private Bali itinerary', href: '/tours/bali-private-itinerary' },
    HUB,
  ],
  cooking: [
    { title: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
    { title: 'Pejeng ricefield cycling', href: '/tours/ubud-ricefield-cycling-tour' },
    HUB,
  ],
  cycling: [
    { title: 'Tumang cooking class', href: '/tours/balinese-cooking-class' },
    { title: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
    HUB,
  ],
  atv: [
    { title: 'Ayung River rafting', href: '/tours/whitewater-rafting' },
    { title: 'Wos River tubing', href: '/tours/canyon-tubing' },
    { title: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
    HUB,
  ],
  rafting: [
    { title: 'Canyon tubing (gentler water)', href: '/tours/canyon-tubing' },
    { title: 'ATV near Ubud', href: '/tours/bali-atv-adventure' },
    { title: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
  ],
  tubing: [
    { title: 'Ayung River rafting', href: '/tours/whitewater-rafting' },
    { title: 'ATV near Ubud', href: '/tours/bali-atv-adventure' },
    HUB,
  ],
  swing: [
    { title: 'ATV in the same Abiansemal district', href: '/tours/bali-atv-adventure' },
    { title: 'Griya Beji Waterfall (Punggul)', href: '/tours/griya-beji-waterfall' },
    { title: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
    { title: 'Private Bali itinerary', href: '/tours/bali-private-itinerary' },
  ],
  griya: [
    { title: 'Private Tirta Empul / Pura Beji', href: '/tours/tirta-empu-purification' },
    { title: 'Swing Heaven Bongkasa', href: '/tours/swing-heaven-bali' },
    { title: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
  ],
  melukat: [
    { title: 'Griya Beji waterfall purification', href: '/tours/griya-beji-waterfall' },
    { title: 'Umah Kuno luwak tasting', href: '/tours/luwak-coffee-plantation' },
    HUB,
  ],
  coffee: [
    { title: 'Private Mount Batur jeep (optional Kintamani stop)', href: '/tours/batur-sunrise-jeep-tour' },
    { title: 'Tumang cooking class', href: '/tours/balinese-cooking-class' },
    HUB,
  ],
  dayTour: [
    { title: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
    { title: 'Pejeng cycling (village, not Tegalalang crowds)', href: '/tours/ubud-ricefield-cycling-tour' },
    { title: 'Private Bali itinerary', href: '/tours/bali-private-itinerary' },
    HUB,
  ],
  girlsTrip: [
    { title: 'Swing Heaven vs Tegallalang', href: '/blog/swing-heaven-vs-tegallalang-bali-swing' },
    { title: 'Private Kintamani Day', href: '/blog/private-kintamani-day-jeep-itinerary' },
    { title: 'Tumang cooking class', href: '/tours/balinese-cooking-class' },
    HUB,
  ],
  parks: [
    { title: 'Ubud workshop classes', href: '/blog/ubud-workshop-classes-2026' },
    { title: 'Private Bali itinerary', href: '/tours/bali-private-itinerary' },
    HUB,
  ],
  canyonBuggy: [
    { title: 'Ayung River rafting', href: '/tours/whitewater-rafting' },
    { title: 'Kintamani dirt bike vs jeep', href: '/blog/kintamani-dirt-bike-vs-batur-jeep' },
    HUB,
  ],
  workshops: [
    { title: 'Tumang cooking class (free Ubud pickup)', href: '/tours/balinese-cooking-class' },
    { title: 'Griya Beji Waterfall', href: '/tours/griya-beji-waterfall' },
    HUB,
  ],
  dirtBike: [
    { title: 'Jeep vs sunrise trek', href: '/blog/mount-batur-jeep-vs-sunrise-trek' },
    { title: 'Canyoning vs buggies', href: '/blog/bali-canyoning-vs-tubing-vs-buggies' },
    HUB,
  ],
  site: [
    { title: 'Batur jeep price guide', href: '/blog/mount-batur-sunrise-jeep-tour-price-guide-2026' },
    { title: 'Cooking class Ubud price', href: '/blog/cooking-class-ubud-price-2026-worth-it' },
    { title: 'ATV cost near Ubud', href: '/blog/how-much-does-atv-cost-bali-ubud-2026' },
    { title: 'Swing Heaven vs Tegallalang', href: '/blog/swing-heaven-vs-tegallalang-bali-swing' },
    { title: 'Griya Beji vs Tirta Empul', href: '/blog/griya-beji-vs-tirta-empul-melukat' },
    { title: 'Private Bali itinerary', href: '/tours/bali-private-itinerary' },
    { title: 'Bali Safari packages compared', href: '/blog/bali-safari-packages-compared-2026' },
    { title: 'Ubud workshop classes', href: '/blog/ubud-workshop-classes-2026' },
  ],
}

export type ArticleLinkGroups = {
  sameCluster: ArticleLink[]
  moreActivities: ArticleLink[]
}

function uniqueLinks(links: ArticleLink[], skipHref: string): ArticleLink[] {
  const seen = new Set<string>([skipHref])
  const out: ArticleLink[] = []
  for (const link of links) {
    if (seen.has(link.href)) continue
    seen.add(link.href)
    out.push(link)
  }
  return out
}

export function collectArticleLinkHrefs(): string[] {
  const hrefs = new Set<string>()
  for (const cluster of Object.values(ACTIVITY_ARTICLE_CLUSTERS)) {
    for (const link of cluster) hrefs.add(link.href)
  }
  for (const hops of Object.values(CROSS_CLUSTER)) {
    for (const link of hops) hrefs.add(link.href)
  }
  hrefs.add(HUB.href)
  hrefs.add(PRICES.href)
  hrefs.add(PICKUP.href)
  return [...hrefs]
}

export function mappedArticleSlugs(): string[] {
  return Object.keys(SLUG_TO_CLUSTER)
}

export function getArticleInternalLinks(slug: string): ArticleLinkGroups {
  const clusterId = SLUG_TO_CLUSTER[slug]
  if (!clusterId) {
    return {
      sameCluster: uniqueLinks([HUB, PRICES, PICKUP, ...ACTIVITY_ARTICLE_CLUSTERS.jeep.slice(0, 3)], `/blog/${slug}`),
      moreActivities: uniqueLinks(
        [
          { title: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
          { title: 'Tumang cooking class', href: '/tours/balinese-cooking-class' },
          { title: 'ATV near Ubud', href: '/tours/bali-atv-adventure' },
          { title: 'Griya Beji Waterfall', href: '/tours/griya-beji-waterfall' },
        ],
        `/blog/${slug}`,
      ),
    }
  }

  const selfHref = `/blog/${slug}`
  const sameCluster = uniqueLinks([...ACTIVITY_ARTICLE_CLUSTERS[clusterId], HUB, PRICES], selfHref)
  const sameHrefs = new Set(sameCluster.map((link) => link.href))
  return {
    sameCluster,
    moreActivities: uniqueLinks(CROSS_CLUSTER[clusterId], selfHref).filter((link) => !sameHrefs.has(link.href)),
  }
}
