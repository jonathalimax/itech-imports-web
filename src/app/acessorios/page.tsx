import type { Metadata } from "next";
import { CategoryHeader } from "@/components/category/category-header";
import { ProductGrid } from "@/components/category/product-grid";
import { getProductsByCategory, getCategoryMeta } from "@/mock";

export const metadata: Metadata = {
  title: "Acessórios",
  description: "AirPods, Apple Watch, MagSafe e mais. Acessórios Apple originais com garantia.",
};

export default function AcessoriosPage() {
  const products = getProductsByCategory("acessorios");
  const category = getCategoryMeta("acessorios")!;

  return (
    <>
      <CategoryHeader category={category} productCount={products.length} />
      <ProductGrid initialProducts={products} />
    </>
  );
}
