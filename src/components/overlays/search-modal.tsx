"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { searchProducts } from "@/data/products";
import { useStore } from "@/lib/store";
import { formatPrice, cn } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { CloseIcon, SearchIcon } from "@/components/ui/icons";

export function SearchModal() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const { overlay, closeOverlay } = useStore();

  const open = overlay === "search";
  const results = query.trim() ? searchProducts(query).slice(0, 8) : [];

  useEffect(() => {
    if (open) {
      setQuery(""); // eslint-disable-line react-hooks/set-state-in-effect
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (!query.trim()) {
      return;
    }
    closeOverlay();
    router.push(`/shop?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-start justify-center p-4 pt-24 transition-opacity duration-long",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
    >
      <div className="absolute inset-0 bg-black/50" onClick={closeOverlay} />
      <div
        className={cn(
          "relative flex max-h-[calc(100vh-8rem)] w-full max-w-2xl flex-col overflow-hidden rounded-md bg-white shadow-xl transition-transform duration-long",
          open ? "translate-y-0" : "-translate-y-4"
        )}
      >
        <button
          type="button"
          aria-label="Close search"
          onClick={closeOverlay}
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-body hover:bg-soft hover:text-ink"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <form onSubmit={onSearch} className="flex items-center gap-3 px-5 py-4">
          <SearchIcon className="h-5 w-5 shrink-0 text-primary" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search watches, brands..."
            className="w-full bg-transparent text-base text-ink outline-none placeholder:text-body"
          />
        </form>

        <div className="flex-1 overflow-y-auto border-t border-line px-5 py-4">
          {query.trim() === "" ? (
            <p className="py-6 text-center text-sm text-body">
              Start typing to search our collection.
            </p>
          ) : results.length === 0 ? (
            <p className="py-6 text-center text-sm text-body">
              No products found for &quot;{query}&quot;.
            </p>
          ) : (
            <ul className="divide-y divide-line">
              {results.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/shop/${product.slug}`}
                    onClick={closeOverlay}
                    className="flex items-center gap-4 py-3"
                  >
                    <span className="relative h-16 w-14 shrink-0 overflow-hidden rounded-sm bg-paper">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </span>
                    <span className="flex flex-1 flex-col">
                      <span className="font-heading text-base font-semibold text-ink hover:text-primary">
                        {product.name}
                      </span>
                      <span className="text-xs text-body">
                        {product.brand}
                      </span>
                    </span>
                    <span className="text-sm font-bold text-ink">
                      {formatPrice(product.price)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {query.trim() && results.length > 0 ? (
            <Button
              type="button"
              variant="outline"
              className="mt-4 w-full"
              onClick={onSearch}
            >
              View All Results
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
