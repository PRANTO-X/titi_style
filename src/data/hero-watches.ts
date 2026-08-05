export interface HeroWatch {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  image: string;
  width: number;
  height: number;
}

export const HERO_WATCHES: HeroWatch[] = [
  {
    id: "midnight-minimal",
    slug: "minimalist-black-dial-quartz-watch",
    name: "The Midnight Minimal",
    tagline: "Pure Minimalism",
    description:
      "A clean, understated quartz watch with a matte black dial and genuine leather strap.",
    price: 3450,
    image: "/images/transparent/product-10-removebg-preview.png",
    width: 433,
    height: 576,
  },
  {
    id: "rose-allure",
    slug: "designer-womens-bracelet-watch",
    name: "The Rose Allure",
    tagline: "Designed for Her",
    description:
      "A delicate rose-gold bracelet watch that pairs with any outfit.",
    price: 3950,
    image: "/images/transparent/collection-6-removebg-preview.png",
    width: 500,
    height: 500,
  },
  {
    id: "heritage-classic",
    slug: "classic-leather-strap-analog-watch",
    name: "The Heritage Classic",
    tagline: "Timeless Leather",
    description:
      "A timeless analog watch with a supple brown leather strap and slim profile.",
    price: 4200,
    image: "/images/transparent/collection-1-removebg-preview.png",
    width: 500,
    height: 500,
  },
];
