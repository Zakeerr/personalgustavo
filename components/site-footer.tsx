import { BrandLogo } from "@/components/brand-logo"
import { InstagramIcon } from "@/components/icons/instagram"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { INSTAGRAM_URL, NAV_LINKS, PROFILE, WHATSAPP_URL } from "@/lib/site-config"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.07] bg-[#02050c]">
      <div className="site-container py-10 sm:py-12">
        <div className="grid gap-9 md:grid-cols-[1.25fr_1fr_0.75fr]">
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
              Treinamento personalizado e acompanhamento online com foco em segurança, estratégia, constância e qualidade de vida.
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              CREF {PROFILE.cref}
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/38">Navegação</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-white/58 transition hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/38">Fale comigo</p>
            <div className="mt-4 flex gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white transition hover:border-primary/50 hover:bg-primary hover:text-white"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white transition hover:border-primary/50 hover:bg-primary hover:text-white"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-white/[0.07] pt-6 text-xs text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {PROFILE.marca}. Todos os direitos reservados.</p>
          <p>Consultoria fitness online · Suzano/SP</p>
        </div>
      </div>
    </footer>
  )
}
