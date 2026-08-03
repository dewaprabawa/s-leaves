export interface Transfer {
  id: string
  title: string
  slug: string
  transferType: 'airport' | 'custom'
  route: {
    from: string
    to: string
  }
  vehicles: {
    name: string
    capacity: number
    basePrice: number
    description: string
  }[]
  dropPoints?: {
    name: string
    additionalPrice: number
    description: string
  }[]
  metaTitle: string
  metaDescription: string
}

export const TRANSFERS: Transfer[] = [
  {
    id: 'tr-1',
    title: 'DPS Airport to Ubud Private Transfer',
    slug: 'dps-to-ubud',
    transferType: 'airport',
    route: {
      from: 'Ngurah Rai Airport (DPS)',
      to: 'Ubud Area',
    },
    vehicles: [
      {
        name: 'Standard MPV (Toyota Avanza)',
        capacity: 4,
        basePrice: 35,
        description: 'Best for small families or couples. Fits 4 passengers and 2 medium bags.',
      },
      {
        name: 'Executive SUV (Toyota Fortuner)',
        capacity: 5,
        basePrice: 55,
        description: 'Premium SUV class with extra road stability. Fits 5 passengers and 3 bags.',
      },
      {
        name: 'VIP Luxury Van (Toyota Alphard)',
        capacity: 6,
        basePrice: 95,
        description: 'Ultra-premium VIP class for maximum comfort and style. Fits 6 passengers and 4 bags.',
      },
    ],
    dropPoints: [
      {
        name: 'Ubud Outer Zone (Tegallalang / Payangan)',
        additionalPrice: 10,
        description: 'Drop-off surcharge for hotels in northern Ubud regions',
      },
      {
        name: 'Sightseeing Intermediate Stop (Tohpati Batik / Celuk Gold)',
        additionalPrice: 15,
        description: 'Up to 2 hours stops for cultural sightseeing on the way',
      },
    ],
    metaTitle: 'Private Airport Transfer from DPS Airport to Ubud | S-Leaves',
    metaDescription: 'Book a hassle-free private transfer from Ngurah Rai Bali Airport directly to Ubud.',
  },
  {
    id: 'tr-2',
    title: 'Ubud to Seminyak Private Transfer',
    slug: 'ubud-to-seminyak',
    transferType: 'custom',
    route: {
      from: 'Ubud Area (Hotel Pickup)',
      to: 'Seminyak / Canggu (Hotel Drop-off)',
    },
    vehicles: [
      {
        name: 'Standard MPV (Toyota Avanza)',
        capacity: 4,
        basePrice: 25,
        description: 'Economical and reliable MPV. Fits 4 passengers and 2 medium bags.',
      },
      {
        name: 'Executive SUV (Toyota Fortuner)',
        capacity: 5,
        basePrice: 45,
        description: 'Comfortable family SUV. Fits 5 passengers and 3 bags.',
      },
      {
        name: 'VIP Luxury Van (Toyota Alphard)',
        capacity: 6,
        basePrice: 85,
        description: 'Executive class minivan. VIP pickup with cold towels.',
      },
    ],
    dropPoints: [
      {
        name: 'Extra Stop in Canggu Zone',
        additionalPrice: 10,
        description: 'Secondary hotel stop in Canggu area',
      },
      {
        name: 'Intermediate stop at Uluwatu Temple',
        additionalPrice: 20,
        description: 'Sightseeing stop at Uluwatu cliff temple before drop-off',
      },
    ],
    metaTitle: 'Private Transfer from Ubud to Seminyak & Canggu | S-Leaves',
    metaDescription: 'Reliable private transfer between hotels in Ubud and Seminyak or Canggu.',
  },
]
