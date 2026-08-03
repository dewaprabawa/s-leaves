export interface TourAddon {
  id: string
  name: string
  price: number
  description?: string
  isRequired?: boolean
}

export interface TourFaq {
  id: string
  question: string
  answer: string
}

export interface TourItineraryItem {
  id: string
  time: string
  title: string
  description: string
}

export interface TourReview {
  id: string
  authorName: string
  rating: number
  comment: string
  visitDate?: string
}

export interface Tour {
  id: string
  title: string
  slug: string
  category: "Activity" | "Adventure" | "Culture"
  duration: string
  basePrice: number
  childPrice?: number
  heroImage: {
    url: string
    alt: string
  }
  gallery: { url: string; alt: string }[]
  shortDescription: string
  fullDescription: string
  highlights: string[]
  included: string[]
  notIncluded: string[]
  itinerary: TourItineraryItem[]
  addons: TourAddon[]
  faqs: TourFaq[]
  reviews: TourReview[]
}

export const TOURS: Tour[] = [
  {
    id: "pejeng-cycling-tour",
    title: "Pejeng Village & Terrace Cycling",
    slug: "pejeng-cycling-tour",
    category: "Activity",
    duration: "4 Hours",
    basePrice: 400000,
    childPrice: 350000,
    heroImage: {
      url: "/images/cycling/rice-field-bikes.jpg",
      alt: "Cycling in Bali rice terraces",
    },
    gallery: [
      {
        url: "/images/cycling/rider.jpg",
        alt: "Balinese village cycling",
      },
      {
        url: "/images/cycling/farmer-terraces.jpg",
        alt: "Beautiful rice terraces",
      },
    ],
    shortDescription: "Explore the real Bali away from the crowds through historic Pejeng district, morning markets, and expansive rice terraces.",
    fullDescription: `**Explore the real Bali.** This dedicated cycling tour takes you away from the crowds and deep into the historic Pejeng district. Ride through local morning markets, ancient village pathways, and expansive rice terraces. 
    
Available Schedules:
- **Morning Ride:** 8:30 AM – 12:30 PM
- **Afternoon Ride:** 1:30 PM – 5:30 PM`,
    highlights: [
      "Cycle through quiet ancient village pathways",
      "Visit a bustling traditional morning market",
      "Ride along the edges of stunning Subak rice terraces",
      "Enjoy a fresh young coconut to finish the ride",
    ],
    included: [
      "Well-maintained mountain bikes and helmets",
      "Professional English-speaking cycling guide",
      "Mineral water during the ride",
      "Fresh young coconut",
      "Hotel pick-up and drop-off in Ubud area",
    ],
    notIncluded: ["Personal expenses", "Gratuities"],
    itinerary: [
      {
        id: "iti-pej-1",
        time: "08:30 AM",
        title: "Pickup & Briefing",
        description: "Driver picks you up from your Ubud hotel. Arrive at our Pejeng starting base for bike fitting and a safety briefing.",
      },
      {
        id: "iti-pej-2",
        time: "09:00 AM",
        title: "Pejeng Local Market",
        description: "Walk your bikes through the bustling traditional market. Learn about local spices, exotic fruits, and daily Balinese life.",
      },
      {
        id: "iti-pej-3",
        time: "09:45 AM",
        title: "Village & Temple Cruising",
        description: "Cycle through quiet neighborhood paths. Pass ancient temples and stop briefly at a traditional family compound to understand Balinese architecture.",
      },
      {
        id: "iti-pej-4",
        time: "10:45 AM",
        title: "Subak Rice Terraces",
        description: "The trail opens up to stunning, endless rice paddies. Cycle right on the field edges while learning about the traditional Subak irrigation system.",
      },
      {
        id: "iti-pej-5",
        time: "12:00 PM",
        title: "Fresh Coconut & Wind Down",
        description: "Finish the ride and celebrate with a freshly opened young coconut before heading back.",
      },
      {
        id: "iti-pej-6",
        time: "12:30 PM",
        title: "Hotel Drop-off",
        description: "Arrive back at your accommodation in Ubud.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-pej-1",
        question: "Is the route difficult?",
        answer: "The route is mostly flat with a few gentle inclines. It is suitable for all fitness levels.",
      },
      {
        id: "faq-pej-2",
        question: "Do you provide kids bikes?",
        answer: "Yes, we have a limited number of smaller bikes and baby seats available. Please request them during booking.",
      },
    ],
    reviews: [],
  },
  {
    id: "luwak-coffee-plantation",
    title: "Luwak Coffee Plantation Experience",
    slug: "luwak-coffee-plantation",
    category: "Culture",
    duration: "1.5 Hours",
    basePrice: 400000,
    heroImage: {
      url: "/coffee.jpg",
      alt: "Luwak Coffee Plantation Umah Kuno",
    },
    gallery: [
      {
        url: "/images/coffee/umah-kuno.jpg",
        alt: "Traditional Umah Kuno Balinese Compound",
      },
    ],
    shortDescription: "Discover the secrets behind Bali's world-famous coffee with a jungle walk, traditional roasting, and tasting flight.",
    fullDescription: `Discover the secrets behind Bali's world-famous coffee. This standalone visit is perfect for a relaxing morning or a slow afternoon in the jungle.
    
Available Schedules (Flexible):
- **Morning Session:** 10:00 AM – 11:30 AM
- **Afternoon Session:** 2:00 PM – 3:30 PM

*(Note: Minimum booking of 3 people required for this experience)*`,
    highlights: [
      "Stroll through a lush, shaded plantation",
      "Watch local farmers roast coffee beans over open wood fires",
      "Enjoy a tasting board of 10 different local teas and coffees",
    ],
    included: [
      "Guided plantation tour",
      "Coffee roasting demonstration",
      "Tasting flight of 10 teas and coffees (including Luwak coffee)",
    ],
    notIncluded: ["Transportation to the plantation", "Additional food or drinks"],
    itinerary: [
      {
        id: "iti-cof-1",
        time: "Start",
        title: "Jungle Walk",
        description: "Stroll through a lush, shaded plantation to see raw cocoa, vanilla, and coffee beans growing on the vine.",
      },
      {
        id: "iti-cof-2",
        time: "Midway",
        title: "The Roasting Process",
        description: "Watch how local farmers traditionally roast coffee beans over open wood fires and try your hand at grinding them.",
      },
      {
        id: "iti-cof-3",
        time: "End",
        title: "Tasting Flight",
        description: "Sit on a wooden deck overlooking a jungle ravine and enjoy a tasting board of 10 different local teas and coffees, including the famous Luwak coffee.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-cof-1",
        question: "Is transportation included?",
        answer: "No, this is a standalone experience. You will need to arrange your own transport to the plantation.",
      },
    ],
    reviews: [],
  },
  {
    id: "balinese-cooking-class",
    title: "Traditional Balinese Dinner Cooking Class",
    slug: "balinese-cooking-class",
    category: "Culture",
    duration: "3 Hours",
    basePrice: 400000,
    childPrice: 350000,
    heroImage: {
      url: "/images/cooking/pancake-toss.jpg",
      alt: "Balinese cooking class",
    },
    gallery: [
      {
        url: "/images/cooking/dish.jpg",
        alt: "Dadar Gulung Balinese dessert",
      },
      {
        url: "/images/cooking/group-plate.jpg",
        alt: "Happy cooking class guests",
      },
      {
        url: "/images/cooking/table-prep.jpg",
        alt: "Cooking class table preparation",
      },
      {
        url: "/images/cooking/temple-view.jpg",
        alt: "Guests at village shrine",
      },
    ],
    shortDescription: "Immerse yourself in the flavors of Indonesia with a hands-on cooking class in a beautiful traditional kitchen.",
    fullDescription: `Immerse yourself in the flavors of Indonesia. Set in a beautiful traditional kitchen, this hands-on class teaches you the secrets of Balinese spices.
    
Available Schedule:
- **Dinner Class:** 5:30 PM (17:30) – 8:30 PM`,
    highlights: [
      "Learn about essential Balinese spices and herbs",
      "Cook 5 authentic dishes at your own station",
      "Use traditional tools like a stone mortar",
      "Enjoy your culinary creations in an open-air pavilion",
    ],
    included: [
      "All cooking ingredients and equipment",
      "English-speaking culinary instructor",
      "The dinner you prepared",
      "Digital recipe book",
    ],
    notIncluded: ["Transportation to the class venue"],
    itinerary: [
      {
        id: "iti-cook-1",
        time: "05:30 PM",
        title: "Spice Introduction",
        description: "Start the evening by learning about the roots, herbs, and spices essential to Balinese cooking (like galangal, turmeric, and lemongrass).",
      },
      {
        id: "iti-cook-2",
        time: "06:00 PM",
        title: "Hands-on Cooking",
        description: "Work at your own station to chop, pound (using a traditional stone mortar), and cook 5 authentic dishes, including chicken satay and traditional sambal.",
      },
      {
        id: "iti-cook-3",
        time: "07:30 PM",
        title: "The Feast",
        description: "Sit down with your fellow chefs in an open-air dining pavilion to enjoy the dinner you just prepared.",
      },
      {
        id: "iti-cook-4",
        time: "08:30 PM",
        title: "Recipe Book",
        description: "Take home a digital recipe book so you can recreate the magic in your own kitchen.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-cook-1",
        question: "Can you accommodate dietary restrictions?",
        answer: "Yes! We can adjust the recipes for vegetarians, vegans, and most allergies. Please let us know when booking.",
      },
    ],
    reviews: [],
  }
]
