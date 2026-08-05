import { SectionHeader } from "@/components/ui/section-header";
import { CollectionScroller } from "@/components/home/collection-scroller";

export function FeaturedCollections() {
  return (
    <section className="bg-white py-[75px] md:py-[100px]">
      <div className="container-site">
        <SectionHeader
          subtop="Shop by Style"
          title="Timeless Favorites Loved by Watch Lovers"
        />
        <CollectionScroller />
      </div>
    </section>
  );
}
