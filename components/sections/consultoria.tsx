import Image from "next/image"
import { ArrowUpRight, Check } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { assetPath, PLANOS, whatsappPlanoUrl } from "@/lib/site-config"

export function Consultoria() {
  return (
    <section id="consultoria" className="relative overflow-hidden py-8 sm:py-16 lg:py-24">
      <Image
        src={assetPath("/assets/optimized/imagem1-512.png")}
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
            description="Planos objetivos para diferentes formas de acompanhamento, com atendimento direto pelo WhatsApp."
          />
        </Reveal>

        <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 justify-items-center gap-3.5 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:mt-12 xl:grid-cols-3">
          {PLANOS.map((plano, index) => (
            <Reveal
              key={plano.id}
              delay={index * 80}
              className="h-full w-full max-w-[23rem] md:max-w-none"
            >
              <article className="premium-card group relative flex h-full w-full flex-col overflow-hidden rounded-[1.2rem] p-4 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_55px_-32px_rgba(48,126,255,0.72)] sm:rounded-3xl sm:p-7">
                <h3 className="font-display text-[1.45rem] font-bold uppercase leading-none tracking-[-0.01em] text-white sm:text-[1.75rem]">
                  {plano.nome}
                </h3>

                <div className="mt-3 rounded-xl border border-primary/20 bg-primary/[0.055] px-3.5 py-3 sm:mt-4 sm:px-4 sm:py-4">
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.16em] text-white/42 sm:text-[0.64rem]">
                    Investimento
                  </p>
                  <p className="mt-1 font-display text-[1.75rem] font-bold uppercase leading-none text-primary text-glow sm:text-[2.15rem]">
                    {plano.preco}
                  </p>
                  <p className="mt-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white/42">
                    {plano.periodo}
                  </p>
                </div>

                <p className="mt-3 text-[0.79rem] leading-5 text-white/62 sm:mt-4 sm:text-sm sm:leading-6">
                  {plano.resumo}
                </p>

                <ul className="mt-3 flex flex-1 flex-col gap-2 sm:mt-5 sm:gap-2.5">
                  {plano.beneficios.map((beneficio) => (
                    <li key={beneficio} className="flex items-start gap-2.5 text-[0.79rem] sm:text-sm">
                      <span className="mt-0.5 flex h-[1.05rem] w-[1.05rem] shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary sm:h-5 sm:w-5">
                        <Check className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                      </span>
                      <span className="leading-[1.2rem] text-white/76 sm:leading-5">{beneficio}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappPlanoUrl(`${plano.nome} — ${plano.preco}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary mt-4 min-h-11 w-full rounded-xl px-3.5 py-2.5 text-[0.72rem] sm:mt-6 sm:min-h-12 sm:px-5 sm:py-3 sm:text-sm"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Contratar {plano.nome}
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
