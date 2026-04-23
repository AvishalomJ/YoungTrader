# Product Requirements Document (PRD): Stock Hero (גיבור הבורסה)

## 1. Executive Summary
**Vision:** To democratize financial literacy for the next generation by providing an interactive, data-driven "Investment Time Machine" that teaches children the power of long-term investing and compound interest.

**Goal:** Create a Hebrew-based web app where kids (10+) can simulate investments using real-world historical data from both Israeli and US markets.

## 2. Target Audience
- **Primary:** Children aged 10-15.
- **Secondary:** Parents looking for a tool to facilitate financial discussions at home.
- **UX Principles:** Gamified, visual-heavy, simple terminology, RTL (Hebrew) first.

## 3. Functional Requirements

### 3.1 The "Time Machine" Simulator
- **Input:** Initial Investment (NIS/USD), Monthly Contribution (optional), Choice of Asset (Index/Stock), and Start Date (e.g., "5 years ago").
- **Engine:** The app must fetch real historical prices and calculate the portfolio value if held until today.
- **Comparison:** Compare the result against a "Piggy Bank" (0% interest/Cash) to show the opportunity cost.

### 3.2 Real-World Data Integration
- **US Markets:** S&P 500, NASDAQ, Blue-chip stocks (Apple, Disney, etc.).
- **Israeli Markets:** TA-35, TA-125, major Israeli companies.
- **Currency:** Support for both NIS and USD with automatic conversion logic if needed.

### 3.3 Visualizations & UI
- **Interactive Chart:** A line graph showing the "Snowball Effect."
- **Milestones:** Visual badges when the money "doubles" or reaches a goal (e.g., "Price of a PlayStation").
- **RTL Layout:** Fully localized Hebrew interface, fonts (Assistant/Heebo), and alignment.

## 4. Technical Stack
- **Frontend:** Next.js 14+ (App Router), TypeScript.
- **Styling:** Tailwind CSS + tailwindcss-rtl plugin.
- **State/Data:** React Query (for API caching).
- **Charts:** Recharts (responsive and accessible).
- **Animations:** Framer Motion.

## 5. Phase 1: Research (Architect Task)
Before coding, the Architect Agent must finalize:
- **API Selection:** Evaluate Financial Modeling Prep vs. Alpha Vantage vs. Yahoo Finance (via RapidAPI) for reliable Israeli (TASE) and US data.
- **RTL Strategy:** Define the global CSS strategy to handle Hebrew text without layout shifts.
- **Data Normalization:** How to handle stock splits and dividends in the historical calculation to ensure "Real" results.

## 6. GitHub Backlog (Issues for Agents)

### Epic 1: Project Foundation
- **Issue #1:** Initialize Next.js 14 project with TypeScript, Tailwind, and RTL configuration.
- **Issue #2:** Setup Theme Provider (Kid-friendly colors) and Hebrew typography.

### Epic 2: Data & Engine
- **Issue #3:** Create FinancialAPI service layer to fetch historical data.
- **Issue #4:** Build the InvestmentEngine hook to calculate compounding returns and inflation adjustments.

### Epic 3: Interactive UI
- **Issue #5:** Build the SimulationForm with Hebrew validation and sliders.
- **Issue #6:** Implement GrowthChart using Recharts with interactive tooltips in Hebrew.

### Epic 4: Gamification & Polish
- **Issue #7:** Add MilestonePopups and educational "Did you know?" cards.
- **Issue #8:** Final QA for Mobile Responsiveness and RTL alignment.

## 7. Agent Handoff & Workflow
- **Architect Agent:** Reviews Research (Phase 1), confirms the API, and creates the GitHub Repository with the defined folder structure.
- **Dev Agent A (Backend/Logic):** Focuses on Epics 2 & 3 (Data fetching and math logic).
- **Dev Agent B (Frontend/UI):** Focuses on Epic 1 & 3 (Layout, Charts, and Hebrew Styling).
- **QA Agent:** Runs tests on the simulation accuracy against real market tools.

## 8. Github repo
Make sure to create a GitHub repo for this project and to push all the needed data, issues and code to there.
