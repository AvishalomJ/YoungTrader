# YoungTrader - גיבור הבורסה (Stock Hero)

A kid-friendly Hebrew investment simulator built with Next.js and TypeScript.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Copy `.env.example` to `.env.local` and add your API keys:
   ```bash
   cp .env.example .env.local
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router
├── components/       # React components (UI, simulator, charts, gamification)
├── hooks/            # Custom React hooks
├── services/         # Server-side API services
├── engine/           # Pure calculation logic
├── types/            # TypeScript type definitions
├── lib/              # Utilities and constants
└── i18n/             # Hebrew content and localization
```

## 🏗️ Architecture

- **engine/**: Pure calculation functions (no React dependencies)
- **services/**: Server-only code with API keys
- **hooks/**: React hooks and React Query wrappers
- **components/**: Organized by domain (ui, simulator, charts, gamification)
- **i18n/**: All Hebrew strings centralized

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 📖 Documentation

See `.squad/decisions/inbox/moses-folder-structure.md` for detailed architecture decisions.

## 🔑 Environment Variables

- `RAPIDAPI_KEY` - RapidAPI key for Yahoo Finance API
- `FMP_API_KEY` - Financial Modeling Prep API key (fallback)
- `CACHE_TTL_HOURS` - Cache duration for historical data (default: 24)

## 👥 Team

- **Moses** - Lead, Architecture
- **Miriam** - UI/Components, Gamification
- **Joseph** - API Integration, Engine
- **Deborah** - QA, Mobile Testing
