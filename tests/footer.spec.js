import { test, expect } from '@playwright/test';
test('footer destinations, safe links, and accessible controls', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('footer nav')).toHaveCount(5);
  await expect(page.getByRole('link', { name: 'Open demat account', exact: true })).toHaveAttribute('href', 'https://zerodha.com/open-account/');
  await expect(page.getByRole('link', { name: 'Privacy policy', exact: true })).toHaveAttribute('href', 'https://zerodha.com/privacy-policy/');
  await expect(page.locator('.legal-copy')).toContainText('INZ000031633');
  await expect(page.locator('.clone-notice')).toContainText('Unaffiliated with Zerodha');
  const issues = await page.locator('a').evaluateAll(links => links.flatMap(link => {
    const href = link.getAttribute('href');
    const name = link.getAttribute('aria-label') || link.textContent.trim() || link.querySelector('img')?.alt;
    return !href || !name || href.startsWith('javascript:') || href.includes('cdn-cgi') ? [link.outerHTML] : [];
  }));
  expect(issues).toEqual([]);
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page.locator('h1').click();
  await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded', 'false');
});
