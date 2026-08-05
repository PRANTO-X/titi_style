"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { useStore } from "@/lib/store";
import { formatPrice, cn } from "@/lib/format";
import { BagIcon, HeartIcon } from "@/components/ui/icons";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const wished = isWishlisted(product.id);

  const discount = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0;

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-paper">
        <Link
          href={`/shop/${product.slug}`}
          aria-label={product.name}
          className="absolute inset-0 block"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-long group-hover:scale-105"
          />
          {product.images[1] ? (
            <Image
              src={product.images[1]}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover opacity-0 transition-opacity duration-long group-hover:opacity-100"
            />
          ) : null}
        </Link>

        {product.compareAtPrice ? (
          <span className="absolute left-4 top-4 rounded-badge bg-sale px-2.5 py-1 text-xs font-semibold text-white">
            -{discount}%
          </span>
        ) : product.badge === "new" ? (
          <span className="absolute left-4 top-4 rounded-badge bg-primary px-2.5 py-1 text-xs font-semibold text-white">
            New
          </span>
        ) : product.badge === "hot" ? (
          <span className="absolute left-4 top-4 rounded-badge bg-error px-2.5 py-1 text-xs font-semibold text-white">
            Hot
          </span>
        ) : null}

        <button
          type="button"
          aria-label={
            wished
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          onClick={() => toggleWishlist(product.id)}
          className={cn(
            "absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition-colors hover:text-white",
            wished ? "text-error" : "text-body hover:bg-error"
          )}
        >
          <HeartIcon
            className="h-5 w-5"
            {...(wished ? { fill: "currentColor" } : {})}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <span className="text-xs font-medium uppercase tracking-wide text-body">
          {product.brand}
        </span>
        <Link
          href={`/shop/${product.slug}`}
          className="mt-0.5 line-clamp-2 min-h-[3.1rem] font-heading text-lg font-semibold leading-snug text-ink transition-colors hover:text-primary"
        >
          {product.name}
        </Link>
        <div className="mb-4 mt-1.5 flex items-baseline gap-2">
          <span className="text-sm font-bold text-ink">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice ? (
            <s className="text-sm text-body">
              {formatPrice(product.compareAtPrice)}
            </s>
          ) : null}
        </div>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary py-3 text-xs font-semibold uppercase tracking-btn text-white transition-colors hover:bg-ink"
        >
          <BagIcon className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
