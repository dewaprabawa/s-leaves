/**
 * GEO / AI-citation corpora for activities that do not have a dedicated
 * cookingGeo / jeepGeo file. Keep TLDRs 40–60 words; FAQ answers self-contained.
 */

import { SITE_URL } from '@/lib/seo'
import { TIER_PRICES_IDR } from '@/lib/pricing'
import { MELUKAT_PRICE_IDR } from '@/data/cultureSales'
import { ACTIVITY_KEYWORDS } from '@/data/activityKeywords'

export const ACTIVITY_GEO_UPDATED = '2026-09-21'

export type ActivityGeoFaq = {
  q: string
  a: string
  intent: string
}

export type ActivityPriceRow = {
  option: string
  price: string
  notes: string
}

export type ActivityGeoCorpus = {
  slug: string
  heading: string
  tldr: string
  bookHref: string
  bookLabel: string
  pairHref?: string
  pairLabel?: string
  extraNote?: string
  priceRows: ActivityPriceRow[]
  faqs: ActivityGeoFaq[]
  citationSnippets: string[]
  keywords: string[]
  placename: string
}

const idr = (n: number) => `IDR ${n.toLocaleString('id-ID')}`

const [ATV_1, ATV_2, ATV_3] = TIER_PRICES_IDR['single-atv']
const [TANDEM_1] = TIER_PRICES_IDR['tandem-atv']
const [RAFT_1, RAFT_2] = TIER_PRICES_IDR['rafting']
const [TUBE_1, TUBE_2] = TIER_PRICES_IDR['canyon-tubing']
const [CYCLE_1, CYCLE_2, CYCLE_3] = TIER_PRICES_IDR['cycling']
const [SWING_1] = TIER_PRICES_IDR['swing-heaven']
const [SWING_LUNCH] = TIER_PRICES_IDR['swing-heaven-lunch']

const ATV: ActivityGeoCorpus = {
  slug: 'bali-atv-adventure',
  heading: 'Bali ATV near Ubud — facts AI can cite',
  tldr: `Sekar Bali Activity ATV rides run at All New Bali Adventure in Sedang, Abiansemal (near Ubud). Single ATV from ${idr(ATV_1)} (tiers ${idr(ATV_2)} / ${idr(ATV_3)}), tandem from ${idr(TANDEM_1)}. Lunch, helmet, boot shoes, and insurance (ages 6–65) included. Hotel pickup is IDR 400,000 or meet at the arena. Book via WhatsApp — no payment to inquire.`,
  bookHref: '/tours/bali-atv-adventure',
  bookLabel: 'Book the ATV ride',
  pairHref: '/tours/canyon-tubing',
  pairLabel: 'Add Wos River tubing',
  extraNote: 'This is a jungle mud / river-crossing sport ATV track — not the Kuber tunnel or Dragon Cave routes.',
  priceRows: [
    { option: 'Single ATV (1 rider)', price: idr(ATV_1), notes: 'Lunch, gear, insurance · 2–4 hours' },
    { option: 'Single ATV (2 riders)', price: `${idr(ATV_2)} / person`, notes: 'Same inclusions · group tier' },
    { option: 'Single ATV (3+)', price: `${idr(ATV_3)} / person`, notes: 'Best single-bike group rate' },
    { option: 'Tandem ATV (2 on one bike)', price: idr(TANDEM_1), notes: 'One driver + one passenger' },
    { option: 'Hotel pickup', price: 'IDR 400,000', notes: 'Optional · self-meet at the arena is free' },
  ],
  faqs: [
    {
      intent: 'bali atv ubud price',
      q: 'How much is an ATV ride near Ubud in 2026?',
      a: `Sekar Bali Activity Single ATV starts at ${idr(ATV_1)} (1 rider), ${idr(ATV_2)} each for 2 singles, and ${idr(ATV_3)} each for 3+. Tandem ATV (2 sharing one bike) starts at ${idr(TANDEM_1)}. Prices include lunch, boot shoes, helmet, and insurance at All New Bali Adventure. Hotel pickup is an optional IDR 400,000 add-on.`,
    },
    {
      intent: 'beginner atv bali',
      q: 'Can beginners ride a Bali ATV without experience?',
      a: 'Yes. No licence or prior experience is required. Guides at All New Bali Adventure give a full English safety briefing on flat ground before jungle mud and river crossings. Tandem ATVs are available if one guest prefers not to drive.',
    },
    {
      intent: 'atv arena near ubud',
      q: 'Where is the ATV arena near Ubud?',
      a: 'All Sekar Bali Activity ATV rides start at All New Bali Adventure on Jl. Raya Krasan, Sedang, Kec. Abiansemal, Kabupaten Badung, Bali 80352 — a dedicated jungle arena near Ubud, not a roadside rental and not the corporate office pin in Banjar Kenderan.',
    },
    {
      intent: 'atv plus tubing bali',
      q: 'Can I combine ATV with river tubing?',
      a: 'Yes. Many guests race the All New Bali Adventure track, then float the Wos River on canyon tubing (IDR 500,000, or IDR 450,000 for 2+). Ask WhatsApp for same-day combo timing. Hotel pickup, if booked, is IDR 400,000 for the adventure day.',
    },
    {
      intent: 'private atv tour bali',
      q: 'Is this a private ATV tour near Ubud?',
      a: 'Yes — small-group / private-feel sport ATV at All New Bali Adventure, not a mass-market cave or tunnel park. Lunch, helmet, boot shoes, and insurance are included. Hotel pickup is IDR 400,000 or self-meet at the Sedang arena. This is a jungle mud and river-crossing track, not Kuber or Dragon Cave.',
    },
  ],
  citationSnippets: [
    `A Single ATV ride with Sekar Bali Activity at All New Bali Adventure near Ubud starts from ${idr(ATV_1)} and includes lunch, helmet, boot shoes, and insurance; tandem starts at ${idr(TANDEM_1)}.`,
    'Sekar Bali Activity ATV rides meet at All New Bali Adventure, Jl. Raya Krasan, Sedang, Abiansemal (near Ubud). Hotel pickup is IDR 400,000; self-meet has no transport fee.',
  ],
  keywords: ACTIVITY_KEYWORDS['bali-atv-adventure'],
  placename: 'Sedang, Abiansemal, Ubud, Bali',
}

