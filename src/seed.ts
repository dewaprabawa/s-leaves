import { getPayload } from "payload"
import config from "./payload.config"
import "dotenv/config"

async function seed() {
  console.log("Initializing Payload to seed MongoDB...")
  const payload = await getPayload({ config })
  
  try {
    // 1. Bali Highlights
    console.log("Inserting Bali Highlights tour...")
    await payload.create({
      collection: 'tours',
      data: {
        title: 'Bali Highlights: Temples & Terraces',
        slug: 'bali-highlights',
        isActive: true,
        duration: 'Full Day (8 Hours)',
        location: 'Ubud, Bali',
        groupSize: { min: 1, max: 12 },
        pricing: { currency: 'USD', basePrice: 85 },
        categoryTags: [
          { tag: 'Culture' },
          { tag: 'Nature' }
        ],
        itinerary: [
          { title: 'Morning', description: 'Visit the Tirta Empul water temple.' },
          { title: 'Afternoon', description: 'Walk through the Tegalalang Rice Terraces.' },
        ],
        inclusions: [{ item: 'Local Expert Guide' }, { item: 'Transport' }],
        exclusions: [{ item: 'Lunch' }]
      }
    })

    // 2. Komodo Expedition
    console.log("Inserting Komodo Expedition tour...")
    await payload.create({
      collection: 'tours',
      data: {
        title: 'Komodo Dragon 3-Day Expedition',
        slug: 'komodo-expedition',
        isActive: true,
        duration: '3 Days, 2 Nights',
        location: 'Flores, Indonesia',
        groupSize: { min: 2, max: 8 },
        pricing: { currency: 'USD', basePrice: 450 },
        categoryTags: [
          { tag: 'Adventure' },
          { tag: 'Wildlife' }
        ],
        itinerary: [
          { title: 'Day 1', description: 'Sail from Labuan Bajo and visit Rinca Island.' },
          { title: 'Day 2', description: 'Trek on Komodo Island to see the dragons, then snorkel at Pink Beach.' },
          { title: 'Day 3', description: 'Visit Manta Point and sail back.' }
        ],
        inclusions: [{ item: 'Liveaboard Boat' }, { item: 'Meals' }, { item: 'National Park Fees' }],
        exclusions: [{ item: 'Flights' }]
      }
    })

    console.log("Successfully seeded MongoDB! 🎉")
  } catch (error) {
    console.error("Failed to seed:", error)
  }
  
  process.exit(0)
}

seed()
