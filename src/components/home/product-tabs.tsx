"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/products";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/format";
import { SectionHeader } from "@/components/ui/section-header";
import { ProductGrid } from "@/components/product/product-grid";

interface Tab {
  id: string;
  label: string;
  products: Product[];
}

const TABS: Tab[] = [
  {
    id: "classic",
    label: "Classic",
    products: PRODUCTS.filter((product) =>
      ["leather", "mens"].includes(product.collection)
    ).slice(0, 8),
  },
  {
    id: "modern",
    label: "Modern",
    products: PRODUCTS.filter((product) =>
      ["smart", "sports"].includes(product.collection)
    ).slice(0, 8),
  },
  {
    id: "top-rated",
    label: "Top Rated",
    products: [...PRODUCTS].sort((a, b) => b.rating - a.rating).slice(0, 8),
  },
];

export function ProductTabs() {
  const [activeId, setActiveId] = useState(TABS[0].id);
  const active = TABS.find((tab) => tab.id === activeId) ?? TABS[0];

  return (
    <section className="bg-white pb-[75px] md:pb-[100px]">
      <div className="container-site">
        <SectionHeader
          subtop="Best Sellers"
          title="Latest Styles & Innovations in Timekeeping"
        />

        <div className="mb-10 flex justify-center">
          <div role="tablist" className="flex flex-wrap justify-center gap-6">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={tab.id === activeId}
                onClick={() => setActiveId(tab.id)}
                className={cn(
                  "relative pb-2 font-heading text-xl font-semibold uppercase tracking-wide text-ink transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-primary after:transition-transform hover:text-primary",
                  tab.id === activeId
                    ? "after:scale-x-100"
                    : "after:scale-x-0"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <ProductGrid products={active.products} />
      </div>
    </section>
  );
}
