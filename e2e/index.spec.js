const { test, expect } = require('@playwright/test')

test('index: should contain tweet', async ({ page }) => {
  await page.goto('/')

  const title = page.locator('text=looks great <3')
  await expect(title).toBeVisible()
})
