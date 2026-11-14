import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";

export async function GET() {
  const posts = getAllPosts(false);
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  const itemsXml = posts
    .map((post) => {
      const postUrl = `${baseUrl}/blog/${post.slug}`;
      const pubDate = new Date(`${post.date}T00:00:00Z`).toUTCString();
      const categoriesXml = post.tags
        .map((tag) => `<category>${tag}</category>`)
        .join("\n      ");

      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${post.author}</author>
      ${categoriesXml}
    </item>`;
    })
    .join("\n");

  const latestBuildDate = posts[0]
    ? new Date(`${posts[0].date}T00:00:00Z`).toUTCString()
    : "Fri, 14 Nov 2026 00:00:00 GMT";

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name} — Essays &amp; Insights</title>
    <link>${baseUrl}/blog</link>
    <description>${siteConfig.description}</description>
    <language>en-US</language>
    <lastBuildDate>${latestBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=14400, stale-while-revalidate=86400",
    },
  });
}
