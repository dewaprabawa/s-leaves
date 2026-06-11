import React from 'react'
import { getPayload } from '@/lib/payload'
import TransfersListClient from '../TransfersListClient'

export const FeaturedTransfersBlock = async ({ block }: { block: any }) => {
  const payload = await getPayload()
  let transfers: any[] = []

  if (payload) {
    try {
      if (block.transfers && block.transfers.length > 0) {
        // Resolve selected transfers relationship
        const firstItem = block.transfers[0]
        if (typeof firstItem === 'object' && firstItem !== null && 'slug' in firstItem) {
          transfers = block.transfers
        } else {
          const ids = block.transfers.map((t: any) => typeof t === 'object' ? t.id : t)
          const { docs } = await payload.find({
            collection: 'transfers',
            where: {
              id: { in: ids }
            },
            depth: 2,
            limit: ids.length,
          })
          transfers = ids.map((id: string) => docs.find((doc: any) => doc.id === id)).filter(Boolean)
        }
      }
    } catch (e) {
      console.error('Failed to resolve selected transfers for block:', e)
    }

    if (transfers.length === 0) {
      try {
        const { docs } = await payload.find({
          collection: 'transfers',
          limit: 10,
          depth: 2,
        })
        transfers = docs
      } catch (e) {
        console.error('Failed to fetch fallback transfers for block:', e)
      }
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-950 border-t border-b border-gray-200/50 dark:border-gray-900/40">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300 border border-emerald-100/30">
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
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-black uppercase tracking-wider text-xs px-8 py-4 shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 active:scale-[0.98] transition-all cursor-pointer border border-emerald-600 hover:border-emerald-500"
            >
              {block.buttonLabel}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
