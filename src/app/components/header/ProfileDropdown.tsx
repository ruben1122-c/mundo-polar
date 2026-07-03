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
  email?: string;
  onLogout: () => Promise<void>;
}

export function ProfileDropdown({
  open,
  onNavigate,
  onMockAction,
  onOpenChange,
  isAuthenticated,
  displayName,
  email,
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
              <div className="profile-menu-header">
                <div className="profile-avatar-circle">
                  <UserRound size={20} aria-hidden="true" />
                </div>
                <div className="profile-info-details">
                  <strong>{displayName}</strong>
                  <span>{email}</span>
                </div>
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
                type="button"
                role="menuitem"
                onClick={() => {
                  close();
                  onNavigate("ayuda");
                }}
              >
                <CircleHelp size={17} aria-hidden="true" />
                Ayuda
              </button>
              <div className="profile-menu-divider" />
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
              <div className="profile-menu-divider" />
              <button
                type="button"
                role="menuitem"
                onClick={() => {
                  close();
                  onNavigate("ayuda");
                }}
              >
                <CircleHelp size={17} aria-hidden="true" />
                Ayuda
              </button>
            </>
          )}
        </div>
      ) : null}
    </div>
  );
}
