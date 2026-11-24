# KALKAN PARTNER – International Business & Service Solutions

Official multilingual corporate website for **KALKAN PARTNER** (Germany · Türkiye · International).

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** with a modular, scalable architecture ready for future CRM, lead management, booking calendar, and English (`en`) expansion.

---

## Key Features

- **Multilingual Architecture (`DE` default + `TR` active, `EN` ready):**
  - Clean localized routes (`/de/...`, `/tr/...`) with automatic root redirect to `/de`.
  - Structured translation and content dictionaries in `src/content/`.
- **Nine Specialized Service Departments:**
  1. Recruitment (`/services/recruitment`)
  2. Relocation (`/services/relocation`)
  3. Behördenservice (`/services/behoerdenservice`)
  4. Translation & Communication (`/services/translation-communication`)
  5. Business Setup (`/services/business-setup`)
  6. Medical Tourism Coordination (`/services/medical-tourism`)
  7. Digital & AI Solutions (`/services/digital-ai`)
  8. Family & Education (`/services/family-education`)
  9. **Restaurant & Kitchen Solutions** (`/services/restaurant-kitchen`) – flagship differentiator
- **Corporate & Supporting Pages:**
  - Home, About, Services Overview, 9 Service Detail Pages, International Network, How We Work, Insights/Blog (+ 3 initial guides), FAQ, Contact (5 inquiry paths), Impressum (`TODO`), Datenschutz (`TODO`), AGB (`TODO`).
- **Conversion-Oriented, Privacy-First Contact System:**
  - Five structured inquiry paths (`recruitment`, `restaurant`, `business`, `medical-tourism`, `general`).
  - Server-side validation, honeypot + timing anti-spam protection, zero file-upload fields for sensitive documents.
  - Honest delivery status: never claims success unless real email delivery environment variables are configured.
- **Technical SEO & Security:**
  - Per-page `generateMetadata` with `hreflang` (`de-DE`, `tr-TR`), Open Graph, dynamic `sitemap.xml`, `robots.txt`, verified `Organization` & `Service` JSON-LD, and HTTP security headers in `next.config.ts`.

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/de`; switch to `/tr` via the navigation bar).

### Production Verification

```bash
npm run lint
npm run build
npm run start
```

---

## Environment Variables

Copy `.env.example` to `.env.local` for local testing, or configure directly in **Vercel → Project Settings → Environment Variables**.

> **Security:** Never commit `.env.local`, API keys, passwords, or customer documents to GitHub.

| Variable | Required for Live Email | Description |
| :--- | :---: | :--- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Production domain (e.g. `https://kalkanpartner.de`) for canonical URLs & sitemap |
| `RESEND_API_KEY` | Yes | Resend API key for `/api/contact` email delivery |
| `CONTACT_FROM_EMAIL` | Yes | Verified sender address (e.g. `noreply@yourdomain.de`) |
| `CONTACT_TO_EMAIL` | Yes | Business inbox receiving inquiries |
| `CRM_WEBHOOK_URL` | Optional | Future CRM / automation webhook endpoint |
| `NEXT_PUBLIC_BOOKING_URL` | Optional | Future external appointment booking URL |

---

## Pre-Launch Legal Checklist (`TODO`)

Before publishing as legally complete for the German market:

1. Update all `TODO` company, address, contact, commercial register, and VAT fields in `src/config/site.ts`.
2. Have `src/app/[locale]/impressum/page.tsx`, `src/app/[locale]/datenschutz/page.tsx`, and `src/app/[locale]/agb/page.tsx` reviewed and finalized by qualified legal counsel.
3. Remove `robots: { index: false }` on legal pages if desired after legal review.
4. Configure production environment variables in Vercel and test `/api/contact` live email delivery.

---

## GitHub & Vercel Deployment Workflow

1. Create a **private repository** on GitHub (e.g. `kalkanpartner-website`).
2. Push this repository to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git branch -M main
   git push -u origin main
   ```
3. In **Vercel**, click **Add New → Project**, import the private GitHub repository, set the environment variables above, and deploy.
4. Every push to a branch creates a **Preview Deployment**; merging to `main` triggers **Production Deployment**.
