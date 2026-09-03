/**
 * Canonical location roles for Sekar Bali Activity.
 * Keeps NAP (Name, Address, Phone) aligned with Google Business Profile
 * while separating corporate office, guest meeting point, and activity base.
 */

export type LocationRole = 'corporate' | 'meetingPoint' | 'activityBase'

export type BusinessLocation = {
  role: LocationRole
  /** Short UI label */
  label: string
  /** One-line guest-facing purpose */
  purpose: string
  /** Full display lines for contact / footer */
  lines: readonly string[]
  /** Single-line NAP string for citations / privacy */
  formatted: string
  /** Schema.org PostalAddress parts */
  streetAddress: string
  addressLocality: string
  addressRegion: string
  postalCode: string
  addressCountry: 'ID'
  lat: number
  lng: number
  mapUrl: string
}

/** Legal / registered office — must match Google Business Profile */
export const CORPORATE_OFFICE: BusinessLocation = {
  role: 'corporate',
  label: 'Corporate Office',
  purpose:
    'Registered business address used on Google Business Profile and for legal correspondence. Not where ATV or cycling tours start.',
  lines: [
    'Jalan Tunjung Biru No. 6',
    'Banjar Kenderan, Kabupaten Gianyar',
    'Bali, Indonesia',
  ],
  formatted:
    'Jalan Tunjung Biru No. 6, Banjar Kenderan, Kabupaten Gianyar, Bali, Indonesia',
  streetAddress: 'Jalan Tunjung Biru No. 6, Banjar Kenderan',
  addressLocality: 'Gianyar',
  addressRegion: 'Bali',
  postalCode: '80561',
  addressCountry: 'ID',
  // Desa Kenderan approximate centroid; pin is for Maps search, not guest check-in
  lat: -8.456,
  lng: 115.2896,
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Jalan+Tunjung+Biru+No.6+Banjar+Kenderan+Gianyar+Bali',
}

/**
 * Central Ubud rendezvous for guests arranging an in-person meet or transfer
 * handoff — not the ATV arena.
 */
export const GUEST_MEETING_POINT: BusinessLocation = {
  role: 'meetingPoint',
  label: 'Guest Meeting Point',
  purpose:
    'Easy central-Ubud landmark if you need to meet our team in town before transfer. For self-drive ATV, go to the activity base (All New Bali Adventure) instead.',
  lines: ['Jalan Raya Ubud No. 12', 'Ubud, Bali, Indonesia'],
  formatted: 'Jalan Raya Ubud No. 12, Ubud, Bali, Indonesia',
  streetAddress: 'Jalan Raya Ubud No. 12',
  addressLocality: 'Ubud',
  addressRegion: 'Bali',
  postalCode: '80571',
  addressCountry: 'ID',
  lat: -8.5069,
  lng: 115.2625,
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Jalan+Raya+Ubud+No.+12+Ubud+Bali',
}

/**
 * Where adventures run (village geography + ATV arena).
 * Self-drive / no-pickup guests meet at All New Bali Adventure here.
 */
export const ACTIVITY_BASE: BusinessLocation = {
  role: 'activityBase',
  label: 'Activity Base',
  purpose:
    'Pejeng village near Ubud — home of our cycling routes, cooking class area, and the All New Bali Adventure ATV arena where self-drive guests check in.',
  lines: ['Pejeng Village', 'Ubud, Gianyar, Bali, Indonesia'],
  formatted: 'Pejeng Village, Ubud, Gianyar, Bali, Indonesia',
  streetAddress: 'Pejeng Village',
  addressLocality: 'Ubud, Gianyar',
  addressRegion: 'Bali',
  postalCode: '80552',
  addressCountry: 'ID',
  lat: -8.5133,
  lng: 115.2989,
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=All+New+Bali+Adventure+Pejeng+Ubud+Bali',
}

/** Primary NAP for LocalBusiness schema & citations = GBP corporate address */
export const PRIMARY_NAP_ADDRESS = CORPORATE_OFFICE

export const ALL_LOCATIONS = [
  CORPORATE_OFFICE,
  GUEST_MEETING_POINT,
  ACTIVITY_BASE,
] as const

export function postalAddressSchema(loc: BusinessLocation) {
  return {
    '@type': 'PostalAddress' as const,
    streetAddress: loc.streetAddress,
    addressLocality: loc.addressLocality,
    addressRegion: loc.addressRegion,
    postalCode: loc.postalCode,
    addressCountry: loc.addressCountry,
  }
}
