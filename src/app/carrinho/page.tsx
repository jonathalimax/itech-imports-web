"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  Package,
  FileText,
  Shield,
} from "lucide-react";
import { useCartStore, useCartItems, useCartSubtotal } from "@/store/cart.store";
import { formatBRL } from "@/lib/format";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  const ref = useRef(false);
  if (!ref.current) {
    ref.current = true;
    // schedule the state update outside the render cycle
    Promise.resolve().then(() => setMounted(true));
  }
  return mounted;
}

export default function CartPage() {
  const mounted = useMounted();
  const items = useCartItems();
  const subtotal = useCartSubtotal();
  const { updateQuantity, removeItem, clearCart } = useCartStore();

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center pt-20">
        <div className="animate-pulse text-[#6E6E73]">Carregando lista...</div>
      </div>
    );
  }

  const totalItems = items.reduce((acc, i) => acc + i.quantity, 0);

  function handleWhatsApp() {
    const url = buildWhatsAppUrl(items);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen bg-[#080808] pt-20">
      {/* Top disclaimer banner */}
      <div className="bg-[#25D366]/10 border-b border-[#25D366]/20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-3 flex items-start gap-3">
          <MessageCircle className="h-5 w-5 text-[#25D366] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-[#25D366]">
              Nenhuma compra é realizada neste site
            </p>
            <p className="text-xs text-[#A1A1A6] mt-0.5">
              Sua lista de interesse será enviada diretamente ao WhatsApp da loja. A venda é fechada
              manualmente pela nossa equipe.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <div className="flex items-center gap-4 mb-10">
          <Link
            href="/iphone"
            className="flex items-center gap-2 text-sm text-[#A1A1A6] hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Continuar explorando
          </Link>
        </div>

        {/* Page header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Sua Lista de Interesse
            </h1>
            {items.length > 0 && (
              <p className="text-[#6E6E73] text-sm mt-1">
                {totalItems} {totalItems === 1 ? "produto" : "produtos"} na lista
              </p>
            )}
          </div>
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="rounded-full bg-white/[0.04] p-8 mb-6">
              <MessageCircle className="h-16 w-16 text-[#6E6E73]" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Sua lista está vazia</h2>
            <p className="text-[#A1A1A6] mb-8 max-w-sm">
              Você ainda não adicionou nenhum produto. Explore nossa coleção e encontre o Apple
              perfeito para você.
            </p>
            <Button
              className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 text-white rounded-full px-8"
              asChild
            >
              <Link href="/">Voltar ao início</Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items list */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
                >
                  <div className="relative h-24 w-24 flex-shrink-0 rounded-xl overflow-hidden bg-gradient-to-b from-[#161616] to-[#0E0E0E] image-skeleton">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-contain p-2 transition-opacity duration-500 opacity-0 data-[loaded=true]:opacity-100"
                      onLoad={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://placehold.co/800x800/111111/222222?text=iTech";
                        e.currentTarget.setAttribute("data-loaded", "true");
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link
                          href={`/produto/${item.slug}`}
                          className="font-semibold text-white hover:text-[#0A84FF] transition-colors text-sm sm:text-base"
                        >
                          {item.name}
                        </Link>
                        {(item.storageLabel !== "Padrão" || item.colorLabel !== "Padrão") && (
                          <p className="text-xs text-[#6E6E73] mt-0.5">
                            {[item.storageLabel, item.colorLabel]
                              .filter((v) => v && v !== "Padrão")
                              .join(" · ")}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-[#6E6E73] hover:text-red-400 transition-colors flex-shrink-0"
                        aria-label={`Remover ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.12] text-white hover:border-white/30 transition-colors"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm text-white font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.12] text-white hover:border-white/30 transition-colors"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <p className="font-bold text-white font-price">
                        {formatBRL(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky summary panel */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 space-y-4">
                <h2 className="font-semibold text-white text-lg">Resumo</h2>

                {/* Disclaimer block */}
                <div className="rounded-xl bg-[#25D366]/8 border border-[#25D366]/20 p-3 flex items-start gap-2">
                  <MessageCircle className="h-4 w-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-[#A1A1A6]">
                    <span className="text-[#25D366] font-medium">
                      Nenhum pagamento é feito aqui.
                    </span>{" "}
                    Nossa equipe fecha a venda diretamente pelo WhatsApp.
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#A1A1A6]">
                      {totalItems} {totalItems === 1 ? "produto" : "produtos"}
                    </span>
                    <span className="text-white font-price">{formatBRL(subtotal)}</span>
                  </div>
                  <p className="text-[10px] text-[#6E6E73] text-right">
                    valores sujeitos a confirmação
                  </p>
                </div>

                <Separator className="bg-white/[0.08]" />

                {/* Primary CTA */}
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full font-medium h-12 text-base flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Continuar no WhatsApp
                </Button>

                {/* Trust icons */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { icon: Package, text: "Original lacrado" },
                    { icon: FileText, text: "NF incluída" },
                    { icon: Shield, text: "Garantia Apple" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex flex-col items-center gap-1 text-center"
                    >
                      <item.icon className="h-4 w-4 text-[#0A84FF]" />
                      <span className="text-[10px] text-[#6E6E73] leading-tight">{item.text}</span>
                    </div>
                  ))}
                </div>

                <Separator className="bg-white/[0.08]" />

                {/* Secondary actions */}
                <button
                  onClick={clearCart}
                  className="w-full text-sm text-[#6E6E73] hover:text-red-400 transition-colors py-1"
                >
                  Limpar lista
                </button>

                <Link
                  href="/iphone"
                  className="block text-center text-sm text-[#A1A1A6] hover:text-white transition-colors"
                >
                  Continuar explorando
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
