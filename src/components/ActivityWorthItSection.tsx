import { Check } from "lucide-react"
import ActivityPriceCompare, { type ActivityCompareId } from "@/components/ActivityPriceCompare"
import { ALOHA_ACTIVE_PACKAGE_IDR } from "@/data/alohaUbudSwing"
import { COOKING_CLASS_PRICE_IDR, COOKING_CLASS_STANDARD_PRICE_IDR, MELUKAT_PRICE_IDR } from "@/data/cultureSales"
import { GRIYA_BEJI_PURIFICATION_IDR } from "@/data/griyaBeji"
import { SWING_HEAVEN_LUNCH_PRICE_IDR, SWING_HEAVEN_PRICE_IDR } from "@/data/swingHeaven"
import { PICKUP_FEE_IDR } from "@/lib/pricing"
import { formatIdr } from "@/lib/whatsapp"

const COPY: Record<
  "swing" | "aloha" | "cooking" | "melukat" | "griya",
  { eyebrow: string; title: string; body: string; included: string[] }
> = {
  swing: {
    eyebrow: "Why the Swing Heaven price is worth it",
    title: "Jungle swings in one published price",
    body: `${formatIdr(SWING_HEAVEN_PRICE_IDR)} is the swing park in Bongkasa. Photos stay on your phone. ${formatIdr(SWING_HEAVEN_LUNCH_PRICE_IDR)} adds lunch. The hotel shuttle is required (${formatIdr(PICKUP_FEE_IDR)} from Ubud, IDR 650,000 from the south coast) because self-meet is not offered. Dress hire and the koi pond are optional, so they are not buried in the swing price.`,
    included: [
      "Swing Heaven jungle swing park in Bongkasa",
      "Photos on your own phone",
      "Lunch only if you choose the IDR 630,000 package",
      "Required hotel shuttle, priced on its own",
    ],
  },
  aloha: {
    eyebrow: "Why the Aloha price is worth it",
    title: "Eight Tegallalang swings, fee included",
    body: `${formatIdr(ALOHA_ACTIVE_PACKAGE_IDR)} is Active Package 1: eight activities once each, and the required IDR 50,000 park fee is already inside that number. Entrance-only is IDR 50,000 for one nest. The hotel shuttle is required (${formatIdr(PICKUP_FEE_IDR)} from Ubud). Dress hire and a park photographer are optional.`,
    included: [
      "Active Package on Jl. Raya Tegallalang",
      "Required park fee included in the 450,000",
      "Required hotel shuttle, priced on its own",
      "Different park from Swing Heaven in Bongkasa",
    ],
  },
  cooking: {
    eyebrow: "Why the cooking class price is worth it",
    title: "Market, kitchen, and lunch in one promo",
    body: `Shared class is promo ${formatIdr(COOKING_CLASS_PRICE_IDR)} per person (was ${formatIdr(COOKING_CLASS_STANDARD_PRICE_IDR)}), max 8 guests. That covers the Ubud market visit, the rice-field walk, cooking, and the meal you eat, plus free Ubud hotel pickup. A private kitchen is separate: IDR 1,000,000 for one guest, or IDR 2,000,000 for two.`,
    included: [
      "Morning market or afternoon class in Tumang",
      "Rice-field walk and hands-on cooking",
      "The meal is the lunch",
      "Free hotel pickup in the Ubud area",
    ],
  },
  melukat: {
    eyebrow: "Why the private melukat price is worth it",
    title: "Shuttle, guide, and breakfast are in the 1,200,000",
    body: `${formatIdr(MELUKAT_PRICE_IDR)} per person is a private ceremony at Tirta Empul or Pura Beji — your group, not a walk-in ticket. The rate includes the Ubud-area shuttle, English-speaking guide, temple entrance, canang offering, sarong, and breakfast. Lunch is not included. Griya Beji waterfall purification is a different place and a lower park price, with admission and pickup extra.`,
    included: [
      "Choose Tirta Empul or Pura Beji",
      "Private shuttle, guide, entrance, offering, and sarong",
      "Breakfast after the ritual",
      "Ubud pickup already inside the price",
    ],
  },
  griya: {
    eyebrow: "Why the Griya Beji price is worth it",
    title: "Waterfall purification at the park menu price",
    body: `${formatIdr(GRIYA_BEJI_PURIFICATION_IDR)} is the Punggul waterfall melukat on the park menu. Palm reading is IDR 1,000,000 and mental healing is IDR 1,500,000. International admission (IDR 50,000) is paid at the gate. Hotel pickup is ${formatIdr(PICKUP_FEE_IDR)}, or you can self-meet. This is not the private Tirta Empul ceremony, which includes shuttle and breakfast at ${formatIdr(MELUKAT_PRICE_IDR)}.`,
    included: [
      "Waterfall purification at Taman Beji Griya, Punggul",
      "Palm reading and mental healing are separate menu prices",
      "Gate admission is extra",
      "Pickup is optional, not included",
    ],
  },
}

export default function ActivityWorthItSection({
  variant,
}: {
  variant: keyof typeof COPY
}) {
  const copy = COPY[variant]
  return (
    <section className="relative overflow-hidden rounded-3xl bg-brand-green p-6 md:p-8 text-sand shadow-xl">
      <div className="relative space-y-6">
        <div className="space-y-2">
          <p className="inline-flex rounded-full border border-white/40 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white">
            {copy.eyebrow}
          </p>
          <h2 style={{ color: "#ffffff" }} className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight text-white">
            {copy.title}
          </h2>
          <p className="max-w-3xl text-sm md:text-base text-sand/80 leading-relaxed">{copy.body}</p>
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {copy.included.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-sand/90 leading-relaxed">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-gold" />
              {item}
            </li>
          ))}
        </ul>
        <ActivityPriceCompare highlight={variant as ActivityCompareId} />
      </div>
    </section>
  )
}
