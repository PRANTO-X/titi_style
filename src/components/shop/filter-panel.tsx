"use client";

import { COLLECTIONS } from "@/data/collections";
import type { CollectionId } from "@/lib/types";
import { cn } from "@/lib/format";
import { SearchIcon } from "@/components/ui/icons";

export type SortId = "featured" | "price-asc" | "price-desc" | "rating";

export const SORT_OPTIONS: Array<{ id: SortId; label: string }> = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];

const CATEGORIES: Array<{ id: CollectionId | "all"; name: string }> = [
  { id: "all", name: "All Watches" },
  ...COLLECTIONS.map((collection) => ({
    id: collection.id as CollectionId,
    name: collection.name,
  })),
];

interface FilterPanelProps {
  category: CollectionId | "all";
  sort: SortId;
  query: string;
  minPrice: string;
  maxPrice: string;
  onCategoryChange: (category: CollectionId | "all") => void;
  onSortChange: (sort: SortId) => void;
  onQueryChange: (query: string) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
}

export function FilterPanel({
  category,
  sort,
  query,
  minPrice,
  maxPrice,
  onCategoryChange,
  onSortChange,
  onQueryChange,
  onMinPriceChange,
  onMaxPriceChange,
}: FilterPanelProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 font-heading text-lg font-semibold uppercase text-ink">
          Search
        </h3>
        <label className="relative block">
          <span className="sr-only">Search products</span>
          <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-body" />
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Search watches…"
            className="w-full rounded-btn border border-line bg-white py-3 pl-11 pr-4 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none"
          />
        </label>
      </div>

      <div>
        <h3 className="mb-3 font-heading text-lg font-semibold uppercase text-ink">
          Sort by
        </h3>
        <select
          value={sort}
          onChange={(event) => onSortChange(event.target.value as SortId)}
          className="w-full rounded-btn border border-line bg-white px-4 py-3 text-sm text-ink focus:border-primary focus:outline-none"
        >
          {SORT_OPTIONS.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="mb-3 font-heading text-lg font-semibold uppercase text-ink">
          Price Range
        </h3>
        <div className="flex items-center gap-3">
          <label className="relative block flex-1">
            <span className="sr-only">Minimum price</span>
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted">
              ৳
            </span>
            <input
              type="number"
              value={minPrice}
              onChange={(event) => onMinPriceChange(event.target.value)}
              placeholder="Min"
              min={0}
              className="w-full rounded-btn border border-line bg-white py-2.5 pl-7 pr-2 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </label>
          <span className="text-body">–</span>
          <label className="relative block flex-1">
            <span className="sr-only">Maximum price</span>
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted">
              ৳
            </span>
            <input
              type="number"
              value={maxPrice}
              onChange={(event) => onMaxPriceChange(event.target.value)}
              placeholder="Max"
              min={0}
              className="w-full rounded-btn border border-line bg-white py-2.5 pl-7 pr-2 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </label>
        </div>
      </div>

      <div>
        <h3 className="mb-3 font-heading text-lg font-semibold uppercase text-ink">
          Categories
        </h3>
        <ul className="space-y-1">
          {CATEGORIES.map((collection) => (
            <li key={collection.id}>
              <button
                type="button"
                onClick={() => onCategoryChange(collection.id)}
                className={cn(
                  "flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-sm transition-colors",
                  category === collection.id
                    ? "bg-primary font-semibold text-white"
                    : "text-body hover:bg-soft hover:text-ink"
                )}
              >
                {collection.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
