import Image from "next/image"
import { assetPath } from "@/lib/site-config"
import { cn } from "@/lib/utils"

interface BrandLogoProps {
  compact?: boolean
  priority?: boolean
  className?: string
}

export function BrandLogo({ compact = false, priority = false, className }: BrandLogoProps) {
  return (
    <span className={cn("inline-flex min-w-0 items-center gap-3", className)}>
      <span className="logo-frame relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/90 shadow-[0_0_24px_rgba(47,128,255,0.22)]">
        <Image
          src={assetPath("/assets/optimized/imagem1-512.png")}
          alt="Logotipo Gustavo Personal"
          width={512}
          height={512}
          priority={priority}
          className="h-full w-full object-contain"
        />
      </span>
      {!compact && (
        <span className="min-w-0 leading-none">
          <span className="block truncate font-display text-[1.05rem] font-bold uppercase tracking-[0.08em] text-white">
            Gustavo
          </span>
          <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-primary">
            Personal
          </span>
        </span>
      )}
    </span>
  )
}
