import {
  COOKING_CLASS_PRICE_IDR,
  COOKING_CLASS_PRIVATE_COUPLE_IDR,
  COOKING_CLASS_PRIVATE_SOLO_IDR,
  COOKING_CLASS_STANDARD_PRICE_IDR,
} from '@/data/cultureSales'
import {
  GIRLS_TRIP_DRIVER_DAY_FROM_IDR,
} from '@/data/girlsTrip'
import {
  MOTORBIKE_DESTINATIONS,
  MOTORBIKE_SOUTH_SHUTTLE_AREAS,
  MOTORBIKE_SOUTH_SHUTTLE_IDR,
} from '@/data/motorbikeTrip'
import {
  ACTIVITY_MOODS,
  type ActivityMoodId,
  type PickupActivityId,
  type PickupAreaId,
} from '@/data/planners'
import { UTV_BUGGY_SINGLE_IDR, UTV_BUGGY_TANDEM_IDR } from '@/data/utvBuggy'
import {
  JEEP_HOT_SPRING_IDR,
  JEEP_SITIN_GROUP_IDR,
  JEEP_SITIN_PAIR_TOTAL_IDR,
  JEEP_TRACKING_GROUP_IDR,
  JEEP_TRACKING_PAIR_TOTAL_IDR,
  PICKUP_FEE_IDR,
  TIER_PRICES_IDR,
  getUnitPrice,
} from '@/lib/pricing'

export type PlannerLine = {
  label: string
  amount: number
}

export type PlannerQuote = {
  ok: true
  headline: string
  lines: PlannerLine[]
  total: number
  notes: string[]
  tourHref: string
  tourLabel: string
  whatsappActivity: string
}

export type PlannerQuoteError = {
  ok: false
  error: string
}

export function quoteAtvPlanner(input: {
  rideType: 'single' | 'tandem'
  quantity: number
  pickup: boolean
}): PlannerQuote | PlannerQuoteError {
  const quantity = Math.floor(input.quantity)
  if (!Number.isFinite(quantity) || quantity < 1) {
    return { ok: false, error: 'Enter at least 1 rider or tandem bike.' }
  }

  const activityId = input.rideType === 'tandem' ? 'tandem-atv' : 'single-atv'
  const unitPrice = getUnitPrice(activityId, quantity)
  const activitySubtotal = unitPrice * quantity
  const pickupFee = input.pickup ? PICKUP_FEE_IDR : 0
  const unitLabel = input.rideType === 'tandem' ? 'tandem bike' : 'rider'

  return {
    ok: true,
    headline:
      input.rideType === 'tandem'
        ? `${quantity} tandem ATV${quantity === 1 ? '' : 's'} at All New Bali Adventure`
        : `${quantity} single ATV ${unitLabel}${quantity === 1 ? '' : 's'} at All New Bali Adventure`,
    lines: [
      { label: `${quantity} × ${unitLabel} (${formatPlannerIdr(unitPrice)} each)`, amount: activitySubtotal },
      {
        label: input.pickup ? 'Hotel pickup (optional surcharge)' : 'Self-meet at Sedang',
        amount: pickupFee,
      },
    ],
    total: activitySubtotal + pickupFee,
    notes: [
      'Lunch, helmet, boot shoes, and insurance (ages 6–65) are included.',
      'Arena is All New Bali Adventure in Sedang, Abiansemal — not Kuber cave.',
      input.pickup
        ? `Hotel pickup is ${formatPlannerIdr(PICKUP_FEE_IDR)} once per booking, not per rider.`
        : 'Self-meet has no pickup fee. Grab to Sedang is on you.',
    ],
    tourHref: '/tours/bali-atv-adventure',
    tourLabel: 'Open the ATV money page',
    whatsappActivity: `Sedang ATV (${input.rideType}, ${quantity} ${unitLabel}${quantity === 1 ? '' : 's'})`,
  }
}

