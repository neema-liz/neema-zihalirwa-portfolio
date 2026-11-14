# Project Overview  
We will build a **personal portfolio site** for **Neema Zihalirwa Elisabeth**, an HR professional. The site will be a modern, responsive Next.js application with a clean, minimal design (inspired by Emily Trenouth’s portfolio). It will present Neema’s professional profile, services, and vision, and include a **blog** (Markdown‑based, GitHub‑hosted). There will be a secure **contact form** and direct contact options (WhatsApp and email). We will use the Next.js App Router (current stable version, e.g. Next 15+), TypeScript, Tailwind CSS, and pnpm. The code will follow best practices (linting, meaningful commits, clear folder structure, etc.).

- **Verified facts about Neema (source: user)**: HR professional; Bachelor's in International Relations; did secondary pedagogy studies.  
- **Client-provided info (to be confirmed)**: full name *“Neema Zihalirwa Elisabeth”*, current roles/affiliations (unknown), professional interests (HR, talent development, etc.), contact details (email/WhatsApp phone), blog topics. All profile details should be flagged as “pending confirmation” before publishing.  
- **Goals**: Showcase Neema’s background and expertise in HR; make it easy for employers/clients to understand her skills and reach out; publish her insights via a blog; maintain a professional brand online.  
- **Non-goals**: This is not an e-commerce or job board. We will not publish confidential client information. We will not build a separate admin CMS – blog posts will be added as Markdown files in Git.  

# Target Audience  
The primary audience is **employers, HR peers, and potential clients** who want to learn about Neema. The tone should be **professional, approachable, and authoritative**. The site should also appeal to recruiters or organizations in international and educational sectors, reflecting her background in international relations and pedagogy.

