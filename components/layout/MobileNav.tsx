"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { profileData } from "@/config/profile";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      {/* Minimalist Transparent Icon Toggle Button in Header */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className="relative z-50 w-9 h-9 flex items-center justify-center text-[#2A2421] hover:text-[#C75D38] transition-colors bg-transparent border-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C75D38]"
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

      {/* Render Backdrop & Drawer at document.body via Portal to escape Header's backdrop-filter containing block */}
      {mounted &&
        createPortal(
          <div
            className={cn(
              "fixed inset-0 z-[100] md:hidden transition-all duration-300",
              isOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
            )}
          >
            {/* Frosted Glass Backdrop (Blurs the underlying website) */}
            <div
              className={cn(
                "fixed inset-0 bg-[#2A2421]/2 backdrop-blur-xs transition-opacity duration-300 ease-in-out",
                isOpen ? "opacity-100" : "opacity-0"
              )}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Frosted Slide-Over Panel (Full viewport height h-dvh) */}
            <div
              className={cn(
                "fixed inset-y-0 right-0 w-full max-w-xs h-dvh bg-[#F7F4EE]/95 backdrop-blur-2xl px-8 py-20 shadow-2xl transition-transform duration-300 ease-in-out border-l border-[#E4DDD6] flex flex-col justify-between overflow-y-auto",
                isOpen ? "translate-x-0" : "translate-x-full"
              )}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Close Button inside Drawer */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation menu"
                className="absolute top-5 right-6 w-9 h-9 flex items-center justify-center text-[#2A2421] hover:text-[#C75D38] transition-colors bg-transparent border-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C75D38]"
              >
                <X className="w-6 h-6" />
              </button>

              <nav className="flex flex-col space-y-6 pt-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#736660]">
                  Navigation
                </p>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-light text-[#2A2421] hover:italic hover:text-[#C75D38] transition-all"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-light text-[#2A2421] hover:italic hover:text-[#C75D38] transition-all"
                >
                  About
                </Link>
                <Link
                  href="/experience"
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-light text-[#2A2421] hover:italic hover:text-[#C75D38] transition-all"
                >
                  Experience
                </Link>
                <Link
                  href="/services"
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-light text-[#2A2421] hover:italic hover:text-[#C75D38] transition-all"
                >
                  Services
                </Link>
                <Link
                  href="/client-stories"
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-light text-[#2A2421] hover:italic hover:text-[#C75D38] transition-all"
                >
                  Client Stories
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-light text-[#2A2421] hover:italic hover:text-[#C75D38] transition-all"
                >
                  Writing
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-2xl font-light text-[#2A2421] hover:italic hover:text-[#C75D38] transition-all"
                >
                  Contact
                </Link>
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
          </div>,
          document.body
        )}
    </div>
  );
}
