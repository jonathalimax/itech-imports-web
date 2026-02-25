export type ProductCategory = "iphone" | "mac" | "ipad" | "acessorios";

export type ProductBadge = "novo" | "mais-vendido" | "oferta";

export type VariantType = "storage" | "color";

export interface ProductVariant {
  id: string;
  label: string;
  type: VariantType;
  priceDelta: number; // added to basePrice
  available: boolean;
  colorHex?: string; // for color variants
}

export interface ProductImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ProductCategory;
  basePrice: number;
  compareAtPrice?: number;
  installments: number;
  badge?: ProductBadge;
  images: ProductImage[];
  storageVariants: ProductVariant[];
  colorVariants: ProductVariant[];
  specs: ProductSpec[];
  relatedProductIds: string[];
  inStock: boolean;
  featured: boolean;
  createdAt: string;
}

export interface ProductFilters {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
  storage?: string;
  color?: string;
  badge?: ProductBadge;
}

export type SortOption = "relevante" | "menor-preco" | "maior-preco" | "novo";
