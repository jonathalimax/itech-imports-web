"use client";

import { useState } from "react";
import { ShoppingCart, MessageCircle, Shield, Package, FileText } from "lucide-react";
import { useCartStore } from "@/store/cart.store";
import { PriceDisplay } from "@/components/ui/price-display";
import { ProductBadgeLabel } from "@/components/ui/product-badge";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
}

const trustItems = [
  { icon: Package, label: "Original lacrado" },
  { icon: FileText, label: "NF incluída" },
  { icon: Shield, label: "Garantia Apple" },
];

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedStorageId, setSelectedStorageId] = useState(
    product.storageVariants[0]?.id ?? ""
  );
  const [selectedColorId, setSelectedColorId] = useState(
    product.colorVariants[0]?.id ?? ""
  );
  const [adding, setAdding] = useState(false);

  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const selectedStorage = product.storageVariants.find((v) => v.id === selectedStorageId);
  const selectedColor = product.colorVariants.find((v) => v.id === selectedColorId);

  const price =
    product.basePrice +
    (selectedStorage?.priceDelta ?? 0) +
    (selectedColor?.priceDelta ?? 0);

  const variantId = [selectedStorageId, selectedColorId].filter(Boolean).join("-");
  const itemId = `${product.id}-${variantId}`;

  const handleAddToCart = async () => {
    setAdding(true);
    addItem({
      id: itemId,
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.images[0]?.url ?? "",
      storageLabel: selectedStorage?.label ?? "Padrão",
      colorLabel: selectedColor?.label ?? "Padrão",
      price,
      quantity: 1,
    });
    await new Promise((r) => setTimeout(r, 300));
    setAdding(false);
    openCart();
  };

  const handleWhatsAppNow = () => {
    const url = buildWhatsAppUrl([
      {
        id: itemId,
        productId: product.id,
        slug: product.slug,
        name: product.name,
        image: product.images[0]?.url ?? "",
        storageLabel: selectedStorage?.label ?? "Padrão",
        colorLabel: selectedColor?.label ?? "Padrão",
        price,
        quantity: 1,
      },
    ]);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Badge + Name */}
      <div>
        {product.badge && <ProductBadgeLabel badge={product.badge} className="mb-3" />}
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">
          {product.name}
        </h1>
        <p className="mt-2 text-[#A1A1A6] text-base leading-relaxed">
          {product.shortDescription}
        </p>
      </div>

      {/* Price */}
      <PriceDisplay
        price={price}
        compareAtPrice={product.compareAtPrice}
        installments={product.installments}
        size="lg"
        showInstallment
      />

      {/* Storage selector */}
      {product.storageVariants.length > 0 && (
        <div>
          <p className="text-sm font-medium text-[#A1A1A6] mb-3">
            Armazenamento:{" "}
            <span className="text-white">{selectedStorage?.label}</span>
          </p>
          <div className="flex gap-2 flex-wrap">
            {product.storageVariants.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedStorageId(v.id)}
                disabled={!v.available}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200",
                  selectedStorageId === v.id
                    ? "border-[#0A84FF] bg-[#0A84FF]/10 text-[#0A84FF]"
                    : "border-white/[0.10] text-[#A1A1A6] hover:border-white/25 hover:text-white",
                  !v.available && "opacity-40 cursor-not-allowed"
                )}
              >
                {v.label}
                {v.priceDelta > 0 && (
                  <span className="ml-1.5 text-[#6E6E73] text-xs">
                    +R${v.priceDelta.toLocaleString("pt-BR")}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color selector */}
      {product.colorVariants.length > 0 && (
        <div>
          <p className="text-sm font-medium text-[#A1A1A6] mb-3">
            Cor: <span className="text-white">{selectedColor?.label}</span>
          </p>
          <div className="flex gap-3 flex-wrap">
            {product.colorVariants.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedColorId(v.id)}
                disabled={!v.available}
                title={v.label}
                className={cn(
                  "h-8 w-8 rounded-full border-2 transition-all duration-200 hover:scale-110",
                  selectedColorId === v.id
                    ? "border-[#0A84FF] ring-2 ring-[#0A84FF]/40 scale-110"
                    : "border-white/20",
                  !v.available && "opacity-40 cursor-not-allowed"
                )}
                style={{ backgroundColor: v.colorHex ?? "#333" }}
                aria-label={`Selecionar cor ${v.label}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* CTAs */}
      <div className="flex flex-col gap-3 pt-2">
        <Button
          onClick={handleAddToCart}
          disabled={adding}
          size="lg"
          className="w-full bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white rounded-full font-medium text-base glow-blue disabled:opacity-70 transition-all"
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          {adding ? "Adicionando..." : "Adicionar à lista"}
        </Button>
        <Button
          onClick={handleWhatsAppNow}
          size="lg"
          className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full font-medium text-base"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Falar no WhatsApp agora
        </Button>
      </div>

      {/* Trust icons */}
      <div className="flex flex-wrap gap-4 pt-2">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm text-[#A1A1A6]"
          >
            <item.icon className="h-4 w-4 text-[#0A84FF] flex-shrink-0" />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
