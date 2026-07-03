export type Page =
  | "inicio"
  | "nosotros"
  | "ofertas"
  | "contacto"
  | "mujer"
  | "hombre"
  | "ninos"
  | "mascotas"
  | "favoritos"
  | "perfil"
  | "checkout"
  | "carrito";

export const NAV_ITEMS: ReadonlyArray<{
  id: Page;
  label: string;
  path: string;
}> = [
  { id: "inicio", label: "Inicio", path: "/" },
  { id: "nosotros", label: "Nosotros", path: "/nosotros" },
  { id: "ofertas", label: "Ofertas", path: "/ofertas" },
  { id: "contacto", label: "Contactos", path: "/contacto" },
];

export const PAGE_PATHS = Object.fromEntries(
  [
    ...NAV_ITEMS,
    { id: "mujer", path: "/mujer" },
    { id: "hombre", path: "/hombre" },
    { id: "ninos", path: "/ninos" },
    { id: "mascotas", path: "/mascotas" },
    { id: "favoritos", path: "/favoritos" },
    { id: "perfil", path: "/perfil" },
    { id: "checkout", path: "/checkout" },
    { id: "carrito", path: "/carrito" },
  ].map(({ id, path }) => [id, path]),
) as Record<Page, string>;

export function getPageFromPath(pathname: string): Page {
  const match = Object.entries(PAGE_PATHS).find(([, path]) => path === pathname);
  return (match?.[0] as Page | undefined) ?? "inicio";
}

export function navigateTo(target: Page) {
  const path = PAGE_PATHS[target];
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  }
}
