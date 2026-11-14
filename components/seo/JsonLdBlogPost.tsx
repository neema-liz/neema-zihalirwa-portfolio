import React from "react";
import { BlogPost } from "@/lib/blog";
import { siteConfig } from "@/config/site";

interface JsonLdBlogPostProps {
  post: BlogPost;
}

export function JsonLdBlogPost({ post }: JsonLdBlogPostProps) {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: postUrl,
    datePublished: post.date,
    dateModified: post.updatedAt || post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: baseUrl,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
