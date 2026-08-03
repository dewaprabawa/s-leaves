import { RenderBlocks } from "@/components/RenderBlocks"
import { TOURS } from "@/data/tours"
import { TRANSFERS } from "@/data/transfers"

const HOME_LAYOUT = [
  {
    blockType: 'hero',
    headline: 'Bespoke Journeys Through the Indonesian Archipelago',
    subheadline: 'Discover the untouched beauty of Bali, Flores, and beyond with our private luxury tours, volcano treks, and premium transfers.',
    backgroundImage: { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80' },
  },
  {
    blockType: 'featuredTours',
    title: 'Discover Our Featured Tours',
    subtitle: 'Carefully curated day trips and multi-day expeditions across Indonesia’s most beautiful destinations.',
    tours: TOURS,
    buttonLabel: 'Explore All Tours',
    buttonLink: '/tours',
  },
  {
    blockType: 'featuredTransfers',
    title: 'Private Airport & Hotel Transfers',
    subtitle: 'Arrive in style and comfort. Enjoy a direct, private transfer with custom vehicle options and multiple drop locations.',
    transfers: TRANSFERS,
    buttonLabel: 'Explore All Transfers',
    buttonLink: '/transfers',
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
      },
      {
        quote: 'S-Leaves made our luxury transfer from DPS airport to Ubud completely seamless. The driver was waiting for us with cold towels and water, and the vehicle was exceptionally clean and comfortable. A true 5-star service.',
        author: 'Marc & Elena',
        role: 'Family Vacation, France',
        rating: 5,
      },
      {
        quote: 'The Komodo National Park tour was the highlight of our Indonesian trip. Spotting the dragons, swimming alongside giant manta rays, and hiking Padar Island at sunset is something we will never forget.',
        author: 'David K.',
        role: 'Adventure Enthusiast, Australia',
        rating: 5,
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
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 flex flex-col w-full">
      <RenderBlocks layout={HOME_LAYOUT} />
    </main>
  )
}
