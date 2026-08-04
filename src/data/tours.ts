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
  getYourGuideUrl?: string
  youtubeVideoId?: string
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
    shortDescription: "Explore the real Bali away from the crowds through historic Pejeng district, morning markets, and expansive rice terraces.",
    fullDescription: `**Escape the Tourist Trail and Discover the Real Bali**

If you are looking for an authentic, off-the-beaten-path experience in Bali, our Pejeng Village & Terrace Cycling Tour is exactly what you need. While most tourists crowd into the center of Ubud, this dedicated cycling tour takes you away from the traffic and deep into the historic Pejeng district—an ancient kingdom that time forgot. 

This is not a high-intensity mountain biking excursion; it is a cultural immersion on two wheels. Designed for all fitness levels, our leisurely route spans approximately 15 kilometers mostly downhill and flat terrain. You will ride through local morning markets, ancient village pathways, and expansive, breathtaking rice terraces that stretch as far as the eye can see.

### The Journey Begins: The Pejeng Morning Market
Your day starts with a comfortable pickup from your Ubud hotel. We transport you a short distance to our starting base in Pejeng, where you will be fitted with a well-maintained mountain bike and a helmet. After a quick safety briefing from our professional, English-speaking local guide, the adventure begins.

Our first stop is a sensory explosion: the bustling traditional morning market of Pejeng. Here, you will step off your bike and walk through the vibrant stalls. Your guide will introduce you to exotic local fruits you may have never seen before (like snake fruit and mangosteen), pungent Balinese spices, and traditional snacks. This is where the locals shop, and you will get a genuine glimpse into the daily rhythm of Balinese life.

### Cruising Through Ancient History
Leaving the market behind, we cycle into the heart of the village. Pejeng is not just any village; it was once the epicenter of the mighty Pejeng Kingdom in the 13th century. As you cruise along the quiet, shaded neighborhood paths, you will pass ancient, moss-covered temples and traditional family compounds. We will make a brief stop at a local Balinese home, where your guide will explain the fascinating architecture and layout of a traditional family compound, including the family shrines and the communal living spaces.

### The Majestic Subak Rice Terraces
As we leave the village behind, the trail opens up to a landscape that defines Bali: stunning, endless rice paddies. But these aren't just beautiful fields; they are part of the ancient *Subak* irrigation system, recognized by UNESCO for its cultural significance. You will cycle right along the edges of the fields on narrow dirt paths. Your guide will explain how this cooperative water management system works, how the farmers coordinate their planting cycles, and why the small shrines you see in the fields are so vital to the harvest. 

### A Refreshing Finish
After a few hours of cycling, learning, and taking countless photographs, we conclude our journey in a shaded pavilion overlooking the fields. You will be greeted with a freshly opened, ice-cold young coconut to rehydrate and celebrate the completion of the ride. 

Whether you are a solo traveler, a couple, or a family with children, this cycling tour offers a safe, unforgettable way to connect with the soul of Bali. 
    
**Available Schedules:**
- **Morning Ride:** 8:30 AM – 12:30 PM (Highly recommended for the best market experience and cooler weather)
- **Afternoon Ride:** 1:30 PM – 5:30 PM (Perfect for those looking to catch the late afternoon golden hour light over the rice fields)`,
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
        answer: "The route is mostly flat with a few gentle inclines. It is entirely paved or hard-packed dirt, and spans about 15km. It is suitable for all fitness levels, including older adults and children.",
      },
      {
        id: "faq-pej-2",
        question: "Do you provide kids bikes?",
        answer: "Yes, we have a limited number of smaller bikes and baby seats available. Please request them during booking.",
      },
      {
        id: "faq-pej-3",
        question: "What should I wear?",
        answer: "We recommend comfortable, breathable clothing, closed-toe shoes (sneakers are fine), and sunglasses. Don't forget sunscreen!",
      },
      {
        id: "faq-pej-4",
        question: "Is hotel pickup included?",
        answer: "Yes, we provide complimentary air-conditioned transport from any hotel within the central Ubud area.",
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
  }
]
