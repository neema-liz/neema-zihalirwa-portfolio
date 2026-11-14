import React from "react";

export function AffiliationsBar() {
  return (
    <section className="py-16 border-t border-[#E4DDD6]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-medium tracking-[0.3em] uppercase text-[#736660] text-center mb-10">
          Selected Affiliations &middot; Institutions &middot; Engagements
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <span className="font-serif text-base sm:text-lg text-[#2A2421]/60 hover:text-[#2A2421] transition-colors cursor-default text-center">
            DTTASA Association
          </span>
          <span className="font-serif text-base sm:text-lg text-[#2A2421]/60 hover:text-[#2A2421] transition-colors cursor-default text-center">
            KaziEasy Rwanda
          </span>
          <span className="font-serif text-base sm:text-lg text-[#2A2421]/60 hover:text-[#2A2421] transition-colors cursor-default text-center">
            Kigali Independent Univ. (ULK)
          </span>
          <span className="font-serif text-base sm:text-lg text-[#2A2421]/60 hover:text-[#2A2421] transition-colors cursor-default text-center">
            Himbi Institute
          </span>
        </div>
      </div>
    </section>
  );
}
