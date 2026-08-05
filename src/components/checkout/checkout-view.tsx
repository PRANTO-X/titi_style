"use client";

import { useMemo, useState } from "react";
import { useStore } from "@/lib/store";
import { formatPrice } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import { OrderSummary } from "@/components/checkout/order-summary";
import {
  DELIVERY_FEES,
  FREE_DELIVERY_THRESHOLD,
  type DeliveryMethod,
  type PaymentMethod,
} from "@/components/checkout/types";
import { BagIcon, CheckIcon } from "@/components/ui/icons";

interface PlacedOrder {
  id: string;
  name: string;
  phone: string;
  payment: PaymentMethod;
  total: number;
}

function makeOrderId(): string {
  return `TTS-${Math.floor(100000 + Math.random() * 900000)}`;
}

export function CheckoutView() {
  const { cart, cartTotal, clearCart, ready } = useStore();
  const [delivery, setDelivery] = useState<DeliveryMethod>("standard");
  const [payment, setPayment] = useState<PaymentMethod>("cod");
  const [order, setOrder] = useState<PlacedOrder | null>(null);

  const deliveryFee = useMemo(
    () =>
      cartTotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEES[delivery],
    [cartTotal, delivery]
  );
  const total = cartTotal + deliveryFee;

  if (order) {
    return <CheckoutSuccess order={order} />;
  }

  if (!ready) {
    return <CheckoutLoading />;
  }

  if (cart.length === 0) {
    return <EmptyCheckout />;
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setOrder({
      id: makeOrderId(),
      name: String(form.get("name") ?? ""),
      phone: String(form.get("phone") ?? ""),
      payment,
      total,
    });
    clearCart();
  };

  return (
    <div>
      <header className="mb-10 text-center">
        <p className="mb-3 text-xs font-semibold tracking-subtop text-primary">
          Secure Checkout
        </p>
        <h1 className="text-3xl uppercase md:text-4xl">Checkout</h1>
      </header>

      <form
        onSubmit={handleSubmit}
        className="grid items-start gap-10 lg:grid-cols-[1fr_400px]"
      >
        <CheckoutForm
          delivery={delivery}
          onDeliveryChange={setDelivery}
          payment={payment}
          onPaymentChange={setPayment}
          freeDelivery={deliveryFee === 0}
        />
        <OrderSummary
          subtotal={cartTotal}
          deliveryFee={deliveryFee}
          total={total}
          freeDeliveryThreshold={FREE_DELIVERY_THRESHOLD}
        />
      </form>
    </div>
  );
}

function CheckoutLoading() {
  return (
    <div className="flex flex-col items-center gap-4 py-20 text-center">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      <p className="text-body">Loading your cart…</p>
    </div>
  );
}

function EmptyCheckout() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-20 text-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-soft text-ink">
        <BagIcon className="h-9 w-9" />
      </span>
      <h1 className="text-2xl uppercase">Your cart is empty</h1>
      <p className="text-body">
        Add some watches to your cart before checking out.
      </p>
      <Button href="/shop">Browse Watches</Button>
    </div>
  );
}

function CheckoutSuccess({ order }: { order: PlacedOrder }) {
  const firstName = order.name.trim().split(" ")[0] || "there";

  return (
    <div className="mx-auto max-w-xl py-10 text-center">
      <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sale text-white">
        <CheckIcon className="h-10 w-10" />
      </span>
      <p className="mb-2 text-xs font-semibold tracking-subtop text-primary">
        Order Confirmed
      </p>
      <h1 className="mb-4 text-3xl uppercase md:text-4xl">
        Thank you, {firstName}!
      </h1>
      <p className="mb-2 text-body">
        Your order{" "}
        <span className="font-semibold text-ink">{order.id}</span> has been
        placed successfully.
      </p>
      <p className="mb-8 text-body">
        Our team will call{" "}
        <span className="font-semibold text-ink">{order.phone}</span> to confirm
        delivery. Total due:{" "}
        <span className="font-semibold text-ink">
          {formatPrice(order.total)}
        </span>
        {order.payment !== "cod" ? ` via ${paymentLabel(order.payment)}` : ""}.
      </p>
      <div className="flex flex-col justify-center gap-3 sm:flex-row">
        <Button href="/shop">Continue Shopping</Button>
        <Button href="/" variant="outline">
          Back to Home
        </Button>
      </div>
    </div>
  );
}

function paymentLabel(method: PaymentMethod): string {
  switch (method) {
    case "bkash":
      return "bKash";
    case "nagad":
      return "Nagad";
    case "card":
      return "card";
    default:
      return "cash";
  }
}
