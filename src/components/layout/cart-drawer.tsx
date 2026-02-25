"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Minus, Plus, Trash2 } from "lucide-react";
import { useCartStore, useCartItems, useCartIsOpen, useCartSubtotal } from "@/store/cart.store";
import { formatBRL } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function CartDrawer() {
  const isOpen = useCartIsOpen();
  const items = useCartItems();
  const subtotal = useCartSubtotal();
  const { closeCart, updateQuantity, removeItem } = useCartStore();

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-[#111111] border-l border-white/[0.08] z-50 flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Lista de interesse"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                <h2 className="font-semibold text-white text-lg">Lista de Interesse</h2>
                {items.length > 0 && (
                  <span className="text-[#6E6E73] text-sm">({items.length})</span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#A1A1A6] hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Fechar lista de interesse"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
                  <div className="rounded-full bg-white/[0.04] p-6">
                    <MessageCircle className="h-10 w-10 text-[#6E6E73]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Sua lista está vazia</p>
                    <p className="text-[#6E6E73] text-sm mt-1">
                      Explore nossa coleção e encontre o produto ideal
                    </p>
                  </div>
                  <Button
                    onClick={closeCart}
                    variant="outline"
                    className="border-white/[0.12] text-white hover:bg-white/5 rounded-full"
                    asChild
                  >
                    <Link href="/iphone">Ver Produtos</Link>
                  </Button>
                </div>
              ) : (
                <ul className="divide-y divide-white/[0.06] p-4 space-y-0">
                  {items.map((item) => (
                    <li key={item.id} className="py-4 flex gap-4">
                      <div className="relative h-20 w-20 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-b from-[#161616] to-[#0E0E0E] image-skeleton">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2 transition-opacity duration-500 opacity-0 data-[loaded=true]:opacity-100"
                          sizes="80px"
                          onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
                          onError={(e) => {
                            e.currentTarget.src =
                              "https://placehold.co/800x800/111111/222222?text=iTech";
                            e.currentTarget.setAttribute("data-loaded", "true");
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate">{item.name}</p>
                        <p className="text-xs text-[#6E6E73] mt-0.5">
                          {item.storageLabel} · {item.colorLabel}
                        </p>
                        <p className="text-sm font-medium text-[#0A84FF] mt-1 font-price">
                          {formatBRL(item.price)}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.12] text-white hover:border-white/30 transition-colors"
                              aria-label={`Diminuir quantidade de ${item.name}`}
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-sm text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.12] text-white hover:border-white/30 transition-colors"
                              aria-label={`Aumentar quantidade de ${item.name}`}
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-[#6E6E73] hover:text-red-400 transition-colors"
                            aria-label={`Remover ${item.name} da lista`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-white/[0.08] p-6 space-y-4">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#A1A1A6]">
                      {totalItems} {totalItems === 1 ? "produto" : "produtos"} na sua lista
                    </span>
                    <span className="text-white font-price">{formatBRL(subtotal)}</span>
                  </div>
                  <p className="text-[10px] text-[#6E6E73]">
                    Preços de referência — valores sujeitos a confirmação
                  </p>
                </div>

                <Separator className="bg-white/[0.08]" />

                <div className="space-y-2">
                  <Button
                    className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full font-medium flex items-center gap-2"
                    onClick={closeCart}
                    asChild
                  >
                    <Link href="/carrinho">
                      <MessageCircle className="h-4 w-4" />
                      Ver lista e falar no WhatsApp
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white/[0.12] text-white hover:bg-white/5 rounded-full"
                    onClick={closeCart}
                  >
                    Continuar explorando
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
