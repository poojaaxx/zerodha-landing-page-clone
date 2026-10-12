import { test, expect } from '@playwright/test';

for (const width of [375, 1440]) {
  test(`refresh, fonts, disclaimer and keyboard focus at ${width}px`, async ({ page }) => {
    const failedAssets = [];
    page.on('response', response => {
      if (response.status() >= 400 && /\/assets\//.test(response.url())) failedAssets.push(response.url());
    });
    await page.setViewportSize({ width, height: 900 });
    const response = await page.goto('/');
    expect(response.status()).toBe(200);
    await page.reload();
    await expect(page.getByRole('heading', { name: 'Invest in everything' })).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(await page.evaluate(() => document.fonts.check('16px Inter'))).toBe(true);
    expect(await page.locator('header').evaluate(el => getComputedStyle(el).position)).toBe('sticky');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('main')).toBeFocused();
    await page.locator('.menu-toggle').focus();
    expect(await page.locator('.menu-toggle').evaluate(el => getComputedStyle(el).outlineStyle)).toBe('solid');
    await page.keyboard.press('Enter');
    await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded', 'true');
    if (width < 800) await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
    await page.keyboard.press('Escape');
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: `test-results/deployment-top-${width}.png` });
    const notice = page.locator('.clone-notice');
    await notice.scrollIntoViewIfNeeded();
    await expect(notice).toBeVisible();
    await expect(notice).toContainText('Unofficial educational');
    expect(await notice.evaluate(el => parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThanOrEqual(12);
    await page.screenshot({ path: `test-results/deployment-footer-${width}.png` });
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await expect(page.locator('input, form')).toHaveCount(0);
    expect(failedAssets).toEqual([]);
  });
}
