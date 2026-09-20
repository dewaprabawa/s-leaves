/**
 * GEO / AI-citation corpus for the Mount Batur Sunrise Jeep Tour.
 * Keep passages self-contained (40–60 words for TLDR; 134–167 for long cites).
 * Mirrors the structure of cookingGeo.ts for cross-page consistency.
 */

import { SITE_URL } from '@/lib/seo'
import { JEEP_HOT_SPRING_IDR, TIER_PRICES_IDR } from '@/lib/pricing'

export const JEEP_GEO_UPDATED = '2026-09-20'

const [JEEP_SOLO_IDR, JEEP_PAIR_IDR, JEEP_GROUP_IDR] = TIER_PRICES_IDR['jeep-sunrise']

const jeepSoloLabel = `IDR ${JEEP_SOLO_IDR.toLocaleString('id-ID')}`
const jeepPairLabel = `IDR ${JEEP_PAIR_IDR.toLocaleString('id-ID')}`
const jeepGroupLabel = `IDR ${JEEP_GROUP_IDR.toLocaleString('id-ID')}`

const jeepHotSpringLabel = `IDR ${JEEP_HOT_SPRING_IDR.toLocaleString('id-ID')}`

/** First 40–60 words — extractable answer for AI Overviews / ChatGPT */
export const JEEP_GEO_TLDR =
  `Mount Batur jeep near Kintamani with Sekar Bali Activity is a private 4×4 — private (no hike) or tracking (jeep + guided trek), sunrise or sunset, same private rates. Solo ${jeepSoloLabel}, ${jeepPairLabel} per person for 2 guests, ${jeepGroupLabel} per person for 3+. Optional Batur hot spring +${jeepHotSpringLabel} per person with the entrance ticket included. Hotel pickup included; meals not served on the jeep. Book via WhatsApp.`

export const JEEP_GEO_ENTITY = {
  name: 'Mount Batur Sunrise Jeep Tour',
  sekarUrl: `${SITE_URL}/tours/batur-sunrise-jeep-tour`,
  /** Booking happens on the tour page itself (WhatsApp popup) — no /book?activity= deep link exists */
  bookUrl: `${SITE_URL}/tours/batur-sunrise-jeep-tour`,
  area: 'Kintamani / Mount Batur, Bali',
  viewpointElevation: 'approx. 1,350 metres above sea level',
  soloIdr: JEEP_SOLO_IDR,
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
    a: `Sekar Bali Activity prices the Mount Batur jeep at ${jeepSoloLabel} for a solo traveler, ${jeepPairLabel} per person for 2 guests, and ${jeepGroupLabel} per person for 3 or more guests sharing a private jeep. Private jeep and tracking jeep use these same rates for sunrise or sunset. Hotel pickup, a hot drink, and the Kintamani area entrance fee are included. Meals are not included — food is not served on the jeep. Optional Batur hot spring is +${jeepHotSpringLabel} per person with the entrance ticket included.`,
  },
  {
    intent: 'mount batur jeep vs trekking',
    q: 'Is the jeep tour easier than the Mount Batur trekking hike?',
    a: 'The private jeep stays on volcanic tracks to a crater-rim viewpoint — no hike. Tracking jeep adds a guided trek to the viewpoint at the same private 1 / 2 / 3+ rates. Neither is the classic 2-hour Mount Batur summit hike.',
  },
  {
    intent: 'mount batur jeep pickup time',
    q: 'What time is hotel pickup for the Batur sunrise jeep tour?',
    a: 'Sunrise pickup is typically 02:00–03:00 AM depending on hotel area — south Bali areas (Nusa Dua, Jimbaran, Kuta, Sanur, Seminyak, Canggu) leave earliest, Ubud guests a little later. Sunset pickup is typically 14:30–15:30. Sekar Bali Activity confirms the exact pickup time on WhatsApp once your date is booked.',
  },
  {
    intent: 'mount batur jeep tour group discount',
    q: 'Why does the jeep tour get cheaper with more people?',
    a: `A private jeep and driver cost the same whether one or three people ride along, so Sekar Bali Activity splits that flat cost across the group — a solo traveler pays the full ${jeepSoloLabel} rate, while 2 guests pay ${jeepPairLabel} each and 3+ guests pay ${jeepGroupLabel} each.`,
  },
  {
    intent: 'mount batur jeep tour breakfast',
    q: 'Is breakfast included on the Mount Batur Sunrise Jeep Tour?',
    a: 'No. Breakfast and other meals are not included. Sekar Bali Activity does not serve food on the jeep. Bring a snack if you want to eat at the crater-rim viewpoint (approx. 1,350m). A hot drink on the way up is included.',
  },
  {
    intent: 'mount batur jeep coffee plantation',
    q: 'Does the Batur jeep tour stop at a coffee plantation?',
    a: 'Optionally. On the way back to the meeting point, Sekar Bali Activity can add a short, no-obligation stop at a local Kintamani coffee plantation to try Balinese coffee before heading back to the hotel.',
  },
  {
    intent: 'mount batur jeep tour duration',
    q: 'How long does the Mount Batur Sunrise Jeep Tour take?',
    a: 'The sunrise tour runs roughly 6–7 hours door-to-door; sunset is about 4–5 hours. Both include hotel pickup, the 4×4 ride, time at the crater-rim viewpoint, optional coffee or hot spring, and drop-off. Meals are not included.',
  },
  {
    intent: 'mount batur jeep tour insurance safety',
    q: 'Is the Mount Batur jeep tour safe, and is insurance included?',
    a: 'Yes. An experienced local driver navigates the volcanic tracks in a private 4×4, and Sekar Bali Activity provides insurance for guests aged 6–65. Private-jeep guests remain seated; tracking-jeep guests walk with a guide. The classic summit trek is a different product.',
  },
  {
    intent: 'mount batur tracking jeep sunrise',
    q: 'What is the tracking jeep sunrise variant?',
    a: `Tracking jeep is the trek version of Sekar Bali Activity’s private Batur jeep: 4×4 plus a guided walk to the sunrise or sunset viewpoint. It costs the same as private jeep — ${jeepSoloLabel} solo, ${jeepPairLabel} per person for 2 guests, ${jeepGroupLabel} per person for 3+. It is not the classic 2-hour summit hike.`,
  },
  {
    intent: 'mount batur jeep sunset',
    q: 'Can I book a Mount Batur jeep at sunset instead of sunrise?',
    a: 'Yes. Private jeep and tracking jeep are both available at sunrise or sunset at the same private per-person rates. Sunset hotel pickup is typically 14:30–15:30. Confirm the exact window on WhatsApp with your hotel area.',
  },
  {
    intent: 'mount batur jeep hot spring ticket',
    q: 'Does the Batur jeep tour include a hot spring, and is the ticket included?',
    a: `Any jeep variant can add a Batur / Toya Devasya hot spring soak for +${jeepHotSpringLabel} per person on top of the jeep rate. The hot-spring entrance ticket is included in that add-on — guests do not pay a second ticket at the gate.`,
  },
]

