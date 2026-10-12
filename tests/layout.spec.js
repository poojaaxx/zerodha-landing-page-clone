import { test, expect } from '@playwright/test';
for (const width of [320, 375, 768, 1024, 1440]) {
  test(`complete content and images at ${width}px`, async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    for (const title of ['Trust with confidence', 'Unbeatable pricing', 'Free and open market education', 'Open a Zerodha account']) {
      await expect(page.getByRole('heading', { name: title })).toBeVisible();
    }
    await expect(page.locator('.feature-card')).toHaveCount(4);
    await expect(page.locator('.price-card')).toHaveCount(3);
    for (const image of await page.locator('img:visible').all()) {
      await image.scrollIntoViewIfNeeded();
      await expect.poll(() => image.evaluate(el => el.complete && el.naturalWidth > 0)).toBe(true);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(errors).toEqual([]);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `test-results/layout-${width}.png`, fullPage: true });
  });
}