export function quoteMotorbikePlanner(input: {
  destinationIndex: number
  scooters: number
  southShuttle: boolean
}): PlannerQuote | PlannerQuoteError {
  const dest = MOTORBIKE_DESTINATIONS[input.destinationIndex]
  const scooters = Math.floor(input.scooters)
  if (!dest) return { ok: false, error: 'Choose a motorbike destination.' }
  if (!Number.isFinite(scooters) || scooters < 1) {
    return { ok: false, error: 'Enter at least 1 scooter.' }
  }

  const activitySubtotal = dest.priceIdr * scooters
  const shuttleFee = input.southShuttle ? MOTORBIKE_SOUTH_SHUTTLE_IDR : 0

  return {
    ok: true,
    headline: `${dest.name} · ${scooters} scooter${scooters === 1 ? '' : 's'}`,
    lines: [
      {
        label: `${scooters} × ${dest.name} promo (${formatPlannerIdr(dest.priceIdr)} / scooter, was ${formatPlannerIdr(dest.listPriceIdr)})`,
        amount: activitySubtotal,
      },
      {
        label: input.southShuttle
          ? `${MOTORBIKE_SOUTH_SHUTTLE_AREAS} shuttle (once)`
          : 'No south shuttle',
        amount: shuttleFee,
      },
    ],
    total: activitySubtotal + shuttleFee,
    notes: [
      'Price is per scooter, not per person. Ride yourself (IDP recommended) or sit pillion.',
      'Attraction entrance tickets and lunch are not included.',
      'Pickup is at the area you choose — not free Ubud cycling/cooking pickup and not the IDR 400,000 adventure surcharge.',
      input.southShuttle
        ? `The ${formatPlannerIdr(MOTORBIKE_SOUTH_SHUTTLE_IDR)} shuttle is once per booking from ${MOTORBIKE_SOUTH_SHUTTLE_AREAS} only.`
        : `Add the ${formatPlannerIdr(MOTORBIKE_SOUTH_SHUTTLE_IDR)} shuttle only if we collect you from ${MOTORBIKE_SOUTH_SHUTTLE_AREAS}.`,
    ],
    tourHref: '/tours/bali-motorbike-traveling-trip',
    tourLabel: 'Open the motorbike money page',
    whatsappActivity: `Bali motorbike tour — ${dest.name} (${scooters} scooter${scooters === 1 ? '' : 's'})`,
  }
}

export function quoteJeepPlanner(input: {
  guests: number
  variant: 'sit-in' | 'tracking'
  hotSpring: boolean
}): PlannerQuote | PlannerQuoteError {
  const guests = Math.floor(input.guests)
  if (!Number.isFinite(guests) || guests < 2) {
    return { ok: false, error: 'Private jeep is minimum 2 guests.' }
  }

  const tracking = input.variant === 'tracking'
  const pairTotal = tracking ? JEEP_TRACKING_PAIR_TOTAL_IDR : JEEP_SITIN_PAIR_TOTAL_IDR
  const groupRate = tracking ? JEEP_TRACKING_GROUP_IDR : JEEP_SITIN_GROUP_IDR
  const activityTotal = guests === 2 ? pairTotal : groupRate * guests
  const perPerson = activityTotal / guests
  const hotSpringTotal = input.hotSpring ? JEEP_HOT_SPRING_IDR * guests : 0
  const variantLabel = input.variant === 'tracking' ? 'Private tracking jeep' : 'Private sit-in jeep'

  return {
    ok: true,
    headline: `${variantLabel} for ${guests} guests`,
    lines: [
      {
        label:
          guests === 2
            ? `${variantLabel} 2-guest package (${formatPlannerIdr(perPerson)} pp)`
            : `${guests} × 3+ group rate (${formatPlannerIdr(groupRate)} pp)`,
        amount: activityTotal,
      },
      {
        label: input.hotSpring
          ? `Batur hot spring + ticket (${formatPlannerIdr(JEEP_HOT_SPRING_IDR)} pp)`
          : 'No hot-spring add-on',
        amount: hotSpringTotal,
      },
      { label: 'Island-wide hotel pickup', amount: 0 },
    ],
    total: activityTotal + hotSpringTotal,
    notes: [
      'Sit-down meal after the viewpoint is included. Food is not cooked inside the 4×4.',
      'Not the 2-hour Mount Batur summit trek. Sit-in stays in the 4×4; tracking adds a guided walk to the crater-rim viewpoint (~1,350 m).',
      'Hotel pickup is included island-wide — not the IDR 400,000 ATV / rafting surcharge.',
    ],
    tourHref: '/tours/batur-sunrise-jeep-tour',
    tourLabel: 'Open the jeep money page',
    whatsappActivity: `${variantLabel} for ${guests} guests${input.hotSpring ? ' + hot spring' : ''}`,
  }
}

