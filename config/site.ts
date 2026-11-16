import type { SiteConfig } from "@/types/site";

const resolvedUrl = (() => {
  if (process.env.NEXT_PUBLIC_SITE_URL && !process.env.NEXT_PUBLIC_SITE_URL.includes("localhost")) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "https://neema-zihalirwa.vercel.app";
})();

export const siteConfig: SiteConfig = {
  name: "Neema Zihalirwa Elisabeth",
  title: "Neema Zihalirwa Elisabeth — Human Resources Professional",
  description:
    "Personal portfolio and professional insights of Neema Zihalirwa Elisabeth, an HR professional specializing in talent development, people operations, and organizational growth.",
  url: resolvedUrl,
  author: {
    name: "Neema Zihalirwa Elisabeth",
    role: "Human Resources Professional",
  },
  navItems: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "www.linkedin.com/in/elisabeth-zihalirwa",
      label: "LinkedIn Profile",
      status: "confirmed",
    },
    {
      platform: "X",
      url: "https://x.com/Elisabeth_Neema/",
      label: "X Profile",
      status: "confirmed",
    },
    {
      platform: "Facebook",
      url: "https://www.facebook.com/neema.lusi_18/",
      label: "Facebook Profile",
      status: "confirmed",
    },
    {
      platform: "Bluesky",
      url: "https://bsky.app/profile/luciannaneema.bsky.social/",
      label: "Bluesky Profile",
      status: "confirmed",
    },
    {
      platform: "Medium",
      url: "https://medium.com/@lucianna.neema/",
      label: "Medium Profile",
      status: "confirmed",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/neemazhl/",
      label: "Instagram Profile",
      status: "confirmed",
    },
  ],
};
