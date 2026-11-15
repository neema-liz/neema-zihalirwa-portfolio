"use client";

import React from "react";
import Link from "next/link";
import { BlogPost, BlogPostMetadata } from "@/lib/blog";
import { useLanguage } from "@/context/LanguageContext";

interface BlogPostClientWrapperProps {
  post: BlogPost;
  prev: BlogPostMetadata | null;
  next: BlogPostMetadata | null;
  booking?: {
    googleCalendarUrl?: string;
    calendlyUrl?: string;
  };
  children: React.ReactNode;
}

function formatPostDate(dateString: string, lang: string): string {
  if (!dateString) return "";
  const parts = dateString.split("-");
  if (parts.length !== 3) return dateString;
  const [yearStr, monthStr, dayStr] = parts;

  const enMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const frMonths = [
    "janvier", "février", "mars", "avril", "mai", "juin",
    "juillet", "août", "septembre", "octobre", "novembre", "décembre"
  ];

  const months = lang === "fr" ? frMonths : enMonths;
  const mIndex = parseInt(monthStr, 10) - 1;
  const month = months[mIndex] || monthStr;
  const day = parseInt(dayStr, 10);

  return lang === "fr" ? `${day} ${month} ${yearStr}` : `${month} ${day}, ${yearStr}`;
}

export function BlogPostClientWrapper({
  post,
  prev,
  next,
  booking,
  children,
}: BlogPostClientWrapperProps) {
  const { t, language } = useLanguage();
  const p = t.blogPage.post;
  const formattedDate = formatPostDate(post.date, language);

  return (
    <article className="max-w-3xl mx-auto px-6 sm:px-8">
      {/* Breadcrumb Back Link */}
      <div className="mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors"
        >
          {p.backToAll}
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12 pb-10 border-b border-[#E4DDD6]">
        <div className="flex items-center gap-3 text-xs text-[#736660] font-sans mb-4">
          <time dateTime={post.date}>{formattedDate}</time>
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

        {/* Minimalist topics line */}
        <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#736660]">
            {p.topics}
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
      <div className="mb-16">{children}</div>

      {/* Consultation Callout */}
      <div className="p-8 sm:p-10 bg-[#EEE9DE]/30 border border-[#E4DDD6] my-16">
        <p className="text-[11px] uppercase tracking-[0.25em] text-[#736660] mb-2 font-medium">
          {p.calloutEyebrow}
        </p>
        <h3 className="font-serif text-xl sm:text-2xl text-[#2A2421] font-normal mb-3">
          {p.calloutTitle}
        </h3>
        <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans max-w-xl mb-6">
          {p.calloutSubtitle}
        </p>

        <div className="flex flex-wrap gap-4">
          {booking?.googleCalendarUrl && (
            <a
              href={booking.googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[0.15em] uppercase bg-[#2A2421] text-[#FAF8F5] px-6 py-3 hover:bg-[#C75D38] transition-colors"
            >
              {p.googleMeet}
            </a>
          )}
          {booking?.calendlyUrl && (
            <a
              href={booking.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-[0.15em] uppercase border border-[#2A2421] text-[#2A2421] px-6 py-3 hover:bg-[#2A2421] hover:text-[#FAF8F5] transition-colors"
            >
              {p.calendly}
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
                {p.olderThought}
              </span>
              <span className="font-serif text-base text-[#2A2421] group-hover:text-[#C75D38] transition-colors leading-snug">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span className="text-xs text-[#736660] italic">{p.firstArticle}</span>
          )}
        </div>

        <div className="sm:text-right">
          {next ? (
            <Link href={`/blog/${next.slug}`} className="block group">
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#736660] block mb-1">
                {p.newerThought}
              </span>
              <span className="font-serif text-base text-[#2A2421] group-hover:text-[#C75D38] transition-colors leading-snug">
                {next.title}
              </span>
            </Link>
          ) : (
            <span className="text-xs text-[#736660] italic">{p.latestArticle}</span>
          )}
        </div>
      </div>
    </article>
  );
}
