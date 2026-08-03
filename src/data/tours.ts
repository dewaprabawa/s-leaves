export interface Tour {
  id: string
  title: string
  slug: string
  type: 'day-tour' | 'multi-day'
  location: string
  duration: string
  rating: number
  reviewCount: number
  isBestseller: boolean
  hasFreeCancellation: boolean
  categoryTags: { id: string; tag: string }[]
  pricing: {
    currency: string
    basePrice: number
    childPrice?: number
    infantPrice?: number
  }
  heroImage?: string
  gallery?: string[]
  description: string
  itinerary: {
    id: string
    dayTitle: string
    description: string
  }[]
  activityOptions?: {
    name: string
    priceDiff: number
    description: string
  }[]
  metaTitle: string
  metaDescription: string
}

export const TOURS: Tour[] = [
  {
    id: 'cycling-1',
    title: 'Pejeng Village & Terrace Cycling',
    slug: 'pejeng-village-cycling',
    type: 'day-tour',
    location: 'Pejeng, Ubud, Bali',
    duration: '4 Hours (Morning / Afternoon)',
    rating: 4.9,
    reviewCount: 342,
    isBestseller: true,
    hasFreeCancellation: true,
    categoryTags: [{ id: 'c1', tag: 'Cycling' }, { id: 'c2', tag: 'Culture' }, { id: 'c3', tag: 'Nature' }],
    pricing: { currency: 'USD', basePrice: 25, childPrice: 22 },
    heroImage: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Explore the real Bali. This dedicated cycling tour takes you away from the crowds and deep into the historic Pejeng district. Ride through local morning markets, ancient village pathways, and expansive rice terraces.',
    itinerary: [
      { id: 'it1', dayTitle: '08:30 AM: Pickup & Briefing', description: 'Driver picks you up from your Ubud hotel. Arrive at our Pejeng starting base for bike fitting and a safety briefing.' },
      { id: 'it2', dayTitle: '09:00 AM: Pejeng Local Market', description: 'Walk your bikes through the bustling traditional market. Learn about local spices, exotic fruits, and daily Balinese life.' },
      { id: 'it3', dayTitle: '09:45 AM: Village & Temple Cruising', description: 'Cycle through quiet neighborhood paths. Pass ancient temples and stop briefly at a traditional family compound to understand Balinese architecture.' },
      { id: 'it4', dayTitle: '10:45 AM: Subak Rice Terraces', description: 'The trail opens up to stunning, endless rice paddies. Cycle right on the field edges while learning about the traditional Subak irrigation system.' },
      { id: 'it5', dayTitle: '12:00 PM: Fresh Coconut & Wind Down', description: 'Finish the ride and celebrate with a freshly opened young coconut before heading back.' },
      { id: 'it6', dayTitle: '12:30 PM: Hotel Drop-off', description: 'Arrive back at your accommodation in Ubud.' }
    ],
    activityOptions: [
      { name: 'Morning Ride (8:30 AM – 12:30 PM)', priceDiff: 0, description: 'Morning tour session including market walk and coconut.' },
      { name: 'Afternoon Ride (1:30 PM – 5:30 PM)', priceDiff: 0, description: 'Afternoon tour session including village cruising and rice terraces.' },
    ],
    metaTitle: 'Pejeng Village & Terrace Cycling Tour | S-Leaves',
    metaDescription: 'Ride through local morning markets, ancient village pathways, and expansive rice terraces in Pejeng, Ubud.'
  },
  {
    id: 'coffee-1',
    title: 'Luwak Coffee Plantation Experience',
    slug: 'luwak-coffee-experience',
    type: 'day-tour',
    location: 'Ubud, Bali',
    duration: '1.5 Hours (Flexible Schedule)',
    rating: 4.8,
    reviewCount: 215,
    isBestseller: true,
    hasFreeCancellation: true,
    categoryTags: [{ id: 'k1', tag: 'Culinary' }, { id: 'k2', tag: 'Culture' }],
    pricing: { currency: 'USD', basePrice: 25, childPrice: 25 },
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: "Discover the secrets behind Bali's world-famous coffee. This standalone visit is perfect for a relaxing morning or a slow afternoon in the jungle. Enjoy a guided jungle walk, learn the traditional roasting process, and savor a 10-variety tasting flight.",
    itinerary: [
      { id: 'lc1', dayTitle: 'Jungle Walk & Raw Farming', description: 'Stroll through a lush, shaded plantation to see raw cocoa, vanilla, and coffee beans growing on the vine.' },
      { id: 'lc2', dayTitle: 'Traditional Roasting Process', description: 'Watch how local farmers traditionally roast coffee beans over open wood fires and try your hand at grinding them.' },
      { id: 'lc3', dayTitle: 'Tasting Flight & Luwak Coffee', description: 'Sit on a wooden deck overlooking a jungle ravine and enjoy a tasting board of 10 different local teas and coffees, including the famous Luwak coffee.' }
    ],
    activityOptions: [
      { name: 'Morning Session (10:00 AM – 11:30 AM)', priceDiff: 0, description: 'Morning plantation tour and tasting flight.' },
      { name: 'Afternoon Session (2:00 PM – 3:30 PM)', priceDiff: 0, description: 'Afternoon plantation tour and tasting flight.' },
    ],
    metaTitle: 'Luwak Coffee Plantation Experience | S-Leaves',
    metaDescription: 'Discover the secrets behind Balis world-famous Luwak coffee with a guided plantation walk and 10-variety tasting flight.'
  },
  {
    id: 'cooking-1',
    title: 'Traditional Balinese Dinner Cooking Class',
    slug: 'balinese-cooking-class',
    type: 'day-tour',
    location: 'Ubud, Bali',
    duration: '3 Hours (5:30 PM – 8:30 PM)',
    rating: 5.0,
    reviewCount: 418,
    isBestseller: true,
    hasFreeCancellation: true,
    categoryTags: [{ id: 'b1', tag: 'Culinary' }, { id: 'b2', tag: 'Culture' }],
    pricing: { currency: 'USD', basePrice: 25, childPrice: 22 },
    heroImage: 'https://images.unsplash.com/photo-1518548419070-28628344d2cee?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518548419070-28628344d2cee?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Immerse yourself in the flavors of Indonesia. Set in a beautiful traditional kitchen, this hands-on class teaches you the secrets of Balinese spices and techniques for cooking authentic dishes.',
    itinerary: [
      { id: 'bc1', dayTitle: 'Spice Introduction', description: 'Start the evening by learning about the roots, herbs, and spices essential to Balinese cooking (like galangal, turmeric, and lemongrass).' },
      { id: 'bc2', dayTitle: 'Hands-on Cooking Station', description: 'Work at your own station to chop, pound (using a traditional stone mortar), and cook 5 authentic dishes, including chicken satay and traditional sambal.' },
      { id: 'bc3', dayTitle: 'The Feast & Digital Recipe Book', description: 'Sit down with your fellow chefs in an open-air dining pavilion to enjoy the dinner you just prepared. Take home a digital recipe book!' }
    ],
    activityOptions: [
      { name: 'Dinner Class (5:30 PM – 8:30 PM)', priceDiff: 0, description: 'Evening hands-on cooking class and 5-course dinner feast.' },
    ],
    metaTitle: 'Traditional Balinese Dinner Cooking Class | S-Leaves',
    metaDescription: 'Learn authentic Balinese cooking techniques, prepare 5 delicious dishes, and feast in an open-air pavilion in Ubud.'
  },
  {
    id: 'highlight-1',
    title: 'Bali Highlights: Temples & Terraces',
    slug: 'bali-highlights',
    type: 'day-tour',
    location: 'Ubud, Bali',
    duration: 'Full Day (8 Hours)',
    rating: 4.9,
    reviewCount: 1568,
    isBestseller: true,
    hasFreeCancellation: true,
    categoryTags: [{ id: '1', tag: 'Culture' }, { id: '2', tag: 'Nature' }],
    pricing: { currency: 'USD', basePrice: 85, childPrice: 45 },
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Experience the spiritual heart of Bali on this comprehensive full-day tour. Visit sacred water temples, iconic rice terraces, and witness traditional craftsmanship.',
    itinerary: [
      { id: 'day1', dayTitle: 'Morning: Sacred Monkeys & Temples', description: 'Start your day at the Sacred Monkey Forest Sanctuary, followed by a purification ritual at Tirta Empul.' },
      { id: 'day2', dayTitle: 'Afternoon: Tegalalang & Coffee', description: 'Walk through the breathtaking Tegalalang rice terraces and enjoy a local Luwak coffee tasting.' }
    ],
    metaTitle: 'Bali Highlights Tour | S-Leaves',
    metaDescription: 'Book the ultimate Bali highlights tour including Ubud, temples, and rice terraces.'
  },
  {
    id: 'komodo-1',
    title: 'Komodo Dragon 3-Day Expedition',
    slug: 'komodo-expedition',
    type: 'multi-day',
    location: 'Flores, Indonesia',
    duration: '3 Days, 2 Nights',
    rating: 5.0,
    reviewCount: 9210,
    isBestseller: true,
    hasFreeCancellation: true,
    categoryTags: [{ id: '3', tag: 'Adventure' }, { id: '4', tag: 'Wildlife' }, { id: '5', tag: 'Ocean' }],
    pricing: { currency: 'USD', basePrice: 450, childPrice: 280 },
    heroImage: 'https://images.unsplash.com/photo-1518548419070-28628344d2cee?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518548419070-28628344d2cee?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Embark on a voyage of a lifetime into the Komodo National Park. Track the ancient Komodo dragons in their natural habitat, hike majestic hills for panoramic island views, and snorkel in pristine waters filled with rich marine life.',
    itinerary: [
      { id: 'k1', dayTitle: 'Day 1: Welcome & Sunset Hike', description: 'Board our luxury liveaboard ship at Labuan Bajo. Sail to Kelor Island for snorkeling and continue to Padar Island.' },
      { id: 'k2', dayTitle: 'Day 2: Dragons & Pink Beach', description: 'Trek with official park rangers to see the majestic Komodo dragons on Komodo Island. Relax on Pink Beach.' },
      { id: 'k3', dayTitle: 'Day 3: Swim with Mantas', description: 'Visit Manta Point for a once-in-a-lifetime chance to swim alongside giant manta rays.' }
    ],
    metaTitle: 'Komodo Dragon 3-Day Expedition | S-Leaves',
    metaDescription: 'Explore the stunning Komodo National Park on a 3-day luxury cruise.'
  },
  {
    id: 'batur-1',
    title: 'Mount Batur Sunrise Volcano Trekking',
    slug: 'mount-batur-trek',
    type: 'day-tour',
    location: 'Kintamani, Bali',
    duration: '6 Hours (Early Morning)',
    rating: 4.8,
    reviewCount: 776,
    isBestseller: false,
    hasFreeCancellation: true,
    categoryTags: [{ id: '6', tag: 'Adventure' }, { id: '7', tag: 'Nature' }],
    pricing: { currency: 'USD', basePrice: 60, childPrice: 35 },
    heroImage: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Ascend the sacred active volcano, Mount Batur, under a blanket of stars. Watch a magical sunrise over the Caldera lake, enjoy a breakfast cooked by volcanic steam, and relax in natural hot springs.',
    itinerary: [
      { id: 'b1', dayTitle: '03:30 AM: Start the Ascent', description: 'Arrive at the base of Mount Batur. Equip torches and follow your professional guide up the volcanic path.' },
      { id: 'b2', dayTitle: '06:00 AM: Sunrise & Steam Breakfast', description: 'Reach the summit just in time for sunrise. Marvel at the golden hour views and enjoy hot tea with steam-cooked eggs.' }
    ],
    metaTitle: 'Mount Batur Sunrise Trekking & Hot Springs | S-Leaves',
    metaDescription: 'Hike Mount Batur for a breathtaking volcanic sunrise, cook breakfast with natural steam, and soak in Kintamani hot springs.'
  }
]
