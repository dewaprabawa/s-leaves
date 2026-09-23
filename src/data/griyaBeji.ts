/**
 * Taman Beji Griya Waterfall (Griya Beji Waterfall Bali) — partner spiritual
 * site in Desa Punggul, Abiansemal. Not Pura Beji / Tirta Empul.
 *
 * 2026 venue menu published by the park (confirm on WhatsApp — boards change):
 * admission IDR 20,000 domestic / 50,000 international; melukat 300,000;
 * palm reading 1,000,000; healing / mental healing 1,500,000.
 * Official: https://griyabejiwaterfallbali.com/
 */

import { buildWhatsAppBookingUrl } from '@/lib/whatsapp'

export const GRIYA_BEJI_PURIFICATION_IDR = 300_000
export const GRIYA_BEJI_PALM_READING_IDR = 1_000_000
export const GRIYA_BEJI_HEALING_IDR = 1_500_000
export const GRIYA_BEJI_ADMISSION_INTL_IDR = 50_000
export const GRIYA_BEJI_ADMISSION_DOMESTIC_IDR = 20_000

export const GRIYA_BEJI_VENUE = {
  name: 'Taman Beji Griya Waterfall',
  shortName: 'Griya Beji Waterfall',
  area: 'Punggul / Abiansemal',
  address: 'Jl. Mawar, Desa Punggul, Kec. Abiansemal, Kabupaten Badung, Bali',
  hours: '09:00–18:00 daily',
  siteUrl: 'https://griyabejiwaterfallbali.com/',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Taman+Beji+Griya+Waterfall+Punggul+Abiansemal+Badung+Bali',
} as const

export const GRIYA_BEJI_OFFERS = {
  purification: {
    id: 'griya-beji-purification',
    label: 'Waterfall purification (melukat)',
    priceIdr: GRIYA_BEJI_PURIFICATION_IDR,
    duration: '1–2 hours',
    blurb:
      'Melukat in the sacred spring-fed pool at Griya Beji Waterfall — offerings, prayer, and water immersion. Not the Tirta Empul / Pura Beji private 1.2M ritual.',
  },
  palmReading: {
    id: 'griya-beji-palm-reading',
    label: 'Palm reading',
    priceIdr: GRIYA_BEJI_PALM_READING_IDR,
    duration: '45–75 minutes',
    blurb:
      'Palm reading combined with birth date — character, elements, livelihood, and relationships. Book ahead; walk-in slots are limited.',
  },
  healing: {
    id: 'griya-beji-mental-healing',
    label: 'Mental healing therapy',
    priceIdr: GRIYA_BEJI_HEALING_IDR,
    duration: '1–1.5 hours',
    blurb:
      'Healing therapy at the park using guided relaxation / hypnotherapy for stress, habit, and anxiety support. Not a medical clinic. Book ahead.',
  },
} as const

export const GRIYA_BEJI_SALES = {
  id: 'griya-beji-waterfall',
  name: 'Griya Beji Waterfall Purification',
  shortName: 'Griya Beji',
  tagline: 'Waterfall melukat, palm reading & mental healing',
  description:
    'Taman Beji Griya Waterfall in Desa Punggul, Abiansemal — waterfall purification (melukat) IDR 300,000, palm reading IDR 1,000,000, mental healing IDR 1,500,000. International admission IDR 50,000 (domestic 20,000) is extra at the gate. Not Tirta Empul or Pura Beji. Pickup IDR 400,000 or self-meet.',
  highlights: [
    'Waterfall purification (melukat) IDR 300,000',
    'Palm reading IDR 1,000,000 · mental healing IDR 1,500,000',
    'Punggul, Abiansemal — same district as ATV',
    'Not the Tirta Empul / Pura Beji 1.2M private ritual',
  ],
  duration: '1–2.5 hours',
  image: '/images/adventures/griya-beji-waterfall.jpg',
  imageAlt:
    'Guests gathered at Taman Beji Griya Waterfall in Punggul, Abiansemal near Ubud',
  tourSlug: 'griya-beji-waterfall',
  itineraryHref: '/tours/griya-beji-waterfall',
  priceIdr: GRIYA_BEJI_PURIFICATION_IDR,
  times: ['09:00', '10:00', '11:00', '14:00', '15:00'] as const,
} as const

export function buildGriyaBejiWhatsAppUrl(guestName = 'Guest') {
  return buildWhatsAppBookingUrl({
    guestName,
    activity: GRIYA_BEJI_SALES.name,
    activityOption:
      'Waterfall purification IDR 300,000 · palm reading IDR 1,000,000 · mental healing IDR 1,500,000 · Punggul — not Tirta Empul',
    time: '09:00',
    price: GRIYA_BEJI_SALES.priceIdr,
    notes:
      'Please confirm Griya Beji Waterfall (Taman Beji Griya, Desa Punggul). I want purification / palm reading / mental healing (say which). Gate admission IDR 50,000 international is extra. Pickup IDR 400,000 or self-meet. This is not Tirta Empul or Pura Beji.',
  })
}
