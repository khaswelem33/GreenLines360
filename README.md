# Green Lines for Investment — Corporate Website

Premium multilingual corporate website for Green Lines for Investment
(جرين لاينز للاستثمار) — *Where Growth Meets Precision*.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 3 (logical properties, RTL-safe)
- next-intl (6 locales, locale-prefixed routing)

## Locales

| Path | Language | Direction |
| ---- | -------- | --------- |
| `/ar` | العربية (default) | RTL |
| `/en` | English | LTR |
| `/it` | Italiano | LTR |
| `/de` | Deutsch | LTR |
| `/fr` | Français | LTR |
| `/es` | Español | LTR |

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000  → redirects to /ar
npm run build   # production build (also type-checks all content parity)
```

## Structure

- `src/content/` — all visible text, one folder per locale, typed by
  `src/content/types.ts`. A missing key in any locale fails the build.
- `src/i18n/` — locale config, middleware wiring, navigation helpers.
- `src/components/` — `ui/` primitives, `layout/`, `sections/`, `auth/`, `portal/`.
- `public/brand/` — original logo assets (never modified or restyled).

## Phase status

Phase 1 foundation: home, login UI, portal/dashboard placeholder,
inner-page placeholders. Hero media slider, full inner pages, and real
authentication arrive in later phases.
