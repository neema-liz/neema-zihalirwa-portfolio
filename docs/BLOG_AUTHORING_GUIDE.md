# Blog Authoring Guide — Neema Zihalirwa Portfolio

This portfolio features a **Git-backed, database-free Markdown blog system**. Every article is a standard Markdown (`.md`) file located in the `content/blog/` directory of the repository.

When a post is added, edited, or deleted, Next.js automatically processes it during build time, generates static HTML pages, updates the blog archive, and updates the RSS feed (`/rss.xml`).

---

## 1. Quick Start: Publishing a New Essay

### Step 1: Create a Markdown File
Navigate to `content/blog/` and create a new file named with your desired slug in lowercase with hyphens:
```text
content/blog/my-new-essay-title.md
```
*(Example: `content/blog/effective-onboarding-strategies.md`)*

### Step 2: Add Frontmatter Metadata
At the very top of the file, include the required YAML frontmatter block between triple hyphens (`---`):

```yaml
---
title: "Effective Onboarding Strategies for Growing Organizations"
description: "A practical guide to structuring 30-60-90 day orientation frameworks that increase retention and accelerate team autonomy."
date: "2026-11-15"
author: "Neema Zihalirwa Elisabeth"
tags:
  - Human Resources
  - Onboarding
  - Talent Development
published: true
---
```

### Step 3: Write the Content
Below the closing `---`, write your article using standard Markdown:

```markdown
Every new hire represents an investment of time, trust, and organizational resources...

## 1. The First Thirty Days: Orientation & Scaffolding

Rather than overwhelming candidates with administrative forms on day one, structure their first month around clear learning checkpoints:

- **Day 1–3:** Tool setup and cross-functional introductions.
- **Week 2:** Guided execution of core workflows alongside a dedicated mentor.
- **Week 4:** First retrospective reflection on operational blockers.

> "A thoughtful onboarding experience replaces early workplace anxiety with confidence and clarity."

### Key Takeaways
When organizations prioritize structured orientation, 90-day retention improves significantly.
```

---

## 2. Frontmatter Specification & Rules

| Field | Type | Required | Description | Example |
| :--- | :--- | :--- | :--- | :--- |
| `title` | string | **Yes** | Article headline (min 5 characters) | `"Talent Acquisition in Emerging Markets"` |
| `description` | string | **Yes** | Summary for cards, SEO, and RSS (min 10 characters) | `"Practical insights on structured recruiting..."` |
| `date` | string | **Yes** | Publication date in `YYYY-MM-DD` format | `"2026-11-14"` |
| `author` | string | **Yes** | Author display name | `"Neema Zihalirwa Elisabeth"` |
| `tags` | list | **Yes** | Categorization tags (at least 1 tag) | `["Human Resources", "Pedagogy"]` |
| `published` | boolean | **Yes** | Set to `true` to publish, or `false` to keep as draft | `true` |
| `coverImage` | string | Optional | Path to optional header image | `"/images/blog/cover-sample.jpg"` |

---

## 3. Handling Drafts (`published: false`)

If an article is in progress and not ready for public reading:
1. Set `published: false` in the frontmatter.
2. The article will **NOT** appear on `/blog`.
3. The URL `/blog/[slug]` will return a clean `404 Not Found` in production.
4. The article will **NOT** be included in `/rss.xml` or sitemaps.
5. When ready to publish, simply change `published: true` and commit the file.

---

## 4. Including Images

To include images within your essays:
1. Place the image file in the `public/images/blog/` directory.
2. Reference the image in Markdown using the relative public path:
   ```markdown
   ![Descriptive alternative text](/images/blog/onboarding-roadmap.png)
   ```

---

## 5. Local Preview & Publishing Workflow

### Previewing Locally
Run the development server in your terminal:
```bash
pnpm dev
```
Open [http://localhost:3000/blog](http://localhost:3000/blog) in your browser to inspect the layout, typography, reading time, and mobile responsiveness.

### Publishing to Production
Commit your changes to Git and push to GitHub:
```bash
git add content/blog/your-new-article.md
git commit -m "feat(blog): publish essay on onboarding strategies"
git push origin main
```
Vercel will automatically trigger a production deployment, pre-rendering the new static page in seconds.
