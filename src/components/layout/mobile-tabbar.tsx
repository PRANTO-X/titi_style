"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/format";
import {
  BagIcon,
  HeartIcon,
  HomeIcon,
  SearchIcon,
} from "@/components/ui/icons";

const TAB_BASE =
  "flex flex-col items-center gap-1 py-2.5 transition-colors";

export function MobileTabbar() {
  const pathname = usePathname();
  const { wishlistCount, overlay, openOverlay } = useStore();

  const isHome = pathname === "/";
  const isShop = pathname.startsWith("/shop");
  const isSearch = overlay === "search";
  const isWishlist = overlay === "wishlist";

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      <div className="grid grid-cols-4">
        <Link
          href="/"
          className={cn(
            TAB_BASE,
            isHome ? "text-accent" : "text-ink/70 hover:text-accent"
          )}
        >
          <HomeIcon className="h-5 w-5" />
          <span className="font-ui text-[10px] tracking-widest">Home</span>
        </Link>
        <Link
          href="/shop"
          className={cn(
            TAB_BASE,
            isShop ? "text-accent" : "text-ink/70 hover:text-accent"
          )}
        >
          <BagIcon className="h-5 w-5" />
          <span className="font-ui text-[10px] tracking-widest">Shop</span>
        </Link>
        <button
          type="button"
          onClick={() => openOverlay("search")}
          className={cn(
            TAB_BASE,
            isSearch ? "text-accent" : "text-ink/70 hover:text-accent"
          )}
        >
          <SearchIcon className="h-5 w-5" />
          <span className="font-ui text-[10px] tracking-widest">Search</span>
        </button>
        <button
          type="button"
          onClick={() => openOverlay("wishlist")}
          className={cn(
            TAB_BASE,
            isWishlist ? "text-accent" : "text-ink/70 hover:text-accent"
          )}
        >
          <span className="relative">
            <HeartIcon className="h-5 w-5" />
            {wishlistCount > 0 ? (
              <span className="absolute -right-2 -top-1.5 inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-accent px-0.5 text-[9px] font-bold leading-none text-night">
                {wishlistCount > 99 ? "99+" : wishlistCount}
              </span>
            ) : null}
          </span>
          <span className="font-ui text-[10px] tracking-widest">
            Wishlist
          </span>
        </button>
      </div>
    </nav>
  );
}
