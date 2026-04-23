import { describe, it } from 'vitest'

describe('Inflation Adjustment', () => {
  describe('Real vs. Nominal Value Calculation', () => {
    it.todo('Nominal value $100,000 at 2.5% inflation over 10 years should have real value ~$78,120')
    it.todo('Should use formula: real_value = nominal_value / (1 + rate)^years')
    it.todo('Zero inflation (0% rate) should return nominal value unchanged')
    it.todo('Should handle negative inflation (deflation) correctly')
  })

  describe('Default Inflation Rates', () => {
    it.todo('Israel: Should default to 2.5% annual inflation rate')
    it.todo('US: Should default to 2.5% annual inflation rate')
    it.todo('Should allow override for custom inflation rate')
  })

  describe('Time Period Variations', () => {
    it.todo('1-year period: $100,000 nominal → $97,561 real (2.5% inflation)')
    it.todo('5-year period: $100,000 nominal → $88,385 real')
    it.todo('30-year period: $100,000 nominal → $47,362 real')
    it.todo('Should handle partial years correctly')
  })

  describe('Edge Cases', () => {
    it.todo('Zero nominal value should return zero')
    it.todo('Zero years should return nominal value unchanged')
    it.todo('Very high inflation (100%+ annually) should calculate correctly')
    it.todo('Fractional inflation rates (e.g., 0.5%) should be handled')
  })

  describe('Combined with Investment Returns', () => {
    it.todo('Investment with 10% return + 2.5% inflation over 10 years: real return ~6.1% CAGR')
    it.todo('Should correctly sequence: (1) calculate nominal returns, (2) adjust for inflation')
    it.todo('Nominal loss (negative return) with inflation should show larger real loss')
  })

  describe('UI Display', () => {
    it.todo('Toggle mode "הצג בערכים ריאליים" (Show in real terms) should switch calculations')
    it.todo('Should show both nominal and real values side-by-side when toggled')
    it.todo('Should display with same currency formatting as nominal')
  })
})
