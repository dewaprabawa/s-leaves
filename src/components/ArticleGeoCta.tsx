import Link from 'next/link'
import { ACTIVITY_GEO_UPDATED, getActivityGeo } from '@/data/activityGeo'
import {
  COOKING_GEO_TLDR,
  COOKING_GEO_UPDATED,
} from '@/data/cookingGeo'
import { JEEP_GEO_TLDR, JEEP_GEO_UPDATED } from '@/data/jeepGeo'

type ArticleGeoSnippet = {
  tldr: string
  updated: string
  bookHref: string
  bookLabel: string
  pairHref?: string
  pairLabel?: string
}

const COOKING_ARTICLE_SLUGS = new Set([
  'cooking-class-ubud-price-2026-worth-it',
  'vegetarian-vegan-cooking-class-ubud',
  'morning-vs-afternoon-ubud-cooking-class',
  'inside-balinese-cooking-class-pejeng',
  'what-is-lawar-balinese-dish',
  'how-traditional-balinese-kitchens-work',
  'pound-spices-by-hand-not-blender',
  '5-essential-balinese-spices',
  'what-is-base-genep-balinese-spice-paste-guide',
  'top-5-traditional-balinese-foods',
])

const JEEP_ARTICLE_SLUGS = new Set([
  'mount-batur-sunrise-jeep-tour-guide-2026',
  'mount-batur-jeep-vs-sunrise-trek',
  'mount-batur-jeep-pickup-times-canggu-ubud-2026',
  'mount-batur-sunrise-jeep-tour-price-guide-2026',
  'mount-batur-jeep-sunrise-vs-sunset',
  'mount-batur-sit-in-jeep-vs-tracking',
  'private-kintamani-day-jeep-itinerary',
])

/** Blog slug → activity GEO corpus (non-cooking / non-jeep money pages). */
const ARTICLE_TO_ACTIVITY: Record<string, string> = {
  'is-ubud-cycling-tour-worth-it': 'ubud-ricefield-cycling-tour',
  'ubud-ricefield-cycling-tour-guide-2026': 'ubud-ricefield-cycling-tour',
  'pejeng-rice-terrace-cycling-vs-tegallalang': 'ubud-ricefield-cycling-tour',
  'ebike-vs-pedal-ubud-cycling-tour': 'ubud-ricefield-cycling-tour',
  'what-to-wear-ubud-ricefield-cycling': 'ubud-ricefield-cycling-tour',
  'ubud-cycling-tour-for-families': 'ubud-ricefield-cycling-tour',
  'what-is-the-subak-system-bali': 'ubud-ricefield-cycling-tour',
  'tandem-atv-ubud-price': 'bali-atv-adventure',
  'bali-atv-for-beginners-first-time-guide': 'bali-atv-adventure',
  'how-much-does-atv-cost-bali-ubud-2026': 'bali-atv-adventure',
  'private-atv-vs-mass-market-ubud': 'bali-atv-adventure',
  'bali-atv-tour-ubud-guide': 'bali-atv-adventure',
  'bali-atv-all-new-bali-adventure-location-guide': 'bali-atv-adventure',
  'ubud-atv-track-types-mud-jungle-vs-cave-tunnel': 'bali-atv-adventure',
  'atv-river-tubing-wos-river-bali': 'bali-atv-adventure',
  'bali-whitewater-rafting-near-ubud-guide': 'whitewater-rafting',
  'rafting-vs-tubing-vs-atv-near-ubud': 'whitewater-rafting',
  'bali-canyon-tubing-guide-ubud': 'canyon-tubing',
  'luwak-coffee-plantation-umah-kuno-price-2026': 'luwak-coffee-plantation',
  'luwak-coffee-ethical-sourcing': 'luwak-coffee-plantation',
  'how-to-spot-ethical-luwak-coffee-in-bali': 'luwak-coffee-plantation',
  'full-day-ubud-tour-guide-2026': 'full-day-ubud-tour',
  'half-day-ubud-tanah-lot-sunset-tour-2026': 'half-day-ubud-tanah-lot-tour',
  'perfect-one-day-ubud-itinerary': 'full-day-ubud-tour',
  'tirta-empu-melukat-ubud-guide': 'tirta-empu-purification',
  'bali-temple-dress-code': 'tirta-empu-purification',
  'swing-heaven-bali-ubud-guide': 'swing-heaven-bali',
  'is-bali-swing-worth-it': 'swing-heaven-bali',
  'swing-heaven-vs-tegallalang-bali-swing': 'swing-heaven-bali',
  'swing-heaven-bongkasa-location': 'swing-heaven-bali',
  'flying-dress-hire-bali-swing': 'swing-heaven-bali',
  'bali-swing-with-lunch-ubud': 'swing-heaven-bali',
  'swing-heaven-cooking-class-ubud': 'swing-heaven-bali',
  'griya-beji-waterfall-ubud-guide': 'griya-beji-waterfall',
  'griya-beji-vs-tirta-empul-melukat': 'griya-beji-waterfall',
  'palm-reading-bali-griya-beji': 'griya-beji-waterfall',
  'mental-healing-bali-griya-beji': 'griya-beji-waterfall',
  'bali-6-day-girls-trip-itinerary-2026': 'bali-private-itinerary',
  'bali-family-private-itinerary-2026': 'bali-private-itinerary',
  'bali-private-itinerary-what-we-book-vs-you-book': 'bali-private-itinerary',
  'what-to-skip-on-a-6-day-bali-itinerary': 'bali-private-itinerary',
  'long-private-driver-day-ubud-2026': 'bali-private-itinerary',
  'bali-safari-packages-compared-2026': 'jungle-hopper-bali-safari-and-marine-park',
  'bali-zoo-vs-bali-safari-vs-taro': 'elephant-mud-fun-at-bali-zoo-park',
  'bali-bird-park-from-ubud-2026': 'bali-bird-park',
  'bali-canyoning-vs-tubing-vs-buggies': 'canyoning',
  'ubud-workshop-classes-2026': 'batik-class',
  'kintamani-dirt-bike-vs-batur-jeep': 'dirt-bike-kintamani-black-lava',
}

