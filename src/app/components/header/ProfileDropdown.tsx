import { useDismissiblePopover } from "@/app/hooks/useDismissiblePopover";
import type { Page } from "@/app/navigation";
import {
  CircleHelp,
  LogIn,
  LogOut,
  PackageSearch,
  UserPlus,
  UserRound,
} from "lucide-react";
import { useCallback, useRef } from "react";

interface ProfileDropdownProps {
  open: boolean;
  onNavigate: (page: Page) => void;
  onMockAction: (message: string) => void;
  onOpenChange: (open: boolean) => void;
  isAuthenticated: boolean;
  displayName?: string;
  onLogout: () => Promise<void>;
}

export function ProfileDropdown({
  open,
  onNavigate,
  onMockAction,
  onOpenChange,
  isAuthenticated,
  displayName,
  onLogout,
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
        aria-label={
          isAuthenticated ? "Abrir opciones de perfil" : "Iniciar sesión"
        }
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => onOpenChange(!open)}
      >
        <UserRound size={22} aria-hidden="true" />
      </button>

      {open ? (
        <div className="header-menu profile-menu" role="menu">
          {isAuthenticated ? (
            <>
              <div className="profile-menu-identity">
                <span>Sesión activa</span>
                <strong>{displayName}</strong>
              </div>
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
            </>
          ) : (
            <>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  close();
                  onNavigate("login");
                }}
              >
                <LogIn size={17} aria-hidden="true" />
                Iniciar sesión
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  close();
                  onNavigate("registro");
                }}
              >
                <UserPlus size={17} aria-hidden="true" />
                Crear cuenta
              </button>
            </>
          )}

          <button
            type="button"
            role="menuitem"
            onClick={() =>
              runMockAction(
                "La sección de ayuda estará disponible próximamente.",
              )
            }
          >
            <CircleHelp size={17} aria-hidden="true" />
            Ayuda
          </button>

          {isAuthenticated ? (
            <>
              <button
                type="button"
                role="menuitem"
                onClick={() =>
                  runMockAction(
                    "El historial completo de pedidos estará disponible próximamente.",
                  )
                }
              >
                <PackageSearch size={17} aria-hidden="true" />
                Mis pedidos
              </button>
              <button
                className="profile-logout"
                type="button"
                role="menuitem"
                onClick={() => {
                  close();
                  void onLogout();
                }}
              >
                <LogOut size={17} aria-hidden="true" />
                Cerrar sesión
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
