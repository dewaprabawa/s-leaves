import { resolveBaliSafariSlug } from "@/data/parkWorkshopTours"

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
      title: 'Single vs tandem ATV price',
      href: '/blog/tandem-atv-ubud-price',
      blurb: 'Who should share one bike — 750K single vs 1.1M tandem.',
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
    {
      title: 'Swing Heaven (same Abiansemal district)',
      href: '/tours/swing-heaven-bali',
      blurb: 'Bongkasa jungle swing after the Sedang mud track.',
    },
    {
      title: 'Private Mount Batur jeep',
      href: '/tours/batur-sunrise-jeep-tour',
      blurb: 'Pre-dawn 4×4, meal included, island-wide pickup — not the summit hike.',
    },
  ],
  'whitewater-rafting': [
    {
      title: 'Ayung rafting Ubud price 2026',
      href: '/blog/rafting-ubud-price-2026',
      blurb: '500K · 450K for 2+ · lunch in · pickup extra.',
    },
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
    {
      title: 'Private Mount Batur jeep',
      href: '/tours/batur-sunrise-jeep-tour',
      blurb: 'Pre-dawn 4×4 with island-wide pickup — not the summit hike.',
    },
  ],
  'canyon-tubing': [
    {
      title: 'Wos River tubing price 2026',
      href: '/blog/wos-river-tubing-price-2026',
      blurb: '500K · 450K for 2+ · lunch not included.',
    },
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
    {
      title: 'Private Mount Batur jeep',
      href: '/tours/batur-sunrise-jeep-tour',
      blurb: 'Land-day 4×4 if you want sunrise without the river.',
    },
  ],
  'swing-heaven-bali': [
    {
      title: 'Swing Heaven Bali near Ubud',
      href: '/blog/swing-heaven-bali-ubud-guide',
      blurb: 'IDR 530K / 630K with lunch, spots, pickup, weather voucher.',
    },
    {
      title: 'Swing Heaven vs Tegallalang',
      href: '/blog/swing-heaven-vs-tegallalang-bali-swing',
      blurb: 'Jungle Ayung park vs the rice-terrace swing strip.',
    },
    {
      title: 'Bongkasa location & pickup',
      href: '/blog/swing-heaven-bongkasa-location',
      blurb: 'Jl. Tangga Yuda pin, Grab vs IDR 400K hotel collect.',
    },
    {
      title: 'Is the Bali Swing worth it?',
      href: '/blog/is-bali-swing-worth-it',
      blurb: 'When the jungle-swing photo is worth IDR 530K.',
    },
    {
      title: 'Flying dress hire',
      href: '/blog/flying-dress-hire-bali-swing',
      blurb: 'Optional IDR 300K wardrobe — photos on your phone.',
    },
    {
      title: 'Swing with lunch',
      href: '/blog/bali-swing-with-lunch-ubud',
      blurb: 'IDR 630K package vs the 530K ticket.',
    },
    {
      title: 'Swing Heaven + Tumang cooking',
      href: '/blog/swing-heaven-cooking-class-ubud',
      blurb: 'Morning Bongkasa swing, afternoon village kitchen — 980K from-price.',
    },
    {
      title: 'Private Mount Batur jeep',
      href: '/tours/batur-sunrise-jeep-tour',
      blurb: 'Jungle-swing photos by day, private Batur sunrise the next morning.',
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
      title: 'Swing Heaven + cooking (photo day)',
      href: '/blog/swing-heaven-cooking-class-ubud',
      blurb: 'If you want jungle-swing photos instead of paddies.',
    },
    {
      title: 'Private Tirta Empul / Beji',
      href: '/tours/tirta-empu-purification',
      blurb: 'Holy-spring morning, then keep the afternoon kitchen.',
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
    {
      title: 'Private Mount Batur jeep',
      href: '/tours/batur-sunrise-jeep-tour',
      blurb: 'Pair a village pedal morning with a private sunrise 4×4.',
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
      title: 'Swing Heaven + cooking itinerary',
      href: '/blog/swing-heaven-cooking-class-ubud',
      blurb: 'Morning Bongkasa jungle swing, afternoon Tumang kitchen.',
    },
    {
      title: 'Private Tirta Empul / Beji',
      href: '/tours/tirta-empu-purification',
      blurb: 'Holy-spring morning with shuttle, then this kitchen.',
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
      title: 'Private Mount Batur jeep',
      href: '/tours/batur-sunrise-jeep-tour',
      blurb: 'Pair a cooking afternoon with a private sunrise 4×4.',
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
    {
      title: 'Griya Beji vs Tirta Empul',
      href: '/blog/griya-beji-vs-tirta-empul-melukat',
      blurb: 'Waterfall park in Punggul vs the private 1.2M temple morning.',
    },
    {
      title: 'Tumang cooking class (afternoon)',
      href: '/tours/balinese-cooking-class',
      blurb: 'Kitchen meal after the temple breakfast — lunch is not on this ticket.',
    },
    {
      title: 'Pejeng ricefield cycling',
      href: '/tours/ubud-ricefield-cycling-tour',
      blurb: 'Quiet Subak ride if you want paddies instead of a second temple.',
    },
  ],
  'griya-beji-waterfall': [
    {
      title: 'Griya Beji Waterfall near Ubud',
      href: '/blog/griya-beji-waterfall-ubud-guide',
      blurb: 'Melukat 300K, palm 1M, healing 1.5M — Punggul prices and pickup.',
    },
    {
      title: 'Griya Beji vs Tirta Empul',
      href: '/blog/griya-beji-vs-tirta-empul-melukat',
      blurb: 'Different springs, different tickets — do not mix the names.',
    },
    {
      title: 'Palm reading at Griya Beji',
      href: '/blog/palm-reading-bali-griya-beji',
      blurb: 'IDR 1,000,000 · hands + birth date · book ahead.',
    },
    {
      title: 'Mental healing at Griya Beji',
      href: '/blog/mental-healing-bali-griya-beji',
      blurb: 'IDR 1,500,000 · guided relaxation, not a clinic.',
    },
    {
      title: 'Ubud hotel pickup explained',
      href: '/blog/ubud-hotel-pickup-bali-adventures-explained',
      blurb: 'IDR 400K hotel collect or self-meet in Punggul.',
    },
    {
      title: 'Long driver day + kitchen',
      href: '/blog/long-private-driver-day-ubud-2026',
      blurb: 'Morning waterfall, afternoon Tumang — pickup rules stay separate.',
    },
    {
      title: 'Private Bali itinerary',
      href: '/tours/bali-private-itinerary',
      blurb: 'Family or girls week — consultation only on WhatsApp.',
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
  'bali-private-itinerary': [
    {
      title: '6-day Bali girls trip itinerary',
      href: '/blog/bali-6-day-girls-trip-itinerary-2026',
      blurb: 'Seminyak + Swing Heaven + Uluwatu + Kintamani — consultation only on WhatsApp.',
    },
    {
      title: 'Family private itinerary',
      href: '/blog/bali-family-private-itinerary-2026',
      blurb: 'Slow days, cooking, cycling, no-hike jeep — consult on WhatsApp.',
    },
    {
      title: 'What we book vs you book',
      href: '/blog/bali-private-itinerary-what-we-book-vs-you-book',
      blurb: 'Driver, swing, jeep on our invoice. Clubs and spa on yours.',
    },
    {
      title: 'What to skip on a 6-day trip',
      href: '/blog/what-to-skip-on-a-6-day-bali-itinerary',
      blurb: 'No Penida, no Lovina, no extra temples or mall days.',
    },
    {
      title: 'Long private driver day',
      href: '/blog/long-private-driver-day-ubud-2026',
      blurb: 'One 10–14h car from IDR 600K plus cycling+cooking, swing+cooking, or Griya.',
    },
    {
      title: 'Swing Heaven Ubud guide',
      href: '/blog/swing-heaven-bali-ubud-guide',
      blurb: 'Bongkasa photo day from IDR 530,000 — not Tegallalang.',
    },
    {
      title: 'Private Mount Batur jeep',
      href: '/tours/batur-sunrise-jeep-tour',
      blurb: 'Crater-rim sunrise, meal included — not the summit hike.',
    },
    {
      title: 'Airport transfer DPS → Ubud',
      href: '/transfers',
      blurb: 'From IDR 700,000 per MPV. HiAce airport run quoted.',
    },
  ],
  'bali-bird-park': [
    { title: 'Bali Bird Park from Ubud 2026', href: '/blog/bali-bird-park-from-ubud-2026', blurb: 'IDR 585K · Batubulan shows · pickup quoted.' },
    { title: 'Zoo vs Safari vs Taro', href: '/blog/bali-zoo-vs-bali-safari-vs-taro', blurb: 'Bird Park is a fourth venue — not an elephant park.' },
    { title: 'Things to do near Ubud 2026', href: '/blog/things-to-do-near-ubud-2026', blurb: 'Family park tickets next to cooking and jeep prices.' },
  ],
  'elephant-mud-fun-at-bali-zoo-park': [
    { title: 'Zoo vs Safari vs Taro', href: '/blog/bali-zoo-vs-bali-safari-vs-taro', blurb: 'Mud fun is Bali Zoo in Singapadu — not Safari.' },
    { title: 'Bali Safari packages', href: '/blog/bali-safari-packages-compared-2026', blurb: 'If you wanted a safari journey instead.' },
    { title: 'Taro jungle ride + lunch', href: '/tours/jungle-safari-ride-and-lunch-elephant-safari-park-lodge', blurb: 'Quieter lodge stroll near Ubud.' },
  ],
  'bali-safari-and-marine-park': [
    { title: 'Bali Safari packages compared', href: '/blog/bali-safari-packages-compared-2026', blurb: 'Hopper 1M · Dragon 1.3M · Leopard 1.8M · Rhino 2.3M — pick the option on this page.' },
    { title: 'Zoo vs Safari vs Taro', href: '/blog/bali-zoo-vs-bali-safari-vs-taro', blurb: 'Three elephant venues, three clocks.' },
    { title: 'Taro jungle ride + lunch', href: '/tours/jungle-safari-ride-and-lunch-elephant-safari-park-lodge', blurb: 'Quieter lodge stroll near Ubud — not this park.' },
  ],
  'jungle-safari-ride-and-lunch-elephant-safari-park-lodge': [
    { title: 'Zoo vs Safari vs Taro', href: '/blog/bali-zoo-vs-bali-safari-vs-taro', blurb: 'Taro is the Ubud-area lodge, not Gianyar Safari.' },
    { title: 'Taro night dinner', href: '/tours/night-safari-dinner-under-the-stars-elephant-safari-park-lodge', blurb: 'Same lodge, evening ticket.' },
    { title: 'Bali Safari tickets', href: '/tours/bali-safari-and-marine-park', blurb: 'Hopper to Rhino plus Night Safari — pick a price option.' },
  ],
  'night-safari-dinner-under-the-stars-elephant-safari-park-lodge': [
    { title: 'Zoo vs Safari vs Taro', href: '/blog/bali-zoo-vs-bali-safari-vs-taro', blurb: 'Taro dinner ≠ Bali Safari Night Safari.' },
    { title: 'Taro jungle ride + lunch', href: '/tours/jungle-safari-ride-and-lunch-elephant-safari-park-lodge', blurb: 'Daytime ticket at the same lodge.' },
    { title: 'Bali Safari Night Safari', href: '/tours/bali-safari-and-marine-park', blurb: 'BBQ + night journey — evening option on the Safari page.' },
  ],
  canyoning: [
    { title: 'Canyoning vs tubing vs buggies', href: '/blog/bali-canyoning-vs-tubing-vs-buggies', blurb: 'Ropes vs sit-on-tube vs Polaris laps.' },
    { title: 'Wos River canyon tubing', href: '/tours/canyon-tubing', blurb: 'Easy float at IDR 500K — not a gorge descent.' },
    { title: 'Jungle buggies 3 laps', href: '/tours/jungle-buggies-complete-3-laps-tour', blurb: 'Land Polaris course if you want engines, not ropes.' },
  ],
  'jungle-buggies-complete-3-laps-tour': [
    { title: 'Canyoning vs tubing vs buggies', href: '/blog/bali-canyoning-vs-tubing-vs-buggies', blurb: 'Buggies are not the Sedang ATV.' },
    { title: 'Sedang ATV', href: '/tours/bali-atv-adventure', blurb: 'Jungle mud at All New Bali Adventure from IDR 750K.' },
    { title: 'Bali canyoning', href: '/tours/canyoning', blurb: 'Gorge descent if you wanted water + ropes.' },
  ],
  'dirt-bike-kintamani-black-lava': [
    { title: 'Dirt bike vs Batur jeep', href: '/blog/kintamani-dirt-bike-vs-batur-jeep', blurb: 'You ride vs you sit at a crater-rim viewpoint.' },
    { title: 'Private Mount Batur jeep', href: '/tours/batur-sunrise-jeep-tour', blurb: 'Meal + island-wide pickup — not the summit hike.' },
    { title: 'Tabanan dirt bike', href: '/tours/dirt-bike-tabanan-day-night', blurb: 'Rainforest / Jatiluwih line from IDR 2.1M.' },
  ],
  'dirt-bike-tabanan-day-night': [
    { title: 'Dirt bike vs Batur jeep', href: '/blog/kintamani-dirt-bike-vs-batur-jeep', blurb: 'Tabanan is rainforest; Kintamani is lava.' },
    { title: 'Sunset-beach finish', href: '/tours/dirt-bike-tabanan-jungle-sunset-beach', blurb: 'Same from-price, west-coast sand ending.' },
    { title: 'Kintamani black lava', href: '/tours/dirt-bike-kintamani-black-lava', blurb: 'Bigger enduro day from IDR 4.1M.' },
  ],
  'dirt-bike-tabanan-jungle-sunset-beach': [
    { title: 'Dirt bike vs Batur jeep', href: '/blog/kintamani-dirt-bike-vs-batur-jeep', blurb: 'Sunset beach is still a dirt bike, not a jeep.' },
    { title: 'Tabanan day & night', href: '/tours/dirt-bike-tabanan-day-night', blurb: 'Same tracks without the beach finish.' },
    { title: 'Kintamani black lava', href: '/tours/dirt-bike-kintamani-black-lava', blurb: 'Altitude lava dunes instead of Tabanan jungle.' },
  ],
  'batik-class': [
    { title: 'Ubud workshop classes 2026', href: '/blog/ubud-workshop-classes-2026', blurb: 'Batik vs silver vs lontar vs canang.' },
    { title: 'Silver making class', href: '/tours/silver-making-class', blurb: '3 hours · 5 g silver · same from-price band.' },
    { title: 'Tumang cooking class', href: '/tours/balinese-cooking-class', blurb: 'Kitchen instead of wax — free Ubud pickup.' },
  ],
  'silver-making-class': [
    { title: 'Ubud workshop classes 2026', href: '/blog/ubud-workshop-classes-2026', blurb: '5 g silver included; extra silver quoted.' },
    { title: 'Batik class', href: '/tours/batik-class', blurb: '3-hour cloth workshop if you wanted wax, not metal.' },
    { title: 'Lontar weaving', href: '/tours/lontar-weaving-class', blurb: '2-hour palm craft from IDR 600K.' },
  ],
  'lontar-weaving-class': [
    { title: 'Ubud workshop classes 2026', href: '/blog/ubud-workshop-classes-2026', blurb: 'Lontar is the basket craft; canang is the daily offering.' },
    { title: 'Canang offering class', href: '/tours/balinese-offering-class', blurb: 'Weave the offerings you see on every doorway.' },
    { title: 'Bamboo carving', href: '/tours/bamboo-carving-class', blurb: '2-hour carved souvenir instead of palm.' },
  ],
  'balinese-dance-class': [
    { title: 'Ubud workshop classes 2026', href: '/blog/ubud-workshop-classes-2026', blurb: 'Beginner studio class — not a Kecak ticket.' },
    { title: 'Canang offering class', href: '/tours/balinese-offering-class', blurb: 'Pair movement with the daily offering craft.' },
    { title: 'Tumang cooking class', href: '/tours/balinese-cooking-class', blurb: 'Hands-on kitchen if you wanted food, not dance.' },
  ],
  'bamboo-carving-class': [
    { title: 'Ubud workshop classes 2026', href: '/blog/ubud-workshop-classes-2026', blurb: 'Small animal motif — typically dragonfly or butterfly.' },
    { title: 'Lontar weaving', href: '/tours/lontar-weaving-class', blurb: 'Palm basket instead of carved bamboo.' },
    { title: 'Batik class', href: '/tours/batik-class', blurb: '3-hour cloth if you wanted wax-resist.' },
  ],
  'balinese-offering-class': [
    { title: 'Ubud workshop classes 2026', href: '/blog/ubud-workshop-classes-2026', blurb: 'Workshop, not a temple ceremony.' },
    { title: 'Griya Beji Waterfall', href: '/tours/griya-beji-waterfall', blurb: 'Actual waterfall melukat if you wanted ritual.' },
    { title: 'Lontar weaving', href: '/tours/lontar-weaving-class', blurb: 'Same palm family — offering baskets.' },
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
  'bali-private-itinerary': {
    title: 'From our itinerary desk',
    body: 'This product is consultation only — paste the plan on WhatsApp, do not use the booking form. Families and groups of 6 usually need a HiAce, not a 4-seat car — we quote that first. We lock Swing Heaven, cooking, cycling, or the Batur jeep on our invoice. Beach-club and spa reservations stay on your cards; the driver still hits those pins.',
  },
  'half-day-ubud-tanah-lot-tour': {
    title: 'From our sunset-run drivers',
    body: 'The non-negotiable is arriving at Tanah Lot before the light goes. We shift the 1:00 PM-ish pickup with the season and keep Ubud stops short on purpose. Bring a sarong; the temple ticket is paid at the gate.',
  },
  'canyon-tubing': {
    title: 'From our Wos River crew',
    body: 'Tubing is the easy water half-day — sit on the tube, follow the guide, no paddle team. We often run it after an ATV session when the river level allows. Say if you want both on one WhatsApp thread.',
  },
  'swing-heaven-bali': {
    title: 'From our Bongkasa swing hosts',
    body: 'We book Swing Heaven on Jl. Tangga Yuda, Bongkasa — jungle swings and nests over the Ayung River, not the Tegallalang selfie strip. Tell us if you want the lunch package or a flying dress so the lobby has it ready. Photos are on your phone; rain days get a 7-day venue voucher, not a cash refund once the ticket is issued.',
  },
  'griya-beji-waterfall': {
    title: 'From our Punggul purification hosts',
    body: 'Taman Beji Griya Waterfall is a living shrine on Jl. Mawar, Desa Punggul — waterfall melukat, palm reading, and mental healing. It is not Tirta Empul and not the Pura Beji spring on our 1.2M private ticket. We confirm the 2026 park board and practitioner availability on WhatsApp. Healing is guided relaxation, not a hospital clinic.',
  },
  'bali-bird-park': {
    title: 'From our booking desk',
    body: 'We book Bali Bird Park in Batubulan the same way we book Swing Heaven — WhatsApp date and guest count, then we confirm the ticket. We do not run the park. Pickup is a quoted driver or self-meet at the gate, never assumed in the from-price.',
  },
  'bali-safari-and-marine-park': {
    title: 'From our booking desk',
    body: 'Safari package names are easy to mix up. Pick Hopper, Dragon, Leopard, Rhino, elephant-back, or Night on this page — or say the name on WhatsApp — and we will not upsell you a ride you did not ask for. We book the published park ticket; pickup is shuttle or a quoted car.',
  },
  canyoning: {
    title: 'From our booking desk',
    body: 'Canyoning only works if every guest sends age, height, weight, and shoe size. We will not confirm a line without those numbers. This is a gorge with ropes — not Wos River tubing and not a Penida boat.',
  },
}

export function getTourRelatedGuides(slug: string): TourRelatedGuide[] {
  return TOUR_RELATED_GUIDES[resolveBaliSafariSlug(slug)] ?? []
}

export function getTourHostNote(slug: string) {
  return TOUR_HOST_NOTES[resolveBaliSafariSlug(slug)]
}
