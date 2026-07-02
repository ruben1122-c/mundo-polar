import { lazy, Suspense, useEffect, useState } from "react";
import { FigmaCanvas } from "./components/FigmaCanvas";
import { Header } from "./components/Header";
import { getPageFromPath, type Page, PAGE_PATHS } from "./navigation";
import "./app.css";

const HomePage = lazy(() => import("@/pages/home/HomePage"));
const NosotrosPage = lazy(() => import("@/pages/nosotros/NosotrosPage"));
const OffersPage = lazy(() => import("@/pages/ofertas/OffersPage"));
const ContactPage = lazy(() => import("@/pages/contacto/ContactPage"));

const pages: Record<Page, React.LazyExoticComponent<React.ComponentType>> = {
  inicio: HomePage,
  nosotros: NosotrosPage,
  ofertas: OffersPage,
  contacto: ContactPage,
};

export default function App() {
  const [page, setPage] = useState<Page>(() =>
    getPageFromPath(window.location.pathname),
  );

  useEffect(() => {
    const onPopState = () => setPage(getPageFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (target: Page) => {
    if (target !== page) {
      window.history.pushState({}, "", PAGE_PATHS[target]);
      setPage(target);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const CurrentPage = pages[page];

  return (
    <div className="site-shell">
      <Header currentPage={page} onNavigate={navigate} />
      <main>
        <Suspense
          fallback={
            <div className="page-loading" role="status">
              Cargando…
            </div>
          }
        >
          <FigmaCanvas key={page} cropTop={page === "contacto" ? 0 : 72}>
            <CurrentPage />
          </FigmaCanvas>
        </Suspense>
      </main>
    </div>
  );
}
