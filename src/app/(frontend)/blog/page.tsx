import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BLOG_POSTS } from '@/data/blog'
import { ArrowRight, Calendar } from 'lucide-react'

const ACTIVITY_GUIDES = [
  { label: 'All activities 2026', href: '/blog/things-to-do-near-ubud-2026' },
  { label: 'Batur jeep', href: '/tours/batur-sunrise-jeep-tour' },
  { label: 'Jeep prices', href: '/blog/mount-batur-sunrise-jeep-tour-price-guide-2026' },
  { label: 'Jeep vs trek', href: '/blog/mount-batur-jeep-vs-sunrise-trek' },
  { label: 'Jeep pickup times', href: '/blog/mount-batur-jeep-pickup-times-canggu-ubud-2026' },
  { label: 'Cooking class', href: '/tours/balinese-cooking-class' },
  { label: 'Cooking price 2026', href: '/blog/cooking-class-ubud-price-2026-worth-it' },
  { label: 'Cycling', href: '/tours/ubud-ricefield-cycling-tour' },
  { label: 'Cycling guide', href: '/blog/ubud-ricefield-cycling-tour-guide-2026' },
  { label: 'ATV', href: '/tours/bali-atv-adventure' },
  { label: 'ATV prices', href: '/blog/how-much-does-atv-cost-bali-ubud-2026' },
  { label: 'Rafting', href: '/tours/whitewater-rafting' },
  { label: 'Ayung rafting guide', href: '/blog/bali-whitewater-rafting-near-ubud-guide' },
  { label: 'Tubing', href: '/tours/canyon-tubing' },
  { label: 'Swing Heaven', href: '/tours/swing-heaven-bali' },
  { label: 'Swing vs Tegallalang', href: '/blog/swing-heaven-vs-tegallalang-bali-swing' },
  { label: 'Griya Beji Waterfall', href: '/tours/griya-beji-waterfall' },
  { label: 'Griya vs Tirta Empul', href: '/blog/griya-beji-vs-tirta-empul-melukat' },
  { label: 'Tirta Empul melukat', href: '/blog/tirta-empu-melukat-ubud-guide' },
  { label: 'Luwak coffee', href: '/tours/luwak-coffee-plantation' },
  { label: 'Private itinerary', href: '/tours/bali-private-itinerary' },
  { label: 'Family itinerary', href: '/blog/bali-family-private-itinerary-2026' },
  { label: '6-day girls trip', href: '/blog/bali-6-day-girls-trip-itinerary-2026' },
  { label: 'Full-day Ubud', href: '/tours/full-day-ubud-tour' },
  { label: 'Tanah Lot sunset', href: '/tours/half-day-ubud-tanah-lot-tour' },
  { label: 'Book WhatsApp', href: '/book' },
] as const

export const metadata: Metadata = {
  title: 'Blog & Travel Guide',
  description: 'Ubud activity guides with 2026 IDR: private Mount Batur jeep, Tumang cooking class, Pejeng cycling, ATV, Ayung rafting, Swing Heaven, Griya Beji, private family and girls-trip itineraries, and pickup rules — WhatsApp booking.',
  alternates: { canonical: '/blog' },
}

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-sand py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl lg:text-6xl font-serif text-brand-green font-bold">
            Travel & Culture
          </h1>
          <p className="text-lg text-brand-green-light">
            Insights, stories, and guides for slow travel in Bali.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {ACTIVITY_GUIDES.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex rounded-full border border-brand-green/15 bg-white px-3 py-1.5 text-xs font-semibold text-brand-green hover:border-accent-gold/40 hover:text-accent-gold-dark transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="group relative flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-brand-green/10">
              <div className="w-full md:w-2/5 aspect-[4/3] relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full md:w-3/5 p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-2 text-sm text-brand-green-light">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                </div>
                <h2 className="text-2xl font-bold text-brand-green">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-brand-green-light leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-accent-gold-dark font-semibold hover:text-accent-gold-dark transition-colors">
                  Read article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
