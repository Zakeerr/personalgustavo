import Image from "next/image"
import {
  Check,
  Dumbbell,
  HeartPulse,
  Move3d,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { assetPath, PROFILE } from "@/lib/site-config"

const OBJECTIVES = [
  { icon: Dumbbell, label: "Ganho de força" },
  { icon: Move3d, label: "Melhora da mobilidade" },
  { icon: HeartPulse, label: "Redução de dores" },
  { icon: ShieldCheck, label: "Emagrecimento com segurança" },
  { icon: Target, label: "Mais autonomia e qualidade de vida" },
]

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-8 sm:py-14 lg:py-24">
      <div className="pointer-events-none absolute -right-40 top-24 h-80 w-80 rounded-full bg-primary/[0.055] blur-3xl" />
      <div className="pointer-events-none absolute -left-44 bottom-20 h-72 w-72 rounded-full bg-primary/[0.035] blur-3xl" />

      <div className="site-container relative">
        <div className="grid items-start gap-6 sm:gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 xl:grid-cols-[0.78fr_1.22fr] xl:gap-16">
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading
                eyebrow="Sobre mim"
                align="left"
                className="[&_h2]:mt-3 [&_h2]:text-[1.55rem] [&_h2]:leading-[1.03] sm:[&_h2]:mt-4 sm:[&_h2]:text-4xl lg:[&_h2]:text-[2.55rem]"
                title={
                  <>
                    Movimento, força e <span className="text-primary">qualidade de vida</span>
                  </>
                }
              />
            </Reveal>

            <Reveal delay={50}>
              <div className="mt-4 space-y-2.5 text-[0.84rem] leading-[1.35rem] text-white/72 sm:mt-6 sm:space-y-3 sm:text-[0.98rem] sm:leading-7">
                <p>
                  <strong className="font-semibold text-white/92">
                    Sou Profissional de Educação Física, com atuação voltada para movimento, força, mobilidade e reabilitação.
                  </strong>
                </p>
                <p>
                  Tenho formação em Kettlebell Nível 1 e Nível 2, curso de Biomecânica pela USP, formação em Reabilitação Funcional pela FISIO UP e em Avaliação e Reprogramação do Movimento Humano.
                </p>
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="premium-card mt-4 rounded-xl border-primary/30 p-3.5 sm:mt-6 sm:rounded-2xl sm:p-5">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary sm:h-9 sm:w-9 sm:rounded-xl">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase leading-tight text-white sm:text-xl">
                      Treinos individualizados para cada realidade
                    </h3>
                    <p className="mt-1.5 text-[0.79rem] leading-5 text-white/68 sm:mt-2 sm:text-sm sm:leading-6">
                      Cada treino respeita as necessidades, limitações, objetivos e o histórico de cada pessoa, com planejamento seguro e acompanhamento próximo.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={130}>
              <div className="mt-4 sm:mt-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary sm:h-8 sm:w-8">
                    <Target className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </span>
                  <h3 className="font-display text-base font-bold uppercase tracking-wide text-white sm:text-xl">
                    Objetivos atendidos
                  </h3>
                </div>

                <div className="mt-2.5 grid grid-cols-2 gap-1.5 sm:mt-3 sm:gap-2.5">
                  {OBJECTIVES.map((item, index) => (
                    <div
                      key={item.label}
                      className={`flex min-h-[2.55rem] items-center gap-1.5 rounded-lg border border-primary/15 bg-primary/[0.055] px-2.5 py-1.5 sm:min-h-[2.9rem] sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2 ${index === OBJECTIVES.length - 1 ? "col-span-2" : ""}`}
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-primary/25 text-primary sm:h-6 sm:w-6">
                        <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      </span>
                      <span className="text-[0.68rem] font-semibold leading-4 text-white/78 sm:text-[0.82rem] sm:leading-5">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={170}>
              <div className="relative mt-4 overflow-hidden rounded-xl border border-primary/30 bg-[linear-gradient(135deg,rgba(18,63,136,0.32),rgba(5,12,27,0.9))] p-3.5 pl-4 shadow-[0_0_34px_-18px_rgba(56,132,255,0.72)] sm:mt-6 sm:rounded-2xl sm:p-5">
                <div className="absolute inset-y-0 left-0 w-1 bg-primary shadow-[0_0_14px_rgba(56,132,255,0.9)]" />
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary sm:text-[0.76rem] sm:tracking-[0.16em]">
                  Mais do que levantar peso
                </p>
                <p className="mt-1.5 text-[0.8rem] font-semibold leading-5 text-white/90 sm:mt-2 sm:text-[0.98rem] sm:leading-7">
                  Treinar é aprender a se movimentar melhor, fortalecer o corpo e conquistar mais autonomia e confiança para o dia a dia.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="order-2 lg:order-1 lg:sticky lg:top-28">
            <div className="relative mx-auto mt-0 w-full max-w-[15.5rem] sm:max-w-[19rem] lg:max-w-[24rem] lg:mx-0">
              <div className="absolute -inset-2 rounded-[1.4rem] bg-primary/10 blur-2xl sm:-inset-3 sm:rounded-[1.8rem]" />

              <figure className="premium-card glow-border relative overflow-hidden rounded-[1.25rem] p-1.5 sm:rounded-[1.65rem] sm:p-2">
                <div className="relative overflow-hidden rounded-[0.98rem] sm:rounded-[1.25rem]">
                  <Image
                    src={assetPath("/assets/optimized/imagem9.webp")}
                    alt="Retrato do personal trainer Gustavo"
                    width={864}
                    height={1184}
                    loading="lazy"
                    sizes="(max-width: 640px) 248px, (max-width: 1024px) 304px, 384px"
                    className="h-auto w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent p-3.5 pt-14 sm:p-5 sm:pt-20">
                    <figcaption>
                      <span className="block font-display text-sm font-bold uppercase tracking-wide text-white sm:text-xl">
                        Personal Trainer Gustavo
                      </span>
                      <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs sm:tracking-[0.18em]">
                        CREF {PROFILE.cref}
                      </span>
                    </figcaption>
                  </div>
                </div>
              </figure>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