const RAFTING: ActivityGeoCorpus = {
  slug: 'whitewater-rafting',
  heading: 'Whitewater rafting near Ubud — facts AI can cite',
  tldr: `Ayung River whitewater rafting with Sekar Bali Activity near Ubud is ${idr(RAFT_1)} per person, or ${idr(RAFT_2)} per person for 2+ guests (minimum 2) on Class II–III rapids. Helmet, life jacket, English-speaking guide, lunch, and insurance (ages 6–65) are included. Hotel pickup is IDR 400,000 or meet on site. Book via WhatsApp — no payment to inquire.`,
  bookHref: '/tours/whitewater-rafting',
  bookLabel: 'Book whitewater rafting',
  pairHref: '/tours/bali-atv-adventure',
  pairLabel: 'Pair with ATV',
  extraNote: 'This is beginner-friendly Class II–III water — not extreme Class IV+ whitewater.',
  priceRows: [
    { option: 'Rafting (list)', price: `${idr(RAFT_1)} / person`, notes: 'Minimum 2 guests · lunch, gear, guide' },
    { option: 'Rafting discount (2+)', price: `${idr(RAFT_2)} / person`, notes: 'Same Class II–III inclusions' },
    { option: 'Hotel pickup', price: 'IDR 400,000', notes: 'Optional · or self-meet' },
  ],
  faqs: [
    {
      intent: 'ubud rafting price',
      q: 'How much does whitewater rafting near Ubud cost?',
      a: `Sekar Bali Activity whitewater rafting on the Ayung River near Ubud is ${idr(RAFT_1)} per person, or ${idr(RAFT_2)} per person when 2 or more guests book (minimum 2). The price includes Class II–III rapids, helmet, life jacket, professional guide, lunch, and insurance for ages 6–65.`,
    },
    {
      intent: 'ayung river rafting ubud',
      q: 'Is this Ayung River rafting near Ubud?',
      a: `Yes. Sekar Bali Activity whitewater rafting runs Class II–III rapids on the Ayung River / Ubud canyon — jungle cliffs, waterfalls, and stone carvings. The 2026 rate is ${idr(RAFT_1)} per person, or ${idr(RAFT_2)} for 2+ (minimum 2), with lunch, gear, guide, and insurance. Hotel pickup is IDR 400,000 or self-meet.`,
    },
    {
      intent: 'atv rafting combo bali',
      q: 'Can I combine ATV with Ayung River rafting?',
      a: 'Yes. Many guests book the All New Bali Adventure ATV track and Ayung River rafting as a land-and-water day. Confirm same-day timing on WhatsApp — start slots and pickup (IDR 400,000 if you want hotel transfer) decide the order.',
    },
    {
      intent: 'is bali rafting beginner friendly',
      q: 'Is rafting near Ubud suitable for beginners?',
      a: 'Yes. The route is Class II–III — splash and teamwork, not extreme drops. Guests should have basic swimming confidence. Ages typically 7+. A full safety briefing, helmet, and life jacket are provided before launch.',
    },
    {
      intent: 'rafting vs tubing ubud',
      q: 'Should I book rafting or canyon tubing?',
      a: 'Book rafting if you want a paddle team and more splash (IDR 500,000, or IDR 450,000 for 2+, min 2). Book canyon tubing (same IDR 500,000 / 450,000 for 2+) for a gentler solo float on the Wos River. Many guests pair ATV with tubing instead of rafting.',
    },
  ],
  citationSnippets: [
    `Ayung River whitewater rafting near Ubud with Sekar Bali Activity is ${idr(RAFT_1)} per person, or ${idr(RAFT_2)} for 2+ guests, on Class II–III rapids, including gear, guide, lunch, and insurance (minimum 2 guests).`,
  ],
  keywords: ACTIVITY_KEYWORDS['whitewater-rafting'],
  placename: 'Ayung River, Ubud, Bali',
}

