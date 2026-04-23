# Project Context

- **Project:** YoungTrader — Kid-friendly Hebrew investment simulator
- **Stack:** Next.js, TypeScript, Tailwind CSS, Hebrew RTL
- **User:** Avishalom Jan
- **Created:** 2026-04-22

## Core Context

Agent Moses initialized as Lead. Responsible for architecture, code review, and technical decisions.

## Recent Updates

📌 Team initialized on 2026-04-22

## Learnings

### WI-1 & WI-2: GitHub Repo & Project Scaffold — 2026-04-22

✅ **GitHub Repository**
- Repository: https://github.com/AvishalomJ/YoungTrader
- Owner: AvishalomJ
- Branch: master
- Initial commit: `67f4510` (124 files, 6449 insertions)

✅ **Project Scaffold Complete**
- Full folder structure created per decision: moses-folder-structure.md
- All 54 TypeScript placeholder files created with TODOs
- Configuration files: tsconfig.json, tailwind.config.ts, next.config.ts, package.json
- .env.example with API key template
- .gitignore with Next.js + Node standards
- README.md with project overview

✅ **GitHub Issues Created (8 total)**
- Epic 1: #1 (Next.js init), #2 (Theme/Typography)
- Epic 2: #3 (FinancialAPI), #4 (InvestmentEngine)
- Epic 3: #5 (SimulationForm), #6 (GrowthChart)
- Epic 4: #7 (MilestonePopups), #8 (Mobile QA)

✅ **Labels Created (11 total)**
- epic-1, epic-2, epic-3, epic-4
- squad:miriam, squad:joseph, squad:deborah, squad:moses
- P0, P1, P2

### Phase 1 Research — 2026-04-22

**API Selection:**
- Yahoo Finance (via RapidAPI) chosen as primary API — only free option with both TASE (Israeli) and US market data.
- TASE symbols use `.TA` suffix (e.g., `LUMI.TA`, `POLI.TA`); indices are `^TA35`, `^TA125`.
- FMP (Financial Modeling Prep) as US-only fallback (250 calls/day free).
- Alpha Vantage rejected — no TASE coverage at all.
- Free tier rate limits are tight (25–500 calls/month) — aggressive server-side caching (24h TTL) is mandatory.
- Static seed data (JSON) bundled for dev/demo mode — zero API calls needed.

**RTL Strategy:**
- Tailwind CSS native logical properties (`ps-*`, `pe-*`, `ms-*`, `me-*`) — no `tailwindcss-rtl` plugin needed.
- `<html lang="he" dir="rtl">` set in root layout.
- Font: Assistant (primary) + Heebo (fallback) via `next/font/google`.
- Charts (Recharts) wrapped in `<div dir="ltr">` to prevent axis inversion.

**Data Normalization:**
- Yahoo Finance provides split-adjusted prices (`adjclose`) — no manual split handling.
- MVP uses price-only growth (no dividend reinvestment) — simplicity for kids.
- Currency: calculations in native currency, convert at display time using cached exchange rate.
- Inflation: fixed 2.5% annual rate for MVP, toggle for real vs. nominal values.

**Architecture Patterns:**
- `engine/` directory: pure calculation functions, zero React deps — testable, reusable.
- `services/` directory: server-only (API keys, external calls) — never imported client-side.
- `hooks/` directory: React Query wrappers bridging services → components.
- `i18n/` directory: all Hebrew strings centralized (UI labels + educational content).
- `public/seed-data/`: static JSON fallback datasets.

**Key File Paths:**
- Decisions: `.squad/decisions/inbox/moses-phase1-research.md`
- Work items: `.squad/decisions/inbox/moses-prd-workitems.md`
- Folder structure: `.squad/decisions/inbox/moses-folder-structure.md`
- PRD: `.squad/prd.md`

**User Preferences:**
- User (Avishalom Jan) wants a kids' educational app, not a trading platform — simplicity over precision.
- Hebrew-first, RTL-native from day one.
- 20 work items decomposed across 4 agents: Moses (3), Miriam (8), Joseph (5), Deborah (4).
- Critical path: repo → scaffold → Next.js → API → engine → form → chart.
