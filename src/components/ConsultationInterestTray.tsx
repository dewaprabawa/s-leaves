"use client"

import { useEffect } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"
import { useConsultationInterests } from "@/hooks/useConsultationInterests"
import { buildWhatsAppConsultationUrl } from "@/lib/whatsapp"
import { SITE_URL } from "@/lib/seo"

export default function ConsultationInterestTray() {
  const { items, remove, clear } = useConsultationInterests()

  const visible = items.length > 0

  useEffect(() => {
    if (!visible) {
      document.documentElement.classList.remove("has-consultation-tray")
      return
    }
    document.documentElement.classList.add("has-consultation-tray")
    return () => {
      document.documentElement.classList.remove("has-consultation-tray")
    }
  }, [visible])

  if (!visible) return null

  const consultationUrl = buildWhatsAppConsultationUrl(
    items.map((item) => ({
      title: item.title,
      pageUrl: `${SITE_URL}/tours/${item.slug}`,
    })),
  )

  return (
    <div
      id="consultation-tray"
      className="consultation-interest-tray fixed inset-x-0 z-[45] px-3 md:px-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-brand-green/15 bg-white/97 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur px-4 py-3">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-accent-gold-dark">
              Consultation list
            </p>
            <p className="text-sm font-semibold text-brand-green">
              {items.length} {items.length === 1 ? "activity" : "activities"} to discuss
            </p>
          </div>
          <button
            type="button"
            onClick={clear}
            className="text-[11px] font-bold uppercase tracking-wide text-brand-green-light hover:text-brand-green"
          >
            Clear
          </button>
        </div>

        <ul className="mb-3 flex flex-wrap gap-1.5">
          {items.map((item) => (
            <li key={item.slug}>
              <span className="inline-flex max-w-full items-center gap-1 rounded-full border border-brand-green/15 bg-sand px-2.5 py-1 text-xs text-brand-green">
                <Link href={`/tours/${item.slug}`} className="truncate font-semibold hover:underline">
                  {item.title}
                </Link>
                <button
                  type="button"
                  onClick={() => remove(item.slug)}
                  className="shrink-0 rounded-full p-0.5 text-brand-green-light hover:bg-brand-green/10 hover:text-brand-green"
                  aria-label={`Remove ${item.title} from consultation list`}
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            </li>
          ))}
        </ul>

        <a
          href={consultationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-11 w-full items-center justify-center gap-2 rounded-full btn-gold-shimmer px-5 text-sm font-bold uppercase tracking-wider"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp these activities
        </a>
      </div>
    </div>
  )
}
