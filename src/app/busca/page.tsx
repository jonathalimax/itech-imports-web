import { Suspense } from "react";
import type { Metadata } from "next";
import { SearchPageContent } from "@/components/search/search-page-content";
import { SkeletonCard } from "@/components/ui/skeleton-card";

export const metadata: Metadata = {
  title: "Buscar produtos",
  robots: { index: false },
};

function SearchFallback() {
  return (
    <div className="min-h-screen bg-[#080808] pt-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl py-12">
        <div className="h-12 w-64 bg-white/[0.06] rounded-xl animate-pulse mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchPageContent />
    </Suspense>
  );
}
