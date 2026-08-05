import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ParallaxBanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <Image
        src="/images/offer.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/10" />

      <div className="container-site relative flex min-h-[550px] items-center py-16">
        <div className="max-w-xl bg-white/10 p-8 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-subtop text-primary">
            Precision Meets Timeless Design
          </p>
          <h2 className="mb-3 text-3xl font-semibold uppercase text-white md:text-4xl">
            Crafted for Every Moment
          </h2>
          <p className="mb-6 text-base text-white">
            Explore our curated selection of watches built to elevate your
            everyday style. From classic analog to cutting-edge smartwatches —
            time has never looked this good.
          </p>
          <Button href="/shop" variant="gold">
            Discover Now
          </Button>
        </div>
      </div>
    </section>
  );
}
