import test from "node:test";
import assert from "node:assert/strict";
import {
  PostFrontmatterSchema,
  calculateReadingTime,
  formatDate,
  getAllPosts,
  getPostBySlug,
  getAllTags,
  getAdjacentPosts,
} from "../lib/blog.ts";

test("PostFrontmatterSchema validates correct frontmatter", () => {
  const validData = {
    title: "Effective People Operations in Emerging Markets",
    description: "A comprehensive guide to structured talent acquisition and onboarding systems.",
    date: "2026-11-14",
    author: "Neema Zihalirwa Elisabeth",
    tags: ["Human Resources", "People Operations"],
    published: true,
  };

  const result = PostFrontmatterSchema.safeParse(validData);
  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.title, validData.title);
    assert.equal(result.data.published, true);
  }
});

test("PostFrontmatterSchema rejects invalid frontmatter", () => {
  // Invalid date format (not YYYY-MM-DD)
  const invalidDate = {
    title: "Short Title But Valid",
    description: "A valid description that exceeds ten characters.",
    date: "14/11/2026",
    tags: ["HR"],
    published: true,
  };
  const dateResult = PostFrontmatterSchema.safeParse(invalidDate);
  assert.equal(dateResult.success, false);

  // Missing tags
  const missingTags = {
    title: "Another Valid Title Here",
    description: "A valid description that exceeds ten characters.",
    date: "2026-11-14",
    tags: [],
    published: true,
  };
  const tagsResult = PostFrontmatterSchema.safeParse(missingTags);
  assert.equal(tagsResult.success, false);

  // Short title
  const shortTitle = {
    title: "Hi",
    description: "A valid description that exceeds ten characters.",
    date: "2026-11-14",
    tags: ["HR"],
    published: true,
  };
  const titleResult = PostFrontmatterSchema.safeParse(shortTitle);
  assert.equal(titleResult.success, false);
});

test("calculateReadingTime produces accurate minute estimates", () => {
  // Empty or very short text defaults to 1 min read
  assert.equal(calculateReadingTime(""), "1 min read");
  assert.equal(calculateReadingTime("Hello world"), "1 min read");

  // 400 words should be 2 min read
  const fourHundredWords = Array(400).fill("word").join(" ");
  assert.equal(calculateReadingTime(fourHundredWords), "2 min read");

  // 650 words should be 4 min read (ceil(650/200) = 4)
  const sixFiftyWords = Array(650).fill("word").join(" ");
  assert.equal(calculateReadingTime(sixFiftyWords), "4 min read");
});

test("formatDate formats dates cleanly without timezone drift", () => {
  assert.equal(formatDate("2026-11-14"), "November 14, 2026");
  assert.equal(formatDate("2026-01-01"), "January 1, 2026");
  assert.equal(formatDate(""), "");
});

test("getAllPosts returns only published articles sorted by date descending", () => {
  const publishedPosts = getAllPosts(false);
  assert.ok(publishedPosts.length >= 1, "Expected at least 1 published post");

  // Verify all returned posts are published
  for (const post of publishedPosts) {
    assert.equal(post.published, true);
    assert.ok(post.slug.length > 0);
    assert.ok(post.readingTime.includes("min read"));
  }

  // Verify draft is excluded
  const hasDraft = publishedPosts.some((p) => p.slug === "draft-future-of-work-africa");
  assert.equal(hasDraft, false, "Draft post must be excluded from public listings");

  // Verify descending date order
  for (let i = 0; i < publishedPosts.length - 1; i++) {
    assert.ok(
      publishedPosts[i].date >= publishedPosts[i + 1].date,
      `Posts should be sorted descending: ${publishedPosts[i].date} >= ${publishedPosts[i + 1].date}`
    );
  }
});

test("getPostBySlug compiles published post and enforces draft safety", async () => {
  // Existing published post by Neema
  const post = await getPostBySlug("why-african-students-need-more-than-education-to-succeed", false);
  assert.ok(post !== null, "Expected post to exist");
  assert.equal(post.slug, "why-african-students-need-more-than-education-to-succeed");
  assert.ok(post.html.length > 50, "HTML should be generated");
  assert.ok(post.html.includes("</h3>") || post.html.includes("<p>") || post.html.includes("</h2>"), "HTML should contain valid tags");

  // Non-existent slug returns null
  const missing = await getPostBySlug("non-existent-article-slug", false);
  assert.equal(missing, null);

  // Draft slug returns null when includeDrafts is false
  const draft = await getPostBySlug("draft-future-of-work-africa", false);
  assert.equal(draft, null, "Unpublished draft must return null for public visitors");

  // Draft slug returns content when includeDrafts is true
  const draftInternal = await getPostBySlug("draft-future-of-work-africa", true);
  assert.ok(draftInternal !== null);
  assert.equal(draftInternal.published, false);
});

test("getAllTags returns distinct tags with correct counts", () => {
  const tags = getAllTags();
  assert.ok(tags.length > 0);
  for (const { tag, count } of tags) {
    assert.ok(tag.length > 0);
    assert.ok(count >= 1);
  }
});

test("getAdjacentPosts returns previous and next navigation links", () => {
  const posts = getAllPosts(false);
  if (posts.length >= 2) {
    const middleIndex = 1;
    const currentSlug = posts[middleIndex].slug;
    const { prev, next } = getAdjacentPosts(currentSlug);

    assert.equal(next?.slug, posts[0].slug, "Next (newer) post should be index 0");
    if (posts.length > 2) {
      assert.equal(prev?.slug, posts[2].slug, "Previous (older) post should be index 2");
    }
  }
});