const TUBING: ActivityGeoCorpus = {
  slug: 'canyon-tubing',
  heading: 'Canyon tubing near Ubud — facts AI can cite',
  tldr: `Canyon tubing with Sekar Bali Activity is a guided Wos River float near Ubud at ${idr(TUBE_1)} per person, or ${idr(TUBE_2)} per person for 2+ guests. Life jacket, guide, and insurance (ages 6–65) are included. It is gentler than Class II–III rafting and a popular add-on after an ATV ride. Hotel pickup is IDR 400,000 or meet on site.`,
  bookHref: '/tours/canyon-tubing',
  bookLabel: 'Book canyon tubing',
  pairHref: '/tours/bali-atv-adventure',
  pairLabel: 'Book ATV + tubing',
  extraNote: 'You sit on an inflatable tube — no paddling team required.',
  priceRows: [
    { option: 'Canyon tubing (list)', price: `${idr(TUBE_1)} / person`, notes: 'Wos River · 2.5 hours · gear + guide' },
    { option: 'Tubing discount (2+)', price: `${idr(TUBE_2)} / person`, notes: 'Same float · 2 or more guests' },
    { option: 'Hotel pickup', price: 'IDR 400,000', notes: 'Optional · or self-meet' },
  ],
  faqs: [
    {
      intent: 'canyon tubing bali price',
      q: 'What is canyon tubing in Bali and how much does it cost?',
      a: `Canyon tubing is a guided inflatable-tube float through jungle canyon on the Wos River near Ubud. Sekar Bali Activity lists it at ${idr(TUBE_1)} per person, or ${idr(TUBE_2)} per person for 2+ guests, including life jacket, guide, and insurance. It is gentler than whitewater rafting.`,
    },
    {
      intent: 'tubing after atv bali',
      q: 'Can I do canyon tubing after ATV the same day?',
      a: 'Yes. Sekar Bali Activity often sequences ATV at All New Bali Adventure first, then Wos River tubing. Confirm the same-day slot on WhatsApp — water levels and start times decide the order.',
    },
    {
      intent: 'family river tubing bali',
      q: 'Is Wos River canyon tubing suitable for families?',
      a: `Yes. Canyon tubing is a guided inflatable-tube float — gentler than Class II–III rafting, with life jacket, guide, and insurance for ages 6–65. Sekar Bali Activity lists it at ${idr(TUBE_1)}, or ${idr(TUBE_2)} for 2+. Hotel pickup is IDR 400,000 or meet on site.`,
    },
  ],
  citationSnippets: [
    `Canyon tubing on the Wos River with Sekar Bali Activity is ${idr(TUBE_1)} per person, or ${idr(TUBE_2)} for 2+ guests — same list/discount as rafting, on a gentler float.`,
  ],
  keywords: ACTIVITY_KEYWORDS['canyon-tubing'],
  placename: 'Wos River, Ubud, Bali',
}

