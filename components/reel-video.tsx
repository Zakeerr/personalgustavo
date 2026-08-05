"use client"

import { useEffect, useId, useRef, useState } from "react"
import { InstagramIcon } from "@/components/icons/instagram"

interface ReelVideoProps {
  src: string
  poster: string
  instagram: string
  index: number
}

const MOBILE_REEL_EVENT = "gustavo-personal:mobile-reel-play"

export function ReelVideo({ src, poster, instagram, index }: ReelVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const id = useId()
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const onMobileReelPlay = (event: Event) => {
      const customEvent = event as CustomEvent<string>
      if (customEvent.detail !== id && window.matchMedia("(max-width: 767px)").matches) {
        video.pause()
      }
    }

    const onVisibilityChange = () => {
      if (document.hidden) video.pause()
    }

    window.addEventListener(MOBILE_REEL_EVENT, onMobileReelPlay)
    document.addEventListener("visibilitychange", onVisibilityChange)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return

        if (entry.isIntersecting && entry.intersectionRatio >= 0.62) {
          if (window.matchMedia("(max-width: 767px)").matches) {
            window.dispatchEvent(new CustomEvent(MOBILE_REEL_EVENT, { detail: id }))
          }
          video.play().catch(() => undefined)
        } else {
          video.pause()
        }
      },
      { threshold: [0, 0.3, 0.62, 1], rootMargin: "0px 0px -5% 0px" },
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
      window.removeEventListener(MOBILE_REEL_EVENT, onMobileReelPlay)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [id])

  return (
    <article className="premium-card mx-auto w-full max-w-[19.5rem] overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:border-primary/55 hover:shadow-[0_18px_55px_-28px_rgba(48,126,255,0.58)] sm:max-w-none">
      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir conteúdo ${index + 1} no Instagram`}
        className="group/video relative block aspect-[9/15.5] w-full overflow-hidden bg-black sm:aspect-[9/16]"
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
          preload="metadata"
          onLoadedData={() => setReady(true)}
          onCanPlay={() => setReady(true)}
          onError={() => setFailed(true)}
          onContextMenu={(event) => event.preventDefault()}
          aria-label={`Vídeo de conteúdo fitness ${index + 1}`}
          className="pointer-events-none h-full w-full select-none object-cover transition duration-500 group-hover/video:scale-[1.018]"
        />

        {!ready && !failed && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
        )}

        {failed && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#081126] px-6 text-center">
            <InstagramIcon className="h-9 w-9 text-primary" />
            <p className="text-sm leading-6 text-white/65">O vídeo pode ser assistido diretamente no Instagram.</p>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />

        <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/15 bg-black/45 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
          Conteúdo {String(index + 1).padStart(2, "0")}
        </span>
      </a>

      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-12 items-center justify-center gap-2 border-t border-white/[0.07] px-4 text-sm font-bold text-white/85 transition hover:bg-primary hover:text-white"
      >
        <InstagramIcon className="h-4 w-4" />
        Ver no Instagram
      </a>
    </article>
  )
}
