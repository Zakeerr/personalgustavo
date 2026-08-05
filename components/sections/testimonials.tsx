"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, MessageSquareQuote, Star } from "lucide-react"
import { Lightbox } from "@/components/lightbox"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { DEPOIMENTOS } from "@/lib/site-config"
import { cn } from "@/lib/utils"

type Testimonial = (typeof DEPOIMENTOS)[number]

function Rating() {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex gap-0.5" aria-label="Avaliação de cinco estrelas">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-3.5 w-3.5 fill-primary text-primary" />
        ))}
      </div>
      <MessageSquareQuote className="h-[1.125rem] w-[1.125rem] text-primary/65 sm:h-5 sm:w-5" aria-hidden="true" />
    </div>
  )
}

function TestimonialCard({ item, onZoom }: { item: Testimonial; onZoom: () => void }) {
  return (
    <figure className="premium-card glow-border flex h-full flex-col rounded-2xl p-3 transition duration-300 hover:-translate-y-1 hover:border-primary/45 sm:p-4">
      <Rating />
      <button
        type="button"
        onClick={onZoom}
        aria-label={`Ampliar depoimento: ${item.alt}`}
        className="group relative mt-3 flex min-h-[15rem] flex-1 items-center justify-center overflow-hidden rounded-xl border border-white/[0.08] bg-black/25 p-2 sm:mt-4 sm:min-h-56"
      >
        <Image
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          loading="lazy"
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 50vw, 25vw"
          className="h-auto max-h-[19rem] w-full object-contain transition duration-500 group-hover:scale-[1.018] sm:max-h-[31rem]"
        />
        <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white backdrop-blur transition group-hover:border-primary/60 group-hover:bg-primary sm:h-9 sm:w-9">
          <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </span>
      </button>
    </figure>
  )
}

export function Testimonials() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null)
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement | null>(null)

  const scrollTo = (targetIndex: number) => {
    const track = trackRef.current
    if (!track) return

    const clamped = Math.max(0, Math.min(targetIndex, DEPOIMENTOS.length - 1))
    const child = track.children[clamped] as HTMLElement | undefined
    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
    setIndex(clamped)
  }

  const updateIndex = () => {
    const track = trackRef.current
    if (!track) return
    const firstChild = track.firstElementChild as HTMLElement | null
    const itemWidth = firstChild?.offsetWidth || track.clientWidth
    const gap = 16
    setIndex(Math.round(track.scrollLeft / (itemWidth + gap)))
  }

  return (
    <section id="depoimentos" className="section-space bg-[#040914]/75">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Depoimentos"
            className="max-w-[42rem]"
            title={
              <>
                O que meus <span className="text-primary">alunos dizem</span>
              </>
            }
            description="Relatos reais de quem viveu o acompanhamento e percebeu mudanças na rotina, no treino e na qualidade de vida."
          />
        </Reveal>

        <div className="mt-8 hidden gap-5 sm:grid sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {DEPOIMENTOS.map((item, itemIndex) => (
            <Reveal key={item.src} delay={(itemIndex % 4) * 70}>
              <TestimonialCard item={item} onZoom={() => setZoom(item)} />
            </Reveal>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <div
            ref={trackRef}
            onScroll={updateIndex}
            className="flex snap-x snap-mandatory justify-start gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {DEPOIMENTOS.map((item) => (
              <div key={item.src} className="w-[calc(100vw-2.5rem)] max-w-[22rem] shrink-0 snap-center">
                <TestimonialCard item={item} onZoom={() => setZoom(item)} />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => scrollTo(index - 1)}
              disabled={index === 0}
              aria-label="Depoimento anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white transition enabled:hover:border-primary/55 enabled:hover:text-primary disabled:opacity-35"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Selecionar depoimento">
              {DEPOIMENTOS.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  onClick={() => scrollTo(dotIndex)}
                  aria-label={`Ir para o depoimento ${dotIndex + 1}`}
                  aria-selected={index === dotIndex}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === dotIndex ? "w-7 bg-primary" : "w-2 bg-white/20",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollTo(index + 1)}
              disabled={index === DEPOIMENTOS.length - 1}
              aria-label="Próximo depoimento"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-white transition enabled:hover:border-primary/55 enabled:hover:text-primary disabled:opacity-35"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          <p className="sr-only" aria-live="polite">Depoimento {index + 1} de {DEPOIMENTOS.length}</p>
        </div>
      </div>

      <Lightbox src={zoom?.src ?? null} alt={zoom?.alt ?? ""} onClose={() => setZoom(null)} />
    </section>
  )
}