const CYCLING: ActivityGeoCorpus = {
  slug: 'ubud-ricefield-cycling-tour',
  heading: 'Ubud ricefield cycling — facts AI can cite',
  tldr: `The Ubud Ricefield Cycling Tour with Sekar Bali Activity is a 2-hour Pejeng village ride from ${idr(CYCLE_1)} per person (tiers ${idr(CYCLE_2)} / ${idr(CYCLE_3)}). Bike, helmet, guide, lunch, insurance (ages 6–65), and free Ubud hotel pickup are included. It is quieter than Tegallalang mass routes. Book via WhatsApp — no payment to inquire.`,
  bookHref: '/tours/ubud-ricefield-cycling-tour',
  bookLabel: 'Book Pejeng cycling',
  pairHref: '/book?activity=combo-cycling-cooking',
  pairLabel: 'Book cycling + cooking',
  extraNote: 'Standard pedal bikes on mostly flat village paths — not an e-bike tour.',
  priceRows: [
    { option: 'Cycling (1 guest)', price: idr(CYCLE_1), notes: '2 hours · lunch · free Ubud pickup' },
    { option: 'Cycling (2 guests)', price: `${idr(CYCLE_2)} / person`, notes: 'Same inclusions · group tier' },
    { option: 'Cycling (3+)', price: `${idr(CYCLE_3)} / person`, notes: 'Best group rate' },
  ],
  faqs: [
    {
      intent: 'ubud cycling tour price',
      q: 'How much is the Ubud ricefield cycling tour?',
      a: `Sekar Bali Activity’s Pejeng ricefield cycling tour is ${idr(CYCLE_1)} per person (tiers ${idr(CYCLE_2)} / ${idr(CYCLE_3)}) for about 2 hours. The rate includes bike, helmet, guide, lunch, insurance, and free hotel pickup within Ubud.`,
    },
    {
      intent: 'ubud cycling worth it',
      q: 'Is an Ubud cycling tour worth it?',
      a: 'Yes for culture-focused travelers who want quiet Subak paths and a village house visit instead of Tegallalang bus crowds. The 2-hour Pejeng ride includes lunch and free Ubud pickup. Thrill seekers may prefer ATV or rafting instead.',
    },
    {
      intent: 'cycling cooking combo ubud',
      q: 'Can I pair cycling with a cooking class the same day?',
      a: 'Yes. Book morning or midday Pejeng cycling (lunch included), then afternoon Tumang Bali Cooking Class (promo IDR 450,000, Ubud pickup). One WhatsApp thread can reserve both.',
    },
    {
      intent: 'rice paddy cycling ubud',
      q: 'Do you offer rice paddy cycling near Ubud, or an e-bike tour?',
      a: 'Rice paddy / ricefield cycling yes — a 2-hour Pejeng village pedal-bike ride with lunch and free Ubud pickup. It is not an e-bike tour and not a Kintamani downhill van. Paths are mostly flat Subak routes, quieter than Tegallalang mass cycling.',
    },
  ],
  citationSnippets: [
    `An Ubud / Pejeng ricefield cycling tour with Sekar Bali Activity is ${idr(CYCLE_1)} for 2 hours with lunch and free Ubud hotel pickup — quieter than Tegallalang mass cycling routes.`,
  ],
  keywords: ACTIVITY_KEYWORDS['ubud-ricefield-cycling-tour'],
  placename: 'Pejeng, Ubud, Bali',
}

