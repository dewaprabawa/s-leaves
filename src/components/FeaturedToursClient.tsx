"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock, ArrowRight, Star, Award, ShieldCheck, Heart } from "lucide-react"
import { useCurrency } from "@/context/CurrencyContext"

type Props = {
  tours: any[]
  title: string
  subtitle?: string
}

export default function FeaturedToursClient({ tours, title, subtitle }: Props) {
  const { formatPrice } = useCurrency()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [wishlist, setWishlist] = useState<string[]>([])

  // Extract all unique category tags from the tours
  const categories = [
    "All",
    ...Array.from(
      new Set(
        tours.flatMap((tour) => tour.categoryTags?.map((tagObj: any) => tagObj.tag) || [])
      )
    )
  ]

  // Initialize wishlist from localStorage
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("s_leaves_wishlist") || "[]")
      setWishlist(saved)
    } catch (e) {
      setWishlist([])
    }
  }, [])

  // Toggle tour favorite state in localStorage
  const toggleWishlist = (tourId: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    let updated = [...wishlist]
    if (updated.includes(tourId)) {
      updated = updated.filter((id) => id !== tourId)
    } else {
      updated.push(tourId)
    }
    
    setWishlist(updated)
    localStorage.setItem("s_leaves_wishlist", JSON.stringify(updated))
    window.dispatchEvent(new Event("wishlist_updated"))
  }

  // Filter tours based on selected category
  const filteredTours = selectedCategory === "All"
    ? tours
    : tours.filter((tour) => 
        tour.categoryTags?.some((tagObj: any) => tagObj.tag === selectedCategory)
      )

  return (
    <div className="space-y-10">
      
      {/* Category Slider/Pills Section */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-xs font-black uppercase text-emerald-600 dark:text-emerald-400 tracking-wider mb-2">
            Explore by Interests
          </p>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            Choose Your Travel Style
          </h3>
        </div>
        
        {/* Horizontal Chips List */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl px-4">
          {categories.map((cat: any) => {
            const isActive = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-emerald-600 text-white border-emerald-650 shadow-md shadow-emerald-500/10 scale-[1.02]"
                    : "bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-800 hover:border-gray-350 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-850"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Dynamic Tours Grid */}
      {filteredTours.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 max-w-2xl mx-auto shadow-sm">
          <p className="text-gray-500 dark:text-gray-400 font-semibold">No tours found matching this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.map((tour) => {
            const heroUrl = tour.media?.heroImage?.url || ""
            const basePrice = tour.pricing?.basePrice || 0
            const rating = tour.rating || 5
            const reviewCount = tour.reviewCount || 85
            const isBestseller = tour.isBestseller || false
            const isFavorited = wishlist.includes(tour.id)
            
            return (
              <div 
                key={tour.id} 
                className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200/60 dark:border-gray-850 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                
                {/* Image Section */}
                <div className="relative h-60 w-full overflow-hidden bg-gray-100 dark:bg-gray-950">
                  {heroUrl ? (
                    <Image 
                      src={heroUrl} 
                      alt={tour.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-teal-900/20" />
                  )}
                  
                  {/* Top Overlays */}
                  <div className="absolute inset-x-0 top-0 p-4 flex items-start justify-between z-10 pointer-events-none">
                    
                    {/* Location Badge */}
                    <div className="inline-flex items-center gap-1 bg-white/95 dark:bg-gray-950/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-black text-gray-900 dark:text-white shadow-sm border border-gray-150/50 dark:border-gray-800 pointer-events-auto">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" /> 
                      <span>{tour.location}</span>
                    </div>

                    <div className="flex flex-col items-end gap-2 pointer-events-auto">
                      
                      {/* Bestseller Badge */}
                      {isBestseller && (
                        <div className="inline-flex items-center gap-1 bg-amber-500 text-white px-3.5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm border border-amber-400 animate-pulse">
                          <Award className="w-3.5 h-3.5" /> Bestseller
                        </div>
                      )}

                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => toggleWishlist(tour.id, e)}
                        className={`p-2 rounded-full backdrop-blur-md transition-all border shadow-sm cursor-pointer ${
                          isFavorited
                            ? "bg-red-500 border-red-400 text-white hover:scale-110"
                            : "bg-white/90 dark:bg-gray-950/90 border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-red-500 hover:bg-white"
                        }`}
                        aria-label={isFavorited ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart className={`w-4 h-4 ${isFavorited ? "fill-current" : ""}`} />
                      </button>

                    </div>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                  
                  <div className="space-y-4">
                    {/* Category Tags */}
                    {tour.categoryTags && tour.categoryTags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {tour.categoryTags.map((t: any, idx: number) => (
                          <span 
                            key={idx} 
                            className="text-[9px] font-extrabold tracking-wide uppercase px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300 border border-emerald-100/20"
                          >
                            {t.tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-450 transition-colors">
                      <Link href="/#adventures">
                        {tour.title}
                      </Link>
                    </h3>

                    {/* Ratings */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star 
                            key={idx} 
                            className={`w-3.5 h-3.5 ${
                              idx < Math.floor(rating) 
                                ? "text-amber-500 fill-amber-500" 
                                : "text-gray-200 dark:text-gray-800"
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-gray-850 dark:text-gray-200">
                        {rating.toFixed(1)}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">
                        ({reviewCount.toLocaleString()} reviews)
                      </span>
                    </div>

                    {/* Flexibility Indicator */}
                    {tour.hasFreeCancellation !== false && (
                      <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-md border border-emerald-100 dark:border-emerald-800/50">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Free cancellation up to 24h before
                      </span>
                    )}
                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="pt-4 border-t border-gray-150 dark:border-gray-800 flex items-center justify-between gap-4">
                    <div className="text-xs text-gray-450 dark:text-gray-400 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-emerald-500" /> 
                      <span className="font-semibold">{tour.duration}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] text-gray-400 dark:text-gray-500 block uppercase font-black tracking-wider leading-none">From</span>
                      <span className="text-lg font-black text-gray-900 dark:text-white">{formatPrice(basePrice)}</span>
                      <span className="text-[9px] text-gray-400 dark:text-gray-500 block leading-none mt-0.5">per adult</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <Link 
                      href="/#adventures"
                      className="w-full inline-flex items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800/40 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-650 dark:hover:text-white px-4 py-3 text-xs font-black uppercase tracking-wider text-gray-750 dark:text-gray-200 transition-all gap-1.5 border border-gray-200 dark:border-gray-800 hover:border-emerald-600 cursor-pointer"
                    >
                      View Experience <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
