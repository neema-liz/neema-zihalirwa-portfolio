import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neema Zihalirwa Elisabeth — HR Professional",
  description:
    "Personal portfolio and professional insights of Neema Zihalirwa Elisabeth, an HR professional specializing in talent development, people operations, and organizational growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F7F4EE] text-[#2A2421]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

