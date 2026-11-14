# IMPLEMENTATION_PLAN.md

# Neema Zihalirwa Portfolio — Implementation Plan

## 1. Purpose of This Document

This document defines the implementation roadmap for the Neema Zihalirwa Elisabeth professional portfolio website.

It is intended to guide an AI coding agent through the development process, from inspecting the existing project to delivering a complete, tested, and deployable website.

The agent must follow the milestones in the order presented unless a task has no dependency on an earlier milestone.

Each milestone contains:

- Objectives.
- Detailed implementation tasks.
- Expected deliverables.
- Completion criteria.
- Dependencies and important considerations.

The agent must not consider a milestone complete simply because its code has been written. It must verify that the implementation works.

---

## 2. Current Project State

The repository has already been created and initialized.

**Repository:** `neema-zihalirwa-portfolio`

**Existing environment:**

- Next.js 16.4.6
- React 19.3.0
- React DOM 19.3.0
- TypeScript 5.9.3
- Tailwind CSS 4.3.3
- ESLint 9.39.5
- pnpm 11.18.0

The project was initialized using:

```bash
pnpm create next-app@latest .
```

The recommended Next.js defaults were selected.

### Important instructions

1. Do not initialize another Next.js application.
2. Do not delete or overwrite existing project configuration without a technical reason.
3. Inspect the current project structure before making changes.
4. Preserve the installed dependencies unless a justified change is required.
5. Use pnpm for all package management.
6. Do not introduce unnecessary dependencies.
7. Keep the existing App Router architecture.
8. Respect the existing Tailwind CSS version and configuration approach.
9. Do not upgrade major dependencies without checking compatibility.
10. Keep the application runnable throughout development.

---

# 3. Implementation Milestones

## Milestone 0 — Project Inspection and Baseline

**Objective:** Understand the existing application before making modifications.

### Tasks

- [x] Inspect the repository structure.
- [x] Inspect `package.json` and identify installed dependencies.
- [x] Inspect `tsconfig.json`.
- [x] Inspect `eslint.config.mjs`.
- [x] Inspect `next.config.ts`.
- [x] Inspect the existing `app/` directory.
- [x] Inspect `app/globals.css` and the root layout.
- [x] Inspect the existing `AGENTS.md`, if present.
- [x] Verify the application runs using `pnpm dev`.
- [x] Verify TypeScript compilation.
- [x] Verify ESLint runs successfully.
- [x] Identify existing generated components and styles that can be reused or replaced.

### Deliverables

- A short understanding of the existing project architecture.
- A list of any configuration issues that need attention.
- A confirmed working development environment.

### Completion criteria

- The application starts successfully.
- No unnecessary files have been deleted.
- The agent understands the existing configuration.
- The project is ready for structured development.

---

## Milestone 1 — Architecture and Development Foundation

**Objective:** Establish a clean, maintainable application structure.

### Tasks

#### 1.1 Organize the project

Create a structure that separates routes, reusable components, content, configuration, and business logic.

A suggested structure:

```text
neema-zihalirwa-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   ├── blog/
│   └── contact/
│
├── content/
│   └── blog/
│
├── config/
│   └── site.ts
│
├── lib/
│   ├── blog/
│   ├── contact/
│   ├── validations/
│   └── utils/
│
├── public/
│   ├── images/
│   └── icons/
│
├── tests/
│
├── .env.example
├── README.md
├── PROJECT.md
└── IMPLEMENTATION_PLAN.md
```

This is a proposed structure, not a requirement to create empty folders. Add directories as their functionality is implemented.

#### 1.2 Establish code conventions

- [x] Use TypeScript for all application code.
- [x] Keep strict TypeScript checking enabled.
- [x] Use clear and descriptive names.
- [x] Separate reusable components from route-specific components.
- [x] Keep business logic out of presentation components.
- [x] Prefer Server Components by default.
- [x] Use Client Components only when browser interactivity requires them.
- [x] Avoid unnecessary global state.
- [x] Avoid oversized components and duplicated logic.
- [x] Use semantic HTML.
- [x] Keep secrets and server-only logic out of client bundles.

#### 1.3 Configure development quality tools

- [x] Review the existing ESLint configuration.
- [x] Add formatting tooling only if justified.
- [x] Establish consistent import organization.
- [x] Ensure TypeScript and lint checks are available through scripts.
- [x] Add a basic test setup when needed.

