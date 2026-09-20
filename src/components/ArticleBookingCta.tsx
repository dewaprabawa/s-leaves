import Link from 'next/link'

export type ArticleCta = {
  headline: string
  body: string
  primaryHref: string
  primaryLabel: string
  secondaryHref?: string
  secondaryLabel?: string
}

const DEFAULT_CTA: ArticleCta = {
  headline: 'Ready to book a Ubud-area activity?',
  body: 'Clear IDR, WhatsApp confirmation, no payment to inquire. Cooking, cycling, ATV, rafting, jeep, coffee, and private day tours.',
  primaryHref: '/book',
  primaryLabel: 'Book on WhatsApp',
  secondaryHref: '/experiences',
  secondaryLabel: 'Browse all activities',
}

const CTA_BY_SLUG: Record<string, ArticleCta> = {
  'things-to-do-near-ubud-2026': {
    headline: 'Pick your Ubud day and message WhatsApp',
    body: 'Send name, hotel area, date, and guest count. We reply with the exact IDR total — no deposit to inquire.',
    primaryHref: '/book',
    primaryLabel: 'Book an activity',
    secondaryHref: '/experiences',
    secondaryLabel: 'See every experience',
  },
  'full-day-ubud-tour-guide-2026': {
    headline: 'Book the private full-day Ubud tour',
    body: 'From IDR 600,000 for car and English-speaking driver. Entrance fees and lunch not included.',
    primaryHref: '/tours/full-day-ubud-tour',
    primaryLabel: 'View full-day tour',
    secondaryHref: '/book',
    secondaryLabel: 'WhatsApp the date',
  },
  'half-day-ubud-tanah-lot-sunset-tour-2026': {
    headline: 'Book the Tanah Lot sunset half day',
    body: 'From IDR 450,000 · private car · about 6 hours. Entrance fees and dinner not included.',
    primaryHref: '/tours/half-day-ubud-tanah-lot-tour',
    primaryLabel: 'View sunset tour',
    secondaryHref: '/book',
    secondaryLabel: 'Confirm pickup time',
  },
  'luwak-coffee-plantation-umah-kuno-price-2026': {
    headline: 'Book ethical Luwak tasting at Umah Kuno',
    body: 'IDR 800,000 per person · minimum 3 guests. Transport not included. Cage-free civets only.',
    primaryHref: '/tours/luwak-coffee-plantation',
    primaryLabel: 'View coffee experience',
    secondaryHref: '/book',
    secondaryLabel: 'WhatsApp guest count',
  },
  'bali-atv-for-beginners-first-time-guide': {
    headline: 'Book a beginner ATV ride near Ubud',
    body: 'Single from IDR 750,000 at All New Bali Adventure — lunch, gear, insurance. Pickup IDR 400,000 or self-meet.',
    primaryHref: '/tours/bali-atv-adventure',
    primaryLabel: 'Book ATV on WhatsApp',
    secondaryHref: '/blog/how-much-does-atv-cost-bali-ubud-2026',
    secondaryLabel: 'See 2026 ATV prices',
  },
  'how-much-does-atv-cost-bali-ubud-2026': {
    headline: 'Lock a 2026 ATV price on WhatsApp',
    body: 'Single, tandem, or ATV + tubing. No upfront payment to inquire.',
    primaryHref: '/tours/bali-atv-adventure',
    primaryLabel: 'Book Bali ATV',
  },
  'bali-whitewater-rafting-near-ubud-guide': {
    headline: 'Book Class II–III rafting near Ubud',
    body: 'IDR 500,000, or IDR 450,000 for 2+ (min 2). Gear, guide, lunch, and insurance included.',
    primaryHref: '/tours/whitewater-rafting',
    primaryLabel: 'Book rafting',
  },
  'bali-canyon-tubing-guide-ubud': {
    headline: 'Book Wos River canyon tubing',
    body: 'IDR 500,000, or IDR 450,000 for 2+. Gentler than rafting. Popular after ATV.',
    primaryHref: '/tours/canyon-tubing',
    primaryLabel: 'Book tubing',
    secondaryHref: '/tours/bali-atv-adventure',
    secondaryLabel: 'Add ATV first',
  },
  'is-ubud-cycling-tour-worth-it': {
    headline: 'Book Pejeng ricefield cycling',
    body: 'IDR 750,000 · 2 hours · lunch · free Ubud pickup.',
    primaryHref: '/tours/ubud-ricefield-cycling-tour',
    primaryLabel: 'Book cycling',
    secondaryHref: '/book?activity=combo-cycling-cooking',
    secondaryLabel: 'Add Tumang cooking',
  },
  'ubud-ricefield-cycling-tour-guide-2026': {
    headline: 'Book the 2-hour Pejeng cycling tour',
    body: 'Lunch and free Ubud hotel pickup included. Message WhatsApp with your hotel name.',
    primaryHref: '/tours/ubud-ricefield-cycling-tour',
    primaryLabel: 'Book cycling',
  },
  'cycling-cooking-class-ubud-full-day-itinerary': {
    headline: 'Book the cycling + cooking culture day',
    body: 'Pejeng ride with lunch, then afternoon Tumang class. One WhatsApp thread.',
    primaryHref: '/book?activity=combo-cycling-cooking',
    primaryLabel: 'Book the combo',
    secondaryHref: '/tours/balinese-cooking-class',
    secondaryLabel: 'Cooking class only',
  },
  'cooking-class-ubud-price-2026-worth-it': {
    headline: 'Book Tumang cooking class (promo 450K)',
    body: 'Max 8 guests, complimentary Ubud pickup, 10+ dishes. No payment to inquire.',
    primaryHref: '/tours/balinese-cooking-class',
    primaryLabel: 'Book Tumang cooking',
  },
  'vegetarian-vegan-cooking-class-ubud': {
    headline: 'Request the vegetarian Tumang menu',
    body: 'Same promo IDR 450,000. Tell WhatsApp your diet when you book.',
    primaryHref: '/tours/balinese-cooking-class',
    primaryLabel: 'Book vegetarian class',
  },
  'morning-vs-afternoon-ubud-cooking-class': {
    headline: 'Choose morning market or afternoon kitchen',
    body: 'Same promo rate. Pair afternoon with Pejeng cycling.',
    primaryHref: '/tours/balinese-cooking-class',
    primaryLabel: 'Book a session',
  },
  'inside-balinese-cooking-class-pejeng': {
    headline: 'Book the village kitchen near Ubud',
    body: 'Chef Wayan Suryana · max 8 · free Ubud pickup.',
    primaryHref: '/tours/balinese-cooking-class',
    primaryLabel: 'Book Tumang',
  },
  'mount-batur-sunrise-jeep-tour-guide-2026': {
    headline: 'Book the no-hike Batur sunrise jeep',
    body: 'Island-wide pickup included. Meals not served on the jeep. Solo IDR 1.35M · 2 pax IDR 950K · 3+ IDR 750K.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book the jeep',
  },
  'mount-batur-jeep-vs-sunrise-trek': {
    headline: 'Book the crater-rim jeep (not the summit hike)',
    body: 'Private 4×4 to ~1,350m. Meals not included. Confirm guest count on WhatsApp.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book sunrise jeep',
  },
  'mount-batur-jeep-pickup-times-canggu-ubud-2026': {
    headline: 'Confirm your 02:00–03:00 jeep pickup',
    body: 'South Bali leaves earliest. Ubud is a little later. We lock the time on WhatsApp.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book with pickup',
  },
  'mount-batur-sunrise-jeep-tour-price-guide-2026': {
    headline: 'Get the exact jeep tier on WhatsApp',
    body: 'Solo, pair, or 3+ sharing one private 4×4. Meals not included.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book Batur jeep',
  },
  'how-to-book-bali-adventure-whatsapp': {
    headline: 'Open WhatsApp with your activity pre-filled',
    body: 'Name, ages, hotel, date, guest count. No upfront payment to inquire.',
    primaryHref: '/book',
    primaryLabel: 'Start a booking',
  },
  'ubud-hotel-pickup-bali-adventures-explained': {
    headline: 'Check if your hotel pickup is free',
    body: 'Free on cycling and Tumang cooking. Island-wide on the Batur jeep. IDR 400K on ATV / rafting / tubing.',
    primaryHref: '/book',
    primaryLabel: 'Ask about pickup',
    secondaryHref: '/experiences',
    secondaryLabel: 'Compare activities',
  },
  'bali-adventure-packages-prices-2026': {
    headline: 'Compare IDR and book the one you want',
    body: 'ATV, rafting, tubing, cycling, jeep, cooking, coffee, and day tours — one WhatsApp inbox.',
    primaryHref: '/book',
    primaryLabel: 'Book with a price',
    secondaryHref: '/experiences',
    secondaryLabel: 'Open the catalog',
  },
  'rafting-vs-tubing-vs-atv-near-ubud': {
    headline: 'Choose splash, float, or mud — then book',
    body: 'Rafting and tubing IDR 500K · 450K for 2+. ATV from 750K. Pickup IDR 400K if you want a hotel collect.',
    primaryHref: '/book',
    primaryLabel: 'Book the winner',
  },
  'atv-river-tubing-wos-river-bali': {
    headline: 'Book the land-then-water combo',
    body: 'ATV at All New Bali Adventure, then Wos River tubing. Ask WhatsApp for same-day timing.',
    primaryHref: '/tours/bali-atv-adventure',
    primaryLabel: 'Start with ATV',
    secondaryHref: '/tours/canyon-tubing',
    secondaryLabel: 'Tubing details',
  },
  'bali-airport-transfer-guide-dps-to-ubud': {
    headline: 'Book a private DPS → Ubud transfer',
    body: 'From IDR 700,000 per vehicle. Flight tracking, tolls, and parking included.',
    primaryHref: '/transfers',
    primaryLabel: 'View transfers',
  },
  'how-to-spot-ethical-luwak-coffee-in-bali': {
    headline: 'Book cage-free Luwak at Umah Kuno',
    body: 'IDR 800,000 per person · minimum 3 guests. Transport not included.',
    primaryHref: '/tours/luwak-coffee-plantation',
    primaryLabel: 'Book the tasting',
  },
  'luwak-coffee-ethical-sourcing': {
    headline: 'Taste ethical Luwak at Umah Kuno',
    body: 'We only list this plantation because civets stay free-roaming.',
    primaryHref: '/tours/luwak-coffee-plantation',
    primaryLabel: 'View Umah Kuno',
  },
  'pejeng-rice-terrace-cycling-vs-tegallalang': {
    headline: 'Book the quiet Pejeng cycling route',
    body: 'IDR 750,000 · lunch · free Ubud pickup. Not a Tegallalang queue.',
    primaryHref: '/tours/ubud-ricefield-cycling-tour',
    primaryLabel: 'Book cycling',
  },
  'private-atv-vs-mass-market-ubud': {
    headline: 'Book ATV at All New Bali Adventure',
    body: 'Published IDR, lunch, gear, insurance. Pickup IDR 400K or self-meet.',
    primaryHref: '/tours/bali-atv-adventure',
    primaryLabel: 'Book ATV',
  },
  'bali-atv-tour-ubud-guide': {
    headline: 'Book the Ubud-area ATV ride',
    body: 'Single from IDR 750,000 at the Sedang jungle arena.',
    primaryHref: '/tours/bali-atv-adventure',
    primaryLabel: 'Book ATV',
  },
  'perfect-one-day-ubud-itinerary': {
    headline: 'Turn this itinerary into a private car day',
    body: 'Full-day Ubud tour from IDR 600,000. Or split cycling + cooking on two bookings.',
    primaryHref: '/tours/full-day-ubud-tour',
    primaryLabel: 'Book the full-day tour',
    secondaryHref: '/book?activity=combo-cycling-cooking',
    secondaryLabel: 'Culture-day combo',
  },
}

export function getArticleBookingCta(slug: string): ArticleCta {
  return CTA_BY_SLUG[slug] ?? DEFAULT_CTA
}

export default function ArticleBookingCta({ slug }: { slug: string }) {
  const cta = getArticleBookingCta(slug)

  return (
    <aside
      aria-label="Book this activity"
      className="rounded-3xl border border-brand-green/15 bg-brand-green text-white p-6 md:p-8 space-y-4 shadow-md"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent-gold">
        Book with Sekar Bali Activity
      </p>
      <h2 className="font-display text-2xl md:text-3xl font-bold uppercase leading-tight">
        {cta.headline}
      </h2>
      <p className="text-white/85 leading-relaxed">{cta.body}</p>
      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <Link
          href={cta.primaryHref}
          className="inline-flex items-center justify-center rounded-full bg-accent-gold px-5 py-2.5 text-sm font-bold text-brand-green hover:bg-accent-gold-dark transition-colors"
        >
          {cta.primaryLabel}
        </Link>
        {cta.secondaryHref && cta.secondaryLabel ? (
          <Link
            href={cta.secondaryHref}
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            {cta.secondaryLabel}
          </Link>
        ) : null}
      </div>
    </aside>
  )
}
