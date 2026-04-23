import { describe, it } from 'vitest'

describe('Compounding Engine', () => {
  describe('Basic Compounding Calculations', () => {
    it.todo('S&P 500: $1,000 for 10 years should grow to ~$2,593.74 (±5%)')
    it.todo('Should handle $0 initial investment without errors')
    it.todo('Should calculate compound interest with annual compounding')
    it.todo('Should verify piggy bank (0% return) stays at initial value')
  })

  describe('Monthly Contributions', () => {
    it.todo('$100/month for 5 years (60 contributions) should accumulate to ~$8,125')
    it.todo('Should combine initial investment + monthly contributions correctly')
    it.todo('Should handle $0 monthly contribution (investment only)')
    it.todo('Should calculate contributions at start of each month')
  })

  describe('Time Period Edge Cases', () => {
    it.todo('One-month investment should show minimal return (~0.83% at 10% annual)')
    it.todo('30-year investment should not overflow (should be ~$19,000-$20,000 at 10% CAGR)')
    it.todo('Should handle fractional days correctly when period < 1 day')
    it.todo('Very long periods (50+ years) should remain numerically stable')
  })

  describe('Negative Returns', () => {
    it.todo('2008 market crash (Jan 2008 - Mar 2009): $1,000 should decline to ~$650 (±5%)')
    it.todo('Should correctly handle negative annual returns')
    it.todo('Should not allow portfolio value to go below zero')
  })

  describe('Return Types', () => {
    it.todo('Should calculate annualized returns from daily/monthly data')
    it.todo('Should convert daily returns to period returns (e.g., 5-year)')
    it.todo('Should handle decimal percentages (e.g., 0.5% monthly)')
  })

  describe('Data Normalization', () => {
    it.todo('Should use adjusted close price (not open/high/low)')
    it.todo('Should handle stock splits (pre-adjusted by Yahoo Finance)')
    it.todo('Should use proper chronological date ordering (earliest to latest)')
  })

  describe('Currency Handling', () => {
    it.todo('Should calculate in native currency (USD for AAPL, ILS for ^TA35)')
    it.todo('Should maintain precision through multi-currency calculations')
  })
})
