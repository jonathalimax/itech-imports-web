import type { ProductSpec } from "@/types";

interface ProductSpecsProps {
  specs: ProductSpec[];
  description: string;
}

export function ProductSpecs({ specs, description }: ProductSpecsProps) {
  return (
    <div className="space-y-8">
      {/* Description */}
      <div>
        <h3 className="font-semibold text-white mb-3">Sobre o produto</h3>
        <p className="text-[#A1A1A6] text-sm leading-relaxed">{description}</p>
      </div>

      {/* Specs table */}
      <div>
        <h3 className="font-semibold text-white mb-3">Especificações técnicas</h3>
        <div className="rounded-xl border border-white/[0.08] overflow-hidden">
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`flex items-start gap-4 px-4 py-3 ${
                i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
              } ${i !== specs.length - 1 ? "border-b border-white/[0.06]" : ""}`}
            >
              <span className="text-sm text-[#6E6E73] w-32 flex-shrink-0">{spec.label}</span>
              <span className="text-sm text-white flex-1">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
