"use client"

import { createElement, useCallback, useEffect, useId, useState } from "react"
import { Bot, X } from "lucide-react"

const ZAPIER_SCRIPT_SRC =
  "https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js"
const CHATBOT_ID = "cmtrpc7hu004w41wcd4ulpftr"

function loadZapierScript() {
  if (typeof document === "undefined") return
  if (document.querySelector(`script[data-zapier-interfaces="true"]`)) return

  const script = document.createElement("script")
  script.src = ZAPIER_SCRIPT_SRC
  script.type = "module"
  script.async = true
  script.dataset.zapierInterfaces = "true"
  document.body.appendChild(script)
}

export default function AiAssistantChat() {
  const [open, setOpen] = useState(false)
  const [scriptReady, setScriptReady] = useState(false)
  const titleId = useId()
  const panelId = useId()

  const openChat = useCallback(() => {
    loadZapierScript()
    setScriptReady(true)
    setOpen(true)
  }, [])

  const closeChat = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeChat()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, closeChat])

  return (
    <div className="fixed bottom-5 right-4 z-[90] flex flex-col items-end gap-3 md:bottom-6 md:right-6">
      {open ? (
        <div
          id={panelId}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="flex w-[min(100vw-2rem,400px)] flex-col overflow-hidden rounded-2xl border border-brand-green/15 bg-sand shadow-2xl"
        >
          <div className="flex items-center justify-between gap-3 bg-brand-green px-4 py-3 text-sand">
            <div className="min-w-0">
              <p id={titleId} className="font-display text-sm font-bold uppercase tracking-wide">
                AI Assistant
              </p>
              <p className="truncate text-xs text-sand/70">Ask about tours, prices &amp; booking</p>
            </div>
            <button
              type="button"
              onClick={closeChat}
              className="shrink-0 rounded-full bg-sand/10 p-2 transition-colors hover:bg-sand/20"
              aria-label="Close AI Assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="bg-white" style={{ height: 600, maxHeight: "min(600px, 70vh)" }}>
            {scriptReady
              ? createElement("zapier-interfaces-chatbot-embed", {
                  "is-popup": "false",
                  "chatbot-id": CHATBOT_ID,
                  height: "100%",
                  width: "100%",
                })
              : null}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => (open ? closeChat() : openChat())}
        className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-3 text-sm font-bold uppercase tracking-wider text-sand shadow-lg transition-colors hover:bg-brand-green-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-gold"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
      >
        <Bot className="h-5 w-5 shrink-0" aria-hidden="true" />
        <span>{open ? "Close" : "AI Assistant"}</span>
      </button>
    </div>
  )
}
