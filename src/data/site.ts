import type { NavLink, Service } from "@/lib/types";

export const SITE_NAME = "Titi Style";
export const SITE_TAGLINE = "Premium Watches in Bangladesh";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
];

export const SERVICES: Service[] = [
  {
    id: "delivery",
    title: "Free Delivery Nationwide",
    description: "Enjoy fast, reliable delivery on all orders across Bangladesh.",
    icon: "truck",
  },
  {
    id: "return",
    title: "14-Day Easy Returns",
    description: "Not satisfied? Send it back within 14 days for a full refund.",
    icon: "return",
  },
  {
    id: "support",
    title: "Expert Customer Support",
    description: "Our dedicated support team is here to assist you 24/7.",
    icon: "support",
  },
];

export const FOOTER_BRAND =
  "Titi Style is your trusted online watch store in Bangladesh — premium quality, honest prices and doorstep delivery.";
