export type CatalogScope =
  | "featured"
  | "new"
  | "offers"
  | "mujer"
  | "hombre"
  | "mascotas"
  | string;

export interface CatalogProduct {
  id: string;
  slug?: string;
  productReference?: string;
  name: string;
  image: string;
  price: number;
  previousPrice?: number;
  badge?: string;
  categorySlug?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isOnSale?: boolean;
  sortOrder?: number;
}

export interface ProductRow {
  id: string;
  slug: string;
  name: string;
  image_url: string;
  price: number | string;
  compare_at_price: number | string | null;
  badge: string | null;
  is_featured: boolean;
  is_new: boolean;
  is_on_sale: boolean;
  sort_order: number;
  category_slug: string;
}
