import { defineConfig } from '@playwright/test';
const deploymentUrl = process.env.DEPLOYMENT_URL;
export default defineConfig({
  testDir: './tests', fullyParallel: true, reporter: 'list',
  use: { baseURL: deploymentUrl || 'http://127.0.0.1:4173', browserName: 'chromium' },
  webServer: deploymentUrl ? undefined : { command: 'npm run preview -- --port 4173', url: 'http://127.0.0.1:4173', reuseExistingServer: false },
});
