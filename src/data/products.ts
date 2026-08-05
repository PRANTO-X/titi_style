import type { Product } from "@/lib/types";

export const PRODUCTS: Product[] = [
  {
    id: "p-01",
    slug: "minimalist-black-dial-quartz-watch",
    name: "Minimalist Black Dial Quartz Watch",
    brand: "UrbanTick",
    collection: "luxury",
    price: 3450,
    compareAtPrice: 4500,
    images: ["/images/product-10.webp", "/images/product-16.webp"],
    badge: "sale",
    rating: 4.7,
    reviews: 128,
    description:
      "A clean, understated quartz watch with a matte black dial and genuine leather strap.",
  },
  {
    id: "p-02",
    slug: "smart-fitness-tracker-watch",
    name: "Smart Fitness Tracker Watch",
    brand: "FitPulse",
    collection: "sports",
    price: 6900,
    compareAtPrice: 8500,
    images: ["/images/product-smart.webp", "/images/product-02.webp"],
    badge: "sale",
    rating: 4.6,
    reviews: 203,
    description:
      "Tracks heart rate, steps, sleep and calls with a bright always-on display.",
  },
  {
    id: "p-03",
    slug: "kids-colorful-waterproof-digital-watch",
    name: "Kids Colorful Waterproof Digital Watch",
    brand: "TinyTime",
    collection: "sports",
    price: 1890,
    images: ["/images/product-03.webp", "/images/product-17.webp"],
    badge: "new",
    rating: 4.5,
    reviews: 76,
    description:
      "Shock-resistant, water-friendly digital watch in playful colors kids love.",
  },
  {
    id: "p-04",
    slug: "mens-skeleton-automatic-mechanical-watch",
    name: "Men's Skeleton Automatic Mechanical Watch",
    brand: "MechMasters",
    collection: "luxury",
    price: 12900,
    compareAtPrice: 15500,
    images: ["/images/product-17.webp", "/images/product-15.webp"],
    badge: "sale",
    rating: 4.9,
    reviews: 94,
    description:
      "Self-winding skeleton movement showing every gear in motion through a sapphire dial.",
  },
  {
    id: "p-05",
    slug: "military-tactical-digital-watch",
    name: "Military Tactical Digital Watch",
    brand: "GearGuard",
    collection: "mens",
    price: 2950,
    images: ["/images/product-06.webp", "/images/product-07.webp"],
    badge: "hot",
    rating: 4.6,
    reviews: 187,
    description:
      "Rugged, water-resistant tactical watch with backlight, compass and stopwatch.",
  },
  {
    id: "p-06",
    slug: "luxury-gold-plated-chronograph-watch",
    name: "Luxury Gold-Plated Chronograph Watch",
    brand: "LuxeTime",
    collection: "luxury",
    price: 18500,
    images: ["/images/product-04.webp", "/images/product-02.webp"],
    rating: 4.8,
    reviews: 61,
    description:
      "Elegant gold-plated chronograph with a premium gift box — perfect for gifting.",
  },
  {
    id: "p-07",
    slug: "dual-time-zone-stainless-steel-watch",
    name: "Dual Time Zone Stainless Steel Watch",
    brand: "Jetset Watches",
    collection: "mens",
    price: 5450,
    compareAtPrice: 6500,
    images: ["/images/product-15.webp", "/images/product-16.webp"],
    badge: "sale",
    rating: 4.7,
    reviews: 112,
    description:
      "Track two time zones at once in a polished stainless steel case built for travel.",
  },
  {
    id: "p-08",
    slug: "classic-leather-strap-analog-watch",
    name: "Classic Leather Strap Analog Watch",
    brand: "TimeCraft",
    collection: "leather",
    price: 4200,
    images: ["/images/collection-1.jpg", "/images/collection-3.jpg"],
    rating: 4.6,
    reviews: 143,
    description:
      "A timeless analog watch with a supple brown leather strap and slim profile.",
  },
  {
    id: "p-09",
    slug: "chronograph-watch-leather-metal-mix",
    name: "Chronograph Watch with Leather & Metal Mix",
    brand: "BoldTick",
    collection: "leather",
    price: 4750,
    images: ["/images/product-16.webp", "/images/product-03.webp"],
    badge: "new",
    rating: 4.5,
    reviews: 88,
    description:
      "Bold chronograph combining a leather strap with brushed metal detailing.",
  },
  {
    id: "p-10",
    slug: "limited-edition-carbon-fiber-watch",
    name: "Limited Edition Carbon Fiber Watch",
    brand: "CarbonEdge",
    collection: "limited",
    price: 22000,
    images: ["/images/product-07.webp", "/images/product-17.webp"],
    rating: 5.0,
    reviews: 42,
    description:
      "Lightweight forged carbon fiber case — only 200 pieces produced worldwide.",
  },
  {
    id: "p-11",
    slug: "designer-womens-bracelet-watch",
    name: "Designer Women's Bracelet Watch",
    brand: "ChicHour",
    collection: "luxury",
    price: 3950,
    compareAtPrice: 4800,
    images: ["/images/collection-6.jpg", "/images/collection-2.jpg"],
    badge: "sale",
    rating: 4.7,
    reviews: 156,
    description:
      "A delicate rose-gold bracelet watch that pairs with any outfit.",
  },
  {
    id: "p-12",
    slug: "blue-dial-divers-watch-rubber-strap",
    name: "Blue Dial Diver's Watch with Rubber Strap",
    brand: "OceanCore",
    collection: "sports",
    price: 6200,
    compareAtPrice: 7200,
    images: ["/images/collection-4.jpg", "/images/collection-5.jpg"],
    badge: "sale",
    rating: 4.8,
    reviews: 97,
    description:
      "200m water resistance, luminous hands and a deep blue sunburst dial.",
  },
  {
    id: "p-13",
    slug: "smartwatch-call-message-notifications",
    name: "Smartwatch with Call & Message Notifications",
    brand: "TechChrono",
    collection: "smart",
    price: 7800,
    images: ["/images/product-02.webp", "/images/product-04.webp"],
    badge: "hot",
    rating: 4.6,
    reviews: 231,
    description:
      "Answer calls, read messages and monitor health — all from your wrist.",
  },
];

export function searchProducts(query: string): Product[] {
  const term = query.trim().toLowerCase();
  if (!term) return [];
  return PRODUCTS.filter((product) =>
    `${product.name} ${product.brand} ${product.collection} ${product.description}`
      .toLowerCase()
      .includes(term)
  );
}
