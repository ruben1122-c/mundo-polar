import { lazy, Suspense, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { getPageFromPath, navigateTo, type Page } from "./navigation";
import "./app.css";

const HomePage = lazy(() => import("@/pages/home/HomePage"));
const NosotrosPage = lazy(() => import("@/pages/nosotros/NosotrosPage"));
const OffersPage = lazy(() => import("@/pages/ofertas/OffersPage"));
const ContactPage = lazy(() => import("@/pages/contacto/ContactPage"));
const MujerPage = lazy(() => import("@/pages/mujer/MujerPage"));
const HombrePage = lazy(() => import("@/pages/hombre/HombrePage"));
const MascotasPage = lazy(() => import("@/pages/mascotas/MascotasPage"));

const pages: Record<Page, React.LazyExoticComponent<React.ComponentType>> = {
  inicio: HomePage,
  nosotros: NosotrosPage,
  ofertas: OffersPage,
  contacto: ContactPage,
  mujer: MujerPage,
  hombre: HombrePage,
  mascotas: MascotasPage,
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
    navigateTo(target);
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
          <CurrentPage />
        </Suspense>
      </main>
    </div>
  );
}
