import React from 'react'
import TransfersListClient from '../TransfersListClient'
import { TRANSFERS } from '@/data/transfers'

export const FeaturedTransfersBlock = async ({ block }: { block: any }) => {
  const transfers = block.transfers?.length ? block.transfers : TRANSFERS

  return (
    <section className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-950 border-t border-b border-gray-200/50 dark:border-gray-900/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-sky-700 dark:bg-sky-950/30 dark:text-sky-300 border border-sky-100/30">
            Private Transfers
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
            {block.title}
          </h2>
          {block.subtitle && (
            <p className="text-base sm:text-lg text-gray-550 dark:text-gray-400 leading-relaxed font-medium">
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
              className="inline-flex items-center justify-center rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-black uppercase tracking-wider text-xs px-8 py-4 shadow-lg shadow-sky-600/10 hover:shadow-sky-600/20 active:scale-[0.98] transition-all cursor-pointer border border-sky-600 hover:border-sky-500"
            >
              {block.buttonLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