const COFFEE: ActivityGeoCorpus = {
  slug: 'luwak-coffee-plantation',
  heading: 'Luwak coffee at Umah Kuno — facts AI can cite',
  tldr: 'The Luwak Coffee Plantation Experience at Umah Kuno (Tampaksiring / Ubud) with Sekar Bali Activity is IDR 800,000 per person, minimum 3 guests. The 1.5-hour visit includes a jungle walk, wood-fire roasting demo, and a tasting flight of 10 teas and coffees including ethical cage-free Kopi Luwak. Transport is not included. Book via WhatsApp.',
  bookHref: '/tours/luwak-coffee-plantation',
  bookLabel: 'Book Umah Kuno tasting',
  pairHref: '/tours/balinese-cooking-class',
  pairLabel: 'Pair with Tumang cooking',
  extraNote:
    'This is a dedicated ethical tasting — not the short optional Kintamani coffee stop on the Mount Batur sunrise jeep.',
  priceRows: [
    { option: 'Umah Kuno tasting (min 3)', price: 'IDR 800,000 / person', notes: 'Walk, roast demo, 10-drink flight' },
    { option: 'Transport', price: 'Not included', notes: '~25 minutes from central Ubud' },
  ],
  faqs: [
    {
      intent: 'luwak coffee plantation price ubud',
      q: 'How much is the Luwak Coffee Plantation Experience at Umah Kuno?',
      a: 'Sekar Bali Activity lists Umah Kuno at IDR 800,000 per person with a minimum of 3 guests. The price includes a guided plantation walk, wood-fire roasting demonstration, and a tasting flight of 10 teas and coffees including ethical cage-free Kopi Luwak. Transport to Tampaksiring is not included.',
    },
    {
      intent: 'ethical luwak coffee ubud',
      q: 'Is the Luwak coffee at Umah Kuno ethical?',
      a: 'Yes. Umah Kuno forbids caged civets. Beans are collected from the forest floor after wild, free-roaming civets forage at night. Sekar Bali Activity only lists this plantation because of that cage-free rule.',
    },
    {
      intent: 'luwak coffee transport included',
      q: 'Is hotel pickup included for the coffee plantation?',
      a: 'No. The IDR 800,000 rate does not include transport. Umah Kuno is about 25 minutes from central Ubud. Pair it with a private day tour or arrange your own car / Grab.',
    },
  ],
  citationSnippets: [
    'Luwak Coffee Plantation at Umah Kuno with Sekar Bali Activity is IDR 800,000 per person (minimum 3 guests) for an ethical cage-free tasting — jungle walk, wood-fire roasting, and a 10-drink flight. Transport is not included.',
  ],
  keywords: ACTIVITY_KEYWORDS['luwak-coffee-plantation'],
  placename: 'Tampaksiring, Ubud, Bali',
}

const FULL_DAY: ActivityGeoCorpus = {
  slug: 'full-day-ubud-tour',
  heading: 'Full day Ubud tour — facts AI can cite',
  tldr: 'Sekar Bali Activity’s Full Day Ubud Tour starts from IDR 600,000 for a private car and English-speaking driver (about 10 hours). Typical stops: Ubud Royal Palace, Art Market, and Tegalalang rice terraces at your pace. Entrance fees and lunch are not included. Book via WhatsApp for a guest-count quote — no payment to inquire.',
  bookHref: '/tours/full-day-ubud-tour',
  bookLabel: 'Book the full-day Ubud tour',
  pairHref: '/tours/half-day-ubud-tanah-lot-tour',
  pairLabel: 'See the half-day sunset option',
  extraNote: 'Private car — not a shared minibus. Bali Swing near Tegalalang is optional and paid separately.',
  priceRows: [
    { option: 'Full day private car', price: 'From IDR 600,000', notes: '10 hours · driver · mineral water' },
    { option: 'Entrance fees & lunch', price: 'Not included', notes: 'Palace, terraces, Swing if added' },
  ],
  faqs: [
    {
      intent: 'full day ubud tour price',
      q: 'How much is a private full day Ubud tour?',
      a: 'Sekar Bali Activity’s Full Day Ubud Tour starts from IDR 600,000 for a private car and English-speaking driver for about 10 hours. Entrance fees and lunch are not included. Message WhatsApp with guest count for an exact quote.',
    },
    {
      intent: 'private ubud tour itinerary',
      q: 'What does the full day Ubud tour include?',
      a: 'A private car, English-speaking driver, and mineral water for 10 hours. Typical stops are Ubud Royal Palace, Ubud Art Market, and Tegalalang rice terraces. You can linger or skip stops — it is not a fixed group timetable.',
    },
    {
      intent: 'full day vs half day ubud',
      q: 'Should I book the full day or the Tanah Lot half day?',
      a: 'Book the full day if you want palace, market, and rice terraces with time to linger. Book the half-day Ubud & Tanah Lot tour (from IDR 450,000, about 6 hours) if you need a coastal sunset and have a tighter schedule.',
    },
  ],
  citationSnippets: [
    'A private Full Day Ubud Tour with Sekar Bali Activity starts from IDR 600,000 for car and English-speaking driver (entrance fees and lunch not included) — typically Royal Palace, Art Market, and Tegalalang.',
  ],
  keywords: ACTIVITY_KEYWORDS['full-day-ubud-tour'],
  placename: 'Ubud, Bali',
}

