"use client"

import type { MouseEvent } from "react"
import { Check, ListPlus } from "lucide-react"
import { useConsultationInterests } from "@/hooks/useConsultationInterests"
import { MAX_CONSULTATION_INTERESTS } from "@/lib/consultationInterests"

type Variant = "icon" | "chip" | "row"

type Props = {
  slug: string
  title: string
  variant?: Variant
  className?: string
}

export default function AskAboutActivityButton({
  slug,
  title,
  variant = "chip",
  className = "",
}: Props) {
  const { has, toggle, items } = useConsultationInterests()
  const selected = has(slug)
  const listFull = !selected && items.length >= MAX_CONSULTATION_INTERESTS

  const onClick = (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    if (listFull) return
    toggle({ slug, title })
  }

  const label = selected ? "On your list" : listFull ? "List is full" : "Ask about this"
  const ariaLabel = selected
    ? `Remove ${title} from consultation list`
    : listFull
      ? `Consultation list is full (max ${MAX_CONSULTATION_INTERESTS})`
      : `Add ${title} to consultation list`

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={listFull}
        aria-pressed={selected}
        aria-label={ariaLabel}
        title={label}
        className={`z-10 flex h-9 w-9 items-center justify-center rounded-full shadow-md transition-transform hover:scale-110 disabled:cursor-not-allowed disabled:opacity-60 ${
          selected
            ? "bg-brand-green text-sand"
            : "bg-white text-brand-green"
        } ${className}`}
      >
        {selected ? <Check className="h-4 w-4" /> : <ListPlus className="h-4 w-4" />}
      </button>
    )
  }

  if (variant === "row") {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={listFull}
        aria-pressed={selected}
        className={`w-full flex items-center justify-center gap-2 h-12 rounded-full border-2 font-bold text-sm uppercase tracking-wider transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
          selected
            ? "border-brand-green bg-brand-green text-sand"
            : "border-brand-green/20 bg-white text-brand-green hover:border-brand-green/50 hover:bg-brand-green/5"
        } ${className}`}
      >
        {selected ? <Check className="w-4 h-4" /> : <ListPlus className="w-4 h-4" />}
        {label}
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={listFull}
      aria-pressed={selected}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
        selected
          ? "border-brand-green bg-brand-green text-sand"
          : "border-brand-green/20 bg-white text-brand-green hover:border-brand-green/40"
      } ${className}`}
    >
      {selected ? <Check className="h-3.5 w-3.5" /> : <ListPlus className="h-3.5 w-3.5" />}
      {label}
    </button>
  )
}
