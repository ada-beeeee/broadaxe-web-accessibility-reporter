import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { createHtmlReport } from 'axe-html-reporter'

test.describe('DEC website', () => {

  const scanPages = [
    'https://www.environmentalcaucus.com/',
    'https://www.environmentalcaucus.com/florida-environmental-caucus/florida-environmental-caucus-officers/',
    'https://www.environmentalcaucus.com/latest-news/',
    'https://www.environmentalcaucus.com/decf-events/'
  ]

  for (const scanPage of scanPages) {
    test(`Scan for accessibility issues: ${scanPage}`, async ({ page }) => {
      await page.goto(scanPage, { waitUntil: "networkidle" })
      
      const pageTitle = await page.title()

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze()

      createHtmlReport({
        results: accessibilityScanResults,
        options: {
          outputDir: 'test-results',
          reportFileName: pageTitle + ' - axe report.html'
        }
      })
      
      expect(accessibilityScanResults.violations.length).toEqual(0)
   }) 
  }
})
