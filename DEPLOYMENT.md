# Deployment

Vercel configuration is ready in `vercel.json`; Netlify configuration is ready in `netlify.toml`.

Deployed on 12 October 2026 through the authenticated `poojaaxx` Vercel account.

- Production: https://zerodha-landing-page-clone-orpin.vercel.app
- Vercel project: `poojaas-projects-d9d18c0c/zerodha-landing-page-clone`
- Build: React + Vite, `npm run build`, output `dist`

The production deployment reached Vercel's READY state. The same nine Chromium checks used locally are run against the production URL, covering mobile, tablet and desktop widths.

To repeat hosted checks in PowerShell:

```powershell
$env:DEPLOYMENT_URL='https://zerodha-landing-page-clone-orpin.vercel.app'
npm test
Remove-Item Env:DEPLOYMENT_URL
```

To redeploy local changes: `npx vercel deploy --prod`. Vercel linked the supplied GitHub repository during project creation; no commits were pushed. The local-only `.vercel` settings are ignored. Build output, dependencies, tools, temporary screenshots and environment files are excluded from deployment uploads.
