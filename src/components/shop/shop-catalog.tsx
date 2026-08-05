"use client";

import { useMemo, useState } from "react";
import { PRODUCTS } from "@/data/products";
import type { CollectionId, Product } from "@/lib/types";
import {
  FilterPanel,
  type SortId,
} from "@/components/shop/filter-panel";
import { FilterIcon } from "@/components/ui/icons";
import { Drawer } from "@/components/overlays/drawer";
import { ProductGrid } from "@/components/product/product-grid";

function sortProducts(products: Product[], sort: SortId): Product[] {
  const sorted = [...products];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    default:
      return sorted;
  }
}

export function ShopCatalog({ initialCategory }: { initialCategory?: string }) {
  const [category, setCategory] = useState<CollectionId | "all">(
    (initialCategory as CollectionId) ?? "all"
  );
  const [sort, setSort] = useState<SortId>("featured");
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    const min = minPrice === "" ? 0 : Number(minPrice);
    const max = maxPrice === "" ? Infinity : Number(maxPrice);
    const filtered = PRODUCTS.filter((product) => {
      const matchesCategory =
        category === "all" || product.collection === category;
      const matchesQuery =
        term.length === 0 ||
        product.name.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term);
      const matchesPrice = product.price >= min && product.price <= max;
      return matchesCategory && matchesQuery && matchesPrice;
    });
    return sortProducts(filtered, sort);
  }, [category, query, sort, minPrice, maxPrice]);

  const panelProps = {
    category,
    sort,
    query,
    minPrice,
    maxPrice,
    onCategoryChange: setCategory,
    onSortChange: setSort,
    onQueryChange: setQuery,
    onMinPriceChange: setMinPrice,
    onMaxPriceChange: setMaxPrice,
  } as const;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="hidden rounded-sm border border-line bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:block">
        <FilterPanel {...panelProps} />
      </aside>

      <div className="min-w-0">
        <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
          <p className="text-sm text-body">
            {visible.length} {visible.length === 1 ? "product" : "products"}
          </p>
          <button
            type="button"
            onClick={() => setFilterOpen(true)}
            className="inline-flex items-center gap-2 rounded-btn border border-line bg-white px-4 py-2 text-xs font-semibold tracking-btn text-ink transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            <FilterIcon className="h-4 w-4" />
            Filters
          </button>
        </div>

        {visible.length > 0 ? (
          <ProductGrid
            products={visible}
            cols="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
          />
        ) : (
          <p className="py-16 text-center text-body">
            No products found. Try adjusting your filters or search.
          </p>
        )}
      </div>

      <Drawer
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        title="Filters"
      >
        <FilterPanel {...panelProps} />
      </Drawer>
    </div>
  );
}
