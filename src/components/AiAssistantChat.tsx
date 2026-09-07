"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Bot, X } from "lucide-react"

const ZAPIER_SCRIPT_SRC =
  "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
const CHATBOT_ID = "cmtrpc7hu004w41wcd4ulpftr"

function loadZapierScript(): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve()

  const existing = document.querySelector<HTMLScriptElement>(
    `script[data-zapier-interfaces="true"]`,
  )
  if (existing) {
    if (customElements.get("zapier-interfaces-chatbot-embed")) {
      return Promise.resolve()
    }
    return customElements
      .whenDefined("zapier-interfaces-chatbot-embed")
      .then(() => undefined)
      .catch(() => undefined)
  }

  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = ZAPIER_SCRIPT_SRC
    script.type = "module"
    script.async = true
    script.dataset.zapierInterfaces = "true"
    const done = () => {
      customElements
        .whenDefined("zapier-interfaces-chatbot-embed")
        .then(() => resolve())
        .catch(() => resolve())
    }
    script.onload = done
    script.onerror = () => resolve()
    document.body.appendChild(script)
  })
}

function mountInlineChat(container: HTMLElement) {
  // Remount only if missing — keeps conversation when reopening in same session
  if (container.querySelector("zapier-interfaces-chatbot-embed")) return

  const embed = document.createElement("zapier-interfaces-chatbot-embed")
  embed.setAttribute("is-popup", "false")
  embed.setAttribute("chatbot-id", CHATBOT_ID)
  embed.setAttribute("height", "100%")
  embed.setAttribute("width", "100%")
  container.appendChild(embed)
}

export default function AiAssistantChat() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)

  // Warm the Zapier script so the first tap is faster
  useEffect(() => {
    void loadZapierScript()
  }, [])

  useEffect(() => {
    if (!open || !chatRef.current) return
    let cancelled = false
    setLoading(true)
    void loadZapierScript().then(() => {
      if (cancelled || !chatRef.current) return
      mountInlineChat(chatRef.current)
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const toggle = useCallback(() => {
    setOpen((v) => !v)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[90] flex justify-end p-4 md:p-6">
      <div className="pointer-events-auto flex w-full max-w-[400px] flex-col items-stretch gap-3">
        {open ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="AI Assistant"
            className="flex flex-col overflow-hidden rounded-2xl border border-brand-green/15 bg-sand shadow-2xl"
            style={{ height: "min(600px, calc(100dvh - 5.5rem))" }}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 bg-brand-green px-4 py-3 text-sand">
              <div className="min-w-0">
                <p className="font-display text-sm font-bold uppercase tracking-wide">
                  AI Assistant
                </p>
                <p className="truncate text-xs text-sand/70">
                  Ask about tours, prices &amp; booking
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="shrink-0 rounded-full bg-sand/10 p-2 transition-colors hover:bg-sand/20"
                aria-label="Close AI Assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1 bg-white">
              {loading ? (
                <p className="absolute inset-0 flex items-center justify-center text-sm text-brand-green-light">
                  Loading chat…
                </p>
              ) : null}
              <div ref={chatRef} className="h-full w-full" />
            </div>
          </div>
        ) : null}

        <button
          type="button"
          onClick={toggle}
          className="ml-auto inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-3 text-sm font-bold uppercase tracking-wider text-sand shadow-lg transition-colors hover:bg-brand-green-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold"
          aria-expanded={open}
          aria-label={open ? "Close AI Assistant" : "Open AI Assistant"}
        >
          <Bot className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>{open ? "Close" : "AI Assistant"}</span>
        </button>
      </div>
    </div>
  )
}
