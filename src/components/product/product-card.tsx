"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart.store";
import { PriceDisplay } from "@/components/ui/price-display";
import { ProductBadgeLabel } from "@/components/ui/product-badge";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const defaultStorage = product.storageVariants[0];
  const defaultColor = product.colorVariants[0];
  const price = product.basePrice + (defaultStorage?.priceDelta ?? 0) + (defaultColor?.priceDelta ?? 0);
  const variantId = [defaultStorage?.id, defaultColor?.id].filter(Boolean).join("-");
  const itemId = `${product.id}-${variantId}`;

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: itemId,
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.images[0]?.url ?? "",
      storageLabel: defaultStorage?.label ?? "Padrão",
      colorLabel: defaultColor?.label ?? "Padrão",
      price,
      quantity: 1,
    });
    openCart();
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Link
        href={`/produto/${product.slug}`}
        className="group relative flex flex-col rounded-2xl bg-white/[0.03] border border-white/[0.06] overflow-hidden hover:border-white/[0.14] transition-all duration-300 hover:bg-white/[0.05]"
      >
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <ProductBadgeLabel badge={product.badge} />
          </div>
        )}

        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-[#F5F5F7] image-skeleton">
          <Image
            src={product.images[0]?.url ?? "https://placehold.co/800x800/111111/333333"}
            alt={product.images[0]?.alt ?? product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain transition-all duration-500 opacity-0 group-hover:scale-105 data-[loaded=true]:opacity-100"
            onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/800x800/111111/222222?text=iTech";
              e.currentTarget.setAttribute("data-loaded", "true");
            }}
          />
          {/* Glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0A84FF]/5 rounded-t-2xl" />
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col gap-2 flex-1">
          {/* Storage chips */}
          {product.storageVariants.length > 0 && (
            <div className="flex gap-1.5 flex-wrap">
              {product.storageVariants.slice(0, 3).map((v) => (
                <span
                  key={v.id}
                  className="text-[10px] font-medium text-[#6E6E73] border border-white/[0.08] rounded px-1.5 py-0.5"
                >
                  {v.label}
                </span>
              ))}
              {product.storageVariants.length > 3 && (
                <span className="text-[10px] text-[#6E6E73]">+{product.storageVariants.length - 3}</span>
              )}
            </div>
          )}

          <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-white transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-[#6E6E73] leading-relaxed line-clamp-2 flex-1">
            {product.shortDescription}
          </p>

          <div className="flex items-end justify-between mt-auto pt-2">
            <PriceDisplay price={price} size="sm" showInstallment={false} />
            <button
              onClick={handleAddToCart}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/20 text-[#0A84FF] hover:bg-[#0A84FF] hover:text-white transition-all duration-200"
              aria-label={`Adicionar ${product.name} à lista de interesse`}
            >
              <ShoppingCart className="h-3.5 w-3.5" />
            </button>
          </div>

          <p className="text-[10px] text-[#6E6E73]">
            {product.installments}x de{" "}
            <span className="text-[#A1A1A6]">
              R$ {(price / product.installments).toFixed(2).replace(".", ",")}
            </span>{" "}
            sem juros
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
