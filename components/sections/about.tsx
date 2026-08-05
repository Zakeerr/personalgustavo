import Image from "next/image"
import { BadgeCheck, MapPin, Target, Users } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { assetPath, PROFILE } from "@/lib/site-config"

const INFO = [
  { icon: BadgeCheck, label: "Registro profissional", value: `CREF ${PROFILE.cref}` },
  { icon: MapPin, label: "Localização", value: PROFILE.local },
  { icon: Target, label: "Especialidade", value: PROFILE.especialidade },
  { icon: Users, label: "Público principal", value: PROFILE.publico },
]

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden py-10 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute -right-40 top-24 h-80 w-80 rounded-full bg-primary/[0.055] blur-3xl" />

      <div className="site-container relative">
        <div className="grid items-center gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading
                eyebrow="Sobre mim"
                align="left"
                className="[&_h2]:text-[1.75rem] [&_h2]:leading-[1.06] [&_p:last-child]:text-[0.94rem] [&_p:last-child]:leading-6 sm:[&_h2]:text-4xl sm:[&_p:last-child]:text-base sm:[&_p:last-child]:leading-7"
                title={
                  <>
                    Treino pensado para a <span className="text-primary">sua realidade</span>
                  </>
                }
                description="Meu trabalho é ajudar mulheres a desenvolverem força, mobilidade e confiança por meio de treinos personalizados. Cada planejamento considera o nível de condicionamento, as limitações individuais e os objetivos de cada aluna, sempre com foco em segurança, evolução e qualidade de vida."
              />
            </Reveal>

            <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
              {INFO.map((item, index) => (
                <Reveal key={item.label} delay={60 + index * 60}>
                  <div className="premium-card group flex h-full items-start gap-3 rounded-xl p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-primary/45 sm:rounded-2xl sm:p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white sm:h-10 sm:w-10 sm:rounded-xl">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/45 sm:text-[0.66rem] sm:tracking-[0.16em]">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words text-[0.84rem] font-semibold leading-5 text-white/90 sm:text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto mt-1 w-full max-w-[18rem] sm:max-w-[21rem] lg:mt-0 lg:max-w-[25rem] lg:mx-0">
              <div className="absolute -inset-2 rounded-[1.5rem] bg-primary/10 blur-2xl sm:-inset-3 sm:rounded-[1.8rem]" />

              <figure className="premium-card glow-border relative overflow-hidden rounded-[1.4rem] p-1.5 sm:rounded-[1.65rem] sm:p-2">
                <div className="relative overflow-hidden rounded-[1.08rem] sm:rounded-[1.25rem]">
                  <Image
                    src={assetPath("/assets/optimized/imagem9.webp")}
                    alt="Retrato do personal trainer Gustavo"
                    width={864}
                    height={1184}
                    loading="lazy"
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 336px, 400px"
                    className="h-auto w-full object-cover"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/65 to-transparent p-4 pt-16 sm:p-5 sm:pt-20">
                    <figcaption>
                      <span className="block font-display text-base font-bold uppercase tracking-wide text-white sm:text-xl">
                        Personal Trainer Gustavo
                      </span>
                      <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary sm:text-xs sm:tracking-[0.18em]">
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
