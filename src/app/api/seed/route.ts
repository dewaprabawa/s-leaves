import { getPayload } from "@/lib/payload"
import { NextResponse } from "next/server"

const FALLBACK_1X1_PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
  'base64'
)

async function getMediaBuffer(url: string, filename: string) {
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

export async function GET() {
  try {
    const payload = await getPayload()
    if (!payload) {
      return NextResponse.json({ success: false, error: "Payload client failed to initialize." }, { status: 500 })
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
      console.log('Admin user already exists.')
    } else {
      adminUser = await payload.create({
        collection: 'users',
        data: {
          email: adminEmail,
          password: adminPassword,
        },
      })
      console.log('Admin user created successfully.')
    }

    // 2. Clear Existing Data (tours, transfers, media, bookings, pages, addons) to prevent duplicate slug errors
    await payload.delete({
      collection: 'bookings',
      where: { id: { exists: true } },
    })
    await payload.delete({
      collection: 'pages',
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
      collection: 'addons',
      where: { id: { exists: true } },
    })
    await payload.delete({
      collection: 'reviews',
      where: { id: { exists: true } },
    })
    await payload.delete({
      collection: 'media',
      where: { id: { exists: true } },
    })
    await payload.delete({
      collection: 'activities',
      where: { id: { exists: true } },
    })
    console.log('Cleared existing bookings, pages, tours, transfers, addons, reviews, media, and activities collections.')

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
      const { data, mimetype } = await getMediaBuffer(m.url, m.filename)
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
    console.log(`Seeded ${mediaDocs.length} media items.`)

    // 3. Seed Addons
    const addonsData = [
      {
        name: 'Gourmet Lunch Box',
        price: 15,
        description: 'A delicious Indonesian local lunch box including main course, seasonal fruits, and mineral water.',
      },
      {
        name: 'Professional Photography & Drone Package',
        price: 50,
        description: 'Get high-quality digital photos and drone footage captured by our professional photographer during your tour.',
      },
      {
        name: 'Private English-Speaking Tour Guide',
        price: 35,
        description: 'A dedicated local guide who will provide rich historical and cultural commentary exclusively for your group.',
      }
    ]

    const addonDocs: any[] = []
    for (const addon of addonsData) {
      const doc = await payload.create({
        collection: 'addons',
        data: addon,
      })
      addonDocs.push(doc)
    }
    console.log(`Seeded ${addonDocs.length} addons.`)

    // 3.5 Seed Activities
    const activitiesData = [
      { name: 'Culture & Sightseeing', slug: 'culture', description: 'Explore ancient temples, royal palaces, and traditional Balinese villages.' },
      { name: 'Hiking & Trekking', slug: 'hiking', description: 'Climb volcanoes, trek through lush jungles, and discover hidden waterfalls.' },
      { name: 'Marine & Ocean Adventure', slug: 'ocean', description: 'Snorkel with sea turtles, dive with manta rays, and sail to remote islands.' },
    ]
    const activityDocs: any[] = []
    for (const act of activitiesData) {
      const doc = await payload.create({
        collection: 'activities',
        data: act,
      })
      activityDocs.push(doc)
    }
    console.log(`Seeded ${activityDocs.length} activities.`)

    // 4. Seed Tours
    const toursData = [
      {
        title: 'Bali Highlights: Temples & Terraces',
        slug: 'bali-highlights',
        type: 'day-tour',
        location: 'Ubud, Bali',
        duration: 'Full Day (8 Hours)',
        rating: 4.9,
        reviewCount: 1568,
        isBestseller: true,
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
          infantPrice: 15,
          groupBrackets: [
            { minPax: 1, maxPax: 2, pricePerPax: 85 },
            { minPax: 3, maxPax: 5, pricePerPax: 75 },
            { minPax: 6, maxPax: 99, pricePerPax: 65 },
          ],
          seasonalOverrides: [
            {
              name: 'Christmas Peak Season',
              startDate: '2026-12-20',
              endDate: '2027-01-05',
              priceOverride: 110,
            },
            {
              name: 'Summer Peak Season',
              startDate: '2026-07-01',
              endDate: '2026-08-31',
              priceOverride: 95,
            }
          ],
        },
        maxParticipantsPerDay: 15,
        addons: [addonDocs[0]?.id, addonDocs[1]?.id, addonDocs[2]?.id],
        activities: [activityDocs[0]?.id],
        activityOptions: [
          { name: 'Standard Group Tour', priceDiff: 0, description: 'Join other travelers in a shared air-conditioned minivan.' },
          { name: 'Private VIP Upgrade', priceDiff: 30, description: 'Enjoy a private car, driver, and customizable itinerary just for you.' },
        ],
        metaTitle: 'Bali Highlights Tour: Temples & Terraces | S-Leaves',
        metaDescription: 'Book the ultimate full-day Ubud tour. Witness stunning Balinese water temples, iconic rice terraces, and local culture.',
      },
      {
        title: 'Komodo Dragon 3-Day Expedition',
        slug: 'komodo-expedition',
        type: 'multi-day',
        location: 'Flores, Indonesia',
        duration: '3 Days, 2 Nights',
        rating: 5.0,
        reviewCount: 9210,
        isBestseller: true,
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
          infantPrice: 100,
          groupBrackets: [
            { minPax: 1, maxPax: 2, pricePerPax: 450 },
            { minPax: 3, maxPax: 4, pricePerPax: 420 },
            { minPax: 5, maxPax: 99, pricePerPax: 390 },
          ],
        },
        maxParticipantsPerDay: 8,
        addons: [addonDocs[1]?.id, addonDocs[2]?.id],
        activities: [activityDocs[2]?.id],
        activityOptions: [
          { name: 'Shared Cabin Cruise', priceDiff: 0, description: 'Book a bed in a comfortable shared cabin on our standard cruise vessel.' },
          { name: 'Private Master Suite Upgrade', priceDiff: 150, description: 'Upgrade to a private master suite with en-suite bath and sea-view balcony.' },
        ],
        metaTitle: 'Komodo Dragon 3-Day Island Expedition | S-Leaves',
        metaDescription: 'Explore the stunning Komodo National Park on a 3-day luxury cruise. Spot dragons, hike Padar Island, and swim with manta rays.',
      },
      {
        title: 'Mount Batur Sunrise Volcano Trekking',
        slug: 'mount-batur-trek',
        type: 'day-tour',
        location: 'Kintamani, Bali',
        duration: '6 Hours (Early Morning)',
        rating: 4.8,
        reviewCount: 776,
        isBestseller: false,
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
          infantPrice: 0,
        },
        maxParticipantsPerDay: 25,
        addons: [addonDocs[1]?.id, addonDocs[2]?.id],
        activities: [activityDocs[1]?.id],
        activityOptions: [
          { name: 'Standard Trekking Package', priceDiff: 0, description: 'Guided ascent with hot tea and standard volcano steam breakfast.' },
          { name: 'Premium Trek & Hot Springs Combo', priceDiff: 25, description: 'Includes guided trek, steam breakfast, plus entry ticket to Toya Devasya Hot Springs.' },
        ],
        metaTitle: 'Mount Batur Sunrise Trekking & Hot Springs | S-Leaves',
        metaDescription: 'Hike Mount Batur for a breathtaking volcanic sunrise, cook breakfast with natural steam, and soak in Kintamani hot springs.',
      },
    ]

    const seededTours = []
    for (const t of toursData) {
      const doc = await payload.create({
        collection: 'tours',
        data: t,
      })
      seededTours.push(doc)
    }
    console.log(`Seeded ${seededTours.length} tours successfully.`)

    // 4b. Seed Reviews (which automatically updates the Tour rating and review count fields via collection hooks)
    const reviewsData = [
      {
        tour: seededTours[0]?.id,
        authorName: 'Emma Watson',
        rating: 5,
        comment: 'This is an excellent tour and I would highly recommend it. The boat, the equipment, the lunch, the fish, the giant manta and especially the staff... all of it excellent from start to finish.',
        status: 'approved',
        visitDate: '2026-04-19',
      },
      {
        tour: seededTours[0]?.id,
        authorName: 'Donal O.',
        rating: 5,
        comment: 'Had the best day out on the water with Morgan and Nemo! Lots of fun laughs and great snorkeling. We got to see so much marine life.',
        status: 'approved',
        visitDate: '2026-05-02',
      },
      {
        tour: seededTours[1]?.id,
        authorName: 'Kaoru F.',
        rating: 5,
        comment: 'It was a fantastic experience with a very kind and friendly crew. Swimming alongside manta rays and sea turtles was the highlight!',
        status: 'approved',
        visitDate: '2026-04-30',
      },
      {
        tour: seededTours[2]?.id,
        authorName: 'Mark G.',
        rating: 4,
        comment: 'Awesome way to spend the day in Bali. Mount Batur sunrise was amazing, followed by natural hot springs. Great guides, service, and equipment.',
        status: 'approved',
        visitDate: '2026-04-21',
      }
    ]

    const seededReviews = []
    for (const r of reviewsData) {
      if (!r.tour) continue
      const doc = await payload.create({
        collection: 'reviews',
        data: r,
      })
      seededReviews.push(doc)
    }
    console.log(`Seeded ${seededReviews.length} reviews successfully.`)

    // 5. Seed Transfers
    const transfersData = [
      {
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
            media: mediaDocs[3]?.id,
            description: 'Best for small families or couples. Fits 4 passengers and 2 medium bags.',
          },
          {
            name: 'Executive SUV (Toyota Fortuner)',
            capacity: 5,
            basePrice: 55,
            media: mediaDocs[3]?.id,
            description: 'Premium SUV class with extra road stability. Fits 5 passengers and 3 bags.',
          },
          {
            name: 'VIP Luxury Van (Toyota Alphard)',
            capacity: 6,
            basePrice: 95,
            media: mediaDocs[3]?.id,
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
        metaDescription: 'Book a hassle-free private transfer from Ngurah Rai Bali Airport directly to Ubud. Select your vehicle class and add multiple drop stops.',
      },
      {
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
            media: mediaDocs[3]?.id,
            description: 'Economical and reliable MPV. Fits 4 passengers and 2 medium bags.',
          },
          {
            name: 'Executive SUV (Toyota Fortuner)',
            capacity: 5,
            basePrice: 45,
            media: mediaDocs[3]?.id,
            description: 'Comfortable family SUV. Fits 5 passengers and 3 bags.',
          },
          {
            name: 'VIP Luxury Van (Toyota Alphard)',
            capacity: 6,
            basePrice: 85,
            media: mediaDocs[3]?.id,
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
        metaDescription: 'Reliable private transfer between hotels in Ubud and Seminyak or Canggu. Standard, SUV and VIP Alphard options available.',
      },
    ]

    const seededTransfers = []
    for (const tr of transfersData) {
      const doc = await payload.create({
        collection: 'transfers',
        data: tr,
      })
      seededTransfers.push(doc)
    }
    console.log(`Seeded ${seededTransfers.length} transfers successfully.`)

    // 6. Seed Global Settings
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
    console.log('Seeded Global Settings successfully.')

    // 7. Seed Pages
    const pagesData = [
      {
        title: 'Home',
        slug: 'home',
        layout: [
          {
            blockType: 'hero',
            headline: 'Bespoke Journeys Through the Indonesian Archipelago',
            subheadline: 'Discover the untouched beauty of Bali, Flores, and beyond with our private luxury tours, volcano treks, and premium transfers.',
            backgroundImage: mediaDocs[0]?.id,
          },
          {
            blockType: 'featuredTours',
            title: 'Discover Our Featured Tours',
            subtitle: 'Carefully curated day trips and multi-day expeditions across Indonesia’s most beautiful destinations.',
            tours: seededTours.map((t: any) => t.id),
            buttonLabel: 'Explore All Tours',
            buttonLink: '/tours',
          },
          {
            blockType: 'featuredTransfers',
            title: 'Private Airport & Hotel Transfers',
            subtitle: 'Arrive in style and comfort. Enjoy a direct, private transfer with custom vehicle options and multiple drop locations.',
            transfers: seededTransfers.map((t: any) => t.id),
            buttonLabel: 'Explore All Transfers',
            buttonLink: '/transfers',
          },
          {
            blockType: 'content',
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    tag: 'h2',
                    children: [{ text: 'Why Choose S-Leaves?' }],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'At S-Leaves, we believe travel should be immersive, sustainable, and unforgettable. Our carefully curated itineraries connect conscious travelers with local guides, hidden natural wonders, and deep cultural heritage. Whether you are scaling an active volcano at sunrise or exploring a remote marine reserve, we ensure every detail is handled with care and premium comfort.',
                      }
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'We operate with strict eco-tourism principles, supporting local Balinese and Indonesian communities, ensuring our carbon footprint is minimized, and promoting cultural conservation.',
                      }
                    ],
                  }
                ],
              }
            },
          },
          {
            blockType: 'testimonials',
            title: 'Loved by Travelers Worldwide',
            reviews: [
              {
                quote: 'My sunrise trek up Mount Batur was absolutely magical! The guides from S-Leaves were incredibly professional, prepared a delicious breakfast over volcanic steam, and took us to natural hot springs afterward.',
                author: 'Sarah Jenkins',
                role: 'Solo Explorer, United Kingdom',
                rating: 5,
                avatar: mediaDocs[2]?.id,
              },
              {
                quote: 'S-Leaves made our luxury transfer from DPS airport to Ubud completely seamless. The driver was waiting for us with cold towels and water, and the vehicle was exceptionally clean and comfortable. A true 5-star service.',
                author: 'Marc & Elena',
                role: 'Family Vacation, France',
                rating: 5,
                avatar: mediaDocs[3]?.id,
              },
              {
                quote: 'The Komodo National Park tour was the highlight of our Indonesian trip. Spotting the dragons, swimming alongside giant manta rays, and hiking Padar Island at sunset is something we will never forget.',
                author: 'David K.',
                role: 'Adventure Enthusiast, Australia',
                rating: 5,
                avatar: mediaDocs[1]?.id,
              }
            ],
          },
          {
            blockType: 'faqs',
            title: 'Frequently Asked Questions',
            items: [
              {
                question: 'What is included in the tour packages?',
                answer: 'Most day tours include private air-conditioned transportation, hotel pickup/dropoff, all entrance tickets, mineral water, and an English-speaking driver/guide. Meal packages and photography packages can be added as optional extras during checkout.',
              },
              {
                question: 'Are pickup and drop-off included in airport transfers?',
                answer: 'Yes! Our private airport transfers include airport pickup (with meet & greet service), drop-off directly to your hotel lobby, fuel fees, highway toll fees, and airport parking fees. There are no hidden charges.',
              },
              {
                question: 'What is your cancellation and booking policy?',
                answer: 'We offer full refunds for cancellations made up to 48 hours prior to your scheduled activity. Customized group bookings or luxury liveaboard voyages may follow a custom cancellation policy detailed in your booking summary.',
              }
            ],
          },
          {
            blockType: 'callToAction',
            title: 'Ready to Begin Your Next Adventure?',
            text: 'Explore our selection of private day tours, multi-day expeditions, and luxury transport options.',
            buttonLabel: 'Explore Tours',
            buttonLink: '/tours',
          }
        ],
      },
      {
        title: 'About Us',
        slug: 'about',
        layout: [
          {
            blockType: 'hero',
            headline: 'Crafting Meaningful Adventures Since 2024',
            subheadline: 'We connect conscious travelers with the rich heritage, unique wildlife, and natural wonders of Indonesia.',
            backgroundImage: mediaDocs[1]?.id,
          },
          {
            blockType: 'content',
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    tag: 'h2',
                    children: [{ text: 'Our Mission & Philosophy' }],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'S-Leaves was founded on a simple belief: travel should enrich both the traveler and the destination. We strive to provide premium, authentic experiences while actively contributing to local ecological preservation and community welfare.',
                      }
                    ],
                  },
                  {
                    type: 'heading',
                    tag: 'h3',
                    children: [{ text: 'Sustainable Eco-Tourism' }],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'We partner with local guides and eco-lodges, avoid single-use plastics on all our tours, and donate a portion of our proceeds to marine and rainforest conservation projects across Indonesia.',
                      }
                    ],
                  }
                ],
              }
            },
          },
          {
            blockType: 'callToAction',
            title: 'Have a Custom Itinerary in Mind?',
            text: 'Our travel specialists are happy to design a customized private route just for you.',
            buttonLabel: 'Contact Our Team',
            buttonLink: '/contact',
          }
        ],
      },
      {
        title: 'Contact',
        slug: 'contact',
        layout: [
          {
            blockType: 'hero',
            headline: 'Plan Your Journey With Us',
            subheadline: 'Have questions about our tours or need assistance? Reach out to our travel specialists today.',
            backgroundImage: mediaDocs[2]?.id,
          },
          {
            blockType: 'content',
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    tag: 'h2',
                    children: [{ text: 'Get In Touch' }],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Our dedicated support team is available 24/7 to assist with your bookings, customized requests, or transport arrangements.',
                      }
                    ],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Email: info@s-leaves.com | Phone / WhatsApp: +62 812 3456 7890 | Office Location: Jalan Raya Ubud No. 12, Ubud, Bali, Indonesia',
                      }
                    ],
                  },
                  {
                    type: 'heading',
                    tag: 'h3',
                    children: [{ text: 'Opening Hours' }],
                  },
                  {
                    type: 'paragraph',
                    children: [
                      {
                        text: 'Monday – Sunday: 08:00 AM – 08:00 PM (GMT+8). Online booking is available 24/7.',
                      }
                    ],
                  }
                ],
              }
            },
          },
          {
            blockType: 'callToAction',
            title: 'Ready to Book Instantly?',
            text: 'Browse our list of available day tours and multi-day packages to lock in your dates.',
            buttonLabel: 'View All Tours',
            buttonLink: '/tours',
          }
        ],
      }
    ]

    const seededPages = []
    for (const p of pagesData) {
      const doc = await payload.create({
        collection: 'pages',
        data: p,
      })
      seededPages.push(doc)
    }
    console.log(`Seeded ${seededPages.length} pages successfully.`)

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully!",
      credentials: {
        email: adminEmail,
        password: adminPassword,
        note: "Use these credentials to log in to the admin panel at /admin"
      },
      seeded: {
        users: 1,
        media: mediaDocs.length,
        tours: seededTours.length,
        transfers: seededTransfers.length,
        pages: seededPages.length,
        addons: addonDocs.length,
        reviews: seededReviews.length,
        globals: 1
      }
    })
  } catch (error: any) {
    console.error("Seeding error:", error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