export function quoteCookingPlanner(input: {
  style: 'shared' | 'private'
  guests: number
}): PlannerQuote | PlannerQuoteError {
  const guests = Math.floor(input.guests)
  if (!Number.isFinite(guests) || guests < 1) {
    return { ok: false, error: 'Enter at least 1 guest.' }
  }
  if (input.style === 'shared' && guests > 8) {
    return { ok: false, error: 'Shared Tumang class is max 8 guests. Choose private kitchen or split the group.' }
  }

  const unitPrice =
    input.style === 'shared'
      ? COOKING_CLASS_PRICE_IDR
      : guests === 2
        ? COOKING_CLASS_PRIVATE_COUPLE_IDR / 2
        : COOKING_CLASS_PRIVATE_SOLO_IDR
  const total = unitPrice * guests
  const styleLabel = input.style === 'shared' ? 'Shared Tumang class (promo)' : 'Private Tumang kitchen'

  return {
    ok: true,
    headline: `${styleLabel} for ${guests} guest${guests === 1 ? '' : 's'}`,
    lines: [
      {
        label:
          input.style === 'shared'
            ? `${guests} × shared promo (${formatPlannerIdr(COOKING_CLASS_PRICE_IDR)} pp, was ${formatPlannerIdr(COOKING_CLASS_STANDARD_PRICE_IDR)})`
            : `${guests} × private kitchen (${formatPlannerIdr(unitPrice)} pp)`,
        amount: total,
      },
      { label: 'Ubud-area hotel pickup', amount: 0 },
    ],
    total,
    notes: [
      'Complimentary Ubud-area hotel pickup is included. Do not add the IDR 400,000 adventure surcharge.',
      'Shared class is max 8 with Chef Wayan Suryana. Morning session includes a pasar walk.',
      'Private kitchen is IDR 1,000,000 per person.',
    ],
    tourHref: '/tours/balinese-cooking-class',
    tourLabel: 'Open the cooking money page',
    whatsappActivity: `${styleLabel} for ${guests} guest${guests === 1 ? '' : 's'}`,
  }
}

export type PickupCheck = {
  included: boolean
  feeIdr: number | null
  headline: string
  detail: string
  tourHref: string
  tourLabel: string
  whatsappActivity: string
}

