import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

export const TestimonialsBlock = ({ block }: { block: any }) => {
  const reviews = block.reviews || []

  return (
    <section className="py-24 px-6 bg-sand">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-gold/12 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-gold-dark border border-accent-gold/20">
            Reviews
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-green tracking-tight">
            {block.title}
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev: any, i: number) => {
            const avatarUrl = rev.avatar?.url || ''
            const starCount = rev.rating || 5

            return (
              <div 
                key={rev.id || i}
                className="bg-sand dark:bg-gray-900/50 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-800/80 shadow-sm flex flex-col justify-between space-y-8 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                {/* Rating & Quote */}
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star 
                        key={idx} 
                        className={`w-4 h-4 ${
                          idx < starCount 
                            ? 'text-amber-500 fill-amber-500' 
                            : 'text-gray-300 dark:text-gray-700'
                        }`} 
                      />
                    ))}
                  </div>

                  <p className="text-brand-green-light italic text-sm leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-brand-green/10">
                  {avatarUrl ? (
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-brand-green/15 bg-gray-250">
                      <Image 
                        src={avatarUrl} 
                        alt={rev.author} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-accent-gold/15 flex items-center justify-center font-bold text-accent-gold-dark uppercase shrink-0">
                      {rev.author[0]}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-brand-green truncate">{rev.author}</h4>
                    <p className="text-[11px] text-brand-green-light mt-0.5 truncate">{rev.role}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
