import type { Tour, TourCategoryId } from "@/data/tours"

/** Markup applied to each imported park / workshop ticket vs the public source from-price. */
export const IMPORTED_TICKET_MARKUP_IDR = 200_000

function money(sourceFromIdr: number) {
  return sourceFromIdr + IMPORTED_TICKET_MARKUP_IDR
}

function hero(slug: string, alt: string) {
  return {
    url: `/images/adventures/${slug}.jpg`,
    alt,
    width: 1600,
    height: 1000,
  }
}

function ticketFaqs(
  id: string,
  questionName: string,
  priceIdr: number,
  extra?: { question: string; answer: string },
) {
  const faqs = [
    {
      id: `faq-${id}-1`,
      question: `How much is ${questionName}?`,
      answer: `From IDR ${priceIdr.toLocaleString("id-ID")} per person with Sekar Bali Activity. WhatsApp guest count and date — no payment to inquire.`,
    },
    {
      id: `faq-${id}-2`,
      question: "Is hotel pickup included?",
      answer:
        "Usually not in the ticket from-price. We can add a private driver or use a park shuttle where the venue runs one. Say your hotel area on WhatsApp.",
    },
    {
      id: `faq-${id}-3`,
      question: "Do you operate this park yourselves?",
      answer:
        "No. We book the published park or workshop ticket and confirm it on WhatsApp — the same desk as Swing Heaven, cooking, and the Batur jeep. We do not sell visa extensions, Nusa Penida boats, or island fastboats.",
    },
  ]
  if (extra) faqs.push({ id: `faq-${id}-4`, ...extra })
  return faqs
}

function ticketTour(opts: {
  slug: string
  title: string
  seoTitle: string
  seoDescription: string
  category: TourCategoryId
  area: string
  venue: string
  pickup?: string
  duration: string
  sourcePrice: number
  shortDescription: string
  fullDescription: string
  highlights: string[]
  included: string[]
  notIncluded: string[]
  itinerary: { time: string; title: string; description: string }[]
  extraFaq?: { question: string; answer: string }
}): Tour {
  const basePrice = money(opts.sourcePrice)
  return {
    id: opts.slug,
    title: opts.title,
    slug: opts.slug,
    category: opts.category,
    area: opts.area,
    venue: opts.venue,
    pickup: opts.pickup ?? "Quoted on WhatsApp or self-meet",
    duration: opts.duration,
    basePrice,
    seoTitle: opts.seoTitle,
    seoDescription: opts.seoDescription,
    heroImage: hero(opts.slug, opts.title),
    gallery: [hero(opts.slug, opts.title)],
    shortDescription: opts.shortDescription,
    fullDescription: opts.fullDescription,
    highlights: opts.highlights,
    included: opts.included,
    notIncluded: opts.notIncluded,
    itinerary: opts.itinerary.map((item, i) => ({
      id: `iti-${opts.slug}-${i + 1}`,
      ...item,
    })),
    addons: [],
    faqs: ticketFaqs(opts.slug, opts.title, basePrice, opts.extraFaq),
    reviews: [],
  }
}

