# Chicken Albax 🍗

Official website for **Chicken Albax**, a fast-food restaurant in Mumbra, Thane serving crispy fried chicken, burgers, wraps, shawarma, loaded fries and the Special Albax Platter.

- **Address:** Shop no. 10, Building no. 1, Central Heights, MM Valley Road, opposite Central Empire, beside Mumbra Kabrastan, Kausa, Mumbra, Thane, Maharashtra 400612
- **Hours:** 4:00 PM – 12:00 AM, Monday to Sunday
- **Phone:** +91 99870 16877
- **Price range:** ₹400 – ₹600 for two

## Features

- Mobile-first, fully responsive design in red / yellow / charcoal
- Hero with **Order Now** (tap-to-call) and **View Menu** CTAs
- Live Open / Closed badge (IST)
- Menu highlights grid and full tabbed menu (11 categories) with veg markers
- About, hours and address section
- Contact section with WhatsApp, Instagram, email and embedded Google Map
- SEO metadata and schema.org structured data

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router) and React 19
- TypeScript
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) icons
- Deployed on [Vercel](https://vercel.com/)

## Project Structure

```text
chicken-albax/
├── public/
│   ├── logo.webp        # full Chicken Albax logo (navbar badge and bucket)
│   ├── wordmark.webp    # "Chicken ALBAX" in the original lettering (navbar)
│   └── mascot.webp      # chicken mascot cut-out (hero yellow circle)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── icon.png         # favicon (chicken mascot from the logo)
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── OpenStatus.tsx
│   │   ├── MenuSection.tsx
│   │   ├── BucketIcon.tsx   # black paper bucket with the logo
│   │   ├── LogoBadge.tsx    # circular logo badge in the navbar
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       ├── site.ts      # phone, address, hours, links
│       └── menu.ts      # full menu and prices
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── PRD.md
├── README.md
└── LICENSE
```

## Installation

Requires **Node.js 18.18+** (Node 20 LTS recommended).

```bash
git clone https://github.com/YOUR_USERNAME/chicken-albax.git
cd chicken-albax
npm install
```

## Run Locally

```bash
npm run dev
```

Open <http://localhost:3000>.

Production build check:

```bash
npm run build
npm start
```

## Updating Content

- Phone, address, hours, social links: `src/data/site.ts`
- Menu items and prices: `src/data/menu.ts`
- Logo: replace `public/logo.webp` (full logo, about 240 px wide). It is used in the navbar badge and on the bucket. The favicon is `src/app/icon.png`, the navbar lettering is `public/wordmark.webp` and the hero chicken is `public/mascot.webp` (transparent cut-outs of the same logo).

## Deployment on Vercel

1. Push this repo to GitHub (see below).
2. Go to <https://vercel.com/new> and sign in with GitHub.
3. Click **Import** next to `chicken-albax`.
4. Leave the defaults (Framework: **Next.js**, build command `next build`) and click **Deploy**.
5. In about a minute the site is live at `https://chicken-albax.vercel.app` (or a similar URL).
6. Every push to `main` redeploys automatically. Add a custom domain under **Project → Settings → Domains**.

Or via CLI:

```bash
npm i -g vercel
vercel --prod
```

## Push to GitHub

```bash
cd chicken-albax
git init
git add .
git commit -m "Initial commit: Chicken Albax website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/chicken-albax.git
git push -u origin main
```

## License

[MIT](./LICENSE)
