const config = require('../playwright.config')
const { chromium } = require('@playwright/test')
require('dotenv').config()

module.exports = async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto(config.use.baseURL + '/login')

  const googleButton = page.locator('text=Sign in with Google')
  await googleButton.click()
  await page.waitForSelector('input[type=email]')
  await page.type('input[type=email]', '')
  await page.keyboard.press('Enter')
  await page.waitForSelector('input[type=password]', { visible: true })
  await page.type('input[type=password]', '')
  await page.keyboard.press('Enter')

  await page.waitForNavigation({ waitUntil: 'networkidle0' })

  await page.context().storageState({ path: 'e2e/state.json' })
  await browser.close()
}
