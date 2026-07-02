export type ProductCategory =
  | "mujer"
  | "hombre"
  | "infantil"
  | "mascotas"
  | "accesorios";

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
  {
    id: "polar-clasico-hombre",
    name: "Polar clásico para hombre",
    category: "hombre",
    price: 50,
    featured: true,
  },
  {
    id: "bufanda-polar-mascota",
    name: "Bufanda polar para mascota",
    category: "mascotas",
    price: 35,
  },
  {
    id: "sueter-tejido-mascota",
    name: "Suéter tejido para mascota",
    category: "mascotas",
    price: 55,
  },
];
