"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/types";
import { useStore } from "@/lib/store";
import { formatPrice, cn } from "@/lib/format";
import { Rating } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/product/quantity-selector";
import { ServiceIconGlyph } from "@/components/ui/service-icon";
import { HeartIcon } from "@/components/ui/icons";

const TRUST_POINTS = [
  { icon: "truck", label: "Free delivery nationwide" },
  { icon: "return", label: "14-day easy returns" },
  { icon: "secure", label: "Authenticity guaranteed" },
] as const;

export function ProductInfo({ product }: { product: Product }) {
  const router = useRouter();
  const { addToCart, buyNow, toggleWishlist, isWishlisted } = useStore();
  const [quantity, setQuantity] = useState(1);
  const wished = isWishlisted(product.id);

  const discount = product.compareAtPrice
    ? Math.round((1 - product.price / product.compareAtPrice) * 100)
    : 0;

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-subtop text-secondary">
          {product.brand}
        </span>
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          className={cn(
            "inline-flex items-center gap-2 text-sm transition-colors",
            wished ? "text-error" : "text-body hover:text-error"
          )}
        >
          <HeartIcon
            className="h-5 w-5"
            {...(wished ? { fill: "currentColor" } : {})}
          />
          {wished ? "Wishlisted" : "Add to Wishlist"}
        </button>
      </div>

      <h1 className="mt-2 text-3xl font-semibold uppercase md:text-4xl">
        {product.name}
      </h1>

      <div className="mt-4 flex items-center gap-4">
        <Rating rating={product.rating} reviews={product.reviews} />
        <Link
          href={`/shop?category=${product.collection}`}
          className="text-sm text-body underline-offset-4 hover:text-primary hover:underline"
        >
          View {product.collection} collection
        </Link>
      </div>

      <div className="mt-6 flex items-baseline gap-3">
        <span className="font-heading text-3xl font-bold text-ink">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice ? (
          <>
            <s className="text-lg text-body">{formatPrice(product.compareAtPrice)}</s>
            <span className="rounded-badge bg-sale px-2.5 py-1 text-xs font-semibold text-white">
              Save {discount}%
            </span>
          </>
        ) : null}
      </div>

      <p className="mt-6 text-base leading-relaxed text-body">
        {product.description}
      </p>

      <ul className="mt-6 space-y-3 border-y border-line py-6">
        {TRUST_POINTS.map((point) => (
          <li key={point.label} className="flex items-center gap-3 text-sm text-body">
            <ServiceIconGlyph
              name={point.icon}
              className="h-5 w-5 text-primary"
            />
            {point.label}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <QuantitySelector quantity={quantity} onChange={setQuantity} />
        <div className="flex flex-1 flex-col gap-3 sm:flex-row">
          <Button variant="dark" size="lg" onClick={() => addToCart(product, quantity)}>
            Add to Cart
          </Button>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              buyNow(product, quantity);
              router.push("/checkout");
            }}
          >
            Buy It Now
          </Button>
        </div>
      </div>

      <dl className="mt-8 space-y-2 text-sm">
        <div className="flex gap-2">
          <dt className="font-semibold text-ink">SKU:</dt>
          <dd className="uppercase text-body">{product.id}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-semibold text-ink">Availability:</dt>
          <dd className="text-body">In stock — ships within 24 hours</dd>
        </div>
      </dl>
    </div>
  );
}
