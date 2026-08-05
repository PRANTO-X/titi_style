"use client";

import { CartDrawer } from "@/components/overlays/cart-drawer";
import { WishlistDrawer } from "@/components/overlays/wishlist-drawer";
import { SearchModal } from "@/components/overlays/search-modal";

export function OverlayRoot() {
  return (
    <>
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
    </>
  );
}
