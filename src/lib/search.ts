import type { Product } from "@/types";
import { products } from "@/mock";

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];

  return products.filter((p) => {
    const searchable = [
      p.name,
      p.shortDescription,
      p.category,
      p.badge ?? "",
      ...p.storageVariants.map((v) => v.label),
      ...p.colorVariants.map((v) => v.label),
    ]
      .join(" ")
      .toLowerCase();

    return searchable.includes(q);
  });
}
