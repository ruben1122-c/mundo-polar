import { ASSETS } from "@/config/assets";
import type { Page } from "@/app/navigation";

export interface StoreProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  previousPrice?: number;
  badge?: string;
}

export interface StoreCategory {
  id: string;
  name: string;
  image: string;
  destination: Page;
}

export interface CollectionConfig {
  page: "mujer" | "hombre" | "mascotas";
  eyebrow: string;
  title: string;
  description: string;
  hero: string;
  cta: string;
  ctaDestination: Page;
  products: ReadonlyArray<StoreProduct>;
  promoTitle: string;
  promoDescription: string;
  promoImage: string;
}

export const homeCategories: ReadonlyArray<StoreCategory> = [
  {
    id: "mujer",
    name: "Mujer",
    image: ASSETS.home.categoryWomen,
    destination: "mujer",
  },
  {
    id: "hombre",
    name: "Hombre",
    image: ASSETS.home.categoryMen,
    destination: "hombre",
  },
  {
    id: "infantil",
    name: "Niños",
    image: ASSETS.home.categoryKids,
    destination: "ofertas",
  },
  {
    id: "mascotas",
    name: "Mascotas",
    image: ASSETS.home.categoryPets,
    destination: "mascotas",
  },
];

export const featuredProducts: ReadonlyArray<StoreProduct> = [
  {
    id: "chaqueta-capucha",
    name: "Chaqueta con capucha marrón",
    image: ASSETS.products.hoodedBrownJacket,
    price: 50,
  },
  {
    id: "abrigo-corto",
    name: "Abrigo corto marrón",
    image: ASSETS.products.shortBrownCoat,
    price: 500,
  },
  {
    id: "sueter-beige",
    name: "Suéter de poliéster beige",
    image: ASSETS.products.beigeSweater,
    price: 400,
  },
  {
    id: "camiseta-algodon",
    name: "Camiseta de algodón grueso",
    image: ASSETS.products.gildanHeavyCottonShirt,
    price: 189,
    previousPrice: 200,
    badge: "-6%",
  },
  {
    id: "sueter-cuello-alto",
    name: "Suéter de cuello alto",
    image: ASSETS.products.turtleneckSweater,
    price: 125,
  },
];

export const offerProducts: ReadonlyArray<StoreProduct> = [
  {
    id: "casaca-impermeable",
    name: "Casaca impermeable",
    image: ASSETS.products.waterproofJacket,
    price: 248,
    previousPrice: 299,
    badge: "-17%",
  },
  {
    id: "capa-termica",
    name: "Capa térmica de cuello alto",
    image: ASSETS.products.turtleneckBaseLayer,
    price: 50,
    previousPrice: 60,
  },
  {
    id: "polo-cuello-alto",
    name: "Polo térmico de cuello alto",
    image: ASSETS.products.turtleneckSlimFit,
    price: 76,
    previousPrice: 85,
    badge: "-10%",
  },
  {
    id: "vestido-tejido",
    name: "Vestido tejido de invierno",
    image: ASSETS.products.knitDress,
    price: 99,
    previousPrice: 118,
  },
  {
    id: "top-rayas",
    name: "Top tejido a rayas",
    image: ASSETS.products.stripedBrownTop,
    price: 89,
  },
  {
    id: "medias-lana",
    name: "Medias de lana",
    image: ASSETS.products.woolSocks,
    price: 45,
  },
  {
    id: "botas-invierno",
    name: "Botas de invierno",
    image: ASSETS.products.winterBoots,
    price: 249,
  },
  {
    id: "polo-azul",
    name: "Polo azul para hombre",
    image: ASSETS.products.mensBluePolo,
    price: 79,
  },
  {
    id: "gorro-lana",
    name: "Gorro de lana",
    image: ASSETS.products.woolBeanie,
    price: 50,
  },
  {
    id: "orejeras",
    name: "Orejeras de invierno",
    image: ASSETS.products.winterHeadband,
    price: 60,
  },
  {
    id: "top-tejido",
    name: "Top tejido",
    image: ASSETS.products.knitTop,
    price: 89,
  },
  {
    id: "sueter-invierno",
    name: "Suéter de invierno",
    image: ASSETS.products.winterSweater,
    price: 149,
    previousPrice: 179,
  },
];

const womanProducts: ReadonlyArray<StoreProduct> = [
  { id: "w1", name: "Botas altas", image: ASSETS.mujer.img42, price: 90, previousPrice: 200, badge: "-17%" },
  { id: "w2", name: "Conjunto de invierno chic", image: ASSETS.mujer.imgWomensRibbedTurtleneckBaseLayerUnderShirts, price: 210, previousPrice: 400 },
  { id: "w3", name: "Polo térmico", image: ASSETS.mujer.imgAdagroWomensTShirtsTurtleNeckSlimFitTee, price: 76, previousPrice: 85 },
  { id: "w4", name: "Vestido tejido", image: ASSETS.mujer.imgTommyHilfigerWomensKnitSheathDress, price: 129 },
  { id: "w5", name: "Guantes de invierno", image: ASSETS.mujer.imgOddCoolSleeveVentCollarKnit, price: 50 },
  { id: "w6", name: "Botas polares", image: ASSETS.mujer.imgOddCoolSleeveVentCollarKnit1, price: 100 },
  { id: "w7", name: "Casaca de invierno", image: ASSETS.mujer.imgOddCoolSleeveVentCollarKnit2, price: 160 },
  { id: "w8", name: "Conjunto polar", image: ASSETS.mujer.imgOddCoolSleeveVentCollarKnit3, price: 300 },
];

