import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blog'
import { getBlogKeywords, keywordsToCsv } from '@/data/activityKeywords'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ArticleBookingCta from '@/components/ArticleBookingCta'
import ArticleGeoCta from '@/components/ArticleGeoCta'
import ArticleRelatedGuides from '@/components/ArticleRelatedGuides'
import WorkshopClassCards from '@/components/WorkshopClassCards'

type Props = {
  params: Promise<{ slug: string }>
}

const BATUR_JEEP_POST_SLUGS = new Set([
  'mount-batur-sunrise-jeep-tour-guide-2026',
  'mount-batur-jeep-vs-sunrise-trek',
  'mount-batur-jeep-pickup-times-canggu-ubud-2026',
  'mount-batur-sunrise-jeep-tour-price-guide-2026',
  'mount-batur-jeep-sunrise-vs-sunset',
  'mount-batur-sit-in-jeep-vs-tracking',
  'private-kintamani-day-jeep-itinerary',
])

const COOKING_POST_SLUGS = new Set([
  'cooking-class-ubud-price-2026-worth-it',
  'vegetarian-vegan-cooking-class-ubud',
  'morning-vs-afternoon-ubud-cooking-class',
  'inside-balinese-cooking-class-pejeng',
  'cycling-cooking-class-ubud-full-day-itinerary',
  'what-is-lawar-balinese-dish',
  'how-traditional-balinese-kitchens-work',
  'pound-spices-by-hand-not-blender',
  '5-essential-balinese-spices',
  'what-is-base-genep-balinese-spice-paste-guide',
  'top-5-traditional-balinese-foods',
])