export function checkPickupRule(input: {
  activity: PickupActivityId
  area: PickupAreaId
}): PickupCheck {
  const surcharge = {
    included: false,
    feeIdr: PICKUP_FEE_IDR,
    headline: `Hotel pickup is ${formatPlannerIdr(PICKUP_FEE_IDR)} or free self-meet`,
    detail:
      'This is the optional adventure surcharge for ATV, rafting, canyon tubing, and Griya Beji. It is not free Ubud cycling/cooking pickup, not the included Swing Heaven driver, and not island-wide jeep pickup.',
  }

  switch (input.activity) {
    case 'atv':
      return {
        ...surcharge,
        tourHref: '/tours/bali-atv-adventure',
        tourLabel: 'ATV money page',
        whatsappActivity: 'Sedang ATV — confirm pickup or self-meet',
      }
    case 'rafting':
      return {
        ...surcharge,
        tourHref: '/tours/whitewater-rafting',
        tourLabel: 'Rafting money page',
        whatsappActivity: 'Ayung rafting — confirm pickup or self-meet',
      }
    case 'tubing':
      return {
        ...surcharge,
        tourHref: '/tours/canyon-tubing',
        tourLabel: 'Tubing money page',
        whatsappActivity: 'Canyon tubing — confirm pickup or self-meet',
      }
    case 'swing':
      return {
        included: true,
        feeIdr: null,
        headline: 'Hotel driver is included and required',
        detail:
          'Swing Heaven tickets include hotel pickup and drop-off. Self-meet at Bongkasa is not offered. Share the hotel pin on WhatsApp. This is not the IDR 400,000 ATV/rafting surcharge.',
        tourHref: '/tours/swing-heaven-bali',
        tourLabel: 'Swing Heaven money page',
        whatsappActivity: 'Swing Heaven — hotel driver included, send hotel pin',
      }
    case 'griya-beji':
      return {
        ...surcharge,
        tourHref: '/tours/griya-beji-waterfall',
        tourLabel: 'Griya Beji money page',
        whatsappActivity: 'Griya Beji — confirm pickup or self-meet',
      }
    case 'cycling':
      return {
        included: input.area === 'ubud',
        feeIdr: input.area === 'ubud' ? 0 : null,
        headline:
          input.area === 'ubud'
            ? 'Free Ubud-area hotel pickup is included'
            : 'Free pickup is for the Ubud area — WhatsApp a south or elsewhere pin',
        detail:
          input.area === 'ubud'
            ? 'Pejeng ricefield cycling includes complimentary Ubud / Pejeng / Tegallalang hotel pickup and lunch.'
            : 'Do not assume the IDR 400,000 adventure surcharge or a free south-Bali shuttle. Message the hotel pin and we will confirm.',
        tourHref: '/tours/ubud-ricefield-cycling-tour',
        tourLabel: 'Cycling money page',
        whatsappActivity: 'Pejeng cycling — confirm hotel pickup',
      }
    case 'cooking':
      return {
        included: input.area === 'ubud',
        feeIdr: input.area === 'ubud' ? 0 : null,
        headline:
          input.area === 'ubud'
            ? 'Free Ubud-area hotel pickup is included'
            : 'Free pickup is for the Ubud area — WhatsApp a south or elsewhere pin',
        detail:
          input.area === 'ubud'
            ? 'Tumang Bali Cooking Class includes complimentary Ubud-area hotel pickup on shared and private sessions.'
            : 'Do not invent free Canggu or Nusa Dua pickup on the cooking class. Share the pin on WhatsApp.',
        tourHref: '/tours/balinese-cooking-class',
        tourLabel: 'Cooking money page',
        whatsappActivity: 'Tumang cooking class — confirm hotel pickup',
      }
    case 'jeep':
      return {
        included: true,
        feeIdr: 0,
        headline: 'Island-wide hotel pickup is included',
        detail:
          'Private Mount Batur jeep rates already include hotel pickup and drop-off from Ubud, Canggu, Jimbaran, Nusa Dua, and other south Bali stays. Sunrise pickup is typically 02:00–03:00.',
        tourHref: '/tours/batur-sunrise-jeep-tour',
        tourLabel: 'Jeep money page',
        whatsappActivity: 'Private Mount Batur jeep — confirm pickup time',
      }
    case 'motorbike':
      if (input.area === 'south-shuttle') {
        return {
          included: false,
          feeIdr: MOTORBIKE_SOUTH_SHUTTLE_IDR,
          headline: `${MOTORBIKE_SOUTH_SHUTTLE_AREAS} shuttle is ${formatPlannerIdr(MOTORBIKE_SOUTH_SHUTTLE_IDR)} once`,
          detail:
            'Motorbike pickup is at the area you choose. The south shuttle is once per booking from Canggu, Jimbaran, or Nusa Dua — not the IDR 400,000 ATV surcharge and not free Ubud cycling pickup.',
          tourHref: '/tours/bali-motorbike-traveling-trip',
          tourLabel: 'Motorbike money page',
          whatsappActivity: 'Bali motorbike tour — Canggu / Jimbaran / Nusa Dua shuttle',
        }
      }
      return {
        included: true,
        feeIdr: 0,
        headline: 'Pickup at your chosen area is in the scooter promo',
        detail:
          'Share the pin when you book. Attraction tickets stay extra. Add the IDR 550,000 shuttle only for Canggu, Jimbaran, or Nusa Dua collection.',
        tourHref: '/tours/bali-motorbike-traveling-trip',
        tourLabel: 'Motorbike money page',
        whatsappActivity: 'Bali motorbike tour — pickup at chosen area',
      }
    case 'melukat':
      return {
        included: true,
        feeIdr: 0,
        headline: 'Private Ubud-area shuttle is included',
        detail:
          'Tirta Empu / Pura Beji purification includes a private shuttle, guide, and breakfast in the IDR 1,200,000 per-person rate.',
        tourHref: '/tours/tirta-empu-purification',
        tourLabel: 'Melukat money page',
        whatsappActivity: 'Tirta Empu purification — confirm shuttle',
      }
    case 'coffee':
      return {
        included: false,
        feeIdr: null,
        headline: 'Transport is not included on Umah Kuno luwak',
        detail:
          'Umah Kuno tasting is IDR 800,000 per person (min 3). Pair it with a driver day or a jeep itinerary if you need a transfer.',
        tourHref: '/tours/luwak-coffee-plantation',
        tourLabel: 'Luwak money page',
        whatsappActivity: 'Umah Kuno luwak — ask about transport',
      }
    case 'utv':
    case 'parks':
      return {
        included: false,
        feeIdr: null,
        headline: 'Pickup is quoted on WhatsApp',
        detail:
          'Park, workshop, dirt-bike, and UTV tickets do not use free Ubud pickup or the IDR 400,000 adventure surcharge. We quote the transfer when you share the hotel pin.',
        tourHref: input.activity === 'utv' ? '/tours/utv-buggy-bali-adventure' : '/tours/bali-bird-park',
        tourLabel: input.activity === 'utv' ? 'UTV money page' : 'Bird Park money page',
        whatsappActivity:
          input.activity === 'utv' ? 'UTV at Bali Buggy Adventures — quote pickup' : 'Park ticket — quote pickup',
      }
    case 'itinerary':
      return {
        included: false,
        feeIdr: GIRLS_TRIP_DRIVER_DAY_FROM_IDR,
        headline: `Private driver from ${formatPlannerIdr(GIRLS_TRIP_DRIVER_DAY_FROM_IDR)} per car-day`,
        detail:
          'Family / girls / any-group itineraries are consultation only on WhatsApp. Car days start from IDR 600,000. HiAce is quoted for 6+. Clubs and spa stay guest-booked.',
        tourHref: '/tours/bali-private-itinerary',
        tourLabel: 'Private itinerary page',
        whatsappActivity: 'Private Bali itinerary — driver day consult',
      }
  }
}

