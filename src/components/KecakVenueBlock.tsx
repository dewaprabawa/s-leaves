import {
  KECAK_DAYS_LABEL,
  KECAK_PRICE_IDR,
  KECAK_SHOW_WINDOW,
  KECAK_VENUE,
  ULUWATU_KECAK_ADULT_IDR,
  ULUWATU_KECAK_CHILD_IDR,
  ULUWATU_KECAK_SOURCE,
} from "@/data/kecakUbud"
import { PICKUP_FEE_IDR, PICKUP_FEE_SOUTH_IDR } from "@/lib/pricing"
import { formatIdr } from "@/lib/whatsapp"

export default function KecakVenueBlock() {
  return (
    <section className="space-y-6" aria-labelledby="kecak-venue-heading">
      <div className="overflow-hidden rounded-3xl border border-brand-green/10 bg-white shadow-sm">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="space-y-3 p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">
              Show location
            </p>
            <h2 id="kecak-venue-heading" className="text-2xl font-bold text-brand-green">
              {KECAK_VENUE.name}
            </h2>
            <p className="text-sm leading-relaxed text-brand-green-light">
              {KECAK_VENUE.address}. The courtyard sits in the middle of Ubud&apos;s temple banjar, not on a south-coast cliff.
            </p>
            <ul className="space-y-1.5 text-sm text-brand-green">
              <li>
                <span className="font-bold">{KECAK_DAYS_LABEL}</span> · {KECAK_SHOW_WINDOW}
              </li>
              <li>{KECAK_VENUE.walk}</li>
              <li>{KECAK_VENUE.parking}</li>
              <li>
                Hotel shuttle {formatIdr(PICKUP_FEE_IDR)} from Ubud or {formatIdr(PICKUP_FEE_SOUTH_IDR)} from the south coast, once per booking.
              </li>
            </ul>
            <p className="text-sm">
              <a
                href={KECAK_VENUE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-green underline"
              >
                Open the temple pin
              </a>
            </p>
          </div>
          <iframe
            title="Map of Pura Dalem Gede Kutuh Kaja on Jalan Tirta Tawar, Ubud"
            src={KECAK_VENUE.embedUrl}
            className="h-72 w-full border-0 lg:h-full lg:min-h-[320px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-brand-green/10 bg-white shadow-sm">
        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-brand-green">Ubud temple Kecak vs Uluwatu cliff Kecak</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-brand-green-light">
            Same Ramayana chant, two different nights. This ticket is the village temple in central Ubud. Uluwatu is the sunset amphitheater on the Bukit cliff.
          </p>
        </div>
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-sand/70 text-brand-green">
            <tr>
              <th className="px-6 py-3 font-bold"> </th>
              <th className="px-4 py-3 font-bold">Pura Dalem Kutuh Kaja</th>
              <th className="px-6 py-3 font-bold">Uluwatu</th>
            </tr>
          </thead>
          <tbody className="text-brand-green-light">
            <tr className="border-t border-brand-green/10">
              <th className="px-6 py-3 font-bold text-brand-green">Ticket</th>
              <td className="px-4 py-3">{formatIdr(KECAK_PRICE_IDR)} adult or child</td>
              <td className="px-6 py-3">
                {formatIdr(ULUWATU_KECAK_ADULT_IDR)} adult · {formatIdr(ULUWATU_KECAK_CHILD_IDR)} child 2–9. Temple entrance is extra.
              </td>
            </tr>
            <tr className="border-t border-brand-green/10">
              <th className="px-6 py-3 font-bold text-brand-green">When</th>
              <td className="px-4 py-3">{KECAK_DAYS_LABEL}, {KECAK_SHOW_WINDOW}</td>
              <td className="px-6 py-3">Every day, usually 18:00–19:00</td>
            </tr>
            <tr className="border-t border-brand-green/10">
              <th className="px-6 py-3 font-bold text-brand-green">Where</th>
              <td className="px-4 py-3">Temple courtyard in central Ubud. About 10 minutes on foot.</td>
              <td className="px-6 py-3">Cliff amphitheater at Pura Luhur Uluwatu, south Bali</td>
            </tr>
            <tr className="border-t border-brand-green/10">
              <th className="px-6 py-3 font-bold text-brand-green">Feel</th>
              <td className="px-4 py-3">Sacred banjar temple, English telling of the legend, fire in the courtyard</td>
              <td className="px-6 py-3">Sunset, ocean, large tourist seating, monkeys on the paths</td>
            </tr>
          </tbody>
        </table>
        <p className="px-6 pb-6 text-xs text-brand-green-light md:px-8">
          Uluwatu Kecak prices are the show ticket on{" "}
          <a href={ULUWATU_KECAK_SOURCE} className="underline" target="_blank" rel="noopener noreferrer">
            uluwatutemple.id
          </a>
          . Our {formatIdr(KECAK_PRICE_IDR)} rate is the Sekar booking price for Kutuh Kaja only.
        </p>
      </div>
    </section>
  )
}
