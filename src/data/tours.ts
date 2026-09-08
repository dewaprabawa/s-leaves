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

/** Browse taxonomy for travel & activities (not sports-only). */
export type TourCategoryId =
  | "adventure"
  | "food"
  | "culture"
  | "village"
  | "day-tour"

export const TOUR_CATEGORY_LABELS: Record<TourCategoryId, string> = {
  adventure: "Adventure",
  food: "Food & Workshops",
  culture: "Culture & Heritage",
  village: "Village & Nature",
  "day-tour": "Day Tours",
}

export interface Tour {
  id: string
  title: string
  slug: string
  category: TourCategoryId
  /** Optional area label shown on discovery cards (e.g. Ubud / Pejeng). */
  area?: string
  /** Featured on homepage top-picks rail when true. */
  isTopPick?: boolean
  duration: string
  basePrice: number
  childPrice?: number
  /** Google SERP title (≤60 chars). Falls back to `title`. */
  seoTitle?: string
  /** Google SERP meta description (≤160 chars). Falls back to `shortDescription`. */
  seoDescription?: string
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
  activityOptions?: { name: string; priceDiff: number; description?: string }[]
  addons: TourAddon[]
  faqs: TourFaq[]
  reviews: TourReview[]
  getYourGuideUrl?: string
  youtubeVideoId?: string
}

