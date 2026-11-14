# Neema Zihalirwa Elisabeth — Professional Portfolio

Professional personal portfolio and HR insights platform for **Neema Zihalirwa Elisabeth**, an HR professional with an academic foundation in International Relations and pedagogy.

---

## 1. Technology Stack

- **Framework**: Next.js 16 (App Router with Turbopack)
- **UI Library**: React 19 (Server Components by default)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/turbopack`)
- **Language**: TypeScript 5 (Strict mode)
- **Package Manager**: pnpm

---

## 2. Architecture & Code Conventions

### Directory Layout

```text
neema-zihalirwa-portfolio/
├── app/                  # Next.js App Router (pages, layouts, routes)
├── components/           # Reusable UI & presentation components
│   ├── layout/           # Header, navigation, footer
│   ├── sections/         # Hero, about, services, experience sections
│   └── ui/               # Base primitive UI elements (buttons, cards, badges)
├── config/               # Site configuration and profile data
│   ├── site.ts           # Site-wide constants, navigation, metadata
│   └── profile.ts        # Centralized professional data with status validation
├── content/              # Git-backed Markdown content
│   └── blog/             # Articles written in Markdown with frontmatter
├── lib/                  # Shared utilities and helpers
│   └── utils.ts          # Class-merging (cn helper)
├── public/               # Static assets
│   └── images/
│       └── portraits/    # Professional portrait photography
├── types/                # TypeScript type definitions
├── .env.example          # Environment variables template
└── IMPLEMENTATIONS_PLAN.md # Implementation roadmap and milestones
```

### Key Engineering Rules

1. **Server Components by Default**:
   - Every page, layout, and presentation component is a Server Component unless interactive browser state is strictly required (`useState`, `useEffect`, event handlers).
   - Interactive components must be isolated to small client leaves (e.g., mobile menu toggle, contact form) with an explicit `"use client"` directive.

2. **Zero-Fabrication Data Rule**:
   - No employment history, certifications, client testimonials, or credentials may be invented.
   - All profile entries in `config/profile.ts` must use `status: "confirmed" | "pending"`.
   - Only entries marked `"confirmed"` are exposed to production views via accessor functions.

3. **Styling & Design Direction**:
   - Clean, minimalist aesthetic inspired by Emily Trenouth's visual identity (generous whitespace, editorial serif headings, legible sans-serif body).
   - Tailwind utility classes composed via the `cn(...)` helper.

---

## 3. Development & Verification Commands

```bash
# Start local development server
pnpm dev

# Static type check
pnpm type-check

# ESLint check
pnpm lint

# Production build with Turbopack
pnpm build

# Run production server
pnpm start
```

---

## 4. Environment Configuration

Copy `.env.example` to `.env.local` to configure local variables:

```bash
cp .env.example .env.local
```

Never commit `.env` or `.env.local` files to Git.
