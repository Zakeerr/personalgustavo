import type { Metadata, Viewport } from "next"
import { Inter, Oswald } from "next/font/google"
import { SITE_URL } from "@/lib/site-config"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gustavo Personal | Consultoria Fitness Online",
    template: "%s | Gustavo Personal",
  },
  description:
    "Treinamento personalizado e acompanhamento online com foco em força, mobilidade, alívio de dores e qualidade de vida.",
  keywords: [
    "personal trainer",
    "consultoria fitness online",
    "treino personalizado",
    "treinamento funcional",
    "mulheres 40+",
    "Suzano",
    "Gustavo Personal",
  ],
  authors: [{ name: "Gustavo Personal" }],
  creator: "Gustavo Personal",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    title: "Gustavo Personal | Consultoria Fitness Online",
    description:
      "Treinamento personalizado e acompanhamento online para conquistar resultados com segurança, estratégia e constância.",
    siteName: "Gustavo Personal",
    images: [
      {
        url: `${SITE_URL}/assets/optimized/imagem2.webp`,
        width: 1672,
        height: 941,
        alt: "Gustavo Personal em ambiente de academia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gustavo Personal | Consultoria Fitness Online",
    description: "Treinamento personalizado e acompanhamento online para resultados reais.",
    images: [`${SITE_URL}/assets/optimized/imagem2.webp`],
  },
  icons: {
    icon: `${SITE_URL}/icon-32.png`,
    apple: `${SITE_URL}/apple-icon.png`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#050a16",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
