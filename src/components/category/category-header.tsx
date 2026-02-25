import type { CategoryMeta } from "@/types";

interface CategoryHeaderProps {
  category: CategoryMeta;
  productCount: number;
}

export function CategoryHeader({ category, productCount }: CategoryHeaderProps) {
  return (
    <div className="pt-28 pb-10 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="flex flex-col gap-2">
        <p className="text-[#0A84FF] text-sm font-medium tracking-wide uppercase">
          iTech Imports
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl text-white">
          {category.name}
        </h1>
        <p className="text-[#A1A1A6] text-lg max-w-xl">
          {category.description}
        </p>
        <p className="text-[#6E6E73] text-sm mt-1">
          {productCount} {productCount === 1 ? "produto disponível" : "produtos disponíveis"}
        </p>
      </div>
    </div>
  );
}
