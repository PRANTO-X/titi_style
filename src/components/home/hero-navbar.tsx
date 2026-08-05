"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/format";
import { Logo } from "@/components/ui/logo";

const HERO_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
];

const SCROLL_THRESHOLD = 60;

export function HeroNavbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > SCROLL_THRESHOLD
  );
  const { cartCount, wishlistCount, openOverlay } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;

  const iconColor = solid
    ? "text-ink hover:text-gold"
    : "text-white hover:text-gold-light";
  const linkColor = solid
    ? "text-ink/70 hover:text-gold"
    : "text-white/70 hover:text-gold-light";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md transition-all duration-500",
        solid
          ? "border-black/10 bg-cream/95 shadow-[0_10px_30px_rgba(26,18,11,0.08)]"
          : "border-white/10 bg-white/10"
      )}
    >
      <div className="container-site flex items-center justify-between gap-4 py-3.5 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <nav aria-label="Main" className="hidden lg:flex lg:justify-self-start">
          <ul className="flex items-center gap-8">
            {HERO_LINKS.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative py-2 font-ui text-[11px] uppercase tracking-[0.28em] transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-gold after:transition-transform",
                      linkColor,
                      active
                        ? "text-gold after:scale-x-100"
                        : "after:scale-x-0 hover:after:scale-x-100"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Logo width={56} className="w-10 lg:w-14" />

        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <button
            type="button"
            aria-label="Search"
            onClick={() => openOverlay("search")}
            className={cn(
              "hidden p-2 transition-colors duration-300 lg:block",
              iconColor
            )}
          >
            <Search className="h-5 w-5" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            onClick={() => openOverlay("wishlist")}
            className={cn(
              "relative hidden p-2 transition-colors duration-300 lg:block",
              iconColor
            )}
          >
            <Heart className="h-5 w-5" strokeWidth={1.4} />
            {wishlistCount > 0 ? (
              <span className="absolute right-0 top-0 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold leading-none text-night">
                {wishlistCount > 99 ? "99+" : wishlistCount}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            aria-label="Cart"
            onClick={() => openOverlay("cart")}
            className={cn(
              "relative p-2 transition-colors duration-300",
              iconColor
            )}
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.4} />
            {cartCount > 0 ? (
              <span className="absolute right-0 top-0 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold leading-none text-night">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            aria-label="Account"
            className={cn("p-2 transition-colors duration-300", iconColor)}
          >
            <User className="h-5 w-5" strokeWidth={1.4} />
          </button>
        </div>
      </div>
    </header>
  );
}
