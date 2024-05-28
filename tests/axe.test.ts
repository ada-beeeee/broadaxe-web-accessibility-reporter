import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('DEC Homepage', () => {

  test('Scan page for accessibility issues', async ({ page }, testInfo) => {
    await page.goto('https://www.environmentalcaucus.com/', { waitUntil: "networkidle" })

    // await page.screenshot({ path: 'artifacts/before_report.png' })

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

      await testInfo.attach('accessibility-scan-results', {
        body: JSON.stringify(accessibilityScanResults, null, 2),
        contentType: 'application/json'
      })

    // await page.screenshot({ path: 'artifacts/after_report.png' })

    expect(accessibilityScanResults.violations).toEqual([])

  })
})
