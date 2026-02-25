"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store/cart.store";

export function Providers({ children }: { children: React.ReactNode }) {
  // Rehydrate cart store from localStorage after mount
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return <>{children}</>;
}
