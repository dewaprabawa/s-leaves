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
    body: 'Clear IDR, WhatsApp confirmation, no payment to inquire. Cooking, cycling, ATV, rafting, Swing Heaven, jeep, coffee, and private day tours.',
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
  'tandem-atv-ubud-price': {
    headline: 'Book single or tandem ATV on WhatsApp',
    body: 'Say 1 or 2 riders + hotel. Single from IDR 750,000 · tandem IDR 1,100,000 for two. Pickup IDR 400,000 or self-meet. No payment to inquire.',
    primaryHref: '/tours/bali-atv-adventure',
    primaryLabel: 'WhatsApp Consultation / Book',
    secondaryHref: '/book?activity=tandem-atv',
    secondaryLabel: 'Open tandem checkout',
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
    headline: 'Book a private Mount Batur jeep',
    body: 'Your private sit-in or tracking jeep, sunrise or sunset. Min 2 guests. 2 pax IDR 950K · 3+ IDR 750K. Meal included. Hot spring +IDR 150K with ticket included.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book Private Jeep',
  },
  'mount-batur-jeep-vs-sunrise-trek': {
    headline: 'Book a private crater-rim jeep (not the summit hike)',
    body: 'Your private 4×4 to ~1,350m. Meal included. Confirm guest count on WhatsApp.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book Private Jeep',
  },
  'mount-batur-jeep-pickup-times-canggu-ubud-2026': {
    headline: 'Confirm your private 02:00–03:00 jeep pickup',
    body: 'South Bali leaves earliest. Ubud is a little later. We lock the time on WhatsApp.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book Private Jeep',
  },
  'mount-batur-sunrise-jeep-tour-price-guide-2026': {
    headline: 'Get the private jeep tier on WhatsApp',
    body: 'Your private 4×4, min 2 guests. Pair or 3+ sharing. Meal included.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book Private Jeep',
  },
  'mount-batur-jeep-sunrise-vs-sunset': {
    headline: 'Choose sunrise or sunset — same private IDR',
    body: '02:00 dawn or 14:30–15:30 sunset. Min 2 guests. Meal included.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book Private Jeep',
    secondaryHref: '/blog/mount-batur-sit-in-jeep-vs-tracking',
    secondaryLabel: 'Sit-in or tracking?',
  },
  'mount-batur-sit-in-jeep-vs-tracking': {
    headline: 'Stay seated or add the guided walk',
    body: 'Same private rates. Still not the summit trek. Meal included.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book Private Jeep',
    secondaryHref: '/blog/mount-batur-jeep-vs-sunrise-trek',
    secondaryLabel: 'Jeep vs summit trek',
  },
  'private-kintamani-day-jeep-itinerary': {
    headline: 'Book Private Kintamani Day (promo 1.3M)',
    body: 'Jeep or tracking, hot spring ticket, meal, Umah Kuno, rice terrace. Min 2 guests.',
    primaryHref: '/tours/batur-sunrise-jeep-tour',
    primaryLabel: 'Book Kintamani Day',
    secondaryHref: '/blog/mount-batur-sunrise-jeep-tour-price-guide-2026',
    secondaryLabel: 'Short jeep prices',
  },
  'what-is-lawar-balinese-dish': {
    headline: 'Cook lawar at Tumang (promo 450K)',
    body: 'Hands-on village kitchen, max 8, free Ubud pickup. Request veg if you need it.',
    primaryHref: '/tours/balinese-cooking-class',
    primaryLabel: 'Book Tumang cooking',
    secondaryHref: '/blog/how-traditional-balinese-kitchens-work',
    secondaryLabel: 'How the kitchen works',
  },
  'how-traditional-balinese-kitchens-work': {
    headline: 'Cook in a family paon near Ubud',
    body: 'Your own station, 10+ dishes, Chef Wayan Suryana. Promo IDR 450,000.',
    primaryHref: '/tours/balinese-cooking-class',
    primaryLabel: 'Book the class',
  },
  'pound-spices-by-hand-not-blender': {
    headline: 'Pound Base Genep at Tumang',
    body: 'Stone mortar first, then 10+ dishes. Shared promo IDR 450,000.',
    primaryHref: '/tours/balinese-cooking-class',
    primaryLabel: 'Book Tumang',
    secondaryHref: '/blog/what-is-base-genep-balinese-spice-paste-guide',
    secondaryLabel: 'What is Base Genep?',
  },
  'ebike-vs-pedal-ubud-cycling-tour': {
    headline: 'Book the pedal Pejeng ride (not an e-bike)',
    body: 'IDR 750,000 · 2 hours · lunch · free Ubud pickup. Afternoon departure.',
    primaryHref: '/tours/ubud-ricefield-cycling-tour',
    primaryLabel: 'Book cycling',
    secondaryHref: '/book?activity=combo-cycling-cooking',
    secondaryLabel: 'Add Tumang cooking',
  },
  'what-to-wear-ubud-ricefield-cycling': {
    headline: 'Pack sneakers, then book the ride',
    body: 'Closed shoes, sun shirt, helmet included. IDR 750,000 with lunch.',
    primaryHref: '/tours/ubud-ricefield-cycling-tour',
    primaryLabel: 'Book cycling',
  },
  'ubud-cycling-tour-for-families': {
    headline: 'Book Pejeng cycling for the family',
    body: 'Send each child’s age. Lunch and free Ubud pickup included. Insurance 6–65.',
    primaryHref: '/tours/ubud-ricefield-cycling-tour',
    primaryLabel: 'Book family cycling',
    secondaryHref: '/tours/balinese-cooking-class',
    secondaryLabel: 'Add a cooking class',
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
    body: 'ATV, rafting, tubing, Swing Heaven, cycling, jeep, cooking, coffee, and day tours — one WhatsApp inbox.',
    primaryHref: '/book',
    primaryLabel: 'Book with a price',
    secondaryHref: '/experiences',
    secondaryLabel: 'Open the catalog',
  },
  'swing-heaven-bali-ubud-guide': {
    headline: 'Book Swing Heaven Bali from IDR 530K',
    body: 'Bongkasa jungle swings — lunch package 630K, dress hire 300K. WhatsApp booking, no deposit to inquire.',
    primaryHref: '/tours/swing-heaven-bali',
    primaryLabel: 'View Swing Heaven',
    secondaryHref: '/book?activity=swing-heaven',
    secondaryLabel: 'WhatsApp checkout',
  },
  'is-bali-swing-worth-it': {
    headline: 'Want the jungle-swing photo? Book Swing Heaven',
    body: 'Bongkasa park from IDR 530,000 — not Tegallalang. Lunch package and flying dress optional.',
    primaryHref: '/tours/swing-heaven-bali',
    primaryLabel: 'Book Swing Heaven',
    secondaryHref: '/blog/swing-heaven-bali-ubud-guide',
    secondaryLabel: 'Read the 2026 guide',
  },
  'swing-heaven-vs-tegallalang-bali-swing': {
    headline: 'Book the Bongkasa jungle park — not Tegallalang',
    body: 'Swing Heaven from IDR 530,000 over the Ayung River. Lunch package 630K. WhatsApp booking.',
    primaryHref: '/tours/swing-heaven-bali',
    primaryLabel: 'View Swing Heaven',
    secondaryHref: '/book?activity=swing-heaven',
    secondaryLabel: 'WhatsApp checkout',
  },
  'swing-heaven-bongkasa-location': {
    headline: 'Get the Bongkasa pin and book',
    body: 'Jl. Tangga Yuda, Bongkasa. Pickup IDR 400,000 or self-meet. Ticket from IDR 530,000.',
    primaryHref: '/tours/swing-heaven-bali',
    primaryLabel: 'Book Swing Heaven',
    secondaryHref: '/blog/ubud-hotel-pickup-bali-adventures-explained',
    secondaryLabel: 'Pickup rules',
  },
  'flying-dress-hire-bali-swing': {
    headline: 'Add a flying dress on the same invoice',
    body: 'Optional IDR 300,000 wardrobe at Swing Heaven. Ticket from 530K. Photos on your phone.',
    primaryHref: '/tours/swing-heaven-bali',
    primaryLabel: 'Book with dress hire',
    secondaryHref: '/book?activity=swing-heaven',
    secondaryLabel: 'WhatsApp checkout',
  },
  'bali-swing-with-lunch-ubud': {
    headline: 'Book Swing Heaven with or without lunch',
    body: 'IDR 530,000 ticket or IDR 630,000 with lunch. Same jungle spots in Bongkasa.',
    primaryHref: '/tours/swing-heaven-bali',
    primaryLabel: 'Choose the package',
    secondaryHref: '/book?activity=swing-heaven',
    secondaryLabel: 'WhatsApp lunch package',
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
  'tirta-empu-melukat-ubud-guide': {
    headline: 'Book private Tirta Empul or Beji melukat',
    body: 'IDR 1,200,000 per person · Ubud shuttle, guide, and breakfast. Choose the spring on WhatsApp.',
    primaryHref: '/tours/tirta-empu-purification',
    primaryLabel: 'View melukat',
    secondaryHref: '/book?activity=tirta-empu-purification',
    secondaryLabel: 'WhatsApp checkout',
  },
  'bali-temple-dress-code': {
    headline: 'Need a guided temple morning? Book melukat',
    body: 'Private Tirta Empul or Beji — IDR 1,200,000 includes shuttle, sarong, and breakfast.',
    primaryHref: '/tours/tirta-empu-purification',
    primaryLabel: 'Book melukat',
    secondaryHref: '/tours/balinese-cooking-class',
    secondaryLabel: 'Afternoon cooking class',
  },
  '5-essential-balinese-spices': {
    headline: 'Pound these spices at Tumang (promo 450K)',
    body: 'Max 8 guests, complimentary Ubud pickup, 10+ dishes. No payment to inquire.',
    primaryHref: '/tours/balinese-cooking-class',
    primaryLabel: 'Book Tumang cooking',
    secondaryHref: '/blog/what-is-base-genep-balinese-spice-paste-guide',
    secondaryLabel: 'What is Base Genep?',
  },
  'what-is-base-genep-balinese-spice-paste-guide': {
    headline: 'Make Base Genep at Tumang',
    body: 'Hand-pound the paste, then cook 10+ dishes. Promo IDR 450,000 · free Ubud pickup.',
    primaryHref: '/tours/balinese-cooking-class',
    primaryLabel: 'Book the class',
    secondaryHref: '/blog/pound-spices-by-hand-not-blender',
    secondaryLabel: 'Why we use a mortar',
  },
  'top-5-traditional-balinese-foods': {
    headline: 'Cook these dishes at Tumang',
    body: 'Sate lilit, lawar, sambal matah, and more — promo IDR 450,000, max 8.',
    primaryHref: '/tours/balinese-cooking-class',
    primaryLabel: 'Book Tumang cooking',
    secondaryHref: '/blog/what-is-lawar-balinese-dish',
    secondaryLabel: 'What is lawar?',
  },
  'bali-atv-all-new-bali-adventure-location-guide': {
    headline: 'Book ATV at All New Bali Adventure',
    body: 'Single from IDR 750,000 · tandem 1.1M. Pickup IDR 400,000 or self-meet in Sedang.',
    primaryHref: '/tours/bali-atv-adventure',
    primaryLabel: 'Book ATV',
    secondaryHref: '/blog/tandem-atv-ubud-price',
    secondaryLabel: 'Single vs tandem',
  },
  'ubud-atv-track-types-mud-jungle-vs-cave-tunnel': {
    headline: 'Book the jungle mud track (not a cave route)',
    body: 'All New Bali Adventure in Sedang — lunch, gear, insurance. We are not Kuber or Dragon Cave.',
    primaryHref: '/tours/bali-atv-adventure',
    primaryLabel: 'Book our ATV track',
    secondaryHref: '/blog/bali-atv-all-new-bali-adventure-location-guide',
    secondaryLabel: 'Arena directions',
  },
  'what-is-the-subak-system-bali': {
    headline: 'Ride Subak lanes on the Pejeng cycling tour',
    body: 'IDR 750,000 · 2 hours · lunch · free Ubud pickup. Quiet village paths, not Tegallalang.',
    primaryHref: '/tours/ubud-ricefield-cycling-tour',
    primaryLabel: 'Book cycling',
    secondaryHref: '/tours/balinese-cooking-class',
    secondaryLabel: 'Add Tumang cooking',
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
