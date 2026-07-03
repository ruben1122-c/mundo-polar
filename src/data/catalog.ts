import { ASSETS } from "@/config/assets";
import type { Page } from "@/app/navigation";
import type { CatalogProduct } from "@/types/product";

export type StoreProduct = CatalogProduct;

export interface StoreCategory {
  id: string;
  name: string;
  image: string;
  destination: Page;
}

export interface CollectionVisualItem {
  id: string;
  title: string;
  image: string;
  alt: string;
  description?: string;
}

export interface CollectionSpotlight {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  tags?: ReadonlyArray<string>;
}

export interface CollectionGallery {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ReadonlyArray<CollectionVisualItem>;
}

export interface CollectionPromoTile {
  title: string;
  description: string;
  image: string;
  alt: string;
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
  spotlight: CollectionSpotlight;
  gallery: CollectionGallery;
  promoTiles: ReadonlyArray<CollectionPromoTile>;
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
    name: "Ninos",
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
    name: "Chaqueta con capucha marron",
    image: ASSETS.products.hoodedBrownJacket,
    price: 50,
  },
  {
    id: "abrigo-corto",
    name: "Abrigo corto marron",
    image: ASSETS.products.shortBrownCoat,
    price: 500,
  },
  {
    id: "sueter-beige",
    name: "Sueter de poliester beige",
    image: ASSETS.products.beigeSweater,
    price: 400,
  },
  {
    id: "camiseta-algodon",
    name: "Camiseta de algodon grueso",
    image: ASSETS.products.gildanHeavyCottonShirt,
    price: 189,
    previousPrice: 200,
    badge: "-6%",
  },
  {
    id: "sueter-cuello-alto",
    name: "Sueter de cuello alto",
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
    name: "Capa termica de cuello alto",
    image: ASSETS.products.turtleneckBaseLayer,
    price: 50,
    previousPrice: 60,
  },
  {
    id: "polo-cuello-alto",
    name: "Polo termico de cuello alto",
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
    name: "Sueter de invierno",
    image: ASSETS.products.winterSweater,
    price: 149,
    previousPrice: 179,
  },
];

const womanProducts: ReadonlyArray<StoreProduct> = [
  {
    id: "w1",
    name: "Botas altas",
    image: ASSETS.mujer.featuredBoots,
    price: 90,
    previousPrice: 200,
    badge: "-17%",
  },
  {
    id: "w2",
    name: "Conjunto de invierno chic",
    image: ASSETS.mujer.featuredWinterSet,
    price: 210,
    previousPrice: 400,
  },
  {
    id: "w3",
    name: "Polo termico",
    image: ASSETS.mujer.featuredThermalTop,
    price: 76,
    previousPrice: 85,
  },
  {
    id: "w4",
    name: "Vestido tejido",
    image: ASSETS.mujer.featuredKnitDress,
    price: 129,
  },
  {
    id: "w5",
    name: "Guantes de invierno",
    image: ASSETS.mujer.featuredGloves,
    price: 50,
  },
  {
    id: "w6",
    name: "Botas polares",
    image: ASSETS.mujer.featuredSnowBoots,
    price: 100,
  },
  {
    id: "w7",
    name: "Casaca de invierno",
    image: ASSETS.mujer.featuredPuffer,
    price: 160,
  },
  {
    id: "w8",
    name: "Conjunto polar",
    image: ASSETS.mujer.featuredPolarLook,
    price: 300,
  },
];

