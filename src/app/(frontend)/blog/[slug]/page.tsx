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

  return {
    title: `${post.title} | Sekar Bali Activity`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

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
    }
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
    <main className="min-h-screen bg-sand py-10 transition-colors duration-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-3xl mx-auto px-6 space-y-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green-light hover:text-brand-green transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>

        {/* Header */}
        <header className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-brand-green leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-sm text-gray-600">
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
        <article className="prose prose-lg prose-emerald max-w-none prose-headings:font-serif prose-headings:text-brand-green prose-a:text-emerald-600 hover:prose-a:text-emerald-700">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

      </div>
    </main>
  )
}
