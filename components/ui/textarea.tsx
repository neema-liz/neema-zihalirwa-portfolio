import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full px-4 py-3.5 bg-[#EEE9DE]/30 border border-[#E4DDD6] text-sm sm:text-base text-[#2A2421] placeholder:text-[#736660]/40 transition-colors focus-visible:outline-none focus-visible:border-[#2A2421] focus-visible:bg-[#FAF8F5] disabled:cursor-not-allowed disabled:opacity-50 resize-y leading-relaxed",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
