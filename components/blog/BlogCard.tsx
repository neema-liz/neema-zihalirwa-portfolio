import React from "react";
import Link from "next/link";
import { BlogPostMetadata } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPostMetadata;
  index: number;
}

/**
 * Formats YYYY-MM-DD into a clean, human-readable date for the timeline axis
 */
function formatShortDate(dateString: string): string {
  if (!dateString) return "";
  const parts = dateString.split("-");
  if (parts.length !== 3) return dateString;
  const [yearStr, monthStr, dayStr] = parts;
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const mIndex = parseInt(monthStr, 10) - 1;
  const month = monthNames[mIndex] || monthStr;
  const day = parseInt(dayStr, 10);
  return `${month} ${day}, ${yearStr}`;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const numberStr = String(index + 1).padStart(2, "0");
  const formattedDate = formatShortDate(post.date);
  const primaryTag = post.tags && post.tags.length > 0 ? post.tags[0] : null;

  return (
    <div className="group grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-stretch">
      {/* Left: Boxed Card */}
      <article className="col-span-9 sm:col-span-10 lg:col-span-11 p-6 sm:p-8 md:p-10 border-none bg-transparent hover:bg-[#EEE9DE]/10 hover:border-none transition-all duration-300 flex flex-col justify-between">
        <div>
          {/* Top row: Number ledger & Minimalist Topic / Reading time (No bulky badges) */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="font-mono text-xs sm:text-sm text-[#736660] group-hover:text-[#C75D38] transition-colors font-medium">
              {numberStr}
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-[#736660]">
              {primaryTag && (
                <>
                  <span className="text-[#C75D38] uppercase tracking-wider">{primaryTag}</span>
                  <span>&middot;</span>
                </>
              )}
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Title & Description */}
          <Link href={`/blog/${post.slug}`} className="block">
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#2A2421] font-light leading-snug mb-3 group-hover:text-[#C75D38] transition-colors">
              {post.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#736660] leading-relaxed font-sans line-clamp-3 mb-6">
              {post.description}
            </p>
          </Link>
        </div>

        {/* Action Link */}
        <div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-xs font-medium tracking-[0.15em] uppercase text-[#2A2421] group-hover:text-[#C75D38] transition-colors"
          >
            Read thought &rarr;
          </Link>
        </div>
      </article>

      {/* Right: Date at Top + Vertical Line running downward along each card */}
      <div className="col-span-3 sm:col-span-2 lg:col-span-1 flex flex-col items-center justify-start pt-2 select-none">
        <time
          dateTime={post.date}
          className="text-[10px] sm:text-xs font-mono text-[#736660] group-hover:text-[#2A2421] transition-colors text-center leading-tight mb-3 tracking-wider"
        >
          {formattedDate}
        </time>
        <div className="w-px flex-1 bg-[#2A2421] group-hover:bg-[#C75D38] transition-colors min-h-[50px]" />
      </div>
    </div>
  );
}
