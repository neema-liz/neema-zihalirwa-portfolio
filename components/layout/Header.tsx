import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { profileData } from "@/config/profile";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EE]/30 backdrop-blur-sm border-b border-[#E4DDD6]/60 transition-colors">
      <div className="max-w-8xl mx-auto flex items-center justify-between py-5 px-6 sm:px-20">
        {/* Brand / Name */}
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.15em] text-[#2A2421] hover:opacity-80 transition-opacity"
        >
          Neema Elisabeth
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.10em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors"
            >
              {item.title}
            </Link>
          ))}

          {/* Action Link */}
          <a
            href={`mailto:${profileData.contact.email.value}?subject=Professional%20Enquiry`}
            className="text-xs tracking-[0.10em] uppercase text-[#2A2421] border-b border-[#2A2421] pb-0.5 hover:opacity-60 transition-opacity font-medium ml-2"
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <MobileNav />
      </div>
    </header>
  );
}
