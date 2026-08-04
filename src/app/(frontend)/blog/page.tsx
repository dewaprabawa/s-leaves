import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { BLOG_POSTS } from '@/data/blog'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Travel Guide | Sekar Bali Activity',
  description: 'Read the latest travel tips, cultural insights, and stories from Pejeng and Ubud, Bali.',
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
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
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
