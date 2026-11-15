import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full px-4 py-3.5 bg-[#EEE9DE]/30 border border-[#E4DDD6] text-sm sm:text-base text-[#2A2421] placeholder:text-[#736660]/40 transition-colors focus-visible:outline-none focus-visible:border-[#2A2421] focus-visible:bg-[#FAF8F5] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
