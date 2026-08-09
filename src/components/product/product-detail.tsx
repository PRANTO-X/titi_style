import type { Product } from "@/lib/types";
import { ProductImages } from "@/components/product/product-images";
import { ProductInfo } from "@/components/product/product-info";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="grid gap-10 pb-8 md:pb-12 lg:grid-cols-2 lg:gap-16">
      <ProductImages images={product.images} name={product.name} />
      <ProductInfo product={product} />
    </div>
  );
}
