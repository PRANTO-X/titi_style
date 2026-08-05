import type { Product } from "@/lib/types";
import { SectionHeader } from "@/components/ui/section-header";
import { ProductGrid } from "@/components/product/product-grid";

export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return null;
  }

  return (
    <section className="bg-paper py-[75px] md:py-[100px]">
      <div className="container-site">
        <SectionHeader subtop="You May Also Like" title="Related Products" />
        <ProductGrid products={products} />
      </div>
    </section>
  );
}
