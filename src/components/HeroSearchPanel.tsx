"use client"

import React, { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { Search, Calendar, Compass } from "lucide-react"

export default function HeroSearchPanel() {
  const router = useRouter()
  const [search, setSearch] = useState("")
  const [date, setDate] = useState("")
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close suggestions if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleInputChange = async (val: string) => {
    setSearch(val)
    if (val.trim().length >= 2) {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/tours?where[title][like]=${encodeURIComponent(val.trim())}&limit=5`)
        if (res.ok) {
          const data = await res.json()
          setSuggestions(data.docs || [])
          setShowSuggestions(true)
        }
      } catch (err) {
        console.error("Failed to fetch autocomplete suggestions", err)
      } finally {
        setIsLoading(false)
      }
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (search.trim()) params.set("search", search.trim())
    if (date) params.set("date", date)
    
    router.push(`/#adventures`)
  }

  return (
    <form 
      onSubmit={handleSearch}
      className="w-full max-w-3xl mx-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-md p-4 sm:p-5 rounded-3xl shadow-2xl border border-gray-200/60 dark:border-gray-800/80 flex flex-col md:flex-row items-center gap-4 transition-all duration-300 hover:shadow-sky-500/5 z-40"
    >
      
      {/* Destination Field with Autocomplete */}
      <div ref={dropdownRef} className="flex-1 w-full relative group">
        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-wider mb-1 ml-1.5">Where to?</label>
        <div className="relative">
          <Compass className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-500 group-hover:scale-110 transition-transform duration-200" />
          <input
            type="text"
            placeholder="e.g. Ubud, Komodo, Kintamani..."
            value={search}
            onChange={(e) => handleInputChange(e.target.value)}
            onFocus={() => {
              if (search.trim().length >= 2 && suggestions.length > 0) {
                setShowSuggestions(true)
              }
            }}
            className="w-full pl-10 pr-4 py-2.5 text-sm font-semibold rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 focus:border-sky-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-4 focus:ring-sky-500/10 text-gray-900 dark:text-white placeholder-gray-450 outline-none transition-all"
          />
        </div>

        {/* Suggestions Dropdown panel */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-900 border border-gray-200/60 dark:border-gray-800/80 rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800 animate-in fade-in slide-in-from-top-2 duration-150">
            {suggestions.map((tour) => (
              <div
                key={tour.id}
                onClick={() => {
                  setSearch(tour.title)
                  setShowSuggestions(false)
                  router.push('/#adventures')
                }}
                className="flex items-center gap-3 px-4 py-3 hover:bg-sky-50 dark:hover:bg-sky-950/20 cursor-pointer transition-colors"
              >
                <Compass className="w-4 h-4 text-sky-500 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <span className="block text-sm font-bold text-gray-900 dark:text-white truncate">{tour.title}</span>
                  <span className="block text-[9px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-wider leading-none mt-1">{tour.duration || "Experience"}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Date Picker Field */}
      <div className="w-full md:w-64 relative group">
        <label className="block text-[10px] font-black uppercase text-gray-400 tracking-wider mb-1 ml-1.5">When?</label>
        <div className="relative">
          <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-500" />
          <input
            type="date"
            value={date}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setDate(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm font-semibold rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 focus:border-sky-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-4 focus:ring-sky-500/10 text-gray-900 dark:text-white placeholder-gray-450 outline-none transition-all cursor-pointer"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full md:w-auto md:self-end px-8 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer md:h-[42px] md:mb-[1px]"
      >
        <Search className="w-4 h-4" />
        <span>Search</span>
      </button>

    </form>
  )
}
