import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

interface Banner {
  image: string;
  subtop: string;
  title: string;
  ctaLabel: string;
  href: string;
  className: string;
}

const BANNERS: Banner[] = [
  {
    image: "/images/banner-1.webp",
    subtop: "Smart & Connected",
    title: "Stay ahead with smartwatches built for modern life",
    ctaLabel: "View Products",
    href: "/shop?category=smart",
    className: "lg:col-span-7",
  },
  {
    image: "/images/banner-2.webp",
    subtop: "Sport & Adventure",
    title: "Rugged timepieces ready for your next challenge",
    ctaLabel: "Shop Now",
    href: "/shop?category=sports",
    className: "lg:col-span-5",
  },
];

export function BannerGrid() {
  return (
    <section className="bg-white pb-[75px] md:pb-[100px]">
      <div className="container-site">
        <div className="grid gap-6 lg:grid-cols-12">
          {BANNERS.map((banner) => (
            <Link
              key={banner.subtop}
              href={banner.href}
              className={`group relative block overflow-hidden ${banner.className}`}
            >
              <Image
                src={banner.image}
                alt={banner.title}
                width={990}
                height={516}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover transition-transform duration-long group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/50" />
              <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-subtop text-primary">
                  {banner.subtop}
                </p>
                <h3 className="mb-5 max-w-md font-heading text-2xl font-semibold leading-tight text-white md:text-3xl">
                  {banner.title}
                </h3>
                <span className="inline-flex items-center gap-2 border-b-2 border-transparent pb-1 text-xs font-semibold uppercase tracking-btn text-white transition-colors group-hover:border-primary group-hover:text-primary">
                  {banner.ctaLabel}
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
