import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { Header } from "./components/Header";
import { getPageFromPath, navigateTo, type Page } from "./navigation";
import {
  HomePageSkeleton,
  OffersPageSkeleton,
  CartPageSkeleton,
  FavoritesPageSkeleton,
  ProfilePageSkeleton,
  CheckoutPageSkeleton,
  GenericPageSkeleton,
} from "./components/skeletons/PageSkeleton";
import "./app.css";

const routeImports = {
  inicio: () => import("@/pages/home/HomePage"),
  nosotros: () => import("@/pages/nosotros/NosotrosPage"),
  ofertas: () => import("@/pages/ofertas/OffersPage"),
  contacto: () => import("@/pages/contacto/ContactPage"),
  mujer: () => import("@/pages/mujer/MujerPage"),
  hombre: () => import("@/pages/hombre/HombrePage"),
  mascotas: () => import("@/pages/mascotas/MascotasPage"),
  favoritos: () => import("@/pages/favoritos/FavoritosPage"),
  perfil: () => import("@/pages/perfil/PerfilPage"),
  checkout: () => import("@/pages/checkout/CheckoutPage"),
  carrito: () => import("@/pages/carrito/CarritoPage"),
};

const skeletons: Record<Page, () => ReactNode> = {
  inicio: HomePageSkeleton,
  nosotros: GenericPageSkeleton,
  ofertas: OffersPageSkeleton,
  contacto: GenericPageSkeleton,
  mujer: OffersPageSkeleton,
  hombre: OffersPageSkeleton,
  ninos: OffersPageSkeleton,
  mascotas: OffersPageSkeleton,
  favoritos: FavoritesPageSkeleton,
  perfil: ProfilePageSkeleton,
  checkout: CheckoutPageSkeleton,
  carrito: CartPageSkeleton,
};

const HomePage = lazy(routeImports.inicio);
const NosotrosPage = lazy(routeImports.nosotros);
const OffersPage = lazy(routeImports.ofertas);
const ContactPage = lazy(routeImports.contacto);
const MujerPage = lazy(routeImports.mujer);
const HombrePage = lazy(routeImports.hombre);
const MascotasPage = lazy(routeImports.mascotas);
const FavoritesPage = lazy(routeImports.favoritos);
const ProfilePage = lazy(routeImports.perfil);
const CheckoutPage = lazy(routeImports.checkout);
const CartPage = lazy(routeImports.carrito);

const pages: Record<Page, React.LazyExoticComponent<React.ComponentType>> = {
  inicio: HomePage,
  nosotros: NosotrosPage,
  ofertas: OffersPage,
  contacto: ContactPage,
  mujer: MujerPage,
  hombre: HombrePage,
  ninos: OffersPage,
  mascotas: MascotasPage,
  favoritos: FavoritesPage,
  perfil: ProfilePage,
  checkout: CheckoutPage,
  carrito: CartPage,
};

export default function App() {
  const [page, setPage] = useState<Page>(() =>
    getPageFromPath(window.location.pathname),
  );

  // Preload other lazy components in the background when browser is idle
  useEffect(() => {
    const preloadRoutes = () => {
      Object.values(routeImports).forEach((preloadFn) => {
        try {
          preloadFn();
        } catch (e) {
          console.error("Failed to preload chunk", e);
        }
      });
    };

    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(() => preloadRoutes());
    } else {
      const timer = setTimeout(preloadRoutes, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Stabilize page change scroll reset using requestAnimationFrame
  useEffect(() => {
    const animFrame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return () => cancelAnimationFrame(animFrame);
  }, [page]);

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
      <main className="min-h-screen w-full">
        <Suspense
          fallback={(() => {
            const SkeletonComponent = skeletons[page] || GenericPageSkeleton;
            return <SkeletonComponent />;
          })()}
        >
          <div key={page} className="animate-page-enter">
            <CurrentPage />
          </div>
        </Suspense>
      </main>
    </div>
  );
}
