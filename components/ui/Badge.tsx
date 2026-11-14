import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-stone-100 text-stone-700 border border-stone-200/60",
    accent: "bg-[#E7EFEA] text-[#1E3A34] border border-[#D1DED8]",
    outline: "border border-stone-300 text-stone-700 bg-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
