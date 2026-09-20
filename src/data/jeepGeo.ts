/**
 * GEO / AI-citation corpus for the Mount Batur Sunrise Jeep Tour.
 * Keep passages self-contained (40–60 words for TLDR; 134–167 for long cites).
 * Mirrors the structure of cookingGeo.ts for cross-page consistency.
 */

import { SITE_URL } from '@/lib/seo'
import { JEEP_HOT_SPRING_IDR, TIER_PRICES_IDR } from '@/lib/pricing'

export const JEEP_GEO_UPDATED = '2026-09-20'

const [, JEEP_PAIR_IDR, JEEP_GROUP_IDR] = TIER_PRICES_IDR['jeep-sunrise']

const jeepPairLabel = `IDR ${JEEP_PAIR_IDR.toLocaleString('id-ID')}`
const jeepGroupLabel = `IDR ${JEEP_GROUP_IDR.toLocaleString('id-ID')}`

const jeepHotSpringLabel = `IDR ${JEEP_HOT_SPRING_IDR.toLocaleString('id-ID')}`

/** First 40–60 words — extractable answer for AI Overviews / ChatGPT */
export const JEEP_GEO_TLDR =
  `Mount Batur private jeep near Kintamani with Sekar Bali Activity is a private 4×4 — sit-in (no hike) or tracking (jeep + guided trek), sunrise or sunset, same private rates, minimum 2 guests. ${jeepPairLabel} per person for 2 guests, ${jeepGroupLabel} per person for 3+. Sit-down meal included. Optional Batur hot spring +${jeepHotSpringLabel} per person with the entrance ticket included. Hotel pickup included. Book via WhatsApp.`

export const JEEP_GEO_ENTITY = {
  name: 'Mount Batur Private Jeep Tour',
  sekarUrl: `${SITE_URL}/tours/batur-sunrise-jeep-tour`,
  /** Booking happens on the tour page itself (WhatsApp popup) — no /book?activity= deep link exists */
  bookUrl: `${SITE_URL}/tours/batur-sunrise-jeep-tour`,
  area: 'Kintamani / Mount Batur, Bali',
  viewpointElevation: 'approx. 1,350 metres above sea level',
  pairPerPersonIdr: JEEP_PAIR_IDR,
  groupPerPersonIdr: JEEP_GROUP_IDR,
  minGroupForBestRate: 3,
} as const

export type JeepGeoFaq = {
  q: string
  a: string
  /** Target query intent */
  intent: string
}