export const TOURS: Tour[] = [
  {
    id: "bali-atv-adventure",
    title: "Bali ATV Quad Bike Adventure & River Tubing",
    slug: "bali-atv-adventure",
    category: "adventure",
    area: "Pejeng / Ubud",
    isTopPick: true,
    duration: "2–4 Hours",
    basePrice: 750000,
    childPrice: 700000,
    seoTitle: "ATV Ride Ubud from IDR 750K",
    seoDescription:
      "ATV ride Ubud at All New Bali Adventure — single from IDR 750K, tandem 1.1M. Lunch, gear, insurance. Optional Wos tubing. WhatsApp booking.",
    heroImage: {
      url: "/images/adventures/atv-adventure.jpg",
      alt: "ATV jungle adventure ride through tropical rainforest trails",
    },
    gallery: [
      {
        url: "/images/adventures/atv-adventure.jpg",
        alt: "Quad bike ATV ride through Bali jungle trails",
      },
      {
        url: "/images/adventures/canyon-tubing.jpg",
        alt: "River tubing through crystal-clear Bali waters",
      },
    ],
    shortDescription:
      "Private muddy sport ATV ride near Ubud at All New Bali Adventure — beginner-friendly Bali quad bike through jungle mud tracks, river crossings, and scenic trails. All-inclusive: lunch, helmet, boot shoes & insurance. Add Wos River tubing or rafting. From IDR 750K.",
    fullDescription: `**Looking for a Bali Quad Bike / ATV Ride Near Ubud?**

If you want an adrenaline-packed day beyond the usual tourist trail, our Bali ATV Quad Bike Adventure delivers a complete private ATV ride through jungle mud tracks, muddy trails, and river crossings. Every ride is designed for sensation, excitement, and joy — whether you go solo (single ATV) or share a tandem ATV with a partner. Beginner-friendly with a full safety briefing.

### ATV Arena Location: All New Bali Adventure
All ATV rides take place at **All New Bali Adventure** — our dedicated jungle ATV arena near Ubud. This is where you will meet your guide, get fitted with boot shoes and a helmet, and start your safety briefing before hitting the track.

### Complete Bali Quad Bike (ATV) Trips
Hop on a powerful ATV and race scenic off-road trails with expert guides. Packages suit first-timers and thrill-seekers alike. After a safety briefing at All New Bali Adventure, you hit the track for an unforgettable ride through Bali's green countryside — lunch, helmet, boot shoes, and insurance included.

### Combine with River Tubing or Rafting
Want even more adventure? Pair your ATV ride with river tubing on the Wos River, or ask about an ATV + rafting combo. After racing the ATV mud track, cool down as you float the river or paddle whitewater — favourite combos for guests who want a full day of thrills on land and water.

Message us on WhatsApp to book Single ATV, Tandem ATV, or an ATV + River Tubing combo for your preferred date.`,
    highlights: [
      "ATV arena at All New Bali Adventure",
      "Complete Bali quad bike (ATV) adventure",
      "Optional river tubing on the Wos River",
      "Boot shoes, helmet, lunch & insurance for ages 6–65 included",
      "Suitable for beginners with full safety briefing",
    ],
    included: [
      "ATV ride (single or tandem)",
      "Boot shoes & helmet",
      "Simple menu lunch",
      "Insurance for ages 6–65",
      "Safety briefing and trail guide",
    ],
    notIncluded: [
      "Hotel pickup & drop-off (IDR 400,000 surcharge — optional)",
      "River tubing combo (optional — ask when booking)",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      {
        id: "iti-atv-1",
        time: "Start",
        title: "Arrive at All New Bali Adventure",
        description:
          "Meet your guide at the All New Bali Adventure ATV arena, get fitted with boot shoes and helmet, and receive a clear safety briefing before the ride.",
      },
      {
        id: "iti-atv-2",
        time: "Midway",
        title: "ATV Jungle Trail at All New Bali Adventure",
        description:
          "Race the ATV track at All New Bali Adventure through jungle paths, muddy stretches, and scenic river crossings packed with sensation and excitement.",
      },
      {
        id: "iti-atv-3",
        time: "Optional",
        title: "Wos River Tubing",
        description:
          "Combine your package with river tubing — explore the Wos River on a tube after your ATV adventure.",
      },
      {
        id: "iti-atv-4",
        time: "Finish",
        title: "Lunch & Wind Down",
        description:
          "Enjoy a simple menu lunch, change into dry clothes, and head back with unforgettable memories.",
      },
    ],
    activityOptions: [
      {
        name: "Single ATV Ride",
        priceDiff: 0,
        description: "1 pax · solo jungle thrill",
      },
      {
        name: "Tandem ATV Ride",
        priceDiff: 350000,
        description: "2 pax · share the adventure",
      },
      {
        name: "ATV + River Tubing Combo",
        priceDiff: 0,
        description: "Ask us for combo pricing · Wos River tubing after the ATV track",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-atv-1",
        question: "How much does an ATV ride near Ubud cost in 2026?",
        answer:
          "Single ATV starts from IDR 750,000 per person and tandem from IDR 1,100,000 for two sharing one bike. Packages include lunch, helmet, boot shoes, insurance (ages 6–65), and a safety briefing at All New Bali Adventure. Hotel pickup is optional at IDR 400,000.",
      },
      {
        id: "faq-atv-2",
        question: "Is this ATV tour beginner-friendly?",
        answer:
          "Yes. No riding experience is required. Guides give a full safety briefing before you start, and tandem ATVs are available if you prefer to ride with a partner.",
      },
      {
        id: "faq-atv-3",
        question: "Where is the ATV arena near Ubud?",
        answer:
          "All of our ATV rides run at All New Bali Adventure — a dedicated jungle arena near Ubud / Pejeng. We are not the Kuber tunnel or Dragon Cave tracks; ask WhatsApp if you need pin directions or hotel pickup.",
      },
      {
        id: "faq-atv-4",
        question: "What is included in the ATV price?",
        answer:
          "Guided ATV ride, boot shoes and helmet, simple menu lunch, insurance for ages 6–65, and an English-speaking safety briefing. Hotel pickup and Wos River tubing are optional add-ons — confirm when you book.",
      },
      {
        id: "faq-atv-5",
        question: "Can I combine ATV with river tubing or rafting?",
        answer:
          "Yes. Many guests add Wos River tubing after the ATV track for a land-and-water day. Rafting combos are also available on request — message WhatsApp with your date and guest count.",
      },
      {
        id: "faq-atv-6",
        question: "What should I bring?",
        answer:
          "Bring a change of clothes or dry cloth, sunscreen, and cash for extras. A waterproof phone case helps for trail photos. Towels and changing space are available at the arena.",
      },
      {
        id: "faq-atv-7",
        question: "Do you provide insurance?",
        answer:
          "Yes. We provide insurance for guests aged 6–65 on our adventure packages.",
      },
      {
        id: "faq-atv-8",
        question: "Is this a muddy sport ATV / mud bike ride?",
        answer:
          "Yes — the All New Bali Adventure track includes jungle mud, soft soil, and river crossings on a 4-wheel sport ATV (quad). That is different from a 2-wheel dirt bike / enduro tour. If you want clutch motocross bikes (KLX/KTM), book our Bali Dirt Bike Adventure instead.",
      },
    ],
    reviews: [],
  },
  {
    id: "whitewater-rafting",
    title: "Whitewater Rafting Adventure",
    slug: "whitewater-rafting",
    category: "adventure",
    area: "Ayung River / Ubud",
    isTopPick: true,
    duration: "3 Hours",
    basePrice: 500000,
    childPrice: 450000,
    heroImage: {
      url: "/images/adventures/rafting.jpg",
      alt: "Whitewater rafting through a Bali jungle river canyon",
    },
    gallery: [
      {
        url: "/images/adventures/rafting.jpg",
        alt: "Rafting crew navigating Bali river rapids",
      },
    ],
    shortDescription:
      "Navigate Class II-III rapids through a stunning river canyon surrounded by towering jungle cliffs, waterfalls, and ancient stone carvings.",
    fullDescription: `**Ride the Rapids Through Bali's Jungle Canyon**

Our Whitewater Rafting Adventure takes you down a scenic river canyon near Ubud, where Class II-III rapids, jungle walls, and hidden waterfalls create one of the most exciting half-day experiences in central Bali.

This is a guided rafting trip suitable for beginners and families with older children. Professional river crew, safety equipment, and lunch are all included.

### What to Expect on the River
After a safety briefing and gear fitting, your crew paddles you through a mix of fun rapids and calm stretches. Along the way you will pass towering jungle cliffs, see waterfalls spilling into the river, and spot ancient stone carvings on the canyon walls.

### A Great Standalone Adventure or Combo Day
Whitewater rafting pairs perfectly with an ATV ride or canyon tubing session for a full land-and-water adventure day. Message us on WhatsApp to check combo availability and departure times.

**Available Schedules:**
- **Morning:** 08:30 AM
- **Midday:** 11:00 AM
- **Afternoon:** 02:00 PM`,
    highlights: [
      "Class II-III rapids with professional crew",
      "Jungle canyon scenery and waterfalls",
      "Life jackets and safety briefing included",
      "Lunch included after the ride",
    ],
    included: [
      "Professional rafting crew and guide",
      "Life jacket and safety equipment",
      "Safety briefing before launch",
      "Lunch after rafting",
      "Insurance for ages 6–65",
    ],
    notIncluded: [
      "Hotel pickup & drop-off (IDR 400,000 surcharge — optional)",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      {
        id: "iti-raft-1",
        time: "Start",
        title: "Arrival & Safety Briefing",
        description:
          "Meet your river crew, get fitted with life jackets and helmets, and receive a clear safety briefing before launching.",
      },
      {
        id: "iti-raft-2",
        time: "On River",
        title: "Whitewater Rapids",
        description:
          "Paddle through Class II-III rapids surrounded by jungle cliffs, waterfalls, and ancient stone carvings.",
      },
      {
        id: "iti-raft-3",
        time: "Finish",
        title: "Lunch & Wind Down",
        description:
          "Change into dry clothes and enjoy a simple lunch after your rafting adventure.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-raft-1",
        question: "Do I need rafting experience?",
        answer:
          "No. Our professional crew guides every raft and gives a full safety briefing before you launch. The route is suitable for beginners.",
      },
      {
        id: "faq-raft-2",
        question: "What should I bring?",
        answer:
          "Bring a change of clothes, sunscreen, and a waterproof phone case if you want photos. Towels and changing facilities are available after the trip.",
      },
      {
        id: "faq-raft-3",
        question: "Is hotel pickup included?",
        answer:
          "Hotel pickup is available for an additional IDR 400,000. Free Ubud pickup applies to the cycling tour only.",
      },
      {
        id: "faq-raft-4",
        question: "What is the minimum group size?",
        answer: "A minimum of 2 guests is required to run a rafting trip.",
      },
      {
        id: "faq-raft-5",
        question: "Do you provide insurance?",
        answer:
          "Yes. We provide insurance for guests aged 6–65 years old on our rafting packages.",
      },
    ],
    reviews: [],
  },
  {
    id: "canyon-tubing",
    title: "Canyon Tubing Adventure",
    slug: "canyon-tubing",
    category: "adventure",
    area: "Wos River / Pejeng",
    duration: "2.5 Hours",
    basePrice: 359000,
    childPrice: 300000,
    heroImage: {
      url: "/images/adventures/canyon-tubing.jpg",
      alt: "Canyon tubing through crystal-clear Bali waters",
    },
    gallery: [
      {
        url: "/images/adventures/canyon-tubing.jpg",
        alt: "Floating through a hidden Bali canyon on an inflatable tube",
      },
    ],
    shortDescription:
      "Drift through hidden canyons on an inflatable tube. Crystal-clear waters, moss-covered walls, and shafts of sunlight create a magical underground world.",
    fullDescription: `**Float Through Hidden Bali Canyons**

Our Canyon Tubing Adventure is a relaxing but unforgettable float through narrow jungle canyons on an inflatable tube. Crystal-clear water, moss-covered rock walls, and shafts of sunlight make this one of the most photogenic adventures near Ubud.

A nature guide leads the way while you drift through calm pools and gentle currents. Life jackets are provided, and no prior experience is needed.

### Pair It with ATV for the Ultimate Combo
Many guests combine canyon tubing with a morning ATV ride through the jungle — land thrills in the morning, cool water in the afternoon. Ask us on WhatsApp about ATV + tubing combo packages.

**Available Schedules:**
- Morning and afternoon departures available — message us to confirm your preferred time slot.`,
    highlights: [
      "Hidden canyon scenery",
      "Crystal-clear river water",
      "Life jacket and nature guide included",
      "Great ATV combo add-on",
    ],
    included: [
      "Inflatable tube and life jacket",
      "English-speaking nature guide",
      "Safety briefing",
      "Insurance for ages 6–65",
    ],
    notIncluded: [
      "Hotel pickup & drop-off (IDR 400,000 surcharge — optional)",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      {
        id: "iti-tube-1",
        time: "Start",
        title: "Briefing & Gear Fitting",
        description:
          "Meet your guide, receive a safety briefing, and get fitted with a life jacket before entering the canyon.",
      },
      {
        id: "iti-tube-2",
        time: "On River",
        title: "Canyon Tubing",
        description:
          "Float through hidden canyons on an inflatable tube — crystal-clear water, moss-covered walls, and peaceful jungle scenery.",
      },
      {
        id: "iti-tube-3",
        time: "Finish",
        title: "Return & Wind Down",
        description:
          "Finish the float, change into dry clothes, and head back with unforgettable memories.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-tube-1",
        question: "Do I need to know how to swim?",
        answer:
          "Basic water confidence is helpful, but life jackets are provided and guides stay with the group throughout the float.",
      },
      {
        id: "faq-tube-2",
        question: "Can I combine tubing with ATV?",
        answer:
          "Yes — canyon tubing pairs perfectly with our ATV jungle ride. Ask us about combo pricing when you book on WhatsApp.",
      },
      {
        id: "faq-tube-3",
        question: "What should I bring?",
        answer:
          "Bring a change of clothes, sunscreen, and a waterproof phone case. Towels and changing facilities are available at our base.",
      },
      {
        id: "faq-tube-4",
        question: "Is hotel pickup included?",
        answer:
          "Hotel pickup is available for an additional IDR 400,000. Free Ubud pickup applies to the cycling tour only.",
      },
      {
        id: "faq-tube-5",
        question: "Do you provide insurance?",
        answer:
          "Yes. We provide insurance for guests aged 6–65 years old on our canyon tubing packages.",
      },
    ],
    reviews: [],
  },
  {
    id: "ubud-ricefield-cycling-tour",
    title: "Ubud Ricefield & Village Cycling Tour",
    slug: "ubud-ricefield-cycling-tour",
    category: "village",
    area: "Pejeng / Ubud",
    isTopPick: true,
    duration: "Full Day",
    basePrice: 750000,
    seoTitle: "Rice Paddy Cycling Ubud | Pejeng",
    seoDescription:
      "Rice paddy cycling in Pejeng near Ubud — quiet Subak lanes, lunch included, free Ubud hotel pickup from IDR 750K. Book on WhatsApp.",
    heroImage: {
      url: "/images/cycling/rice-field-bikes.jpg",
      alt: "Rice paddy cycling tour through Pejeng village terraces near Ubud",
    },
    gallery: [
      {
        url: "/images/cycling/rice-field-bikes.jpg",
        alt: "Rice paddy cycling tour through Pejeng village terraces near Ubud",
      },
      {
        url: "/images/cycling/rider.jpg",
        alt: "Countryside bike rider on quiet Pejeng village path near Ubud",
      },
      {
        url: "/images/cycling/temple-gate.jpg",
        alt: "Cycling group at a Balinese temple gate in Pejeng village",
      },
      {
        url: "/images/cycling/trail-group.jpg",
        alt: "Small-group village bike tour on a Pejeng countryside trail",
      },
      {
        url: "/images/cycling/jungle-path.jpg",
        alt: "Guided cycling through green pathways near Ubud ricefields",
      },
      {
        url: "/images/cycling/rice-field-walk.jpg",
        alt: "Guests walking through golden rice paddies on the Ubud cycling tour",
      },
      {
        url: "/images/cycling/lunch-stop.jpg",
        alt: "Lunch included on the Ubud ricefield cycling tour",
      },
    ],
    youtubeVideoId: "dQw4w9WgXcQ", // Placeholder, replace with actual ID
    shortDescription: "Authentic Ubud countryside cycling tour through rice paddies and Pejeng village paths — rice harvesting, Balinese home visit, wood carving studio, and lunch included. Small-group village bike tour from IDR 750K with free Ubud hotel pickup. Pair with an afternoon Tumang Bali Cooking Class for a full culture day.",
    fullDescription: `**Ubud Ricefield & Village Cycling Tour**

Discover the real Bali on two wheels with our Ubud rice paddy cycling tour through Pejeng. This is a relaxing countryside bike ride through beautiful green ricefields and quiet village paths — a cultural immersion designed for all fitness levels.

We pick you up from your hotel in the Ubud area and transport you to the starting point, where you are fitted with a bicycle, helmet, and briefed by your English-speaking guide before setting off into the countryside.

### Rice Paddy & Countryside Cycling
Cycle through stunning green rice paddies and village trails east of central Ubud. Stop to see local farmers at work and try harvesting rice with them. Your Pejeng guide explains traditional Balinese farming methods and the Subak irrigation rhythm of rural life — quieter than crowded Tegallalang photo stops.

### Village Culture & Local Life
Enter a real Balinese family house and see daily local life up close. Visit a local wood carving studio and watch artists at work. Continue cycling through the village past temples, schools, and everyday community activities.

### Lunch Included
Enjoy a free lunch at a chill local village restaurant serving authentic Balinese food — included in your package.

After the tour we drop you back at your Ubud hotel.

**Available Schedule:**
- **Afternoon departure** — ideal for travelers who prefer a later start

**Important Note:**
The itinerary may sometimes change due to field conditions, weather, or village activities. We will always adjust to make sure you still have the best and safest experience.`,
    highlights: [
      "Rice paddy & countryside cycling through Pejeng",
      "Rice harvesting activity with local farmers",
      "Visit a Balinese family house and wood carving studio",
      "Lunch included + free Ubud hotel pickup",
    ],
    included: [
      "Hotel pickup & drop-off (Ubud area — free)",
      "Bicycle, helmet & guide",
      "Lunch included",
      "Bottled water",
      "Insurance for ages 6–65",
    ],
    notIncluded: ["Personal expenses", "Gratuities"],
    itinerary: [
      {
        id: "iti-ubud-cyc-1",
        time: "Start",
        title: "Pickup from Hotel",
        description: "We pick you up at your hotel in the Ubud area and transport you to the cycling starting point.",
      },
      {
        id: "iti-ubud-cyc-2",
        time: "Morning",
        title: "Ricefield Cycling",
        description: "Relaxing bike ride through beautiful green ricefields and quiet village paths.",
      },
      {
        id: "iti-ubud-cyc-3",
        time: "Midday",
        title: "Sightseeing & Harvesting Activity",
        description: "See local farmers and try harvesting rice with them. Learn about traditional farming.",
      },
      {
        id: "iti-ubud-cyc-4",
        time: "Afternoon",
        title: "Visit Balinese House",
        description: "Enter a real Balinese family house and see daily local life.",
      },
      {
        id: "iti-ubud-cyc-5",
        time: "Afternoon",
        title: "Balinese Carving Art",
        description: "Visit a local wood carving studio and see artists at work.",
      },
      {
        id: "iti-ubud-cyc-6",
        time: "Afternoon",
        title: "See Local People Life",
        description: "Cycle through the village to see temples, schools, and local activities.",
      },
      {
        id: "iti-ubud-cyc-7",
        time: "Midday",
        title: "Lunch Stop",
        description: "Enjoy a free lunch at a chill local village restaurant with authentic Balinese food.",
      },
      {
        id: "iti-ubud-cyc-8",
        time: "Finish",
        title: "Drop Back to Hotel",
        description: "After the tour we drop you back at your hotel in Ubud.",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-ubud-cyc-1",
        question: "How much is the Ubud rice paddy cycling tour?",
        answer:
          "IDR 750,000 per person in 2026. That includes the guided Pejeng village / ricefield ride, bike and helmet, lunch, insurance (ages 6–65), and free hotel pickup and drop-off in the Ubud area.",
      },
      {
        id: "faq-ubud-cyc-2",
        question: "Is hotel pickup included for the cycling tour?",
        answer:
          "Yes — complimentary pickup and drop-off for hotels in the Ubud area. Pickups outside Ubud add an IDR 400,000 surcharge. Tumang Bali Cooking Class also includes complimentary Ubud pickup.",
      },
      {
        id: "faq-ubud-cyc-3",
        question: "Is this the same as Tegallalang or Kintamani downhill cycling?",
        answer:
          "No. We ride quiet Pejeng Subak ricefield and village paths — not the busy Tegallalang photo terraces and not a Kintamani volcano downhill shuttle tour. Ideal if you want culture and scenery without the big-bus crowd.",
      },
      {
        id: "faq-ubud-cyc-4",
        question: "Is the cycling route difficult?",
        answer:
          "The route is mostly flat with gentle village and ricefield paths. It suits most fitness levels, including couples and families comfortable on a bike.",
      },
      {
        id: "faq-ubud-cyc-5",
        question: "Is lunch included?",
        answer:
          "Yes — lunch at a local village restaurant is included in the tour price.",
      },
      {
        id: "faq-ubud-cyc-6",
        question: "Can I combine cycling with a cooking class?",
        answer:
          "Yes. Many guests ride Pejeng ricefields by day and join an afternoon Tumang Bali Cooking Class (shared from IDR 506,370, Ubud pickup included). Ask WhatsApp for a same-day timeline.",
      },
      {
        id: "faq-ubud-cyc-7",
        question: "What should I wear?",
        answer:
          "Comfortable breathable clothing, closed-toe shoes (sneakers are fine), sunglasses, and sunscreen.",
      },
      {
        id: "faq-ubud-cyc-8",
        question: "Do you provide insurance?",
        answer:
          "Yes. We provide insurance for guests aged 6–65 on the Ubud Ricefield Cycling Tour.",
      },
    ],
    reviews: [],
  },
  {
    id: "luwak-coffee-plantation",
    title: "Luwak Coffee Plantation Experience (Umah Kuno)",
    slug: "luwak-coffee-plantation",
    category: "food",
    area: "Tampaksiring / Ubud",
    isTopPick: true,
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
    youtubeVideoId: "dQw4w9WgXcQ", // Placeholder
    shortDescription: "Discover the secrets behind Bali's world-famous coffee at Umah Kuno with a jungle walk, traditional roasting, and tasting flight.",
    fullDescription: `**A Journey Into the Heart of Bali's Coffee Culture**

Bali is world-renowned for its coffee, but the story behind the cup is often hidden from visitors. Our Luwak Coffee Plantation Experience at the beautiful **Umah Kuno** estate offers you a transparent, ethical, and deeply educational look into how Bali's most famous export is cultivated, processed, and enjoyed. 

This standalone 1.5-hour experience is perfect for a relaxing morning or a slow afternoon in the jungle. It is designed for coffee lovers, culture enthusiasts, and families looking for a peaceful escape into nature.

### The Umah Kuno Difference: Ethical and Authentic
The highlight of this tour is learning about *Kopi Luwak*, the most expensive and exclusive coffee in the world, famous for its incredibly smooth, non-bitter taste. The coffee is made from beans that have been naturally fermented in the digestive tract of the Asian Palm Civet (the *Luwak*). 

Unfortunately, much of the industry now relies on caged animals to meet tourist demand. We strongly oppose this practice. We partner exclusively with Umah Kuno because they are a traditional, family-run plantation that relies entirely on wild, free-roaming civets. The civets naturally forage in the jungle at night, selecting only the ripest, most perfect coffee cherries. The farmers collect the beans from the forest floor in the morning. This ethical approach not only protects local wildlife but results in a vastly superior cup of coffee.

### The Jungle Walk
Your experience begins with a guided stroll through a lush, shaded plantation. Your local guide will point out raw cocoa pods hanging from the trees, vanilla orchids climbing up trunks, and various spices like cinnamon and cloves growing wild. You will see exactly how Arabica and Robusta coffee cherries grow on the vine and learn how the farmers determine when they are perfectly ripe for hand-picking.

### The Traditional Roasting Process
Next, you will step into a traditional Balinese outdoor kitchen. Here, the magic happens. You will watch local farmers roast the cleaned coffee beans over an open wood fire in a massive clay pan. The smell of the roasting beans mingling with the woodsmoke is intoxicating. 

You won't just be watching; you will be invited to participate! Grab the heavy wooden pestle and try your hand at grinding the freshly roasted beans in a giant stone mortar, just as the Balinese have done for centuries. 

### The Grand Tasting Flight
The tour concludes on a stunning wooden deck suspended over a lush jungle ravine. Sit back, relax, and enjoy the breathtaking views as your host brings out a massive wooden tasting board. You will be served a flight of 10 different locally produced teas and coffees. You will taste everything from ginger tea and mangosteen peel tea to ginseng coffee and pure Balinese cocoa. 

Finally, the crown jewel is served: a freshly brewed cup of the ethical Kopi Luwak. Sip it slowly, note the incredibly smooth finish, and enjoy the serenity of the jungle.

📍 **Location:** [Umah Kuno on Google Maps](https://share.google/VOs6vwV16r2bVERjV)
    
**Available Schedules (Flexible):**
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
        answer: "No, this is a standalone experience. You will need to arrange your own transport to the plantation in Tampaksiring, which is about 25 minutes from central Ubud.",
      },
      {
        id: "faq-cof-2",
        question: "Is the Luwak coffee truly ethical?",
        answer: "Yes! 100%. Umah Kuno strictly forbids caged civets. The beans are gathered from the forest floor where wild, free-roaming civets have naturally dropped them. This is the authentic, ethical way Kopi Luwak has been harvested for centuries.",
      },
      {
        id: "faq-cof-3",
        question: "Can kids join?",
        answer: "Absolutely! Kids love the jungle walk and participating in grinding the beans. We have non-caffeinated chocolate and teas for them to taste.",
      }
    ],
    reviews: [],
  },
  {
    id: "balinese-cooking-class",
    title: "Tumang Bali Cooking Class",
    slug: "balinese-cooking-class",
    category: "food",
    area: "Tumang village / Ubud",
    isTopPick: true,
    duration: "3–4 Hours",
    basePrice: 506370,
    seoTitle: "Cooking Class Ubud | Tumang from IDR 506K",
    seoDescription:
      "Tumang Bali Cooking Class near Ubud — market tour, rice-field walk, 10+ dishes, max 8 guests. Shared IDR 506,370. Free Ubud pickup. Book on WhatsApp.",
    heroImage: {
      url: "/images/cooking/pancake-toss.jpg",
      alt: "Hands-on Tumang Bali Cooking Class near Ubud",
    },
    gallery: [
      {
        url: "/images/cooking/market-guide.jpg",
        alt: "Morning market tour before Tumang Bali Cooking Class",
      },
      {
        url: "/images/cooking/stovetop-class.jpg",
        alt: "Guests cooking at individual stations in the village kitchen",
      },
      {
        url: "/images/cooking/sate-lilit-prep.jpg",
        alt: "Shaping sate lilit on lemongrass during class",
      },
      {
        url: "/images/cooking/crepe-flip-fun.jpg",
        alt: "Guests flipping Dadar Gulung pandan crepes",
      },
      {
        url: "/images/cooking/buffet-spread.jpg",
        alt: "Feast of dishes cooked during Tumang Bali Cooking Class",
      },
      {
        url: "/images/cooking/group-plate.jpg",
        alt: "Happy guests with homemade Balinese dishes",
      },
      {
        url: "/images/cooking/dish.jpg",
        alt: "Freshly prepared Balinese dessert from class",
      },
    ],
    shortDescription:
      "Family-run Tumang Bali Cooking Class near Ubud — morning market tour (AM), rice-field walk, 10+ dishes with Chef Wayan Sudiana, max 8 guests, English instruction. Shared from IDR 506,370 with complimentary Ubud-area pickup. TripAdvisor Traveler’s Choice 2026.",
    fullDescription: `**Tumang Bali Cooking Class — authentic village kitchen near Ubud**

[Tumang Bali](https://tumangbaliclass.com/) is a family-run cooking school in Tumang village near Ubud for travellers who want hands-on Balinese cuisine — not a hotel demo. Head Chef **Wayan Sudiana** teaches Base Genep (bumbu), sate lilit, pepes ikan, sambal matah, lawar, and more. Classes are taught in English. Complimentary pickup in the Ubud area. Max **8 guests** per shared class.

### Why book Tumang through Sekar Bali Activity
We list Tumang as our flagship food experience so you can book adventure, village cycling, and this cooking class on one WhatsApp thread — with clear IDR before you confirm.

### What’s included
- Hands-on cooking of **10+ Balinese dishes**
- **Morning market tour** on the AM session only
- Guided **rice-field walk**
- English instruction with Chef Wayan Sudiana
- Vegetarian / vegan menus available
- Complimentary **hotel pickup in the Ubud area**
- Small group — max 8 guests (shared)

### Sessions
- **Morning shared class** — includes traditional pasar (market) tour
- **Afternoon shared class** — rice-field walk + kitchen (ideal after ricefield cycling)
- **Private class** — exclusive kitchen from IDR 633,090 (1 guest); private for 2 from IDR 1,266,180

### Pricing (2026)
| Option | Price |
|--------|-------|
| Shared class | **IDR 506,370** per person |
| Private (1 guest) | **IDR 633,090** |
| Private (2 guests) | **IDR 1,266,180** total |

### Recognition
TripAdvisor **Traveler’s Choice 2026** · **5.0** rating (1500+ reviews).

### Learn more
Full operator site: [tumangbaliclass.com](https://tumangbaliclass.com/balinese-cooking-class-ubud) · Compare Ubud classes: [compare guide](https://tumangbaliclass.com/compare-ubud-cooking-classes)`,
    highlights: [
      "10+ dishes with Chef Wayan Sudiana",
      "Morning market tour (AM class) + rice-field walk",
      "Max 8 guests · fully hands-on · English",
      "Complimentary Ubud-area hotel pickup",
      "TripAdvisor Traveler’s Choice 2026",
    ],
    included: [
      "Hands-on cooking class (10+ dishes)",
      "Morning market tour (morning session only)",
      "Rice-field walk",
      "All ingredients and cooking equipment",
      "English-speaking chef / instructor",
      "Meal of the dishes you prepare",
      "Complimentary hotel pickup in the Ubud area",
    ],
    notIncluded: [
      "Hotel pickup outside the Ubud area (ask WhatsApp for a quote)",
      "Personal expenses and gratuities",
      "Private kitchen surcharge (optional)",
    ],
    itinerary: [
      {
        id: "iti-cook-1",
        time: "Pickup",
        title: "Ubud hotel pickup",
        description:
          "Complimentary pickup from hotels in the Ubud area. Morning guests continue to the traditional market; afternoon guests head toward the village kitchen and rice fields.",
      },
      {
        id: "iti-cook-2",
        time: "Market (AM)",
        title: "Traditional pasar tour",
        description:
          "Morning class only — walk the market with your chef, learn herbs and spices used in Base Genep, and shop fresh ingredients for class.",
      },
      {
        id: "iti-cook-3",
        time: "Village",
        title: "Rice-field walk + kitchen briefing",
        description:
          "Stroll the paddies near Tumang, then settle into the family kitchen for a safety and spice introduction.",
      },
      {
        id: "iti-cook-4",
        time: "Cook",
        title: "Hands-on cooking (10+ dishes)",
        description:
          "Pound Base Genep, shape sate lilit, prepare sambal matah, pepes, lawar, and more at your station under Chef Wayan Sudiana’s guidance.",
      },
      {
        id: "iti-cook-5",
        time: "Feast",
        title: "Eat what you cooked",
        description:
          "Sit down together for the meal you prepared — vegetarian and vegan menus available when requested at booking.",
      },
    ],
    activityOptions: [
      {
        name: "Shared morning class (market tour)",
        priceDiff: 0,
        description: "08:30 start · pasar + rice-field walk · max 8 · IDR 506,370",
      },
      {
        name: "Shared afternoon class",
        priceDiff: 0,
        description: "Afternoon · rice-field walk + kitchen · max 8 · IDR 506,370",
      },
      {
        name: "Private class (1 guest)",
        priceDiff: 126720,
        description: "Exclusive kitchen · IDR 633,090",
      },
    ],
    addons: [],
    faqs: [
      {
        id: "faq-cook-1",
        question: "How much is Tumang Bali Cooking Class?",
        answer:
          "Shared small-group class is IDR 506,370 per person. Private kitchen is IDR 633,090 for 1 guest, or IDR 1,266,180 for 2 guests. Complimentary Ubud-area hotel pickup is included.",
      },
      {
        id: "faq-cook-2",
        question: "Is there a market tour?",
        answer:
          "Yes — the morning shared class includes a traditional pasar (market) tour. Afternoon classes focus on the rice-field walk and kitchen.",
      },
      {
        id: "faq-cook-3",
        question: "How many people are in a class?",
        answer:
          "Shared classes are capped at 8 guests so everyone cooks hands-on. Private kitchen options are available.",
      },
      {
        id: "faq-cook-4",
        question: "Can you do vegetarian or vegan?",
        answer:
          "Yes. Tumang offers a full vegetarian / vegan menu — request it when you WhatsApp book, not only as a side option.",
      },
      {
        id: "faq-cook-5",
        question: "Is hotel pickup included?",
        answer:
          "Complimentary pickup is included for hotels in the Ubud area. Pickup from Canggu, Seminyak, or other areas — ask WhatsApp for a transfer quote.",
      },
      {
        id: "faq-cook-6",
        question: "Can I combine this with ricefield cycling?",
        answer:
          "Yes. A popular culture day is Pejeng ricefield cycling (free Ubud pickup + lunch) then an afternoon Tumang cooking class. Message WhatsApp to reserve both.",
      },
    ],
    reviews: [],
  },
  {
    id: "full-day-ubud-tour",
    title: "Full Day Ubud Tour: Royal Palace, Art Market & Rice Terraces",
    slug: "full-day-ubud-tour",
    category: "day-tour",
    area: "Ubud & surrounds",
    isTopPick: true,
    duration: "10 Hours",
    basePrice: 600000,
    heroImage: {
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      alt: "Full Day Ubud Tour",
    },
    gallery: [],
    shortDescription: "Experience the ultimate Full Day Ubud Tour featuring the Ubud Royal Palace, vibrant Art Market, and breathtaking rice terraces.",
    fullDescription: `**The Ultimate Full Day Ubud Tour**\n\nWhen searching for the perfect *full day ubud tour*, look no further. This comprehensive itinerary is designed to cover the very best cultural highlights in central Bali. \n\nWe begin our journey at the historic **Ubud Royal Palace**, where you can marvel at traditional Balinese architecture. Just across the street, we dive into the bustling **Ubud Art Market**, a perfect spot to find authentic handicrafts and souvenirs.\n\nAfter a morning of culture and shopping, we head to the lush jungles for an optional *atv ride bali swing tour* experience or a relaxing walk through the Tegalalang rice terraces. This is a private tour, meaning you can customize the pace to suit your needs.`,
    highlights: ["Ubud Royal Palace", "Ubud Art Market", "Tegalalang Rice Terraces"],
    included: ["Private transport", "English speaking driver", "Mineral water"],
    notIncluded: ["Entrance fees", "Lunch"],
    itinerary: [
      {
        id: "iti-fdu-1",
        time: "08:30 AM",
        title: "Hotel Pickup",
        description: "Your private driver will pick you up from your hotel in Bali."
      },
      {
        id: "iti-fdu-2",
        time: "10:00 AM",
        title: "Ubud Royal Palace & Art Market",
        description: "Explore the center of Ubud, taking in the historical palace and shopping at the traditional market."
      },
      {
        id: "iti-fdu-3",
        time: "02:00 PM",
        title: "Tegalalang Rice Terraces",
        description: "Walk the stunning terraces and optionally experience the famous Bali Swing."
      }
    ],
    addons: [],
    faqs: [],
    reviews: []
  },
  {
    id: "half-day-ubud-tanah-lot-tour",
    title: "Half Day Trip: Explore Ubud Culture & Amazing Sunset at Tanah Lot Temple",
    slug: "half-day-ubud-tanah-lot-tour",
    category: "day-tour",
    area: "Ubud → Tanah Lot",
    duration: "6 Hours",
    basePrice: 450000,
    heroImage: {
      url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
      alt: "Tanah Lot Sunset",
    },
    gallery: [],
    shortDescription: "A perfect half day trip explore ubud culture amazing sunset tanah lot temple. Ideal for those short on time.",
    fullDescription: `**Half Day Ubud & Tanah Lot Sunset Experience**\n\nIf you want to experience the magic of Bali but are short on time, this is the perfect *half day trip explore ubud culture amazing sunset tanah lot temple*.\n\nWe start in the afternoon, visiting key cultural sites around Ubud before making our way to the coast. As the afternoon cools, we arrive at the iconic sea temple of Tanah Lot. Watching the sun dip below the Indian Ocean with the temple silhouetted in the foreground is a breathtaking experience.\n\nThis *half day ubud tour* alternative ensures you get maximum value and unforgettable memories without committing to a full 10-hour day.`,
    highlights: ["Ubud Cultural Stops", "Tanah Lot Temple", "Sunset views"],
    included: ["Private transport", "English speaking driver", "Mineral water"],
    notIncluded: ["Entrance fees", "Dinner"],
    itinerary: [
      {
        id: "iti-hdu-1",
        time: "01:00 PM",
        title: "Hotel Pickup",
        description: "Start your half day adventure with a private pickup."
      },
      {
        id: "iti-hdu-2",
        time: "02:30 PM",
        title: "Ubud Surrounds",
        description: "Visit key cultural sites or temples around the Ubud area."
      },
      {
        id: "iti-hdu-3",
        time: "05:00 PM",
        title: "Tanah Lot Temple Sunset",
        description: "Arrive at Tanah Lot to secure the perfect spot for the iconic sunset over the ocean."
      }
    ],
    addons: [],
    faqs: [],
    reviews: []
  },
  {
    id: "bali-dirt-bike-adventure",
    title: "Bali Dirt Bike & Adventure Tour 2026",
    slug: "bali-dirt-bike-adventure",
    category: "adventure",
    area: "Tabanan / Kintamani",
    duration: "Half Day or Full Day",
    basePrice: 1200000,
    seoTitle: "Dirt Bike Tour Bali | Tabanan & Volcano",
    seoDescription:
      "Bali dirt bike tours — Tabanan forest/beach or Kintamani volcano. KLX to KTM tiers, full gear, lunch, hotel pickup. WhatsApp booking.",
    heroImage: {
      url: "https://images.unsplash.com/photo-1519444334051-a39396328670?auto=format&fit=crop&w=1200&q=80",
      alt: "Bali Dirt Bike Adventure",
    },
    gallery: [],
    shortDescription: "Experience the ultimate adrenaline rush with our dirt bike tours across Bali's forests, beaches, and volcanic terrains.",
    fullDescription: `**PAKET TOUR DIRT BIKE & ADVENTURE BALI 2026**\n\n_Base Kintamani, Bali_\n\nExplore Bali like never before with our premium Dirt Bike & Adventure tours. Whether you are a beginner looking for a scenic ride through the rice paddies and beaches of Tabanan, or an experienced rider seeking the ultimate adrenaline rush on the volcanic trails of Mount Batur, we have the perfect package for you.\n\n**A. PAKET DIRT BIKE TOUR**\n\n1. **TABANAN FOREST + BEACH TRAIL**\nLewat sawah, hutan, pantai pasir hitam & trail seru. (Half Day: 3-4 Jam / Full Day: 6-8 Jam)\n\n2. **KINTAMANI FOREST + VOLCANO TRAIL**\nKeliling Gunung Batur, lahar, hutan pinus & view Danau Batur. (Half Day: 3-4 Jam / Full Day: 6-8 Jam)\n\n3. **FULL DAY UBUD + VOLCANO RIDE**\nGabungan hutan Ubud + jalur vulkanik Kintamani.\n\n4. **SUNRISE RIDE GUNUNG BATUR**\nRide pagi buta liat sunrise di atas gunung.\n\n5. **SUNSET RIDE PANTAI**\nRide sore hari di pantai Tabanan.\n\n**B. PAKET KOMBO ADVENTURE**\n\nCombine your ride with other exciting Bali activities like White Water Rafting, ATV Rides, and River Tubing!\n\n**SUDAH TERMASUK SEMUA PAKET**\n- Guide Profesional & Berpengalaman\n- 1x Makan Siang + Air Mineral / Soft Drink\n- Helm, Sepatu, Jersey, Sarung Tangan, Pelindung Dada\n- Antar Jemput Hotel Area Bali Gratis\n- Asuransi & P3K\n- Foto & Video saat riding`,
    highlights: [
      "Ride through Tabanan forests and black sand beaches",
      "Explore the volcanic trails of Mount Batur",
      "Top-of-the-line dirt bikes (KLX, YZ, KTM)",
      "Professional guides and full riding gear included",
      "Free hotel pick-up and drop-off in Bali"
    ],
    included: [
      "Professional & Experienced Guide",
      "1x Lunch + Mineral Water / Soft Drink",
      "Helmet, Boots, Jersey, Gloves, Chest Protector",
      "Free Hotel Pick-up/Drop-off in Bali Area",
      "Insurance for ages 6–65 & First Aid Kit",
      "Photos & Videos during riding"
    ],
    notIncluded: ["Personal expenses", "Gratuities"],
    itinerary: [
      {
        id: "iti-db-1",
        time: "Morning",
        title: "Hotel Pickup & Gear Fitting",
        description: "Our driver will pick you up from your hotel and bring you to our base in Kintamani or Tabanan for gear fitting and safety briefing."
      },
      {
        id: "iti-db-2",
        time: "Mid-Morning",
        title: "Start Riding Adventure",
        description: "Hit the trails! Ride through forests, beaches, or volcanic terrain depending on your chosen package."
      },
      {
        id: "iti-db-3",
        time: "Lunch",
        title: "Lunch Break",
        description: "Enjoy a delicious lunch to refuel for the rest of the day."
      },
      {
        id: "iti-db-4",
        time: "Afternoon",
        title: "Continue Riding / Return",
        description: "Complete your ride and head back to base. Review your photos and videos before being dropped off at your hotel."
      }
    ],
    activityOptions: [
      { name: "23/24 KLX/CRF 150 4T - Half Day Tabanan", priceDiff: 0, description: "3-4 Jam" },
      { name: "23/24 KLX/CRF 150 4T - Full Day Tabanan", priceDiff: 500000, description: "6-8 Jam" },
      { name: "23/24 KLX/CRF 150 4T - Full Day Volcano", priceDiff: 800000, description: "6-8 Jam" },
      { name: "24/25 KLX 230R 4T - Half Day Tabanan", priceDiff: 800000, description: "3-4 Jam" },
      { name: "24/25 KLX 230R 4T - Full Day Tabanan", priceDiff: 1300000, description: "6-8 Jam" },
      { name: "24/25 KLX 230R 4T - Full Day Volcano", priceDiff: 1300000, description: "6-8 Jam" },
      { name: "24/25 KLX 250 - Full Day Volcano", priceDiff: 1300000, description: "6-8 Jam" },
      { name: "2024 YZ 250F 4T - Half Day Tabanan", priceDiff: 1550000, description: "3-4 Jam" },
      { name: "2024 YZ 250F 4T - Full Day Tabanan", priceDiff: 2300000, description: "6-8 Jam" },
      { name: "2024 YZ 250F 4T - Full Day Volcano", priceDiff: 2300000, description: "6-8 Jam" },
      { name: "23/24 KTM 250 2T - Half Day Tabanan", priceDiff: 1550000, description: "3-4 Jam" },
      { name: "23/24 KTM 250 2T - Full Day Tabanan", priceDiff: 2300000, description: "6-8 Jam" },
      { name: "23/24 KTM 250 2T - Full Day Volcano", priceDiff: 2300000, description: "6-8 Jam" },
      { name: "23/24 KTM 300 2T - Half Day Tabanan", priceDiff: 1550000, description: "3-4 Jam" },
      { name: "23/24 KTM 300 2T - Full Day Tabanan", priceDiff: 2300000, description: "6-8 Jam" },
      { name: "23/24 KTM 300 2T - Full Day Volcano", priceDiff: 2300000, description: "6-8 Jam" },
      { name: "23/24 KTM 250 4T - Half Day Tabanan", priceDiff: 1550000, description: "3-4 Jam" },
      { name: "23/24 KTM 250 4T - Full Day Tabanan", priceDiff: 2300000, description: "6-8 Jam" },
      { name: "23/24 KTM 250 4T - Full Day Volcano", priceDiff: 2300000, description: "6-8 Jam" },
      { name: "23/24 KTM 350 4T - Half Day Tabanan", priceDiff: 1550000, description: "3-4 Jam" },
      { name: "23/24 KTM 350 4T - Full Day Tabanan", priceDiff: 2300000, description: "6-8 Jam" },
      { name: "23/24 KTM 350 4T - Full Day Volcano", priceDiff: 2300000, description: "6-8 Jam" },
      { name: "2025 KTM 250 2T - Half Day Tabanan", priceDiff: 2050000, description: "3-4 Jam" },
      { name: "2025 KTM 250 2T - Full Day Tabanan", priceDiff: 2800000, description: "6-8 Jam" },
      { name: "2025 KTM 250 2T - Full Day Volcano", priceDiff: 2800000, description: "6-8 Jam" },
      { name: "2025 KTM 300 2T - Half Day Tabanan", priceDiff: 2050000, description: "3-4 Jam" },
      { name: "2025 KTM 300 2T - Full Day Tabanan", priceDiff: 2800000, description: "6-8 Jam" },
      { name: "2025 KTM 300 2T - Full Day Volcano", priceDiff: 2800000, description: "6-8 Jam" },
      { name: "2025 KTM 250 4T - Half Day Tabanan", priceDiff: 2050000, description: "3-4 Jam" },
      { name: "2025 KTM 250 4T - Full Day Tabanan", priceDiff: 2800000, description: "6-8 Jam" },
      { name: "2025 KTM 250 4T - Full Day Volcano", priceDiff: 2800000, description: "6-8 Jam" },
      { name: "2025 KTM 350 4T - Half Day Tabanan", priceDiff: 2050000, description: "3-4 Jam" },
      { name: "2025 KTM 350 4T - Full Day Tabanan", priceDiff: 2800000, description: "6-8 Jam" },
      { name: "2025 KTM 350 4T - Full Day Volcano", priceDiff: 2800000, description: "6-8 Jam" },
      { name: "2026 KTM 300 2T - Half Day Tabanan", priceDiff: 2550000, description: "3-4 Jam" },
      { name: "2026 KTM 300 2T - Full Day Tabanan", priceDiff: 3300000, description: "6-8 Jam" },
      { name: "2026 KTM 300 2T - Full Day Volcano", priceDiff: 3300000, description: "6-8 Jam" },
      { name: "2026 KTM 350 4T - Half Day Tabanan", priceDiff: 2550000, description: "3-4 Jam" },
      { name: "2026 KTM 350 4T - Full Day Tabanan", priceDiff: 3300000, description: "6-8 Jam" },
      { name: "2026 KTM 350 4T - Full Day Volcano", priceDiff: 3300000, description: "6-8 Jam" }
    ],
    addons: [
      { id: "combo-ultimate", name: "PACKAGE 1: THE ULTIMATE (with Infinity Pool)", price: 2200000, description: "White Water Rafting + Full Adventure ATV + Tlaga Singha Infinity Pool Ticket + Transport" },
      { id: "combo-ultimate-no-pool", name: "PACKAGE 1: THE ULTIMATE (without Pool)", price: 2000000, description: "White Water Rafting + Full Adventure ATV + Transport" },
      { id: "combo-atv-water", name: "PACKAGE 2: ATV + WATER FUN (with Infinity Pool)", price: 2000000, description: "ATV Ride + River Tubing + Tlaga Singha Infinity Pool Ticket + Transport" },
      { id: "combo-atv-water-no-pool", name: "PACKAGE 2: ATV + WATER FUN (without Pool)", price: 2000000, description: "ATV Ride + River Tubing + Transport" },
      { id: "combo-atv-rafting", name: "PACKAGE 3: ATV + RAFTING", price: 2000000, description: "ATV Ride + White Water Rafting + Transport" },
      { id: "combo-atv-tubing", name: "PACKAGE 4: ATV + TUBING", price: 2000000, description: "ATV Ride + River Tubing + Transport" }
    ],
    faqs: [
      {
        id: "faq-db-1",
        question: "How much is a dirt bike tour in Bali?",
        answer:
          "Packages start from IDR 1,200,000 for entry KLX/CRF half-day Tabanan trails. Full-day and larger bikes (KLX 230R, YZ, KTM) cost more — pick your bike tier and route (Tabanan forest/beach or Kintamani volcano) when you WhatsApp us.",
      },
      {
        id: "faq-db-2",
        question: "Is a dirt bike the same as an ATV / mud ATV?",
        answer:
          "No. Dirt bikes are 2-wheel enduro/motocross machines (clutch and balance required). ATVs / muddy sport ATVs are 4-wheel quads — more stable and beginner-friendly — booked on our Bali ATV Adventure page instead.",
      },
      {
        id: "faq-db-3",
        question: "Do I need experience or a license?",
        answer:
          "Riders must be 16+ with a valid driver’s license and prior manual-motorcycle experience. Absolute beginners who only ride automatic scooters should choose ATV instead, or ask about tandem/pillion options (passenger from age 12).",
      },
      {
        id: "faq-db-4",
        question: "What trails can I ride — Tabanan or volcano?",
        answer:
          "Main options: Tabanan forest + black-sand beach trails, Kintamani / Mount Batur forest + volcano trails, full-day Ubud + volcano, plus sunrise or sunset specialty rides. Tell us your skill level and we match the route.",
      },
      {
        id: "faq-db-5",
        question: "What bikes do you offer (KLX, CRF, KTM)?",
        answer:
          "Tiers from 23/24 KLX/CRF 150 up through KLX 230R/250 and YZ/KTM 250–350 (2T and 4T). Choose the bike when booking — price follows the model and half-day vs full-day.",
      },
      {
        id: "faq-db-6",
        question: "Is hotel pickup included?",
        answer:
          "Yes — hotel pickup and drop-off in the Bali area is included on dirt bike packages, along with guide, lunch, full protective gear, insurance (ages 6–65), and riding photos/video.",
      },
      {
        id: "faq-db-7",
        question: "Is there a minimum number of riders?",
        answer: "Yes — a minimum of 2 riders is required for the dirt bike tour.",
      },
      {
        id: "faq-db-8",
        question: "What should I wear?",
        answer:
          "Wear closed shoes and long pants. We provide helmet, boots, jersey, gloves, and chest protection. Bring a change of clothes — trails get muddy.",
      },
    ],
    reviews: []
  }
]

export function getTourBySlug(slug: string): Tour | undefined {
  return TOURS.find((tour) => tour.slug === slug)
}

export function getAllTourSlugs(): string[] {
  return TOURS.map((tour) => tour.slug)
}

export function getTourCategoryLabel(category: TourCategoryId): string {
  return TOUR_CATEGORY_LABELS[category]
}

export function getToursByCategory(category: TourCategoryId): Tour[] {
  return TOURS.filter((tour) => tour.category === category)
}

export function getTopPickTours(): Tour[] {
  return TOURS.filter((tour) => tour.isTopPick)
}

export function searchTours(query: string, limit = 8): Tour[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return TOURS.filter((tour) => {
    const haystack = [
      tour.title,
      tour.shortDescription,
      tour.area ?? "",
      TOUR_CATEGORY_LABELS[tour.category],
      ...tour.highlights,
    ]
      .join(" ")
      .toLowerCase()
    return haystack.includes(q)
  }).slice(0, limit)
}
