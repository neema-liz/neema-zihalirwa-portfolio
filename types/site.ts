export interface NavItem {
  title: string;
  href: string;
  description?: string;
  disabled?: boolean;
  external?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  status: "confirmed" | "pending";
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  author: {
    name: string;
    role: string;
    email?: string;
  };
  navItems: NavItem[];
  socialLinks: SocialLink[];
}
