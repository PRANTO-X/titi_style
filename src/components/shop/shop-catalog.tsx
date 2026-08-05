"use client";

import { useMemo, useState } from "react";
import { PRODUCTS } from "@/data/products";
import { COLLECTIONS } from "@/data/collections";
import type { CollectionId, Product } from "@/lib/types";
import { cn } from "@/lib/format";
import { SearchIcon } from "@/components/ui/icons";
import { ProductGrid } from "@/components/product/product-grid";

type SortId = "featured" | "price-asc" | "price-desc" | "rating";

const SORT_OPTIONS: Array<{ id: SortId; label: string }> = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

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

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    const filtered = PRODUCTS.filter((product) => {
      const matchesCategory =
        category === "all" || product.collection === category;
      const matchesQuery =
        term.length === 0 ||
        product.name.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term);
      return matchesCategory && matchesQuery;
    });
    return sortProducts(filtered, sort);
  }, [category, query, sort]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[{ id: "all", name: "All Watches" }, ...COLLECTIONS].map(
            (collection) => (
              <button
                key={collection.id}
                type="button"
                onClick={() => setCategory(collection.id as CollectionId | "all")}
                className={cn(
                  "rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-btn transition-colors",
                  category === collection.id
                    ? "border-ink bg-ink text-white"
                    : "border-line bg-white text-body hover:border-ink hover:text-ink"
                )}
              >
                {collection.name}
              </button>
            )
          )}
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <label className="relative flex-1 sm:max-w-xs">
            <span className="sr-only">Search products</span>
            <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-body" />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search watches…"
              className="w-full rounded-btn border border-line bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </label>

          <div className="flex items-center gap-3">
            <span className="text-sm text-body">
              {visible.length} {visible.length === 1 ? "product" : "products"}
            </span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortId)}
              className="rounded-btn border border-line bg-white px-4 py-3 text-xs font-semibold uppercase tracking-btn text-ink focus:border-primary focus:outline-none"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {visible.length > 0 ? (
        <ProductGrid products={visible} />
      ) : (
        <p className="py-16 text-center text-body">
          No products found. Try adjusting your filters or search.
        </p>
      )}
    </div>
  );
}
