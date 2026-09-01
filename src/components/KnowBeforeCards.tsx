import { Check, Shield, Shirt } from "lucide-react"
import type { KnowBeforeItem } from "@/data/atvKnowBefore"

type KnowBeforeCardsProps = {
  whatYouGet: KnowBeforeItem[]
  whatToBring: KnowBeforeItem[]
  whatYouGetIntro?: string
  whatToBringIntro?: string
  whatYouGetFooter?: string
  whatToBringFooter?: string
  variant?: "dark" | "light"
}

function ItemList({ items, variant }: { items: KnowBeforeItem[]; variant: "dark" | "light" }) {
  const iconWrap =
    variant === "dark"
      ? "bg-brand-green/8"
      : "bg-brand-green/8"
  const iconColor =
    variant === "dark"
      ? "text-accent-gold-dark"
      : "text-brand-green"
  const titleColor =
    variant === "dark"
      ? "text-brand-green"
      : "text-brand-green"
  const descColor =
    variant === "dark"
      ? "text-brand-green-light"
      : "text-brand-green-light"

  return (
    <ul className="space-y-5">
      {items.map((item) => {
        const Icon = item.icon
        return (
          <li key={item.title} className="flex items-start gap-4">
            <div className={`w-9 h-9 rounded-lg ${iconWrap} flex items-center justify-center shrink-0 mt-0.5`}>
              <Icon className={`w-4 h-4 ${iconColor}`} />
            </div>
            <div>
              <p className={`${titleColor} font-semibold text-base leading-snug`}>{item.title}</p>
              <p className={`${descColor} text-sm leading-relaxed mt-1`}>{item.desc}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export function KnowBeforeCards({
  whatYouGet,
  whatToBring,
  whatYouGetIntro = "Every ATV package is all-inclusive — gear, guide, lunch, and insurance are covered in your price.",
  whatToBringIntro = "A short packing list so you stay comfortable on muddy trails and cool after the ride.",
  whatYouGetFooter,
  whatToBringFooter,
  variant = "dark",
}: KnowBeforeCardsProps) {
  const cardClass =
    variant === "dark"
      ? "rounded-3xl bg-sand p-8 md:p-10 shadow-xl border border-sand-dark/40"
      : "rounded-2xl bg-white border border-brand-green/10 p-8"
  const headingClass =
    variant === "dark"
      ? "font-display text-2xl font-bold text-brand-green uppercase"
      : "font-display text-xl font-bold text-brand-green uppercase"
  const introClass =
    variant === "dark"
      ? "text-brand-green-light text-sm mb-6 leading-relaxed"
      : "text-brand-green-light text-sm mb-6 leading-relaxed"
  const footerClass =
    variant === "dark"
      ? "mt-6 pt-6 border-t border-brand-green/10 text-brand-green-light text-sm leading-relaxed"
      : "mt-6 pt-6 border-t border-brand-green/10 text-brand-green-light text-sm leading-relaxed"
  const headerIconWrap =
    variant === "dark"
      ? "bg-brand-green/8"
      : "bg-brand-green/8"
  const headerIconColor =
    variant === "dark"
      ? "text-accent-gold-dark"
      : "text-brand-green"

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      <div className={cardClass}>
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 rounded-xl ${headerIconWrap} flex items-center justify-center shrink-0`}>
            <Shield className={`w-5 h-5 ${headerIconColor}`} />
          </div>
          <h3 className={headingClass}>What You Get</h3>
        </div>
        <p className={introClass}>{whatYouGetIntro}</p>
        <ItemList items={whatYouGet} variant={variant} />
        {whatYouGetFooter ? (
          <p className={footerClass}>{whatYouGetFooter}</p>
        ) : null}
      </div>
      <div className={cardClass}>
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 rounded-xl ${headerIconWrap} flex items-center justify-center shrink-0`}>
            <Shirt className={`w-5 h-5 ${headerIconColor}`} />
          </div>
          <h3 className={headingClass}>What To Bring</h3>
        </div>
        <p className={introClass}>{whatToBringIntro}</p>
        <ItemList items={whatToBring} variant={variant} />
        {whatToBringFooter ? (
          <p className={footerClass}>
            <Check
              className={`w-4 h-4 ${headerIconColor} inline-block mr-1.5 align-text-bottom`}
            />
            {whatToBringFooter}
          </p>
        ) : null}
      </div>
    </div>
  )
}
