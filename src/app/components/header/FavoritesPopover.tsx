import { Heart, X } from "lucide-react";
import { useCallback, useRef } from "react";
import { useDismissiblePopover } from "@/app/hooks/useDismissiblePopover";
import type { Page } from "@/app/navigation";
import type { ShopProduct } from "@/app/context/ShopContext";

interface FavoritesPopoverProps {
  items: ReadonlyArray<ShopProduct>;
  open: boolean;
  onNavigate: (page: Page) => void;
  onOpenChange: (open: boolean) => void;
}

export function FavoritesPopover({
  items,
  open,
  onNavigate,
  onOpenChange,
}: FavoritesPopoverProps) {
  const count = items.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => onOpenChange(false), [onOpenChange]);
  useDismissiblePopover(rootRef, open, close);

  return (
    <div className="header-popover-root" ref={rootRef}>
      <button
        className="icon-placeholder"
        type="button"
        aria-label="Abrir favoritos"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => onOpenChange(!open)}
      >
        <Heart size={22} aria-hidden="true" />
        {count > 0 ? <span className="icon-count">{count}</span> : null}
      </button>

      {open ? (
        <section
          className="favorites-popover"
          aria-label="Resumen de favoritos"
          role="dialog"
        >
          <div className="favorites-popover-header">
            <h2>Mis favoritos</h2>
            <button type="button" aria-label="Cerrar favoritos" onClick={close}>
              <X size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="favorites-popover-body">
            <span className="favorites-popover-icon">
              <Heart size={25} fill="currentColor" aria-hidden="true" />
            </span>
            {count > 0 ? (
              <>
                <strong>{count} productos guardados</strong>
                <p>Encuentra aquí las prendas que elegiste para más adelante.</p>
                <ul className="favorites-popover-preview" aria-label="Favoritos recientes">
                  {items.slice(0, 2).map((item) => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
                <button
                  className="primary-button favorites-popover-action"
                  type="button"
                  onClick={() => {
                    close();
                    onNavigate("favoritos");
                  }}
                >
                  Ver favoritos
                </button>
              </>
            ) : (
              <>
                <strong>Aún no tienes favoritos</strong>
                <p>Guarda tus productos favoritos y vuelve a ellos cuando quieras.</p>
              </>
            )}
          </div>
        </section>
      ) : null}
    </div>
  );
}