export type ActivityChoice = {
  moodId: ActivityMoodId
  moodLabel: string
  title: string
  fromPrice: number
  pickup: string
  why: string
  tourHref: string
  blogHref: string
  blogLabel: string
}

export function chooseActivity(mood: ActivityMoodId): ActivityChoice {
  const moodLabel = ACTIVITY_MOODS.find((item) => item.id === mood)?.label ?? mood

  switch (mood) {
    case 'atv-mud':
      return {
        moodId: mood,
        moodLabel,
        title: 'Sedang ATV at All New Bali Adventure',
        fromPrice: TIER_PRICES_IDR['single-atv'][0],
        pickup: `Hotel pickup ${formatPlannerIdr(PICKUP_FEE_IDR)} or self-meet`,
        why: 'Four-wheel jungle mud and river crossings near Ubud. Not a public-road scooter and not Kuber cave.',
        tourHref: '/tours/bali-atv-adventure',
        blogHref: '/blog/how-much-does-atv-cost-bali-ubud-2026',
        blogLabel: 'ATV cost 2026',
      }
    case 'scooter':
      return {
        moodId: mood,
        moodLabel,
        title: 'Bali motorbike traveling trip',
        fromPrice: MOTORBIKE_DESTINATIONS[0].priceIdr,
        pickup: 'Pickup at your chosen area · south shuttle IDR 550,000',
        why: 'Guided 125–160cc automatic on public roads. Tickets extra. Not ATV mud and not a private car.',
        tourHref: '/tours/bali-motorbike-traveling-trip',
        blogHref: '/blog/bali-motorbike-tour-price-2026',
        blogLabel: 'Scooter price 2026',
      }
    case 'jeep-sitin':
      return {
        moodId: mood,
        moodLabel,
        title: 'Private sit-in Mount Batur jeep',
        fromPrice: JEEP_SITIN_PAIR_TOTAL_IDR / 2,
        pickup: 'Island-wide hotel pickup included',
        why: 'Stay in the 4×4 to a crater-rim viewpoint. Minimum 2 guests. Meal after the viewpoint. Not the summit trek.',
        tourHref: '/tours/batur-sunrise-jeep-tour',
        blogHref: '/blog/mount-batur-jeep-vs-sunrise-trek',
        blogLabel: 'Jeep vs trek',
      }
    case 'jeep-tracking':
      return {
        moodId: mood,
        moodLabel,
        title: 'Private tracking Mount Batur jeep',
        fromPrice: JEEP_TRACKING_PAIR_TOTAL_IDR / 2,
        pickup: 'Island-wide hotel pickup included',
        why: 'Private jeep plus a guided walk to the viewpoint. IDR 1,800,000 for 2 guests. Not the 2-hour summit hike.',
        tourHref: '/tours/batur-sunrise-jeep-tour',
        blogHref: '/blog/mount-batur-sit-in-jeep-vs-tracking',
        blogLabel: 'Sit-in vs tracking',
      }
    case 'cooking':
      return {
        moodId: mood,
        moodLabel,
        title: 'Tumang Bali Cooking Class',
        fromPrice: COOKING_CLASS_PRICE_IDR,
        pickup: 'Free Ubud-area hotel pickup',
        why: 'Hands-on class with Chef Wayan Suryana. Shared promo IDR 450,000. Private kitchen IDR 1,000,000 per person.',
        tourHref: '/tours/balinese-cooking-class',
        blogHref: '/blog/cooking-class-ubud-price-2026-worth-it',
        blogLabel: 'Cooking price 2026',
      }
    case 'cycling':
      return {
        moodId: mood,
        moodLabel,
        title: 'Pejeng ricefield cycling',
        fromPrice: TIER_PRICES_IDR.cycling[0],
        pickup: 'Free Ubud-area hotel pickup',
        why: 'Two-hour village ride with lunch. Free Ubud pickup. Not a Tegallalang walk-in terrace ticket.',
        tourHref: '/tours/ubud-ricefield-cycling-tour',
        blogHref: '/blog/ubud-ricefield-cycling-tour-guide-2026',
        blogLabel: 'Cycling guide',
      }
    case 'rafting':
      return {
        moodId: mood,
        moodLabel,
        title: 'Ayung whitewater rafting',
        fromPrice: TIER_PRICES_IDR.rafting[1],
        pickup: `Hotel pickup ${formatPlannerIdr(PICKUP_FEE_IDR)} or self-meet`,
        why: 'Class II–III near Ubud. IDR 500,000 list, IDR 450,000 for 2+ (min 2). Not canyon tubing.',
        tourHref: '/tours/whitewater-rafting',
        blogHref: '/blog/rafting-ubud-price-2026',
        blogLabel: 'Rafting price 2026',
      }
    case 'tubing':
      return {
        moodId: mood,
        moodLabel,
        title: 'Wos River canyon tubing',
        fromPrice: TIER_PRICES_IDR['canyon-tubing'][1],
        pickup: `Hotel pickup ${formatPlannerIdr(PICKUP_FEE_IDR)} or self-meet`,
        why: 'A float, not rapids. IDR 500,000 list, IDR 450,000 for 2+. Not Ayung rafting and not canyoning.',
        tourHref: '/tours/canyon-tubing',
        blogHref: '/blog/wos-river-tubing-price-2026',
        blogLabel: 'Tubing price 2026',
      }
    case 'swing':
      return {
        moodId: mood,
        moodLabel,
        title: 'Swing Heaven Bali',
        fromPrice: TIER_PRICES_IDR['swing-heaven'][0],
        pickup: 'Hotel driver included — required, no self-meet',
        why: 'Jungle swings in Bongkasa from IDR 530,000, or IDR 630,000 with lunch. Driver included. Not Tegallalang / Happy Swing.',
        tourHref: '/tours/swing-heaven-bali',
        blogHref: '/blog/swing-heaven-bali-ubud-guide',
        blogLabel: 'Swing Heaven guide',
      }
    case 'utv':
      return {
        moodId: mood,
        moodLabel,
        title: 'UTV at Bali Buggy Adventures',
        fromPrice: UTV_BUGGY_SINGLE_IDR,
        pickup: 'Pickup quoted',
        why: `Pemogan automatic UTV, about 1 hour / 7 km. Single ${formatPlannerIdr(UTV_BUGGY_SINGLE_IDR)}, tandem ${formatPlannerIdr(UTV_BUGGY_TANDEM_IDR)}. Lunch included. Not Sedang ATV.`,
        tourHref: '/tours/utv-buggy-bali-adventure',
        blogHref: '/blog/bali-canyoning-vs-tubing-vs-buggies',
        blogLabel: 'Canyoning vs buggies',
      }
    case 'dirt-bike':
      return {
        moodId: mood,
        moodLabel,
        title: 'Kintamani or Tabanan dirt bike',
        fromPrice: 2_100_000,
        pickup: 'Pickup quoted',
        why: 'Geared enduro, not the 125–160cc scooter day. Tabanan from IDR 2,100,000. Kintamani black lava from IDR 4,100,000.',
        tourHref: '/tours/dirt-bike-kintamani-black-lava',
        blogHref: '/blog/kintamani-dirt-bike-vs-batur-jeep',
        blogLabel: 'Dirt bike vs jeep',
      }
  }
}

export function formatPlannerIdr(amount: number): string {
  return `IDR ${amount.toLocaleString('id-ID')}`
}
