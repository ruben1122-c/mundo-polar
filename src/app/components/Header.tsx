import { OptimizedImage } from "@/app/components/OptimizedImage";
import { ASSETS } from "@/config/assets";
import {
  mockProducts,
  type ProductCategory,
} from "@/data/products";
import { Search, ShoppingCart } from "lucide-react";
import { Fragment, useMemo, useState } from "react";
import { useShop } from "../context/ShopContext";
import { useAuth } from "../context/AuthContext";
import { NAV_ITEMS, type Page } from "../navigation";
import { CategoryDropdown } from "./header/CategoryDropdown";
import { FavoritesPopover } from "./header/FavoritesPopover";
import { ProfileDropdown } from "./header/ProfileDropdown";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

type OpenPanel = "categories" | "favorites" | "profile" | null;

const CATEGORY_PAGES: Record<ProductCategory, Page> = {
  mujer: "mujer",
  hombre: "hombre",
  infantil: "ninos",
  mascotas: "mascotas",
  accesorios: "ofertas",
};

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { cartCount, favoriteItems } = useShop();
  const { profile, signOut, user } = useAuth();
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
  const [openPanel, setOpenPanel] = useState<OpenPanel>(null);
  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es");
    if (!normalized) return [];

    return mockProducts
      .filter((product) =>
        product.name.toLocaleLowerCase("es").includes(normalized),
      )
      .slice(0, 5);
  }, [query]);

  const openProductCategory = (category: ProductCategory) => {
    setQuery("");
    setOpenPanel(null);
    onNavigate(CATEGORY_PAGES[category]);
  };

  const navigate = (page: Page) => {
    setNotice("");
    setOpenPanel(null);
    onNavigate(page);
  };

  const togglePanel = (panel: Exclude<OpenPanel, null>, open: boolean) => {
    setNotice("");
    setOpenPanel(open ? panel : null);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setNotice("Sesión cerrada correctamente.");
      if (currentPage === "perfil" || currentPage === "checkout") {
        onNavigate("inicio");
      }
    } catch (reason: unknown) {
      setNotice(
        reason instanceof Error
          ? reason.message
          : "No se pudo cerrar la sesión.",
      );
    }
  };

  return (
    <header className="site-header">
      <div className="header-main">
        <button
          className="brand-button"
          type="button"
          onClick={() => navigate("inicio")}
          aria-label="Ir al inicio"
        >
          <OptimizedImage loading="eager" src={ASSETS.logo} alt="Mundo Polar" />
        </button>

        <nav className="primary-nav" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <Fragment key={item.id}>
              <button
                className={
                  currentPage === item.id ? "nav-link active" : "nav-link"
                }
                type="button"
                onClick={() => navigate(item.id)}
                aria-current={currentPage === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
              {item.id === "nosotros" ? (
                <CategoryDropdown
                  currentPage={currentPage}
                  open={openPanel === "categories"}
                  onNavigate={navigate}
                  onOpenChange={(open) => togglePanel("categories", open)}
                />
              ) : null}
            </Fragment>
          ))}
        </nav>

        <div className="header-tools" aria-label="Herramientas">
          <form
            className="search-placeholder"
            role="search"
            onSubmit={(event) => {
              event.preventDefault();
              if (results[0]) openProductCategory(results[0].category);
            }}
          >
            <Search size={20} aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar productos"
              aria-label="Buscar productos"
            />
            {query.trim() ? (
              <div className="search-results">
                {results.length ? (
                  results.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => openProductCategory(product.category)}
                    >
                      <span>{product.name}</span>
                      <strong>S/ {product.price.toFixed(2)}</strong>
                    </button>
                  ))
                ) : (
                  <p>No encontramos productos.</p>
                )}
              </div>
            ) : null}
          </form>

          <div className="commerce-placeholders">
            <FavoritesPopover
              items={favoriteItems}
              open={openPanel === "favorites"}
              onNavigate={navigate}
              onOpenChange={(open) => togglePanel("favorites", open)}
            />
            <button
              className="icon-placeholder"
              type="button"
              aria-label={`Abrir carrito, ${cartCount} productos`}
              title="Abrir carrito"
              onClick={() => navigate("carrito")}
            >
              <ShoppingCart size={22} aria-hidden="true" />
              {cartCount > 0 ? (
                <span key={cartCount} className="icon-count animate-badge-bounce">{cartCount}</span>
              ) : null}
            </button>
            <ProfileDropdown
              open={openPanel === "profile"}
              onNavigate={navigate}
              onMockAction={setNotice}
              onOpenChange={(open) => togglePanel("profile", open)}
              isAuthenticated={Boolean(user)}
              displayName={
                profile
                  ? `${profile.first_name} ${profile.last_name}`.trim()
                  : user?.email
              }
              email={user?.email}
              onLogout={handleLogout}
            />
          </div>

          {notice ? (
            <button
              className="header-notice"
              type="button"
              onClick={() => setNotice("")}
              aria-live="polite"
            >
              {notice}
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
}
