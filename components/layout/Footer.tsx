"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { profileData } from "@/config/profile";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pt-20 pb-12 border-t border-[#E4DDD6] bg-[#F7F4EE] text-[#2A2421]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* 4-Column Editorial Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-20">
          {/* Col 1: Navigate */}
          <div>
            <h3 className="font-serif italic text-2xl font-light text-[#2A2421] mb-6">
              Navigate
            </h3>
            <ul className="space-y-3.5 text-sm sm:text-base font-sans text-[#2A2421]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#C75D38] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#C75D38] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#C75D38] transition-colors"
                >
                  Writing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Empty Title (Aligned with Navigate) */}
          <div>
            <div className="h-8 mb-6 hidden md:block" aria-hidden="true" />
            <ul className="space-y-3.5 text-sm sm:text-base font-sans text-[#2A2421]">
              <li>
                <Link
                  href="/client-stories"
                  className="hover:text-[#C75D38] transition-colors"
                >
                  Client Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#C75D38] transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#C75D38] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Socials */}
          <div>
            <h3 className="font-serif italic text-2xl font-light text-[#2A2421] mb-6">
              Socials
            </h3>
            <ul className="space-y-3 text-sm sm:text-base font-sans text-[#2A2421]">
              {siteConfig.socialLinks
                .slice(0,-1)
                .filter((s) => s.status === "confirmed")
                .map((social) => (
                  <li key={social.platform}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#C75D38] transition-colors inline-block"
                      aria-label={`${social.label} (opens in a new tab)`}
                    >
                      {social.platform}
                    </a>
                  </li>
                ))}
              {profileData.contact.whatsapp.phoneNumber && (
                <li>
                  <a
                    href={`https://wa.me/${profileData.contact.whatsapp.phoneNumber.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C75D38] transition-colors inline-block"
                    aria-label="Chat on WhatsApp (opens in a new tab)"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h3 className="font-serif italic text-2xl font-light text-[#2A2421] mb-6">
              Legal
            </h3>
            <ul className="space-y-3.5 text-sm sm:text-base font-sans text-[#2A2421]">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#C75D38] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/imprint"
                  className="hover:text-[#C75D38] transition-colors"
                >
                  Imprint
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-notice"
                  className="hover:text-[#C75D38] transition-colors"
                >
                  Legal Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Scroll to top & Editorial Copyright */}
        <div className="pt-8 border-t border-[#E4DDD6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div/>
          {/* Copyright & Location Strip */}
          <div className="text-xs text-[#736660] font-sans tracking-wide">
            <span>&copy; {currentYear} Neema Zihalirwa Elisabeth</span>
            <span className="mx-2 text-[#E4DDD6]"></span>
            <span>Human Resources &amp; Talent Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