### Deliverables

- Organized project structure.
- Documented code conventions.
- Working quality-check commands.

### Completion criteria

- The application builds.
- TypeScript and lint checks pass.
- The structure is understandable and maintainable.

---

## Milestone 2 — Design System and Website Layout

**Objective:** Establish the visual identity and reusable layout of the website.

The visual direction should follow the minimalist and elegant approach of Emily Trenouth's website.

The design must remain original and must not copy another website's content, source code, or distinctive design elements.

### Tasks

#### 2.1 Define the design system

- [x] Define the primary and secondary colors.
- [x] Define background, surface, text, and accent colors.
- [x] Define typography for headings and body text.
- [x] Establish font sizes and responsive typography.
- [x] Define spacing conventions.
- [x] Define content width and layout constraints.
- [x] Define button styles.
- [x] Define form input styles.
- [x] Define borders, radii, and subtle shadows.
- [x] Define hover and focus states.

The final accent color and branding must remain subject to Neema's approval.

#### 2.2 Build reusable layout components

- [x] Create the global navigation/header.
- [x] Create the main content layout.
- [x] Create the footer.
- [x] Create reusable buttons and links.
- [x] Create reusable section headings.
- [x] Create reusable containers.
- [x] Create a responsive mobile navigation.
- [x] Implement consistent active and hover states.

#### 2.3 Responsive behavior

- [x] Design for mobile devices first.
- [x] Adapt layouts for tablets.
- [x] Adapt layouts for desktop screens.
- [x] Check navigation on small screens.
- [x] Prevent horizontal overflow.
- [x] Ensure readable text sizes and comfortable tap targets.

#### 2.4 Motion and interaction

- [x] Add subtle transitions where useful.
- [x] Add restrained entrance animations only where they improve the experience.
- [x] Respect reduced-motion preferences.
- [x] Avoid distracting animation and unnecessary effects.

### Deliverables

- Reusable design system.
- Responsive navigation.
- Global layout.
- Footer.
- Consistent UI components.

### Completion criteria

- The layout is consistent across routes.
- The website looks professional on mobile and desktop.
- Components are reusable.
- The design follows the approved visual direction.

---

## Milestone 3 — Profile Content and Data Structure

**Objective:** Establish a reliable way to manage Neema's professional information.

No professional information should be invented.

### Tasks

#### 3.1 Create structured profile data

Create a central configuration or content file for information such as:

- Full name.
- Professional title.
- Short introduction.
- Biography.
- Profile image.
- Education.
- Professional experience.
- Skills and capabilities.
- Services.
- Professional values.
- Career goals.
- Email address.
- WhatsApp number.
- LinkedIn URL.
- Other approved social links.

#### 3.2 Establish content approval rules

- [x] Separate confirmed information from unconfirmed information.
- [x] Mark client-provided details as pending confirmation.
- [x] Do not publish unconfirmed qualifications or experience.
- [x] Do not invent employers, positions, dates, achievements, or professional skills.
- [x] Do not create fictional testimonials.
- [x] Do not create fictional metrics or years of experience.
- [x] Do not expose private contact information without approval.

The information currently supplied about Neema's education and professional background must be confirmed directly before being presented as verified credentials.

#### 3.3 Prepare content placeholders

- [x] Create clearly identifiable content fields for missing information.
- [x] Use development-only placeholders where necessary.
- [x] Ensure unfinished or unapproved content does not appear on the production website.
- [x] Avoid visible Lorem Ipsum or fabricated sample content.

### Deliverables

- Centralized profile data.
- Content approval structure.
- List of information still required from Neema.

### Completion criteria

- Profile information is not scattered across components.
- Unapproved information cannot accidentally appear in production.
- Content can be updated without rewriting page components.

---

## Milestone 4 — Home Page and About Section

**Objective:** Build the main page and communicate Neema's professional identity clearly.

### Tasks

#### 4.1 Hero section

- [x] Introduce Neema using her approved professional name.
- [x] Add an approved professional headline.
- [x] Add a concise introduction.
- [x] Add a professional portrait if supplied and approved.
- [x] Add a primary contact call-to-action.
- [x] Add a secondary action, such as viewing her profile or services.

