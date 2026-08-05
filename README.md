# Gustavo Personal — Consultoria Fitness Online

Site de página única desenvolvido em Next.js, TypeScript e Tailwind CSS. O projeto está preparado para exportação estática e pode ser publicado no GitHub Pages, Vercel ou outra hospedagem de arquivos estáticos.

## Editar preços e contatos

Abra `lib/site-config.ts` e altere:

- `PRECO_MENSAL`
- `PRECO_TRIMESTRAL`
- `WHATSAPP_NUMBER`
- `INSTAGRAM_URL`
- dados profissionais, resultados e links dos vídeos

Enquanto os preços estiverem vazios, o site exibirá **Valor sob consulta**.

## Rodar no computador

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Validar e gerar a versão final

```bash
npm run typecheck
npm run build
```

A versão estática será criada na pasta `out`.

## Arquivos de mídia

Os arquivos originais foram preservados em `public/assets` e `public/videos`. Cópias otimizadas para o site ficam em `public/assets/optimized`, e as capas dos vídeos ficam em `public/videos/posters`.
