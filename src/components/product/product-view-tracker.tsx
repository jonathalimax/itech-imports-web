"use client";

import { useEffect } from "react";
import { trackProductView } from "@/lib/analytics";

interface ProductViewTrackerProps {
  productId: string;
  productName: string;
  category: string;
  price: number;
}

export function ProductViewTracker({ productId, productName, category, price }: ProductViewTrackerProps) {
  useEffect(() => {
    trackProductView(productId, productName, category, price);
  }, [productId, productName, category, price]);

  return null;
}
