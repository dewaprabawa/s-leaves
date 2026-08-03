import ToursListClient from "@/components/ToursListClient"
import { TOURS } from "@/data/tours"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Explore Curated Tours | S-Leaves",
  description: "Browse our hand-picked day tours, volcano trekking packages, and luxury island expeditions across Bali and Flores.",
}

export default function ToursPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950/40 py-16 px-4 sm:px-6 transition-colors duration-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300 border border-emerald-100/30">
            Guided Adventures
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-white leading-none">
            Curated S-Leaves Experiences
          </h1>
          <p className="text-base sm:text-lg text-gray-550 dark:text-gray-400 font-medium leading-relaxed">
            Embark on unforgettable journeys with our expertly crafted tours. 
            From serene nature walks to thrilling multi-day island expeditions.
          </p>
        </div>

        {/* Sidebar + Filter Grid layout client component */}
        <Suspense fallback={
          <div className="text-center py-24">
            <p className="text-gray-500 font-semibold">Loading experiences catalog...</p>
          </div>
        }>
          <ToursListClient initialTours={TOURS as any} />
        </Suspense>
        
      </div>
    </main>
  )
}
