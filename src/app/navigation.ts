export type Page =
  | "inicio"
  | "nosotros"
  | "ofertas"
  | "contacto"
  | "mujer"
  | "hombre"
  | "mascotas";

export const NAV_ITEMS: ReadonlyArray<{
  id: Page;
  label: string;
  path: string;
}> = [
  { id: "inicio", label: "Inicio", path: "/" },
  { id: "nosotros", label: "Nosotros", path: "/nosotros" },
  { id: "ofertas", label: "Ofertas", path: "/ofertas" },
  { id: "contacto", label: "Contacto", path: "/contacto" },
];

export const PAGE_PATHS = Object.fromEntries(
  [
    ...NAV_ITEMS,
    { id: "mujer", path: "/mujer" },
    { id: "hombre", path: "/hombre" },
    { id: "mascotas", path: "/mascotas" },
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
  window.scrollTo({ top: 0, behavior: "smooth" });
}
