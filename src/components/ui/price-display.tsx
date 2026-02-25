import { formatBRL, formatInstallment } from "@/lib/format";
import { cn } from "@/lib/utils";

interface PriceDisplayProps {
  price: number;
  compareAtPrice?: number;
  installments?: number;
  size?: "sm" | "md" | "lg";
  showInstallment?: boolean;
  className?: string;
}

export function PriceDisplay({
  price,
  compareAtPrice,
  installments = 12,
  size = "md",
  showInstallment = true,
  className,
}: PriceDisplayProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-baseline gap-2">
        {compareAtPrice && (
          <span
            className={cn(
              "text-[#6E6E73] line-through font-price",
              size === "sm" && "text-xs",
              size === "md" && "text-sm",
              size === "lg" && "text-base"
            )}
          >
            {formatBRL(compareAtPrice)}
          </span>
        )}
        <span
          className={cn(
            "font-bold text-white font-price",
            size === "sm" && "text-base",
            size === "md" && "text-xl",
            size === "lg" && "text-3xl"
          )}
        >
          {formatBRL(price)}
        </span>
      </div>
      {showInstallment && (
        <span
          className={cn(
            "text-[#A1A1A6] mt-0.5",
            size === "sm" && "text-xs",
            size === "md" && "text-xs",
            size === "lg" && "text-sm"
          )}
        >
          {formatInstallment(price, installments)}
        </span>
      )}
    </div>
  );
}
