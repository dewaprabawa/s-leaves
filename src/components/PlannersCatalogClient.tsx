"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import {
  PLANNER_CATEGORY_LABELS,
  PLANNERS,
  type Planner,
  type PlannerCategoryId,
} from "@/data/planners"

const CATEGORY_ORDER: PlannerCategoryId[] = ["pricing", "logistics", "chooser"]

function matchesQuery(planner: Planner, query: string) {
  const q = query.trim().toLowerCase()
  if (!q) return true
  const haystack = [
    planner.h1,
    planner.job,
    planner.description,
    PLANNER_CATEGORY_LABELS[planner.category],
    ...planner.keywords,
  ]
    .join(" ")
    .toLowerCase()
  return q.split(/\s+/).filter(Boolean).every((term) => haystack.includes(term))
}

function PlannerCard({ planner }: { planner: Planner }) {
  return (
    <article className="flex flex-col rounded-2xl border border-brand-green/10 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <span className="text-[10px] font-bold uppercase tracking-wider text-accent-gold-dark">
        {PLANNER_CATEGORY_LABELS[planner.category]}
      </span>
      <h3 className="mt-2 font-display text-xl font-bold uppercase leading-snug text-brand-green">
        <Link href={`/planners/${planner.slug}`} className="hover:text-accent-gold-dark">
          {planner.h1}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-green-light">{planner.job}</p>
      <Link
        href={`/planners/${planner.slug}`}
        className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-gold-dark hover:underline"
      >
        {planner.tryLabel} <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </article>
  )
}

export default function PlannersCatalogClient() {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState<PlannerCategoryId | "all">("all")

  const filtered = useMemo(() => {
    return PLANNERS.filter((planner) => {
      if (category !== "all" && planner.category !== category) return false
      return matchesQuery(planner, query)
    })
  }, [query, category])

  const hasFilters = query.trim().length > 0 || category !== "all"

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-green-light" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search ATV price, pickup, jeep, scooter…"
          autoComplete="off"
          className="h-12 w-full rounded-full border border-brand-green/15 bg-white pl-11 pr-4 text-sm text-brand-green placeholder:text-brand-green-light/70 shadow-sm outline-none transition-colors focus:border-accent-gold"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
            category === "all"
              ? "bg-brand-green text-sand"
              : "bg-white text-brand-green-light border border-brand-green/15 hover:border-accent-gold/40"
          }`}
        >
          All
        </button>
        {CATEGORY_ORDER.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setCategory(id)}
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
              category === id
                ? "bg-brand-green text-sand"
                : "bg-white text-brand-green-light border border-brand-green/15 hover:border-accent-gold/40"
            }`}
          >
            {PLANNER_CATEGORY_LABELS[id]}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-brand-green-light">
          <span className="text-brand-green">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "planner" : "planners"}
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={() => {
              setQuery("")
              setCategory("all")
            }}
            className="text-xs font-bold uppercase tracking-wide text-accent-gold-dark hover:underline"
          >
            Clear filters
          </button>
        ) : null}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-brand-green/10 bg-white py-16 text-center shadow-sm">
          <p className="font-bold text-brand-green">No planners match your search</p>
          <p className="mt-2 text-sm text-brand-green-light">
            Try ATV, jeep, pickup, cooking, or scooter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((planner) => (
            <PlannerCard key={planner.slug} planner={planner} />
          ))}
        </div>
      )}
    </div>
  )
}
