"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Bot, X } from "lucide-react"

const ZAPIER_SCRIPT_SRC =
  "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
const CHATBOT_ID = "cmtrpc7hu004w41wcd4ulpftr"

type ZapierEmbedEl = HTMLElement & {
  open?: () => void
  close?: () => void
}

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

function ensurePopupEmbed(host: HTMLElement): ZapierEmbedEl {
  let embed = host.querySelector(
    "zapier-interfaces-chatbot-embed",
  ) as ZapierEmbedEl | null
  if (!embed) {
    embed = document.createElement(
      "zapier-interfaces-chatbot-embed",
    ) as ZapierEmbedEl
    embed.setAttribute("is-popup", "true")
    embed.setAttribute("chatbot-id", CHATBOT_ID)
    host.appendChild(embed)
  }
  return embed
}

function mountInlineEmbed(container: HTMLElement) {
  container.replaceChildren()
  const embed = document.createElement("zapier-interfaces-chatbot-embed")
  embed.setAttribute("is-popup", "false")
  embed.setAttribute("chatbot-id", CHATBOT_ID)
  embed.setAttribute("height", "100%")
  embed.setAttribute("width", "100%")
  container.appendChild(embed)
}

async function tryOpenPopup(host: HTMLElement): Promise<boolean> {
  await loadZapierScript()
  const embed = ensurePopupEmbed(host)

  for (let i = 0; i < 30; i++) {
    if (typeof embed.open === "function") {
      embed.open()
      return true
    }

    const launcher =
      embed.shadowRoot?.querySelector<HTMLElement>(
        "button, .chatbot-icon-button, [class*='chatbot-icon']",
      ) ||
      host.querySelector<HTMLElement>(".chatbot-icon-button") ||
      document.querySelector<HTMLElement>(".chatbot-icon-button")

    if (launcher) {
      launcher.click()
      return true
    }

    await new Promise((r) => setTimeout(r, 100))
  }
  return false
}

export default function AiAssistantChat() {
  const hostRef = useRef<HTMLDivElement>(null)
  const inlineRef = useRef<HTMLDivElement>(null)
  const [busy, setBusy] = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const [hint, setHint] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      await loadZapierScript()
      if (cancelled || !hostRef.current) return
      ensurePopupEmbed(hostRef.current)
    })()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!panelOpen || !inlineRef.current) return
    void loadZapierScript().then(() => {
      if (inlineRef.current) mountInlineEmbed(inlineRef.current)
    })
  }, [panelOpen])

  useEffect(() => {
    if (!panelOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPanelOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [panelOpen])

  const handleToggle = useCallback(async () => {
    if (panelOpen) {
      setPanelOpen(false)
      setHint(null)
      return
    }

    if (!hostRef.current) return
    setBusy(true)
    setHint(null)
    try {
      const opened = await tryOpenPopup(hostRef.current)
      if (!opened) {
        // Fallback: visible inline panel so tap always shows chat UI
        setPanelOpen(true)
        setHint(null)
      }
    } finally {
      setBusy(false)
    }
  }, [panelOpen])

  return (
    <>
      <div ref={hostRef} className="sekar-zapier-host" aria-hidden="true" />

      <div className="fixed bottom-5 right-4 z-[90] flex flex-col items-end gap-2 md:bottom-6 md:right-6">
        {panelOpen ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="AI Assistant"
            className="flex w-[min(100vw-1.5rem,400px)] flex-col overflow-hidden rounded-2xl border border-brand-green/15 bg-sand shadow-2xl"
            style={{ maxHeight: "min(640px, calc(100dvh - 6.5rem))" }}
          >
            <div className="flex items-center justify-between gap-3 bg-brand-green px-4 py-3 text-sand">
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
                onClick={() => setPanelOpen(false)}
                className="shrink-0 rounded-full bg-sand/10 p-2 transition-colors hover:bg-sand/20"
                aria-label="Close AI Assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div
              ref={inlineRef}
              className="min-h-0 flex-1 bg-white"
              style={{ height: "min(560px, calc(100dvh - 10rem))" }}
            />
          </div>
        ) : null}

        {hint ? (
          <p
            role="status"
            className="max-w-[260px] rounded-xl border border-brand-green/10 bg-sand px-3 py-2 text-xs text-brand-green shadow-md"
          >
            {hint}
          </p>
        ) : null}

        <button
          type="button"
          onClick={() => void handleToggle()}
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-3 text-sm font-bold uppercase tracking-wider text-sand shadow-lg transition-colors hover:bg-brand-green-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold disabled:opacity-70"
          aria-expanded={panelOpen}
          aria-label={panelOpen ? "Close AI Assistant" : "Open AI Assistant chat"}
        >
          <Bot className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span>{busy ? "Opening…" : panelOpen ? "Close" : "AI Assistant"}</span>
        </button>
      </div>
    </>
  )
}
