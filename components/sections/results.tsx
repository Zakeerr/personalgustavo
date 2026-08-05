"use client"

import { useState } from "react"
import Image from "next/image"
import { Maximize2, TrendingDown } from "lucide-react"
import { Lightbox } from "@/components/lightbox"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { RESULTADOS } from "@/lib/site-config"

export function Results() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null)

  return (
    <section id="resultados" className="section-space relative bg-[#040914]/75">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Resultados"
            className="max-w-[42rem]"
            title={
              <>
                Resultados reais de <span className="text-primary">alunos reais</span>
              </>
            }
            description="Transformações construídas com planejamento, acompanhamento próximo e constância. Clique em qualquer foto para visualizar em tamanho maior."
          />
        </Reveal>

        <div className="mt-8 grid grid-cols-1 justify-items-center gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3">
          {RESULTADOS.map((item, index) => (
            <Reveal key={item.src} delay={(index % 3) * 80} className="w-full max-w-[22rem] sm:max-w-none">
              <figure className="premium-card results-card group mx-auto flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_22px_60px_-30px_rgba(48,126,255,0.55)]">
                <button
                  type="button"
                  onClick={() => setZoom({ src: item.src, alt: item.alt })}
                  className="results-media relative m-2 mb-0 flex justify-center overflow-hidden rounded-[1.1rem] bg-black/45 sm:rounded-[1.25rem]"
                  aria-label={`Ampliar resultado: ${item.destaque}`}
                >
                  <div className="flex w-full justify-center overflow-hidden rounded-[0.95rem] bg-black/35 px-2 py-2 sm:px-0 sm:py-0 sm:rounded-[1rem]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading={index < 3 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 320px, (max-width: 1024px) 50vw, 33vw"
                      className="mx-auto h-auto max-h-[24rem] w-auto max-w-full object-contain transition duration-500 group-hover:scale-[1.025] sm:max-h-none sm:w-full"
                    />
                  </div>
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur transition group-hover:border-primary/55 group-hover:bg-primary sm:h-10 sm:w-10">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </button>
                <figcaption className="flex flex-1 items-start gap-3 p-4 pt-4 sm:p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-10 sm:w-10">
                    <TrendingDown className="h-4 w-4 sm:h-5 sm:w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-lg font-bold uppercase tracking-wide text-primary text-glow sm:text-xl">
                      {item.destaque}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-white/68 sm:leading-6">{item.descricao}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox src={zoom?.src ?? null} alt={zoom?.alt ?? ""} onClose={() => setZoom(null)} />
    </section>
  )
}
