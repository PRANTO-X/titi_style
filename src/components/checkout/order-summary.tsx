"use client";

import Image from "next/image";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { ShieldIcon, TruckIcon } from "@/components/ui/icons";

interface OrderSummaryProps {
  subtotal: number;
  deliveryFee: number;
  total: number;
  freeDeliveryThreshold: number;
}

export function OrderSummary({
  subtotal,
  deliveryFee,
  total,
  freeDeliveryThreshold,
}: OrderSummaryProps) {
  const { cart } = useStore();

  return (
    <aside className="h-fit min-w-0 rounded-sm border border-line bg-white p-6 shadow-sm lg:sticky lg:top-24">
      <h2 className="mb-4 text-xl font-semibold uppercase">Order Summary</h2>

      <ul className="divide-y divide-line">
        {cart.map(({ product, quantity }) => (
          <li key={product.id} className="flex items-center gap-4 py-4">
            <div className="relative h-20 w-16 shrink-0 overflow-hidden rounded-sm bg-paper">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-heading text-sm font-semibold text-ink">
                {product.name}
              </p>
              <p className="text-xs text-body">Qty {quantity}</p>
            </div>
            <span className="shrink-0 text-sm font-bold text-ink">
              {formatPrice(product.price * quantity)}
            </span>
          </li>
        ))}
      </ul>

      <dl className="space-y-2 border-t border-line pt-4 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-body">Subtotal</dt>
          <dd className="font-semibold text-ink">{formatPrice(subtotal)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-body">Delivery</dt>
          <dd
            className={
              deliveryFee === 0 ? "font-semibold text-sale" : "font-semibold text-ink"
            }
          >
            {deliveryFee === 0 ? "Free" : formatPrice(deliveryFee)}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-dashed border-line pt-3">
          <dt className="font-heading text-lg font-bold text-ink">Total</dt>
          <dd className="font-heading text-xl font-bold text-ink">
            {formatPrice(total)}
          </dd>
        </div>
      </dl>

      {deliveryFee > 0 ? (
        <p className="mt-3 text-xs text-body">
          Free delivery on orders over {formatPrice(freeDeliveryThreshold)}.
        </p>
      ) : null}

      <Button type="submit" variant="primary" className="mt-6 w-full">
        Place Order
      </Button>

      <ul className="mt-6 space-y-2 text-xs text-body">
        <li className="flex items-center gap-2">
          <TruckIcon className="h-4 w-4 shrink-0 text-primary" />
          Cash on delivery available nationwide
        </li>
        <li className="flex items-center gap-2">
          <ShieldIcon className="h-4 w-4 shrink-0 text-primary" />
          Secure checkout — bKash, Nagad &amp; cards
        </li>
      </ul>
    </aside>
  );
}
