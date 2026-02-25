# iTech Imports

> Revendedor premium Apple no Brasil — site e-commerce com design "Dark Luxury Tech"

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=flat-square&logo=tailwindcss)

## Visão Geral

Site de e-commerce para a iTech Imports, revendedora premium de produtos Apple no Brasil. Inspirado em `apple.com/shop`, mas com estética escura e luxuosa — fundo `#080808`, cards glassmorphism, animações Framer Motion e preços em BRL.

## Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Next.js | 16 (App Router) | Framework React com SSR/SSG |
| React | 19 | UI com Server Components |
| TypeScript | 5.7 | Tipagem estática estrita |
| Tailwind CSS | 4.0 | Estilização CSS-first |
| Shadcn/ui | latest | Componentes acessíveis |
| Framer Motion | 12 | Animações e transições |
| Zustand | 5 | Estado do carrinho (localStorage) |
| Zod | 4 | Validação de formulários |
| React Hook Form | 7 | Gerenciamento de formulários |
| Vitest | 4 | Testes unitários |

## Páginas

| Rota | Descrição |
|---|---|
| `/` | Homepage com hero, categorias, produtos em destaque |
| `/iphone` | Catálogo de iPhones com filtros e ordenação |
| `/mac` | Catálogo de MacBooks |
| `/ipad` | Catálogo de iPads |
| `/acessorios` | AirPods, Apple Watch, acessórios |
| `/produto/[slug]` | Página de produto com galeria, variantes e specs |
| `/carrinho` | Carrinho de compras completo |
| `/busca?q=` | Busca em tempo real por produtos |

## Configuração

### Pré-requisitos

- Node.js 18+
- pnpm 8+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/itech-imports.git
cd itech-imports

# Instale as dependências
pnpm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Scripts

```bash
pnpm dev          # Servidor de desenvolvimento com Turbopack
pnpm build        # Build de produção
pnpm start        # Servidor de produção
pnpm lint         # Verificação de código com ESLint
pnpm test         # Testes em modo watch
pnpm test:run     # Testes uma vez (CI)
pnpm test:coverage # Relatório de cobertura
```

## Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── layout.tsx          # Layout raiz com fontes e providers
│   ├── page.tsx            # Homepage
│   ├── iphone/page.tsx     # Categoria iPhone
│   ├── mac/page.tsx        # Categoria Mac
│   ├── ipad/page.tsx       # Categoria iPad
│   ├── acessorios/page.tsx # Categoria Acessórios
│   ├── produto/[slug]/     # Página de produto dinâmica
│   ├── carrinho/page.tsx   # Carrinho
│   └── busca/page.tsx      # Busca
│
├── components/
│   ├── layout/             # Header, Footer, CartDrawer
│   ├── home/               # Seções da homepage
│   ├── product/            # Componentes de produto
│   ├── category/           # Componentes de categoria
│   ├── search/             # Componentes de busca
│   └── ui/                 # Componentes base (primitivos)
│
├── lib/
│   ├── constants.ts        # Constantes e variantes Framer Motion
│   ├── format.ts           # Formatadores BRL e parcelamento
│   ├── search.ts           # Lógica de busca client-side
│   └── utils.ts            # cn(), slugify(), etc.
│
├── mock/                   # Dados mockados (14 produtos Apple)
│   ├── products.ts         # Fixtures de produtos + helpers
│   └── categories.ts       # Metadados de categorias
│
├── schemas/                # Schemas Zod
│   ├── newsletter.schema.ts
│   └── search.schema.ts
│
├── store/
│   ├── cart.store.ts       # Zustand + localStorage persist
│   └── ui.store.ts         # Estado de UI (drawer, mobile nav)
│
└── types/                  # TypeScript types
    ├── product.ts
    ├── cart.ts
    └── category.ts
```

## Design System

### Cores

| Token | Valor | Uso |
|---|---|---|
| `--itech-bg-primary` | `#080808` | Background principal |
| `--itech-bg-secondary` | `#111111` | Background secundário |
| `--itech-accent-blue` | `#0A84FF` | CTAs e destaques |
| `--itech-text-primary` | `#F5F5F7` | Texto principal |
| `--itech-text-secondary` | `#A1A1A6` | Texto secundário |
| `--itech-border-subtle` | `rgba(255,255,255,0.08)` | Bordas |

### Tipografia

- **Display/Headlines**: Syne (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Preços/Números**: DM Mono (Google Fonts)

### Utilitários CSS

```css
.glass        /* Glassmorphism card */
.glass-strong /* Glassmorphism mais intenso */
.glow-blue    /* Box-shadow azul para CTAs */
.noise        /* Overlay de textura grain */
.font-display /* Família Syne */
.font-price   /* Família DM Mono */
```

## Dados Mock

O projeto inclui 14 produtos completos:

- **iPhone**: 16 Pro Max, 16 Pro, 16, 15
- **Mac**: MacBook Pro 14" M4 Pro, MacBook Air 15" M3, MacBook Air 13" M3
- **iPad**: iPad Pro 13" M4, iPad Air 13" M2, iPad mini 7
- **Acessórios**: AirPods Pro 2, AirPods 4, Apple Watch Series 10, MagSafe Charger

Cada produto tem: variantes de armazenamento e cor, especificações técnicas, imagens placeholder, badge e produtos relacionados.

## Carrinho

O carrinho usa Zustand com `persist` middleware — os itens são salvos em `localStorage` e restaurados automaticamente. A hidratação é feita manualmente no `Providers` component para evitar erros de hidratação SSR via `skipHydration: true` + `rehydrate()` em `useEffect`.

## Headers de Segurança

Configurados em `next.config.ts`:

- `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## Próximos Passos

- [ ] Integração com API real (backend)
- [ ] Sistema de pagamento (MercadoPago / Stripe)
- [ ] Autenticação de usuários (NextAuth.js)
- [ ] CMS para gerenciar produtos (Sanity / Contentful)
- [ ] E-mail transacional (Resend)
- [ ] Analytics (Google Analytics / Vercel Analytics)
- [ ] Testes E2E com Playwright

## Licença

Propriedade da iTech Imports. Todos os direitos reservados.
