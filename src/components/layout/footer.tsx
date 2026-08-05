import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import {
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "@/components/ui/icons";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/ui/social-icons";

const INFORMATION_LINKS = [
  { label: "Contact", href: "#" },
  { label: "Shipping & Delivery", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const SUPPORT_LINKS = [
  { label: "All Collections", href: "/shop" },
  { label: "Track Your Order", href: "#" },
  { label: "Wishlist", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Return Policy", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Twitter", href: "#", Icon: TwitterIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
];

function FooterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="mb-6 font-heading text-xl font-semibold uppercase tracking-[0.1em] text-ink">
      {children}
    </h4>
  );
}

function FooterLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <ul className="space-y-1.5">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="relative text-sm transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-soft text-body">
      <div className="container-site">
        <div className="grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo width={96} className="mb-5" />
            <p className="mb-5 text-sm leading-relaxed">
              Titi Style is your trusted online watch store in Bangladesh —
              premium quality, honest prices and doorstep delivery.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 shrink-0 text-primary" />
                +880 1712-345678
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-primary" />
                support@titistyle.com
              </li>
              <li className="flex items-center gap-2">
                <PinIcon className="h-4 w-4 shrink-0 text-primary" />
                Gulshan, Dhaka 1212, Bangladesh
              </li>
            </ul>
          </div>

          <div>
            <FooterTitle>Information</FooterTitle>
            <FooterLinks links={INFORMATION_LINKS} />
          </div>

          <div>
            <FooterTitle>Support</FooterTitle>
            <FooterLinks links={SUPPORT_LINKS} />
          </div>

          <div>
            <FooterTitle>Subscribe for Updates</FooterTitle>
            <p className="mb-4 text-sm">
              Sign up now and never miss a sale or special offer.
            </p>
            <NewsletterForm />
            <ul className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-dashed border-black/30">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-sm md:flex-row">
          <p>
            Copyright © 2026{" "}
            <Link href="/" className="text-primary">
              Titi Style.
            </Link>{" "}
            All rights reserved.
          </p>
          <p className="text-body">Cash on Delivery · bKash · Nagad · Cards</p>
        </div>
      </div>
    </footer>
  );
}
