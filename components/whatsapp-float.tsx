import { WhatsAppIcon } from "@/components/icons/whatsapp"
import { WHATSAPP_URL } from "@/lib/site-config"

export function WhatsappFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Gustavo pelo WhatsApp"
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] right-3 z-40 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full sm:bottom-6 sm:right-6 sm:h-14 sm:w-14 border border-white/25 bg-[#1673ff] text-white shadow-[0_0_0_1px_rgba(54,132,255,0.25),0_14px_38px_-12px_rgba(54,132,255,0.9)] transition duration-300 hover:-translate-y-1 hover:brightness-110"
    >
      <span className="absolute inset-0 -z-10 rounded-full animate-[softPulse_2.8s_ease-in-out_infinite]" />
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  )
}
