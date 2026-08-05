"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/format";
import { Drawer } from "@/components/overlays/drawer";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@/components/ui/icons";

export function WishlistDrawer() {
  const { wishlist, overlay, closeOverlay, toggleWishlist, addToCart } =
    useStore();

  const items = PRODUCTS.filter((product) => wishlist.includes(product.id));
  const open = overlay === "wishlist";

  return (
    <Drawer
      open={open}
      onClose={closeOverlay}
      title="Wishlist"
      footer={
        items.length > 0 ? (
          <Button href="/shop" onClick={closeOverlay} className="w-full">
            Shop More Products
          </Button>
        ) : undefined
      }
    >
      {items.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-soft text-ink">
            <HeartIcon className="h-9 w-9" />
          </span>
          <p className="text-body">Your wishlist is currently empty.</p>
          <Button href="/shop" onClick={closeOverlay}>
            Browse Watches
          </Button>
        </div>
      ) : (
        <ul className="divide-y divide-line">
          {items.map((product) => (
            <li key={product.id} className="flex gap-4 py-5">
              <Link
                href={`/shop/${product.slug}`}
                onClick={closeOverlay}
                className="relative h-24 w-20 shrink-0 overflow-hidden rounded-sm bg-paper"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </Link>
              <div className="flex flex-1 flex-col">
                <span className="text-xs tracking-wide text-body">
                  {product.brand}
                </span>
                <Link
                  href={`/shop/${product.slug}`}
                  onClick={closeOverlay}
                  className="font-heading text-base font-semibold leading-snug text-ink hover:text-primary"
                >
                  {product.name}
                </Link>
                <span className="mt-1 text-sm font-bold text-ink">
                  {formatPrice(product.price)}
                </span>
                <button
                  type="button"
                  onClick={() => addToCart(product)}
                  className="mt-2 self-start text-xs font-semibold tracking-btn text-primary underline-offset-4 hover:underline"
                >
                  Add to Cart
                </button>
              </div>
              <button
                type="button"
                aria-label={`Remove ${product.name} from wishlist`}
                onClick={() => toggleWishlist(product.id)}
                className="self-start text-body transition-colors hover:text-error"
              >
                <HeartIcon className="h-5 w-5" fill="currentColor" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </Drawer>
  );
}