const HUB_SNIPPET: ArticleGeoSnippet = {
  tldr:
    'Sekar Bali Activity publishes 2026 Ubud-area IDR on every money page: Tumang cooking promo IDR 450,000 with free Ubud pickup, Pejeng cycling IDR 750,000, ATV from IDR 750,000, rafting and tubing IDR 500,000 (IDR 450,000 for 2+), Swing Heaven from IDR 530,000, private Batur jeep from IDR 750,000 (3+), plus park tickets we book (Bird Park from IDR 585,000, Safari from IDR 1,000,000, canyoning from IDR 1,850,000, workshops from IDR 600,000). WhatsApp booking — no deposit to inquire.',
  updated: ACTIVITY_GEO_UPDATED,
  bookHref: '/book',
  bookLabel: 'Book an activity',
  pairHref: '/experiences',
  pairLabel: 'Browse all activities',
}

const HUB_ARTICLE_SLUGS = new Set([
  'things-to-do-near-ubud-2026',
  'bali-adventure-packages-prices-2026',
  'ubud-hotel-pickup-bali-adventures-explained',
  'how-to-book-bali-adventure-whatsapp',
  'ubud-travel-guide-escape-crowds-2026',
  'morning-vs-afternoon-tours-bali',
])

export function getArticleGeoSnippet(slug: string): ArticleGeoSnippet | null {
  if (slug === 'cycling-cooking-class-ubud-full-day-itinerary') {
    return {
      tldr:
        'Sekar Bali Activity books a same-day Ubud culture combo: Pejeng ricefield cycling (IDR 750,000, lunch, free Ubud pickup) then afternoon Tumang Bali Cooking Class (promo IDR 450,000, max 8, free Ubud pickup). One WhatsApp thread — no payment to inquire.',
      updated: COOKING_GEO_UPDATED,
      bookHref: '/book?activity=combo-cycling-cooking',
      bookLabel: 'Book the combo',
      pairHref: '/tours/balinese-cooking-class',
      pairLabel: 'Cooking class only',
    }
  }

  if (slug === 'long-private-driver-day-ubud-2026') {
    return {
      tldr:
        'A long private driver day with Sekar Bali Activity is one English-speaking car for 10–14 hours from IDR 600,000 (HiAce quoted for 6+), plus published tickets — cycling + cooking (IDR 1,200,000, both free Ubud pickup), Swing Heaven + cooking (IDR 980,000), or Griya Beji waterfall purification (IDR 300,000). Consultation only on WhatsApp — no all-in luxury package, no payment to inquire.',
      updated: ACTIVITY_GEO_UPDATED,
      bookHref: '/tours/bali-private-itinerary',
      bookLabel: 'WhatsApp consultation',
      pairHref: '/book?activity=combo-cycling-cooking',
      pairLabel: 'Book cycling + cooking',
    }
  }

  if (slug === 'swing-heaven-cooking-class-ubud') {
    return {
      tldr:
        'Sekar Bali Activity books a jungle-swing + kitchen day: morning Swing Heaven in Bongkasa (from IDR 530,000 — not Happy Swing or Tegallalang) then afternoon Tumang Bali Cooking Class (promo IDR 450,000, free Ubud pickup). From-price IDR 980,000 for the two published tickets. One WhatsApp thread — no payment to inquire.',
      updated: COOKING_GEO_UPDATED,
      bookHref: '/book?activity=combo-swing-cooking',
      bookLabel: 'Book swing + cooking',
      pairHref: '/tours/balinese-cooking-class',
      pairLabel: 'Cooking class only',
    }
  }

  if (COOKING_ARTICLE_SLUGS.has(slug)) {
    return {
      tldr: COOKING_GEO_TLDR,
      updated: COOKING_GEO_UPDATED,
      bookHref: '/book?activity=balinese-cooking-class',
      bookLabel: 'Book Tumang cooking',
      pairHref: '/tours/ubud-ricefield-cycling-tour',
      pairLabel: 'Pair with Pejeng cycling',
    }
  }

  if (JEEP_ARTICLE_SLUGS.has(slug)) {
    return {
      tldr: JEEP_GEO_TLDR,
      updated: JEEP_GEO_UPDATED,
      bookHref: '/tours/batur-sunrise-jeep-tour',
      bookLabel: 'Book Private Jeep',
      pairHref: '/tours/balinese-cooking-class',
      pairLabel: 'Pair with Tumang cooking',
    }
  }

  const activitySlug = ARTICLE_TO_ACTIVITY[slug]
  if (activitySlug) {
    const geo = getActivityGeo(activitySlug)
    if (!geo) return null
    return {
      tldr: geo.tldr,
      updated: ACTIVITY_GEO_UPDATED,
      bookHref: geo.bookHref,
      bookLabel: geo.bookLabel,
      pairHref: geo.pairHref,
      pairLabel: geo.pairLabel,
    }
  }

  if (HUB_ARTICLE_SLUGS.has(slug)) {
    return HUB_SNIPPET
  }

  return null
}

/** Compact answer-first GEO CTA for cluster / activity articles */
export default function ArticleGeoCta({ slug }: { slug: string }) {
  const geo = getArticleGeoSnippet(slug)
  if (!geo) return null

  return (
    <aside
      aria-label="Quick answer and booking"
      className="rounded-3xl border border-brand-green/10 bg-white p-6 md:p-7 shadow-sm space-y-4"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent-gold-dark">
        Quick answer · Updated {geo.updated}
      </p>
      <p className="geo-tldr article-geo-tldr text-brand-green-light leading-relaxed">
        {geo.tldr}
      </p>
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <Link
          href={geo.bookHref}
          className="inline-flex items-center justify-center rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-green-light transition-colors"
        >
          {geo.bookLabel}
        </Link>
        {geo.pairHref && geo.pairLabel ? (
          <Link
            href={geo.pairHref}
            className="inline-flex items-center justify-center rounded-full border border-brand-green/20 px-5 py-2.5 text-sm font-semibold text-brand-green hover:bg-brand-green/5 transition-colors"
          >
            {geo.pairLabel}
          </Link>
        ) : null}
      </div>
    </aside>
  )
}
