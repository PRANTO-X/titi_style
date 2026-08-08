"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COLLECTIONS } from "@/data/collections";
import { PRODUCTS } from "@/data/products";
import { cn } from "@/lib/format";

export function CollectionScroller() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (!card) return;
    const step = card.offsetWidth + 24;
    const index = Math.min(
      COLLECTIONS.length - 1,
      Math.max(0, Math.round(el.scrollLeft / step))
    );
    setActive(index);
  };

  const goTo = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>("[data-card]")[index];
    card?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div>
      <div
        ref={scrollerRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-x-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-6 lg:gap-x-6 lg:overflow-visible lg:pb-0"
      >
        {COLLECTIONS.map((collection) => {
          const count = PRODUCTS.filter(
            (product) => product.collection === collection.id
          ).length;
          return (
            <Link
              key={collection.id}
              data-card
              href={`/shop?category=${collection.id}`}
              className="group flex w-[44vw] shrink-0 snap-start flex-col items-center text-center sm:w-[30vw] lg:w-auto"
            >
              <div className="aspect-square w-full overflow-hidden rounded-full">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  width={500}
                  height={500}
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-long group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold uppercase text-ink transition-colors group-hover:text-secondary">
                {collection.name}
              </h3>
              <p className="text-sm text-body">
                {count} {count === 1 ? "product" : "products"}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center gap-2 lg:hidden">
        {COLLECTIONS.map((collection, index) => (
          <button
            key={collection.id}
            type="button"
            aria-label={`Go to ${collection.name}`}
            onClick={() => goTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-500",
              index === active ? "w-6 bg-accent" : "w-1.5 bg-ink/15"
            )}
          />
        ))}
      </div>
    </div>
  );
}
