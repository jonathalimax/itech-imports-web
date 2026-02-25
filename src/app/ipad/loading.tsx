import { SkeletonCard } from "@/components/ui/skeleton-card";

export default function Loading() {
  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="mb-10">
        <div className="h-4 w-24 bg-white/[0.06] rounded-full animate-pulse mb-4" />
        <div className="h-10 w-48 bg-white/[0.06] rounded-full animate-pulse mb-3" />
        <div className="h-5 w-80 bg-white/[0.04] rounded-full animate-pulse" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
