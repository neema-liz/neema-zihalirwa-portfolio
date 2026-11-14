import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        isCentered ? "text-center mx-auto max-w-2xl" : "max-w-2xl",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#1E3A34]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-stone-900 leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
