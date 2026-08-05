"use client"

import { useCallback, useEffect, useRef, type MouseEvent } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface LightboxProps {
  src: string | null
  alt: string
  onClose: () => void
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  const handleKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
      if (event.key === "Tab") {
        event.preventDefault()
        closeButtonRef.current?.focus()
      }
    },
    [onClose],
  )

  useEffect(() => {
    if (!src) return

    previousFocusRef.current = document.activeElement as HTMLElement | null
    document.addEventListener("keydown", handleKey)
    document.body.style.overflow = "hidden"
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 30)

    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
      previousFocusRef.current?.focus()
    }
  }, [src, handleKey])

  if (!src) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Imagem ampliada"
      onMouseDown={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Fechar imagem ampliada"
        className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/65 text-white backdrop-blur transition hover:border-primary/60 hover:bg-primary sm:right-5 sm:top-5"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="relative flex max-h-[90svh] max-w-[95vw] items-center justify-center"
        onMouseDown={(event: MouseEvent<HTMLDivElement>) => event.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1600}
          sizes="95vw"
          className="h-auto max-h-[90svh] w-auto max-w-[95vw] rounded-xl object-contain glow-border"
        />
      </div>
    </div>
  )
}
