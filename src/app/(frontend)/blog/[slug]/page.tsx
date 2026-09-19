import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Calendar, User } from 'lucide-react'
import { BLOG_POSTS } from '@/data/blog'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug)

  if (!post) return { title: 'Article Not Found' }

  const keywords =
    post.slug === 'mount-batur-sunrise-jeep-tour-guide-2026' ||
    post.slug === 'mount-batur-jeep-vs-sunrise-trek' ||
    post.slug === 'mount-batur-jeep-pickup-times-canggu-ubud-2026' ||
    post.slug === 'mount-batur-sunrise-jeep-tour-price-guide-2026'
      ? [
          'Mount Batur sunrise jeep tour',
          'Mount Batur jeep vs trek',
          'Kintamani sunrise jeep',
          'Batur sunrise without hiking',
          'Mount Batur jeep pickup time',
        ]
      : post.slug === 'cooking-class-ubud-price-2026-worth-it' ||
          post.slug === 'vegetarian-vegan-cooking-class-ubud' ||
          post.slug === 'morning-vs-afternoon-ubud-cooking-class'
        ? [
            'cooking class Ubud price',
            'Tumang cooking class',
            'cooking class Ubud worth it',
            'vegetarian cooking class Ubud',
            'Balinese cooking class Ubud',
          ]
        : undefined

  return {
    title: post.title,
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

  const isBaturJeepPost =
    post.slug === 'mount-batur-sunrise-jeep-tour-guide-2026' ||
    post.slug === 'mount-batur-jeep-vs-sunrise-trek' ||
    post.slug === 'mount-batur-jeep-pickup-times-canggu-ubud-2026' ||
    post.slug === 'mount-batur-sunrise-jeep-tour-price-guide-2026'

  const isCookingPost =
    post.slug === 'cooking-class-ubud-price-2026-worth-it' ||
    post.slug === 'vegetarian-vegan-cooking-class-ubud' ||
    post.slug === 'morning-vs-afternoon-ubud-cooking-class' ||
    post.slug === 'inside-balinese-cooking-class-pejeng' ||
    post.slug === 'cycling-cooking-class-ubud-full-day-itinerary'

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
    ...(isBaturJeepPost
      ? {
          about: {
            "@type": "TouristTrip",
            name: "Mount Batur Sunrise Jeep Tour",
            url: "https://www.sekarbaliactivity.com/tours/batur-sunrise-jeep-tour",
          },
          keywords:
            "Mount Batur sunrise jeep, Kintamani, no hike, Lake Batur, Mount Agung, private 4x4, meals not included",
        }
      : isCookingPost
        ? {
            about: {
              "@type": "TouristTrip",
              name: "Tumang Bali Cooking Class near Ubud",
              url: "https://www.sekarbaliactivity.com/tours/balinese-cooking-class",
            },
            keywords:
              "cooking class Ubud, Tumang Bali Cooking Class, vegetarian cooking class, market tour, free Ubud pickup",
          }
        : {}),
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

        {/* Content */}
        <article className="blog-content prose prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-brand-green prose-p:text-brand-green-light prose-li:text-brand-green-light prose-strong:text-brand-green prose-a:text-brand-green hover:prose-a:text-brand-green-light">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

      </div>
    </main>
  )
}
