import { ASSETS } from "@/config/assets";

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

export interface FavoriteProduct {
  id: string;
  name: string;
  details: string;
  image: string;
  price: number;
  badge?: string;
}

export interface CheckoutProduct extends FavoriteProduct {
  quantity: number;
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

export const favoriteProducts: ReadonlyArray<FavoriteProduct> = [
  {
    id: "favorito-conjunto-termico",
    name: "Conjunto térmico",
    details: "Beige · Talla S",
    image: ASSETS.products.polarSet,
    price: 299,
  },
  {
    id: "favorito-conjunto-moon",
    name: "Conjunto Moon",
    details: "Negro · Talla XS",
    image: ASSETS.products.gildanHeavyCottonShirt,
    price: 70,
  },
  {
    id: "favorito-seleccion-peru",
    name: "Selección Perú 2024",
    details: "Blanco/Rojo · Talla S",
    image: ASSETS.products.stripedBrownTop,
    price: 89.9,
    badge: "Camiseta personalizada",
  },
];

export const checkoutProducts: ReadonlyArray<CheckoutProduct> = [
  {
    id: "checkout-conjunto-moon",
    name: "Conjunto Moon",
    details: "Negro · Talla XS",
    image: ASSETS.products.gildanHeavyCottonShirt,
    price: 70,
    quantity: 1,
  },
  {
    id: "checkout-seleccion-peru",
    name: "Selección Perú 2024",
    details: "Blanco/Rojo · Talla S",
    image: ASSETS.products.stripedBrownTop,
    price: 89.9,
    quantity: 2,
    badge: "Camiseta personalizada",
  },
];
