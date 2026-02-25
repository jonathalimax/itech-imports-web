"use client";

import { ChevronDown } from "lucide-react";
import type { SortOption } from "@/types";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const options: { value: SortOption; label: string }[] = [
  { value: "relevante", label: "Mais relevante" },
  { value: "menor-preco", label: "Menor preço" },
  { value: "maior-preco", label: "Maior preço" },
  { value: "novo", label: "Mais novo" },
];

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="appearance-none bg-white/[0.04] border border-white/[0.10] text-sm text-white rounded-xl px-4 py-2.5 pr-10 focus:outline-none focus:border-[#0A84FF] cursor-pointer"
        aria-label="Ordenar produtos"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#111111]">
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6E6E73] pointer-events-none" />
    </div>
  );
}
