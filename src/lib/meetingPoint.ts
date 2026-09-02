/** Self-meet option — no hotel pickup; guests arrive at the ATV arena */
export const MEETING_POINT = {
  name: 'All New Bali Adventure',
  label: 'All New Bali Adventure (meeting point)',
  address: 'Pejeng, Ubud, Gianyar, Bali',
  lat: -8.5133,
  lng: 115.2989,
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=All+New+Bali+Adventure+Pejeng+Ubud+Bali',
} as const

export type PickupMode = 'hotel' | 'meeting-point'
