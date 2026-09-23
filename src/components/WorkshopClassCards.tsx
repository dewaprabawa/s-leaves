import Image from "next/image"
import Link from "next/link"
import { getTourBySlug } from "@/data/tours"
import { formatIdr } from "@/lib/whatsapp"
import { getTourImageAlt, getTourImageUrl } from "@/lib/tourImage"

const WORKSHOP_SLUGS = [
  "batik-class",
  "silver-making-class",
  "balinese-dance-class",
  "lontar-weaving-class",
  "bamboo-carving-class",
  "balinese-offering-class",
] as const

/** Visual workshop list used on the Ubud classes landing article. */
export default function WorkshopClassCards() {
  const tours = WORKSHOP_SLUGS.map((slug) => getTourBySlug(slug)).filter(
    (tour): tour is NonNullable<typeof tour> => Boolean(tour),
  )

  if (tours.length === 0) return null

  return (
    <section aria-label="Ubud workshop classes" className="space-y-4">
      <h2 className="font-display text-lg font-bold text-brand-green uppercase tracking-wide">
        Book a workshop
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tours.map((tour) => (
          <Link
            key={tour.slug}
            href={`/tours/${tour.slug}`}
            className="group overflow-hidden rounded-2xl border border-brand-green/10 bg-white hover:border-accent-gold transition-colors"
          >
            <span className="relative block aspect-[16/10] overflow-hidden bg-sand">
              <Image
                src={getTourImageUrl(tour)}
                alt={getTourImageAlt(tour)}
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </span>
            <span className="block p-3.5">
              <span className="block font-display text-base font-bold uppercase text-brand-green group-hover:text-accent-gold-dark">
                {tour.title}
              </span>
              <span className="mt-1 block text-sm text-brand-green-light">
                {tour.duration} · from {formatIdr(tour.basePrice)}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
