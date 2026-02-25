import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  className?: string;
}

export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/[0.04] border border-white/[0.06] overflow-hidden animate-pulse",
        className
      )}
    >
      <div className="aspect-square bg-white/[0.06]" />
      <div className="p-4 space-y-3">
        <div className="h-3 bg-white/[0.06] rounded-full w-1/3" />
        <div className="h-4 bg-white/[0.06] rounded-full w-2/3" />
        <div className="h-6 bg-white/[0.06] rounded-full w-1/2" />
      </div>
    </div>
  );
}
