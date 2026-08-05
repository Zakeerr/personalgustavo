"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site-config"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("inicio")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map(({ id }) => document.getElementById(id)).filter(
      (section): section is HTMLElement => Boolean(section),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: [0, 0.1, 0.4] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [])

  const navigate = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-[#050a16]/88 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.95)] backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-black/70 via-black/30 to-transparent",
      )}
    >
      <nav aria-label="Navegação principal" className="site-container flex h-[4.5rem] items-center justify-between">
        <button
          type="button"
          onClick={() => navigate("inicio")}
          aria-label="Ir para o início"
          className="rounded-xl"
        >
          <BrandLogo priority />
        </button>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => navigate(link.id)}
                aria-current={active === link.id ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-[0.82rem] font-semibold transition-colors",
                  active === link.id
                    ? "text-white"
                    : "text-white/58 hover:bg-white/[0.035] hover:text-white",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-center bg-primary shadow-[0_0_12px_rgba(56,132,255,0.9)] transition-transform",
                    active === link.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white transition hover:border-primary/50 hover:bg-primary/10 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "site-container absolute inset-x-0 top-full border-b border-white/10 bg-[#050a16]/97 pb-5 pt-3 backdrop-blur-xl transition duration-300 xl:hidden max-h-[calc(100svh-4.5rem)] overflow-y-auto",
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-2 opacity-0",
        )}
      >
        <div className="mx-auto max-w-lg">
          <div className="premium-card mb-4 rounded-2xl p-4">
            <BrandLogo />
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Consultoria online com estratégia, acompanhamento e foco na sua evolução.
            </p>
          </div>
          <ul className="grid gap-1.5">
            {NAV_LINKS.map((link, index) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => navigate(link.id)}
                  className={cn(
                    "flex min-h-12 w-full items-center justify-between rounded-xl px-4 text-left text-sm font-semibold transition",
                    active === link.id
                      ? "border border-primary/35 bg-primary/12 text-primary"
                      : "border border-transparent text-white/72 hover:bg-white/[0.04] hover:text-white",
                  )}
                >
                  {link.label}
                  <span className="text-xs opacity-55">0{index + 1}</span>
                </button>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary mt-4 w-full"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
