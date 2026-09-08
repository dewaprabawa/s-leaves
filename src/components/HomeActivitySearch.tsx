"use client"

import React, { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { searchTours, getTourCategoryLabel, type Tour } from "@/data/tours"

type Props = {
  className?: string
}

export default function HomeActivitySearch({ className = "" }: Props) {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Tour[]>([])
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    function onOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onOutside)
    return () => document.removeEventListener("mousedown", onOutside)
  }, [])

  const onChange = (value: string) => {
    setQuery(value)
    const next = searchTours(value, 6)
    setResults(next)
    setOpen(value.trim().length >= 2)
  }

  const goTo = (tour: Tour) => {
    setOpen(false)
    setQuery(tour.title)
    router.push(`/tours/${tour.slug}`)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (results[0]) {
      goTo(results[0])
      return
    }
    const q = query.trim()
    if (q) {
      router.push(`/#experiences`)
    } else {
      router.push("/#experiences")
    }
    setOpen(false)
  }

  return (
    <form
      ref={wrapRef}
      onSubmit={onSubmit}
      className={`relative w-full max-w-xl ${className}`}
    >
      <label htmlFor="home-activity-search" className="sr-only">
        Search Bali activities and tours
      </label>
      <div className="flex items-stretch overflow-hidden rounded-full bg-white/95 shadow-[0_12px_40px_rgba(10,22,40,0.28)] border border-white/40">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-green-light" />
          <input
            id="home-activity-search"
            type="search"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => {
              if (query.trim().length >= 2 && results.length > 0) setOpen(true)
            }}
            placeholder="Search ATV, cooking, cycling, Ubud day tours…"
            autoComplete="off"
            className="h-12 md:h-14 w-full bg-transparent pl-11 pr-3 text-sm md:text-base text-brand-green placeholder:text-brand-green-light/70 outline-none"
          />
        </div>
        <button
          type="submit"
          className="shrink-0 m-1.5 px-5 md:px-7 rounded-full btn-gold-shimmer font-bold text-xs md:text-sm uppercase tracking-wider"
        >
          Search
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden rounded-2xl border border-brand-green/10 bg-white shadow-xl">
          {results.length === 0 ? (
            <p className="px-4 py-3 text-sm text-brand-green-light">
              No exact match — browse all experiences below.
            </p>
          ) : (
            <ul className="max-h-72 overflow-y-auto py-1">
              {results.map((tour) => (
                <li key={tour.id}>
                  <button
                    type="button"
                    onClick={() => goTo(tour)}
                    className="flex w-full flex-col items-start gap-0.5 px-4 py-3 text-left hover:bg-sand transition-colors"
                  >
                    <span className="text-sm font-semibold text-brand-green">
                      {tour.title}
                    </span>
                    <span className="text-xs text-brand-green-light">
                      {getTourCategoryLabel(tour.category)}
                      {tour.area ? ` · ${tour.area}` : ""} · from IDR{" "}
                      {tour.basePrice.toLocaleString("id-ID")}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </form>
  )
}
