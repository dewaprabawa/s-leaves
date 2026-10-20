/**
 * Visa + Mastercard acceptance logos (pay on the spot at ATV / rafting / tubing).
 * Rendered in white chips so they read on light and dark backgrounds.
 */
export default function CardBrandLogos({
  className = "",
  logoClassName = "h-8",
}: {
  className?: string
  logoClassName?: string
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="We accept Visa and Mastercard">
      <span className="inline-flex items-center rounded-md bg-white px-2 py-1 ring-1 ring-black/10">
        <img
          src="/images/payment/visa.png"
          alt="Visa"
          width={280}
          height={179}
          loading="lazy"
          className={`${logoClassName} w-auto object-contain`}
        />
      </span>
      <span className="inline-flex items-center rounded-md bg-white px-2 py-1 ring-1 ring-black/10">
        <img
          src="/images/payment/mastercard.png"
          alt="Mastercard"
          width={505}
          height={319}
          loading="lazy"
          className={`${logoClassName} w-auto object-contain`}
        />
      </span>
    </span>
  )
}
