import type { Metadata } from "next";
import { ShopCatalog } from "@/components/shop/shop-catalog";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse the full collection of watches at Titi Style.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  return (
    <main className="bg-white pb-[100px] pt-12 md:pt-16">
      <div className="container-site">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-subtop text-primary">
            Our Collection
          </p>
          <h1 className="text-3xl uppercase md:text-4xl">Shop Watches</h1>
        </div>
        <ShopCatalog initialCategory={category} />
      </div>
    </main>
  );
}
