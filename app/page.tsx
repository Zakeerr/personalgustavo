import { About } from "@/components/sections/about"
import { Consultoria } from "@/components/sections/consultoria"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Results } from "@/components/sections/results"
import { Social } from "@/components/sections/social"
import { Testimonials } from "@/components/sections/testimonials"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition focus:translate-y-0"
      >
        Ir para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <About />
        <Results />
        <Social />
        <Testimonials />
        <Consultoria />
        <Contact />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
