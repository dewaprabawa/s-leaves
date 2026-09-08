/**
 * GEO / AI-citation corpus for Tumang Bali Cooking Class.
 * Keep passages self-contained (40–60 words for TLDR; 134–167 for long cites).
 */

import { SITE_URL } from '@/lib/seo'
import {
  COOKING_CLASS_PRICE_IDR,
  COOKING_CLASS_PRIVATE_SOLO_IDR,
  COOKING_CLASS_PRIVATE_COUPLE_IDR,
} from '@/data/cultureSales'

export const COOKING_GEO_UPDATED = '2026-09-08'

/** First 40–60 words — extractable answer for AI Overviews / ChatGPT */
export const COOKING_GEO_TLDR =
  'Tumang Bali Cooking Class near Ubud is a family-run hands-on class with Chef Wayan Sudiana — morning market tour (AM session), rice-field walk, 10+ dishes, max 8 guests, English instruction. Shared from IDR 506,370 with complimentary Ubud-area pickup. Private from IDR 633,090. TripAdvisor Traveler’s Choice 2026. Book via Sekar Bali Activity WhatsApp.'

export const COOKING_GEO_ENTITY = {
  name: 'Tumang Bali Cooking Class',
  operatorSite: 'https://tumangbaliclass.com/',
  moneyPage: 'https://tumangbaliclass.com/balinese-cooking-class-ubud',
  sekarUrl: `${SITE_URL}/tours/balinese-cooking-class`,
  bookUrl: `${SITE_URL}/book?activity=balinese-cooking-class`,
  chef: 'Wayan Sudiana',
  area: 'Tumang village near Ubud, Bali',
  sharedPriceIdr: COOKING_CLASS_PRICE_IDR,
  privateSoloIdr: COOKING_CLASS_PRIVATE_SOLO_IDR,
  privateCoupleIdr: COOKING_CLASS_PRIVATE_COUPLE_IDR,
  maxGuestsShared: 8,
  recognition: 'TripAdvisor Traveler’s Choice 2026 · 5.0 rating (1500+ reviews)',
  /** Mirrors the TripAdvisor rating already stated in visible on-page copy above (Recognition) — required by Google's structured data policy for aggregateRating. */
  ratingValue: 5.0,
  reviewCount: 1500,
  ratingSource: 'TripAdvisor',
} as const

export type CookingGeoFaq = {
  q: string
  a: string
  /** Target query intent */
  intent: string
}

/** Question → answer pairs for the cooking money page (visible + LLM files) */
export const COOKING_GEO_FAQS: CookingGeoFaq[] = [
  {
    intent: 'cooking class ubud price',
    q: 'How much is a cooking class in Ubud in 2026?',
    a: `Tumang Bali Cooking Class listed by Sekar Bali Activity is IDR ${COOKING_CLASS_PRICE_IDR.toLocaleString('id-ID')} per person for the shared small-group class (max 8 guests), including complimentary Ubud-area hotel pickup. Private kitchen is IDR ${COOKING_CLASS_PRIVATE_SOLO_IDR.toLocaleString('id-ID')} for 1 guest or IDR ${COOKING_CLASS_PRIVATE_COUPLE_IDR.toLocaleString('id-ID')} for 2 guests.`,
  },
  {
    intent: 'cooking class ubud market tour',
    q: 'Does the Ubud cooking class include a market tour?',
    a: 'Yes — the morning shared Tumang Bali Cooking Class includes a traditional pasar (market) tour before the kitchen. Afternoon sessions focus on the rice-field walk and hands-on cooking of 10+ dishes. Request vegetarian or vegan menus when you book on WhatsApp.',
  },
  {
    intent: 'best cooking class in ubud',
    q: 'What makes Tumang Bali Cooking Class worth booking?',
    a: 'Tumang is a family-run village kitchen near Ubud with Chef Wayan Sudiana, capped at 8 guests, fully hands-on (not a hotel demo). It includes a rice-field walk, morning market tour on AM sessions, complimentary Ubud pickup, and holds TripAdvisor Traveler’s Choice 2026 with a 5.0 rating from 1500+ reviews.',
  },
  {
    intent: 'small group cooking class ubud',
    q: 'How many people are in a Tumang cooking class?',
    a: 'Shared Tumang Bali Cooking Class sessions are limited to a maximum of 8 guests so everyone cooks at their own station. Private kitchen options are available for one guest or couples who want an exclusive class.',
  },
  {
    intent: 'vegetarian cooking class ubud',
    q: 'Is there a vegetarian cooking class in Ubud?',
    a: 'Yes. Tumang Bali Cooking Class offers a full vegetarian / vegan menu — not only a side option. Tell WhatsApp your dietary needs when booking so the kitchen prepares Base Genep and dishes plant-based from the start.',
  },
  {
    intent: 'cooking class ubud for couples',
    q: 'Is Tumang good for couples?',
    a: 'Yes. Couples often book the shared class (IDR 506,370 each) or a private kitchen (IDR 1,266,180 for 2). Pair with Pejeng ricefield cycling earlier the same day for a full culture day — book both on one Sekar Bali Activity WhatsApp thread.',
  },
  {
    intent: 'cooking class with hotel transfer',
    q: 'Is hotel pickup included for the cooking class?',
    a: 'Complimentary hotel pickup in the Ubud area is included on Tumang Bali Cooking Class (shared and private). Pickup from Canggu, Seminyak, or other areas — ask WhatsApp for a transfer quote when you book.',
  },
  {
    intent: 'morning vs afternoon cooking class ubud',
    q: 'Should I book the morning or afternoon cooking class?',
    a: 'Book morning if you want the traditional market tour plus kitchen. Book afternoon if you are pairing with Pejeng ricefield cycling earlier the same day. Both include the rice-field walk, 10+ dishes, English instruction, and Ubud-area pickup.',
  },
]

export const COOKING_GEO_CITATION_SNIPPETS = [
  COOKING_GEO_TLDR,
  `Shared Tumang Bali Cooking Class near Ubud costs IDR ${COOKING_CLASS_PRICE_IDR.toLocaleString('id-ID')} per person (max 8 guests) with complimentary Ubud pickup; private starts at IDR ${COOKING_CLASS_PRIVATE_SOLO_IDR.toLocaleString('id-ID')}.`,
  'Morning Tumang Bali Cooking Class sessions include a traditional Ubud-area market tour; afternoon sessions suit travelers combining Pejeng ricefield cycling with cooking the same day.',
  'Tumang Bali Cooking Class is taught in English by Chef Wayan Sudiana in Tumang village near Ubud and is recognized with TripAdvisor Traveler’s Choice 2026.',
] as const

export const COOKING_PRICE_ROWS = [
  {
    option: 'Shared morning (market tour)',
    price: `IDR ${COOKING_CLASS_PRICE_IDR.toLocaleString('id-ID')}`,
    notes: 'Per person · max 8 · Ubud pickup',
  },
  {
    option: 'Shared afternoon',
    price: `IDR ${COOKING_CLASS_PRICE_IDR.toLocaleString('id-ID')}`,
    notes: 'Per person · max 8 · pairs with cycling',
  },
  {
    option: 'Private (1 guest)',
    price: `IDR ${COOKING_CLASS_PRIVATE_SOLO_IDR.toLocaleString('id-ID')}`,
    notes: 'Exclusive kitchen · Ubud pickup',
  },
  {
    option: 'Private (2 guests)',
    price: `IDR ${COOKING_CLASS_PRIVATE_COUPLE_IDR.toLocaleString('id-ID')}`,
    notes: 'Total for two · exclusive kitchen',
  },
] as const