The hero must communicate who Neema is and what she does without exaggerating her experience.

#### 4.2 About section

- [x] Present her approved biography.
- [x] Introduce her educational background.
- [x] Present her professional interests and perspective.
- [x] Highlight approved values and career direction.
- [x] Use clear paragraphs and readable typography.
- [x] Avoid unnecessary repetition.

#### 4.3 Professional profile presentation

- [x] Add relevant approved professional highlights.
- [x] Add a LinkedIn link where appropriate.
- [x] Ensure all links work.
- [x] Add appropriate image alternative text.

### Deliverables

- Completed home page.
- About section or dedicated About page.
- Responsive hero and profile presentation.

### Completion criteria

- Visitors can understand Neema's professional identity quickly.
- The content is accurate and approved.
- The page works across screen sizes.
- All calls to action work.

---

## Milestone 5 — Services, Capabilities, and Experience

**Objective:** Explain what Neema offers and communicate her professional background.

### Tasks

#### 5.1 Services / What I Offer

- [x] Create a dedicated Services section or page.
- [x] Present each approved service clearly.
- [x] Write a concise description for every service.
- [x] Explain the value each service provides.
- [x] Use a consistent layout.
- [x] Add contact calls to action.

Do not assume that Neema provides HR consulting, recruitment, talent management, training, or any other specific service until she confirms it.

#### 5.2 Capabilities and expertise

- [x] Present only confirmed capabilities.
- [x] Group related skills logically.
- [x] Avoid unsupported skill ratings or proficiency levels.
- [x] Keep descriptions understandable to employers and prospective clients.

#### 5.3 Professional experience

- [x] Create a professional experience presentation.
- [x] Support job title, organization, dates, and responsibilities.
- [x] Highlight achievements only when supplied and verified.
- [x] Present education separately from employment.
- [x] Keep the presentation easy to scan.

#### 5.4 Career goals and professional perspective

- [x] Include career goals only when Neema approves their wording.
- [x] Present her professional values and perspective.
- [x] Avoid writing personal beliefs on her behalf.

### Deliverables

- Services section/page.
- Capabilities section.
- Experience section/page.
- Optional professional vision section.

### Completion criteria

- Services are understandable and accurate.
- Experience is presented consistently.
- No invented information is published.
- Visitors can easily move from services to contact.

---

## Milestone 6 — Markdown Blog System

**Objective:** Implement a maintainable blog using Markdown files stored in the same GitHub repository.

Blog content must not require a database or a separate CMS.

### Tasks

#### 6.1 Establish the content directory

Use:

```text
content/
└── blog/
    ├── welcome.md
    ├── article-example.md
    └── another-article.md
```

Each Markdown file represents one article.

#### 6.2 Define the frontmatter schema

Every post should support:

```yaml
---
title: "Article title"
description: "A short description of the article."
date: "2026-11-14"
author: "Neema Zihalirwa Elisabeth"
tags:
  - Human Resources
  - Professional Development
published: true
coverImage: "/images/blog/example.jpg"
---
```

The schema must be validated programmatically.

Required fields should include:

- `title`
- `description`
- `date`
- `author`
- `tags`
- `published`

Optional fields may include:

- `coverImage`
- `updatedAt`

The implementation must define a consistent slug strategy based on filenames.

#### 6.3 Markdown processing

- [x] Select a maintained Markdown parser.
- [x] Parse Markdown files on the server.
- [x] Validate frontmatter with a schema validator such as Zod.
- [x] Convert Markdown to safe HTML or React elements.
- [x] Support headings, paragraphs, lists, links, blockquotes, and code blocks.
- [x] Support images with appropriate alternative text.
- [x] Apply syntax highlighting if needed.
- [x] Avoid unsafe raw HTML.
- [x] Do not use executable MDX unless a clear requirement is approved.

The content loader must handle missing files, invalid metadata, and duplicate slugs safely.

#### 6.4 Blog listing page

Create `/blog`.

- [x] Display published articles.
- [x] Sort articles by publication date, newest first.
- [x] Display title, date, description, and tags.
- [x] Display a cover image when available.
- [x] Make each article link to its detail page.
- [x] Provide an appropriate empty state when there are no published posts.

#### 6.5 Individual article page

Create `/blog/[slug]`.

