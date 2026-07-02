export type ProductCategory = "mujer" | "hombre" | "infantil" | "accesorios";

export interface MockProduct {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  previousPrice?: number;
  featured?: boolean;
}

/**
 * Catálogo local de referencia. No está conectado a carrito, favoritos,
 * checkout, autenticación ni servicios externos.
 */
export const mockProducts: ReadonlyArray<MockProduct> = [
  {
    id: "casaca-impermeable",
    name: "Casaca impermeable",
    category: "mujer",
    price: 248,
    previousPrice: 299,
    featured: true,
  },
  {
    id: "casaca-acolchada-nina",
    name: "Casaca acolchada para niña",
    category: "infantil",
    price: 279,
  },
  {
    id: "casaca-impermeable-nino",
    name: "Casaca impermeable para niño",
    category: "infantil",
    price: 300,
  },
  {
    id: "chompa-lana",
    name: "Chompa de lana",
    category: "mujer",
    price: 150,
  },
  {
    id: "casaca-termica-infantil",
    name: "Casaca térmica infantil",
    category: "infantil",
    price: 129,
    featured: true,
  },
];
