"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/config/profile";
import { MobileNav } from "@/components/layout/MobileNav";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export function Header() {
  const { t } = useLanguage();

  const navItems = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.about, href: "/about" },
    { title: t.nav.services, href: "/services" },
    { title: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F7F4EE]/85 backdrop-blur-md border-b border-[#E4DDD6]/60 transition-colors">
      <div className="max-w-8xl mx-auto flex items-center justify-between py-5 px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Brand / Name */}
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.15em] text-[#2A2421] hover:opacity-80 transition-opacity"
        >
          Neema Elisabeth
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] tracking-[0.10em] uppercase text-[#736660] hover:text-[#2A2421] transition-colors"
            >
              {item.title}
            </Link>
          ))}

          {/* Action Link */}
          <a
            href={`mailto:${profileData.contact.email.value}?subject=Professional%20Enquiry`}
            className="text-[10px] tracking-[0.10em] uppercase text-[#2A2421] border-b border-[#2A2421] pb-0.5 hover:opacity-60 transition-opacity font-medium ml-1"
          >
            {t.common.getInTouch}
          </a>

          {/* Language Switcher */}
          <div className="pl-3 border-l border-[#E4DDD6]">
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile Nav Toggle & Language Switcher */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