export const PARK_WORKSHOP_TOURS: Tour[] = [
  ticketTour({
    slug: "bali-bird-park",
    title: "Bali Bird Park",
    seoTitle: "Bali Bird Park Ticket | From IDR 585K",
    seoDescription:
      "Bali Bird Park day ticket from IDR 585,000. Feeding sessions, free-flight shows, Komodo keeper talk. WhatsApp booking — pickup quoted.",
    category: "village",
    area: "Batubulan · Gianyar",
    venue: "Bali Bird Park, Batubulan",
    duration: "1 day (park hours)",
    sourcePrice: 385_000,
    shortDescription:
      "A full bird-park day in Batubulan: macaw photos, lory feeding, free-flight and bird-of-prey shows. From IDR 585,000. Pickup quoted on WhatsApp.",
    fullDescription: `**Want a family day that is not ATV or a temple circuit?** We book **Bali Bird Park** in Batubulan — keepers run macaw photos, Papua rainforest feeding, lory feeding, a Bali rainforest free-flight show, pelican feeding, and a bird-of-prey show. A Komodo keeper talk runs on listed weekdays.

This is a **park ticket we book**, not our own arena. Hotel pickup is quoted separately. We do not sell Nusa Penida boats or visa runs.

### How to book
WhatsApp the date and guest count. No payment to inquire.`,
    highlights: [
      "Bird-park admission in Batubulan",
      "Keeper feeding sessions and free-flight shows",
      "Family-friendly full-day pace",
      "Pickup quoted — or self-meet at the gate",
    ],
    included: ["Bali Bird Park admission (our ticket)"],
    notIncluded: ["Hotel pickup", "Meals unless you add them", "Photos sold at the park"],
    itinerary: [
      { time: "Park open", title: "Arrive Batubulan", description: "Self-meet or driver drop. Confirm opening hours on WhatsApp for your date." },
      { time: "Morning–afternoon", title: "Shows and feeding", description: "Macaw photos, lory / pelican feeding, free-flight and bird-of-prey shows on the park timetable." },
      { time: "Close", title: "Exit", description: "Driver return if you booked pickup." },
    ],
  }),
  ticketTour({
    slug: "elephant-mud-fun-at-bali-zoo-park",
    title: "Elephant Mud Fun at Bali Zoo Park",
    seoTitle: "Bali Zoo Elephant Mud Fun | From IDR 1.85M",
    seoDescription:
      "Bali Zoo elephant mud-fun session from IDR 1,850,000. Welcome drink, lunch, towel, zoo admission. Morning or afternoon. WhatsApp quote.",
    category: "village",
    area: "Singapadu · Gianyar",
    venue: "Bali Zoo Park",
    duration: "Half day (morning or afternoon)",
    sourcePrice: 1_650_000,
    shortDescription:
      "Morning or afternoon elephant mud-fun at Bali Zoo: welcome drink, lunch, towel, zoo admission. From IDR 1,850,000. Pickup quoted.",
    fullDescription: `**Elephant mud-fun at Bali Zoo** is a booked park session (morning or afternoon). The ticket we quote covers the mud activity, welcome drink and snack, lunch, feeding, towel, zoo admission, and park insurance.

Hotel return transfer is **not assumed** in the from-price — add it on WhatsApp. Child rates follow the zoo’s height rule (under 120 cm). We book the ticket; we do not run the zoo.

WhatsApp date, session (AM/PM), and hotel area.`,
    highlights: [
      "Morning or afternoon session",
      "Mud fun + zoo admission",
      "Lunch, towel, welcome drink",
      "Pickup extra unless you add a driver",
    ],
    included: [
      "Mud-fun session",
      "Welcome drink and snack",
      "Lunch",
      "Towel",
      "Zoo admission",
      "Park insurance",
    ],
    notIncluded: ["Hotel pickup (quoted)", "Personal photos sold at the park"],
    itinerary: [
      { time: "AM or PM", title: "Hotel or gate", description: "South-Bali pickups are earlier than Ubud. Confirm the window on WhatsApp." },
      { time: "Session", title: "Mud fun + lunch", description: "Park briefing, mud activity, lunch, zoo time." },
    ],
    extraFaq: {
      question: "Is there a child price?",
      answer:
        "The zoo prices children by height (under 120 cm). Send ages and heights on WhatsApp and we quote the ticket we can actually book.",
    },
  }),
  ticketTour({
    slug: "night-safari-package-bali-safari-and-marine-park",
    title: "Night Safari — Bali Safari and Marine Park",
    seoTitle: "Bali Safari Night Safari | From IDR 1.3M",
    seoDescription:
      "Bali Safari night package from IDR 1,300,000: walking safari, night journey, BBQ dinner, Afrika show. After 6 PM. WhatsApp booking.",
    category: "village",
    area: "Gianyar",
    venue: "Bali Safari and Marine Park",
    duration: "Evening (after 6 PM)",
    sourcePrice: 1_100_000,
    shortDescription:
      "After-dark Bali Safari: walking safari, one night-safari journey, BBQ dinner, Afrika show. From IDR 1,300,000. Shuttle or driver quoted.",
    fullDescription: `**Night Safari at Bali Safari and Marine Park** is an evening ticket: welcome drink, walking safari, one night-safari journey, BBQ dinner at Nkuchiro, the Afrika Rhythm of Fire show, and a wildlife encounter. Valid after 6 PM.

We book the park package. A venue shuttle runs from published south-Bali / Ubud points on some dates — or we quote a private driver. Confirm pickup on WhatsApp.`,
    highlights: [
      "Night safari journey after 6 PM",
      "BBQ dinner included",
      "Walking safari + fire show",
      "Shuttle or private driver quoted",
    ],
    included: [
      "Welcome drink",
      "Walking safari",
      "Night safari journey (1×)",
      "BBQ dinner",
      "Afrika Rhythm of Fire show",
      "Tax as charged by the park",
    ],
    notIncluded: ["Private hotel pickup unless quoted", "Drinks beyond the welcome drink"],
    itinerary: [
      { time: "Afternoon / dusk", title: "Transfer", description: "Park shuttle window or private driver — confirm the day before." },
      { time: "After 18:00", title: "Night safari + dinner", description: "Walking trail, night journey, BBQ, show." },
    ],
  }),
  ticketTour({
    slug: "rhino-package-bali-safari-and-marine-park",
    title: "Rhino Package — Bali Safari and Marine Park",
    seoTitle: "Bali Safari Rhino Package | From IDR 2.3M",
    seoDescription:
      "Bali Safari Rhino package from IDR 2,300,000: unlimited safari, shows, 30-min elephant ride, Agung platinum seat, lunch, waterpark.",
    category: "village",
    area: "Gianyar",
    venue: "Bali Safari and Marine Park",
    duration: "1 day",
    sourcePrice: 2_100_000,
    shortDescription:
      "Top-tier Bali Safari day: unlimited safari line, shows, 30-minute elephant ride, Agung platinum seat, Tsavo lunch, waterpark. From IDR 2,300,000.",
    fullDescription: `The **Rhino package** is the fullest Bali Safari day we book: welcome drink, unlimited + express safari journey, aquarium, animal / harimau / elephant shows, a **30-minute elephant ride**, Bali Agung **platinum** seat, lunch at Tsavo Lion, waterpark, one park photo, souvenir.

We book the ticket. Pickup is shuttle or a quoted driver — not assumed in the from-price.`,
    highlights: [
      "Unlimited safari journey",
      "30-minute elephant ride",
      "Agung show platinum seat",
      "Lunch + waterpark",
    ],
    included: [
      "Welcome drink",
      "Unlimited safari journey (express line)",
      "Aquarium and listed shows",
      "Elephant ride 30 minutes",
      "Bali Agung platinum seat",
      "Lunch at Tsavo Lion",
      "Waterpark, 1 park photo, souvenir",
    ],
    notIncluded: ["Private hotel pickup unless quoted"],
    itinerary: [
      { time: "Morning", title: "Enter the park", description: "Safari line first while it is cooler." },
      { time: "Midday", title: "Shows + lunch", description: "Agung platinum seating and Tsavo lunch on the park clock." },
      { time: "Afternoon", title: "Waterpark / ride", description: "30-minute elephant ride slot as assigned." },
    ],
  }),
  ticketTour({
    slug: "leopard-package-bali-safari-and-marine-park",
    title: "Leopard Package — Bali Safari and Marine Park",
    seoTitle: "Bali Safari Leopard Package | From IDR 1.8M",
    seoDescription:
      "Bali Safari Leopard package from IDR 1,800,000: unlimited safari, 10-min elephant ride, Agung gold seat, Uma lunch, waterpark.",
    category: "village",
    area: "Gianyar",
    venue: "Bali Safari and Marine Park",
    duration: "1 day",
    sourcePrice: 1_600_000,
    shortDescription:
      "Bali Safari Leopard day: unlimited safari, 10-minute elephant ride, Agung gold seat, Uma lunch, waterpark. From IDR 1,800,000.",
    fullDescription: `The **Leopard package** sits under Rhino: unlimited safari, aquarium, shows, a **10-minute elephant ride**, Bali Agung **gold** seat, lunch at Uma, waterpark, one photo, souvenir.

WhatsApp date and guest count. Pickup quoted.`,
    highlights: [
      "Unlimited safari journey",
      "10-minute elephant ride",
      "Agung gold seat + Uma lunch",
      "Waterpark included",
    ],
    included: [
      "Welcome drink",
      "Unlimited safari journey",
      "Shows + aquarium",
      "Elephant ride 10 minutes",
      "Bali Agung gold seat",
      "Lunch at Uma",
      "Waterpark, 1 park photo, souvenir",
    ],
    notIncluded: ["Private hotel pickup unless quoted"],
    itinerary: [
      { time: "Morning", title: "Safari line", description: "Unlimited / express safari while it is cooler." },
      { time: "Midday", title: "Shows + Uma lunch", description: "Gold seating at Bali Agung." },
      { time: "Afternoon", title: "Waterpark", description: "10-minute elephant ride on the park slot." },
    ],
  }),
  ticketTour({
    slug: "elephant-back-safari-package-bali-safari-and-marine-park",
    title: "Elephant Back Safari — Bali Safari and Marine Park",
    seoTitle: "Bali Safari Elephant Ride | From IDR 1.45M",
    seoDescription:
      "Bali Safari elephant-back package from IDR 1,450,000: safari journey, shows, 30-minute elephant ride. Pickup quoted on WhatsApp.",
    category: "village",
    area: "Gianyar",
    venue: "Bali Safari and Marine Park",
    duration: "1 day",
    sourcePrice: 1_250_000,
    shortDescription:
      "Safari journey plus a 30-minute elephant ride and the listed shows. From IDR 1,450,000. No Agung lunch in this ticket.",
    fullDescription: `The **elephant-back safari** ticket is the ride-focused day: welcome drink, unlimited safari, aquarium, animal / harimau / elephant shows, **30-minute elephant ride**, souvenir.

Lunch, Agung show seats, and waterpark are **not** in this package — use Leopard or Rhino if you want those. Pickup quoted.`,
    highlights: [
      "30-minute elephant ride",
      "Unlimited safari journey",
      "Listed animal shows",
      "No lunch assumed",
    ],
    included: [
      "Welcome drink",
      "Unlimited safari journey",
      "Aquarium and listed shows",
      "Elephant ride 30 minutes",
      "Souvenir",
    ],
    notIncluded: ["Lunch", "Bali Agung show seat", "Waterpark", "Private pickup unless quoted"],
    itinerary: [
      { time: "Morning", title: "Safari", description: "Journey first." },
      { time: "Assigned slot", title: "Elephant ride", description: "30 minutes as the park schedules it." },
    ],
  }),
  ticketTour({
    slug: "dragon-package-bali-safari-and-marine-park",
    title: "Dragon Package — Bali Safari and Marine Park",
    seoTitle: "Bali Safari Dragon Package | From IDR 1.3M",
    seoDescription:
      "Bali Safari Dragon package from IDR 1,300,000: one safari journey, shows, Agung silver seat, Uma lunch, waterpark.",
    category: "village",
    area: "Gianyar",
    venue: "Bali Safari and Marine Park",
    duration: "1 day",
    sourcePrice: 1_100_000,
    shortDescription:
      "Value Bali Safari day: one safari journey, shows, Agung silver seat, Uma lunch, waterpark. From IDR 1,300,000. No elephant ride.",
    fullDescription: `The **Dragon package** is the lunch-and-show day **without** an elephant ride: one safari journey, aquarium, shows, Bali Agung **silver** seat, Uma lunch, waterpark.

Upgrade to Leopard or Rhino if you want the ride. Pickup quoted.`,
    highlights: [
      "One safari journey",
      "Agung silver seat",
      "Uma lunch + waterpark",
      "No elephant ride in this ticket",
    ],
    included: [
      "Safari journey (1×)",
      "Aquarium and listed shows",
      "Bali Agung silver seat",
      "Lunch at Uma",
      "Waterpark",
    ],
    notIncluded: ["Elephant ride", "Private pickup unless quoted"],
    itinerary: [
      { time: "Morning", title: "Safari 1×", description: "Single journey — not the unlimited line." },
      { time: "Midday", title: "Show + lunch", description: "Silver Agung seat and Uma." },
    ],
  }),
  ticketTour({
    slug: "jungle-hopper-bali-safari-and-marine-park",
    title: "Jungle Hopper — Bali Safari and Marine Park",
    seoTitle: "Bali Safari Jungle Hopper | From IDR 1M",
    seoDescription:
      "Bali Safari Jungle Hopper from IDR 1,000,000: one safari journey, shows, Agung silver seat, waterpark, afternoon tea. WhatsApp.",
    category: "village",
    area: "Gianyar",
    venue: "Bali Safari and Marine Park",
    duration: "1 day",
    sourcePrice: 800_000,
    shortDescription:
      "Entry-level Bali Safari day: one safari journey, shows, Agung silver seat, waterpark, Uma afternoon tea. From IDR 1,000,000.",
    fullDescription: `**Jungle Hopper** is the lightest full-park day we book: one safari journey, aquarium, shows, Bali Agung silver seat, waterpark, afternoon tea at Uma. No lunch platter and no elephant ride.

Good for a shorter clock. Pickup quoted.`,
    highlights: [
      "From IDR 1,000,000",
      "One safari journey + shows",
      "Waterpark + afternoon tea",
      "No elephant ride",
    ],
    included: [
      "Safari journey (1×)",
      "Aquarium and listed shows",
      "Bali Agung silver seat",
      "Waterpark",
      "Afternoon tea at Uma",
    ],
    notIncluded: ["Sit-down lunch", "Elephant ride", "Private pickup unless quoted"],
    itinerary: [
      { time: "Morning", title: "Safari 1×", description: "Single journey." },
      { time: "Afternoon", title: "Shows + tea", description: "Waterpark and Uma tea." },
    ],
  }),
  ticketTour({
    slug: "canyoning",
    title: "Bali Canyoning",
    seoTitle: "Bali Canyoning | From IDR 1.85M",
    seoDescription:
      "Guided Bali canyoning from IDR 1,850,000. Rappels, jumps, slides. Age 8+. Send age, height, weight, shoe size on WhatsApp.",
    category: "adventure",
    area: "North Bali gorges",
    venue: "Assigned canyon (Kalimudah / Kali Kecil / Kerenkali)",
    duration: "Half day or 1 day",
    sourcePrice: 1_650_000,
    shortDescription:
      "Guided canyon descent: rappel, jump, slide, swim. From IDR 1,850,000. Not a boat trip. Age, height, weight, and shoe size required.",
    fullDescription: `**Canyoning** is a gorge descent — rappel, jump, natural slides, swim — **not** a Nusa Penida boat and **not** our Wos River tubing.

The from-price is the common full-day canyon we book (Kalimudah-style). Shorter family canyons (Kali Kecil) and longer sporty lines (Kerenkali) are quoted on WhatsApp. Minimum age is typically **8**. Each guest must send **age, height, weight, and shoe size**.

Bring a memory card or USB if the operator includes photos. We book the seat; English-speaking canyon guides run the day.`,
    highlights: [
      "Guided rappel / jump / slide canyon",
      "From IDR 1,850,000",
      "Family and sporty lines quoted",
      "Age 8+ · body measurements required",
    ],
    included: [
      "Guided canyon descent",
      "Technical gear from the operator",
      "Instructor team on the booked line",
    ],
    notIncluded: [
      "Hotel pickup unless quoted",
      "Personal USB / extra photo copy",
      "Boat or Nusa Penida tickets",
    ],
    itinerary: [
      { time: "Morning", title: "Meet + briefing", description: "ICOpro-style safety brief. Confirm pickup vs self-meet." },
      { time: "Descent", title: "Canyon", description: "2–3 hours on Kalimudah-style lines; shorter on Kali Kecil." },
      { time: "After", title: "Picnic / return", description: "Many full-day lines include a local picnic at the last waterfall." },
    ],
    extraFaq: {
      question: "Is this scuba or a Penida boat?",
      answer:
        "No. Canyoning is a land gorge with ropes and water. We do not sell scuba, snorkeling boats, or Nusa Penida fastboats.",
    },
  }),
  ticketTour({
    slug: "night-safari-dinner-under-the-stars-elephant-safari-park-lodge",
    title: "Night Safari & Dinner — Elephant Safari Park Lodge",
    seoTitle: "Taro Night Safari Dinner | From IDR 1.66M",
    seoDescription:
      "Taro twilight park evening and dinner under the stars from IDR 1,660,000. Elephant ride is extra. WhatsApp family quote.",
    category: "village",
    area: "Taro · Ubud",
    venue: "Elephant Safari Park Lodge, Taro",
    duration: "Evening",
    sourcePrice: 1_460_000,
    shortDescription:
      "Twilight Taro park evening plus outdoor dinner by the lake. From IDR 1,660,000. Elephant ride is not in the from-price.",
    fullDescription: `An evening at **Elephant Safari Park Lodge in Taro**: twilight park time and a set or buffet dinner under the stars by the palm grove.

The **elephant ride is extra** — say if you want it. Family rates are quoted. Pickup extra.`,
    highlights: [
      "Taro evening + dinner",
      "Outdoor lakeside seating",
      "Elephant ride quoted extra",
      "Family quote on WhatsApp",
    ],
    included: ["Twilight park access", "Dinner under the stars"],
    notIncluded: ["Elephant ride (add-on)", "Hotel pickup unless quoted"],
    itinerary: [
      { time: "Dusk", title: "Arrive Taro", description: "Driver or self-meet." },
      { time: "Evening", title: "Dinner", description: "Outdoor set or buffet as the lodge serves that night." },
    ],
  }),
  ticketTour({
    slug: "jungle-safari-ride-and-lunch-elephant-safari-park-lodge",
    title: "Jungle Safari Ride and Lunch — Taro",
    seoTitle: "Taro Elephant Jungle Ride | From IDR 1.665M",
    seoDescription:
      "Taro jungle elephant safari stroll and lunch from IDR 1,665,000. Elephant Safari Park Lodge. Pickup quoted on WhatsApp.",
    category: "village",
    area: "Taro · Ubud",
    venue: "Elephant Safari Park Lodge, Taro",
    duration: "Half day",
    sourcePrice: 1_465_000,
    shortDescription:
      "Scenic elephant-back stroll through the Taro park and jungle, then lunch. From IDR 1,665,000. Pickup quoted.",
    fullDescription: `A daytime **Taro jungle safari ride** at Elephant Safari Park Lodge: a guided stroll on elephant-back through the park and cool Taro jungle, then lunch.

We book the lodge ticket. Pickup is not in the from-price unless you add a driver.`,
    highlights: [
      "Taro jungle elephant stroll",
      "Lunch included",
      "Half-day pace from Ubud",
      "Pickup quoted",
    ],
    included: ["Jungle safari ride", "Lunch"],
    notIncluded: ["Hotel pickup unless quoted", "Night-safari dinner (separate ticket)"],
    itinerary: [
      { time: "Morning", title: "Ride", description: "Park briefing then the jungle stroll." },
      { time: "Midday", title: "Lunch", description: "Lodge lunch after the ride." },
    ],
  }),
  ticketTour({
    slug: "jungle-buggies-complete-3-laps-tour",
    title: "Jungle Buggies — Complete 3 Laps",
    seoTitle: "Bali Jungle Buggies 3 Laps | From IDR 1.12M",
    seoDescription:
      "Purpose-built 5 km buggy laps in Polaris rigs from IDR 1,120,000 for 3 laps. Single or tandem. Not a boat. WhatsApp booking.",
    category: "adventure",
    area: "Bali jungle track",
    venue: "Purpose-built buggy course (~5 km / lap)",
    duration: "About 2 hours",
    sourcePrice: 920_000,
    shortDescription:
      "Three laps on a purpose-built ~5 km buggy course in protected Polaris rigs. Single or tandem. From IDR 1,120,000.",
    fullDescription: `**Jungle buggies** are land Polaris rigs on a purpose-built ~5 km lap — **not** our Sedang ATV and **not** a boat.

The ticket we list is the **complete 3-lap** run. Single-seat or tandem (friend or guide). Extra laps quoted. Helmet and park briefing included by the operator.

WhatsApp guest count and whether you want single or tandem.`,
    highlights: [
      "3 laps on a ~5 km purpose-built track",
      "Polaris buggy — single or tandem",
      "About 2 hours",
      "Separate from our Sedang ATV",
    ],
    included: ["3 buggy laps", "Polaris rig + helmet / briefing from the operator"],
    notIncluded: ["Hotel pickup unless quoted", "Extra laps"],
    itinerary: [
      { time: "Start", title: "Briefing + kit", description: "Fit helmets, choose single or tandem." },
      { time: "Laps", title: "3 laps", description: "Each lap about 5 km on the built track." },
    ],
    extraFaq: {
      question: "Is this the same as your Ubud ATV?",
      answer:
        "No. ATV at All New Bali Adventure in Sedang is a different ticket. Jungle buggies are Polaris rigs on a purpose-built lap course.",
    },
  }),
  ticketTour({
    slug: "dirt-bike-kintamani-black-lava",
    title: "Dirt Bike — Kintamani Black Lava",
    seoTitle: "Kintamani Dirt Bike | From IDR 4.1M",
    seoDescription:
      "Private guided Kintamani enduro on black-lava and forest tracks from IDR 4,100,000. KTM 250 EXC class. About 8 hours. WhatsApp.",
    category: "adventure",
    area: "Kintamani · Mount Batur",
    venue: "Kintamani lava + forest tracks",
    duration: "About 8 hours",
    sourcePrice: 3_900_000,
    shortDescription:
      "Private guided enduro around Kintamani and the black-lava dunes. From IDR 4,100,000. Package bike is a KTM 250 EXC-class enduro. Best in wet season.",
    fullDescription: `A **private guided dirt-bike day** on Kintamani forest and black-lava tracks — lake views, altitude changes, sand-dune lava fields. This is **not** the Mount Batur sunrise jeep.

The included bike class is a **KTM 250 EXC Sixdays**-type enduro. Husqvarna FE 350 options are quoted. Beginner / intermediate / advanced lines exist; tell us your riding months on a geared bike.

Wet season (December–May) is the usual Kintamani window (traction, less dust). About 8 hours. Gear from the operator. Pickup quoted.`,
    highlights: [
      "Private guided Kintamani enduro",
      "Black-lava + forest tracks",
      "KTM 250 EXC-class bike in the package",
      "About 8 hours",
    ],
    included: [
      "Guided enduro day",
      "KTM 250 EXC-class bike (package)",
      "Riding gear from the operator",
    ],
    notIncluded: ["Hotel pickup unless quoted", "Husqvarna / other bike upgrades", "Jeep sunrise ticket"],
    itinerary: [
      { time: "Morning", title: "Kit + brief", description: "Bike fit and level check." },
      { time: "Day", title: "Kintamani tracks", description: "Forest, open trail, lava dunes — line matches your level." },
    ],
    extraFaq: {
      question: "Is this the Batur sunrise jeep?",
      answer:
        "No. The jeep is a private 4×4 to a crater-rim viewpoint. This is a guided dirt bike on lava and forest tracks.",
    },
  }),
  ticketTour({
    slug: "dirt-bike-tabanan-day-night",
    title: "Dirt Bike — Tabanan Day & Night",
    seoTitle: "Tabanan Dirt Bike Day & Night | From IDR 2.1M",
    seoDescription:
      "Tabanan jungle and Jatiluwih-view dirt bike from IDR 2,100,000. KLX 150 or Yamaha X-Ride in the package. Day-to-night line. WhatsApp.",
    category: "adventure",
    area: "Tabanan · Jatiluwih",
    venue: "Tabanan rainforest tracks",
    duration: "4–8 hours",
    sourcePrice: 1_900_000,
    shortDescription:
      "Guided Tabanan enduro toward Jatiluwih rice terraces — jungle, logs, rivers. From IDR 2,100,000. KLX 150 or X-Ride scooter in the package.",
    fullDescription: `**Tabanan day & night** is a guided dirt-bike line through rainforest with Jatiluwih views. Tracks run about 40–100 km and 4–8 hours depending on the path.

Package bikes are a **Kawasaki KLX 150** and/or **Yamaha X-Ride 115** automatic (beginner-friendly). KTM 250 / Husqvarna upgrades quoted. Rideable year-round; wet season is muddier.

This is not a beach-sunset package — see the jungle & sunset-beach ticket.`,
    highlights: [
      "Tabanan rainforest + Jatiluwih views",
      "KLX 150 or X-Ride in the package",
      "Beginner to advanced lines",
      "4–8 hours",
    ],
    included: ["Guided ride", "KLX 150 and/or X-Ride package bike", "Operator riding gear"],
    notIncluded: ["Hotel pickup unless quoted", "KTM / Husqvarna upgrade"],
    itinerary: [
      { time: "Start", title: "Kit", description: "Choose automatic scooter or KLX 150." },
      { time: "Ride", title: "Tabanan line", description: "Rainforest, rivers, rice-terrace viewpoints." },
    ],
  }),
  ticketTour({
    slug: "dirt-bike-tabanan-jungle-sunset-beach",
    title: "Dirt Bike — Tabanan Jungle & Sunset Beach",
    seoTitle: "Tabanan Dirt Bike Sunset | From IDR 2.1M",
    seoDescription:
      "Tabanan jungle dirt bike finishing at the beach for sunset from IDR 2,100,000. KLX 150 or X-Ride. WhatsApp booking.",
    category: "adventure",
    area: "Tabanan · west coast",
    venue: "Tabanan jungle to sunset beach",
    duration: "4–8 hours",
    sourcePrice: 1_900_000,
    shortDescription:
      "Same Tabanan jungle tracks, then a beach sunset finish. From IDR 2,100,000. KLX 150 or X-Ride in the package.",
    fullDescription: `The **jungle & sunset beach** Tabanan ride uses the same rainforest / Jatiluwih-view tracks, then ends on the west-coast sand for sunset.

Package bikes: **KLX 150** or **Yamaha X-Ride**. Bigger enduro bikes quoted. 4–8 hours. Pickup quoted.`,
    highlights: [
      "Jungle tracks + sunset beach finish",
      "KLX 150 or X-Ride package",
      "Jatiluwih-view terrain",
      "4–8 hours",
    ],
    included: ["Guided ride to the beach", "KLX 150 and/or X-Ride package bike", "Operator riding gear"],
    notIncluded: ["Hotel pickup unless quoted", "KTM / Husqvarna upgrade", "Dinner"],
    itinerary: [
      { time: "Day", title: "Jungle line", description: "Tabanan rainforest and rice-terrace views." },
      { time: "Late afternoon", title: "Beach sunset", description: "West-coast sand finish — not a boat." },
    ],
  }),
  ticketTour({
    slug: "lontar-weaving-class",
    title: "Lontar Weaving Class",
    seoTitle: "Lontar Weaving Class Ubud | From IDR 600K",
    seoDescription:
      "2-hour lontar-palm weaving class from IDR 600,000. Learn canang-style baskets with a local teacher. WhatsApp booking.",
    category: "culture",
    area: "Ubud",
    venue: "Ubud workshop (confirmed on WhatsApp)",
    duration: "2 hours",
    sourcePrice: 400_000,
    shortDescription:
      "Two hours weaving lontar palm into offering baskets — the same craft used for canang. From IDR 600,000. You keep what you make.",
    fullDescription: `A **2-hour lontar weaving class** near Ubud. Lontar palm is what Balinese families weave into offering baskets. You work a small piece with a teacher and take it home.

Pickup quoted. Not a jewelry class — see silver making for that.`,
    highlights: ["2 hours", "Lontar offering-basket craft", "Take your piece home", "Ubud workshop"],
    included: ["2-hour class", "Lontar materials", "Teacher"],
    notIncluded: ["Hotel pickup unless quoted"],
    itinerary: [
      { time: "Class", title: "Weave", description: "Intro to lontar, then a small basket or tray." },
    ],
  }),
  ticketTour({
    slug: "silver-making-class",
    title: "Silver Making Class",
    seoTitle: "Ubud Silver Making Class | From IDR 650K",
    seoDescription:
      "3-hour Ubud silver class from IDR 650,000. Five grams of silver included — ring, pendant, or earrings. WhatsApp booking.",
    category: "culture",
    area: "Ubud",
    venue: "Ubud workshop (confirmed on WhatsApp)",
    duration: "3 hours",
    sourcePrice: 450_000,
    shortDescription:
      "Three-hour guided silver class. Five grams of silver in the ticket — enough for a ring, pendant, or pair of earrings. From IDR 650,000.",
    fullDescription: `A **3-hour silver-making class**: design, then each production step with a teacher. **5 grams of silver** is in the price — typically a ring, pendant, or earrings.

Extra silver is quoted. Pickup extra.`,
    highlights: ["3 hours", "5 g silver included", "Ring, pendant, or earrings", "Guided start to finish"],
    included: ["3-hour class", "5 grams of silver", "Tools and teacher"],
    notIncluded: ["Extra silver beyond 5 g", "Hotel pickup unless quoted"],
    itinerary: [
      { time: "Hour 1", title: "Design", description: "Sketch the piece that fits 5 g." },
      { time: "Hours 2–3", title: "Make", description: "Form, file, and finish with the teacher." },
    ],
  }),
  ticketTour({
    slug: "balinese-dance-class",
    title: "Balinese Dance Class",
    seoTitle: "Balinese Dance Class Ubud | From IDR 600K",
    seoDescription:
      "2-hour beginner Balinese dance class from IDR 600,000. Stylized full-body basics with a local teacher. WhatsApp booking.",
    category: "culture",
    area: "Ubud",
    venue: "Ubud studio (confirmed on WhatsApp)",
    duration: "2 hours",
    sourcePrice: 400_000,
    shortDescription:
      "Two-hour beginner Balinese dance — basic full-body lines and hand positions. From IDR 600,000. Costume photo extra if offered.",
    fullDescription: `A **2-hour beginner dance class** covering the stylized eyes, hands, and stance that make Balinese dance readable. No experience needed.

Studio confirmed on WhatsApp. Pickup quoted.`,
    highlights: ["2 hours", "Beginner-friendly", "Local teacher", "Ubud studio"],
    included: ["2-hour class", "Teacher"],
    notIncluded: ["Performance costume hire unless quoted", "Hotel pickup unless quoted"],
    itinerary: [{ time: "Class", title: "Basic positions", description: "Warm-up, hand/eye drills, a short phrase." }],
  }),
  ticketTour({
    slug: "batik-class",
    title: "Batik Class",
    seoTitle: "Ubud Batik Class | From IDR 650K",
    seoDescription:
      "3-hour batik workshop from IDR 650,000. Original or traditional motif with a teacher. Take the cloth home. WhatsApp booking.",
    category: "culture",
    area: "Ubud",
    venue: "Ubud workshop (confirmed on WhatsApp)",
    duration: "3 hours",
    sourcePrice: 450_000,
    shortDescription:
      "Three-hour batik workshop — original design or a traditional motif, wax and dye with a teacher. From IDR 650,000. You keep the cloth.",
    fullDescription: `A **3-hour batik class** in the Ubud area. Work a small cloth in wax-resist dye: your own motif or a traditional pattern. You take the piece home.

Pickup quoted.`,
    highlights: ["3 hours", "Wax-resist batik", "Keep your cloth", "Beginner-friendly"],
    included: ["3-hour class", "Cloth, wax, dyes", "Teacher"],
    notIncluded: ["Hotel pickup unless quoted", "Extra large cloths"],
    itinerary: [
      { time: "Hour 1", title: "Motif", description: "Draw or trace." },
      { time: "Hours 2–3", title: "Wax + dye", description: "Canting wax, dye, and dry." },
    ],
  }),
  ticketTour({
    slug: "bamboo-carving-class",
    title: "Bamboo Carving Class",
    seoTitle: "Bamboo Carving Class Ubud | From IDR 600K",
    seoDescription:
      "2-hour bamboo carving class from IDR 600,000. Simple animal motifs — dragonfly or butterfly. WhatsApp booking.",
    category: "culture",
    area: "Ubud",
    venue: "Ubud workshop (confirmed on WhatsApp)",
    duration: "2 hours",
    sourcePrice: 400_000,
    shortDescription:
      "Two hours carving a small bamboo piece — typically a dragonfly or butterfly. From IDR 600,000. You keep it.",
    fullDescription: `A **2-hour bamboo carving class**. The usual project is a simple animal — dragonfly or butterfly — cut and detailed with a teacher.

Tools provided. Pickup quoted.`,
    highlights: ["2 hours", "Small animal motif", "Take it home", "Beginner tools provided"],
    included: ["2-hour class", "Bamboo blank + tools", "Teacher"],
    notIncluded: ["Hotel pickup unless quoted"],
    itinerary: [{ time: "Class", title: "Carve", description: "Trace, cut, and finish a small piece." }],
  }),
  ticketTour({
    slug: "balinese-offering-class",
    title: "Balinese Offering Class",
    seoTitle: "Canang Offering Class Ubud | From IDR 600K",
    seoDescription:
      "Canang sari offering class from IDR 600,000. About 2 hours weaving palm and flowers the way homes and temples do. WhatsApp.",
    category: "culture",
    area: "Ubud",
    venue: "Ubud workshop (confirmed on WhatsApp)",
    duration: "2 hours",
    sourcePrice: 400_000,
    shortDescription:
      "Learn canang sari — the small daily offerings you see on homes, temples, and scooters. About 2 hours. From IDR 600,000.",
    fullDescription: `A **canang / offering class** (~1.5–2 hours). You weave palm trays and place flowers the way Balinese households do each morning.

This is a workshop, not a temple ceremony ticket. Pickup quoted.`,
    highlights: ["~2 hours", "Canang sari weaving", "Palm + flowers", "Cultural, not a show"],
    included: ["Class", "Palm, flowers, and tray materials", "Teacher"],
    notIncluded: ["Hotel pickup unless quoted", "Temple ceremony seating"],
    itinerary: [{ time: "Class", title: "Weave canang", description: "Palm tray, flowers, and the meaning of the pieces." }],
  }),
]
