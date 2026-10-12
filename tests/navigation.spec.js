import { test, expect } from '@playwright/test';
for (const width of [375, 768, 1440]) {
  test(`navigation and hero at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: 'Invest in everything' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign up for free' }).first()).toHaveAttribute('href', 'https://zerodha.com/open-account/');
    await page.keyboard.press('Tab');
    await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
    const toggle = page.locator('.menu-toggle');
    await toggle.focus();
    await page.keyboard.press('Enter');
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await expect(page.getByRole('link', { name: 'Kite Trading platform' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(toggle).toBeFocused();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await page.evaluate(() => window.scrollTo(0, 400));
    expect(await page.locator('header').evaluate(el => el.getBoundingClientRect().top)).toBe(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  });
}
