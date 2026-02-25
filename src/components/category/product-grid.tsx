"use client";

import { useState, useMemo } from "react";
import { motion, type Variants } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { SortDropdown } from "./sort-dropdown";
import { ProductCard } from "@/components/product/product-card";
import { SkeletonCard } from "@/components/ui/skeleton-card";
import type { Product, SortOption } from "@/types";

interface ProductGridProps {
  initialProducts: Product[];
}

function sortProducts(products: Product[], sort: SortOption): Product[] {
  const sorted = [...products];
  switch (sort) {
    case "menor-preco":
      return sorted.sort((a, b) => a.basePrice - b.basePrice);
    case "maior-preco":
      return sorted.sort((a, b) => b.basePrice - a.basePrice);
    case "novo":
      return sorted.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function ProductGrid({ initialProducts }: ProductGridProps) {
  const [sort, setSort] = useState<SortOption>("relevante");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...initialProducts];
    if (minPrice) result = result.filter((p) => p.basePrice >= Number(minPrice));
    if (maxPrice) result = result.filter((p) => p.basePrice <= Number(maxPrice));
    return sortProducts(result, sort);
  }, [initialProducts, sort, minPrice, maxPrice]);

  return (
    <div className="pb-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 text-sm text-[#A1A1A6] hover:text-white border border-white/[0.10] rounded-xl px-4 py-2.5 hover:border-white/20 transition-colors"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filtros
          </button>
          <span className="text-[#6E6E73] text-sm">
            {filtered.length} produto{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
        <SortDropdown value={sort} onChange={setSort} />
      </div>

      {/* Filter bar */}
      {showFilters && (
        <div className="mb-6 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] flex flex-wrap gap-4 items-end">
          <div>
            <label className="text-xs text-[#6E6E73] block mb-1">Preço mínimo (R$)</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="0"
              className="w-28 bg-white/[0.04] border border-white/[0.10] text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-[#0A84FF]"
            />
          </div>
          <div>
            <label className="text-xs text-[#6E6E73] block mb-1">Preço máximo (R$)</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="99999"
              className="w-28 bg-white/[0.04] border border-white/[0.10] text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-[#0A84FF]"
            />
          </div>
          <button
            onClick={() => { setMinPrice(""); setMaxPrice(""); }}
            className="text-xs text-[#6E6E73] hover:text-white underline"
          >
            Limpar filtros
          </button>
        </div>
      )}

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-[#6E6E73] text-lg">Nenhum produto encontrado com esses filtros.</p>
          <button
            onClick={() => { setMinPrice(""); setMaxPrice(""); setSort("relevante"); }}
            className="mt-4 text-[#0A84FF] text-sm hover:underline"
          >
            Limpar todos os filtros
          </button>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {filtered.map((product) => (
            <motion.div key={product.id} variants={cardVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
