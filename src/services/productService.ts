import type { CatalogProduct, ProductRow } from "@/types/product";
import { API_BASE_URL } from "@/config/api";

function repairText(value: string | null) {
  if (!value) return value;

  let currentValue = value;
  for (let attempt = 0; attempt < 2; attempt += 1) {
    if (!/[ÃÂ]/.test(currentValue)) break;
    try {
      const bytes = Uint8Array.from(
        Array.from(currentValue).map((character) => character.charCodeAt(0)),
      );
      const decodedValue = new TextDecoder("utf-8", {
        fatal: false,
      }).decode(bytes);
      if (!decodedValue || decodedValue === currentValue) break;
      currentValue = decodedValue;
    } catch {
      break;
    }
  }

  return currentValue;
}

function toOptionalNumber(value: number | string | null) {
  if (value === null) return undefined;
  const parsedValue = Number(value);
  return Number.isFinite(parsedValue) ? parsedValue : undefined;
}

function mapProduct(row: ProductRow): CatalogProduct {
  return {
    id: row.slug,
    slug: row.slug,
    productReference: row.slug,
    name: repairText(row.name) ?? row.name,
    image: row.image_url,
    price: Number(row.price),
    previousPrice: toOptionalNumber(row.compare_at_price),
    badge: repairText(row.badge) ?? undefined,
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
