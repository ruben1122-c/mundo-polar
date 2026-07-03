import {
  CircleHelp,
  LogOut,
  PackageSearch,
  UserRound,
} from "lucide-react";
import { useCallback, useRef } from "react";
import { useDismissiblePopover } from "@/app/hooks/useDismissiblePopover";
import type { Page } from "@/app/navigation";

interface ProfileDropdownProps {
  open: boolean;
  onNavigate: (page: Page) => void;
  onMockAction: (message: string) => void;
  onOpenChange: (open: boolean) => void;
}

export function ProfileDropdown({
  open,
  onNavigate,
  onMockAction,
  onOpenChange,
}: ProfileDropdownProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => onOpenChange(false), [onOpenChange]);
  useDismissiblePopover(rootRef, open, close);

  const runMockAction = (message: string) => {
    close();
    onMockAction(message);
  };

  return (
    <div className="header-popover-root" ref={rootRef}>
      <button
        className="icon-placeholder"
        type="button"
        aria-label="Abrir opciones de perfil"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => onOpenChange(!open)}
      >
        <UserRound size={22} aria-hidden="true" />
      </button>

      {open ? (
        <div className="header-menu profile-menu" role="menu">
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              close();
              onNavigate("perfil");
            }}
          >
            <UserRound size={17} aria-hidden="true" />
            Mi perfil
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => runMockAction("La sección de ayuda estará disponible próximamente.")}
          >
            <CircleHelp size={17} aria-hidden="true" />
            Ayuda
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => runMockAction("El historial de pedidos es una demostración visual.")}
          >
            <PackageSearch size={17} aria-hidden="true" />
            Mis pedidos
          </button>
          <button
            className="profile-logout"
            type="button"
            role="menuitem"
            onClick={() => runMockAction("Cerrar sesión es una acción de demostración.")}
          >
            <LogOut size={17} aria-hidden="true" />
            Cerrar sesión
          </button>
        </div>
      ) : null}
    </div>
  );
}
