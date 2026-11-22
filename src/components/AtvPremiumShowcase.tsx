"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Bus, Car, Check, Crown, MapPin, Users, Waves } from "lucide-react"
import {
  ATV_PREMIUM_DISCOUNT_PERCENT,
  ATV_PREMIUM_INCLUDED,
  ATV_PREMIUM_PACKAGES,
  ATV_PREMIUM_SELF_MEET_INCLUDED,
  ATV_PREMIUM_SELF_MEET_PACKAGES,
  ATV_PREMIUM_SLUG,
  ATV_RAFTING_HIACE_INCLUDED,
  ATV_RAFTING_HIACE_PACKAGES,
  ATV_RAFTING_HIACE_SELF_MEET_INCLUDED,
  ATV_RAFTING_HIACE_SELF_MEET_PACKAGES,
  ATV_RAFTING_PREMIUM_INCLUDED,
  ATV_RAFTING_PREMIUM_PACKAGES,
  ATV_RAFTING_PREMIUM_SELF_MEET_INCLUDED,
  ATV_RAFTING_PREMIUM_SELF_MEET_PACKAGES,
  ALL_ATV_PREMIUM_PACKAGES,
  HIACE_SHUTTLE_IDR,
  meetCopyForPackage,
  type AtvPremiumPackage,
} from "@/data/atvPremium"
import { BookingPopup, type TourConfig } from "@/components/BookingPopup"
import { formatIdr } from "@/lib/whatsapp"

const DEFAULT_TIMES = ["08:00", "09:00", "10:00", "13:00", "14:00"]

function transportTitleBit(pkg: AtvPremiumPackage): string {
  if (pkg.vehicle === "hiace") return " + private HiAce"
  if (pkg.vehicle === "car") return " + private shuttle"
  return " · self-meet (no shuttle)"
}

function packageTourConfig(pkg: AtvPremiumPackage): TourConfig {
  return {
    id: `${ATV_PREMIUM_SLUG}-${pkg.key}`,
    title: `${pkg.name} — ${pkg.singles} single${pkg.singles === 1 ? "" : "s"}${pkg.tandems ? " + 1 tandem" : ""}${pkg.rafters ? " + rafting" : ""}${transportTitleBit(pkg)} · ${pkg.guests} guests`,
    times: DEFAULT_TIMES,
    adultPrice: pkg.priceIdr,
    kidPrice: null,
    minPax: pkg.guests,
    fixedPax: pkg.guests,
    compareAtPrice: pkg.partsIdr,
    perBooking: true,
    pickupIncluded: pkg.shuttleIncluded,
    meetsAtArena: !pkg.shuttleIncluded,
    includedMeetCopy: meetCopyForPackage(pkg),
  }
}

function transportLine(pkg: AtvPremiumPackage, shuttleMode: boolean): string {
  if (!shuttleMode) return "Self-meet — no shuttle"
  if (pkg.vehicle === "hiace") return "Private HiAce minibus — not shared"
  return "Private car shuttle — not shared"
}

