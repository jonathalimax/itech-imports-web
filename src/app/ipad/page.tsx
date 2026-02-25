import type { Metadata } from "next";
import { CategoryHeader } from "@/components/category/category-header";
import { ProductGrid } from "@/components/category/product-grid";
import { getProductsByCategory, getCategoryMeta } from "@/mock";

export const metadata: Metadata = {
  title: "iPad",
  description: "iPads originais com garantia Apple. iPad Pro M4, iPad Air M2 e iPad mini 7.",
};

export default function IPadPage() {
  const products = getProductsByCategory("ipad");
  const category = getCategoryMeta("ipad")!;

  return (
    <>
      <CategoryHeader category={category} productCount={products.length} />
      <ProductGrid initialProducts={products} />
    </>
  );
}
