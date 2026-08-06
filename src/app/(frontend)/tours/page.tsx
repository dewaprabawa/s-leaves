import ToursListClient from "@/components/ToursListClient"
import { TOURS } from "@/data/tours"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Explore Curated Tours | Sekar Bali Activity",
  description: "Browse our hand-picked day tours, volcano trekking packages, and luxury island expeditions across Bali and Flores.",
}

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-sand py-16 px-4 sm:px-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-brand-green border border-brand-green/20">
            Guided Adventures
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-green leading-none">
            Curated Sekar Bali Experiences
          </h1>
          <p className="text-base sm:text-lg text-brand-green-light font-medium leading-relaxed">
            Embark on unforgettable journeys with our expertly crafted tours. 
            From serene nature walks to thrilling multi-day island expeditions.
          </p>
        </div>

        {/* Sidebar + Filter Grid layout client component */}
        <Suspense fallback={
          <div className="text-center py-24">
            <p className="text-brand-green-light font-semibold">Loading experiences catalog...</p>
          </div>
        }>
          <ToursListClient initialTours={TOURS as any} />
        </Suspense>
        
      </div>
    </main>
  )
}
