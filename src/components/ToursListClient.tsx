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
        <div className="bg-white p-6 rounded-3xl border border-brand-green/10 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-brand-green/10 pb-4">
            <h3 className="font-black text-sm uppercase tracking-wider text-brand-green flex items-center gap-1.5">
              <Filter className="w-4 h-4 text-brand-green" /> Filters
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
            <label className="block text-xs font-bold text-brand-green">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green-light" />
              <input
                type="text"
                placeholder="Where to? e.g. Ubud"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 text-xs font-semibold rounded-xl bg-sand border border-brand-green/20 focus:border-brand-green outline-none transition-all text-brand-green"
              />
            </div>
          </div>

          {/* Categories Radio/Checkboxes */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-brand-green">Category</label>
            <div className="flex flex-col gap-2">
              {categories.map((cat: any) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`w-full text-left px-3 py-2 text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                    category === cat
                      ? "bg-brand-green/10 text-brand-green border-brand-green/20"
                      : "bg-white border-transparent text-brand-green-light hover:bg-sand"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Wishlist filter toggle */}
          <div className="space-y-2 pt-2 border-t border-brand-green/10">
            <button
              onClick={() => setWishlistOnly(!wishlistOnly)}
              className={`w-full py-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                wishlistOnly
                  ? "bg-red-500 border-red-500 text-white shadow-sm"
                  : "bg-white border-brand-green/10 text-red-500 hover:bg-red-50"
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
        <div className="bg-white p-4 px-6 rounded-3xl border border-brand-green/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs font-semibold text-brand-green-light">
            Showing <span className="font-bold text-brand-green">{filteredTours.length}</span> matching experiences
          </p>
          {(search || category !== "All" || wishlistOnly) && (
            <div className="flex items-center gap-1.5 flex-wrap">
              {search && (
                <span className="text-[10px] font-bold bg-sand text-brand-green px-2.5 py-1 rounded-lg border border-brand-green/20">
                  Search: &quot;{search}&quot;
                </span>
              )}
              {category !== "All" && (
                <span className="text-[10px] font-bold bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-lg border border-brand-green/20">
                  Category: {category}
                </span>
              )}
              {wishlistOnly && (
                <span className="text-[10px] font-bold bg-red-50 text-red-700 px-2.5 py-1 rounded-lg border border-red-100/30">
                  Wishlist Only
                </span>
              )}
            </div>
          )}
        </div>

        {filteredTours.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-brand-green/10 shadow-sm">
            <h3 className="text-lg font-bold text-brand-green">No experiences match your search</h3>
            <p className="mt-2 text-sm text-brand-green-light">Try modifying your filter settings or search terms.</p>
            <button
              onClick={clearAllFilters}
              className="mt-6 px-6 py-2.5 rounded-full bg-brand-green hover:bg-brand-green-light text-sand text-xs font-black uppercase tracking-wider shadow-md shadow-brand-green/10 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => {
              const heroUrl = tour.media?.heroImage?.url || (tour as any).heroImage?.url || ""
              const basePrice = tour.pricing?.basePrice || (tour as any).basePrice || 0
              const rating = tour.rating || 5
              const reviewCount = tour.reviewCount || 85
              const isBestseller = tour.isBestseller || false
              const isFavorited = wishlist.includes(tour.id)
              
              return (
                <div 
                  key={tour.id} 
                  className="group bg-white rounded-3xl overflow-hidden border border-brand-green/10 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
                >
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-sand">
                    {heroUrl ? (
                      <Image 
                        src={heroUrl} 
                        alt={tour.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/10 to-brand-green-light/20" />
                    )}
                    
                    {/* Positioned Overlays */}
                    <div className="absolute inset-x-0 top-0 p-3 flex items-start justify-between z-10 pointer-events-none">
                      <div className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[9px] font-black text-brand-green shadow-sm border border-brand-green/10 pointer-events-auto">
                        <MapPin className="w-3 h-3 text-brand-green" /> {(tour as any).location || "Bali"}
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
                              : "bg-white/90 border-brand-green/10 text-brand-green-light hover:text-red-500"
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
                              className="text-[8px] font-extrabold tracking-wide uppercase px-2 py-0.5 rounded bg-brand-green/10 text-brand-green border border-brand-green/20"
                            >
                              {t.tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h4 className="text-base font-bold text-brand-green leading-tight group-hover:text-brand-green-light transition-colors">
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
                                  : "text-brand-green/20"
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-brand-green">{rating.toFixed(1)}</span>
                        <span className="text-[10px] text-brand-green-light/60">({reviewCount})</span>
                      </div>

                      {/* Flex Cancellation */}
                      {tour.hasFreeCancellation !== false && (
                        <Link
                          href="/cancellation-policy"
                          className="text-[10px] font-bold text-brand-green flex items-center gap-1 mt-1 bg-brand-green/5 px-2 py-0.5 rounded-lg border border-brand-green/10 w-fit hover:bg-brand-green/10 transition-colors"
                        >
                          <ShieldCheck className="w-3 h-3 text-brand-green" /> Free cancellation
                        </Link>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="pt-3 border-t border-brand-green/10 flex items-center justify-between gap-3">
                      <div className="text-[10px] text-brand-green-light flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-green" /> {tour.duration}
                      </div>
                      <div className="text-right">
                        <span className="text-[8px] text-brand-green-light/60 block uppercase font-bold tracking-wider leading-none">From</span>
                        <span className="text-base font-black text-brand-green">{formatPrice(basePrice)}</span>
                      </div>
                    </div>

                    <Link 
                      href={`/tours/${tour.slug}`}
                      className="w-full inline-flex items-center justify-center rounded-xl bg-sand hover:bg-brand-green hover:text-sand px-3 py-2.5 text-[10px] font-black uppercase tracking-wider text-brand-green border border-brand-green/20 hover:border-brand-green cursor-pointer transition-all gap-1"
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
