"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Clock, MapPin, MessageCircle } from "lucide-react"
import BookActivityButton from "@/components/BookActivityButton"
import PromoPrice from "@/components/PromoPrice"
import {
  ADVENTURES,
  getAdventureChildPrice,
  getAdventureListPrice,
  getAdventurePromoPrice,
} from "@/data/adventures"
import {
  COOKING_CLASS_SALES,
  buildCookingClassWhatsAppUrl,
  buildCyclingCookingComboWhatsAppUrl,
  getCyclingCookingCombo,
} from "@/data/cultureSales"
import { FEATURED_COMBOS, getComboListPrice, getComboCompareAtPrice } from "@/lib/combos"
import { formatTierPriceTable } from "@/lib/pricing"
import { formatIdr } from "@/lib/whatsapp"
import { notifyActivityClick } from "@/lib/web3forms"

type Props = {
  /** Pre-select / highlight an activity from ?activity= */
  initialActivityId?: string
  highlightCooking?: boolean
  highlightCultureCombo?: boolean
}

export default function BookSalesCheckout({
  initialActivityId,
  highlightCooking = false,
  highlightCultureCombo = false,
}: Props) {
  const highlighted = initialActivityId
    ? ADVENTURES.find((a) => a.id === initialActivityId)?.id
    : undefined

  const sorted = [...ADVENTURES].sort((a, b) => {
    if (a.id === highlighted) return -1
    if (b.id === highlighted) return 1
    return 0
  })

  const cultureCombo = getCyclingCookingCombo()
  const cookingWhatsApp = buildCookingClassWhatsAppUrl()
  const cultureWhatsApp = buildCyclingCookingComboWhatsAppUrl()

  return (
    <div className="space-y-8 md:space-y-10">
      <section id="combos" className="space-y-6 pt-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-1">
            Mix & match
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-green">
            Popular activity combos
          </h2>
          <p className="text-sm text-brand-green-light mt-2 max-w-2xl">
            Mix ATV, canyon tubing, and rafting in one day. Combos save 10% for two activities or
            12% for three+. Prefer culture? See cycling + cooking below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {FEATURED_COMBOS.map((combo) => {
            const price = getComboListPrice(combo)
            const compareAt = getComboCompareAtPrice(combo)
            return (
              <article
                key={combo.id}
                className="rounded-2xl border border-brand-green/10 bg-white p-5 md:p-6 flex flex-col gap-4 shadow-sm"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-1">
                    {combo.tagline}
                  </p>
                  <h3 className="font-display text-xl font-bold text-brand-green">{combo.name}</h3>
                  <p className="text-sm text-brand-green-light mt-2 leading-relaxed">
                    {combo.description}
                  </p>
                  <p className="text-xs text-brand-green-light mt-2">{combo.duration}</p>
                </div>
                <div className="mt-auto flex items-end justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-brand-green-light mb-0.5">
                      From
                    </p>
                    {compareAt > price ? (
                      <div>
                        <span className="text-xs line-through text-brand-green-light/70 mr-1.5">
                          IDR {compareAt.toLocaleString("id-ID")}
                        </span>
                        <span className="text-lg font-bold text-brand-green">
                          IDR {price.toLocaleString("id-ID")}
                        </span>
                      </div>
                    ) : (
                      <span className="text-lg font-bold text-brand-green">
                        IDR {price.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>
                  <BookActivityButton
                    activityId={combo.primaryId}
                    initialMixIds={combo.mixIds}
                    label="Book Combo"
                    className="shrink-0 rounded-xl bg-brand-green text-sand px-4 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-brand-green-light transition-colors"
                  />
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section
        id={cultureCombo.id}
        className={`scroll-mt-36 space-y-4 rounded-3xl border border-brand-green/10 bg-white p-5 md:p-8 shadow-sm ${
          highlightCultureCombo ? "ring-2 ring-accent-gold/60" : ""
        }`}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-1">
            {cultureCombo.tagline}
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-green">
            {cultureCombo.name}
          </h2>
          <p className="text-sm md:text-base text-brand-green-light mt-2 leading-relaxed max-w-3xl">
            {cultureCombo.description}
          </p>
        </div>
        <ul className="space-y-2">
          {cultureCombo.timeline.map((line) => (
            <li key={line} className="flex items-start gap-2 text-sm text-brand-green">
              <Check className="w-4 h-4 text-accent-gold-dark shrink-0 mt-0.5" />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pt-2">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-brand-green-light mb-0.5">
              From (both, per person)
            </p>
            <p className="text-2xl font-bold text-brand-green">
              {formatIdr(cultureCombo.totalFromIdr)}
            </p>
            <p className="text-xs text-brand-green-light mt-1">
              {formatIdr(cultureCombo.cyclingPriceIdr)} cycling +{" "}
              {formatIdr(cultureCombo.cookingPriceIdr)} cooking · {cultureCombo.duration}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href={cultureWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => notifyActivityClick(cultureCombo.name, "book-page-whatsapp")}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-green text-sand px-5 py-3 text-xs font-bold uppercase tracking-wider hover:bg-brand-green-light transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Book culture day
            </a>
            <Link
              href={cultureCombo.itineraryHref}
              className="inline-flex items-center gap-1 rounded-xl border border-brand-green/15 px-4 py-3 text-xs font-semibold text-brand-green hover:bg-brand-green/5 transition-colors"
            >
              Full-day itinerary <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {sorted.map((adv) => {
        const price = getAdventurePromoPrice(adv.id)
        const originalPrice = getAdventureListPrice(adv.id)
        const childPrice = getAdventureChildPrice(adv.id)
        const isHighlight = adv.id === highlighted

        return (
          <article
            key={adv.id}
            id={adv.id}
            className={`scroll-mt-36 grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)_220px] gap-6 lg:gap-8 items-stretch ${
              isHighlight ? "ring-2 ring-accent-gold/60 rounded-3xl p-3 md:p-4 bg-white/60" : ""
            }`}
          >
            <Link
              href={`/tours/${adv.tourSlug}`}
              onClick={() => notifyActivityClick(adv.name, "book-page")}
              className="relative aspect-[4/3] md:aspect-auto md:min-h-[200px] overflow-hidden rounded-2xl lg:rounded-3xl bg-brand-green/5"
            >
              <Image
                src={adv.image}
                alt={adv.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </Link>

            <div className="flex flex-col justify-center space-y-3 min-w-0">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-1">
                  {adv.tagline}
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-green">
                  {adv.name}
                </h2>
              </div>
              <p className="text-sm md:text-base text-brand-green-light leading-relaxed">
                {adv.description}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-brand-green-light">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-brand-green shrink-0" />
                  {adv.duration}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-green shrink-0" />
                  {adv.paxLabel}
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                {adv.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-brand-green">
                    <Check className="w-4 h-4 text-accent-gold-dark shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              {adv.freeUbudPickup ? (
                <p className="text-xs font-semibold text-brand-green bg-brand-green/8 rounded-lg px-3 py-2 w-fit">
                  Free Ubud hotel pickup included
                </p>
              ) : null}
              <p className="text-xs text-brand-green-light opacity-80">
                {formatTierPriceTable(adv.id)}
              </p>
              <Link
                href={`/tours/${adv.tourSlug}`}
                onClick={() => notifyActivityClick(adv.name, "book-page")}
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors w-fit"
              >
                Full itinerary & details <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex flex-col justify-center gap-4 md:col-span-2 lg:col-span-1 bg-white rounded-2xl border border-brand-green/10 p-5 shadow-sm">
              <div>
                <p className="text-xs font-medium text-brand-green-light uppercase tracking-wider mb-1">
                  From
                </p>
                <PromoPrice
                  price={price}
                  originalPrice={originalPrice}
                  variant="card"
                  from
                  tierLabel="3+ group rate — book more, save more"
                />
                {childPrice ? (
                  <p className="text-xs text-brand-green-light mt-1">
                    Child from {formatIdr(childPrice)}
                  </p>
                ) : null}
              </div>
              <BookActivityButton
                activityId={adv.id}
                label="Book This Activity"
                className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-brand-green text-sand font-bold text-sm uppercase tracking-wider hover:bg-brand-green-light transition-colors"
              />
              <p className="text-[11px] text-center text-brand-green-light leading-relaxed">
                Enter guests &amp; date, then send to WhatsApp with the price included. Switch
                activities inside the form.
              </p>
            </div>
          </article>
        )
      })}

      <article
        id={COOKING_CLASS_SALES.id}
        className={`scroll-mt-36 grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)_220px] gap-6 lg:gap-8 items-stretch ${
          highlightCooking ? "ring-2 ring-accent-gold/60 rounded-3xl p-3 md:p-4 bg-white/60" : ""
        }`}
      >
        <Link
          href={`/tours/${COOKING_CLASS_SALES.tourSlug}`}
          onClick={() => notifyActivityClick(COOKING_CLASS_SALES.name, "book-page")}
          className="relative aspect-[4/3] md:aspect-auto md:min-h-[200px] overflow-hidden rounded-2xl lg:rounded-3xl bg-brand-green/5"
        >
          <Image
            src={COOKING_CLASS_SALES.image}
            alt={COOKING_CLASS_SALES.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 280px"
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </Link>

        <div className="flex flex-col justify-center space-y-3 min-w-0">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-accent-gold-dark mb-1">
              {COOKING_CLASS_SALES.tagline}
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-green">
              {COOKING_CLASS_SALES.name}
            </h2>
          </div>
          <p className="text-sm md:text-base text-brand-green-light leading-relaxed">
            {COOKING_CLASS_SALES.description}
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-brand-green-light">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-green shrink-0" />
              {COOKING_CLASS_SALES.duration}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-brand-green shrink-0" />
              Shared · Tumang village near Ubud
            </span>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
            {COOKING_CLASS_SALES.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-brand-green">
                <Check className="w-4 h-4 text-accent-gold-dark shrink-0 mt-0.5" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
            <Link
              href={`/tours/${COOKING_CLASS_SALES.tourSlug}`}
              onClick={() => notifyActivityClick(COOKING_CLASS_SALES.name, "book-page")}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors w-fit"
            >
              Full class details <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={COOKING_CLASS_SALES.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors w-fit"
            >
              tumangbaliclass.com <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/book?activity=combo-cycling-cooking"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors w-fit"
            >
              Pair with cycling <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 md:col-span-2 lg:col-span-1 bg-white rounded-2xl border border-brand-green/10 p-5 shadow-sm">
          <div>
            <p className="text-xs font-medium text-brand-green-light uppercase tracking-wider mb-1">
              Shared promo / person
            </p>
            <PromoPrice
              price={COOKING_CLASS_SALES.priceIdr}
              originalPrice={COOKING_CLASS_SALES.standardPriceIdr}
              variant="card"
              from
            />
            <p className="text-xs text-brand-green-light mt-1">
              Private 1 guest {formatIdr(COOKING_CLASS_SALES.privateSoloIdr)} · Ubud pickup included
            </p>
          </div>
          <a
            href={cookingWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => notifyActivityClick(COOKING_CLASS_SALES.name, "book-page-whatsapp")}
            className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-brand-green text-sand font-bold text-sm uppercase tracking-wider hover:bg-brand-green-light transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Book on WhatsApp
          </a>
          <p className="text-[11px] text-center text-brand-green-light leading-relaxed">
            Morning (market tour) or afternoon — free to inquire. Ask to add ricefield cycling the same day.
          </p>
        </div>
      </article>
    </div>
  )
}
