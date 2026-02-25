"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { searchProducts } from "@/lib/search";
import { ProductCard } from "@/components/product/product-card";
import type { Product } from "@/types";

export function SearchPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") ?? "";
  const [inputValue, setInputValue] = useState(query);
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(query);
    if (query.length >= 2) {
      setResults(searchProducts(query));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed.length >= 2) {
      router.push(`/busca?q=${encodeURIComponent(trimmed)}`);
    }
  };

  const clearSearch = () => {
    setInputValue("");
    router.push("/busca");
    inputRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-[#080808] pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Search input */}
        <form onSubmit={handleSearch} className="mb-10">
          <div className="relative max-w-2xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-[#6E6E73]" />
            <input
              ref={inputRef}
              type="search"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Buscar produtos Apple..."
              className="w-full h-14 bg-white/[0.04] border border-white/[0.10] text-white placeholder:text-[#6E6E73] rounded-2xl pl-14 pr-14 text-base focus:outline-none focus:border-[#0A84FF] transition-colors"
              aria-label="Campo de busca"
            />
            {inputValue && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6E6E73] hover:text-white transition-colors"
                aria-label="Limpar busca"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </form>

        {/* Results header */}
        {query && (
          <div className="mb-6">
            {results.length > 0 ? (
              <p className="text-[#A1A1A6] text-sm">
                <span className="text-white font-medium">{results.length}</span>{" "}
                resultado{results.length !== 1 ? "s" : ""} para{" "}
                <span className="text-white font-medium">&ldquo;{query}&rdquo;</span>
              </p>
            ) : query.length >= 2 ? (
              <p className="text-[#A1A1A6] text-sm">
                Nenhum resultado para{" "}
                <span className="text-white font-medium">&ldquo;{query}&rdquo;</span>
              </p>
            ) : null}
          </div>
        )}

        {/* Results grid */}
        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : query.length >= 2 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-6xl mb-6">🔍</div>
            <h2 className="text-xl font-bold text-white mb-3">
              Nenhum produto encontrado
            </h2>
            <p className="text-[#A1A1A6] max-w-sm mb-8">
              Que tal explorar nossa coleção completa? Temos os melhores produtos Apple com garantia e nota fiscal.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { href: "/iphone", label: "iPhones" },
                { href: "/mac", label: "MacBooks" },
                { href: "/ipad", label: "iPads" },
                { href: "/acessorios", label: "Acessórios" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2 rounded-full border border-white/[0.12] text-sm text-[#A1A1A6] hover:text-white hover:border-white/30 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : !query ? (
          /* No query state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-6xl mb-6">🍎</div>
            <h2 className="text-xl font-bold text-white mb-3">
              O que você está procurando?
            </h2>
            <p className="text-[#A1A1A6] text-sm">
              Experimente buscar por &ldquo;iPhone 16&rdquo;, &ldquo;MacBook&rdquo; ou &ldquo;AirPods&rdquo;
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
