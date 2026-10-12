# Deployment

Vercel configuration is ready in `vercel.json`; Netlify configuration is ready in `netlify.toml`.

Deployed on 12 October 2026 through the authenticated `poojaaxx` Vercel account.

- Production: https://zerodha-landing-page-clone-orpin.vercel.app
- Vercel project: `poojaas-projects-d9d18c0c/zerodha-landing-page-clone`
- Build: React + Vite, `npm run build`, output `dist`

The production deployment was verified in Vercel's READY state on the existing free Hobby plan. All eleven Chromium checks pass against the production URL, covering mobile, tablet and desktop widths, page refresh, fonts, keyboard focus and the unofficial-clone disclaimer. No paid service or billing change was enabled.

To repeat hosted checks in PowerShell:

```powershell
$env:DEPLOYMENT_URL='https://zerodha-landing-page-clone-orpin.vercel.app'
npm test
Remove-Item Env:DEPLOYMENT_URL
```

To redeploy local changes: `npx vercel deploy --prod`. Vercel is linked to `https://github.com/poojaaxx/zerodha-landing-page-clone`. Deployment updates are committed and pushed to `main` without rewriting history. The local-only `.vercel` settings are ignored. Build output, dependencies, tools, temporary screenshots and environment files are excluded from deployment uploads.

The final deployment is built from the latest clean Git commit. Verify the deployed SHA with `npx vercel api /v13/deployments/<deployment-id>` and compare the Git SHA in its metadata with `git rev-parse HEAD` and `git ls-remote origin refs/heads/main`. This avoids embedding a commit hash in a file that would itself create a newer commit.
