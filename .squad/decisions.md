# Squad Decisions

## Active Decisions

### Phase 1 Research — Technical Decisions (Moses, 2026-04-22)

#### Decision 1: API Selection

**Status:** Approved  
**Selection:** Yahoo Finance via RapidAPI (Primary) + FMP (Fallback for US) + Static seed data

**Rationale:**
- Yahoo Finance is the only free-tier option covering both Israeli (TASE) and US markets
- Symbols: `^TA35`, `^TA125`, `POLI.TA` for Israeli; `AAPL`, `DIS`, `^GSPC`, `^IXIC` for US
- Free tier (25–500 requests/month) sufficient for demo app with server-side caching (24h TTL)
- FMP as fallback: 250 calls/day free tier for US-only data
- Historical depth: 20+ years, suitable for 5–30 year simulations
- Implementation: Next.js API route (`/api/stock/[symbol]`) with in-memory cache

**Symbols Reference:**
| Asset | Symbol | Market |
|---|---|---|
| S&P 500 | `^GSPC` | US |
| NASDAQ Composite | `^IXIC` | US |
| Apple | `AAPL` | US |
| Disney | `DIS` | US |
| TA-35 Index | `^TA35` | IL |
| TA-125 Index | `^TA125` | IL |
| Bank Leumi | `LUMI.TA` | IL |
| Bank Hapoalim | `POLI.TA` | IL |
| Teva Pharma | `TEVA.TA` | IL |

#### Decision 2: RTL Strategy

**Status:** Approved  
**Selection:** Tailwind CSS native logical properties (no plugin)

**Rationale:**
- Tailwind v3.3+ has native logical property utilities (`ps-*`, `pe-*`, `ms-*`, `me-*`, `start-*`, `end-*`)
- No third-party plugin needed; avoids bundle bloat and maintenance overhead
- Greenfield project → RTL-native from day one using logical properties throughout
- Conventions: Always use `ps-4` not `pl-4`, `me-2` not `mr-2`, `text-start` not `text-right`
- Exception: Charts (Recharts) render LTR by default; wrap in `<div dir="ltr">` to prevent axis inversion while keeping Hebrew labels
- Font: Assistant (primary), Heebo (fallback), loaded via `next/font`
- HTML root: `<html lang="he" dir="rtl">`

#### Decision 3: Data Normalization

**3a. Stock Splits:**
- Yahoo Finance historical data is pre-adjusted for splits (adjusted close price)
- Use `adjclose` field exclusively; no manual split handling required

**3b. Dividend Reinvestment:**
- MVP (Epic 2): Price-only growth mode (simple, intuitive for kids)
- Future: Total return mode (adds cumulative dividends with reinvestment assumption)
- Calculation when enabled: `shares += (dividend_per_share * shares) / price_at_dividend_date`

**3c. Currency Conversion (NIS ↔ USD):**
- All calculations in asset's native currency
- Fetch USD/ILS exchange rate from Yahoo Finance (`USDILS=X`), cache 24 hours
- Display: Convert final value to user's chosen currency with note "המרה לפי שער של היום" (converted at today's rate)

**3d. Inflation Adjustment:**
- MVP: Toggle "הצג בערכים ריאליים" (Show in real terms)
- Fixed annual inflation rate: 2.5% (Bank of Israel & Fed target)
- Formula: `real_value = nominal_value / (1 + 0.025)^years`
- Future: Fetch actual CPI data for precision

---

### PRD Decomposition & Work Item Planning (Moses, 2026-04-22)

**Status:** Approved

#### Work Items Overview

**20 work items across 4 epics, 3 sprints**

| Epic | Sprint | Items | Focus |
|---|---|---|---|
| **Foundation** | Sprint 1 | WI-1, WI-2 | Repo, scaffold |
| **Epic 1: UI Foundation** | Sprint 1–2 | WI-3, WI-4, WI-5, WI-6 | Next.js, RTL, theme, components |
| **Epic 2: Calculation Engine** | Sprint 1–2 | WI-7, WI-8, WI-9, WI-10, WI-11 | API, engine, utilities |
| **Epic 3: Simulation UI** | Sprint 2 | WI-12, WI-13, WI-14 | Form, chart, asset picker |
| **Epic 4: Polish & QA** | Sprint 3 | WI-15, WI-16, WI-17, WI-18, WI-19, WI-20 | Animations, QA, content |

**Critical Path:** WI-1 → WI-2 → WI-3 → WI-7 → WI-8 → WI-9 → WI-12 → WI-13  
(Foundation → Next.js → API → Engine → Form → Chart)

#### Agent Assignments

| Agent | Work Items | Focus |
|---|---|---|
| Moses | WI-1, WI-2, WI-20 | Repo, architecture, educational content |
| Miriam | WI-3, WI-4, WI-5, WI-6, WI-12, WI-13, WI-14, WI-15 | UI, RTL, charts, animations |
| Joseph | WI-7, WI-8, WI-9, WI-10, WI-11 | API, engine, utilities |
| Deborah | WI-16, WI-17, WI-18, WI-19 | QA (mobile, accuracy, RTL, API) |

#### Sprint 1 Execution Plan
- WI-1 → WI-2 → WI-3, WI-4, WI-5 (sequential, then parallel Miriam)
- WI-7 → WI-8 (Joseph parallel with Miriam after WI-3)

---

### Next.js App Router Architecture (Moses, 2026-04-22)

**Status:** Approved  
**Document:** Comprehensive folder structure with decision rationale

#### Key Structure
```
src/
├── app/              # Next.js App Router
├── components/       # Grouped by domain (ui/, simulator/, charts/, gamification/)
├── hooks/            # Custom React hooks
├── services/         # Server-side only (API keys, never import to client)
├── engine/           # Pure calculation logic (testable, reusable)
├── types/            # TypeScript definitions
├── lib/              # Shared utilities (formatters, validators, constants)
└── i18n/             # Hebrew strings, educational content

public/
├── images/           # Logo, illustrations, badges
└── seed-data/        # Static fallback JSON (S&P 500, TA-35, Apple)

__tests__/            # Test files mirroring src/ structure
```

#### Separation of Concerns
- **`engine/`**: Pure calculation, zero React dependencies → unit testable
- **`services/`**: Server-side only (API keys), import only in API routes/server components
- **`public/seed-data/`**: Dev/demo fallback, zero API calls, predictable test data
- **`i18n/`**: All Hebrew strings centralized (UI labels, educational facts, milestones)

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
