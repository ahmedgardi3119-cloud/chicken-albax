# Product Requirements Document: Chicken Albax Website

| | |
|---|---|
| **Version** | 1.0 |
| **Date** | 24 November 2026 |
| **Status** | Ready for deployment |

## 1. Overview

Chicken Albax is a fast-food restaurant in Mumbra, Thane serving crispy fried chicken, burgers, wraps, shawarma, loaded fries, momos and sharing platters. This project delivers a fast, mobile-first marketing website that helps local customers discover the menu, find the shop and place an order by phone in as few taps as possible.

## 2. Business Details

| Field | Value |
|---|---|
| Name | Chicken Albax |
| Cuisine | Fast food (crispy fried chicken, burgers, wraps, specialty platters) |
| Address | Shop no. 10, Building no. 1, Central Heights, MM Valley Road, opposite Central Empire, beside Mumbra Kabrastan, Kausa, Mumbra, Thane, Maharashtra 400612 |
| Hours | 4:00 PM – 12:00 AM, Monday to Sunday |
| Phone | +91 99870 16877 |
| Price range | ₹400 – ₹600 for two |
| Instagram | @chickenalbax |
| Email | chickenalbaxmumbra@gmail.com |
| Popular items | Crispy Fried Chicken, Chicken Chizza (Cheeza), Burgers, Wraps, Loaded Fries, Chicken Drumsticks, Special Albax Platter |

## 3. Goals

1. Drive phone orders and walk-ins from the Mumbra / Kausa area.
2. Present the complete, accurate menu with prices on any device.
3. Rank for local searches such as "fried chicken Mumbra" and "fast food Kausa".
4. Zero running cost: static-friendly site hosted on Vercel's free tier.

### Success metrics

- Tap-to-call clicks per week.
- Google Maps direction clicks.
- Lighthouse scores of 90+ for Performance, Accessibility, Best Practices and SEO on mobile.

## 4. Target Audience

- **Primary:** Students and young adults (16–30) in Mumbra and nearby areas looking for affordable evening fast food.
- **Secondary:** Families and groups ordering meals and buckets (Family Meal, Party Meal).
- **Tertiary:** Delivery customers discovering the brand via Instagram, Zomato or Swiggy.

Most visitors will arrive on a **mobile phone, on a mobile data connection**, so the site must be light and thumb-friendly.

## 5. Scope

### In scope (v1.0)

- Single-page site with sections: Hero, Menu Highlights, Full Menu, About / Location / Hours, Contact, Footer.
- Primary CTAs: **Order Now** (tap-to-call) and **View Menu**.
- Secondary CTAs: WhatsApp chat, Instagram, email, Google Maps directions.
- Live "Open now / Closed" badge based on IST opening hours.
- Complete menu digitised from the printed menu, organised in tabbed categories with veg / non-veg markers and New / Best seller badges.
- Embedded Google Map (no API key) and directions link.
- SEO: metadata, Open Graph tags, schema.org `FastFoodRestaurant` JSON-LD.
- Sticky call bar on mobile.

### Out of scope (future)

- Online cart and payments.
- Customer accounts and loyalty program.
- CMS or admin panel for menu edits.
- Real food photography (emoji and a logo-branded black paper bucket illustration are used in v1.0).

## 6. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| F1 | Navbar with logo and brand name, anchor links (Menu, About, Contact) and Order Now button; collapses to a hamburger on mobile | Must |
| F2 | Hero with headline, short pitch, Order Now (`tel:`) and View Menu CTAs, hours and delivery info | Must |
| F3 | Open / Closed badge computed in Asia/Kolkata time (open 16:00–24:00) | Should |
| F4 | Menu Highlights grid of 7 signature items with starting prices | Must |
| F5 | Full menu in 11 categories (Shakes & Mocktails and Dips & Mayo are separate tabs) with tab navigation, size / quantity price variants, veg markers and badges | Must |
| F6 | About section with story, address, hours, price range, delivery | Must |
| F7 | Contact section with phone, WhatsApp, Instagram, email, address and map | Must |
| F8 | Footer with brand, address, phone, Instagram, copyright, sticky mobile call bar | Must |
| F9 | SEO metadata and structured data | Must |

## 7. Non-Functional Requirements

- **Responsive:** mobile-first; verified from 320 px to 1440 px.
- **Performance:** server-rendered by Next.js; only the menu tabs, navbar toggle and open badge ship client JavaScript.
- **Accessibility:** semantic HTML, ARIA roles on tabs, sufficient colour contrast, keyboard-friendly controls.
- **Maintainability:** all content lives in `src/data/site.ts` and `src/data/menu.ts`; updating a price is a one-line change.
- **Browser support:** last two versions of Chrome, Safari, Firefox, Edge.

## 8. Design

- **Palette:** Red `#D62828`, Yellow `#FFC300`, Charcoal `#1F1F1F`.
- **Typography:** Bebas Neue for headings, Poppins for body text.
- **Style:** bold, high-contrast fast-food look with rounded cards and chunky pill buttons.

## 9. Tech Stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3 · Lucide React icons · Vercel hosting.

## 10. Content Notes and Assumptions

- Menu prices were transcribed from the restaurant's printed menu. Items showing two prices under the Fries menu without a Small column (loaded fries and wedges) are shown as Medium / Large.
- Zomato and Swiggy are mentioned on the printed menu but no store links were provided, so none are linked.
- Food photography is not included; add images under `public/` and extend the menu data when available.

## 11. Risks

| Risk | Mitigation |
|---|---|
| Prices change | Single data file, redeploy in about a minute |
| Google Maps embed blocked | Directions link is always shown beside it |
| No photos reduces appetite appeal | Plan a photo shoot; layout is ready for images |

## 12. Roadmap

- **v1.1:** Real photos, Zomato / Swiggy links, Google reviews widget.
- **v1.2:** WhatsApp pre-filled order message with cart.
- **v2.0:** Online ordering and payments.
