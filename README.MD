# Broadaxe Web Accessibility Reporter

## Description

Broadaxe is a set of [Playwright](https://playwright.dev/) tests for running automated [axe accessibility scans](https://playwright.dev/docs/accessibility-testing) against a user-specified list of web pages.
If any accessibiilty violations are found during a scan, Broadaxe will generate an HTML report for each page that contains issues.

### Why didn't I use an existing tool instead?

- I wanted a free, open-source tool that could scan a large number of pages at once. I hadn't found a tool that easily allowed for bulk scanning of a large number of pages.
- I opted for Playwright because it already has customizable support for axe scans, along with many other desirable features for automation.
- Later, if I want to add a slightly more advanced UI test for component accessibility testing, Playwright supports this well.

## How to Install and Configure the Project

### First-time setup
- Clone this repository to your desired workspace.
- Install dependencies: `npm install`
- To confirm successful setup, run the sample tests: `npx playwright test`
- After tests finish, the console output will summarize the results.
- In the `test-results` folder of your local repo, each page should have an .HTML file with detailed axe results from the last scan. (These results are overwritten with each test run, so make sure to back up any results you wish to keep for reference.)

### Configuring tests for your site
- Open `test-data\scanpages.csv` in your local repo.
- By default, the csv file contains a set of Google URLs for testing. Replace these with the list of URLs you wish to test for your website - this can include `localhost` URLs.
- Save the csv file and run `npx playwright test` again.

### Other configuration options
- If you'd like to customize your test suite further, please start by familiarizing yourself with the basics of <Playwright configuration>(https://playwright.dev/docs/test-configuration).
- By default, parallelization is turned off in this repo, but you may wish to turn it back on (with `fullyParallel: true`) if you have appropriate test resources.
- You can also customize the axe scan to include or exclude certain items - see the <Playwright accessibility documentation>(https://playwright.dev/docs/accessibility-testing#creating-a-fixture).
- By default, axe tests in this repo will include any violations of A-level or AA-level [WCAG](https://www.w3.org/TR/WCAG21/) rules (including WCAG 2.0 and WCAG 2.1).

## Acknowledgements
- Thanks @lpelypenko for the great [axe-html-reporter](https://github.com/lpelypenko/axe-html-reporter)!

## License

Broadaxe Web Accessibility Reporter
Copyright (C) 2024 @ada-beeeee

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
