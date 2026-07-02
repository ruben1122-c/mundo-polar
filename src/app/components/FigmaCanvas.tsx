import {
  type PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

const FIGMA_WIDTH = 1921;

interface FigmaCanvasProps extends PropsWithChildren {
  cropTop?: number;
}

export function FigmaCanvas({ children, cropTop = 0 }: FigmaCanvasProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ scale: 1, height: 0 });

  useEffect(() => {
    const updateLayout = () => {
      const availableWidth = document.documentElement.clientWidth;
      const scale = Math.min(1, availableWidth / FIGMA_WIDTH);
      const contentHeight = contentRef.current?.scrollHeight ?? 0;
      const height = Math.max(0, contentHeight - cropTop) * scale;

      setLayout((current) => {
        if (current.scale === scale && current.height === height) {
          return current;
        }

        return { scale, height };
      });
    };

    updateLayout();
    const resizeObserver = new ResizeObserver(updateLayout);
    if (contentRef.current) resizeObserver.observe(contentRef.current);
    window.addEventListener("resize", updateLayout);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLayout);
    };
  }, [cropTop]);

  return (
    <div
      className="figma-viewport"
      style={{ height: layout.height || undefined }}
    >
      <div
        ref={contentRef}
        className="figma-canvas"
        style={{
          width: FIGMA_WIDTH,
          transform: `scale(${layout.scale}) translateY(-${cropTop}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
