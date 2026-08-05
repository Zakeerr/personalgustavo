import Image from "next/image"
import { ArrowUpRight, Check, Sparkles } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { PLANOS, whatsappPlanoUrl } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function Consultoria() {
  return (
    <section id="consultoria" className="relative overflow-hidden py-9 sm:py-16 lg:py-24">
      <Image
        src="/assets/optimized/imagem1-512.png"
        alt=""
        width={240}
        height={240}
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 bottom-8 hidden h-60 w-60 object-contain opacity-[0.035] lg:block"
      />

      <div className="site-container relative">
        <Reveal>
          <SectionHeading
            eyebrow="Consultoria"
            className="consultoria-heading max-w-[42rem]"
            title={
              <>
                Escolha o plano ideal para a <span className="text-primary">sua evolução</span>
              </>
            }
            description="Acompanhamento online com treino personalizado, suporte e ajustes de acordo com o seu progresso."
          />
        </Reveal>

        <div className="mx-auto mt-7 grid max-w-4xl gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:mt-12">
          {PLANOS.map((plano, index) => (
            <Reveal key={plano.id} delay={index * 100}>
              <article
                className={cn(
                  "premium-card relative flex h-full flex-col overflow-hidden rounded-[1.35rem] p-5 transition duration-300 sm:rounded-3xl sm:p-8",
                  plano.destaque
                    ? "border-primary/55 glow-strong md:-translate-y-2"
                    : "hover:-translate-y-1 hover:border-primary/40",
                )}
              >
                {plano.destaque && (
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_18px_rgba(56,132,255,0.85)]" />
                )}

                {"selo" in plano && plano.selo && (
                  <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/35 bg-primary/12 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-primary sm:mb-5 sm:px-3 sm:py-1.5 sm:text-[0.65rem] sm:tracking-[0.16em]">
                    <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    {plano.selo}
                  </span>
                )}

                <h3 className="font-display text-[1.6rem] font-bold uppercase leading-none tracking-[-0.01em] text-white sm:text-3xl">
                  {plano.nome}
                </h3>
                <p className="mt-1.5 text-[0.8rem] leading-5 text-white/52 sm:mt-2 sm:text-sm sm:leading-6">
                  {plano.resumo}
                </p>

                <div className="mt-4 border-y border-white/[0.07] py-4 sm:mt-6 sm:py-5">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white/40 sm:text-[0.66rem] sm:tracking-[0.18em]">
                    Investimento
                  </p>
                  <div className="mt-1 flex flex-wrap items-end gap-x-2 gap-y-1">
                    <span className="font-display text-[1.65rem] font-bold uppercase leading-none text-primary text-glow sm:text-4xl">
                      {plano.preco || "Valor sob consulta"}
                    </span>
                    {plano.preco && <span className="pb-1 text-xs text-white/42">{plano.periodo}</span>}
                  </div>
                </div>

                <ul className="mt-4 flex flex-1 flex-col gap-2.5 sm:mt-6 sm:gap-3.5">
                  {plano.beneficios.map((beneficio) => (
                    <li key={beneficio} className="flex items-start gap-2.5 text-[0.8rem] sm:gap-3 sm:text-sm">
                      <span className="mt-0.5 flex h-[1.1rem] w-[1.1rem] shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/10 text-primary sm:h-5 sm:w-5">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </span>
                      <span className="leading-[1.25rem] text-white/76 sm:leading-5">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappPlanoUrl(plano.nome)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-5 min-h-11 w-full rounded-xl px-4 py-2.5 text-xs sm:mt-8 sm:min-h-12 sm:px-6 sm:py-3 sm:text-sm",
                    plano.destaque ? "button-primary" : "button-secondary",
                  )}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Quero começar agora
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
