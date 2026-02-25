"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store/cart.store";
import { AnalyticsProvider } from "@/components/analytics-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  // Rehydrate cart store from localStorage after mount
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return <AnalyticsProvider>{children}</AnalyticsProvider>;
}
