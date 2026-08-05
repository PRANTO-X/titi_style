"use client";

import Link from "next/link";
import { useStore } from "@/lib/store";
import {
  BagIcon,
  HeartIcon,
  HomeIcon,
  SearchIcon,
} from "@/components/ui/icons";

const TAB_CLASS =
  "flex flex-col items-center gap-1 py-2.5 text-ink/70 transition-colors hover:text-gold";

export function MobileTabbar() {
  const { wishlistCount, openOverlay } = useStore();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-cream/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      <div className="grid grid-cols-4">
        <Link href="/" className={TAB_CLASS}>
          <HomeIcon className="h-5 w-5" />
          <span className="font-ui text-[10px] uppercase tracking-widest">
            Home
          </span>
        </Link>
        <Link href="/shop" className={TAB_CLASS}>
          <BagIcon className="h-5 w-5" />
          <span className="font-ui text-[10px] uppercase tracking-widest">
            Shop
          </span>
        </Link>
        <button
          type="button"
          onClick={() => openOverlay("search")}
          className={TAB_CLASS}
        >
          <SearchIcon className="h-5 w-5" />
          <span className="font-ui text-[10px] uppercase tracking-widest">
            Search
          </span>
        </button>
        <button
          type="button"
          onClick={() => openOverlay("wishlist")}
          className={TAB_CLASS}
        >
          <span className="relative">
            <HeartIcon className="h-5 w-5" />
            {wishlistCount > 0 ? (
              <span className="absolute -right-2 -top-1.5 inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-gold px-0.5 text-[9px] font-bold leading-none text-night">
                {wishlistCount > 99 ? "99+" : wishlistCount}
              </span>
            ) : null}
          </span>
          <span className="font-ui text-[10px] uppercase tracking-widest">
            Wishlist
          </span>
        </button>
      </div>
    </nav>
  );
}
