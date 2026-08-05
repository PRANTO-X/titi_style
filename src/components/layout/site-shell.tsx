"use client";

import { usePathname } from "next/navigation";
import { HeroNavbar } from "@/components/home/hero-navbar";
import { Footer } from "@/components/layout/footer";
import { MobileTabbar } from "@/components/layout/mobile-tabbar";
import { OverlayRoot } from "@/components/overlays/overlay-root";
import { cn } from "@/lib/format";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col pb-16 lg:pb-0">
      <HeroNavbar />
      <div className={cn("flex-1", !isHome && "pt-[60px] lg:pt-[72px]")}>
        {children}
      </div>
      <Footer />
      <MobileTabbar />
      <OverlayRoot />
    </div>
  );
}
