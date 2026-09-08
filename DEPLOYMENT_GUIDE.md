# Deployment Guide

## 1. Install and test locally

```bash
cd macadamia-landing
npm install
npm run dev
```

Visit `http://localhost:3000` and check the page on both desktop and a narrow mobile
width before you push anywhere.

## 2. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: macadamia orchard landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/macadamia-landing-page.git
git push -u origin main
```

## 3. Deploy to Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click "Add New Project".
3. Select the repository you just pushed.
4. Leave the framework preset on "Next.js" (Vercel detects it automatically) and click
   "Deploy".
5. Vercel gives you a live URL a minute or two later.

## 4. Connect a custom domain (optional)

1. Buy a domain from any registrar (Namecheap, GoDaddy, Google Domains, etc.).
2. In the Vercel project, go to Settings → Domains → Add.
3. Follow the DNS instructions Vercel shows you — either point nameservers at Vercel, or
   add the specific A/CNAME records it lists.
4. DNS changes can take anywhere from a few minutes to 48 hours to propagate. Vercel
   issues a free SSL certificate automatically once the domain resolves.

## 5. Wire up the contact form

The form currently posts to a placeholder Formspree endpoint. Sign up at
https://formspree.io, create a form for your domain, and replace `YOUR_FORM_ID` in
`app/page.tsx` with the real one. No backend code needed.

## 6. Add analytics (optional)

In the Vercel dashboard: Settings → Analytics → enable Web Analytics. This needs no code
changes and starts showing visitor data immediately.

## Troubleshooting

- **Build fails on Vercel but not locally** — run `npm run build` locally first and fix
  any errors it reports before pushing again.
- **Styles look wrong after a change** — delete the `.next` cache folder and rebuild:
  `rm -rf .next && npm run build`.
- **Images not showing** — confirm the file actually exists under `public/farm-images/`
  and that the path in `app/page.tsx` matches exactly, including case.
