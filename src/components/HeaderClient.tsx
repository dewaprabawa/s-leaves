"use client"

import React, { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useCurrency, type Currency } from "@/context/CurrencyContext"
import { Search, Globe, Heart, Menu, X, Landmark, Compass, Calendar, ShieldCheck, Award } from "lucide-react"

type Props = {
  siteName: string
  logoUrl?: string
}

export default function HeaderClient({ siteName, logoUrl }: Props) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { currency, setCurrency, currencySymbol } = useCurrency()
  
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")
  const [wishlistCount, setWishlistCount] = useState(0)
  
  const [suggestions, setSuggestions] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showMobileSuggestions, setShowMobileSuggestions] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const desktopDropdownRef = useRef<HTMLFormElement>(null)
  const mobileDropdownRef = useRef<HTMLFormElement>(null)

  // Sync search input with URL search parameters
  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "")
  }, [searchParams])

  // Fetch wishlist count from localStorage
  useEffect(() => {
    const updateCount = () => {
      try {
        const list = JSON.parse(localStorage.getItem("s_leaves_wishlist") || "[]")
        setWishlistCount(list.length)
      } catch (e) {
        setWishlistCount(0)
      }
    }
    
    updateCount()
    window.addEventListener("wishlist_updated", updateCount)
    window.addEventListener("storage", updateCount)
    return () => {
      window.removeEventListener("wishlist_updated", updateCount)
      window.removeEventListener("storage", updateCount)
    }
  }, [])

  // Close suggestions if clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target as Node)) {
        setShowMobileSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearchChange = async (val: string, isMobile: boolean) => {
    setSearchQuery(val)
    if (val.trim().length >= 2) {
      setIsLoading(true)
      try {
        const res = await fetch(`/api/tours?where[title][like]=${encodeURIComponent(val.trim())}&limit=5`)
        if (res.ok) {
          const data = await res.json()
          setSuggestions(data.docs || [])
          if (isMobile) {
            setShowMobileSuggestions(true)
            setShowSuggestions(false)
          } else {
            setShowSuggestions(true)
            setShowMobileSuggestions(false)
          }
        }
      } catch (err) {
        console.error("Failed to fetch autocomplete suggestions", err)
      } finally {
        setIsLoading(false)
      }
    } else {
      setSuggestions([])
      setShowSuggestions(false)
      setShowMobileSuggestions(false)
    }
  }

  const selectSuggestion = (tour: any) => {
    setSearchQuery(tour.title)
    setShowSuggestions(false)
    setShowMobileSuggestions(false)
    router.push(`/tours/${tour.slug}`)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuggestions(false)
    setShowMobileSuggestions(false)
    if (searchQuery.trim()) {
      router.push(`/tours?search=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      router.push("/tours")
    }
  }

  const selectCurrency = (c: Currency) => {
    setCurrency(c)
    setIsCurrencyOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-gray-950/90 border-b border-gray-200/80 dark:border-gray-800/80 shadow-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2 group">
            <img 
              src={logoUrl || "/logo.png"} 
              alt={`${siteName} Logo`} 
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent font-extrabold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {siteName}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600 dark:text-gray-300">
            <Link href="/tours" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tours</Link>
            <Link href="/transfers" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Transfers</Link>
            <Link href="/about" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Center: Search Bar */}
        <form 
          ref={desktopDropdownRef}
          onSubmit={handleSearchSubmit} 
          className="hidden md:flex flex-1 max-w-sm relative z-40"
        >
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search things to do..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value, false)}
              onFocus={() => {
                if (searchQuery.trim().length >= 2 && suggestions.length > 0) {
                  setShowSuggestions(true)
                }
              }}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-gray-150/60 dark:bg-gray-800/60 border border-transparent focus:border-emerald-500 focus:bg-white dark:focus:bg-gray-900 focus:ring-2 focus:ring-emerald-500/20 text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all"
            />
          </div>

          {/* Suggestions Dropdown panel */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-900 border border-gray-200/60 dark:border-gray-800/80 rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800 animate-in fade-in slide-in-from-top-2 duration-150">
              {suggestions.map((tour) => (
                <div
                  key={tour.id}
                  onClick={() => selectSuggestion(tour)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 cursor-pointer transition-colors"
                >
                  <Compass className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0 text-left">
                    <span className="block text-sm font-bold text-gray-900 dark:text-white truncate">{tour.title}</span>
                    <span className="block text-[9px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-wider leading-none mt-1">{tour.duration || "Experience"}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </form>

        {/* Right Side: Utils & Actions */}
        <div className="flex items-center gap-4 shrink-0">
          
          {/* Wishlist Link */}
          <Link 
            href="/tours?wishlist=true" 
            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors relative"
            aria-label="View Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlistCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-emerald-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Currency Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-800 transition-all cursor-pointer"
            >
              <Globe className="w-4 h-4 text-gray-400" />
              <span>{currency} ({currencySymbol})</span>
            </button>

            {isCurrencyOpen && (
              <>
                <div 
                  className="fixed inset-0 z-10" 
                  onClick={() => setIsCurrencyOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 border border-gray-250 dark:border-gray-850 rounded-xl shadow-xl z-20 py-1.5 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1 text-[10px] font-black uppercase text-gray-400 tracking-wider">
                    Select Currency
                  </div>
                  {(["USD", "EUR", "IDR"] as Currency[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => selectCurrency(c)}
                      className={`w-full text-left px-4 py-2 text-sm font-semibold flex items-center justify-between ${
                        currency === c 
                          ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-450" 
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
                      } transition-colors cursor-pointer`}
                    >
                      <span>{c === "USD" ? "US Dollar" : c === "EUR" ? "Euro" : "Indonesian Rupiah"}</span>
                      <span className="text-xs text-gray-450 font-bold">{c}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Admin Panel Button */}
          <Link
            href="/admin"
            className="hidden md:inline-flex items-center justify-center rounded-xl bg-gray-900 dark:bg-gray-100 hover:bg-gray-850 dark:hover:bg-white text-white dark:text-gray-950 px-4 py-2 text-sm font-semibold transition-all shadow-sm shadow-gray-950/10"
          >
            Admin Panel
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-650 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg lg:hidden transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-250/50 dark:border-gray-800 bg-white dark:bg-gray-950 px-6 py-6 space-y-6 animate-in slide-in-from-top duration-200">
          
          {/* Mobile Search */}
          <form 
            ref={mobileDropdownRef}
            onSubmit={handleSearchSubmit} 
            className="relative w-full z-45"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value, true)}
              onFocus={() => {
                if (searchQuery.trim().length >= 2 && suggestions.length > 0) {
                  setShowMobileSuggestions(true)
                }
              }}
              className="w-full pl-9 pr-4 py-2 text-sm rounded-xl bg-gray-100 dark:bg-gray-800 border-none text-gray-900 dark:text-white outline-none"
            />

            {/* Suggestions Dropdown panel */}
            {showMobileSuggestions && suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-gray-900 border border-gray-200/60 dark:border-gray-800/80 rounded-2xl shadow-xl z-50 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800 animate-in fade-in slide-in-from-top-2 duration-150">
                {suggestions.map((tour) => (
                  <div
                    key={tour.id}
                    onClick={() => {
                      selectSuggestion(tour)
                      setIsMobileMenuOpen(false)
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-emerald-50 dark:hover:bg-emerald-950/20 cursor-pointer transition-colors"
                  >
                    <Compass className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0 text-left">
                      <span className="block text-sm font-bold text-gray-900 dark:text-white truncate">{tour.title}</span>
                      <span className="block text-[9px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-wider leading-none mt-1">{tour.duration || "Experience"}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </form>

          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-4 text-base font-semibold text-gray-700 dark:text-gray-200">
            <Link 
              href="/tours" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 py-1"
            >
              Tours
            </Link>
            <Link 
              href="/transfers" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 py-1"
            >
              Transfers
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 py-1"
            >
              About Us
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 py-1"
            >
              Contact
            </Link>
            <Link 
              href="/admin" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-emerald-600 dark:hover:text-emerald-400 py-1 border-t border-gray-100 dark:border-gray-900 pt-4"
            >
              Admin Panel
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
