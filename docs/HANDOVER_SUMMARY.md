# Project Handover Summary — Neema Zihalirwa Elisabeth Portfolio

**Prepared for:** Neema Zihalirwa Elisabeth  
**Deployment Target:** Vercel (zero custom domain requirement, production-ready)  
**Date:** November 2026  
**Status:** Completed & Fully Verified  

---

## 1. Executive Summary

This project delivers a bespoke, elegant personal portfolio and professional blog for **Neema Zihalirwa Elisabeth**, a Human Resources Professional with academic foundations in International Relations and General Pedagogy.

The website's visual architecture is directly inspired by the editorial restraint, warm linen palette, and refined serif typography of **Emily Trenouth** ([emilytrenouth.com](https://www.emilytrenouth.com/)), while the HR service positioning follows the problem-to-outcome framework of **Simone Breker** ([simonebreker.com](https://simonebreker.com/)).

### Core Design Tokens
- **Background:** `#F7F4EE` (Warm linen canvas)
- **Foreground:** `#2A2421` (Deep warm espresso)
- **Card Surfaces:** `#EEE9DE` (Parchment)
- **Hairline Borders:** `#E4DDD6` (Subtle dividers)
- **Accent Color:** `#C75D38` (Terracotta / burnt sienna)
- **Typography:** Lora (Serif headings with tight line-heights) & Inter (Sans-serif body)

---

## 2. Confirmed Professional Profile & Touchpoints

All information on the website is strictly grounded in verified facts from `config/profile.ts`:

### Academic Background
1. **Université Libre de Kigali (ULK) — Kigali, Rwanda**
   - Bachelor's Honours Degree in International Relations
2. **Institut Supérieur Pédagogique (ISP/Goma) / Institut Himbi — Goma, DRC**
   - State Diploma in General Pedagogy

### Professional Experience
1. **Diaspora Together Trust and Support Association (DTTASA)**
   - Role: Human Resources Professional / Volunteer Coordinator
   - Scope: Candidate screening, structured interviews, volunteer onboarding, and HR documentation.
2. **KaziEasy**
   - Role: Operations & HR Support
   - Scope: Operational coordination, competitor research, and small business process development.

