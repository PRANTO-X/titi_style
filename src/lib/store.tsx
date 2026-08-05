"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/lib/types";

export type OverlayType = "cart" | "wishlist" | "search" | null;

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: string[];
  overlay: OverlayType;
  ready: boolean;
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  addToCart: (product: Product, quantity?: number) => void;
  buyNow: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  openOverlay: (type: Exclude<OverlayType, null>) => void;
  closeOverlay: () => void;
}

const StoreContext = createContext<StoreState | null>(null);

const CART_KEY = "titi-cart";
const WISHLIST_KEY = "titi-wishlist";

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [overlay, setOverlay] = useState<OverlayType>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCart(readStorage(CART_KEY, [])); // eslint-disable-line react-hooks/set-state-in-effect
    setWishlist(readStorage(WISHLIST_KEY, []));
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, ready]);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, ready]);

  const addToCart = useCallback((product: Product, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...current, { product, quantity }];
    });
    setOverlay("cart");
  }, []);

  const buyNow = useCallback((product: Product, quantity = 1) => {
    setCart([{ product, quantity }]);
    setOverlay(null);
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((current) =>
      current.filter((item) => item.product.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart((current) =>
      quantity <= 0
        ? current.filter((item) => item.product.id !== productId)
        : current.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          )
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist]
  );

  const openOverlay = useCallback((type: Exclude<OverlayType, null>) => {
    setOverlay(type);
  }, []);

  const closeOverlay = useCallback(() => {
    setOverlay(null);
  }, []);

  const { cartCount, cartTotal } = useMemo(() => {
    return cart.reduce(
      (acc, item) => {
        acc.cartCount += item.quantity;
        acc.cartTotal += item.quantity * item.product.price;
        return acc;
      },
      { cartCount: 0, cartTotal: 0 }
    );
  }, [cart]);

  const value = useMemo<StoreState>(
    () => ({
      cart,
      wishlist,
      overlay,
      ready,
      cartCount,
      cartTotal,
      wishlistCount: wishlist.length,
      addToCart,
      buyNow,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleWishlist,
      isWishlisted,
      openOverlay,
      closeOverlay,
    }),
    [
      cart,
      wishlist,
      overlay,
      ready,
      cartCount,
      cartTotal,
      addToCart,
      buyNow,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleWishlist,
      isWishlisted,
      openOverlay,
      closeOverlay,
    ]
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore(): StoreState {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
