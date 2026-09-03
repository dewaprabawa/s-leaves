import { ACTIVITY_BASE } from '@/lib/locations'

/** Self-meet option when hotel pickup is not selected — at the activity base arena */
export const MEETING_POINT = {
  name: 'All New Bali Adventure',
  label: 'All New Bali Adventure (activity base · self-meet)',
  address: ACTIVITY_BASE.formatted,
  lat: ACTIVITY_BASE.lat,
  lng: ACTIVITY_BASE.lng,
  mapUrl: ACTIVITY_BASE.mapUrl,
  /** Role note for UI copy */
  roleNote:
    'Activity base in Pejeng — where ATV rides start. Not the corporate office or central Ubud meeting point.',
} as const
