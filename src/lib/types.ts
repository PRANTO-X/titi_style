export type CollectionId =
  | "luxury"
  | "smart"
  | "leather"
  | "mens"
  | "sports"
  | "limited";

export type ProductBadge = "sale" | "new" | "hot";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  collection: CollectionId;
  price: number;
  compareAtPrice?: number;
  images: string[];
  badge?: ProductBadge;
  rating: number;
  reviews: number;
  description: string;
}

export interface Collection {
  id: CollectionId;
  name: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ServiceIcon;
}

export type ServiceIcon =
  | "truck"
  | "support"
  | "return"
  | "secure";

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number;
}
