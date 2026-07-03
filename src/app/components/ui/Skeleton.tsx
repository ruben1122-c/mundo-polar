interface SkeletonProps {
  className?: string;
  circle?: boolean;
}

export function Skeleton({ className = "", circle = false }: SkeletonProps) {
  return (
    <div
      className={`animate-shimmer bg-slate-200 ${
        circle ? "rounded-full" : "rounded-lg"
      } ${className}`}
      aria-hidden="true"
    />
  );
}
