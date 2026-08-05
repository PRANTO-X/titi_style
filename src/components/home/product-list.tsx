import { PRODUCTS } from "@/data/products";
import { SectionHeader } from "@/components/ui/section-header";
import { ProductGrid } from "@/components/product/product-grid";

const CLASSIC_PRODUCTS = PRODUCTS.filter((product) =>
  ["leather", "mens"].includes(product.collection)
).slice(0, 8);

export function ProductList() {
  return (
    <section className="bg-white pb-[75px] pt-0 md:pb-[100px]">
      <div className="container-site">
        <SectionHeader
          subtop="Classic Collection"
          title="Elegant Designs That Never Go Out of Style"
        />
        <ProductGrid products={CLASSIC_PRODUCTS} />
      </div>
    </section>
  );
}
