import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neema Zihalirwa Elisabeth — HR Professional",
  description:
    "Personal portfolio and professional insights of Neema Zihalirwa Elisabeth, Human Resources professional.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

