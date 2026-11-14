import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLdPerson } from "@/components/seo/JsonLdPerson";
import { siteConfig } from "@/config/site";
import "./globals.css";

const siteUrl = siteConfig.url.replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Neema Zihalirwa Elisabeth — Human Resources Professional",
    template: "%s | Neema Zihalirwa Elisabeth",
  },
  description:
    "Personal portfolio and professional insights of Neema Zihalirwa Elisabeth, an HR professional specializing in talent development, people operations, and organizational coordination.",
  keywords: [
    "Neema Zihalirwa",
    "Neema Zihalirwa Elisabeth",
    "Human Resources Kigali",
    "HR Consultant Rwanda",
    "Talent Acquisition Africa",
    "People Operations",
    "Employee Onboarding",
    "Pedagogical Scaffolding",
    "DTTASA",
    "KaziEasy",
  ],
  authors: [{ name: "Neema Zihalirwa Elisabeth", url: siteUrl }],
  creator: "Neema Zihalirwa Elisabeth",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${siteUrl}/rss.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Neema Zihalirwa Elisabeth — Human Resources Professional",
    description:
      "Personal portfolio and professional insights of Neema Zihalirwa Elisabeth, an HR professional specializing in talent development, people operations, and organizational coordination.",
    siteName: "Neema Zihalirwa Elisabeth",
    images: [
      {
        url: "/images/portraits/neema-portrait-01.jpg",
        width: 1200,
        height: 1600,
        alt: "Neema Zihalirwa Elisabeth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neema Zihalirwa Elisabeth — Human Resources Professional",
    description:
      "Personal portfolio and professional insights of Neema Zihalirwa Elisabeth, an HR professional specializing in talent development, people operations, and organizational coordination.",
    creator: "@Elisabeth_Neema",
    images: ["/images/portraits/neema-portrait-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F7F4EE] text-[#2A2421]">
        <JsonLdPerson />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

