import type { Product } from "@/lib/types";
import { cn } from "@/lib/format";
import { ProductCard } from "@/components/product/product-card";

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export function ProductGrid({ products, className }: ProductGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
