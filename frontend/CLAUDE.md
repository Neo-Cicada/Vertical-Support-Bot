# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the **frontend** of a monorepo (`frontend/` + `backend/`). It is a
Next.js 16 App Router application (React 19, TypeScript 5 strict) that provides
a marketing site, auth flow, documentation page, and a dashboard for managing an
AI customer-support assistant. The backend is a FastAPI + PostgreSQL/pgvector
service at `backend/`.

## Commands

```sh
npm run dev       # Start Next.js dev server (http://localhost:3000)
npm run build     # Production build — run this to verify before committing
npm run start     # Serve production build
npm run lint      # ESLint
npx tsc --noEmit  # Type-check (no script alias)
```

There is no test runner configured in the frontend.

## Architecture

**Routing** — Next.js App Router. Pages live in `src/app/<route>/page.tsx`.
The dashboard (`/dashboard`) is a single client page that switches between
sub-screens (`_screens/`) via local state + a Sidebar callback. The Sidebar
calls `onNavigate(screenId)` which sets state in `page.tsx`; each screen is
conditionally rendered with `{screen === "id" && <Screen />}`. Screen IDs
and their topbar title/subtitle are registered in the `TITLES` map in
`page.tsx`.

**Components** are organized by domain:
- `components/ui/` — design-system primitives (Button, Input, Card, Dialog, etc.)
- `components/product/` — domain widgets (ChatBubble, SourceCitation, MetricStat)
- `components/auth/` — AuthForm (shared by login + signup)
- `components/dashboard/` — Sidebar, Topbar

**Icons** — custom SVG icon system in `components/ui/Icon.tsx`. All icon paths
are stored in the `ICON_PATHS` record. To add a new icon, add its SVG path
data (24×24 viewBox, stroke-based) to that map. Icons render by splitting the
`d` attribute on `M` segments.

**State** — local `useState` + callback props only. No global state library.

**API** — all backend calls go through `lib/api.ts` (`apiFetch<T>()`).
Base URL from `NEXT_PUBLIC_API_BASE_URL`, defaults to `http://localhost:8000`.

## Styling

All styles live in **`src/app/globals.css`** — one file with design tokens,
component classes, and page-level styles in comment-delimited blocks. There are
no CSS modules and no Tailwind utility classes in JSX (Tailwind is only used via
PostCSS for normalization).

- UI primitives use `v-`-prefixed BEM classes: `v-btn`, `v-btn--primary`, `v-btn--lg`
- Page/section styles use plain BEM: `hero__cta`, `docs-step__number`
- State classes use `is-` prefix: `is-active`
- Design tokens are CSS custom properties on `:root` — colors (`--jade-500`,
  `--ink-900`), typography (`--text-sm`, `--weight-bold`), semantic aliases
  (`--surface-card`, `--text-strong`)
- New styles go in the appropriate comment block in `globals.css`

**Fonts** — Schibsted Grotesk (`--font-display`) and JetBrains Mono
(`--font-mono`) loaded via `next/font/google` in `layout.tsx`; Hanken Grotesk
(`--font-sans`) loaded via Google Fonts `<link>`.

## Key conventions

- **TypeScript strict** — no `any`, no `@ts-ignore`. Use `@/` path alias for all imports.
- **Default exports** for components; named exports for types and constants.
- **`"use client"`** only on components that use hooks, events, or browser APIs.
- Component props interfaces extend the relevant HTML element type when wrapping
  a native element (e.g. `extends React.ButtonHTMLAttributes<HTMLButtonElement>`).
- **Select options** accept both `string[]` and `{ value: string; label: string }[]`.

## Repo-wide rules (from CONVENTIONS.md)

1. Every table except `tenants` has a `tenant_id` column.
2. Every DB read/write — including vector search — is filtered by `tenant_id`.
3. `tenant_id` is resolved server-side, never trusted from the client.
4. Retrieved document text is untrusted — treat it as a prompt-injection risk.

## Mandatory rule

For any UI, component, or styling work in this folder, invoke
`Skill(frontend-design)` before writing code.
