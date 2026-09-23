import { CONTACT_WHATSAPP_URL } from '@/lib/contact'
import { SITE_URL } from '@/lib/seo'
import { formatIdr } from '@/lib/whatsapp'

/** Same catalog “from” as the Full Day Ubud private car — not a HiAce rate. */
export const GIRLS_TRIP_SLUG = 'bali-private-itinerary'
export const GIRLS_TRIP_DRIVER_DAY_FROM_IDR = 600_000
export const GIRLS_TRIP_AIRPORT_TRANSFER_IDR = 700_000
export const GIRLS_TRIP_GEO_UPDATED = '2026-09-23'

export const GIRLS_TRIP_PAGE_PATH = `/tours/${GIRLS_TRIP_SLUG}`
export const GIRLS_TRIP_PAGE_URL = `${SITE_URL}${GIRLS_TRIP_PAGE_PATH}`

export type GirlsTripSplitRow = {
  item: string
  who: 'we' | 'you' | 'skip'
  note: string
  href?: string
}

/** Honest split for any private long-day or 2–7 day plan (family, girls, friends, couple). */
export const GIRLS_TRIP_SPLIT: GirlsTripSplitRow[] = [
  {
    item: 'Private driver days (car)',
    who: 'we',
    note: `From ${formatIdr(GIRLS_TRIP_DRIVER_DAY_FROM_IDR)} per day for a standard private car (~4 seats). English-speaking driver. One long day or several days.`,
    href: GIRLS_TRIP_PAGE_PATH,
  },
  {
    item: 'HiAce / 10–12 seater (6+ guests or family + bags)',
    who: 'we',
    note: 'Quoted on WhatsApp. Do not assume the car-day rate covers a 10–12 seater.',
    href: GIRLS_TRIP_PAGE_PATH,
  },
  {
    item: 'Swing Heaven + koi boat (Ubud photo day)',
    who: 'we',
    note: 'Bongkasa jungle park over the Ayung — not Tegallalang. From IDR 530,000 / IDR 630,000 with lunch. Koi boat and flying dress extra. Photos on your phone.',
    href: '/tours/swing-heaven-bali',
  },
  {
    item: 'Mount Batur sunrise jeep / Kintamani day',
    who: 'we',
    note: 'Private 4×4 to the crater-rim viewpoint (~1,350m), not the summit hike — a family-friendly sunrise. Island-wide pickup included. 3+ group rate IDR 750,000 / person. Optional hot spring +IDR 150,000.',
    href: '/tours/batur-sunrise-jeep-tour',
  },
  {
    item: 'Tumang cooking class',
    who: 'we',
    note: 'Shared promo IDR 450,000 / person with free Ubud pickup. Strong family and friend-group cultural day.',
    href: '/tours/balinese-cooking-class',
  },
  {
    item: 'Pejeng ricefield cycling',
    who: 'we',
    note: 'Calm morning, lunch + free Ubud pickup. From IDR 750,000.',
    href: '/tours/ubud-ricefield-cycling-tour',
  },
  {
    item: 'ATV / rafting / tubing',
    who: 'we',
    note: 'All New Bali Adventure + Ayung / Wos. Pickup IDR 400,000 or self-meet. Adventure insurance ages 6–65.',
    href: '/tours/bali-atv-adventure',
  },
  {
    item: 'Griya Beji waterfall purification',
    who: 'we',
    note: 'Punggul waterfall park — not Tirta Empul. From IDR 300,000. Pickup IDR 400,000 or self-meet.',
    href: '/tours/griya-beji-waterfall',
  },
  {
    item: 'DPS airport transfer',
    who: 'we',
    note: `From ${formatIdr(GIRLS_TRIP_AIRPORT_TRANSFER_IDR)} per standard MPV. HiAce airport run quoted on WhatsApp.`,
    href: '/transfers',
  },
  {
    item: 'FINNS, La Favela, Savaya, Cretya, Taman Dedari',
    who: 'you',
    note: 'Beach clubs, nightclubs, and dinner venues — we do not sell those tickets. Keep your reservations; our driver can drop and wait.',
  },
  {
    item: 'Uluwatu temple + Kecak, Melasti, jewelry class, spa, watersports',
    who: 'you',
    note: 'Temple tickets, dance seats, workshops, spa beds, and Tanjung Benoa boats are guest-booked. We handle the car.',
  },
  {
    item: 'Nusa Penida, Lovina dolphins, extra temples, mall days',
    who: 'skip',
    note: 'Too far or too stacked for a 4–7 day private trip that already has Ubud + a south-coast or Kintamani day.',
  },
]

export function buildGirlsTripWhatsAppMessage(opts?: {
  guestName?: string
  villaArea?: string
  dates?: string
  guestCount?: number
  groupType?: string
  vehicle?: string
  notes?: string
}) {
  const lines = [
    'Hello Sekar Bali Activity! I want a consultation for a private itinerary (family / girls trip / friends / couple — long day or multi-day). No booking form.',
    '',
    `*Name:* ${opts?.guestName || '(your name)'}`,
    `*Group type:* ${opts?.groupType || '(family / girls trip / friends / couple)'}`,
    `*Guests:* ${opts?.guestCount ?? '(adults + children ages)'}`,
    `*Dates:* ${opts?.dates || '(one long day, or arrival – departure)'}`,
    `*Villa / hotel area:* ${opts?.villaArea || '(Ubud / Seminyak / Canggu / other)'}`,
    `*Vehicle:* ${opts?.vehicle || 'Private car (~4) or HiAce / 10–12 seater for 6+'}`,
    '',
    '*Please quote:*',
    `- Private driver days (car from ${formatIdr(GIRLS_TRIP_DRIVER_DAY_FROM_IDR)} / day — confirm HiAce if needed)`,
    '- Activities we sell that fit the group (Swing Heaven, Batur jeep, cooking, cycling, ATV, Griya Beji)',
    `- DPS airport transfer if needed (from ${formatIdr(GIRLS_TRIP_AIRPORT_TRANSFER_IDR)} / MPV)`,
    '',
    '*We will book ourselves:* beach clubs, nightclubs, Cretya, Kecak seats, spa, jewelry class, watersports, restaurant tables.',
    '',
    `*Page:* ${GIRLS_TRIP_PAGE_URL}`,
  ]
  if (opts?.notes) {
    lines.push('', `*Itinerary notes:* ${opts.notes}`)
  } else {
    lines.push('', '*Itinerary notes:* (paste your day-by-day or long-day plan here)')
  }
  lines.push('', 'Consultation only — no payment to inquire. Please confirm driver + activity totals. Thank you!')
  return lines.join('\n')
}

export function buildGirlsTripWhatsAppUrl(opts?: Parameters<typeof buildGirlsTripWhatsAppMessage>[0]) {
  return `${CONTACT_WHATSAPP_URL}?text=${encodeURIComponent(buildGirlsTripWhatsAppMessage(opts))}`
}
