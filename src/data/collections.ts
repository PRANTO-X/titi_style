import type { Collection } from "@/lib/types";

export const COLLECTIONS: Collection[] = [
  {
    id: "luxury",
    name: "Luxury Watches",
    image: "/images/collection-1.jpg",
  },
  {
    id: "smart",
    name: "Smart Watches",
    image: "/images/collection-2.jpg",
  },
  {
    id: "leather",
    name: "Leather Watches",
    image: "/images/collection-3.jpg",
  },
  {
    id: "mens",
    name: "Men's Watches",
    image: "/images/collection-4.jpg",
  },
  {
    id: "sports",
    name: "Sports Watches",
    image: "/images/collection-5.jpg",
  },
  {
    id: "limited",
    name: "Limited Edition",
    image: "/images/collection-6.jpg",
  },
];

export function getCollection(id: string): Collection | undefined {
  return COLLECTIONS.find((collection) => collection.id === id);
}