### Direct Contact & Booking Channels
- **Direct Email:** [`lucianna.neema@gmail.com`](mailto:lucianna.neema@gmail.com) (Includes one-click copy button and prefilled subject)
- **Direct WhatsApp:** [`+250 796 164 579`](https://wa.me/250796164579) (Includes prefilled inquiry prompt)
- **Google Meet Discovery Call:** [`https://calendar.app.google/h4YgNK5MA3hAZw1S9`](https://calendar.app.google/h4YgNK5MA3hAZw1S9)
- **Calendly Booking:** [`https://calendly.com/lucianna-neema/30min`](https://calendly.com/lucianna-neema/30min)
- **LinkedIn Profile:** [`https://www.linkedin.com/in/elisabeth-zihalirwa/`](https://www.linkedin.com/in/elisabeth-zihalirwa/)
- **X (Twitter):** [`https://x.com/Elisabeth_Neema/`](https://x.com/Elisabeth_Neema/)
- **Facebook:** [`https://www.facebook.com/neema.lusi_18/`](https://www.facebook.com/neema.lusi_18/)
- **Instagram:** [`https://www.instagram.com/lucianna_neema/`](https://www.instagram.com/lucianna_neema/)

---

## 3. Key Pages & Routes

| Route | Purpose | Key Features |
| :--- | :--- | :--- |
| `/` | Home Page | Hero with portrait, Affiliations bar, About, Experience timeline, Capabilities, Services ledger, Latest essays, and Contact |
| `/about` | Extended Narrative | Full biography, core educational philosophy quote, education timeline, and 5 foundational professional values |
| `/services` | Services & Offerings | 7 confirmed services in numbered hairline ledger (`01`–`07`), categorized capabilities, and Google Meet/Calendly callout |
| `/blog` | Essays & Insights | 12-column split header, topics filter bar, and numbered article cards with reading times |
| `/blog/[slug]` | Individual Essay | Full article layout, editorial typography, Schema.org BlogPosting metadata, consultation banner, and next/prev navigation |
| `/contact` | Contact & Booking | Direct contact cards (Email, WhatsApp, Google Meet, Calendly), interactive client-side composer, and response expectations |
| `/rss.xml` & `/rss` | RSS 2.0 Feed | Valid XML syndication feed for readers and RSS aggregators |
| `/sitemap.xml` | Search Engine Sitemap | Dynamically indexes all static pages and published blog articles |
| `/robots.txt` | Crawler Directive | Directs web crawlers to public routes and points to `/sitemap.xml` |

---

## 4. How to Publish New Blog Posts

Publishing a new essay requires **zero coding** and no database:

1. Create a new `.md` file inside `content/blog/`, for example:
   ```text
   content/blog/my-new-article.md
   ```
2. Add the frontmatter header:
   ```yaml
   ---
   title: "Your Article Title Here"
   description: "A 1-2 sentence summary of what the article discusses."
   date: "2026-11-15"
   author: "Neema Zihalirwa Elisabeth"
   tags:
     - Human Resources
     - Talent Development
   published: true
   ---
   ```
3. Write your article in standard Markdown below the header.
4. Commit and push to GitHub:
   ```bash
   git add content/blog/my-new-article.md
   git commit -m "feat(blog): publish article on talent development"
   git push origin main
   ```
   *Vercel will automatically build and publish your new essay in seconds.*

> **Draft Protection:** Setting `published: false` in the header keeps your article private. It will be completely hidden from the blog list, sitemap, and RSS feed until you are ready to publish.

For detailed instructions, refer to [`docs/BLOG_AUTHORING_GUIDE.md`](./BLOG_AUTHORING_GUIDE.md).

---

## 5. Vercel Deployment Instructions

The application is architected to deploy to **Vercel** with zero custom domain or DNS setup needed initially:

1. Push this repository to GitHub.
2. Log into [vercel.com](https://vercel.com) and click **"Add New..." > "Project"**.
3. Import the `neema-zihalirwa-portfolio` repository.
4. In Project Settings, the default framework preset will automatically detect **Next.js**.
5. Set the following environment variable (optional, defaults to Vercel production URL):
   - `NEXT_PUBLIC_SITE_URL`: `https://neemazihalirwa.com` (or your temporary `*.vercel.app` domain)
6. Click **Deploy**.
7. Once deployed, all features (home page, blog, RSS feed, direct email, WhatsApp chat, and calendar bookings) are immediately live and fully functional.

### Optional Custom Domain
Whenever Neema registers a custom domain (e.g. `neemazihalirwa.com`), navigate to **Project Settings > Domains** in Vercel, enter the domain, and add the two recommended DNS records (CNAME and A record).

---

## 6. Verification Status

All 10 project milestones are complete and verified:
- [x] **Milestone 0:** Foundation & Baseline Verification
- [x] **Milestone 1:** Architecture & Type Safety Foundation
- [x] **Milestone 2:** Design System & Layout (Emily Trenouth Linen & Espresso)
- [x] **Milestone 3:** Profile Data Configuration & Rules of Truth
- [x] **Milestone 4:** Home Page Hero & About Sections
- [x] **Milestone 5:** Services, Capabilities, and Experience Timeline
- [x] **Milestone 6:** Git-Backed Markdown Blog Engine & RSS Syndication
- [x] **Milestone 7:** Contact Page, Direct Channels, and Consultation Booking
- [x] **Milestone 8:** SEO, Open Graph, Accessibility, and Performance
- [x] **Milestone 9:** Testing Suite (12 unit tests passing) & Security Audit
- [x] **Milestone 10:** Deployment and Client Handover Documentation
