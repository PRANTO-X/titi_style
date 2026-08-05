import Image from "next/image";
import { Button } from "@/components/ui/button";

export function DarkBanner() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/parallax.jpg"
        alt="Watch resting on denim"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent" />

      <div className="container-site relative py-[75px] md:py-[110px]">
        <div className="max-w-xl">
          <p className="mb-2 font-heading text-6xl font-bold text-primary md:text-7xl">
            20%
          </p>
          <h2 className="mb-4 text-2xl font-semibold uppercase text-white md:text-4xl">
            Limited Time Offer — Up to 20% Off All Watches
          </h2>
          <p className="mb-7 text-base text-white/80">
            Upgrade your wrist game today! Enjoy up to 20% off our entire
            collection — from classic analog to modern smartwatches. No code
            needed. Offer valid while supplies last.
          </p>
          <Button href="/shop" variant="gold">
            Shop the Sale
          </Button>
        </div>
      </div>
    </section>
  );
}
