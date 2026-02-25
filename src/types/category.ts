import type { ProductCategory } from "./product";

export interface CategoryMeta {
  slug: ProductCategory;
  name: string;
  description: string;
  heroImage: {
    url: string;
    alt: string;
  };
  productCount: number;
}
