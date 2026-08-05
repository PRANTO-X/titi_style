import { HeroShowcase } from "@/components/home/hero-showcase";
import { FeaturedCollections } from "@/components/home/featured-collections";
import { BannerGrid } from "@/components/home/banner-grid";
import { ProductTabs } from "@/components/home/product-tabs";
import { Services } from "@/components/home/services";
import { ProductList } from "@/components/home/product-list";
import { Testimonials } from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <main>
      <HeroShowcase />
      <FeaturedCollections />
      <BannerGrid />
      <ProductTabs />
      <Services />
      <ProductList />
      <Testimonials />
    </main>
  );
}
