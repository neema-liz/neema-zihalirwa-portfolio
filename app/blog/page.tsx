import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogListClient } from "@/components/blog/BlogListClient";
import { BlogIndexHeader } from "@/components/blog/BlogIndexHeader";

export const metadata: Metadata = {
  title: "Writing & Thoughts — Neema Zihalirwa Elisabeth",
  description:
    "A personal space for thoughts, ideas, and reflections on people, work, learning, and everyday life.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts(false);
  const tags = getAllTags();

  return (
    <div className="pt-28 md:pt-36 pb-28 md:pb-36 bg-[#F7F4EE]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header: 12-Column Split */}
        <BlogIndexHeader />

        {/* Client-Side Minimalist Filter & Paginated List */}
        <BlogListClient posts={posts} tags={tags} />
      </div>
    </div>
  );
}
