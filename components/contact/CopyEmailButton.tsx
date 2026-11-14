"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
}

export function CopyEmailButton({ email, className = "" }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if clipboard API is unavailable
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy email address to clipboard"
      className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider px-3 py-1.5 border border-[#E4DDD6] bg-[#FAF8F5] text-[#2A2421] hover:bg-[#EEE9DE] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C75D38] ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-[#C75D38]" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-[#736660]" />
          <span>Copy Address</span>
        </>
      )}
    </button>
  );
}