const manProducts: ReadonlyArray<StoreProduct> = [
  { id: "m1", name: "Casaca térmica andina", image: ASSETS.hombre.imgImage46, price: 248, previousPrice: 299, badge: "-17%" },
  { id: "m2", name: "Polar clásico para hombre", image: ASSETS.hombre.imgImage45, price: 50, previousPrice: 60 },
  { id: "m3", name: "Chaqueta impermeable ártica", image: ASSETS.hombre.imgImage48, price: 76, previousPrice: 85 },
  { id: "m4", name: "Suéter nórdico de cuello alto", image: ASSETS.hombre.imgImage49, price: 58 },
  { id: "m5", name: "Casaca polar expedición", image: ASSETS.hombre.imgImage50, price: 279 },
  { id: "m6", name: "Chaqueta térmica Everest", image: ASSETS.hombre.imgImage54, price: 150 },
  { id: "m7", name: "Chaleco polar explorador", image: ASSETS.hombre.imgImage55, price: 249 },
  { id: "m8", name: "Suéter alpino prémium", image: ASSETS.hombre.imgImage51, price: 250 },
];

const petProducts: ReadonlyArray<StoreProduct> = [
  { id: "p1", name: "Bufanda polar para mascota", image: ASSETS.mascotas.imgImage46, price: 35 },
  { id: "p2", name: "Suéter tejido beige para mascota", image: ASSETS.mascotas.imgImage45, price: 55 },
  { id: "p3", name: "Impermeable gris con capucha", image: ASSETS.mascotas.imgImage48, price: 75 },
  { id: "p4", name: "Chaleco acolchado azul marino", image: ASSETS.mascotas.imgImage49, price: 65 },
  { id: "p5", name: "Botitas térmicas camel", image: ASSETS.mascotas.imgOddCoolSleeveVentCollarKnit, price: 60 },
  { id: "p6", name: "Gorro tejido con pompón", image: ASSETS.mascotas.imgOddCoolSleeveVentCollarKnit1, price: 40 },
  { id: "p7", name: "Conjunto térmico crema", image: ASSETS.mascotas.imgOddCoolSleeveVentCollarKnit2, price: 70 },
  { id: "p8", name: "Abrigo acolchado rosa", image: ASSETS.mascotas.imgOddCoolSleeveVentCollarKnit3, price: 85 },
];

export const collections: Record<CollectionConfig["page"], CollectionConfig> = {
  mujer: {
    page: "mujer",
    eyebrow: "Colección para mujer",
    title: "Abrígate con estilo",
    description:
      "Prendas diseñadas para acompañarte con comodidad y elegancia durante todo el invierno.",
    hero: ASSETS.mujer.imgRectangle143,
    cta: "Ver ofertas",
    ctaDestination: "ofertas",
    products: womanProducts,
    promoTitle: "Oferta de temporada",
    promoDescription:
      "Descubre casacas, conjuntos térmicos y accesorios seleccionados para ella.",
    promoImage: ASSETS.mujer.imgCmsBanner01Jpg,
  },
  hombre: {
    page: "hombre",
    eyebrow: "Colección para hombre",
    title: "Protección para cada día",
    description:
      "Prendas resistentes, cómodas y cálidas para afrontar el invierno con estilo.",
    hero: ASSETS.hombre.imgImage68,
    cta: "Ver ofertas",
    ctaDestination: "ofertas",
    products: manProducts,
    promoTitle: "Oferta de temporada",
    promoDescription:
      "Casacas, polares y capas térmicas para mantenerte protegido del frío.",
    promoImage: ASSETS.hombre.imgCmsBanner01Jpg,
  },
  mascotas: {
    page: "mascotas",
    eyebrow: "Colección para mascotas",
    title: "Abrigo para tu mejor compañero",
    description:
      "Ropa cómoda y cálida para que perros y gatos también disfruten del invierno.",
    hero: ASSETS.mascotas.img13,
    cta: "Consultar personalización",
    ctaDestination: "contacto",
    products: petProducts,
    promoTitle: "Diseñado para tus mascotas",
    promoDescription:
      "Prendas abrigadoras pensadas para acompañar sus paseos con comodidad y estilo.",
    promoImage: ASSETS.mascotas.imgCmsBanner01Jpg,
  },
};

export const winterCategories = [
  { name: "Casacas", image: ASSETS.ofertas.categoryJackets },
  { name: "Conjuntos térmicos", image: ASSETS.ofertas.categoryThermalSets },
  { name: "Bufandas", image: ASSETS.ofertas.categoryScarves },
  { name: "Guantes", image: ASSETS.ofertas.categoryGloves },
  { name: "Botas", image: ASSETS.ofertas.categoryBoots },
] as const;
