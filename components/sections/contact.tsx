import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { InstagramIcon } from "@/components/icons/instagram"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { Reveal } from "@/components/reveal"
import { assetPath, INSTAGRAM_URL, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/site-config"

export function Contact() {
  return (
    <section id="contato" className="pb-9 pt-5 sm:pb-16 sm:pt-12 lg:pb-24">
      <div className="site-container">
        <div className="glow-strong relative overflow-hidden rounded-[1.4rem] border border-primary/30 bg-[#071126] sm:rounded-[1.75rem]">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/14 blur-3xl" />

          <div className="grid md:grid-cols-[0.86fr_1.14fr]">
            <div className="relative min-h-[17rem] overflow-hidden sm:min-h-[27rem] md:min-h-full">
              <Image
                src={assetPath("/assets/optimized/gustavo.png")}
                alt="Personal trainer Gustavo"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 43vw"
                className="object-cover object-[center_18%] sm:object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071126] via-[#071126]/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#071126]" />
            </div>

            <Reveal className="relative flex flex-col justify-center p-5 pt-4 sm:p-10 lg:p-14">
              <p className="section-eyebrow contact-eyebrow">
                <span aria-hidden="true" />
                Contato
              </p>

              <h2 className="mt-3 text-balance font-display text-[1.78rem] font-bold uppercase leading-[1.02] tracking-[-0.025em] text-white sm:mt-4 sm:text-4xl lg:text-5xl">
                Pronto para começar sua <span className="text-primary text-glow">transformação?</span>
              </h2>

              <p className="mt-3 max-w-xl text-pretty text-[0.88rem] leading-6 text-white/62 sm:mt-5 sm:text-base sm:leading-7">
                Fale comigo e descubra qual acompanhamento combina melhor com seus objetivos.
              </p>

              <div className="mt-5 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary min-h-11 w-full rounded-xl px-4 py-2.5 text-xs sm:min-h-12 sm:px-6 sm:py-3 sm:text-sm"
                >
                  <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  WhatsApp
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-secondary min-h-11 w-full rounded-xl px-4 py-2.5 text-xs sm:min-h-12 sm:px-6 sm:py-3 sm:text-sm"
                >
                  <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  Instagram
                  <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              </div>

              <p className="mt-3 text-xs font-medium text-white/45 sm:mt-4 sm:text-sm">
                WhatsApp: {WHATSAPP_DISPLAY}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
