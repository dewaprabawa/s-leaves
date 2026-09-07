/**
 * Popular guest visit / pickup areas for the admin invoice builder.
 * “Custom” is handled in the UI with a free-text field.
 */

export type PopularVisitLocation = {
  id: string
  label: string
  area: string
  /** True when standard out-of-Ubud surcharge applies */
  isOutUbud: boolean
}

export const POPULAR_VISIT_LOCATIONS: PopularVisitLocation[] = [
  {
    id: 'ubud-central',
    label: 'Ubud Central / Monkey Forest area',
    area: 'Ubud',
    isOutUbud: false,
  },
  {
    id: 'ubud-penestanan',
    label: 'Penestanan / Campuhan',
    area: 'Ubud',
    isOutUbud: false,
  },
  {
    id: 'ubud-tegallalang',
    label: 'Tegallalang / north Ubud',
    area: 'Ubud',
    isOutUbud: false,
  },
  {
    id: 'ubud-pejeng',
    label: 'Pejeng / activity base area',
    area: 'Ubud',
    isOutUbud: false,
  },
  {
    id: 'seminyak',
    label: 'Seminyak',
    area: 'South Bali',
    isOutUbud: true,
  },
  {
    id: 'canggu',
    label: 'Canggu',
    area: 'South Bali',
    isOutUbud: true,
  },
  {
    id: 'sanur',
    label: 'Sanur',
    area: 'South Bali',
    isOutUbud: true,
  },
  {
    id: 'kuta-legian',
    label: 'Kuta / Legian',
    area: 'South Bali',
    isOutUbud: true,
  },
  {
    id: 'nusa-dua',
    label: 'Nusa Dua / Benoa',
    area: 'South Bali',
    isOutUbud: true,
  },
  {
    id: 'airport',
    label: 'Ngurah Rai Airport (DPS)',
    area: 'Airport',
    isOutUbud: true,
  },
]

export function getPopularVisitById(id: string): PopularVisitLocation | undefined {
  return POPULAR_VISIT_LOCATIONS.find((loc) => loc.id === id)
}
