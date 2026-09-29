"use client"

import { useCallback, useEffect, useState } from "react"
import {
  CONSULTATION_INTERESTS_EVENT,
  CONSULTATION_INTERESTS_KEY,
  parseConsultationInterests,
  toggleConsultationInterestInList,
  type ConsultationInterest,
} from "@/lib/consultationInterests"

function readStoredInterests(): ConsultationInterest[] {
  try {
    return parseConsultationInterests(localStorage.getItem(CONSULTATION_INTERESTS_KEY))
  } catch {
    return []
  }
}

function persistInterests(items: ConsultationInterest[]) {
  localStorage.setItem(CONSULTATION_INTERESTS_KEY, JSON.stringify(items))
  window.dispatchEvent(new Event(CONSULTATION_INTERESTS_EVENT))
}

export function useConsultationInterests() {
  const [items, setItems] = useState<ConsultationInterest[]>([])

  const refresh = useCallback(() => {
    setItems(readStoredInterests())
  }, [])

  useEffect(() => {
    refresh()
    window.addEventListener(CONSULTATION_INTERESTS_EVENT, refresh)
    window.addEventListener("storage", refresh)
    return () => {
      window.removeEventListener(CONSULTATION_INTERESTS_EVENT, refresh)
      window.removeEventListener("storage", refresh)
    }
  }, [refresh])

  const toggle = useCallback((item: ConsultationInterest) => {
    const next = toggleConsultationInterestInList(readStoredInterests(), item)
    persistInterests(next)
    setItems(next)
  }, [])

  const remove = useCallback((slug: string) => {
    const next = readStoredInterests().filter((item) => item.slug !== slug)
    persistInterests(next)
    setItems(next)
  }, [])

  const clear = useCallback(() => {
    persistInterests([])
    setItems([])
  }, [])

  const has = useCallback((slug: string) => items.some((item) => item.slug === slug), [items])

  return { items, toggle, remove, clear, has }
}
