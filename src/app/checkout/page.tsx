import type { Metadata } from "next";
import { CheckoutView } from "@/components/checkout/checkout-view";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your order at Titi Style — cash on delivery, bKash, Nagad and cards.",
};

export default function CheckoutPage() {
  return (
    <main className="bg-soft -mt-[60px] pb-[100px] pt-[108px] md:pt-[124px] lg:-mt-[72px] lg:pt-[136px]">
      <div className="container-site">
        <CheckoutView />
      </div>
    </main>
  );
}
