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
    title: "Bali ATV Adventure & River Tubing",
    slug: "bali-atv-adventure",
    category: "Adventure",
    duration: "2–4 Hours",
    basePrice: 650000,
    childPrice: 550000,
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
      "Private Bali ATV tour & quad bike adventure through jungle trails — beginner friendly, all-inclusive with lunch, helmet, and insurance. Add Wos River tubing for the best ATV combo near Ubud.",
    fullDescription: `**Looking for New and Fresh Activities in Bali?**

If you want an adrenaline-packed day beyond the usual tourist trail, our Bali ATV Adventure delivers a complete quad bike experience through jungle paths, muddy tracks, and river crossings. Every ride is designed for sensation, excitement, and joy — whether you go solo or share a tandem ATV with a partner.

### Complete Bali Quad Bike (ATV) Trips
Hop on a powerful ATV and race scenic off-road trails with expert guides. Packages suit first-timers and thrill-seekers alike. After a safety briefing, you are fitted with boot shoes and a helmet, then you hit the track for an unforgettable ride through Bali's green countryside.

### Combine with River Tubing on the Wos River
Want even more adventure? Pair your ATV ride with river tubing on the Wos River. After racing the ATV track, cool down as you float and explore the river on a tube — a favourite combo for guests who want a full day of thrills on land and water.

Message us on WhatsApp to book Single ATV, Tandem ATV, or an ATV + River Tubing combo for your preferred date.`,
    highlights: [
      "Complete Bali quad bike (ATV) adventure",
      "Optional river tubing on the Wos River",
      "Boot shoes, helmet, lunch & insurance included",
      "Suitable for beginners with full safety briefing",
    ],
    included: [
      "ATV ride (single or tandem)",
      "Boot shoes & helmet",
      "Simple menu lunch",
      "Insurance",
      "Safety briefing and trail guide",
    ],
    notIncluded: [
      "Hotel pickup & drop-off (IDR 120,000 surcharge — optional)",
      "River tubing combo (optional — ask when booking)",
      "Personal expenses",
      "Gratuities",
    ],
    itinerary: [
      {
        id: "iti-atv-1",
        time: "Start",
        title: "Pickup & Safety Briefing",
        description:
          "Meet your guide, get fitted with boot shoes and helmet, and receive a clear safety briefing before the ride.",
      },
      {
        id: "iti-atv-2",
        time: "Midway",
        title: "ATV Jungle Trail",
        description:
          "Race the ATV track through jungle paths, muddy stretches, and scenic river crossings packed with sensation and excitement.",
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
        priceDiff: 209000,
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
        question: "What should I bring?",
        answer:
          "Bring changing clothes or a dry cloth, sunscreen (recommended), and some cash for extras. A waterproof phone case is optional but handy for trail photos. Towels and changing facilities are available at our base.",
      },
      {
        id: "faq-atv-2",
        question: "Can I combine ATV with river tubing?",
        answer:
          "Yes! After racing the ATV track you can explore the Wos River on a tube. Ask us for ATV + River Tubing combo availability when you book.",
      },
      {
        id: "faq-atv-3",
        question: "Do I need riding experience?",
        answer:
          "No. Guides give a full safety briefing and ATVs are easy to operate for beginners. Tandem options are great if you prefer to ride with a partner.",
      },
      {
        id: "faq-atv-4",
        question: "What is included in the price?",
        answer:
          "Your guided ATV ride, boot shoes and helmet, a simple menu lunch, insurance, and a full safety briefing with an English-speaking guide. Hotel pickup is available for an additional IDR 120,000. River tubing on the Wos River is an optional combo — ask when you book.",
      },
    ],
    reviews: [],
  },
  {
    id: "ubud-ricefield-cycling-tour",
    title: "Ubud Ricefield Cycling Tour",
    slug: "ubud-ricefield-cycling-tour",
    category: "Activity",
    duration: "Full Day",
    basePrice: 450000,
    heroImage: {
      url: "/images/cycling/rice-field-bikes.jpg",
      alt: "Cycling in Bali rice terraces",
    },
    gallery: [
      {
        url: "/images/cycling/rice-field-bikes.jpg",
        alt: "Cycling in Bali rice terraces",
      },
      {
        url: "/images/cycling/rider.jpg",
        alt: "Balinese village cycling",
      },
      {
        url: "/images/cycling/temple-gate.jpg",
        alt: "Group standing before ancient temple gates",
      },
      {
        url: "/images/cycling/trail-group.jpg",
        alt: "Group cycling along village trail",
      },
      {
        url: "/images/cycling/jungle-path.jpg",
        alt: "Riding through green lush pathways",
      },
      {
        url: "/images/cycling/rice-field-walk.jpg",
        alt: "Standing in golden rice fields",
      },
      {
        url: "/images/cycling/lunch-stop.jpg",
        alt: "Group enjoying a traditional meal together",
      },
    ],
    youtubeVideoId: "dQw4w9WgXcQ", // Placeholder, replace with actual ID
    shortDescription: "Relaxing Ubud ricefield cycling tour through green paddies and quiet village paths — with rice harvesting, a Balinese home visit, wood carving studio, and free breakfast, lunch & dinner included.",
    fullDescription: `**Ubud Ricefield Cycling Tour**

Discover the real Bali on two wheels with our Ubud Ricefield Cycling Tour. This is a relaxing bike ride through beautiful green ricefields and quiet village paths — a cultural immersion designed for all fitness levels.

We pick you up from your hotel in the Ubud area and transport you to the starting point, where you are fitted with a bicycle, helmet, and briefed by your English-speaking guide before setting off into the countryside.

### Ricefield Cycling & Harvesting
Cycle through stunning green rice paddies and village trails. Stop to see local farmers at work and try harvesting rice with them. Your guide explains traditional Balinese farming methods and the daily rhythm of rural life.

### Village Culture & Local Life
Enter a real Balinese family house and see daily local life up close. Visit a local wood carving studio and watch artists at work. Continue cycling through the village past temples, schools, and everyday community activities.

### Meals Included
Enjoy free breakfast, lunch, and dinner at a chill local village restaurant serving authentic Balinese food — all included in your package.

After the tour we drop you back at your Ubud hotel.

**Available Schedule:**
- **Afternoon departure** — ideal for travelers who prefer a later start

**Important Note:**
The itinerary may sometimes change due to field conditions, weather, or village activities. We will always adjust to make sure you still have the best and safest experience.`,
    highlights: [
      "Relaxing ride through Ubud ricefields and village paths",
      "Rice harvesting activity with local farmers",
      "Visit a Balinese family house and wood carving studio",
      "Free breakfast, lunch & dinner included",
    ],
    included: [
      "Hotel pickup & drop-off (Ubud area — free)",
      "Bicycle, helmet & guide",
      "Free breakfast, lunch & dinner",
      "Bottled water",
      "Insurance",
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
        time: "Throughout",
        title: "Free Breakfast, Lunch & Dinner",
        description: "Enjoy free breakfast, lunch, and dinner at a chill local village restaurant with authentic Balinese food.",
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
        question: "Is the route difficult?",
        answer: "The route is mostly flat with gentle terrain through ricefields and village paths. It is suitable for all fitness levels, including older adults and families.",
      },
      {
        id: "faq-ubud-cyc-2",
        question: "Are meals really included?",
        answer: "Yes — breakfast, lunch, and dinner at a local village restaurant are all included in the tour price.",
      },
      {
        id: "faq-ubud-cyc-3",
        question: "What should I wear?",
        answer: "We recommend comfortable, breathable clothing, closed-toe shoes (sneakers are fine), and sunglasses. Don't forget sunscreen!",
      },
      {
        id: "faq-ubud-cyc-4",
        question: "Is hotel pickup included?",
        answer: "Yes, we provide complimentary pickup and drop-off at your hotel in the Ubud area on the cycling tour. Pickups outside Ubud incur an IDR 120,000 surcharge.",
      },
      {
        id: "faq-ubud-cyc-5",
        question: "Can the itinerary change?",
        answer: "The itinerary may sometimes change due to field conditions, weather, or village activities. We always adjust to ensure you have the best and safest experience.",
      },
    ],
    reviews: [],
    getYourGuideUrl: "https://gyg.me/2pBDrw5s",
  },
  {
    id: "luwak-coffee-plantation",
    title: "Luwak Coffee Plantation Experience (Umah Kuno)",
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
        url: "/images/cooking/crepe-flip-fun.jpg",
        alt: "Guests flipping Dadar Gulung pandan crepes in the pan",
      },
      {
        url: "/images/cooking/buffet-spread.jpg",
        alt: "Traditional Balinese buffet feast prepared by hosts and guests",
      },
      {
        url: "/images/cooking/market-guide.jpg",
        alt: "Local guide explaining fresh market ingredients in Pejeng",
      },
      {
        url: "/images/cooking/stovetop-class.jpg",
        alt: "Guests cooking at individual traditional stovetops",
      },
      {
        url: "/images/cooking/sate-lilit-prep.jpg",
        alt: "Shaping traditional Balinese Sate Lilit skewers",
      },
      {
        url: "/images/cooking/pancake-toss.jpg",
        alt: "Fun pancake tossing moment during cooking class",
      },
      {
        url: "/images/cooking/dish.jpg",
        alt: "Freshly prepared Dadar Gulung dessert",
      },
      {
        url: "/images/cooking/group-plate.jpg",
        alt: "Happy guests presenting their homemade dishes",
      },
    ],
    youtubeVideoId: "dQw4w9WgXcQ", // Placeholder
    shortDescription: "Immerse yourself in the flavors of Indonesia with a hands-on cooking class in a beautiful traditional kitchen.",
    fullDescription: `**Master the Art of Balinese Cuisine in a Traditional Setting**

Balinese food is famous for its explosive flavors, aromatic spices, and vibrant colors. But eating it in a restaurant is only half the experience. To truly understand the culture, you have to learn how to cook it. Our Traditional Balinese Dinner Cooking Class offers you an immersive, hands-on culinary journey that you will remember long after you return home.

Set in a beautiful, open-air traditional Balinese kitchen surrounded by lush tropical gardens, this 3-hour evening class is the perfect blend of education, culture, and gastronomy. It is ideal for couples, groups of friends, and families who want to bond over a shared culinary adventure.

### The Foundation: Understanding Balinese Spices
Your evening begins with a warm welcome and a refreshing herbal drink. Your English-speaking culinary instructor will then introduce you to the core ingredients of Balinese cuisine. You will learn about the essential roots, herbs, and spices that make up the foundational spice paste known as *Base Genep*. 

You will handle fresh galangal, turmeric, lemongrass, candlenut, and lesser galangal (*kencur*). Your instructor will explain not only how these ingredients are used in cooking, but also their significance in traditional Balinese medicine and culture.

### Hands-On Cooking
Once you understand the ingredients, it is time to roll up your sleeves and get cooking! Unlike other classes where you just watch a demonstration, this is a fully hands-on experience. You will work at your own dedicated cooking station, equipped with a traditional stone mortar and pestle (*ulekan*), a cutting board, and a wok.

Under the patient guidance of our expert chefs, you will learn the traditional techniques of chopping, pounding, and blending the spices to create a fragrant paste. Over the course of the evening, you will prepare 5 authentic dishes from scratch. 

The menu typically includes:
1. **Sate Lilit Ayam:** Minced chicken satay blended with grated coconut and spices, wrapped around bamboo sticks and grilled.
2. **Ayam Betutu:** The iconic Balinese spiced chicken, slow-cooked in rich coconut milk.
3. **Lawar:** A vibrant, traditional salad made of finely chopped long beans, grated coconut, and spices.
4. **Sambal Matah:** Bali's famous raw shallot, lemongrass, and chili relish that pairs perfectly with everything.
5. **Dadar Gulung:** For dessert, you will make these delightful green pandan crepes stuffed with sweet palm sugar and grated coconut.

*(Vegetarian, vegan, and allergy-friendly menus are easily accommodated upon request!)*

### The Grand Feast
After the hard work is done, you will transition to our beautifully lit, open-air dining pavilion. Here, you will sit down with your fellow chefs to enjoy the incredible feast you have just prepared, served family-style with steaming hot white rice. 

Before you leave, you will be provided with a comprehensive digital recipe book. This ensures you can easily recreate these authentic Balinese flavors in your own kitchen back home, bringing a taste of your holiday to your everyday life.

### Recommended Culinary Guides & External Resources:
- [Authentic Balinese Cooking Class Guide](https://tumangbaliclass.com/authentic-balinese-cooking-class)
- [Best Bali Cooking Class Experiences](https://tumangbaliclass.com/best-bali-cooking-class)
- [Bali Cooking Class for Beginners](https://tumangbaliclass.com/bali-cooking-class-for-beginners)
- [Vegetarian Cooking Class in Ubud](https://tumangbaliclass.com/vegetarian-cooking-class-ubud)
- [Private Cooking Class Experience Ubud](https://tumangbaliclass.com/private-cooking-class-ubud)
- [Cooking Class with Market Tour in Ubud](https://tumangbaliclass.com/cooking-class-with-market-tour-ubud)
- [Half Day Cooking Class in Bali](https://tumangbaliclass.com/half-day-cooking-class-bali)
- [Where to Stay for your Bali Cooking Class](https://tumangbaliclass.com/where-to-stay-bali-cooking-class)
- [What to Wear for a Bali Cooking Class](https://tumangbaliclass.com/what-to-wear-bali-cooking-class)
- [Balinese Cooking Class Ubud Guide](https://tumangbaliclass.com/balinese-cooking-class-ubud)
- [Top Ranked Best Cooking Classes in Bali](https://tumangbaliclass.com/best-cooking-classes-bali)

**Available Schedule:**
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
        answer: "Yes! We can adjust the recipes for vegetarians, vegans, and most allergies (including gluten and peanuts). Please let us know when booking.",
      },
      {
        id: "faq-cook-2",
        question: "Do we get to eat what we cook?",
        answer: "Yes! The class culminates in a grand feast where you sit down to enjoy the 5 dishes you just prepared.",
      },
      {
        id: "faq-cook-3",
        question: "Is the class hands-on or just a demonstration?",
        answer: "This is a 100% hands-on experience. You will have your own cooking station, mortar, and wok.",
      },
    ],
    reviews: [],
    getYourGuideUrl: "https://gyg.me/rqpV6ZI5",
  },
  {
    id: "full-day-ubud-tour",
    title: "Full Day Ubud Tour: Royal Palace, Art Market & Rice Terraces",
    slug: "full-day-ubud-tour",
    category: "Culture",
    duration: "10 Hours",
    basePrice: 650000,
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
    category: "Adventure",
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
    category: "Activity",
    duration: "Half Day or Full Day",
    basePrice: 1200000,
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
      "Insurance & First Aid Kit",
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
        question: "Is there a minimum number of riders?",
        answer: "Yes, a minimum of 2 riders is required for the Dirt Bike Tour."
      },
      {
        id: "faq-db-2",
        question: "What do I need to wear?",
        answer: "You are required to wear shoes and long pants. We will provide all other protective riding gear."
      },
      {
        id: "faq-db-3",
        question: "Is there an age limit?",
        answer: "Minimum age is 12 years old for pillion (passenger), and 16+ years old for riding (must bring a driver's license)."
      }
    ],
    reviews: []
  }
]
