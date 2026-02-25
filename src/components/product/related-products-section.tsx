"use client";

import { trackRelatedProductClick } from "@/lib/analytics";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types";

interface RelatedProductsSectionProps {
  products: Product[];
}

export function RelatedProductsSection({ products }: RelatedProductsSectionProps) {
  if (products.length === 0) return null;

  return (
    <div className="border-t border-white/[0.06] py-16">
      <h2 className="font-display font-bold text-2xl text-white mb-8">
        Você também pode gostar
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => trackRelatedProductClick(p.id, p.name)}
          >
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
