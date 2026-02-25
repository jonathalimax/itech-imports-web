"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { CartItem, CartState } from "@/types/cart";

interface CartStore extends CartState {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  itemCount: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),

      addItem: (newItem) => {
        const item: CartItem = { ...newItem, quantity: newItem.quantity ?? 1 };
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        });
      },

      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      itemCount: () =>
        get().items.reduce((acc, item) => acc + item.quantity, 0),

      subtotal: () =>
        get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }),
    {
      name: "itech-cart",
      storage: createJSONStorage(() => {
        if (typeof window !== "undefined") return localStorage;
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
      partialize: (state) => ({ items: state.items }),
      skipHydration: true,
    }
  )
);

// Selector hooks
export const useCartItems = () => useCartStore((s) => s.items);
export const useCartIsOpen = () => useCartStore((s) => s.isOpen);
export const useCartItemCount = () =>
  useCartStore((s) => s.items.reduce((acc, i) => acc + i.quantity, 0));
export const useCartSubtotal = () =>
  useCartStore((s) => s.items.reduce((acc, i) => acc + i.price * i.quantity, 0));
