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
    id: "abrigo-largo-beige-mujer",
    name: "Abrigo largo beige",
    category: "mujer",
    price: 329,
    previousPrice: 389,
    featured: true,
  },
  {
    id: "conjunto-infantil-azul-marino",
    name: "Conjunto infantil azul marino",
    category: "infantil",
    price: 239,
  },
  {
    id: "casaca-infantil-roja",
    name: "Casaca infantil roja",
    category: "infantil",
    price: 219,
  },
  {
    id: "sueter-nordico-azul-marino",
    name: "Suéter nórdico azul marino",
    category: "hombre",
    price: 189,
  },
  {
    id: "casaca-puffer-negra",
    name: "Casaca puffer negra",
    category: "hombre",
    price: 259,
    featured: true,
  },
  {
    id: "sueter-mascota-pinguino-azul",
    name: "Suéter mascota pingüino azul",
    category: "mascotas",
    price: 84,
    featured: true,
  },
  {
    id: "chaleco-mascota-verde",
    name: "Chaleco verde para mascota",
    category: "mascotas",
    price: 82,
  },
  {
    id: "botas-termicas-rosa",
    name: "Botas térmicas rosas",
    category: "infantil",
    price: 119,
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