const CYCLING_POST_SLUGS = new Set([
  'is-ubud-cycling-tour-worth-it',
  'ubud-ricefield-cycling-tour-guide-2026',
  'pejeng-rice-terrace-cycling-vs-tegallalang',
  'cycling-cooking-class-ubud-full-day-itinerary',
  'ebike-vs-pedal-ubud-cycling-tour',
  'what-to-wear-ubud-ricefield-cycling',
  'ubud-cycling-tour-for-families',
])

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug)

  if (!post) return { title: 'Article Not Found' }

  const keywords = getBlogKeywords(post.slug)

  return {
    title: post.seoTitle ? { absolute: post.seoTitle } : post.title,
    description: post.excerpt,
    keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.sekarbaliactivity.com/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sekarbaliactivity',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const isBaturJeepPost = BATUR_JEEP_POST_SLUGS.has(post.slug)
  const isCookingPost = COOKING_POST_SLUGS.has(post.slug)
  const isCyclingPost = CYCLING_POST_SLUGS.has(post.slug) && !isCookingPost
  const isAtvPost =
    post.slug.includes('atv') || post.slug === 'atv-river-tubing-wos-river-bali'
  const isActivityHubPost =
    post.slug === 'things-to-do-near-ubud-2026' ||
    post.slug === 'bali-adventure-packages-prices-2026'
  const isDayTourPost =
    post.slug === 'full-day-ubud-tour-guide-2026' ||
    post.slug === 'half-day-ubud-tanah-lot-sunset-tour-2026'
  const isCoffeePost =
    post.slug === 'luwak-coffee-plantation-umah-kuno-price-2026' ||
    post.slug === 'luwak-coffee-ethical-sourcing' ||
    post.slug === 'how-to-spot-ethical-luwak-coffee-in-bali'
  const isRaftingPost =
    post.slug === 'bali-whitewater-rafting-near-ubud-guide' ||
    post.slug === 'rafting-vs-tubing-vs-atv-near-ubud'
  const isTubingPost =
    post.slug === 'bali-canyon-tubing-guide-ubud' ||
    post.slug === 'atv-river-tubing-wos-river-bali'
  const isMelukatPost = post.slug === 'tirta-empu-melukat-ubud-guide'
  const articleKeywords = keywordsToCsv(getBlogKeywords(post.slug))

  const articleAbout = isBaturJeepPost
    ? {
        '@type': 'TouristTrip',
        name: 'Private Mount Batur Jeep Tour',
        url: 'https://www.sekarbaliactivity.com/tours/batur-sunrise-jeep-tour',
      }
    : isCookingPost
      ? {
          '@type': 'TouristTrip',
          name: 'Tumang Bali Cooking Class near Ubud',
          url: 'https://www.sekarbaliactivity.com/tours/balinese-cooking-class',
        }
      : isCyclingPost
        ? {
            '@type': 'TouristTrip',
            name: 'Ubud Ricefield Cycling Tour',
            url: 'https://www.sekarbaliactivity.com/tours/ubud-ricefield-cycling-tour',
          }
        : isRaftingPost
          ? {
              '@type': 'TouristTrip',
              name: 'Whitewater Rafting Adventure',
              url: 'https://www.sekarbaliactivity.com/tours/whitewater-rafting',
            }
          : isTubingPost
            ? {
                '@type': 'TouristTrip',
                name: 'Canyon Tubing Adventure',
                url: 'https://www.sekarbaliactivity.com/tours/canyon-tubing',
              }
            : isAtvPost
              ? {
                  '@type': 'TouristTrip',
                  name: 'Bali ATV Quad Bike Adventure near Ubud',
                  url: 'https://www.sekarbaliactivity.com/tours/bali-atv-adventure',
                }
              : isMelukatPost
                ? {
                    '@type': 'TouristTrip',
                    name: 'Tirta Empu Purification (Melukat)',
                    url: 'https://www.sekarbaliactivity.com/tours/tirta-empu-purification',
                  }
                : isActivityHubPost
                  ? {
                      '@type': 'ItemList',
                      name: 'Sekar Bali Activity tours near Ubud',
                      url: 'https://www.sekarbaliactivity.com/experiences',
                    }
                  : isDayTourPost
                    ? {
                        '@type': 'TouristTrip',
                        name:
                          post.slug === 'full-day-ubud-tour-guide-2026'
                            ? 'Full Day Ubud Tour'
                            : 'Half Day Ubud & Tanah Lot Sunset Tour',
                        url:
                          post.slug === 'full-day-ubud-tour-guide-2026'
                            ? 'https://www.sekarbaliactivity.com/tours/full-day-ubud-tour'
                            : 'https://www.sekarbaliactivity.com/tours/half-day-ubud-tanah-lot-tour',
                      }
                    : isCoffeePost
                      ? {
                          '@type': 'TouristTrip',
                          name: 'Luwak Coffee Plantation Experience (Umah Kuno)',
                          url: 'https://www.sekarbaliactivity.com/tours/luwak-coffee-plantation',
                        }
                      : undefined

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.sekarbaliactivity.com/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": [post.image],
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": [{
      "@type": "Person",
      "name": post.author,
      "url": "https://www.sekarbaliactivity.com/about"
    }],
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.sekarbaliactivity.com/#organization",
      "name": "Sekar Bali Activity",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.sekarbaliactivity.com/logo.png"
      }
    },
    ...(articleAbout ? { about: articleAbout } : {}),
    ...(articleKeywords ? { keywords: articleKeywords } : {}),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sekarbaliactivity.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.sekarbaliactivity.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.sekarbaliactivity.com/blog/${post.slug}`
      }
    ]
  }

  return (
    <main className="min-h-screen bg-sand pt-32 pb-16 md:pb-24 transition-colors duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6 space-y-10 md:space-y-12">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-light hover:text-brand-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>

        {/* Header */}
        <header className="space-y-5 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-brand-green leading-tight tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-green-light">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </time>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-md">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <ArticleGeoCta slug={post.slug} />
        {post.slug === 'ubud-workshop-classes-2026' ? <WorkshopClassCards /> : null}

        {/* Content */}
        <article className="blog-content prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-brand-green prose-p:text-brand-green-light prose-li:text-brand-green-light prose-strong:text-brand-green prose-a:text-brand-green hover:prose-a:text-brand-green-light">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

        <ArticleRelatedGuides slug={post.slug} />
        <ArticleBookingCta slug={post.slug} />

      </div>
    </main>
  )
}
