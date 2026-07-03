import { ChevronDown } from "lucide-react";
import { useCallback, useRef } from "react";
import { useDismissiblePopover } from "@/app/hooks/useDismissiblePopover";
import type { Page } from "@/app/navigation";

interface CategoryDropdownProps {
  currentPage: Page;
  open: boolean;
  onNavigate: (page: Page) => void;
  onOpenChange: (open: boolean) => void;
}

const categories: ReadonlyArray<{ label: string; page: Page }> = [
  { label: "Mujeres", page: "mujer" },
  { label: "Hombres", page: "hombre" },
  { label: "Niños & Niñas", page: "ninos" },
  { label: "Mascotas", page: "mascotas" },
];

export function CategoryDropdown({
  currentPage,
  open,
  onNavigate,
  onOpenChange,
}: CategoryDropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => onOpenChange(false), [onOpenChange]);
  useDismissiblePopover(rootRef, open, close);

  const selectCategory = (page: Page) => {
    close();
    onNavigate(page);
  };

  return (
    <div className="header-popover-root category-dropdown-root" ref={rootRef}>
      <button
        className={
          currentPage === "mujer" ||
          currentPage === "hombre" ||
          currentPage === "ninos" ||
          currentPage === "mascotas"
            ? "nav-link active"
            : "nav-link"
        }
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => onOpenChange(!open)}
      >
        Categorías
        <ChevronDown
          className={open ? "dropdown-chevron open" : "dropdown-chevron"}
          size={15}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div className="header-menu category-menu" role="menu">
          {categories.map(({ label, page }) => (
            <button
              key={page}
              className={currentPage === page ? "active" : undefined}
              type="button"
              role="menuitem"
              onClick={() => selectCategory(page)}
            >
              {label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