- [x] Load the article by slug.
- [x] Display title and description.
- [x] Display publication date.
- [x] Display article content.
- [x] Display tags.
- [x] Add navigation back to the blog.
- [x] Handle unknown slugs with a proper not-found page.
- [x] Generate page metadata dynamically.

#### 6.6 Draft handling

- [x] Exclude unpublished articles from production.
- [x] Do not expose drafts through RSS or sitemap.
- [x] Ensure draft content cannot be accessed through predictable public routes.
- [x] Keep publication behavior consistent between listing pages and individual pages.

#### 6.7 Blog discoverability

- [x] Generate an RSS feed.
- [x] Include published articles in the sitemap.
- [x] Add canonical URLs.
- [x] Add article metadata.
- [x] Add Open Graph metadata.
- [x] Consider dynamic Open Graph images.
- [x] Add reading-time information if useful.

#### 6.8 Documentation

Document how Neema or a future developer can:

1. Create a Markdown file.
2. Add the required frontmatter.
3. Write the article.
4. Add images.
5. Preview the article locally.
6. Publish it by committing and deploying the changes.

### Deliverables

- Markdown content loader.
- Frontmatter validation.
- Blog listing page.
- Dynamic article pages.
- RSS feed.
- Blog sitemap integration.
- Blog authoring documentation.

### Completion criteria

- Valid Markdown posts render correctly.
- Invalid metadata is detected.
- Draft posts are excluded from public output.
- Unknown slugs return a proper 404.
- RSS and sitemap contain only published content.
- A new article can be published without changing application code.

---

## Milestone 7 — Contact Form and WhatsApp Integration

**Objective:** Allow visitors to contact Neema through a professional form and direct contact links.

This milestone must distinguish between direct WhatsApp chat and automatic WhatsApp notifications.

### Tasks

#### 7.1 Contact page

Create `/contact`.

- [ ] Add a short professional introduction.
- [ ] Add an email action.
- [ ] Add a WhatsApp action.
- [ ] Add the contact form.
- [ ] Include an appropriate privacy notice.
- [ ] Make the page responsive.

Contact details must come from Neema and must not be invented.

#### 7.2 Contact form

Required fields:

- Name.
- Email.
- Message.

Optional fields may include:

- Subject.
- Organization.

Implement:

- [ ] Client-side validation.
- [ ] Server-side validation.
- [ ] Clear field-level error messages.
- [ ] Submission loading state.
- [ ] Success feedback.
- [ ] Failure feedback.
- [ ] Protection against repeated submissions.
- [ ] Spam protection appropriate to the chosen hosting and email setup.

Do not trust client-side validation alone.

#### 7.3 Backend submission

Implement a server-side contact endpoint or Server Action.

The handler must:

1. Validate the incoming request.
2. Reject invalid or oversized input.
3. Apply rate limiting or another appropriate abuse-control mechanism.
4. Apply spam protection.
5. Send the message through the selected email provider.
6. Return a safe response to the client.
7. Avoid logging message contents or personal information unnecessarily.

#### 7.4 Email notification

- [ ] Select an email provider.
- [ ] Configure sender identity and recipient address.
- [ ] Store credentials in environment variables.
- [ ] Use a verified sender domain in production.
- [ ] Set reply-to appropriately so Neema can respond to the visitor.
- [ ] Handle provider failures gracefully.
- [ ] Document provider setup.

Email should be the reliable default notification channel.

#### 7.5 WhatsApp direct chat

Implement a click-to-chat link using the approved phone number.

The link should:

- Open a WhatsApp conversation with Neema.
- Optionally include a prefilled message.
- Work on supported mobile and desktop devices.
- Never expose API credentials.

A prefilled message does not send automatically. The visitor must confirm and send it in WhatsApp.

#### 7.6 Optional automatic WhatsApp notifications

This is a separate integration and must not be assumed to work merely because Neema has a WhatsApp number.

Only implement it if:

- Neema approves the integration.
- The necessary WhatsApp Business Platform/Cloud API setup is available.
- The recipient configuration is confirmed.
- The required permissions and credentials are available.
- Current Meta messaging policies are checked.
- The applicable template and messaging-window requirements are satisfied.

Important:

