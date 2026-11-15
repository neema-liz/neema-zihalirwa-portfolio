"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#736660]",
        className
      )}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={cn(
          "transition-colors px-1 py-0.5 cursor-pointer",
          language === "en"
            ? "text-[#C75D38] font-bold border-b border-[#C75D38]"
            : "hover:text-[#2A2421]"
        )}
      >
        EN
      </button>

      <span className="text-[#E4DDD6] select-none" aria-hidden="true">
        /
      </span>

      <button
        type="button"
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        className={cn(
          "transition-colors px-1 py-0.5 cursor-pointer",
          language === "fr"
            ? "text-[#C75D38] font-bold border-b border-[#C75D38]"
            : "hover:text-[#2A2421]"
        )}
      >
        FR
      </button>
    </div>
  );
}
