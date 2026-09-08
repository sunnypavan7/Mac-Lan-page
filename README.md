# Hebbal Macadamia Orchard — Landing Page

A Next.js 14 + Tailwind landing page for selling titled plots on a macadamia orchard in
Karnataka. Built as an editorial "orchard ledger" design — thin rule lines, a serif display
face, and content laid out like a farm accounts book rather than a generic SaaS page.

## Run locally

```bash
npm install
npm run dev
# visit http://localhost:3000
```

## Before you launch

1. **Contact form** — the form posts to `https://formspree.io/f/YOUR_FORM_ID` in
   `app/page.tsx`. Sign up at formspree.io, create a form, and swap in your real ID. Or
   replace it with a Next.js API route if you'd rather send email yourself.
2. **Phone / email** — replace the placeholders in the "Book a free site visit" section
   of `app/page.tsx`.
3. **Pricing** — the `plotTiers` array near the top of `app/page.tsx` holds the three
   pricing tiers; edit amounts and detail copy there.
4. **ROI numbers** — the `roiPerTenLakh` array holds the illustrative year-by-year cash
   flow per ₹10,00,000 invested. Update it if your own projections change, and keep the
   disclaimer text underneath it — it matters for anything sold as an investment.
5. **Photos** — `public/farm-images/orchard-infographic.png` is the summary infographic.
   Add real orchard and plot photos to `public/farm-images/` and swap them into the hero
   and "why macadamia" sections as you get them; the page currently leans on the
   infographic and typography rather than photography.
6. **Domain & analytics** — see `DEPLOYMENT_GUIDE.md`.

## Deploy

Push to GitHub, then import the repo at vercel.com — no configuration needed, Vercel
detects Next.js automatically. See `DEPLOYMENT_GUIDE.md` for the full walkthrough.
