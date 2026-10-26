import Image from "next/image"
import { BadgeCheck, Check, Cog, Leaf, Sparkles, Waves } from "lucide-react"

const TRACK_CARDS = [
  {
    src: "/images/adventures/atv-cave-tunnel-track.jpg",
    alt: "Riders exiting the authentic cave tunnel on the ATV track at All New Bali Adventure near Ubud",
    icon: Sparkles,
    title: "Authentic cave tunnel",
    text: "You ride out through the track's own carved cave tunnel — a real feature of our Sedang course, not a photo stop. It is one of the moments guests talk about most after the ride.",
  },
  {
    src: "/images/adventures/atv-river-crossing-single.jpg",
    alt: "Single ATV crossing a jungle river on the All New Bali Adventure track near Ubud",
    icon: Waves,
    title: "Real river crossings",
    text: "The course drops into the river and climbs back out — proper water, rocks and mud under the wheels, with a trail guide riding with you the whole way.",
  },
  {
    src: "/images/adventures/atv-jungle-mud-track-riders.jpg",
    alt: "Group of riders on the jungle mud track at All New Bali Adventure near Ubud",
    icon: Leaf,
    title: "Jungle mud track",
    text: "A full 1.5-hour jungle course: muddy ruts, shaded forest trails and open sections — not a short loop around a field. You get the whole track, every booking.",
  },
  {
    src: "/images/adventures/atv-muddy-jungle-trail-pov.jpg",
    alt: "Rider POV on a muddy jungle trail following the guide at All New Bali Adventure",
    icon: Cog,
    title: "New ATVs, properly maintained",
    text: "Our quads are new and maintained after every ride day — brakes, tyres and engines checked for performance and safety, so the bike pulls cleanly through mud and river instead of struggling.",
  },
] as const

const INCLUDED_VALUE = [
  "1.5-hour full jungle track — cave tunnel, river crossings, mud and forest trails",
  "350cc sport ATVs — power for mud, river crossings and the cave tunnel",
  "New, well-maintained ATVs checked for performance before every ride",
  "Lunch, helmet, boot shoes and insurance (ages 6–65) included in the price",
  "Safety briefing and a trail guide riding with your group",
  "Published IDR prices — no hidden fees, no payment just to inquire",
  "Private shuttle IDR 400,000 once per booking, or free self-meet at the arena",
] as const

/**
 * "Why our price is worth it" — ATV value story with real track photos.
 * Shown on the ATV tour page and the ATV + rafting combo page.
 */
export default function AtvWorthItSection() {
  return (
    <section
      aria-labelledby="atv-worth-it"
      className="relative overflow-hidden rounded-3xl bg-brand-green p-6 md:p-8 text-sand shadow-xl"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-gold/20 blur-3xl" />
      <div className="relative space-y-6">
        <div className="space-y-2">
          <p className="inline-flex items-center gap-2 rounded-full border border-accent-gold/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
            <BadgeCheck className="h-3.5 w-3.5 text-accent-gold" />
            Why our price is worth it
          </p>
          {/* Inline color: globals.css sets h1-h6 to brand-green outside
              Tailwind layers, which would override text-white. */}
          <h2
            id="atv-worth-it"
            style={{ color: "#ffffff" }}
            className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight text-white"
          >
            What your ATV price actually buys
          </h2>
          <p className="max-w-3xl text-sm md:text-base text-sand/80 leading-relaxed">
            Single ATV is IDR 750,000 (725,000 each for 2 riders, 700,000 each for 3+); tandem is
            IDR 1,100,000 for two on one bike. Cheaper listings usually mean a shorter loop, older
            bikes, or fees added later. Here the price covers a new, well-maintained quad and the
            full All New Bali Adventure track — jungle, river crossings, mud and our authentic cave
            tunnel — with lunch, gear, guide and insurance already in.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-accent-gold/40 bg-white/5">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/adventures/atv-350cc-sport-quad.jpg"
                alt="350cc sport ATV quad lined up at All New Bali Adventure, with a front rack, light bar and knobby tyres"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-[center_35%]"
              />
            </div>
            <div className="p-5">
              <h3
                style={{ color: "#ffffff" }}
                className="font-display text-2xl font-bold uppercase leading-tight text-white"
              >
                350cc for adventure and power
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/85">
                The quad in this price is a 350cc sport ATV. That size is the power for the adventure:
                it pulls through deep jungle mud and climbs out of the river crossings instead of
                stalling in the ruts. Same bike on the cave tunnel. Single from IDR 750,000, tandem
                IDR 1,100,000 — lunch, helmet, boots and insurance stay in the price.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-accent-gold/40 bg-white/5">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/adventures/atv-briefing-session.jpg"
                alt="Riders in yellow helmets and rubber boots at the ATV safety briefing in the jungle at All New Bali Adventure"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-5">
              <h3
                style={{ color: "#ffffff" }}
                className="font-display text-2xl font-bold uppercase leading-tight text-white"
              >
                Briefing session
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/85">
                Before the track, the guide fits yellow helmets and rubber boots and walks the group
                through throttle, brake, and how to ride together. No licence and no prior ATV
                experience. The briefing is on flat ground at All New Bali Adventure, then you ride.
              </p>
            </div>
          </article>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {TRACK_CARDS.map((card) => (
            <article
              key={card.src}
              className="overflow-hidden rounded-2xl border border-accent-gold/40 bg-white/5 backdrop-blur-sm"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="flex items-center gap-2 text-base font-bold">
                  <card.icon className="h-5 w-5 shrink-0 text-accent-gold" />
                  {card.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-sand/85">{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {INCLUDED_VALUE.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-sand/90 leading-relaxed">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-sm text-sand/80 leading-relaxed">
          That is the value in the price: a maintained bike that performs, a track with real
          variety, and everything included up front — so the day feels worth every rupiah.
        </p>
      </div>
    </section>
  )
}
