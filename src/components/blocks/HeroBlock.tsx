import React from 'react'
import Image from 'next/image'
import HeroSearchPanel from '../HeroSearchPanel'

export const HeroBlock = ({ block }: { block: any }) => {
  const bgUrl = block.backgroundImage?.url

  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center overflow-hidden bg-ink-soft py-16">
      {bgUrl && (
        <Image 
          src={bgUrl} 
          alt={block.backgroundImage?.alt || block.headline} 
          fill 
          className="object-cover opacity-50 mix-blend-overlay scale-102 transition-transform duration-1000"
          priority
        />
      )}
      {!bgUrl && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] to-[#152238] opacity-90" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center justify-center gap-8">
        <div className="space-y-4">
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold uppercase text-white tracking-tight max-w-4xl mx-auto leading-tight drop-shadow-md">
            {block.headline}
          </h1>
          {block.subheadline && (
            <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
              {block.subheadline}
            </p>
          )}
        </div>
        
        {/* Floating Search Panel */}
        <div className="w-full pt-4">
          <HeroSearchPanel />
        </div>
      </div>
    </section>
  )
}
