import { describe, it } from 'vitest'

describe('GrowthChart Component', () => {
  describe('Rendering', () => {
    it.todo('Should render Recharts LineChart with two lines (investment vs piggy bank)')
    it.todo('Should display Hebrew labels: "הצמיחה" (growth), "חסכונות" (savings)')
    it.todo('Should be wrapped in `dir="ltr"` container to prevent axis inversion')
    it.todo('Should not crash with empty data')
  })

  describe('Chart Data', () => {
    it.todo('Should plot investment value over time (ascending for positive returns)')
    it.todo('Should plot piggy bank value (horizontal line at 0% growth)')
    it.todo('Should show compound effect (exponential curve for long periods)')
    it.todo('Should handle negative returns (downward curve)')
  })

  describe('Interactivity', () => {
    it.todo('Should display tooltip on hover showing date, investment value, piggy bank value')
    it.todo('Tooltip text should be in Hebrew')
    it.todo('Should be responsive to different chart widths')
  })

  describe('Axes & Labels', () => {
    it.todo('X-axis should show dates (every N months for readability)')
    it.todo('Y-axis should show values in selected currency ($, ₪)')
    it.todo('Should not have hardcoded left/right (use LTR wrapper)')
    it.todo('Grid lines should be visible but not overwhelming')
  })

  describe('Legend', () => {
    it.todo('Should display legend with two entries: investment line color + piggy bank line color')
    it.todo('Legend text should be in Hebrew')
    it.todo('Should be clickable to toggle line visibility')
  })

  describe('Mobile Responsiveness', () => {
    it.todo('Should resize responsively on smaller screens (< 640px width)')
    it.todo('Should remain readable on mobile (font size should not be too small)')
    it.todo('Should stack legend below chart on mobile if needed')
  })

  describe('RTL Layout', () => {
    it.todo('LTR wrapper should prevent axis inversion')
    it.todo('Hebrew labels should be readable and properly positioned')
    it.todo('Legend should not be reversed (LTR container overrides RTL)')
  })

  describe('Colors & Accessibility', () => {
    it.todo('Investment line color should have contrast >= 3:1 against background')
    it.todo('Piggy bank line should be visually distinct (e.g., different color + dashed style)')
    it.todo('Colors should be distinguishable for colorblind users')
  })

  describe('Edge Cases', () => {
    it.todo('Single data point should not crash')
    it.todo('Very large numbers (millions) should format with commas')
    it.todo('Very small periods (1 month) should not appear as empty chart')
  })
})
