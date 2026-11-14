"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { profileData } from "@/config/profile";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Minimalist Transparent Icon Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="relative z-[60] w-9 h-9 flex items-center justify-center text-[#2A2421] hover:text-[#C75D38] transition-colors bg-transparent border-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C75D38]"
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Menu
            className={cn(
              "w-6 h-6 absolute transition-all duration-300 ease-in-out",
              isOpen ? "opacity-0 rotate-90 scale-75 pointer-events-none" : "opacity-100 rotate-0 scale-100"
            )}
          />
          <X
            className={cn(
              "w-6 h-6 absolute transition-all duration-300 ease-in-out",
              isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75 pointer-events-none"
            )}
          />
        </div>
      </button>

      {/* Frosted Glass Backdrop (Blurs the underlying website) */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-[#2A2421]/20 backdrop-blur-md transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Frosted Slide-Over Panel */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-[#F7F4EE]/95 backdrop-blur-2xl px-8 py-20 shadow-2xl transition-transform duration-300 ease-in-out border-l border-[#E4DDD6] flex flex-col justify-between",
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col space-y-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#736660]">
            Navigation
          </p>
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-2xl font-light text-[#2A2421] hover:italic hover:text-[#C75D38] transition-all"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="pt-8 border-t border-[#E4DDD6] space-y-4">
          <a
            href={`mailto:${profileData.contact.email.value}?subject=Professional%20Enquiry`}
            onClick={() => setIsOpen(false)}
            className="block text-center text-xs uppercase tracking-[0.15em] bg-[#2A2421] text-[#FAF8F5] py-3.5 px-6 hover:bg-[#C75D38] transition-colors"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
