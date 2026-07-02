import { OptimizedImage } from "@/app/components/OptimizedImage";
import { useMemo, useState } from "react";
import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import { ASSETS } from "@/config/assets";
import { mockProducts, type ProductCategory } from "@/data/products";
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

const CATEGORY_PAGES: Record<ProductCategory, Page> = {
  mujer: "mujer",
  hombre: "hombre",
  infantil: "ofertas",
  mascotas: "mascotas",
  accesorios: "ofertas",
};

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [query, setQuery] = useState("");
  const [notice, setNotice] = useState("");
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
    onNavigate(CATEGORY_PAGES[category]);
  };

  return (
    <header className="site-header">
      <div className="header-main">
        <button
          className="brand-button"
          type="button"
          onClick={() => onNavigate("inicio")}
          aria-label="Ir al inicio"
        >
          <OptimizedImage loading="eager" src={ASSETS.logo} alt="Mundo Polar" />
        </button>

        <nav className="primary-nav" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={currentPage === item.id ? "nav-link active" : "nav-link"}
              type="button"
              onClick={() => onNavigate(item.id)}
              aria-current={currentPage === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
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
            {query.trim() && (
              <div className="search-results">
                {results.length ? (
                  results.map((product) => (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => openProductCategory(product.category)}
                    >
                      <span>{product.name}</span>
                      <strong>S/ {product.price}</strong>
                    </button>
                  ))
                ) : (
                  <p>No encontramos productos.</p>
                )}
              </div>
            )}
          </form>
          <div className="commerce-placeholders">
            {placeholders.map(({ label, Icon }) => (
              <button
                key={label}
                className="icon-placeholder"
                type="button"
                aria-label={label}
                title={label}
                onClick={() => setNotice(label)}
              >
                <Icon size={22} aria-hidden="true" />
              </button>
            ))}
          </div>
          {notice && (
            <button
              className="header-notice"
              type="button"
              onClick={() => setNotice("")}
              aria-live="polite"
            >
              {notice}. Esta función se habilitará más adelante.
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