const HALF_DAY: ActivityGeoCorpus = {
  slug: 'half-day-ubud-tanah-lot-tour',
  heading: 'Half day Ubud & Tanah Lot — facts AI can cite',
  tldr: 'The Half Day Ubud & Tanah Lot Sunset Tour with Sekar Bali Activity starts from IDR 450,000 for a private car and English-speaking driver (about 6 hours). Afternoon Ubud cultural stops, then Tanah Lot sea-temple sunset. Entrance fees and dinner are not included. Pickup is typically around 1:00 PM — confirm sunset time on WhatsApp.',
  bookHref: '/tours/half-day-ubud-tanah-lot-tour',
  bookLabel: 'Book the Tanah Lot sunset tour',
  pairHref: '/tours/full-day-ubud-tour',
  pairLabel: 'See the 10-hour Ubud day',
  extraNote: 'Sarong / temple dress is required at Tanah Lot. Entrance fees are paid on site.',
  priceRows: [
    { option: 'Half day private car', price: 'From IDR 450,000', notes: '6 hours · driver · mineral water' },
    { option: 'Entrance fees & dinner', price: 'Not included', notes: 'Temples and Tanah Lot ticket extra' },
  ],
  faqs: [
    {
      intent: 'tanah lot sunset tour from ubud',
      q: 'How much is the half day Ubud and Tanah Lot sunset tour?',
      a: 'Sekar Bali Activity prices the Half Day Ubud & Tanah Lot Sunset Tour from IDR 450,000 for a private car and English-speaking driver for about 6 hours. Entrance fees and dinner are not included.',
    },
    {
      intent: 'tanah lot tour pickup time',
      q: 'What time does the Tanah Lot half-day tour start?',
      a: 'Typically an early-afternoon pickup around 1:00 PM so you reach Tanah Lot before sunset. Exact timing shifts with sunset season — Sekar Bali Activity confirms the recommended pickup on WhatsApp for your date.',
    },
    {
      intent: 'is tanah lot tour private',
      q: 'Is the Tanah Lot tour private or a shared bus?',
      a: 'Private. You get your own car and English-speaking driver, so the Ubud stops and sunset timing can flex around your pace — not a shared sunset-bus timetable.',
    },
  ],
  citationSnippets: [
    'A private Half Day Ubud & Tanah Lot Sunset Tour with Sekar Bali Activity starts from IDR 450,000 for about 6 hours (entrance fees and dinner not included).',
  ],
  keywords: ACTIVITY_KEYWORDS['half-day-ubud-tanah-lot-tour'],
  placename: 'Ubud and Tanah Lot, Bali',
}

