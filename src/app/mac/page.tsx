import type { Metadata } from "next";
import { CategoryHeader } from "@/components/category/category-header";
import { ProductGrid } from "@/components/category/product-grid";
import { getProductsByCategory, getCategoryMeta } from "@/mock";

export const metadata: Metadata = {
  title: "Mac",
  description: "MacBooks com chip Apple Silicon. MacBook Air M3 e MacBook Pro M4 Pro disponíveis.",
};

export default function MacPage() {
  const products = getProductsByCategory("mac");
  const category = getCategoryMeta("mac")!;

  return (
    <>
      <CategoryHeader category={category} productCount={products.length} />
      <ProductGrid initialProducts={products} />
    </>
  );
}
