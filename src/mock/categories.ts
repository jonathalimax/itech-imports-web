import type { CategoryMeta } from "@/types";

export const categories: CategoryMeta[] = [
  {
    slug: "iphone",
    name: "iPhone",
    description: "Os iPhones mais avançados do mundo. Originais lacrados com garantia Apple.",
    heroImage: {
      url: "https://placehold.co/1200x600/0A0A0A/333333?text=iPhone",
      alt: "Categoria iPhone — iTech Imports",
    },
    productCount: 4,
  },
  {
    slug: "mac",
    name: "Mac",
    description: "MacBooks com chip Apple Silicon para desempenho e eficiência sem precedentes.",
    heroImage: {
      url: "https://placehold.co/1200x600/0A0A0A/333333?text=Mac",
      alt: "Categoria Mac — iTech Imports",
    },
    productCount: 3,
  },
  {
    slug: "ipad",
    name: "iPad",
    description: "iPads poderosos para criatividade, produtividade e entretenimento.",
    heroImage: {
      url: "https://placehold.co/1200x600/0A0A0A/333333?text=iPad",
      alt: "Categoria iPad — iTech Imports",
    },
    productCount: 3,
  },
  {
    slug: "acessorios",
    name: "Acessórios",
    description: "AirPods, Apple Watch, MagSafe e muito mais para completar seu ecossistema Apple.",
    heroImage: {
      url: "https://placehold.co/1200x600/0A0A0A/333333?text=Acessorios",
      alt: "Categoria Acessórios — iTech Imports",
    },
    productCount: 4,
  },
];

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return categories.find((c) => c.slug === slug);
}
