import React from "react";

interface ProseContentProps {
  html: string;
}

export function ProseContent({ html }: ProseContentProps) {
  return (
    <div
      className="editorial-prose font-sans text-base text-[#2A2421] leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