const manProducts: ReadonlyArray<StoreProduct> = [
  {
    id: "m1",
    name: "Casaca termica andina",
    image: ASSETS.hombre.featuredThermalJacket,
    price: 248,
    previousPrice: 299,
    badge: "-17%",
  },
  {
    id: "m2",
    name: "Polar clasico para hombre",
    image: ASSETS.hombre.featuredClassicPolar,
    price: 50,
    previousPrice: 60,
  },
  {
    id: "m3",
    name: "Chaqueta impermeable artica",
    image: ASSETS.hombre.featuredArcticShell,
    price: 76,
    previousPrice: 85,
  },
  {
    id: "m4",
    name: "Sueter nordico de cuello alto",
    image: ASSETS.hombre.featuredNordicSweater,
    price: 58,
  },
  {
    id: "m5",
    name: "Casaca polar expedicion",
    image: ASSETS.hombre.featuredExpeditionPuffer,
    price: 279,
  },
  {
    id: "m6",
    name: "Chaqueta termica Everest",
    image: ASSETS.hombre.featuredEverestJacket,
    price: 150,
  },
  {
    id: "m7",
    name: "Chaleco polar explorador",
    image: ASSETS.hombre.featuredExplorerVest,
    price: 249,
  },
  {
    id: "m8",
    name: "Sueter alpino premium",
    image: ASSETS.hombre.featuredPremiumSweater,
    price: 250,
  },
];

const petProducts: ReadonlyArray<StoreProduct> = [
  {
    id: "p1",
    name: "Bufanda polar para mascota",
    image: ASSETS.mascotas.featuredScarf,
    price: 35,
  },
  {
    id: "p2",
    name: "Sueter tejido beige para mascota",
    image: ASSETS.mascotas.featuredSweater,
    price: 55,
  },
  {
    id: "p3",
    name: "Impermeable gris con capucha",
    image: ASSETS.mascotas.featuredRaincoat,
    price: 75,
  },
  {
    id: "p4",
    name: "Chaleco acolchado azul marino",
    image: ASSETS.mascotas.featuredVest,
    price: 65,
  },
  {
    id: "p5",
    name: "Botitas termicas camel",
    image: ASSETS.mascotas.featuredBooties,
    price: 60,
  },
  {
    id: "p6",
    name: "Gorro tejido con pompon",
    image: ASSETS.mascotas.featuredBeanie,
    price: 40,
  },
  {
    id: "p7",
    name: "Conjunto termico crema",
    image: ASSETS.mascotas.featuredCreamSet,
    price: 70,
  },
  {
    id: "p8",
    name: "Abrigo acolchado rosa",
    image: ASSETS.mascotas.featuredPinkCoat,
    price: 85,
  },
];

const womenGallery: ReadonlyArray<CollectionVisualItem> = [
  {
    id: "wg-1",
    title: "Texturas suaves",
    image: ASSETS.mujer.editorialPortrait,
    alt: "Retrato editorial de la coleccion mujer",
    description: "Looks ligeros y calidos para el invierno.",
  },
  {
    id: "wg-2",
    title: "Accesorios esenciales",
    image: ASSETS.mujer.editorialScarf,
    alt: "Accesorio de invierno en tonos neutros",
    description: "Piezas faciles de combinar en capas.",
  },
  {
    id: "wg-3",
    title: "Capas para cada dia",
    image: ASSETS.mujer.editorialCoat,
    alt: "Abrigo claro para la coleccion mujer",
    description: "Siluetas comodas con acabado pulido.",
  },
  {
    id: "wg-4",
    title: "Detalle funcional",
    image: ASSETS.mujer.editorialAccessory,
    alt: "Accesorio tejido de la coleccion mujer",
    description: "Complementos pensados para el frio.",
  },
];

const menGallery: ReadonlyArray<CollectionVisualItem> = [
  {
    id: "mg-1",
    title: "Layering urbano",
    image: ASSETS.hombre.spotlightLayeredLook,
    alt: "Look completo de invierno para hombre",
    description: "Capas practicas para el ritmo diario.",
  },
  {
    id: "mg-2",
    title: "Proteccion total",
    image: ASSETS.hombre.spotlightBlackJacket,
    alt: "Chaqueta negra de invierno para hombre",
    description: "Abrigos listos para jornadas frias.",
  },
  {
    id: "mg-3",
    title: "Accesorios termicos",
    image: ASSETS.hombre.spotlightAccessories,
    alt: "Accesorios y prendas termicas para hombre",
    description: "Todo lo necesario para completar el outfit.",
  },
  {
    id: "mg-4",
    title: "Estilo esencial",
    image: ASSETS.hombre.spotlightAccent,
    alt: "Prenda destacada de la coleccion hombre",
    description: "Basicos funcionales para la temporada.",
  },
];

