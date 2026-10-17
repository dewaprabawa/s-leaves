"use client"

import type { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react"
import { SITE_URL } from "@/lib/seo"
import { buildWhatsAppContactUrl, getBrowserPageUrl } from "@/lib/whatsapp"

type Props = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  children: ReactNode
  /** Absolute URL or site path (e.g. `/contact`). Defaults to the current browser page on click. */
  pageUrl?: string
}

function resolveExplicitPageUrl(pageUrl: string): string {
  if (pageUrl.startsWith("http")) return pageUrl
  return `${SITE_URL}${pageUrl.startsWith("/") ? pageUrl : `/${pageUrl}`}`
}

/** WhatsApp link that always prefills the website page URL for lead attribution. */
export default function WhatsAppContactLink({
  children,
  pageUrl,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
  onClick,
  ...rest
}: Props) {
  const explicit = pageUrl ? resolveExplicitPageUrl(pageUrl) : undefined
  const href = buildWhatsAppContactUrl(explicit ?? SITE_URL)

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented || explicit) return
    const current = getBrowserPageUrl()
    if (!current || current === SITE_URL) return
    event.preventDefault()
    window.open(buildWhatsAppContactUrl(current), target ?? "_blank", "noopener,noreferrer")
  }

  return (
    <a href={href} target={target} rel={rel} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
