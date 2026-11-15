import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getAdjacentPosts } from "@/lib/blog";
import { ProseContent } from "@/components/blog/ProseContent";
import { JsonLdBlogPost } from "@/components/seo/JsonLdBlogPost";
import { BlogPostClientWrapper } from "@/components/blog/BlogPostClientWrapper";
import { profileData } from "@/config/profile";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts(false);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, false);

  if (!post) {
    return {
      title: "Article Not Found — Neema Zihalirwa Elisabeth",
    };
  }

  return {
    title: `${post.title} — Neema Zihalirwa Elisabeth`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, false);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);
  const booking = profileData.contact.booking;

  return (
    <div className="pt-28 md:pt-36 pb-28 bg-[#F7F4EE]">
      <JsonLdBlogPost post={post} />
      <BlogPostClientWrapper post={post} prev={prev} next={next} booking={booking}>
        <ProseContent html={post.html} />
      </BlogPostClientWrapper>
    </div>
  );
}