- Submitting a website contact form does not automatically establish opt-in for unrelated WhatsApp messages.
- Do not use the contact form to initiate marketing messages.
- Do not assume that an ordinary personal WhatsApp account can receive automated Cloud API notifications.
- Keep API tokens server-side.
- Email must remain the fallback if WhatsApp delivery fails.

#### 7.7 Privacy and security

- [ ] Explain how submitted information will be used.
- [ ] Collect only necessary information.
- [ ] Avoid unnecessary message storage.
- [ ] Avoid exposing email provider errors to visitors.
- [ ] Protect all secrets.
- [ ] Use HTTPS in production.
- [ ] Ensure third-party integrations follow applicable privacy and messaging requirements.

### Deliverables

- Contact page.
- Validated contact form.
- Server-side form handler.
- Email notification integration.
- WhatsApp click-to-chat action.
- Optional automatic WhatsApp integration, if approved and configured.
- Privacy notice.

### Completion criteria

- Valid submissions reach the configured email address.
- Invalid submissions are rejected.
- The interface provides useful feedback.
- Spam controls are active.
- WhatsApp direct chat works with the approved number.
- Failure of an optional WhatsApp notification does not silently lose the contact message.

---

## Milestone 8 — SEO, Accessibility, and Performance

**Objective:** Prepare the website for public discovery and ensure a high-quality user experience.

### Tasks

#### 8.1 SEO

- [ ] Define global site metadata.
- [ ] Define page-specific titles and descriptions.
- [ ] Generate canonical URLs.
- [ ] Add Open Graph metadata.
- [ ] Add social sharing metadata.
- [ ] Generate `sitemap.xml`.
- [ ] Generate `robots.txt`.
- [ ] Ensure blog posts have unique metadata.
- [ ] Add structured data only where accurate and appropriate.
- [ ] Use meaningful URLs.
- [ ] Ensure published content is indexable.
- [ ] Prevent drafts and private routes from being indexed.

#### 8.2 Accessibility

- [ ] Use semantic HTML.
- [ ] Ensure keyboard navigation works.
- [ ] Provide visible focus states.
- [ ] Provide accessible labels for form fields.
- [ ] Use meaningful alternative text for images.
- [ ] Check color contrast.
- [ ] Ensure buttons and links have understandable names.
- [ ] Avoid communicating important information through color alone.
- [ ] Respect reduced-motion preferences.
- [ ] Check navigation and forms with a keyboard.

Aim for WCAG 2.2 AA where practical.

#### 8.3 Performance

- [ ] Use Next.js Image for optimized images.
- [ ] Avoid unnecessarily large image assets.
- [ ] Use efficient font loading.
- [ ] Minimize unnecessary client-side JavaScript.
- [ ] Avoid unnecessary dependencies.
- [ ] Use server rendering or static generation where appropriate.
- [ ] Check page loading behavior.
- [ ] Avoid layout shifts.
- [ ] Optimize the portrait and blog cover images.

#### 8.4 Quality checks

Run production builds and inspect important routes.

Use Lighthouse as a diagnostic tool. Aim for strong scores across Performance, Accessibility, Best Practices, and SEO, while fixing actual issues rather than optimizing only for a numerical score.

### Deliverables

- Complete metadata.
- Sitemap and robots configuration.
- Accessible interface.
- Optimized images and assets.
- Performance review.

### Completion criteria

- Important routes have appropriate metadata.
- The website is keyboard accessible.
- Images are optimized.
- No significant performance or accessibility issues remain.

---

## Milestone 9 — Testing and Quality Assurance

**Objective:** Verify the entire application before deployment.

### Tasks

#### 9.1 Static checks

- [ ] Run TypeScript checks.
- [ ] Run ESLint.
- [ ] Run the production build.
- [ ] Resolve warnings and errors that affect quality or reliability.

#### 9.2 Component and utility tests

Test important logic such as:

- Frontmatter validation.
- Markdown parsing.
- Slug handling.
- Draft filtering.
- Contact form validation.
- Contact submission error handling.

#### 9.3 End-to-end tests

Where practical, use Playwright to verify:

- [ ] Home page loads.
- [ ] Navigation works.
- [ ] About page loads.
- [ ] Services page loads.
- [ ] Blog listing works.
- [ ] Published blog articles open.
- [ ] Unknown blog slugs return 404.
- [ ] Contact form validation works.
- [ ] Contact form success and failure states work.
- [ ] WhatsApp and email links open correctly.

