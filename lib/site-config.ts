// ============================================================================
// CONFIGURAÇÕES EDITÁVEIS DO SITE
// Altere preços, contatos, links e conteúdos somente neste arquivo.
// ============================================================================

// Troque pelo domínio definitivo quando publicar o projeto.
export const SITE_URL = "https://gustavom40.com.br"

// Com domínio próprio, o site é publicado diretamente na raiz.
export function assetPath(path: string) {
  return path.startsWith("/") ? path : `/${path}`
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

// Preços e planos -------------------------------------------------------------
// Valores fornecidos pelo Gustavo na referência de agosto de 2026.
export const PRECO_HIBRIDO = "R$ 300/mês"
export const PRECO_CONSULTORIA_SIMPLES = "R$ 150/mensal"
export const PRECO_TRIMESTRAL = "R$ 300/3 meses"

export const PLANOS = [
  {
    id: "hibrido",
    nome: "Híbrido",
    preco: PRECO_HIBRIDO,
    periodo: "mensal",
    resumo: "1 aula por semana (4 aulas) + planejamento de treino.",
    beneficios: [
      "1 aula por semana",
      "4 aulas no mês",
      "Planejamento de treino",
    ],
  },
  {
    id: "consultoria-simples",
    nome: "Consultoria simples",
    preco: PRECO_CONSULTORIA_SIMPLES,
    periodo: "mensal",
    resumo: "Consultoria simples com acompanhamento mensal.",
    beneficios: [
      "Consultoria simples",
      "Acompanhamento mensal",
    ],
  },
  {
    id: "trimestral",
    nome: "Trimestral",
    preco: PRECO_TRIMESTRAL,
    periodo: "pacote de 3 meses",
    resumo: "Acompanhamento completo durante 3 meses.",
    beneficios: [
      "3 meses de acompanhamento",
      "1 avaliação presencial",
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
