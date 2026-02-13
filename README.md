# Alfredo - Central de Agentes de Inteligencia Artificial

Sistema web interativo com cena 3D de um robo, construido como interface principal para a Central de Agentes de IA.

## Tecnologias

| Tecnologia | Versao | Descricao |
|---|---|---|
| Next.js | 16.x | Framework React com App Router |
| React | 19.x | Biblioteca de UI |
| TypeScript | 5.x | Tipagem estatica |
| Tailwind CSS | 4.x | Framework CSS utilitario |
| shadcn/ui | - | Componentes de UI reutilizaveis |
| Framer Motion | 12.x | Animacoes e transicoes |
| Spline | 4.x | Cenas 3D interativas |
| Lucide React | - | Biblioteca de icones |

## Estrutura do Projeto

```
src/
├── app/                    # App Router (paginas e layouts)
│   ├── layout.tsx          # Layout raiz (fonte, metadata, HTML)
│   ├── page.tsx            # Pagina principal
│   └── globals.css         # Estilos globais e variaveis CSS
│
├── components/             # Componentes React
│   ├── ui/                 # Componentes base reutilizaveis (shadcn)
│   │   ├── card.tsx        # Componente Card
│   │   ├── spotlight.tsx   # Efeito Spotlight com mouse tracking
│   │   └── splite.tsx      # Wrapper do Spline com lazy loading
│   └── demo/               # Componentes de demonstracao
│       └── spline-scene-basic.tsx  # Cena 3D com robo
│
├── constants/              # Constantes da aplicacao
│   └── index.ts            # Nome do app, URLs das cenas Spline
│
├── hooks/                  # Hooks customizados
│   └── index.ts
│
├── lib/                    # Utilitarios
│   └── utils.ts            # Funcao cn() para merge de classes CSS
│
├── services/               # Servicos e integracoes externas
│   └── index.ts
│
└── types/                  # Definicoes de tipos TypeScript
    └── index.ts
```

### Arquivos de Configuracao (raiz)

| Arquivo | Descricao |
|---|---|
| `next.config.ts` | Configuracao do Next.js (Turbopack, devIndicators) |
| `tsconfig.json` | Configuracao do TypeScript com path aliases |
| `postcss.config.mjs` | Configuracao do PostCSS com Tailwind CSS |
| `components.json` | Configuracao do shadcn/ui |
| `eslint.config.mjs` | Configuracao do ESLint |
| `.env.example` | Modelo de variaveis de ambiente |
| `.gitignore` | Arquivos ignorados pelo Git |

## Como Executar

### Pre-requisitos

- Node.js 20+ instalado
- npm 10+ instalado

### Instalacao

```bash
# Clonar o repositorio
git clone https://github.com/alfredo3l/IA.git
cd IA

# Instalar dependencias
npm install

# Copiar variaveis de ambiente (quando necessario)
cp .env.example .env.local
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build de Producao

```bash
# Gerar build otimizado
npm run build

# Iniciar servidor de producao
npm run start
```

### Linting

```bash
npm run lint
```

## Componentes Principais

### SplineScene (`components/ui/splite.tsx`)

Wrapper para cenas 3D do Spline com lazy loading e Suspense.

```tsx
import { SplineScene } from "@/components/ui/splite"

<SplineScene
  scene="URL_DA_CENA_SPLINE"
  className="w-full h-full"
/>
```

### Spotlight (`components/ui/spotlight.tsx`)

Efeito de luz que acompanha o cursor do mouse, usando Framer Motion.

```tsx
import { Spotlight } from "@/components/ui/spotlight"

<Spotlight className="-top-40 left-0" size={200} />
```

### Card (`components/ui/card.tsx`)

Componente Card do shadcn/ui com variantes.

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Titulo</CardTitle>
  </CardHeader>
  <CardContent>Conteudo</CardContent>
</Card>
```

## Deploy

O projeto esta configurado para deploy na **Vercel**.

1. Conecte o repositorio GitHub na Vercel
2. O deploy acontece automaticamente a cada push na branch `main`
3. URL de producao: configurada na Vercel

## Convenoes do Projeto

- **Path aliases**: `@/` aponta para `src/`
- **Componentes UI**: pasta `components/ui/` (padrao shadcn)
- **Constantes**: centralizadas em `constants/index.ts`
- **Estilos**: Tailwind CSS com variaveis CSS no `globals.css`
- **Responsividade**: mobile-first com breakpoints do Tailwind (`md:`, `lg:`)

## Proximos Passos

- [ ] Integrar com Supabase (autenticacao e banco de dados)
- [ ] Adicionar paginas de agentes de IA
- [ ] Implementar sistema de navegacao
- [ ] Adicionar dashboard com metricas
- [ ] Integrar APIs de IA

## Licenca

Projeto privado - Todos os direitos reservados.
