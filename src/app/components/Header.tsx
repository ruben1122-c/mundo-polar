import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { ASSETS } from "@/config/assets";
import { NAV_ITEMS, type Page } from "../navigation";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const placeholders = [
  { label: "Favoritos (próximamente)", Icon: Heart },
  { label: "Carrito (próximamente)", Icon: ShoppingCart },
  { label: "Usuario (próximamente)", Icon: UserRound },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="header-main">
        <button
          className="brand-button"
          onClick={() => onNavigate("inicio")}
          aria-label="Ir al inicio"
        >
          <img src={ASSETS.logo} alt="Mundo Polar" />
        </button>

        <nav className="primary-nav" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={currentPage === item.id ? "nav-link active" : "nav-link"}
              onClick={() => onNavigate(item.id)}
              aria-current={currentPage === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-tools" aria-label="Funciones futuras">
          <div className="search-placeholder" aria-label="Búsqueda (próximamente)">
            <Search size={20} aria-hidden="true" />
            <span>Buscar productos</span>
          </div>
          <div className="commerce-placeholders">
            {placeholders.map(({ label, Icon }) => (
              <button
                key={label}
                className="icon-placeholder"
                type="button"
                aria-label={label}
                title={label}
                onClick={(event) => event.preventDefault()}
              >
                <Icon size={22} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
