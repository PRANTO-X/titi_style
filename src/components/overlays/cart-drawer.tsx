"use client";

import Image from "next/image";
import Link from "next/link";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/format";
import { Drawer } from "@/components/overlays/drawer";
import { Button } from "@/components/ui/button";
import {
  BagIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@/components/ui/icons";

export function CartDrawer() {
  const {
    cart,
    overlay,
    cartTotal,
    closeOverlay,
    removeFromCart,
    updateQuantity,
  } = useStore();

  const open = overlay === "cart";

  return (
    <Drawer
      open={open}
      onClose={closeOverlay}
      title="Shopping Cart"
      footer={
        cart.length > 0 ? (
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm tracking-wide text-body">
                Subtotal
              </span>
              <span className="font-heading text-xl font-semibold text-ink">
                {formatPrice(cartTotal)}
              </span>
            </div>
            <Button
              href="/checkout"
              variant="primary"
              className="w-full"
              onClick={closeOverlay}
            >
              Checkout
            </Button>
            <button
              type="button"
              onClick={closeOverlay}
              className="mt-3 w-full text-center text-sm text-body underline-offset-4 hover:text-primary hover:underline"
            >
              Continue shopping
            </button>
          </div>
        ) : undefined
      }
    >
      {cart.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-soft text-ink">
            <BagIcon className="h-9 w-9" />
          </span>
          <p className="text-body">Your cart is currently empty.</p>
          <Button href="/shop" onClick={closeOverlay}>
            Start Shopping
          </Button>
        </div>
      ) : (
        <ul className="divide-y divide-line">
          {cart.map(({ product, quantity }) => (
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
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center border border-line">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="flex h-8 w-8 items-center justify-center text-ink hover:text-primary"
                    >
                      <MinusIcon className="h-3.5 w-3.5" />
                    </button>
                    <span className="w-8 text-center text-sm text-ink">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="flex h-8 w-8 items-center justify-center text-ink hover:text-primary"
                    >
                      <PlusIcon className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="text-sm font-bold text-ink">
                    {formatPrice(product.price * quantity)}
                  </span>
                </div>
              </div>
              <button
                type="button"
                aria-label={`Remove ${product.name}`}
                onClick={() => removeFromCart(product.id)}
                className="self-start text-body transition-colors hover:text-error"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </Drawer>
  );
}
