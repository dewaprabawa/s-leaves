import { getPayload } from '../src/lib/payload'
import config from '../src/payload.config'

const FALLBACK_1X1_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  'base64'
)

async function getMediaBuffer(url: string) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(5000) })
    if (!response.ok) throw new Error(`Status ${response.status}`)
    const arrayBuffer = await response.arrayBuffer()
    return {
      data: Buffer.from(arrayBuffer),
      mimetype: response.headers.get('content-type') || 'image/jpeg',
    }
  } catch (error) {
    console.warn(`Failed to fetch image ${url}, using 1x1 fallback:`, error)
    return {
      data: FALLBACK_1X1_PNG,
      mimetype: 'image/png',
    }
  }
}

async function run() {
  console.log('Initializing Payload and connecting to database...')
  try {
    const payload = await getPayload()
    if (!payload) {
      console.error('Failed to initialize Payload client.')
      process.exit(1)
    }

    // 1. Create or Find Admin User
    const adminEmail = 'admin@s-leaves.com'
    const adminPassword = 'SLeavesAdmin2026!'
    
    let adminUser = null
    const existingUsers = await payload.find({
      collection: 'users',
      where: { email: { equals: adminEmail } },
      limit: 1,
    })

    if (existingUsers.docs.length > 0) {
      adminUser = existingUsers.docs[0]
      console.log('Admin user already exists:', adminEmail)
    } else {
      adminUser = await payload.create({
        collection: 'users',
        data: {
          email: adminEmail,
          password: adminPassword,
        },
      })
      console.log('Admin user created successfully:', adminEmail)
    }

    // 2. Clear Collections to prevent unique constraint errors (e.g. duplicate slugs)
    await payload.delete({
      collection: 'bookings',
      where: { id: { exists: true } },
    })
    await payload.delete({
      collection: 'tours',
      where: { id: { exists: true } },
    })
    await payload.delete({
      collection: 'transfers',
      where: { id: { exists: true } },
    })
    await payload.delete({
      collection: 'media',
      where: { id: { exists: true } },
    })
    console.log('Cleared existing bookings, tours, transfers, and media collections.')

    // 3. Seed Media Images
    const mediaUrls = [
      {
        url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
        filename: 'bali-ubud.jpg',
        alt: 'Sacred water temple in Ubud, Bali',
      },
      {
        url: 'https://images.unsplash.com/photo-1518548419070-28628344d2cee?auto=format&fit=crop&w=1200&q=80',
        filename: 'komodo-island.jpg',
        alt: 'Overlooking the beautiful bays of Komodo Island',
      },
      {
        url: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80',
        filename: 'mount-batur.jpg',
        alt: 'Mount Batur active volcano hiking trial',
      },
      {
        url: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
        filename: 'luxury-van.jpg',
        alt: 'Premium multi-purpose vehicle for private transfer',
      },
    ]

    const mediaDocs: any[] = []
    for (const m of mediaUrls) {
      console.log(`Downloading and seeding media: ${m.filename}...`)
      const { data, mimetype } = await getMediaBuffer(m.url)
      const doc = await payload.create({
        collection: 'media',
        data: {
          alt: m.alt,
        },
        file: {
          data,
          name: m.filename,
          mimetype,
          size: data.length,
        },
      })
      mediaDocs.push(doc)
    }
    console.log(`Successfully seeded ${mediaDocs.length} media items.`)

    // 4. Seed Tours
    const toursData = [
      {
        title: 'Bali Highlights: Temples & Terraces',
        slug: 'bali-highlights',
        type: 'day-tour',
        location: 'Ubud, Bali',
        duration: 'Full Day (8 Hours)',
        categoryTags: [
          { tag: 'Culture' },
          { tag: 'Nature' }
        ],
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    text: 'Experience the spiritual heart of Bali on this comprehensive full-day tour. Visit sacred water temples, iconic rice terraces, and witness traditional craftsmanship. This tour is perfect for first-time visitors looking to capture the authentic beauty and rich heritage of Ubud.',
                  }
                ],
                type: 'paragraph',
              }
            ],
            type: 'root',
          }
        },
        media: {
          heroImage: mediaDocs[0]?.id,
          gallery: [
            { image: mediaDocs[0]?.id },
            { image: mediaDocs[2]?.id },
          ],
        },
        itinerary: [
          {
            dayTitle: 'Morning: Sacred Water Temple',
            description: {
              root: {
                children: [
                  {
                    children: [
                      {
                        text: 'Begin your journey at Tirta Empul, the famous water temple. Learn about the Hindu-Balinese purification ritual and stroll around the scenic koi ponds.',
                      }
                    ],
                    type: 'paragraph',
                  }
                ],
                type: 'root',
              }
            },
          },
          {
            dayTitle: 'Afternoon: Rice Terraces & Coffee',
            description: {
              root: {
                children: [
                  {
                    children: [
                      {
                        text: 'Walk through the lush green Tegalalang Rice Terraces, marvel at the traditional subak irrigation system, and taste locally produced organic coffees and teas.',
                      }
                    ],
                    type: 'paragraph',
                  }
                ],
                type: 'root',
              }
            },
          }
        ],
        pricing: {
          currency: 'USD',
          basePrice: 85,
          childPrice: 45,
        },
        metaTitle: 'Bali Highlights Tour: Temples & Terraces | S-Leaves',
        metaDescription: 'Book the ultimate full-day Ubud tour. Witness stunning Balinese water temples, iconic rice terraces, and local culture.',
      },
      {
        title: 'Komodo Dragon 3-Day Expedition',
        slug: 'komodo-expedition',
        type: 'multi-day',
        location: 'Flores, Indonesia',
        duration: '3 Days, 2 Nights',
        categoryTags: [
          { tag: 'Adventure' },
          { tag: 'Wildlife' },
          { tag: 'Ocean' }
        ],
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    text: 'Embark on a voyage of a lifetime into the Komodo National Park. Track the ancient Komodo dragons in their natural habitat, hike majestic hills for panoramic island views, and snorkel in pristine waters filled with rich marine life.',
                  }
                ],
                type: 'paragraph',
              }
            ],
            type: 'root',
          }
        },
        media: {
          heroImage: mediaDocs[1]?.id,
          gallery: [
            { image: mediaDocs[1]?.id },
          ],
        },
        itinerary: [
          {
            dayTitle: 'Day 1: Welcome & Sunset Hike',
            description: {
              root: {
                children: [
                  {
                    children: [
                      {
                        text: 'Board our luxury liveaboard ship at Labuan Bajo. Sail to Kelor Island for snorkeling and continue to Padar Island for an unforgettable sunset ridge trek.',
                      }
                    ],
                    type: 'paragraph',
                  }
                ],
                type: 'root',
              }
            },
          },
          {
            dayTitle: 'Day 2: Dragons & Pink Beach',
            description: {
              root: {
                children: [
                  {
                    children: [
                      {
                        text: 'Trek with official park rangers to see the majestic Komodo dragons on Komodo Island. Later, relax on the famous Pink Beach and enjoy snorkeling.',
                      }
                    ],
                    type: 'paragraph',
                  }
                ],
                type: 'root',
              }
            },
          },
          {
            dayTitle: 'Day 3: Swim with Mantas',
            description: {
              root: {
                children: [
                  {
                    children: [
                      {
                        text: 'Visit Manta Point for a once-in-a-lifetime chance to swim alongside giant manta rays. Enjoy lunch on board before sailing back to Labuan Bajo.',
                      }
                    ],
                    type: 'paragraph',
                  }
                ],
                type: 'root',
              }
            },
          }
        ],
        pricing: {
          currency: 'USD',
          basePrice: 450,
          childPrice: 280,
        },
        metaTitle: 'Komodo Dragon 3-Day Island Expedition | S-Leaves',
        metaDescription: 'Explore the stunning Komodo National Park on a 3-day luxury cruise. Spot dragons, hike Padar Island, and swim with manta rays.',
      },
      {
        title: 'Mount Batur Sunrise Volcano Trekking',
        slug: 'mount-batur-trek',
        type: 'day-tour',
        location: 'Kintamani, Bali',
        duration: '6 Hours (Early Morning)',
        categoryTags: [
          { tag: 'Adventure' },
          { tag: 'Nature' }
        ],
        description: {
          root: {
            children: [
              {
                children: [
                  {
                    text: 'Ascend the sacred active volcano, Mount Batur, under a blanket of stars. Watch a magical sunrise over the Caldera lake, enjoy a breakfast cooked by volcanic steam, and relax in natural hot springs.',
                  }
                ],
                type: 'paragraph',
              }
            ],
            type: 'root',
          }
        },
        media: {
          heroImage: mediaDocs[2]?.id,
          gallery: [
            { image: mediaDocs[2]?.id },
          ],
        },
        itinerary: [
          {
            dayTitle: '03:30 AM: Start the Ascent',
            description: {
              root: {
                children: [
                  {
                    children: [
                      {
                        text: 'Arrive at the base of Mount Batur. Equip torches and follow your professional guide up the volcanic path under the starlit sky.',
                      }
                    ],
                    type: 'paragraph',
                  }
                ],
                type: 'root',
              }
            },
          },
          {
            dayTitle: '06:00 AM: Sunrise & Steam Breakfast',
            description: {
              root: {
                children: [
                  {
                    children: [
                      {
                        text: 'Reach the summit just in time for sunrise. Marvel at the golden hour views of Mount Agong and Lombok. Enjoy hot tea and eggs cooked in volcanic steam fissures.',
                      }
                    ],
                    type: 'paragraph',
                  }
                ],
                type: 'root',
              }
            },
          }
        ],
        pricing: {
          currency: 'USD',
          basePrice: 60,
          childPrice: 35,
        },
        metaTitle: 'Mount Batur Sunrise Trekking & Hot Springs | S-Leaves',
        metaDescription: 'Hike Mount Batur for a breathtaking volcanic sunrise, cook breakfast with natural steam, and soak in Kintamani hot springs.',
      },
    ]

    console.log('Seeding tours...')
    const seededTours = []
    for (const t of toursData) {
      const doc = await payload.create({
        collection: 'tours',
        data: t,
      })
      seededTours.push(doc)
      console.log(`Seeded tour: "${t.title}"`)
    }

    // 5. Seed Transfers
    const transfersData = [
      {
        title: 'DPS Airport to Ubud Private Transfer',
        slug: 'dps-to-ubud',
        route: {
          from: 'Ngurah Rai Airport (DPS)',
          to: 'Ubud Area',
        },
        vehicleType: 'Toyota Avanza / Suzuki Ertiga (Standard MPV)',
        capacity: 4,
        media: mediaDocs[3]?.id,
        pricing: {
          currency: 'USD',
          basePrice: 35,
        },
        metaTitle: 'Private Airport Transfer from DPS Airport to Ubud | S-Leaves',
        metaDescription: 'Book a hassle-free private transfer from Ngurah Rai Bali Airport directly to Ubud. English-speaking driver, toll fee and parking included.',
      },
      {
        title: 'DPS Airport to Seminyak Luxury Transfer',
        slug: 'dps-to-seminyak-luxury',
        route: {
          from: 'Ngurah Rai Airport (DPS)',
          to: 'Seminyak / Canggu / Kuta Area',
        },
        vehicleType: 'Toyota Alphard (Executive Premium Class)',
        capacity: 6,
        media: mediaDocs[3]?.id,
        pricing: {
          currency: 'USD',
          basePrice: 85,
        },
        metaTitle: 'Luxury Airport Transfer: DPS to Seminyak & Canggu | S-Leaves',
        metaDescription: 'Experience VIP travel with our premium Toyota Alphard private airport transfer from Bali airport to Seminyak or Canggu.',
      },
    ]

    console.log('Seeding transfers...')
    const seededTransfers = []
    for (const tr of transfersData) {
      const doc = await payload.create({
        collection: 'transfers',
        data: tr,
      })
      seededTransfers.push(doc)
      console.log(`Seeded transfer: "${tr.title}"`)
    }

    // 6. Seed Global Settings
    console.log('Updating global settings...')
    await payload.updateGlobal({
      slug: 'global-settings',
      data: {
        siteName: 'S-Leaves Travel & Tour',
        contactInfo: {
          phone: '+62 812 3456 7890',
          whatsapp: '+62 812 3456 7890',
          email: 'info@s-leaves.com',
        },
        socialLinks: [
          { platform: 'Instagram', url: 'https://instagram.com/s_leaves_travel' },
          { platform: 'Facebook', url: 'https://facebook.com/sleaves.travel' },
        ],
        defaultMetaTitle: 'S-Leaves | Bali & Indonesia Premium Travel Guides & Tours',
        defaultMetaDescription: 'Discover the hidden gems of Bali and Indonesia. Book curated day trips, volcano trekking, island expeditions, and luxury private airport transfers.',
      },
    })

    console.log('Seeding finished successfully!')
    console.log(`-----------------------------------`)
    console.log(`Admin Email: ${adminEmail}`)
    console.log(`Admin Password: ${adminPassword}`)
    console.log(`-----------------------------------`)
    process.exit(0)
  } catch (error) {
    console.error('Seeding process encountered an error:', error)
    process.exit(1)
  }
}

run()
