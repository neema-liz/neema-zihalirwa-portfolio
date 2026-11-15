import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getAdjacentPosts, formatDate } from "@/lib/blog";
import { ProseContent } from "@/components/blog/ProseContent";
import { JsonLdBlogPost } from "@/components/seo/JsonLdBlogPost";
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
      <article className="max-w-3xl mx-auto px-6 sm:px-8">
        {/* Breadcrumb Back Link */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors"
          >
            &larr; Back to all writing
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12 pb-10 border-b border-[#E4DDD6]">
          <div className="flex items-center gap-3 text-xs text-[#736660] font-sans mb-4">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
            <span>&middot;</span>
            <span className="text-[#C75D38] font-medium">{post.author}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#2A2421] leading-[1.15] mb-6">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#736660] font-sans leading-relaxed mb-6">
            {post.description}
          </p>

          {/* Minimalist topics line without bulky pill borders */}
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#736660]">
              Topics:
            </span>
            {post.tags.map((tag, i) => (
              <span key={tag} className="text-[#C75D38] uppercase tracking-wider">
                {tag}
                {i < post.tags.length - 1 && (
                  <span className="text-[#E4DDD6] ml-2">&middot;</span>
                )}
              </span>
            ))}
          </div>
        </header>

        {/* Article Body */}
        <div className="mb-16">
          <ProseContent html={post.html} />
        </div>

        {/* Consultation Callout */}
        <div className="p-8 sm:p-10 bg-[#EEE9DE]/30 border border-[#E4DDD6] my-16">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#736660] mb-2 font-medium">
            Continue the Conversation
          </p>
          <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-normal mb-3">
            Interested in discussing people operations or team culture?
          </h3>
          <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans max-w-xl mb-6">
            Schedule a 30-minute discovery conversation directly on my calendar or reach out via email.
          </p>

          <div className="flex flex-wrap gap-4">
            {booking?.googleCalendarUrl && (
              <a
                href={booking.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-[0.15em] uppercase bg-[#2A2421] text-[#FAF8F5] px-6 py-3 hover:bg-[#C75D38] transition-colors"
              >
                Google Meet Call &rarr;
              </a>
            )}
            {booking?.calendlyUrl && (
              <a
                href={booking.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-6 py-3 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
              >
                Calendly &rarr;
              </a>
            )}
          </div>
        </div>

        {/* Previous / Next Article Navigation */}
        <div className="pt-8 border-t border-[#E4DDD6] grid sm:grid-cols-2 gap-8">
          <div>
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="block group">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#736660] block mb-1">
                  &larr; Older Thought
                </span>
                <span className="font-serif text-base text-[#2A2421] group-hover:text-[#C75D38] transition-colors leading-snug">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span className="text-xs text-[#736660] italic">First article in the archive</span>
            )}
          </div>

          <div className="sm:text-right">
            {next ? (
              <Link href={`/blog/${next.slug}`} className="block group">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#736660] block mb-1">
                  Newer Thought &rarr;
                </span>
                <span className="font-serif text-base text-[#2A2421] group-hover:text-[#C75D38] transition-colors leading-snug">
                  {next.title}
                </span>
              </Link>
            ) : (
              <span className="text-xs text-[#736660] italic">Latest article published</span>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