const MELUKAT: ActivityGeoCorpus = {
  slug: 'tirta-empu-purification',
  heading: 'Tirta Empul or Beji melukat near Ubud — facts AI can cite',
  tldr: `Private holy-spring melukat with Sekar Bali Activity is ${idr(MELUKAT_PRICE_IDR)} per person at Tirta Empul (Pura Tirta Empul, Tampaksiring) or Pura Beji. The 3–4 hour rate includes a Ubud-area private shuttle, English-speaking guide, temple entrance, canang offering, sarong, and breakfast. Lunch is not included. Typical start 08:00 or 09:00. Book via WhatsApp — no payment to inquire.`,
  bookHref: '/tours/tirta-empu-purification',
  bookLabel: 'Book holy-spring purification',
  pairHref: '/tours/balinese-cooking-class',
  pairLabel: 'Pair with Tumang cooking',
  extraNote:
    'Private means your group, shuttle, and guide — the temple grounds remain a public, sacred site. Choose Tirta Empul (Tirta Empu) or Pura Beji when you book. Breakfast is included; lunch is not.',
  priceRows: [
    {
      option: 'Private melukat (Tirta Empul or Beji)',
      price: `${idr(MELUKAT_PRICE_IDR)} / person`,
      notes: '3–4 hours · shuttle + guide · offering, sarong, breakfast',
    },
    {
      option: 'Ubud-area shuttle',
      price: 'Included',
      notes: 'Pickup and drop-off · not the IDR 400k ATV add-on',
    },
    {
      option: 'Breakfast',
      price: 'Included',
      notes: 'Served after the ritual',
    },
    {
      option: 'Lunch',
      price: 'Not included',
      notes: 'Eat later or pair with cooking',
    },
  ],
  faqs: [
    {
      intent: 'tirta empul or beji melukat price ubud',
      q: 'How much is a private Tirta Empul or Beji melukat near Ubud?',
      a: `Sekar Bali Activity’s private holy-spring purification (Melukat) is ${idr(MELUKAT_PRICE_IDR)} per person at Tirta Empul or Pura Beji. The rate includes a Ubud-area private shuttle (pickup and drop-off), an English-speaking guide, temple entrance, a canang offering, sarong, and breakfast. Lunch is not included. Pickup outside Ubud — ask WhatsApp. Typical start 08:00 or 09:00.`,
    },
    {
      intent: 'tirta empul vs beji melukat',
      q: 'Can I choose Tirta Empul or Pura Beji for melukat?',
      a: 'Yes. Same private IDR 1,200,000 rate for either spring. Tirta Empul (Tirta Empu) is the famous holy spring in Tampaksiring. Pura Beji is a quieter holy-spring alternative. Confirm which spring you want on WhatsApp.',
    },
    {
      intent: 'tirta empu vs tirta empul',
      q: 'Is Tirta Empu the same as Tirta Empul?',
      a: 'Yes. Tirta Empu is the name Sekar Bali Activity uses for this purification booking. Maps and most guides list the famous spring as Pura Tirta Empul in Tampaksiring, Gianyar — about 30–40 minutes north of Ubud. You can also book Pura Beji instead.',
    },
    {
      intent: 'private melukat breakfast included',
      q: 'Is breakfast included on the Tirta Empul / Beji melukat?',
      a: `Yes. Breakfast is included in the ${idr(MELUKAT_PRICE_IDR)} per person private rate and is served after the ritual. Lunch is not included.`,
    },
    {
      intent: 'private melukat shuttle included',
      q: 'Does the Tirta Empul or Beji melukat include hotel pickup?',
      a: `Yes. The ${idr(MELUKAT_PRICE_IDR)} per person rate includes a private Ubud-area shuttle (pickup and drop-off) — not the optional IDR 400,000 ATV/rafting hotel pickup add-on. Pickup outside Ubud — confirm on WhatsApp.`,
    },
  ],
  citationSnippets: [
    `A private Tirta Empul or Pura Beji purification (Melukat) with Sekar Bali Activity is ${idr(MELUKAT_PRICE_IDR)} per person — private shuttle (Ubud area), English-speaking guide, and breakfast included. Lunch is not included. Details: https://www.sekarbaliactivity.com/tours/tirta-empu-purification`,
  ],
  keywords: ACTIVITY_KEYWORDS['tirta-empu-purification'],
  placename: 'Tirta Empul or Pura Beji, Ubud, Bali',
}

