'use client'

import { useEffect } from 'react'
import { isWhatsAppHref, trackGenerateLead } from '@/lib/ga'

export default function GaLeadTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest('a')
      if (!link || !isWhatsAppHref(link.href)) return
      trackGenerateLead('whatsapp_link', {
        link_text: (link.textContent || '').trim().slice(0, 80) || undefined,
      })
    }

    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
