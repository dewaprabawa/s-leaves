"use client"

import { formatIdr } from "@/lib/whatsapp"

type FormatFn = (amount: number) => string

type PromoPriceProps = {
  price: number
  originalPrice: number
  format?: FormatFn
  /** Show "From" prefix on sale price */
  from?: boolean
  /** Visual style preset */
  variant?: "inline" | "badge" | "total" | "card"
  /** Optional tier label e.g. "3+ group rate" */
  tierLabel?: string
  className?: string
}

export default function PromoPrice({
  price,
  originalPrice,
  format = formatIdr,
  from = false,
  variant = "inline",
  tierLabel,
  className = "",
}: PromoPriceProps) {
  const savings = originalPrice - price
  const hasPromo = savings > 0

  if (!hasPromo) {
    if (variant === "badge") {
      return (
        <div
          className={`bg-accent-gold text-brand-green text-xs font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-wide ${className}`}
        >
          {from ? "From " : ""}
          {format(price)}
        </div>
      )
    }
    if (variant === "total") {
      return (
        <span className={`text-3xl font-bold text-brand-green ${className}`}>
          {format(price)}
        </span>
      )
    }
    if (variant === "card") {
      return (
        <p className={`font-display text-2xl font-bold text-brand-green ${className}`}>
          {from ? "From " : ""}
          {format(price)}
        </p>
      )
    }
    return (
      <span className={`text-2xl md:text-3xl font-display font-bold text-brand-green ${className}`}>
        {from ? "From " : ""}
        {format(price)}
      </span>
    )
  }

  if (variant === "badge") {
    return (
      <div className={`flex flex-col items-end gap-1.5 ${className}`}>
        <span className="bg-brand-green text-sand text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg uppercase tracking-wide">
          Save {format(savings)}
        </span>
        <div className="bg-accent-gold text-brand-green text-xs font-bold px-4 py-2 rounded-full shadow-lg uppercase tracking-wide text-right">
          <span className="block text-[10px] line-through opacity-70 font-semibold normal-case tracking-normal">
            {format(originalPrice)}
          </span>
          <span>
            {from ? "From " : ""}
            {format(price)}
          </span>
        </div>
      </div>
    )
  }

  if (variant === "total") {
    return (
      <div className={`text-right ${className}`}>
        {tierLabel ? (
          <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-green mb-0.5">
            {tierLabel}
          </span>
        ) : null}
        <span className="block text-sm text-brand-green-light line-through opacity-70">
          {format(originalPrice)}
        </span>
        <span className="text-3xl font-bold text-brand-green">{format(price)}</span>
        <span className="block text-xs font-bold text-brand-green mt-0.5">
          Save {format(savings)}
        </span>
      </div>
    )
  }

  if (variant === "card") {
    return (
      <div className={className}>
        <span className="inline-block bg-brand-green text-sand text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide mb-1.5">
          Promo · Save {format(savings)}
        </span>
        <span className="block text-sm text-brand-green-light line-through opacity-70">
          {format(originalPrice)}
        </span>
        <p className="font-display text-2xl font-bold text-brand-green">
          {from ? "From " : ""}
          {format(price)}
        </p>
        {tierLabel ? (
          <p className="text-[11px] text-brand-green-light mt-0.5">{tierLabel}</p>
        ) : null}
      </div>
    )
  }

  return (
    <div className={className}>
      <span className="block text-sm text-brand-green-light line-through opacity-70">
        {format(originalPrice)}
      </span>
      <span className="text-2xl md:text-3xl font-display font-bold text-brand-green">
        {from ? "From " : ""}
        {format(price)}
      </span>
    </div>
  )
}
