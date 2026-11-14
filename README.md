# Neema Zihalirwa Elisabeth — Professional Portfolio & HR Platform

A bespoke, production-ready personal portfolio and professional blog platform for **Neema Zihalirwa Elisabeth**, a Human Resources Professional with an academic foundation in International Relations and General Pedagogy.

---

## 1. Design & Positioning Philosophy

The website's visual identity and user experience adhere strictly to authentic editorial design principles:

- **Visual Architecture & Restraint**: Inspired by the warm linen aesthetic of [Emily Trenouth](https://www.emilytrenouth.com/) featuring warm parchment canvases (`#F7F4EE`), deep espresso typography (`#2A2421`), fine hairline ledgers (`#E4DDD6`), and terracotta accents (`#C75D38`).
- **HR Problem-to-Outcome Framework**: Inspired by [Simone Breker](https://simonebreker.com/), communicating concrete deliverables, recruitment workflows, and organizational onboarding systems rather than generic corporate slogans.
- **Zero-Fabrication Rule**: Every credential, academic institution (ULK, ISP/Goma), and employment entry (DTTASA, KaziEasy) is verified in `config/profile.ts`.
- **Direct Touchpoint Architecture**: Tailored for initial deployment without custom domain or complex SMTP requirements. Features direct email, WhatsApp click-to-chat, and discovery call bookings via **Google Meet** and **Calendly**.

---

## 2. Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Cache Components)
- **UI Library**: [React 19](https://react.dev/) (Server Components by default)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/turbopack`
- **Markdown & Frontmatter**: `gray-matter`, `marked`, and `zod` schema validation
- **Testing**: Node 22 native test runner (`node --test --experimental-strip-types`)
- **Type Safety**: TypeScript 5 in strict mode
- **Package Manager**: `pnpm` v11

---

## 3. Directory Layout

```text
neema-zihalirwa-portfolio/
├── app/
│   ├── about/page.tsx               # Dedicated /about narrative & philosophy
│   ├── blog/
│   │   ├── [slug]/page.tsx          # Dynamic article page (SSG + JSON-LD)
│   │   └── page.tsx                 # Blog archive & topic filter
│   ├── contact/page.tsx             # Contact channels & interactive composer
│   ├── services/page.tsx            # Confirmed services & consultation booking
│   ├── robots.ts                    # Dynamic robots.txt
│   ├── sitemap.ts                   # Dynamic sitemap.xml
│   ├── rss.xml/route.ts             # RSS 2.0 XML feed endpoint
│   ├── layout.tsx                   # Root layout, metadata & Schema.org Person JSON-LD
│   └── page.tsx                     # Editorial Home Page
├── components/
│   ├── blog/                        # BlogCard and ProseContent components
│   ├── contact/                     # ContactChannels, ContactComposer, CopyEmailButton
│   ├── layout/                      # Header, MobileNav, Footer
│   ├── sections/                    # HeroSection, AboutSection, ServicesSection, etc.
│   ├── seo/                         # Schema.org JsonLdPerson & JsonLdBlogPost
│   └── ui/                          # Button, Badge, Container, SectionHeading
├── config/
│   ├── profile.ts                   # Single source of truth for Neema's verified data
│   └── site.ts                      # Navigation links, metadata, and site constants
├── content/
│   └── blog/                        # Git-backed Markdown essays (.md)
├── docs/
│   ├── BLOG_AUTHORING_GUIDE.md      # Content creator publishing guide
│   └── HANDOVER_SUMMARY.md          # Comprehensive client handover package
├── lib/
│   ├── blog.ts                      # Markdown parser, Zod validation & slug resolution
│   └── utils.ts                     # Tailwind class merger (cn helper)
├── public/
│   └── images/portraits/            # High-resolution professional portrait photography
├── tests/
│   ├── blog.test.ts                 # Automated tests for frontmatter, reading time, slugs
│   └── contact.test.ts              # Automated tests for contact channels & URI encoding
├── types/                           # TypeScript interfaces and schemas
└── IMPLEMENTATIONS_PLAN.md          # 10-milestone engineering roadmap
```

---

## 4. Development & Verification Commands

```bash
# Start local development server (Turbopack)
pnpm dev

# Run automated unit tests (Node 22 native runner)
pnpm test

# Run TypeScript static type check
pnpm type-check

# Run ESLint check
pnpm lint

# Run optimized production build
pnpm build

# Start production server locally
pnpm start
```

---

## 5. Content Management (Publishing Blog Posts)

The blog operates entirely via Git-backed Markdown files stored in `content/blog/`. No database, external CMS, or authentication service is required.

To publish a new essay:
1. Create a `.md` file in `content/blog/my-article-slug.md`.
2. Add the required frontmatter:
   ```yaml
   ---
   title: "Your Article Title Here"
   description: "A short 1-2 sentence overview of the article."
   date: "2026-11-15"
   author: "Neema Zihalirwa Elisabeth"
   tags:
     - Human Resources
     - Pedagogy
   published: true
   ---
   ```
3. Write your content in standard Markdown.
4. Commit and push to GitHub:
   ```bash
   git add content/blog/my-article-slug.md
   git commit -m "feat(blog): publish essay on pedagogy in HR"
   git push origin main
   ```

*Setting `published: false` marks the post as a draft, automatically hiding it from the website, sitemap, and RSS feed.*

For more details, see [`docs/BLOG_AUTHORING_GUIDE.md`](./docs/BLOG_AUTHORING_GUIDE.md).

---

## 6. Updating Profile & Contact Details

All biographical information, career history, education, and contact channels are centralized in [`config/profile.ts`](./config/profile.ts):

- **Consultation Links**:
  - Google Meet: `https://calendar.app.google/h4YgNK5MA3hAZw1S9`
  - Calendly: `https://calendly.com/lucianna-neema/30min`
- **Direct Email**: `lucianna.neema@gmail.com`
- **Direct WhatsApp**: `+250796164579`

Editing this file immediately updates all associated sections across the Home page, About page, Services page, Contact page, Footer, and Schema.org structured data.

---

## 7. Deployment to Vercel

1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New..." > "Project"**.
3. Import the `neema-zihalirwa-portfolio` repository.
4. Framework Preset: **Next.js** (detected automatically).
5. Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://neemazihalirwa.com` (or your temporary Vercel preview domain).
6. Click **Deploy**.

For detailed client handover information, see [`docs/HANDOVER_SUMMARY.md`](./docs/HANDOVER_SUMMARY.md).
