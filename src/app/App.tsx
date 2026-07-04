import { lazy, Suspense, useEffect, useState, type ReactNode } from "react";
import { Header } from "./components/Header";
import {
  consumeAuthReturnPage,
  getPageFromPath,
  navigateTo,
  setAuthReturnPage,
  type Page,
} from "./navigation";
import { useAuth } from "./context/AuthContext";
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
  ninos: () => import("@/pages/ninos/NinosPage"),
  mascotas: () => import("@/pages/mascotas/MascotasPage"),
  favoritos: () => import("@/pages/favoritos/FavoritosPage"),
  perfil: () => import("@/pages/perfil/PerfilPage"),
  checkout: () => import("@/pages/checkout/CheckoutPage"),
  carrito: () => import("@/pages/carrito/CarritoPage"),
  ayuda: () => import("@/pages/ayuda/HelpPage"),
  login: () => import("@/pages/auth/LoginPage"),
  registro: () => import("@/pages/auth/RegistroPage"),
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
  ayuda: GenericPageSkeleton,
  login: GenericPageSkeleton,
  registro: GenericPageSkeleton,
};

const HomePage = lazy(routeImports.inicio);
const NosotrosPage = lazy(routeImports.nosotros);
const OffersPage = lazy(routeImports.ofertas);
const ContactPage = lazy(routeImports.contacto);
const MujerPage = lazy(routeImports.mujer);
const HombrePage = lazy(routeImports.hombre);
const NinosPage = lazy(routeImports.ninos);
const MascotasPage = lazy(routeImports.mascotas);
const FavoritesPage = lazy(routeImports.favoritos);
const ProfilePage = lazy(routeImports.perfil);
const CheckoutPage = lazy(routeImports.checkout);
const CartPage = lazy(routeImports.carrito);
const HelpPage = lazy(routeImports.ayuda);
const LoginPage = lazy(routeImports.login);
const RegistroPage = lazy(routeImports.registro);

const pages: Record<Page, React.LazyExoticComponent<React.ComponentType>> = {
  inicio: HomePage,
  nosotros: NosotrosPage,
  ofertas: OffersPage,
  contacto: ContactPage,
  mujer: MujerPage,
  hombre: HombrePage,
  ninos: NinosPage,
  mascotas: MascotasPage,
  favoritos: FavoritesPage,
  perfil: ProfilePage,
  checkout: CheckoutPage,
  carrito: CartPage,
  ayuda: HelpPage,
  login: LoginPage,
  registro: RegistroPage,
};

const PROTECTED_PAGES = new Set<Page>(["perfil", "checkout"]);

export default function App() {
  const { isLoading: isAuthLoading, user } = useAuth();
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

  useEffect(() => {
    if (
      !isAuthLoading &&
      !user &&
      PROTECTED_PAGES.has(page)
    ) {
      setAuthReturnPage(page);
      navigateTo("login");
    }
  }, [isAuthLoading, page, user]);

  // Redirect logged-in users away from login and register pages
  useEffect(() => {
    if (!isAuthLoading && user && (page === "login" || page === "registro")) {
      navigateTo(consumeAuthReturnPage() ?? "perfil");
    }
  }, [isAuthLoading, page, user]);

  // Reset scroll to top instantly on page change
  useEffect(() => {
    window.scrollTo(0, 0);
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
  const awaitingAuthGuard =
    isAuthLoading || (!user && PROTECTED_PAGES.has(page));

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
            {awaitingAuthGuard ? <GenericPageSkeleton /> : <CurrentPage />}
          </div>
        </Suspense>
      </main>
    </div>
  );
}
