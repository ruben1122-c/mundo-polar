import { type ReactNode } from "react";
import { useInView } from "../../hooks/useInView";

interface AnimateInViewProps {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
}

export function AnimateInView({
  children,
  className = "",
  delay = 0,
}: AnimateInViewProps) {
  const [ref, inView] = useInView({
    threshold: 0.05,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <div
      ref={ref as any}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all duration-600 cubic-bezier(0.16, 1, 0.3, 1) transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}
