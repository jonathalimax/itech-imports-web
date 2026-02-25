import { cn } from "@/lib/utils";
import type { ProductBadge } from "@/types";

const badgeConfig: Record<ProductBadge, { label: string; className: string }> = {
  "mais-vendido": {
    label: "Mais Vendido",
    className: "bg-[#0A84FF] text-white border border-[#0A84FF]",
  },
  novo: {
    label: "Novo",
    className: "bg-emerald-500 text-white border border-emerald-500",
  },
  oferta: {
    label: "Oferta",
    className: "bg-amber-500 text-white border border-amber-500",
  },
};

interface ProductBadgeProps {
  badge: ProductBadge;
  className?: string;
}

export function ProductBadgeLabel({ badge, className }: ProductBadgeProps) {
  const config = badgeConfig[badge];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
