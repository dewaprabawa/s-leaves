"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { MapPin, Clock, ArrowRight, Star, Award, ShieldCheck, Heart, Filter, RotateCcw, Search } from "lucide-react"
import { useCurrency } from "@/context/CurrencyContext"

type Props = {
  initialTours: any[]
}

export default function ToursListClient({ initialTours }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { formatPrice } = useCurrency()

  const [search, setSearch] = useState(searchParams.get("search") || "")
  const [category, setCategory] = useState(searchParams.get("category") || "All")
  const [wishlistOnly, setWishlistOnly] = useState(searchParams.get("wishlist") === "true")
  const [wishlist, setWishlist] = useState<string[]>([])

  // Extract all unique category tags from initialTours
  const categories = [
    "All",
    ...Array.from(
      new Set(
        initialTours.flatMap((tour) => tour.categoryTags?.map((tagObj: any) => tagObj.tag) || [])
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

  // Update wishlist filter if URL changes
  useEffect(() => {
    setWishlistOnly(searchParams.get("wishlist") === "true")
  }, [searchParams])

  // Toggle wishlist items
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

  // Filter logic on client-side to ensure smooth user feedback
  const filteredTours = initialTours.filter((tour) => {
    // 1. Wishlist filter
    if (wishlistOnly && !wishlist.includes(tour.id)) return false

    // 2. Search query filter
    if (search.trim()) {
      const query = search.toLowerCase()
      const titleMatch = tour.title?.toLowerCase().includes(query)
      const locationMatch = tour.location?.toLowerCase().includes(query)
      const descMatch = typeof tour.description === "string" 
        ? tour.description.toLowerCase().includes(query)
        : JSON.stringify(tour.description || "").toLowerCase().includes(query)
      
      if (!titleMatch && !locationMatch && !descMatch) return false
    }

    // 3. Category filter
    if (category !== "All") {
      const tagMatch = tour.categoryTags?.some((tagObj: any) => tagObj.tag === category)
      if (!tagMatch) return false
    }

    return true
  })

  const clearAllFilters = () => {
    setSearch("")
    setCategory("All")
    setWishlistOnly(false)
    router.push("/tours")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      
      {/* Left Column: Sidebar Filters */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-250/50 dark:border-gray-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-4">
            <h3 className="font-black text-sm uppercase tracking-wider text-gray-900 dark:text-white flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-emerald-500" /> Filters
            </h3>
            {(search || category !== "All" || wishlistOnly) && (
              <button 
                onClick={clearAllFilters}
                className="text-xs font-bold text-red-500 hover:text-red-650 flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Clear All
              </button>
            )}
          </div>

          {/* Keyword Search */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Where to? e.g. Ubud"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs font-semibold rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-emerald-500 outline-none transition-all text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Categories Radio/Checkboxes */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-gray-700 dark:text-gray-300">Category</label>
            <div className="flex flex-col gap-2">
              {categories.map((cat: any) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    category === cat
                      ? "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-450 border-emerald-500/20"
                      : "bg-white dark:bg-gray-900 border-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Wishlist filter toggle */}
          <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={() => setWishlistOnly(!wishlistOnly)}
              className={`w-full py-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                wishlistOnly
                  ? "bg-red-500 border-red-500 text-white shadow-sm"
                  : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20"
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${wishlistOnly ? "fill-current" : ""}`} />
              <span>{wishlistOnly ? "Showing Favorites" : "Filter Favorites"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Tours List Grid */}
      <div className="lg:col-span-3 space-y-6">
        
        {/* Results Metadata */}
        <div className="bg-white dark:bg-gray-900 p-4 px-6 rounded-3xl border border-gray-250/50 dark:border-gray-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
            Showing <span className="font-bold text-gray-900 dark:text-white">{filteredTours.length}</span> matching experiences
          </p>
          {(search || category !== "All" || wishlistOnly) && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {search && (
                <span className="text-[10px] font-bold bg-gray-100 dark:bg-gray-800 text-gray-650 dark:text-gray-300 px-2.5 py-1 rounded-lg border border-gray-200 dark:border-gray-700">
                  Search: &quot;{search}&quot;
                </span>
              )}
              {category !== "All" && (
                <span className="text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-100/30">
                  Category: {category}
                </span>
              )}
              {wishlistOnly && (
                <span className="text-[10px] font-bold bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-300 px-2.5 py-1 rounded-lg border border-red-100/30">
                  Wishlist Only
                </span>
              )}
            </div>
          )}
        </div>

        {filteredTours.length === 0 ? (
          <div className="text-center py-24 bg-white dark:bg-gray-900 rounded-3xl border border-gray-250/50 dark:border-gray-850 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">No experiences match your search</h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Try modifying your filter settings or search terms.</p>
            <button
              onClick={clearAllFilters}
              className="mt-6 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider shadow-md shadow-emerald-500/10 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => {
              const heroUrl = tour.media?.heroImage?.url || ""
              const basePrice = tour.pricing?.basePrice || (tour as any).basePrice || 0
              const rating = tour.rating || 5
              const reviewCount = tour.reviewCount || 85
              const isBestseller = tour.isBestseller || false
              const isFavorited = wishlist.includes(tour.id)
              
              return (
                <div 
                  key={tour.id} 
                  className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200/60 dark:border-gray-850 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                >
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-950">
                    {heroUrl ? (
                      <Image 
                        src={heroUrl} 
                        alt={tour.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/10 to-teal-900/20" />
                    )}
                    
                    {/* Positioned Overlays */}
                    <div className="absolute inset-x-0 top-0 p-3 flex items-start justify-between z-10 pointer-events-none">
                      <div className="inline-flex items-center gap-1 bg-white/95 dark:bg-gray-950/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-black text-gray-900 dark:text-white shadow-sm border border-gray-150/50 pointer-events-auto">
                        <MapPin className="w-3 h-3 text-emerald-500" /> {tour.location}
                      </div>

                      <div className="flex flex-col items-end gap-1.5 pointer-events-auto">
                        {isBestseller && (
                          <div className="inline-flex items-center gap-1 bg-amber-500 text-white px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-wider shadow-sm border border-amber-400">
                            <Award className="w-3 h-3" /> Bestseller
                          </div>
                        )}
                        <button
                          onClick={(e) => toggleWishlist(tour.id, e)}
                          className={`p-1.5 rounded-full backdrop-blur-md transition-all border shadow-sm cursor-pointer ${
                            isFavorited
                              ? "bg-red-500 border-red-400 text-white"
                              : "bg-white/90 dark:bg-gray-950/90 border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-red-500"
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFavorited ? "fill-current" : ""}`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between gap-5">
                    <div className="space-y-3">
                      {/* Tags */}
                      {tour.categoryTags && tour.categoryTags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {tour.categoryTags.slice(0, 2).map((t: any, idx: number) => (
                            <span 
                              key={idx} 
                              className="text-[8px] font-extrabold tracking-wide uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300 border border-emerald-100/10"
                            >
                              {t.tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h4 className="text-base font-bold text-gray-900 dark:text-white leading-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-450 transition-colors">
                        <Link href={`/tours/${tour.slug}`}>{tour.title}</Link>
                      </h4>

                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, idx) => (
                            <Star 
                              key={idx} 
                              className={`w-3 h-3 ${
                                idx < Math.floor(rating) 
                                  ? "text-amber-500 fill-amber-500" 
                                  : "text-gray-200 dark:text-gray-850"
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-gray-800 dark:text-gray-200">{rating.toFixed(1)}</span>
                        <span className="text-[10px] text-gray-400">({reviewCount})</span>
                      </div>

                      {/* Flex Cancellation */}
                      {tour.hasFreeCancellation !== false && (
                        <div className="text-[10px] font-bold text-emerald-650 dark:text-emerald-450 flex items-center gap-1 mt-1 bg-emerald-50/50 dark:bg-emerald-950/10 px-2 py-0.5 rounded-lg border border-emerald-100/10 w-fit">
                          <ShieldCheck className="w-3 h-3 text-emerald-500" /> Free cancellation
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="pt-3 border-t border-gray-150 dark:border-gray-850 flex items-center justify-between gap-3">
                      <div className="text-[10px] text-gray-450 dark:text-gray-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-emerald-500" /> {tour.duration}
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] text-gray-400 block uppercase font-bold tracking-wider leading-none">From</span>
                        <span className="text-base font-black text-gray-900 dark:text-white">{formatPrice(basePrice)}</span>
                      </div>
                    </div>

                    <Link 
                      href={`/tours/${tour.slug}`}
                      className="w-full inline-flex items-center justify-center rounded-xl bg-gray-50 hover:bg-emerald-600 hover:text-white dark:bg-gray-800/40 dark:hover:bg-emerald-650 px-3 py-2.5 text-[10px] font-black uppercase tracking-wider text-gray-750 dark:text-gray-200 border border-gray-200 dark:border-gray-800 hover:border-emerald-600 cursor-pointer transition-all gap-1"
                    >
                      Explore Tour <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        )}

      </div>
    </div>
  )
}
