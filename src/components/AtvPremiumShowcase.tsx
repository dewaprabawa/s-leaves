import Link from "next/link"
import { Car, Check, Crown, Users } from "lucide-react"
import {
  ATV_PREMIUM_DISCOUNT_PERCENT,
  ATV_PREMIUM_INCLUDED,
  ATV_PREMIUM_PACKAGES,
} from "@/data/atvPremium"
import { formatIdr } from "@/lib/whatsapp"

/** Package comparison for the ATV premium page — three fixed group sizes, one private shuttle each. */
export default function AtvPremiumShowcase() {
  return (
    <section
      aria-labelledby="atv-premium-packages"
      className="relative overflow-hidden rounded-3xl bg-brand-green p-6 md:p-8 text-sand shadow-xl"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-gold/20 blur-3xl" />
      <div className="relative space-y-6">
        <div className="space-y-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-gold/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-accent-gold">
            <Crown className="h-3.5 w-3.5" />
            Premium ATV package
          </p>
          <h2 id="atv-premium-packages" className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight">
            Your group, your car, your ride
          </h2>
          <p className="max-w-2xl text-sm md:text-base text-sand/80 leading-relaxed">
            Singles for the riders who want their own bike, one tandem for the guest who would rather sit behind, and a
            private shuttle that is yours alone. {ATV_PREMIUM_DISCOUNT_PERCENT}% off booking the same parts separately.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {ATV_PREMIUM_PACKAGES.map((pkg) => (
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
                <li className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                  1 tandem ATV (2 riders)
                </li>
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
              </div>
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-accent-gold">Every package includes</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2 text-sm text-sand/85">
            {ATV_PREMIUM_INCLUDED.map((item) => (
              <li key={item} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-sand/60">
            Price per package, not per person. Different mix of bikes?{" "}
            <Link href="/tours/bali-atv-adventure" className="font-semibold text-accent-gold underline-offset-2 hover:underline">
              Book singles and tandems separately
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
