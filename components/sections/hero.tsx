import { ArrowDownRight, ArrowRight } from "lucide-react"
import { assetPath } from "@/lib/site-config"

function HeroCopy({ mobile = false }: { mobile?: boolean }) {
  return (
    <div className={mobile ? "mx-auto max-w-2xl text-center" : "mx-auto max-w-xl text-center lg:mx-0 lg:max-w-[38rem] lg:text-left"}>
      <h1 className="text-balance font-display text-[2.45rem] font-bold uppercase leading-[0.98] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.35rem]">
        Transforme seu corpo, sua <span className="text-primary text-glow">saúde</span> e sua qualidade de vida
      </h1>

      <p className="mt-5 max-w-[35rem] text-pretty text-[0.98rem] leading-7 text-white/70 sm:text-lg sm:leading-8">
        Treinamento personalizado e acompanhamento online para você conquistar resultados reais com segurança, estratégia e constância.
      </p>

      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:mt-8 lg:flex lg:flex-wrap">
        <a href="#consultoria" className="button-primary w-full sm:w-auto">
          Quero conhecer os planos
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href="#resultados" className="button-secondary w-full sm:w-auto">
          Ver resultados reais
          <ArrowDownRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-transparent">
      <div className="lg:hidden">
        <div className="relative mt-[4.5rem] h-[55svh] min-h-[22rem] max-h-[32rem] overflow-hidden bg-black">
          <img
            src={assetPath("/assets/optimized/imagem3.webp")}
            alt="Gustavo, personal trainer, em ambiente de academia com iluminação azul"
            width={941}
            height={1672}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030712] via-[#030712]/55 to-transparent" />
        </div>

        <div className="site-container pb-12 pt-6">
          <HeroCopy mobile />
        </div>
      </div>

      <div className="relative hidden min-h-[760px] lg:flex lg:h-[100svh] lg:items-center">
        <div className="absolute inset-0 overflow-hidden bg-black">
          <img
            src={assetPath("/assets/optimized/imagem2.webp")}
            alt="Gustavo, personal trainer, em ambiente de academia com iluminação azul"
            width={1600}
            height={1066}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,17,0.96)_0%,rgba(3,8,20,0.9)_36%,rgba(3,8,20,0.36)_64%,rgba(2,6,17,0.1)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-black/35" />
        </div>

        <div className="site-container relative z-10 py-24">
          <HeroCopy />
        </div>
      </div>
    </section>
  )
}
