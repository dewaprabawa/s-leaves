import React from 'react'
import TransfersListClient from '../TransfersListClient'
import { TRANSFERS } from '@/data/transfers'

export const FeaturedTransfersBlock = async ({ block }: { block: any }) => {
  const transfers = block.transfers?.length ? block.transfers : TRANSFERS

  return (
    <section className="py-20 px-4 sm:px-6 bg-sand border-t border-b border-brand-green/10">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-accent-gold/12 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-accent-gold-dark border border-accent-gold/20">
            Private Transfers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-green tracking-tight leading-none">
            {block.title}
          </h2>
          {block.subtitle && (
            <p className="text-base sm:text-lg text-brand-green-light leading-relaxed font-medium">
              {block.subtitle}
            </p>
          )}
        </div>

        {/* Transfers Grid List */}
        <TransfersListClient initialTransfers={transfers} />

        {/* CTA Button at bottom */}
        {block.buttonLabel && block.buttonLink && (
          <div className="text-center pt-6">
            <a
              href={block.buttonLink}
              className="inline-flex items-center justify-center rounded-2xl bg-accent-gold hover:bg-accent-gold-dark text-white font-black uppercase tracking-wider text-xs px-8 py-4 shadow-lg shadow-accent-gold/15 hover:shadow-accent-gold/25 active:scale-[0.98] transition-all cursor-pointer border border-accent-gold hover:border-accent-gold-dark"
            >
              {block.buttonLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