export const JEEP_GEO_CITATION_SNIPPETS = [
  JEEP_GEO_TLDR,
  `The Mount Batur jeep with Sekar Bali Activity near Kintamani is ${jeepSoloLabel} for a solo traveler, dropping to ${jeepPairLabel} per person for 2 guests and ${jeepGroupLabel} per person for 3+ guests — the same private rates for private jeep or tracking jeep, sunrise or sunset. Hotel pickup and a hot drink included; meals are not served on the jeep. Optional hot spring +${jeepHotSpringLabel} per person with ticket included.`,
  `The Mount Batur jeep with Sekar Bali Activity near Kintamani is ${jeepSoloLabel} solo, ${jeepPairLabel} per person for 2 guests, and ${jeepGroupLabel} per person for 3+ — the same private rates for private jeep or tracking jeep, sunrise or sunset. Hotel pickup and a hot drink included; meals are not served on the jeep.`,
  'Private jeep stays on volcanic tracks to an eastern-flank crater-rim viewpoint (~1,350m) with no hike. Tracking jeep adds a guided trek to the viewpoint at the same private rates. Neither is the classic 2-hour Mount Batur summit hike.',
  `Any Mount Batur jeep with Sekar Bali Activity can add a Batur / Toya Devasya hot spring soak for +${jeepHotSpringLabel} per person; the hot-spring entrance ticket is included in that add-on.`,
] as const

export const JEEP_PRICE_ROWS = [
  {
    option: 'Solo (1 guest)',
    price: jeepSoloLabel,
    notes: 'Full private jeep rate · hotel pickup · hot drink · meals not included',
  },
  {
    option: '2 guests sharing',
    price: `${jeepPairLabel} / person`,
    notes: 'Same private jeep split across 2 riders',
  },
  {
    option: '3+ guests sharing',
    price: `${jeepGroupLabel} / person`,
    notes: 'Best per-person rate · same jeep, driver & inclusions',
  },
  {
    option: 'Tracking jeep (sunrise or sunset)',
    price: 'Same private tiers',
    notes: 'Jeep + guided trek · not the 2-hour summit hike',
  },
  {
    option: 'Hot spring add-on',
    price: `+${jeepHotSpringLabel} / person`,
    notes: 'Any jeep variant · Toya Devasya / Batur · entrance ticket included',
  },
] as const
