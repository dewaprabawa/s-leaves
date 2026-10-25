/**
 * Sunday & Tuesday Kecak at Pura Dalem Gede, Banjar Kutuh Kaja, Ubud.
 * Ticket IDR 100,000 adult and child. Shuttle uses the existing zone rates.
 */

export const KECAK_SLUG = 'ubud-kecak-dance'
export const KECAK_ACTIVITY_ID = 'ubud-kecak'
export const KECAK_PRICE_IDR = 100_000
export const KECAK_SHOW_TIME = '19:00'
export const KECAK_SHOW_WINDOW = '19:00–20:00'
export const KECAK_DAYS_LABEL = 'Sunday and Tuesday'
/** JS Date#getDay — Sunday 0, Tuesday 2. */
export const KECAK_WEEKDAYS = [0, 2] as const

export const KECAK_VENUE = {
  name: 'Pura Dalem Gede Kutuh Kaja',
  area: 'Kutuh Kaja / Ubud',
  address: 'Jl. Tirta Tawar, Banjar Kutuh Kaja, Petulu, Ubud, Gianyar, Bali 80571',
  walk: 'About a 10-minute walk from central Ubud. Self-meet is free.',
  parking: 'Parking fits a big car.',
  mapUrl: 'https://share.google/FW9hZXtdHr9LEGwR6',
  mapsSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Pura+Dalem+Gede+Kutuh+Kaja+Jl.+Tirta+Tawar+Petulu+Ubud',
  embedUrl:
    'https://maps.google.com/maps?q=Pura+Dalem+Gede+Kutuh+Kaja,+Jl.+Tirta+Tawar,+Petulu,+Ubud&z=16&output=embed',
} as const

/** Uluwatu Kecak ticket published on uluwatutemple.id (show only; temple entrance is extra). */
export const ULUWATU_KECAK_ADULT_IDR = 150_000
export const ULUWATU_KECAK_CHILD_IDR = 75_000
export const ULUWATU_KECAK_SOURCE = 'https://uluwatutemple.id/uluwatu-kecak-dance'

export const KECAK_PHOTOS = [
  {
    url: '/images/kecak/kecak-temple-chorus.jpg',
    alt: 'Kecak chorus with raised hands around a seated dancer in a temple courtyard at night in Ubud',
  },
  {
    url: '/images/kecak/kecak-fire-circle.jpg',
    alt: 'Fire circle during the Kecak dance at a village temple in Ubud',
  },
  {
    url: '/images/kecak/kecak-sparks-temple-gate.jpg',
    alt: 'Kecak chorus and a dancer kicking fire sparks in front of the temple gate at Kutuh Kaja',
  },
  {
    url: '/images/kecak/kecak-fire-kick.jpg',
    alt: 'Dancer kicking through a wall of fire during the Ubud Kecak at Pura Dalem',
  },
  {
    url: '/images/kecak/kecak-coals-walk.jpg',
    alt: 'Masked dancer stepping through glowing coals at the Kutuh Kaja Kecak',
  },
  {
    url: '/images/kecak/kecak-hanoman-close.jpg',
    alt: 'Hanoman character in white fur and flowers moving through the seated guests',
  },
  {
    url: '/images/kecak/kecak-hanoman-among-guests.jpg',
    alt: 'Hanoman in the audience during the Ramayana Kecak at Pura Dalem Kutuh Kaja',
  },
  {
    url: '/images/kecak/kecak-mask-in-seats.jpg',
    alt: 'Masked Kecak character seated among guests at the Ubud temple show',
  },
] as const
