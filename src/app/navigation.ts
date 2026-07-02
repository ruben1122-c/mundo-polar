export type Page = "inicio" | "nosotros" | "ofertas" | "contacto";

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
  NAV_ITEMS.map(({ id, path }) => [id, path]),
) as Record<Page, string>;

export function getPageFromPath(pathname: string): Page {
  return NAV_ITEMS.find(({ path }) => path === pathname)?.id ?? "inicio";
}