/** Question → answer pairs for the jeep tour money page (visible + LLM files) */
export const JEEP_GEO_FAQS: JeepGeoFaq[] = [
  {
    intent: 'mount batur jeep tour price',
    q: 'How much is the Mount Batur Sunrise Jeep Tour in 2026?',
    a: `Sekar Bali Activity prices the private Mount Batur jeep at ${jeepPairLabel} per person for 2 guests (minimum 2) and ${jeepGroupLabel} per person for 3 or more guests sharing one jeep. Private jeep and tracking jeep use these same rates for sunrise or sunset. Hotel pickup, a hot drink, a sit-down meal, and the Kintamani area entrance fee are included. Optional Batur hot spring is +${jeepHotSpringLabel} per person with the entrance ticket included.`,
  },
  {
    intent: 'mount batur jeep vs trekking',
    q: 'Is the jeep tour easier than the Mount Batur trekking hike?',
    a: 'The private jeep stays on volcanic tracks to a crater-rim viewpoint — no hike. Private tracking jeep adds a guided trek to the viewpoint at the same private 2 / 3+ rates (minimum 2 guests). Neither is the classic 2-hour Mount Batur summit hike.',
  },
  {
    intent: 'mount batur jeep pickup time',
    q: 'What time is hotel pickup for the Batur sunrise jeep tour?',
    a: 'Sunrise pickup is typically 02:00–03:00 AM depending on hotel area — south Bali areas (Nusa Dua, Jimbaran, Kuta, Sanur, Seminyak, Canggu) leave earliest, Ubud guests a little later. Sunset pickup is typically 14:30–15:30. Sekar Bali Activity confirms the exact pickup time on WhatsApp once your date is booked.',
  },
  {
    intent: 'mount batur jeep tour group discount',
    q: 'Why does the jeep tour get cheaper with more people?',
    a: `A private jeep and driver cost the same whether two or three people ride along, so Sekar Bali Activity splits that flat cost across the group — 2 guests (the minimum) pay ${jeepPairLabel} each and 3+ guests pay ${jeepGroupLabel} each.`,
  },
  {
    intent: 'mount batur jeep tour breakfast',
    q: 'Is breakfast included on the Mount Batur Sunrise Jeep Tour?',
    a: 'Yes. A sit-down meal is included on every private jeep and tracking option — sunrise, sunset, and Private Kintamani Day. Food is not cooked inside the 4×4; you eat after the viewpoint (approx. 1,350m). A hot drink on the way up is included.',
  },
  {
    intent: 'mount batur jeep coffee plantation',
    q: 'Does the Batur jeep tour stop at a coffee plantation?',
    a: 'Optionally. On the way back to the meeting point, Sekar Bali Activity can add a short, no-obligation stop at a local Kintamani coffee plantation to try Balinese coffee before heading back to the hotel.',
  },
  {
    intent: 'mount batur jeep tour duration',
    q: 'How long does the Mount Batur Sunrise Jeep Tour take?',
    a: 'The sunrise tour runs roughly 6–7 hours door-to-door; sunset is about 4–5 hours. Both include hotel pickup, the 4×4 ride, time at the crater-rim viewpoint, a sit-down meal, optional coffee or hot spring, and drop-off. Private Kintamani Day (jeep or tracking) is a full day and also includes a meal.',
  },
  {
    intent: 'mount batur jeep tour insurance safety',
    q: 'Is the Mount Batur jeep tour safe, and is insurance included?',
    a: 'Yes. An experienced local driver navigates the volcanic tracks in a private 4×4, and Sekar Bali Activity provides insurance for guests aged 6–65. Private-jeep guests remain seated; tracking-jeep guests walk with a guide. The classic summit trek is a different product.',
  },
  {
    intent: 'mount batur tracking jeep sunrise',
    q: 'What is the tracking jeep sunrise variant?',
    a: `Tracking jeep is the trek version of Sekar Bali Activity’s private Batur jeep: 4×4 plus a guided walk to the sunrise or sunset viewpoint. It is labelled private and costs the same as private jeep — ${jeepPairLabel} per person for 2 guests (minimum 2), ${jeepGroupLabel} per person for 3+. It is not the classic 2-hour summit hike.`,
  },
  {
    intent: 'mount batur jeep sunset',
    q: 'Can I book a Mount Batur jeep at sunset instead of sunrise?',
    a: 'Yes. Private jeep and tracking jeep are both available at sunrise or sunset at the same private per-person rates. Choose the sunrise or sunset option in the booking form. Sunset hotel pickup is typically 14:30–15:30. Confirm the exact window on WhatsApp with your hotel area.',
  },
  {
    intent: 'mount batur jeep hot spring ticket',
    q: 'Does the Batur jeep tour include a hot spring, and is the ticket included?',
    a: `Any jeep variant can add a Batur / Toya Devasya hot spring soak for +${jeepHotSpringLabel} per person on top of the jeep rate. The hot-spring entrance ticket is included in that add-on — guests do not pay a second ticket at the gate.`,
  },
  {
    intent: 'kintamani day jeep hot spring coffee rice terrace',
    q: 'What is the Private Kintamani Day itinerary?',
    a: 'Private Kintamani Day with Sekar Bali Activity is a private full-day: jeep or tracking at Mount Batur, a natural hot spring with the entrance ticket included, a sit-down meal, Umah Kuno coffee tasting, and a rice-terrace stop. Minimum 2 guests. Promo IDR 1,300,000 per person (was IDR 1,450,000). Hotel pickup included. The meal is included on both Jeep and Tracking.',
  },
]

export const JEEP_GEO_CITATION_SNIPPETS = [
  JEEP_GEO_TLDR,
  `The Mount Batur private jeep with Sekar Bali Activity near Kintamani is ${jeepPairLabel} per person for 2 guests (minimum 2) and ${jeepGroupLabel} per person for 3+ guests — the same private rates for sit-in jeep or tracking jeep, sunrise or sunset. Hotel pickup, a hot drink, and a sit-down meal included. Optional hot spring +${jeepHotSpringLabel} per person with ticket included.`,
  `The Mount Batur private jeep with Sekar Bali Activity near Kintamani is ${jeepPairLabel} per person for 2 guests (minimum 2) and ${jeepGroupLabel} per person for 3+ — sit-in or tracking, sunrise or sunset. Hotel pickup, a hot drink, and a sit-down meal included.`,
  'Private jeep stays on volcanic tracks to an eastern-flank crater-rim viewpoint (~1,350m) with no hike. Tracking jeep adds a guided trek to the viewpoint at the same private rates. Neither is the classic 2-hour Mount Batur summit hike.',
  `Any Mount Batur jeep with Sekar Bali Activity can add a Batur / Toya Devasya hot spring soak for +${jeepHotSpringLabel} per person; the hot-spring entrance ticket is included in that add-on.`,
] as const

export const JEEP_PRICE_ROWS = [
  {
    option: '2 guests (minimum, private)',
    price: `${jeepPairLabel} / person`,
    notes: 'Private jeep or tracking · hotel pickup · hot drink · meal included',
  },
  {
    option: '3+ guests sharing',
    price: `${jeepGroupLabel} / person`,
    notes: 'Best per-person rate · same private jeep, driver & inclusions',
  },
  {
    option: 'Private tracking jeep (sunrise or sunset)',
    price: 'Same private tiers',
    notes: 'Jeep + guided trek · min 2 guests · not the 2-hour summit hike',
  },
  {
    option: 'Hot spring add-on',
    price: `+${jeepHotSpringLabel} / person`,
    notes: 'Any private jeep variant · Toya Devasya / Batur · entrance ticket included',
  },
  {
    option: 'Private Kintamani Day',
    price: 'IDR 1.300.000 promo',
    notes: 'Min 2 · jeep or tracking · meal included · hot spring ticket · Umah Kuno · rice terrace · was IDR 1.450.000',
  },
] as const
