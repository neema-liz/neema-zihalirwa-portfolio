import React from "react";
import { profileData } from "@/config/profile";

export function ValuesGrid() {
  return (
    <div className="pt-10">
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] mb-6">
        Guiding Principles &middot; Values
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {profileData.values.map((val) => (
          <div
            key={val.title}
            className="p-6 bg-[#EEE9DE]/40 border border-[#E4DDD6] transition-colors hover:bg-[#EEE9DE]/80"
          >
            <h4 className="font-serif text-base text-[#2A2421] font-medium mb-2">
              {val.title}
            </h4>
            <p className="text-xs text-[#736660] leading-relaxed font-sans">
              {val.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
