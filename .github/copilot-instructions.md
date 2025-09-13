<!-- Auto-generated guidance for AI coding agents working on this repository -->
# Copilot / AI agent instructions for pd-rp-web

These notes give focused, actionable knowledge to help an AI code assistant be productive in this repo.

1) Big-picture architecture
- Frontend single-page app built with Vite + React (TypeScript). Entry: `src/main.tsx` -> `src/App.tsx`.
- Routing is client-side with `react-router-dom`; main routes are declared in `src/App.tsx`.
- The UI follows a component-driven layout under `src/components/` and a `ui/` subfolder with many Radix/Tailwind components.
- `src/data/` contains small static datasets (e.g. `searchData.ts`) used by UI features (search, navigation).
- Quiz and parser logic lives in `src/utils/quizParser.ts` which converts plain-text quiz banks into structured objects used by pages under `src/pages/RankBasedQuestions/`.

2) Build / dev / test workflows (concrete commands)
- Start dev server (hot-reload): `npm run dev` (runs `vite`) — server listens on port 8080 per `vite.config.ts`.
- Build production bundle: `npm run build` (or `npm run build:dev` for development-mode build).
- Preview production build: `npm run preview`.
- Lint: `npm run lint` (eslint configured; repo uses `@eslint/js` and plugins).

3) Path aliases and important config
- Path alias `@` -> `./src` is configured in `vite.config.ts` and `tsconfig.json`. Use imports like `import { Layout } from '@/components/Layout'`.
- Tailwind and PostCSS are used — styles are under `src/index.css`, `src/App.css` and `tailwind.config.ts`.

4) Project-specific conventions and patterns
- Routing-first structure: pages live in `src/pages/*` and registration happens centrally in `src/App.tsx`. When adding a page, add its route there.
- UI components are split between "top-level" components in `src/components/` (Layout, Sidebar, SearchBar, ThemeProvider) and primitives under `src/components/ui/` (Radix + shadcn-like wrappers).
- Use `cn()` helper from `src/lib/utils.ts` for merging Tailwind classes (it wraps `clsx` + `tailwind-merge`). Prefer it to manual class concatenation.
- Search API is local: `src/data/searchData.ts` and helper `searchPages(query)` return top-8 matches — keep that limit in mind when changing UI expectations.
- Quiz parsing expects bank text with markers:
  - Section separators use lines with `=====` followed by a title (see `parseCategoryRanks`/`parseIndividualRanks`).
  - Subsections use `--- Subsection ---` lines.
  - Questions start with `Q<number>.` and options with `A)`, `B)`, `C)`, `D)`. Correct options are marked with the check emoji (✔) in the source.

5) Integration points & external deps to watch
- React Query (`@tanstack/react-query`) is installed for async data caching but usage is limited in the codebase; if introducing server sync prefer this library.
- `lovable-tagger` is used as a dev plugin in `vite.config.ts` (component tagging in development). Don't ship runtime calls to it.
- Tailwind + class merging: use `cn()` not `clsx` directly when classes may conflict.

6) Typical change pattern for UI/features
- Add page: create `src/pages/...`, export default component; update `src/App.tsx` route list and add search entry in `src/data/searchData.ts` if it should be discoverable.
- Add UI primitive: create file under `src/components/ui/` and follow existing naming/style (lowercase filename matches exports, components use shadcn-like wrapper patterns).

7) Files to inspect when debugging common issues
- App boot & routing: `src/main.tsx`, `src/App.tsx`
- Global layout: `src/components/Layout.tsx`, `src/components/AppSidebar.tsx`
- Styles & Tailwind: `src/index.css`, `tailwind.config.ts`, `postcss.config.js`
- Build/dev config: `vite.config.ts`, `package.json` scripts
- Quiz parsing: `src/utils/quizParser.ts` (important if quiz pages show wrong data)

8) Safety: what not to change without human review
- Do not change the `searchData.ts` shape (SearchResult interface) without updating `SearchBar` and any consumers — they rely on `id, title, description, path, category, keywords`.
- Don't remove or rename the `@` alias without updating imports and tsconfig paths.

9) Quick examples (copyable patterns)
- Import with alias: `import Home from '@/pages/Home'`
- Use `cn()` helper: `className={cn('px-4', isActive && 'text-primary')}`
- Add a route: <Route path="/my-page" element={<MyPage />} /> added inside `src/App.tsx`'s <Routes> block.

10) Where to look for more context
- Example pages: `src/pages/BasicCodes/*`, `src/pages/RankBasedQuestions/*` show real usage of quiz data and parser.
- UI primitives: `src/components/ui/*` show consistent prop shapes and Tailwind patterns.

If anything above is unclear or you want examples for a specific area (add a new page, change search behavior, or extend quiz parsing), tell me which part and I will expand the instructions or update this file.
