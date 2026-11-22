"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Check, Users } from "lucide-react"
import {
  GROUP_PURIFICATION_INCLUDED,
  GROUP_PURIFICATION_PACKAGES,
  GROUP_PURIFICATION_SLUG,
  type GroupPurificationPackage,
} from "@/data/groupPurification"
import { MELUKAT_PRICE_IDR } from "@/data/cultureSales"
import { BookingPopup, type TourConfig } from "@/components/BookingPopup"
import { formatIdr } from "@/lib/whatsapp"

const TIMES = ["08:00", "09:00"]

function packageTourConfig(pkg: GroupPurificationPackage): TourConfig {
  return {
    id: `${GROUP_PURIFICATION_SLUG}-${pkg.key}`,
    title: `${pkg.name} — ${pkg.guests} guests · ${pkg.discountPercent}% off`,
    times: TIMES,
    adultPrice: pkg.priceIdr,
    kidPrice: null,
    minPax: pkg.guests,
    fixedPax: pkg.guests,
    compareAtPrice: pkg.partsIdr,
    perBooking: true,
    privateShuttle: true,
  }
}

export default function GroupPurificationShowcase() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<GroupPurificationPackage | null>(null)
  const configs = GROUP_PURIFICATION_PACKAGES.map(packageTourConfig)
  const primary = active ? packageTourConfig(active) : configs[0]

  return (
    <>
      <section className="rounded-3xl border border-brand-green/10 bg-sand/40 p-6 md:p-8 space-y-6">
        <div className="space-y-2">
          <p className="text-[11px] font-bold uppercase tracking-wider text-brand-green-light">
            Group promo · 4–10 guests
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-green leading-tight">
            One booking for the whole group — published % off
          </h2>
          <p className="text-sm text-brand-green-light leading-relaxed max-w-2xl">
            Same Tirta Empul spiritual melukat as the solo page (ticket, sarong, offering, licensed
            guide, locker). Groups of 4+ get a standing promo vs {formatIdr(MELUKAT_PRICE_IDR)} each.
            Shuttle stays optional. 1–3 guests use the{" "}
            <Link
              href="/tours/tirta-empu-purification"
              className="font-semibold text-brand-green underline-offset-2 hover:underline"
            >
              standard melukat page
            </Link>
            .
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {GROUP_PURIFICATION_PACKAGES.map((pkg) => (
            <button
              key={pkg.key}
              type="button"
              onClick={() => {
                setActive(pkg)
                setOpen(true)
              }}
              className="flex flex-col gap-2 rounded-2xl border border-brand-green/15 bg-white p-4 text-left transition-colors hover:border-brand-green/40 hover:bg-brand-green/5"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-green">
                  <Users className="w-4 h-4" />
                  {pkg.guests} guests
                </span>
                <span className="rounded-full bg-brand-green/10 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-brand-green">
                  {pkg.discountPercent}% off
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl font-bold text-brand-green">
                  {formatIdr(pkg.priceIdr)}
                </span>
                <span className="text-xs text-brand-green-light line-through">
                  {formatIdr(pkg.partsIdr)}
                </span>
              </div>
              <p className="text-xs text-brand-green-light">
                ≈ {formatIdr(pkg.perGuestIdr)} / person · save {formatIdr(pkg.savingIdr)}
              </p>
              <span className="mt-1 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-green">
                Book this size <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>
          ))}
        </div>

        <ul className="grid gap-2 sm:grid-cols-2 text-sm text-brand-green-light">
          {GROUP_PURIFICATION_INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check className="w-4 h-4 shrink-0 text-brand-green mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <BookingPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        tour={primary}
        tourOptions={configs}
      />
    </>
  )
}
