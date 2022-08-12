const { test, expect } = require('@playwright/test')

test('login: must contain title, subtitle and legal', async ({ page }) => {
  await page.goto('/login')

  const title = page.locator('text=What\'s happening now')
  await expect(title).toBeVisible()

  const subtitle = page.locator('text=Join Twitter today')
  await expect(subtitle).toBeVisible()

  const legal = page.locator('text=By registering')
  await expect(legal).toBeVisible()
})
