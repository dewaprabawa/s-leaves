"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Car, Check, Crown, Users, Waves } from "lucide-react"
import {
  ATV_PREMIUM_DISCOUNT_PERCENT,
  ATV_PREMIUM_INCLUDED,
  ATV_PREMIUM_PACKAGES,
  ATV_PREMIUM_SHUTTLE_COPY,
  ATV_PREMIUM_SLUG,
  ATV_RAFTING_PREMIUM_INCLUDED,
  ATV_RAFTING_PREMIUM_PACKAGES,
  ALL_ATV_PREMIUM_PACKAGES,
  type AtvPremiumPackage,
} from "@/data/atvPremium"
import { BookingPopup, type TourConfig } from "@/components/BookingPopup"
import { formatIdr } from "@/lib/whatsapp"

const DEFAULT_TIMES = ["08:00", "09:00", "10:00", "13:00", "14:00"]

function packageTourConfig(pkg: AtvPremiumPackage): TourConfig {
  return {
    id: `${ATV_PREMIUM_SLUG}-${pkg.key}`,
    title: `${pkg.name} — ${pkg.singles} single${pkg.singles === 1 ? "" : "s"}${pkg.tandems ? " + 1 tandem" : ""}${pkg.rafters ? " + rafting" : ""} + private shuttle · ${pkg.guests} guests`,
    times: DEFAULT_TIMES,
    adultPrice: pkg.priceIdr,
    kidPrice: null,
    minPax: pkg.guests,
    fixedPax: pkg.guests,
    compareAtPrice: pkg.partsIdr,
    perBooking: true,
    pickupIncluded: true,
    includedMeetCopy: ATV_PREMIUM_SHUTTLE_COPY,
  }
}

type PackagePanelProps = {
  id: string
  eyebrow: string
  title: string
  intro: string
  packages: readonly AtvPremiumPackage[]
  included: readonly string[]
  separateHref: string
  onBook: (pkg: AtvPremiumPackage) => void
}

function PackagePanel({
  id,
  eyebrow,
  title,
  intro,
  packages,
  included,
  separateHref,
  onBook,
}: PackagePanelProps) {
  return (
    <section
      aria-labelledby={id}
      className="relative overflow-hidden rounded-3xl bg-brand-green p-6 md:p-8 text-sand shadow-xl"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-gold/20 blur-3xl" />
      <div className="relative space-y-6">
        <div className="space-y-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-gold/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold">
            <Crown className="h-3.5 w-3.5" />
            {eyebrow}
          </p>
          {/* Inline color: globals.css sets h1-h6 to brand-green outside
              Tailwind layers, which would override a text-white class. */}
          <h2
            id={id}
            style={{ color: "#ffffff" }}
            className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight text-white"
          >
            {title}
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-sand/80 leading-relaxed">{intro}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.key}
              className="flex flex-col rounded-2xl border border-accent-gold/40 bg-white/5 p-5 backdrop-blur-sm"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent-gold">{pkg.name}</p>
              <p className="mt-2 flex items-center gap-2 text-lg font-bold">
                <Users className="h-5 w-5 text-accent-gold" />
                {pkg.guests} guests · {pkg.bikes} bikes
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-sand/85">
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                  {pkg.singles} single ATV{pkg.singles === 1 ? "" : "s"}
                </li>
                {pkg.tandems ? (
                  <li className="flex gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                    {pkg.tandems} tandem ATV (2 riders)
                  </li>
                ) : null}
                {pkg.rafters ? (
                  <li className="flex gap-2">
                    <Waves className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                    Ayung rafting for all {pkg.rafters}
                  </li>
                ) : null}
                <li className="flex gap-2">
                  <Car className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                  Private shuttle — not shared
                </li>
              </ul>
              <div className="mt-auto pt-5">
                <p className="text-xs text-sand/60 line-through">{formatIdr(pkg.partsIdr)} booked separately</p>
                <p className="font-display text-3xl font-bold text-white">{formatIdr(pkg.priceIdr)}</p>
                <p className="mt-1 text-xs font-semibold text-accent-gold">
                  Save {formatIdr(pkg.savingIdr)} · about {formatIdr(pkg.perGuestIdr)} per guest
                </p>
                <button
                  type="button"
                  onClick={() => onBook(pkg)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full btn-gold-shimmer h-11 px-4 text-sm font-bold uppercase tracking-wider"
                >
                  Book {pkg.name} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent-gold">Every package includes</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-sand/85">
            {included.map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-sand/60">
            Price per package, not per person. Different mix?{" "}
            <Link href={separateHref} className="font-semibold text-accent-gold underline-offset-2 hover:underline">
              Book activities separately
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

/** Package comparison for the ATV premium page — ATV-only and Land & River sets, one private shuttle each. */
export default function AtvPremiumShowcase() {
  const [open, setOpen] = useState(false)
  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  const configs = useMemo(() => ALL_ATV_PREMIUM_PACKAGES.map(packageTourConfig), [])
  const primary =
    configs.find((c) => c.id === `${ATV_PREMIUM_SLUG}-${selectedKey}`) ?? configs[0]

  const openBook = (pkg: AtvPremiumPackage) => {
    setSelectedKey(pkg.key)
    setOpen(true)
  }

  return (
    <div className="space-y-6">
      <PackagePanel
        id="atv-premium-packages"
        eyebrow="1 · ATV-only (3–5 guests)"
        title="Your group, your car, your ride"
        intro={`Best when one pair shares a tandem. Singles for the drivers, one tandem for two who share, and a private shuttle that is yours alone. ${ATV_PREMIUM_DISCOUNT_PERCENT}% off booking the same parts separately. Not Kuber Premium.`}
        packages={ATV_PREMIUM_PACKAGES}
        included={ATV_PREMIUM_INCLUDED}
        separateHref="/tours/bali-atv-adventure"
        onBook={openBook}
      />
      <PackagePanel
        id="atv-rafting-premium-packages"
        eyebrow="2 · Land & River (2–4 guests)"
        title="Mud in the morning, river after lunch"
        intro={`Best when everyone wants their own ATV plus Ayung rafting. One private shuttle for the whole day. No tubing. ${ATV_PREMIUM_DISCOUNT_PERCENT}% off booking the same parts separately.`}
        packages={ATV_RAFTING_PREMIUM_PACKAGES}
        included={ATV_RAFTING_PREMIUM_INCLUDED}
        separateHref="/tours/atv-rafting-combo"
        onBook={openBook}
      />

      <BookingPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        tour={primary}
        tourOptions={configs}
      />
    </div>
  )
}