type PackagePanelProps = {
  id: string
  eyebrow: string
  title: string
  intro: string
  packages: readonly AtvPremiumPackage[]
  included: readonly string[]
  separateHref: string
  shuttleMode: boolean
  gridClassName?: string
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
  shuttleMode,
  gridClassName = "grid gap-4 md:grid-cols-3",
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
          <h2
            id={id}
            style={{ color: "#ffffff" }}
            className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight text-white"
          >
            {title}
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-sand/80 leading-relaxed">{intro}</p>
        </div>

        <div className={gridClassName}>
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
                  {pkg.vehicle === "hiace" && shuttleMode ? (
                    <Bus className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                  ) : shuttleMode ? (
                    <Car className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                  ) : (
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                  )}
                  {transportLine(pkg, shuttleMode)}
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

/** Package comparison for the ATV premium page — shuttle or self-meet, ATV-only and Land & River. */
export default function AtvPremiumShowcase() {
  const [shuttleMode, setShuttleMode] = useState(true)
  const [open, setOpen] = useState(false)
  const [selectedKey, setSelectedKey] = useState<string | null>(null)

  const configs = useMemo(() => ALL_ATV_PREMIUM_PACKAGES.map(packageTourConfig), [])
  const primary =
    configs.find((c) => c.id === `${ATV_PREMIUM_SLUG}-${selectedKey}`) ?? configs[0]

  const openBook = (pkg: AtvPremiumPackage) => {
    setSelectedKey(pkg.key)
    setOpen(true)
  }

  const atvPackages = shuttleMode ? ATV_PREMIUM_PACKAGES : ATV_PREMIUM_SELF_MEET_PACKAGES
  const landRiverCar = shuttleMode
    ? ATV_RAFTING_PREMIUM_PACKAGES
    : ATV_RAFTING_PREMIUM_SELF_MEET_PACKAGES
  const landRiverHiace = shuttleMode
    ? ATV_RAFTING_HIACE_PACKAGES
    : ATV_RAFTING_HIACE_SELF_MEET_PACKAGES

  return (
    <div className="space-y-6">
      <div
        role="group"
        aria-label="Choose shuttle or self-meet"
        className="flex flex-wrap gap-2 rounded-2xl border border-brand-green/15 bg-white p-2 shadow-sm"
      >
        <button
          type="button"
          onClick={() => setShuttleMode(true)}
          className={`flex flex-1 min-w-[10rem] items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
            shuttleMode
              ? "bg-brand-green text-sand"
              : "bg-transparent text-brand-green hover:bg-brand-green/5"
          }`}
        >
          <Car className="h-4 w-4" />
          With private shuttle
        </button>
        <button
          type="button"
          onClick={() => setShuttleMode(false)}
          className={`flex flex-1 min-w-[10rem] items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
            !shuttleMode
              ? "bg-brand-green text-sand"
              : "bg-transparent text-brand-green hover:bg-brand-green/5"
          }`}
        >
          <MapPin className="h-4 w-4" />
          Self-meet · no shuttle
        </button>
      </div>
      <p className="text-sm text-brand-green-light leading-relaxed">
        {shuttleMode
          ? `Groups of 2–7 ride in a private car. Groups of 8–15 get a private HiAce minibus (${formatIdr(HIACE_SHUTTLE_IDR)} in the package math). ${ATV_PREMIUM_DISCOUNT_PERCENT}% off bikes + transport vs booking separately.`
          : `Already have a driver or staying near Sedang? Self-meet packages drop the car or HiAce and keep the same ${ATV_PREMIUM_DISCOUNT_PERCENT}% off the bikes (and rafting on Land & River). Meet at All New Bali Adventure.`}
      </p>

      <PackagePanel
        id="atv-premium-packages"
        eyebrow={shuttleMode ? "1 · ATV-only (3–5 guests)" : "1 · ATV-only self-meet (3–5)"}
        title="Your group, your ride"
        intro={
          shuttleMode
            ? `Best when one pair shares a tandem. Singles for the drivers, one tandem for two who share, and a private car shuttle that is yours alone. ${ATV_PREMIUM_DISCOUNT_PERCENT}% off booking the same parts separately. Not Kuber Premium.`
            : `Same singles + one tandem lineup, without the car. ${ATV_PREMIUM_DISCOUNT_PERCENT}% off the bikes only. Self-meet at All New Bali Adventure in Sedang.`
        }
        packages={atvPackages}
        included={shuttleMode ? ATV_PREMIUM_INCLUDED : ATV_PREMIUM_SELF_MEET_INCLUDED}
        separateHref="/tours/bali-atv-adventure"
        shuttleMode={shuttleMode}
        onBook={openBook}
      />
      <PackagePanel
        id="atv-rafting-premium-packages"
        eyebrow={shuttleMode ? "2 · Land & River car (2–7)" : "2 · Land & River self-meet (2–7)"}
        title="Mud in the morning, river after lunch"
        intro={
          shuttleMode
            ? `Best for couples and small friend groups who each want a single ATV plus Ayung rafting. One private car for the whole day. No tubing. ${ATV_PREMIUM_DISCOUNT_PERCENT}% off booking the same parts separately.`
            : `Single ATV + Ayung rafting for every guest, no shuttle. You cover Sedang ↔ Ayung after lunch. ${ATV_PREMIUM_DISCOUNT_PERCENT}% off the activity lines. No tubing.`
        }
        packages={landRiverCar}
        included={
          shuttleMode ? ATV_RAFTING_PREMIUM_INCLUDED : ATV_RAFTING_PREMIUM_SELF_MEET_INCLUDED
        }
        separateHref="/tours/atv-rafting-combo"
        shuttleMode={shuttleMode}
        gridClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        onBook={openBook}
      />
      <PackagePanel
        id="atv-rafting-hiace-packages"
        eyebrow={shuttleMode ? "3 · Group HiAce (8–15)" : "3 · Group self-meet (8–15)"}
        title="Big group, one private HiAce"
        intro={
          shuttleMode
            ? `Built for bachelor parties, family weeks, and office trips. Every guest gets a single ATV and Ayung rafting. Pickup and return in a private Toyota HiAce minibus — not a shared tourist bus. ${ATV_PREMIUM_DISCOUNT_PERCENT}% off the whole stack.`
            : `Same single ATV + rafting for 8, 10, 12 or 15 guests — without the HiAce. Bring your own bus or driver. ${ATV_PREMIUM_DISCOUNT_PERCENT}% off the activity lines.`
        }
        packages={landRiverHiace}
        included={
          shuttleMode ? ATV_RAFTING_HIACE_INCLUDED : ATV_RAFTING_HIACE_SELF_MEET_INCLUDED
        }
        separateHref="/tours/atv-rafting-combo"
        shuttleMode={shuttleMode}
        gridClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
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