Do not send real contact messages during automated tests. Use a mocked email provider or a safe test environment.

#### 9.4 Responsive testing

Check:

- Small mobile screens.
- Larger mobile screens.
- Tablets.
- Desktop screens.

#### 9.5 Security review

- [ ] Confirm no secrets are committed.
- [ ] Confirm server-only modules are not imported into client components.
- [ ] Review contact endpoint validation.
- [ ] Review spam controls.
- [ ] Review Markdown rendering safety.
- [ ] Check dependency vulnerabilities where appropriate.
- [ ] Review error handling and sensitive logging.

### Deliverables

- Test suite.
- Test results.
- Resolved issues.
- Final quality checklist.

### Completion criteria

- Static checks pass.
- Important functionality is tested.
- Critical routes work.
- No known critical security issues remain.
- No major responsive defects remain.

---

## Milestone 10 — Deployment and Handover

**Objective:** Publish the website and prepare it for ongoing maintenance.

### Tasks

#### 10.1 Deployment preparation

- [ ] Confirm production build succeeds.
- [ ] Confirm production environment variables.
- [ ] Confirm contact email provider configuration.
- [ ] Confirm production domain.
- [ ] Confirm approved social and contact links.
- [ ] Confirm all content is approved.
- [ ] Confirm the portrait and images are approved.
- [ ] Confirm no development-only placeholders are visible.

#### 10.2 Deployment

Use Vercel or another compatible hosting platform.

- [ ] Connect the GitHub repository.
- [ ] Configure the production branch.
- [ ] Configure environment variables.
- [ ] Configure the domain.
- [ ] Deploy the application.
- [ ] Verify the production deployment.
- [ ] Verify the contact form.
- [ ] Verify blog pages and RSS.
- [ ] Verify sitemap and robots.
- [ ] Verify mobile and desktop rendering.

#### 10.3 Documentation

Update `README.md` with:

- Project overview.
- Technology stack.
- Installation instructions.
- Development commands.
- Build commands.
- Environment variable documentation.
- Project structure.
- How to add blog posts.
- How to update profile information.
- How to configure contact integrations.
- Deployment instructions.

#### 10.4 Handover

- [ ] Provide the production URL.
- [ ] Explain how to publish blog posts.
- [ ] Explain how to update professional information.
- [ ] Explain how to update contact details.
- [ ] Document the deployment process.
- [ ] Document any integrations that require external account ownership.
- [ ] List any remaining tasks requiring Neema's input.

### Deliverables

- Deployed website.
- Updated README.
- Environment configuration guide.
- Maintenance instructions.
- Handover checklist.

### Completion criteria

- The production website is accessible.
- All approved functionality works.
- The client can understand how content is maintained.
- Deployment and maintenance instructions are available.

---

# 4. Git and Collaboration Workflow

The agent must follow a disciplined Git workflow throughout development.

## Branch naming

Use descriptive branch names:

```text
main
feature/project-foundation
feature/design-system
feature/profile
feature/services
feature/blog
feature/contact
feature/seo-accessibility
fix/contact-validation
fix/blog-rendering
```

For a small project, branches may be grouped when tasks are closely related. Avoid creating branches for trivial changes.

## Commit conventions

Use clear commit messages following conventional commit principles.

Examples:

```text
chore: organize project structure
feat: add responsive navigation
feat: implement profile section
feat: add markdown blog engine
feat: implement contact form
fix: handle invalid blog frontmatter
fix: improve mobile navigation
test: add contact form validation tests
docs: document blog publishing workflow
```

## Git rules

- Never commit `.env.local` or secrets.
- Keep `.env.example` updated.
- Never force-push to `main` without explicit approval.
- Do not commit generated build output or `node_modules`.
- Keep commits focused.
- Do not overwrite another developer's work.
- Review the Git diff before committing.
- Do not use destructive Git commands without explicit approval.

---

# 5. AI Coding Agent Operating Rules

These rules apply throughout the project.

## Before implementing a milestone

1. Read `PROJECT.md`.
2. Read this `IMPLEMENTATION_PLAN.md`.
3. Inspect the current repository.
4. Identify the milestone's dependencies.
5. Explain the proposed implementation approach briefly.
6. Identify any missing client information that blocks the work.

