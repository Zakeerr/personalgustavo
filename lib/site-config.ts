// ============================================================================
// CONFIGURAÇÕES EDITÁVEIS DO SITE
// Altere preços, contatos, links e conteúdos somente neste arquivo.
// ============================================================================

// Troque pelo domínio definitivo quando publicar o projeto.
export const SITE_URL = "https://zakeerr.github.io/personalgustavo"

// O site está publicado em uma subpasta do GitHub Pages.
// Em desenvolvimento local, os arquivos continuam acessíveis pela raiz.
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/personalgustavo" : ""

export function assetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return `${BASE_PATH}${normalizedPath}`
}

// Contato --------------------------------------------------------------------
export const WHATSAPP_NUMBER = "5511992094509"
export const WHATSAPP_DISPLAY = "+55 11 99209-4509"
export const INSTAGRAM_URL = "https://www.instagram.com/gustavovpersonal/reels/"

const CONTATO_MSG =
  "Olá Gustavo! Conheci sua consultoria pelo site e gostaria de mais informações."

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  CONTATO_MSG,
)}`

export function whatsappPlanoUrl(plano: string) {
  const mensagem = `Olá Gustavo! Conheci sua consultoria pelo site e quero começar com o ${plano}. Pode me passar mais informações?`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`
}

// Dados profissionais --------------------------------------------------------
export const PROFILE = {
  nome: "Gustavo",
  marca: "Gustavo Personal",
  cargo: "Personal Trainer",
  cref: "161019-G/SP",
  local: "Suzano",
  especialidade: "Treinamento funcional aplicado ao alívio de dores",
  publico: "Mulheres com mais de 40 anos",
} as const

// Preços ---------------------------------------------------------------------
// Preencha os valores entre aspas. Enquanto estiverem vazios, o site exibirá
// “Valor sob consulta”, sem inventar um preço.
export const PRECO_MENSAL = ""
export const PRECO_TRIMESTRAL = ""

export const PLANOS = [
  {
    id: "mensal",
    nome: "Plano mensal",
    resumo: "Acompanhamento individual por 1 mês",
    preco: PRECO_MENSAL,
    periodo: "por mês",
    destaque: false,
    beneficios: [
      "Um mês de acompanhamento",
      "Treino personalizado",
      "Ajustes de acordo com a evolução",
      "Suporte durante o acompanhamento",
      "Pagamento via Pix ou cartão de crédito",
    ],
  },
  {
    id: "trimestral",
    nome: "Plano trimestral",
    resumo: "Mais tempo para construir uma evolução consistente",
    preco: PRECO_TRIMESTRAL,
    periodo: "a cada 3 meses",
    destaque: true,
    selo: "Melhor escolha",
    beneficios: [
      "Três meses de acompanhamento",
      "Pague dois meses e ganhe o terceiro gratuitamente",
      "Treino personalizado",
      "Ajustes durante o acompanhamento",
      "Suporte contínuo",
      "Pagamento via Pix ou cartão de crédito",
      "Possibilidade de parcelamento",
    ],
  },
] as const

// Resultados -----------------------------------------------------------------
export const RESULTADOS = [
  {
    src: assetPath("/assets/optimized/imagem4.webp"),
    width: 942,
    height: 1600,
    alt: "Antes e depois de aluna entre novembro de 2025 e maio de 2026",
    destaque: "81 kg → 61 kg",
    descricao: "Novembro de 2025 — 81 kg / Maio de 2026 — 61 kg",
  },
  {
    src: assetPath("/assets/optimized/imagem5.webp"),
    width: 1600,
    height: 1600,
    alt: "Antes e depois de aluna entre janeiro de 2025 e janeiro de 2026",
    destaque: "Menos 28 kg",
    descricao: "Janeiro de 2025 / Janeiro de 2026 — menos 28 kg",
  },
  {
    src: assetPath("/assets/optimized/imagem6.webp"),
    width: 828,
    height: 796,
    alt: "Antes e depois de aluna após dois meses de acompanhamento",
    destaque: "Menos 4 kg",
    descricao: "Dois meses de acompanhamento — menos 4 kg",
  },
  {
    src: assetPath("/assets/optimized/imagem7.webp"),
    width: 1080,
    height: 1064,
    alt: "Antes e depois de aluna após seis meses de acompanhamento",
    destaque: "Menos 8 kg",
    descricao: "Seis meses de acompanhamento — menos 8 kg",
  },
  {
    src: assetPath("/assets/optimized/imagem8.webp"),
    width: 1600,
    height: 1600,
    alt: "Antes e depois de aluna com redução de peso e ganho de massa muscular",
    destaque: "Evolução completa",
    descricao: "Em seis meses, aproximadamente menos 4 kg e ganho de massa muscular",
  },
  {
    src: assetPath("/assets/optimized/imagem10.webp"),
    width: 1080,
    height: 1062,
    alt: "Antes e depois de aluna após seis meses de acompanhamento",
    destaque: "Menos 8 kg",
    descricao: "Seis meses de acompanhamento — menos 8 kg",
  },
] as const

// Vídeos ---------------------------------------------------------------------
export const VIDEOS = [
  {
    src: assetPath("/videos/video1.mp4"),
    poster: assetPath("/videos/posters/video1.webp"),
    instagram: "https://www.instagram.com/reel/DMFtM-Ts5_n/",
  },
  {
    src: assetPath("/videos/video2.mp4"),
    poster: assetPath("/videos/posters/video2.webp"),
    instagram: "https://www.instagram.com/reel/DKM_1iitLma/?igsh=MTBsN3llZXpydzZiaw==",
  },
  {
    src: assetPath("/videos/video3.mp4"),
    poster: assetPath("/videos/posters/video3.webp"),
    instagram: "https://www.instagram.com/reel/DQVBKgvEVY9/",
  },
  {
    src: assetPath("/videos/video4.mp4"),
    poster: assetPath("/videos/posters/video4.webp"),
    instagram: "https://www.instagram.com/reel/DKQTZtBtoe8/",
  },
] as const

// Depoimentos ----------------------------------------------------------------
export const DEPOIMENTOS = [
  {
    src: assetPath("/assets/imagem11.png"),
    width: 467,
    height: 416,
    alt: "Depoimento de aluna sobre resultados visíveis no corpo",
  },
  {
    src: assetPath("/assets/imagem12.png"),
    width: 500,
    height: 307,
    alt: "Depoimento de aluna sobre mais disposição durante os dias",
  },
  {
    src: assetPath("/assets/imagem13.png"),
    width: 445,
    height: 426,
    alt: "Depoimento de aluna sobre o trabalho do personal trainer Gustavo",
  },
  {
    src: assetPath("/assets/imagem14.png"),
    width: 398,
    height: 546,
    alt: "Depoimento de aluna sobre condicionamento, evolução e acompanhamento",
  },
] as const

// Navegação ------------------------------------------------------------------
export const NAV_LINKS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre mim" },
  { id: "resultados", label: "Resultados" },
  { id: "redes", label: "Redes sociais" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "consultoria", label: "Consultoria" },
  { id: "contato", label: "Contato" },
] as const