# Technology Stack  
- **Next.js (App Router)**: Latest stable version (Next 15.x as of late 2026). Server components for static pages, client components where needed.  
- **TypeScript**: For type safety.  
- **Styling**: Tailwind CSS (latest) with a utility-first approach. We can optionally use [shadcn/ui](https://ui.shadcn.com/) for polished React components if needed.  
- **Rendering**: Static generation (SSG) for performance and SEO. Blog pages will be generated at build time. Use `getStaticProps`/`getStaticPaths` or similar App Router equivalents.  
- **Markdown Blog**: Blog posts will be Markdown files in a `content/blog/` folder (committed to GitHub). We will parse them (e.g., using a library like **contentlayer**, **remark**, or **gray-matter**) during build. Frontmatter will define title, date, tags, summary, draft flag, etc.  
- **Blog features**:  
  - Frontmatter schema validation (e.g. using **Zod** via contentlayer or manual check).  
  - Support for **draft** posts (skip rendering draft=true).  
  - SEO: Each post gets `<title>`, `<meta description>`, and structured data (JSON-LD) if possible.  
  - RSS feed generation (e.g., using `rss` library or built-in Next.js features) for all published posts.  
  - **Sitemap.xml** generation listing pages (Next.js can auto-generate or use a package).  
  - **Dynamic OG images** for blog posts (e.g. using [Next.js ImageResponse](https://nextjs.org/docs/app/building-your-application/images/server-components#image-response) with a template) so shared links show a nice image.  
  - Code syntax highlighting (if code blocks needed) via Tailwind or a plugin like **Shiki**.  
- **Contact Form**:  
  - Fields: Name, Email, Message.  
  - Client-side: Use **React Hook Form** + **Zod** for validation (required fields, email format).  
  - Server-side: A Next.js API route (`app/api/contact/route.ts`) or Server Action to handle POST. It will **verify a CAPTCHA** (e.g. Google reCAPTCHA v3 or hCaptcha) to block spam.  
  - On submit, send an email to Neema (using a service like **Resend**, **SendGrid**, or **Nodemailer** with SMTP). The email will include the form content.  
  - **WhatsApp notification**: Also attempt to send the message to Neema’s WhatsApp via the WhatsApp Business Cloud API (or a provider like Twilio’s WhatsApp API). *Caution*: Auto-sending a WhatsApp message requires Neema to be set up with a Meta Business account and approved message templates, and Neema’s phone number must be registered on the platform. We will implement this only if the setup is confirmed possible. Email will always be the fallback.  
  - Additional contact options: Display a **click-to-chat WhatsApp link** (`https://wa.me/<number>`) for users to message directly, and a mailto link or email button. However, the primary method will be the form + backend handling.  
  - **Privacy & consent**: Include a brief note that by submitting, users consent to be contacted. We won’t store messages in a database beyond ephemeral processing (unless required). Don’t send marketing messages via WhatsApp; only the message contents.  
- **Performance & Accessibility**:  
  - Use Next.js Image component for any photos (optimize and lazy-load).  
  - Preload critical assets (fonts, CSS).  
  - Ensure color contrast meets WCAG AA (e.g. dark text on light background).  
  - Use semantic HTML (`<main>`, `<header>`, `<footer>`, etc.) and aria labels for navigation.  
  - Test with Lighthouse: target 90+ scores in Performance, Accessibility, Best Practices, SEO.  
- **SEO**:  
  - Static `<head>` tags per page (via `metadata` in Next.js or `next-seo`). Title tags like “Neema Zihalirwa – HR Professional” or post titles for blog.  
  - Include `robots.txt` (allow all pages).  
  - Use meaningful URLs (e.g. `/blog/my-post-title`).  
- **Project Practices**:  
  - Use **pnpm** for dependency management (as specified).  
  - Code linting with **ESLint** (using `@next/next` config) and **Prettier** for style.  
  - TypeScript strict mode on.  
  - Git: meaningful commit messages, branches for features. Avoid large monolithic commits. Use `.gitignore` properly.  
  - Write a clear `README.md` explaining how to run locally, add a blog post, set environment variables, etc.  

# Information Architecture & Pages  
Based on the client’s requirements and inspiration sites, the site will have the following sections/pages:  

- **Home / About**: A hero section introducing Neema (“Hello, I’m Neema Zihalirwa – HR Professional” or similar). Include a professional photo (consistent with Emily’s style: centered or side of text). A brief tagline or mission. Possibly a short bio snippet. (Full bio can be on the same page or an “About” section below.)  
- **About (expanded)**: More detailed biography (education, background in HR, international relations). Use a narrative tone. Highlight values/vision in HR. (If it's a single-page design, this can scroll here.)  
- **Services/Expertise (“What I Offer”)**: List key areas (e.g., HR consulting, talent development, workplace strategy, etc.), each with a brief description. Use icons or graphics if fitting Emily’s minimal style (maybe simple SVG icons in a neutral color). Do not “over-sell” – stick to her actual skills (we’ll confirm specifics).  
- **Experience (Resume)**: A clean timeline or list of roles & achievements. Each entry: Job title, company/institution, dates, bullet points of responsibilities/outcomes. (We won’t invent positions; mark any sample items as placeholders for client input.)  
- **Blog**: Lists posts in reverse chronological order, showing title, date, and excerpt. Each post title links to its page. The page URL will be `/blog/{slug}`. Pagination is optional if posts exceed ~10.  
- **Contact**: A call-to-action (“Let’s connect” or “Contact me”). Show buttons for Email and WhatsApp chat (Emily’s site used something like “Contact”). Provide a **contact form** (Name, Email, Message, Submit). Include a note about message response time.  
- **Footer**: Minimal footer with copyright and quick social links (e.g., LinkedIn if she’s on it). Optionally small site credits or “Powered by Next.js”.  

Each section will have an anchor id for smooth scrolling (if single-page) or its own route (e.g. separate pages via App Router `/`, `/blog`, etc.).  

# Design Direction  
Following **Emily Trenouth’s site** for style inspiration (clean, light, minimalistic):  

- **Layout**: Lots of white (or off-white) space. Clear typographic hierarchy. Centered or wide content with plenty of margin.  
- **Colors**: Base: white background, deep charcoal/dark gray text. Accent: a single accent color (Emily’s site uses a soft teal/green); Neema could choose a calm accent (maybe muted teal, navy blue, or green). Avoid bright gaudy colors. Use accent for buttons, links, small highlights.  
- **Typography**: Elegant and readable. Possibly a serif for headings (for a personal feel) and a sans-serif for body, or vice versa. Emily’s uses a crisp serif for headings and legible sans for text. We should pick web-safe or Google Fonts (e.g. Playfair Display + Inter, or Merriweather + Roboto). Ensure fonts are loaded efficiently.  
- **Imagery**: Use one professional portrait of Neema (full-width or half-width in hero). Possibly a second smaller portrait in the About. Photos should be high quality. If needed, use abstract geometric accents or subtle HR-related icons (but Emily’s style is mostly typographic with minimal icons).  
- **Styling**: Subtle animations (e.g., fade-in sections, hover effects on buttons/links). But keep it restrained – avoid distracting. Use [Framer Motion](https://www.framer.com/motion/) if animations are desired (e.g. fade-in each section on scroll).  
- **Components**: Buttons, cards, form inputs – use consistent styling (rounded corners, padding). A clean, flat design (no heavy shadows). Use ShadCN UI components or custom ones that match the style.  
- **Responsive**: Design must be fully responsive. On mobile, likely a hamburger menu or simple scroll nav. Ensure font sizes and tap targets are mobile-friendly.  

# Content Guidelines  
- Do **not** copy Simone Breker’s content verbatim; instead, **use it as guidance**. Simone’s [“Hiring HR” page](https://simonebreker.com/hiring-hr-en) is rich in testimonials and service descriptions. For Neema, we can adapt the idea of *problem statements* and *services offered*, but we must write original text. For example, Simone emphasizes understanding employer needs in HR; Neema’s content could similarly articulate how she bridges talent and organizational goals.  
- All text should be in professional, first-person voice (e.g. “I believe…”, “My experience includes…”).  
- Use bullet lists for skills or service offerings for scannability.  
- For the blog, focus on HR topics relevant to Neema’s expertise (talent management, leadership, education in HR, etc.). Each post should have a clear title and slug (no spaces, use kebab-case).  
- In all content (especially About and Services), highlight international and educational aspects of her background if applicable.  
- Any stats or achievements should be accurate or omitted if not verifiable.  
- Ask the client to provide LinkedIn / resume highlights that can be turned into bullet points (e.g. “X years in HR, specialized in Y”).  

# Folder Structure  
A recommended project layout:  
```
neema-zihalirwa-portfolio/         # (suggested repo name)
├── app/                          # Next.js app directory
│   ├── layout.tsx                # Global layout (header/footer)
│   ├── page.tsx                  # Home/About page
│   ├── about/                    # (optional) About page
│   │   └── page.tsx
│   ├── services/                 # (optional) Services page
│   │   └── page.tsx
│   ├── contact/                  # Contact page
│   │   └── page.tsx
│   ├── blog/                     # Blog listing
│   │   └── page.tsx
│   ├── blog/[slug]/              # Dynamic blog posts
│   │   └── page.tsx
│   ├── api/                      
│   │   └── contact/route.ts      # POST handler for contact form
│   └── icons/                    # Optional: custom SVG icons
├── content/                      # Markdown and static content
│   ├── blog/                     # Blog posts in Markdown
│   │   └── my-first-post.md
│   └── data/                     
│       └── profile.yml           # (or .ts) Personal info (could use JSON/YAML/TS)
├── components/                   # Reusable React components
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── BlogCard.tsx
│   └── ...                        
├── lib/                          # Utility functions
│   ├── markdown.ts              # Functions to load/parse MD files
│   ├── validations.ts           # Zod schemas (e.g. for form)
│   └── email.ts                 # Email sending helper
├── public/
│   ├── images/                   # All static images (photos, icons)
│   └── site.webmanifest          
├── styles/                       # Tailwind config, global css
│   └── globals.css
├── .env                          # (gitignored) environment variables
└── README.md
```
- We use an App Router (so all top-level routes under `app/`).  
- The `content/blog/` folder holds all blog MD files. Each file has frontmatter (title, date, tags, excerpt, draft). We will write a utility (`lib/markdown.ts`) to read them (using `fs` and a Markdown parser) and supply to pages.  
- Static data (like a brief profile summary) could go in `content/data/profile.yml` or a `.ts` export (the example earlier used `profile.ts`). For example, name, tagline, social links, which can be imported into components.  
- Place images (headshots, background shapes) in `public/images/`.  

# Contact Form & WhatsApp Details  
- We will **not** store or display Neema’s raw email address publicly to avoid spam bots. The form will handle sending.  
- The form’s action (`POST /api/contact`) will:  
  1. Verify a CAPTCHA token (for bot protection).  
  2. Format and send an email. We can use [Resend](https://resend.com/) or [Mailgun/SendGrid API] (requires an account/API key). The email from/responses can be configured to Neema’s actual address (set via env var).  
  3. **WhatsApp**: If enabled, use the **WhatsApp Business Cloud API** (or Twilio). E.g. using the `whatsapp-business-sdk` for Node (as shown in Meta’s docs) or a BSP SDK. The site will send a message to Neema’s WhatsApp number with the form details. **Important**: This requires Neema’s number to be registered as a WhatsApp Business sender, and typically the message must be a pre-approved template (unless she replies within 24h). Because of these constraints, we will treat this as optional/advanced. The primary notification will always be email.  
  4. The API should return success/failure to the client. On success, show a thank-you message. On failure, show a generic error and ask to try again.  
- The **WhatsApp button/link** on the Contact page will be a `wa.me` (or `https://api.whatsapp.com/send?phone=...&text=...`) link that opens a chat with Neema. We will populate it with a default message like “Hello Neema, I found your portfolio site and would like to connect.” (Neema’s WhatsApp number will be pulled from an env var or data file, to avoid hardcoding in source.)  
- Include a checkbox or note: *“By submitting this form, you agree to our privacy policy and that we can store your submitted information to respond.”* (We may not have a formal policy page, but at least note consent inline.)  

# Development Practices  
- **GitHub Repository**: We will create a new repo (suggested name below). The `README.md` will explain how to set up, run, and add content.  
- **Branching**: Use branches like `feature/design`, `feature/blog`, `feature/contact`, etc. Merge via PRs for code reviews (even if just by the developer).  
- **Environment Variables**: Use a `.env.local` for dev (Next.js will load it). Key examples: `CONTACT_EMAIL=neema@example.com`, `WHATSAPP_API_KEY=...`, `WHATSAPP_TO=...`. In production (Vercel), set these in the dashboard.  
- **Security**: Do not commit `.env`. Store secrets in env vars. Use HTTPS (Vercel provides this). Sanitize/validate form input.  
- **Dependencies**: Pin versions in `package.json`. Use recent stable Next.js, Tailwind, etc. The Vercel example uses Next.js 14, Tailwind v4 – we should adopt the latest stable at the time (Next.js 15, Tailwind CSS). Avoid outdated versions.  
- **Testing** (optional but recommended): Write a couple of basic unit tests (e.g. for any utility functions). For the form, consider an end-to-end test (Cypress or Playwright) to ensure submission works.  

# Acceptance Criteria  
- **Functional**: The site builds and runs locally with `pnpm dev`. Navigation links scroll or route correctly. Blog posts from `content/blog` are rendered. The contact form submits and shows a success message.  
- **Content**: All client-provided text (bio, services, etc.) is included but marked “To be confirmed” in code/data. No placeholder lorem text visible in final.  
- **Design**: Matches the agreed style (colors, fonts). Responsive at mobile, tablet, desktop.  
- **Performance/SEO**: Lighthouse scores should be ≥90. Titles/meta tags present. RSS feed and sitemap accessible (e.g. `/rss.xml`, `/sitemap.xml`).  
- **Accessibility**: Pass automated checks (lint) and basic manual check (e.g. keyboard navigation, alt attributes on images).  

# Open Questions for the Client  
- **Content**: Please confirm your exact job titles, company names, years, and bullet-point achievements for the Experience section. Provide any photos/illustrations (or indicate a style for stock photos).  
- **Branding**: Do you have brand colors or fonts in mind? Confirm if you like teal accent (like Emily’s site) or another color.  
- **Contact details**: What is the WhatsApp number to use? Do you already have a WhatsApp Business account set up?  
- **Blogs**: Any initial posts you want to include? Please supply titles, dates, and Markdown files for them.  
- **Legal**: Should we include a small “Privacy” or “Data Use” statement related to the contact form?  

---

**Suggested Repository:** `neema-zihalirwa-portfolio`  
**GitHub Description:** *“Personal portfolio website for Neema Zihalirwa Elisabeth – HR professional (with integrated Markdown blog and contact form).”*  

The `PROJECT.md` is complete and ready for implementation by the AI coding agent.