const petsGallery: ReadonlyArray<CollectionVisualItem> = [
  {
    id: "pg-1",
    title: "Paseos comodos",
    image: ASSETS.mascotas.galleryPuppy,
    alt: "Perro pequeno con abrigo claro",
    description: "Prendas ligeras para salidas diarias.",
  },
  {
    id: "pg-2",
    title: "Tejidos suaves",
    image: ASSETS.mascotas.galleryCat,
    alt: "Gato con accesorio tejido de invierno",
    description: "Texturas abrigadoras para dias frios.",
  },
  {
    id: "pg-3",
    title: "Abrigos listos",
    image: ASSETS.mascotas.galleryPoodle,
    alt: "Perro con look invernal listo para salir",
    description: "Capas funcionales y faciles de usar.",
  },
  {
    id: "pg-4",
    title: "Botitas y extras",
    image: ASSETS.mascotas.galleryBoots,
    alt: "Accesorios para mascota en tonos neutros",
    description: "Detalles que completan cada paseo.",
  },
];

export const collections: Record<CollectionConfig["page"], CollectionConfig> = {
  mujer: {
    page: "mujer",
    eyebrow: "Coleccion para mujer",
    title: "Abrigate con estilo",
    description:
      "Prendas disenadas para acompanarte con comodidad y elegancia durante todo el invierno.",
    hero: ASSETS.mujer.hero,
    cta: "Ver ofertas",
    ctaDestination: "ofertas",
    products: womanProducts,
    promoTitle: "Disenado para los dias mas frios",
    promoDescription:
      "Casacas, vestidos tejidos y accesorios en tonos neutros para una coleccion femenina y funcional.",
    promoImage: ASSETS.mujer.editorialFamily,
    spotlight: {
      eyebrow: "Nueva seleccion",
      title: "Looks pensados para toda la temporada",
      description:
        "Combinamos capas suaves, accesorios tejidos y piezas faciles de llevar para mantener el estilo sin sacrificar abrigo.",
      image: ASSETS.mujer.bannerPrimary,
      alt: "Banner editorial de la coleccion mujer",
      tags: ["Capas ligeras", "Texturas suaves", "Tonos neutros"],
    },
    gallery: {
      eyebrow: "Detalles visuales",
      title: "Inspiracion para tus proximos looks",
      description:
        "Una seleccion editorial con imagenes de apoyo tomadas de la referencia entregada.",
      items: womenGallery,
    },
    promoTiles: [
      {
        title: "Mas capas, menos esfuerzo",
        description:
          "Combina abrigos cortos, tejidos y accesorios con una paleta clara y elegante.",
        image: ASSETS.mujer.bannerPrimary,
        alt: "Promo principal de la coleccion mujer",
        destination: "ofertas",
      },
      {
        title: "Accesorios para cerrar el look",
        description:
          "Guantes, bufandas y prendas suaves para completar tu outfit de invierno.",
        image: ASSETS.mujer.bannerSecondary,
        alt: "Promo secundaria de la coleccion mujer",
        destination: "contacto",
      },
    ],
  },
  hombre: {
    page: "hombre",
    eyebrow: "Coleccion para hombre",
    title: "Proteccion para cada dia",
    description:
      "Prendas resistentes, comodas y calidas para afrontar el invierno con estilo.",
    hero: ASSETS.hombre.hero,
    cta: "Ver ofertas",
    ctaDestination: "ofertas",
    products: manProducts,
    promoTitle: "Abrigos listos para cada salida",
    promoDescription:
      "Prendas resistentes y versatiles para mantener el frio bajo control con un look sobrio.",
    promoImage: ASSETS.hombre.spotlightLifestyle,
    spotlight: {
      eyebrow: "Editorial de invierno",
      title: "Capas urbanas para dias de mucho frio",
      description:
        "La referencia muestra una narrativa mas lifestyle para hombre, asi que incorporamos las imagenes de modelos y accesorios ya cargadas en Cloudinary.",
      image: ASSETS.hombre.spotlightLifestyle,
      alt: "Modelos vistiendo looks de la coleccion hombre",
      tags: ["Polares", "Puffer jackets", "Accesorios termicos"],
    },
    gallery: {
      eyebrow: "Mas opciones",
      title: "Combinaciones listas para usar",
      description:
        "Prendas, accesorios y close-ups reutilizados desde la libreria existente de Cloudinary.",
      items: menGallery,
    },
    promoTiles: [
      {
        title: "Proteccion termica sin perder estilo",
        description:
          "Chaquetas, capas y chalecos en una seleccion pensada para el ritmo diario.",
        image: ASSETS.hombre.bannerPrimary,
        alt: "Promo principal de la coleccion hombre",
        destination: "ofertas",
      },
      {
        title: "Todo listo para la temporada",
        description:
          "Basicos funcionales para combinar con facilidad en ciudad o escapadas de invierno.",
        image: ASSETS.hombre.bannerSecondary,
        alt: "Promo secundaria de la coleccion hombre",
        destination: "contacto",
      },
    ],
  },
  mascotas: {
    page: "mascotas",
    eyebrow: "Coleccion para mascotas",
    title: "Abrigo para tu mejor companero",
    description:
      "Ropa comoda y calida para que perros y gatos tambien disfruten del invierno.",
    hero: ASSETS.mascotas.hero,
    cta: "Consultar personalizacion",
    ctaDestination: "contacto",
    products: petProducts,
    promoTitle: "Disenado para tus mascotas",
    promoDescription:
      "Abrigos, accesorios y conjuntos comodos para que perros y gatos disfruten el invierno contigo.",
    promoImage: ASSETS.mascotas.spotlightCompanions,
    spotlight: {
      eyebrow: "Coleccion mascota",
      title: "Paseos con mas abrigo y mejor presencia",
      description:
        "Usamos la foto principal con perro y gato para reflejar mejor la composicion de la referencia sin convertirla en un layout pegado.",
      image: ASSETS.mascotas.spotlightCompanions,
      alt: "Perros y gato usando ropa de invierno",
      tags: ["Perros", "Gatos", "Accesorios termicos"],
    },
    gallery: {
      eyebrow: "Favoritos de la temporada",
      title: "Looks y accesorios para cada paseo",
      description:
        "Imagenes de producto y apoyo visual ya existentes en Cloudinary, ahora ubicadas en bloques coherentes.",
      items: petsGallery,
    },
    promoTiles: [
      {
        title: "Abrigos para salir con estilo",
        description:
          "Capas acolchadas, ponchos y accesorios pensados para tus companeros de cuatro patas.",
        image: ASSETS.mascotas.bannerPrimary,
        alt: "Promo principal de mascotas",
        destination: "favoritos",
      },
      {
        title: "Mas detalles para consentirlos",
        description:
          "Una segunda franja visual con imagenes de la referencia para enriquecer la pagina sin recortar capturas.",
        image: ASSETS.mascotas.bannerSecondary,
        alt: "Promo secundaria de mascotas",
        destination: "contacto",
      },
    ],
  },
};

export const winterCategories = [
  { name: "Casacas", image: ASSETS.ofertas.categoryJackets },
  { name: "Conjuntos termicos", image: ASSETS.ofertas.categoryThermalSets },
  { name: "Bufandas", image: ASSETS.ofertas.categoryScarves },
  { name: "Guantes", image: ASSETS.ofertas.categoryGloves },
  { name: "Botas", image: ASSETS.ofertas.categoryBoots },
] as const;
