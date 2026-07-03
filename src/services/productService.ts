import type { CatalogProduct, ProductRow } from "@/types/product";
import { API_BASE_URL } from "@/config/api";

function toOptionalNumber(value: number | string | null) {
  if (value === null) return undefined;
  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) ? parsedValue : undefined;
}

function mapProduct(row: ProductRow): CatalogProduct {
  return {
    id: row.id,
    name: row.name,
    image: row.image_url,
    price: Number(row.price),
    previousPrice: toOptionalNumber(row.compare_at_price),
    badge: row.badge ?? undefined,
    categorySlug: row.category_slug,
    isFeatured: row.is_featured,
    isNew: row.is_new,
    isOnSale: row.is_on_sale,
    sortOrder: row.sort_order,
  };
}

export async function fetchCatalogProducts(
  signal?: AbortSignal,
): Promise<CatalogProduct[]> {
  const response = await fetch(`${API_BASE_URL}/products`, { signal });
  if (!response.ok) {
    throw new Error(
      `No se pudo cargar el catálogo (HTTP ${response.status}).`,
    );
  }

  const data = (await response.json()) as ProductRow[];
  return data.map(mapProduct);
}
