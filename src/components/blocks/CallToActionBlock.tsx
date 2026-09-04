import React from 'react'
import Link from 'next/link'

export const CallToActionBlock = ({ block }: { block: any }) => {
  return (
    <section className="py-24 px-6 section-atmosphere">
      <div className="max-w-4xl mx-auto text-center space-y-8 bg-white p-12 border border-brand-green/10">
        <div className="space-y-4">
          <h2 className="font-display text-4xl font-bold uppercase text-brand-green tracking-tight">
            {block.title}
          </h2>
          {block.text && (
            <p className="text-xl text-brand-green-light max-w-2xl mx-auto">
              {block.text}
            </p>
          )}
        </div>
        
        <div className="pt-4">
          <Link 
            href={block.buttonLink}
            className="inline-flex items-center justify-center rounded-full btn-gold-shimmer px-8 py-4 text-lg font-semibold hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
          >
            {block.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
