import * as React from "react";
import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "block text-xs font-mono uppercase tracking-[0.2em] text-[#736660]",
          className
        )}
        {...props}
      />
    );
  }
);
Label.displayName = "Label";
