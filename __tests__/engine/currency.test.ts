import { describe, it } from 'vitest'

describe('Currency Conversion', () => {
  describe('USD/ILS Exchange Rate', () => {
    it.todo('Should fetch current USD/ILS rate from Yahoo Finance (symbol: USDILS=X)')
    it.todo('Exchange rate should be cached for 24 hours')
    it.todo('Cache hit should not trigger additional API call')
    it.todo('Rate should be a positive decimal (e.g., 3.65)')
  })

  describe('Conversion Logic', () => {
    it.todo('Convert $100 USD to ILS: $100 × 3.65 = ₪365 (at rate 3.65)')
    it.todo('Convert ₪365 ILS to USD: ₪365 / 3.65 = $100 (round-trip accuracy)')
    it.todo('Should maintain precision through round-trip conversions')
    it.todo('Should handle very small amounts ($0.01 → ₪0.04)')
  })

  describe('Display Formatting', () => {
    it.todo('USD format: $1,234.56 (dollar sign, comma thousands, 2 decimals)')
    it.todo('NIS format: ₪1,234.56 (shekel sign, comma thousands, 2 decimals)')
    it.todo('Should use standard Arabic numerals (0-9), not Hebrew numerals')
    it.todo('Should handle large numbers: $1,000,000.00 with proper formatting')
    it.todo('Should handle small amounts: $0.01 and ₪0.01 exactly')
  })

  describe('Currency Symbols', () => {
    it.todo('USD symbol should be $ (U+0024)')
    it.todo('NIS symbol should be ₪ (U+20AA, Hebrew Sheqel sign)')
    it.todo('Should display symbol on correct side ($ before number, ₪ before number for Hebrew RTL)')
  })

  describe('Negative Amounts', () => {
    it.todo('Negative USD: -$1,234.56')
    it.todo('Negative NIS: -₪1,234.56')
    it.todo('Should handle negative conversions correctly')
  })

  describe('Edge Cases', () => {
    it.todo('Zero conversion: $0 → ₪0')
    it.todo('Very large amounts: $10,000,000 should not overflow')
    it.todo('Should handle conversion at historical exchange rate (not just current)')
    it.todo('Should round to 2 decimals for display, maintain precision internally')
  })

  describe('Investment Simulation with Currency', () => {
    it.todo('$1,000 USD initial → convert to ILS if investing in TA-35 → convert back to USD for display')
    it.todo('Should use exchange rate at simulation start date, not current rate')
    it.todo('All calculations in native currency; conversion only for display')
  })

  describe('Locale-Aware Formatting', () => {
    it.todo('Hebrew locale should format numbers with Hebrew conventions (if applicable)')
    it.todo('Thousands separator should be comma (,)')
    it.todo('Decimal separator should be period (.)')
  })
})
