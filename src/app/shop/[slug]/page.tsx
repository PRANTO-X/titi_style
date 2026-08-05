import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetail } from "@/components/product/product-detail";
import { ProductBreadcrumb } from "@/components/product/product-breadcrumb";
import { RelatedProducts } from "@/components/product/related-products";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return { title: product.name, description: product.description };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const related = PRODUCTS.filter(
    (item) =>
      item.collection === product.collection && item.id !== product.id
  ).slice(0, 4);

  return (
    <main className="bg-white pb-10 pt-10 md:pt-14">
      <div className="container-site">
        <ProductBreadcrumb name={product.name} />
        <ProductDetail product={product} />
      </div>
      <RelatedProducts products={related} />
    </main>
  );
}
