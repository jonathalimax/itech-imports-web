import { WHATSAPP_NUMBER } from "@/lib/constants";
import { formatBRL } from "@/lib/format";
import type { CartItem } from "@/types/cart";

export function buildWhatsAppUrl(items: CartItem[]): string {
  const lines = items.map((item) => {
    const variants = [item.storageLabel, item.colorLabel]
      .filter((v) => v && v !== "Padrão")
      .join(" · ");
    const variantPart = variants ? ` (${variants})` : "";
    const qty = item.quantity > 1 ? ` × ${item.quantity}` : "";
    return `• ${item.name}${variantPart}${qty} — ${formatBRL(item.price)}`;
  });

  const message = [
    "Olá! Tenho interesse nos seguintes produtos da iTech Imports:",
    "",
    ...lines,
    "",
    "Gostaria de saber mais sobre disponibilidade e formas de pagamento.",
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
