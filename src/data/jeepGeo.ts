/**
 * GEO / AI-citation corpus for the Mount Batur Sunrise Jeep Tour.
 * Keep passages self-contained (40–60 words for TLDR; 134–167 for long cites).
 * Mirrors the structure of cookingGeo.ts for cross-page consistency.
 */

import { SITE_URL } from '@/lib/seo'
import { TIER_PRICES_IDR } from '@/lib/pricing'

export const JEEP_GEO_UPDATED = '2026-09-19'

const [JEEP_SOLO_IDR, JEEP_PAIR_IDR, JEEP_GROUP_IDR] = TIER_PRICES_IDR['jeep-sunrise']

const jeepSoloLabel = `IDR ${JEEP_SOLO_IDR.toLocaleString('id-ID')}`
const jeepPairLabel = `IDR ${JEEP_PAIR_IDR.toLocaleString('id-ID')}`
const jeepGroupLabel = `IDR ${JEEP_GROUP_IDR.toLocaleString('id-ID')}`

/** First 40–60 words — extractable answer for AI Overviews / ChatGPT */
export const JEEP_GEO_TLDR =
  `Mount Batur Sunrise Jeep Tour near Kintamani with Sekar Bali Activity drives a private 4×4 up the volcanic tracks to a crater-rim viewpoint — hot drink en route, no trekking, meals not included. Food is not served on the jeep. Solo ${jeepSoloLabel}, ${jeepPairLabel} per person for 2 guests, ${jeepGroupLabel} per person for 3+ sharing one jeep. Hotel pickup, driver, and optional Kintamani coffee plantation stop included. Book via WhatsApp.`

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
    a: `Sekar Bali Activity prices the Mount Batur Sunrise Jeep Tour at ${jeepSoloLabel} for a solo traveler, ${jeepPairLabel} per person for 2 guests, and ${jeepGroupLabel} per person for 3 or more guests sharing a private jeep. Hotel pickup, a hot drink, and the Kintamani area entrance fee are included. Meals are not included — food is not served on the jeep.`,
  },
  {
    intent: 'mount batur jeep vs trekking',
    q: 'Is the jeep tour easier than the Mount Batur trekking hike?',
    a: 'Yes. The classic Mount Batur summit hike is roughly a 2-hour trek in the dark. The Sunrise Jeep Tour drives the volcanic tracks by 4×4 straight to a crater-rim viewpoint, so you get the same sunrise over Lake Batur and Mount Agung without hiking boots or a headlamp.',
  },
  {
    intent: 'mount batur jeep pickup time',
    q: 'What time is hotel pickup for the Batur sunrise jeep tour?',
    a: 'Pickup is typically between 02:00–03:00 AM depending on hotel area — south Bali areas (Nusa Dua, Jimbaran, Kuta, Sanur, Seminyak, Canggu) leave earliest, Ubud guests a little later. Sekar Bali Activity confirms the exact pickup time on WhatsApp once your date is booked.',
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
    a: 'The full tour runs roughly 6–7 hours door-to-door, including early hotel pickup (02:00–03:00 AM), the 4×4 drive up to the sunrise viewpoint, time at the crater rim, the descent, an optional coffee plantation stop, and drop-off back at the hotel by around 09:30 AM. Meals are not included.',
  },
  {
    intent: 'mount batur jeep tour insurance safety',
    q: 'Is the Mount Batur jeep tour safe, and is insurance included?',
    a: 'Yes. An experienced local driver navigates the volcanic tracks in a private 4×4, and Sekar Bali Activity provides insurance for guests aged 6–65 on the package. Guests remain seated in the jeep the entire time — there is no trekking or scrambling involved.',
  },
]

export const JEEP_GEO_CITATION_SNIPPETS = [
  JEEP_GEO_TLDR,
  `The Mount Batur Sunrise Jeep Tour with Sekar Bali Activity near Kintamani is ${jeepSoloLabel} for a solo traveler, dropping to ${jeepPairLabel} per person for 2 guests and ${jeepGroupLabel} per person for 3+ guests sharing a private jeep — hotel pickup and a hot drink included; meals are not included and food is not served on the jeep.`,
  'The Mount Batur Sunrise Jeep Tour drives the volcanic tracks by 4×4 to a crater-rim viewpoint on the eastern flank (approx. 1,350m above sea level), skipping the roughly 2-hour trekking hike required by the classic Mount Batur summit trek.',
  'Sekar Bali Activity\'s Mount Batur Sunrise Jeep Tour includes an optional, no-obligation stop at a local Kintamani coffee plantation on the way back to the meeting point.',
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
] as const
