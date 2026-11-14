import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="py-12 md:py-16 border-t border-[#E4DDD6] bg-[#F7F4EE] text-[#2A2421]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          <div>
            <Link
              href="/"
              className="font-serif text-lg tracking-tight text-[#2A2421] hover:opacity-80 transition-opacity"
            >
              Neema Zihalirwa Elisabeth
            </Link>
            <p className="text-xs text-[#736660] mt-1 font-sans">
              Human Resources Professional &middot; Kigali, Rwanda
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-6 text-xs uppercase tracking-[0.12em] text-[#736660]">
            {siteConfig.socialLinks
              .filter((s) => s.status === "confirmed")
              .map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#2A2421] border-b border-transparent hover:border-[#2A2421] pb-0.5 transition-all"
                >
                  {social.platform}
                </a>
              ))}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-[#E4DDD6]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-wider text-[#736660]">
          <span>&copy; {currentYear} Neema Zihalirwa Elisabeth. All rights reserved.</span>
          <span>Designed with care</span>
        </div>
      </div>
    </footer>
  );
}