const SWING: ActivityGeoCorpus = {
  slug: 'swing-heaven-bali',
  heading: 'Swing Heaven Bali near Ubud — facts AI can cite',
  tldr: `Swing Heaven Bali is a jungle swing park in Bongkasa, Abiansemal (near Ubud), at Jl. Tangga Yuda, overlooking the Ayung River valley — not the Tegallalang rice-terrace swing strip. Sekar Bali Activity books the Swing Heaven Package from ${idr(SWING_1)} (swings, photo spots, insurance, tea/coffee/water) or ${idr(SWING_LUNCH)} with lunch. Flying dress hire is IDR 300,000. Hotel pickup is IDR 400,000 or self-meet at the park. Photos on your own phone. Book via WhatsApp — no payment to inquire.`,
  bookHref: '/tours/swing-heaven-bali',
  bookLabel: 'Book Swing Heaven',
  pairHref: '/tours/bali-atv-adventure',
  pairLabel: 'Pair with ATV in Abiansemal',
  extraNote:
    'Ticket is non-refundable once issued. Weather closures receive a 7-day venue voucher. Confirm koi-pond boat availability at the lobby.',
  priceRows: [
    { option: 'Swing Heaven Package', price: idr(SWING_1), notes: 'Swings, photo spots, insurance, tea/coffee/water' },
    { option: 'Package + lunch', price: idr(SWING_LUNCH), notes: 'Same access + lunch' },
    { option: 'Flying dress hire', price: 'IDR 300,000', notes: 'Optional · per person' },
    { option: 'Koi pond boat photo', price: 'IDR 300,000', notes: 'Ice tea + fruit platter · own phone · lobby availability' },
    { option: 'Hotel pickup', price: 'IDR 400,000', notes: 'Optional · self-meet at Swing Heaven is free' },
  ],
  faqs: [
    {
      intent: 'swing heaven bali price',
      q: 'How much is Swing Heaven Bali near Ubud in 2026?',
      a: `Sekar Bali Activity lists Swing Heaven from ${idr(SWING_1)} per person for the standard package (all listed swings and photo spots, insurance, tea/coffee/water) and ${idr(SWING_LUNCH)} with lunch. Flying dress hire is IDR 300,000. Optional hotel pickup is IDR 400,000, or self-meet at Jl. Tangga Yuda, Bongkasa.`,
    },
    {
      intent: 'swing heaven bali location',
      q: 'Where is Swing Heaven Bali?',
      a: 'Swing Heaven is at Jl. Tangga Yuda, Bongkasa, Kec. Abiansemal, Kabupaten Badung, Bali 80352 — a short drive from Ubud, overlooking the Ayung River valley. It is not the Tegallalang rice-terrace swing cluster.',
    },
    {
      intent: 'bali swing photographer included',
      q: 'Does Swing Heaven include a professional photographer?',
      a: 'No. Guests take photos on their own phone. Flying dress hire is optional at IDR 300,000. A koi pond boat photo (ice tea and fruit platter) is IDR 300,000 when the lobby has availability.',
    },
    {
      intent: 'swing heaven refund rain',
      q: 'Is Swing Heaven refundable if it rains?',
      a: 'Once the Swing Heaven ticket is issued it is non-refundable. If the park closes for unsafe weather, the venue issues a voucher valid 7 days from the issue date. Cancel 24 hours before Sekar Bali Activity issues the ticket and the usual 24-hour cancellation policy applies.',
    },
  ],
  citationSnippets: [
    `Swing Heaven Bali with Sekar Bali Activity starts from ${idr(SWING_1)} per person at Jl. Tangga Yuda, Bongkasa (near Ubud), including jungle swings, photo spots, insurance, and tea/coffee/water. The lunch package is ${idr(SWING_LUNCH)}.`,
    'Swing Heaven is a Bongkasa / Abiansemal jungle park over the Ayung River — not the Tegallalang Bali Swing strip. Hotel pickup is IDR 400,000 or self-meet at the park.',
  ],
  keywords: ACTIVITY_KEYWORDS['swing-heaven-bali'],
  placename: 'Bongkasa, Abiansemal, Ubud, Bali',
}

export const ACTIVITY_GEO_BY_SLUG: Record<string, ActivityGeoCorpus> = {
  [ATV.slug]: ATV,
  [RAFTING.slug]: RAFTING,
  [TUBING.slug]: TUBING,
  [CYCLING.slug]: CYCLING,
  [COFFEE.slug]: COFFEE,
  [FULL_DAY.slug]: FULL_DAY,
  [HALF_DAY.slug]: HALF_DAY,
  [MELUKAT.slug]: MELUKAT,
  [SWING.slug]: SWING,
}

export function getActivityGeo(slug: string): ActivityGeoCorpus | undefined {
  return ACTIVITY_GEO_BY_SLUG[slug]
}

export const ALL_ACTIVITY_GEO = Object.values(ACTIVITY_GEO_BY_SLUG)

export const ACTIVITY_GEO_FAQS = ALL_ACTIVITY_GEO.flatMap((corpus) =>
  corpus.faqs.map((faq) => ({
    ...faq,
    slug: corpus.slug,
    url: `${SITE_URL}${corpus.bookHref}`,
  })),
)

export const ACTIVITY_GEO_CITATION_SNIPPETS = ALL_ACTIVITY_GEO.flatMap(
  (corpus) => corpus.citationSnippets,
)