## During implementation

1. Work on one milestone at a time.
2. Complete related tasks before moving forward.
3. Reuse existing components where appropriate.
4. Avoid unnecessary abstractions.
5. Avoid introducing libraries without a clear reason.
6. Prefer maintainable, straightforward implementations.
7. Follow TypeScript conventions.
8. Keep Server Components as the default.
9. Keep server-side functionality secure.
10. Do not invent client information.
11. Do not silently change agreed requirements.
12. Do not replace the project's architecture without justification.

## After implementing a milestone

The agent must:

1. Run relevant tests.
2. Run TypeScript checks.
3. Run ESLint.
4. Run a production build when appropriate.
5. Review the changes.
6. Identify unfinished tasks.
7. Report any blockers.
8. Update this document's checkboxes only for tasks actually completed.
9. Summarize the files created or modified.
10. Wait for approval before moving to a major milestone if the user requests milestone-by-milestone review.

## Handling missing information

If a task requires information that Neema has not provided:

- Do not invent it.
- Do not make assumptions about her career.
- Do not use fictional content as if it were real.
- Use a development-only placeholder when necessary.
- Mark the task as awaiting client input.
- Continue with independent tasks where possible.

## Handling technical decisions

When a technical decision is necessary:

- Prefer official documentation.
- Check compatibility with the installed versions.
- Explain meaningful trade-offs.
- Prefer simple solutions.
- Avoid unnecessary packages.
- Document important architectural decisions.

---

# 6. Definition of Done

The project is considered complete only when all applicable criteria below are satisfied.

## Functional

- [ ] Home page works.
- [ ] About section works.
- [ ] Services section works.
- [ ] Experience and capabilities are correctly presented.
- [ ] Blog listing works.
- [ ] Individual blog posts work.
- [ ] Draft posts are excluded from public output.
- [ ] RSS feed works.
- [ ] Contact form works.
- [ ] Email notifications work.
- [ ] WhatsApp click-to-chat works.
- [ ] Approved optional integrations work.

## Content

- [ ] Neema has approved her professional profile.
- [ ] Education information is confirmed.
- [ ] Experience information is confirmed.
- [ ] Services are confirmed.
- [ ] Contact information is approved.
- [ ] Images are approved.
- [ ] No fictional testimonials or achievements are published.

## Technical

- [ ] TypeScript checks pass.
- [ ] ESLint passes.
- [ ] Production build succeeds.
- [ ] Important functionality has tests.
- [ ] No secrets are exposed.
- [ ] Markdown rendering is safe.
- [ ] Environment variables are documented.

## User experience

- [ ] Responsive on mobile, tablet, and desktop.
- [ ] Accessible navigation.
- [ ] Accessible forms.
- [ ] Good image performance.
- [ ] Consistent visual design.
- [ ] Meaningful page metadata.

## Delivery

- [ ] Production deployment is successful.
- [ ] README is complete.
- [ ] Blog publishing instructions are available.
- [ ] Maintenance instructions are available.
- [ ] Client handover is complete.

---

# 7. Important Project Constraints

The following constraints must not be ignored:

1. The project is a professional personal portfolio, not a generic HR company website.
2. The design must remain minimalist, elegant, and approachable.
3. The website must be responsive.
4. Blog articles must be maintained as Markdown files in GitHub.
5. A database is not required for the initial implementation.
6. Email is the default contact notification channel.
7. Automatic WhatsApp notifications are optional and depend on external setup and policy requirements.
8. Professional information must be confirmed before publication.
9. No fabricated testimonials, work history, credentials, or achievements.
10. Maintainability and security are more important than adding unnecessary features.
11. The existing Next.js application must be preserved.
12. All development and package management must use pnpm.

---

# 8. Final Instruction

Build this project as a professional, production-ready personal portfolio.

Do not rush through milestones simply to finish the roadmap. Each milestone must be implemented, verified, and documented before being considered complete.

Prioritize:

- Accurate professional representation.
- Excellent visual design.
- Maintainable architecture.
- Secure contact functionality.
- Reliable Markdown publishing.
- Accessibility.
- Performance.
- Clear documentation.

The final result should be easy to maintain, easy to extend, and suitable for Neema's long-term professional presence online.