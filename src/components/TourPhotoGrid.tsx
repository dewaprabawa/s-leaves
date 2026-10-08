"use client";

import { useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

type Photo = { url: string; alt: string }

type TourPhotoGridProps = {
  photos: Photo[]
}

/** Small tap-to-enlarge photo grid shown under a tour hero image. */
export default function TourPhotoGrid({ photos }: TourPhotoGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const touchStartX = useRef<number | null>(null)
  const isOpen = openIndex !== null
  const count = photos.length

  const close = useCallback(() => setOpenIndex(null), [])
  const show = useCallback(
    (step: number) =>
      setOpenIndex((current) => (current === null ? current : (current + step + count) % count)),
    [count]
  )

  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowRight") show(1)
      if (event.key === "ArrowLeft") show(-1)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, close, show])

  if (count === 0) return null

  const active = openIndex === null ? null : photos[openIndex]

  return (
    <>
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {photos.map((photo, idx) => (
          <button
            key={photo.url}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="group relative aspect-square w-full overflow-hidden rounded-xl border border-brand-green/10 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
            aria-label={`View larger photo: ${photo.alt}`}
          >
            <Image
              src={photo.url}
              alt={photo.alt}
              fill
              sizes="(max-width: 1024px) 25vw, 200px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active
        ? createPortal(
            <div
              className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
              role="dialog"
              aria-modal="true"
              aria-label={active.alt}
              onClick={close}
              onTouchStart={(event) => {
                touchStartX.current = event.touches[0]?.clientX ?? null
              }}
              onTouchEnd={(event) => {
                const start = touchStartX.current
                const end = event.changedTouches[0]?.clientX
                touchStartX.current = null
                if (start === null || end === undefined || Math.abs(end - start) < 40) return
                show(end < start ? 1 : -1)
              }}
            >
              <button
                type="button"
                onClick={close}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
                aria-label="Close photo"
              >
                <X className="h-6 w-6" />
              </button>

              {count > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation()
                      show(-1)
                    }}
                    className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/25 sm:left-4"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="h-7 w-7" />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation()
                      show(1)
                    }}
                    className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/15 p-2 text-white hover:bg-white/25 sm:right-4"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="h-7 w-7" />
                  </button>
                </>
              ) : null}

              <figure
                className="flex h-full max-h-[90vh] w-full max-w-3xl flex-col gap-3"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative min-h-0 flex-1">
                  <Image
                    key={active.url}
                    src={active.url}
                    alt={active.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="object-contain"
                  />
                </div>
                <figcaption className="text-center text-xs text-white/80">
                  {active.alt} · {(openIndex ?? 0) + 1}/{count}
                </figcaption>
              </figure>
            </div>,
            document.body
          )
        : null}
    </>
  )
}
