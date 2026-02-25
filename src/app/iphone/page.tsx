import type { Metadata } from "next";
import { CategoryHeader } from "@/components/category/category-header";
import { ProductGrid } from "@/components/category/product-grid";
import { getProductsByCategory, getCategoryMeta } from "@/mock";

export const metadata: Metadata = {
  title: "iPhone",
  description: "Compre iPhones originais lacrados com garantia Apple. iPhone 15, 16, 16 Pro e 16 Pro Max disponíveis.",
};

export default function IPhonePage() {
  const products = getProductsByCategory("iphone");
  const category = getCategoryMeta("iphone")!;

  return (
    <>
      <CategoryHeader category={category} productCount={products.length} />
      <ProductGrid initialProducts={products} />
    </>
  );
}
