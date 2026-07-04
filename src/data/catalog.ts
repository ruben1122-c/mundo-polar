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

export interface CollectionProductSection {
  eyebrow?: string;
  title: string;
  description?: string;
  products: ReadonlyArray<StoreProduct>;
}

export interface CollectionConfig {
  page: "mujer" | "hombre" | "ninos" | "mascotas";
  eyebrow: string;
  title: string;
  description: string;
  hero: string;
  cta: string;
  ctaDestination: Page;
  filterTags: ReadonlyArray<string>;
  products: ReadonlyArray<StoreProduct>;
  secondarySection: CollectionProductSection;
  bestsellerSection: CollectionProductSection;
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
    name: "Niños",
    image: ASSETS.home.categoryKids,
    destination: "ninos",
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
    id: "abrigo-largo-beige-mujer",
    name: "Abrigo largo beige",
    image: ASSETS.products.womensLongBeigeCoat,
    price: 329,
    previousPrice: 389,
    badge: "-15%",
  },
  {
    id: "sueter-nordico-azul-marino",
    name: "Suéter nórdico azul marino",
    image: ASSETS.products.mensNordicNavySweater,
    price: 189,
  },
  {
    id: "conjunto-infantil-azul-marino",
    name: "Conjunto infantil azul marino",
    image: ASSETS.products.kidsNavyWinterSet,
    price: 239,
    previousPrice: 289,
    badge: "-17%",
  },
  {
    id: "sueter-mascota-verde",
    name: "Suéter tejido para mascota",
    image: ASSETS.products.petGreenSweater,
    price: 79,
  },
  {
    id: "casaca-puffer-negra",
    name: "Casaca puffer negra",
    image: ASSETS.products.mensBlackPufferJacket,
    price: 259,
    previousPrice: 309,
    badge: "-16%",
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
    id: "abrigo-largo-beige-mujer",
    name: "Abrigo largo beige",
    image: ASSETS.products.womensLongBeigeCoat,
    price: 329,
    previousPrice: 389,
    badge: "-15%",
  },
  {
    id: "casaca-puffer-negra",
    name: "Casaca puffer negra",
    image: ASSETS.products.mensBlackPufferJacket,
    price: 259,
    previousPrice: 309,
    badge: "-16%",
  },
  {
    id: "sueter-nordico-azul-marino",
    name: "Suéter nórdico azul marino",
    image: ASSETS.products.mensNordicNavySweater,
    price: 189,
    previousPrice: 229,
    badge: "-17%",
  },
  {
    id: "conjunto-infantil-azul-marino",
    name: "Conjunto infantil azul marino",
    image: ASSETS.products.kidsNavyWinterSet,
    price: 239,
    previousPrice: 289,
    badge: "-17%",
  },
  {
    id: "conjunto-infantil-rosa",
    name: "Conjunto infantil rosa",
    image: ASSETS.products.kidsPinkWinterSet,
    price: 229,
    previousPrice: 279,
    badge: "-18%",
  },
  {
    id: "casaca-infantil-roja",
    name: "Casaca infantil roja",
    image: ASSETS.products.kidsRedPufferJacket,
    price: 219,
    previousPrice: 259,
    badge: "-15%",
  },
  {
    id: "botas-termicas-rosa",
    name: "Botas térmicas rosas",
    image: ASSETS.products.pinkThermalBoots,
    price: 119,
    previousPrice: 149,
    badge: "-20%",
  },
  {
    id: "botas-invierno-camel",
    name: "Botas de invierno camel",
    image: ASSETS.products.camelWinterBoots,
    price: 179,
    previousPrice: 219,
    badge: "-18%",
  },
  {
    id: "sueter-mascota-pinguino-azul",
    name: "Suéter para mascota pingüino",
    image: ASSETS.products.petBluePenguinSweater,
    price: 84,
    previousPrice: 99,
    badge: "-15%",
  },
  {
    id: "sueter-mascota-crema-celeste",
    name: "Suéter crema para mascota",
    image: ASSETS.products.petCreamBlueSweater,
    price: 79,
    previousPrice: 95,
    badge: "-17%",
  },
  {
    id: "chaleco-mascota-verde",
    name: "Chaleco verde para mascota",
    image: ASSETS.products.petGreenVest,
    price: 82,
    previousPrice: 98,
    badge: "-16%",
  },
  {
    id: "sueter-mascota-verde",
    name: "Suéter tejido verde para mascota",
    image: ASSETS.products.petGreenSweater,
    price: 76,
    previousPrice: 92,
    badge: "-17%",
  },
];

const womanProducts: ReadonlyArray<StoreProduct> = [
  {
    id: "w1",
    name: "Abrigo largo beige",
    image: ASSETS.products.womensLongBeigeCoat,
    price: 329,
    previousPrice: 389,
    badge: "-15%",
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
    name: "Botas de invierno camel",
    image: ASSETS.products.camelWinterBoots,
    price: 179,
    previousPrice: 219,
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
    name: "Casaca puffer negra",
    image: ASSETS.products.mensBlackPufferJacket,
    price: 259,
    previousPrice: 309,
    badge: "-16%",
  },
  {
    id: "m4",
    name: "Suéter nórdico azul marino",
    image: ASSETS.products.mensNordicNavySweater,
    price: 189,
    previousPrice: 229,
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
    name: "Suéter gris tejido",
    image: ASSETS.products.mensGrayKnitSweater,
    price: 169,
  },
];

const petProducts: ReadonlyArray<StoreProduct> = [
  {
    id: "p1",
    name: "Suéter pingüino azul",
    image: ASSETS.products.petBluePenguinSweater,
    price: 84,
    previousPrice: 99,
    badge: "-15%",
  },
  {
    id: "p2",
    name: "Suéter crema y celeste",
    image: ASSETS.products.petCreamBlueSweater,
    price: 79,
    previousPrice: 95,
  },
  {
    id: "p3",
    name: "Chaleco verde para mascota",
    image: ASSETS.products.petGreenVest,
    price: 82,
    previousPrice: 98,
  },
  {
    id: "p4",
    name: "Suéter tejido verde",
    image: ASSETS.products.petGreenSweater,
    price: 76,
    previousPrice: 92,
  },
  {
    id: "p5",
    name: "Botitas térmicas rosas",
    image: ASSETS.products.pinkThermalBoots,
    price: 59,
  },
  {
    id: "p6",
    name: "Bufanda polar para mascota",
    image: ASSETS.mascotas.featuredScarf,
    price: 35,
  },
  {
    id: "p7",
    name: "Impermeable gris con capucha",
    image: ASSETS.mascotas.featuredRaincoat,
    price: 75,
  },
  {
    id: "p8",
    name: "Chaleco acolchado azul marino",
    image: ASSETS.mascotas.featuredVest,
    price: 65,
  },
];

const kidProducts: ReadonlyArray<StoreProduct> = [
  { id: "k1", name: "Casaca infantil roja", image: ASSETS.products.kidsRedPufferJacket, price: 219, previousPrice: 259, badge: "-15%" },
  { id: "k2", name: "Conjunto infantil azul marino", image: ASSETS.products.kidsNavyWinterSet, price: 239, previousPrice: 289, badge: "-17%" },
  { id: "k3", name: "Conjunto infantil rosa", image: ASSETS.products.kidsPinkWinterSet, price: 229, previousPrice: 279, badge: "-18%" },
  { id: "k4", name: "Conjunto infantil negro", image: ASSETS.products.kidsBlackWinterSet, price: 249, previousPrice: 299, badge: "-17%" },
  { id: "k5", name: "Botas térmicas rosas", image: ASSETS.products.pinkThermalBoots, price: 119, previousPrice: 149, badge: "-20%" },
  { id: "k6", name: "Botas de invierno camel", image: ASSETS.products.camelWinterBoots, price: 179, previousPrice: 219, badge: "-18%" },
  { id: "k7", name: "Gorro tejido de invierno", image: ASSETS.products.woolBeanie, price: 50 },
  { id: "k8", name: "Guantes térmicos", image: ASSETS.ofertas.categoryGloves, price: 65 },
];

const womenGallery: ReadonlyArray<CollectionVisualItem> = [
  {
    id: "wg-1",
    title: "Texturas suaves",
    image: ASSETS.products.womensLongBeigeCoat,
    alt: "Abrigo largo beige de la colección mujer",
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
    image: ASSETS.products.petBluePenguinSweater,
    alt: "Suéter azul para mascota con diseño de pingüino",
    description: "Prendas suaves para salidas diarias.",
  },
  {
    id: "pg-2",
    title: "Tejidos suaves",
    image: ASSETS.products.petCreamBlueSweater,
    alt: "Suéter crema y celeste para mascota",
    description: "Texturas abrigadoras para días fríos.",
  },
  {
    id: "pg-3",
    title: "Abrigos listos",
    image: ASSETS.products.petGreenVest,
    alt: "Chaleco verde para mascota",
    description: "Capas funcionales y fáciles de usar.",
  },
  {
    id: "pg-4",
    title: "Botitas y extras",
    image: ASSETS.products.pinkThermalBoots,
    alt: "Botitas térmicas rosas",
    description: "Detalles que completan cada paseo.",
  },
];

export const collections: Record<CollectionConfig["page"], CollectionConfig> = {
  mujer: {
    page: "mujer",
    eyebrow: "Colección para mujer",
    title: "Abrígate con estilo",
    description:
      "Prendas diseñadas para acompañarte con comodidad y elegancia durante todo el invierno.",
    hero: ASSETS.mujer.hero,
    cta: "Ver ofertas",
    ctaDestination: "ofertas",
    filterTags: ["Nuevos ingresos", "Abrigos", "Tejidos", "Accesorios"],
    products: womanProducts,
    secondarySection: {
      eyebrow: "Ofertas especiales",
      title: "Capas suaves para el dia a dia",
      description:
        "Una segunda selección inspirada en la composición de la referencia, con prendas ligeras y complementos de invierno.",
      products: [...womanProducts].reverse().slice(0, 4),
    },
    bestsellerSection: {
      eyebrow: "Más vendidos",
      title: "Favoritos de la temporada",
      description:
        "Prendas y accesorios en tonos neutros que ya destacan dentro de la coleccion.",
      products: [
        {
          id: "wb-1",
          name: "Vestido lino premium",
          image: ASSETS.mujer.bestsellerDress,
          price: 158,
          previousPrice: 184,
        },
        {
          id: "wb-2",
          name: "Chaqueta casual marron",
          image: ASSETS.mujer.bestsellerOuterwear,
          price: 132,
        },
        {
          id: "wb-3",
          name: "Conjunto polar tejido",
          image: ASSETS.mujer.bestsellerKnitSet,
          price: 176,
        },
        {
          id: "wb-4",
          name: "Look acento invierno",
          image: ASSETS.mujer.bestsellerAccent,
          price: 118,
        },
      ],
    },
    promoTitle: "Diseñado para los días más fríos",
    promoDescription:
      "Casacas, vestidos tejidos y accesorios en tonos neutros para una colección femenina y funcional.",
    promoImage: ASSETS.mujer.editorialFamily,
    spotlight: {
      eyebrow: "Nueva selección",
      title: "Looks pensados para toda la temporada",
      description:
        "Combinamos capas suaves, accesorios tejidos y piezas fáciles de llevar para mantener el estilo sin sacrificar abrigo.",
      image: ASSETS.mujer.bannerPrimary,
      alt: "Banner editorial de la colección mujer",
      tags: ["Capas ligeras", "Texturas suaves", "Tonos neutros"],
    },
    gallery: {
      eyebrow: "Detalles visuales",
      title: "Inspiración para tus próximos looks",
      description:
        "Una selección editorial con imágenes de apoyo tomadas de la referencia entregada.",
      items: womenGallery,
    },
    promoTiles: [
      {
        title: "Más capas, menos esfuerzo",
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
    eyebrow: "Colección para hombre",
    title: "Protección para cada día",
    description:
      "Prendas resistentes, cómodas y cálidas para afrontar el invierno con estilo.",
    hero: ASSETS.hombre.hero,
    cta: "Ver ofertas",
    ctaDestination: "ofertas",
    filterTags: ["Casacas", "Polares", "Accesorios", "Más vendidos"],
    products: manProducts,
    secondarySection: {
      eyebrow: "Ofertas especiales",
      title: "Capas listas para todo el invierno",
      description:
        "Una selección adicional con chaquetas, chalecos y piezas térmicas para reforzar la estructura de catálogo.",
      products: [...manProducts].slice(4, 8),
    },
    bestsellerSection: {
      eyebrow: "Productos más vendidos",
      title: "Esenciales para el clima frío",
      description:
        "Referencias visuales más editoriales combinadas con prendas clave de la colección hombre.",
      products: [
        {
          id: "mb-1",
          name: "Abrigo urbano azul profundo",
          image: ASSETS.hombre.spotlightLayeredLook,
          price: 220,
        },
        {
          id: "mb-2",
          name: "Chaqueta negra termica",
          image: ASSETS.hombre.spotlightBlackJacket,
          price: 248,
        },
        {
          id: "mb-3",
          name: "Set funcional de invierno",
          image: ASSETS.hombre.spotlightAccessories,
          price: 165,
        },
        {
          id: "mb-4",
          name: "Basico premium alpino",
          image: ASSETS.hombre.spotlightAccent,
          price: 119,
        },
      ],
    },
    promoTitle: "Abrigos listos para cada salida",
    promoDescription:
      "Prendas resistentes y versátiles para mantener el frío bajo control con un look sobrio.",
    promoImage: ASSETS.hombre.spotlightLifestyle,
    spotlight: {
      eyebrow: "Editorial de invierno",
      title: "Capas urbanas para días de mucho frío",
      description:
        "La referencia muestra una narrativa más lifestyle para hombre, así que incorporamos las imágenes de modelos y accesorios ya cargadas en Cloudinary.",
      image: ASSETS.hombre.spotlightLifestyle,
      alt: "Modelos vistiendo looks de la colección hombre",
      tags: ["Polares", "Puffer jackets", "Accesorios termicos"],
    },
    gallery: {
      eyebrow: "Más opciones",
      title: "Combinaciones listas para usar",
      description:
        "Prendas, accesorios y close-ups reutilizados desde la librería existente de Cloudinary.",
      items: menGallery,
    },
    promoTiles: [
      {
        title: "Protección térmica sin perder estilo",
        description:
          "Chaquetas, capas y chalecos en una selección pensada para el ritmo diario.",
        image: ASSETS.hombre.bannerPrimary,
        alt: "Promo principal de la coleccion hombre",
        destination: "ofertas",
      },
      {
        title: "Todo listo para la temporada",
        description:
          "Básicos funcionales para combinar con facilidad en ciudad o escapadas de invierno.",
        image: ASSETS.hombre.bannerSecondary,
        alt: "Promo secundaria de la coleccion hombre",
        destination: "contacto",
      },
    ],
  },
  ninos: {
    page: "ninos",
    eyebrow: "Hasta 25% de descuento",
    title: "Encuentra el abrigo perfecto para este invierno",
    description: "Descubre nuestra nueva colección de ropa térmica, casacas, gorros y accesorios para niños y niñas.",
    hero: ASSETS.products.kidsBlackWinterSet,
    cta: "Comprar ahora",
    ctaDestination: "ofertas",
    filterTags: ["Casacas", "Conjuntos térmicos", "Gorros", "Botas"],
    products: kidProducts,
    secondarySection: {
      eyebrow: "Nueva temporada",
      title: "Ofertas especiales de invierno",
      description: "Prendas suaves y resistentes para disfrutar cada salida con más abrigo.",
      products: kidProducts.slice(4, 8),
    },
    bestsellerSection: {
      eyebrow: "Favoritos de las familias",
      title: "Productos más vendidos",
      products: [...kidProducts].reverse().slice(0, 4),
    },
    promoTitle: "Diseñado para los más pequeños",
    promoDescription: "Abrigo, comodidad y libertad para jugar durante toda la temporada.",
    promoImage: ASSETS.products.kidsPinkWinterSet,
    spotlight: {
      eyebrow: "Diseño de temporada",
      title: "Abrigo para cada aventura",
      description: "Capas fáciles de combinar con materiales cómodos y cálidos para el uso diario.",
      image: ASSETS.products.kidsNavyWinterSet,
      alt: "Conjunto infantil azul marino",
      tags: ["Comodidad", "Calidez", "Movimiento"],
    },
    gallery: {
      eyebrow: "Completa su look",
      title: "Todo lo que necesitan este invierno",
      items: [
        { id: "kg-1", title: "Casacas", image: ASSETS.products.kidsRedPufferJacket, alt: "Casaca infantil roja" },
        { id: "kg-2", title: "Conjuntos térmicos", image: ASSETS.products.kidsNavyWinterSet, alt: "Conjunto infantil azul marino" },
        { id: "kg-3", title: "Botas", image: ASSETS.products.pinkThermalBoots, alt: "Botas térmicas rosas" },
        { id: "kg-4", title: "Looks completos", image: ASSETS.products.kidsBlackWinterSet, alt: "Conjunto infantil negro" },
      ],
    },
    promoTiles: [
      { title: "Mantén cálido su invierno", description: "Conoce la nueva colección infantil.", image: ASSETS.products.kidsRedPufferJacket, alt: "Casaca infantil roja", destination: "ofertas" },
      { title: "Hasta 25% de descuento", description: "Descubre las últimas tendencias.", image: ASSETS.products.kidsPinkWinterSet, alt: "Promoción infantil", destination: "ofertas" },
    ],
  },
  mascotas: {
    page: "mascotas",
    eyebrow: "Colección para mascotas",
    title: "Abrigo para tu mejor compañero",
    description:
      "Ropa cómoda y cálida para que perros y gatos también disfruten del invierno.",
    hero: ASSETS.mascotas.hero,
    cta: "Consultar personalizacion",
    ctaDestination: "contacto",
    filterTags: ["Perros", "Gatos", "Accesorios", "Más vendidos"],
    products: petProducts,
    secondarySection: {
      eyebrow: "Ofertas especiales",
      title: "Accesorios y prendas para cada paseo",
      description:
        "Bloque adicional con prendas de apoyo, inspirado en la estructura más larga de la referencia para mascotas.",
      products: [...petProducts].slice(0, 4),
    },
    bestsellerSection: {
      eyebrow: "Productos más vendidos",
      title: "Favoritos para consentirlos",
      description:
        "Una mezcla de imágenes de producto y apoyo visual para hacer la página más completa y cercana al mock.",
      products: [
        {
          id: "pb-1",
          name: "Suéter pingüino azul",
          image: ASSETS.products.petBluePenguinSweater,
          price: 84,
        },
        {
          id: "pb-2",
          name: "Suéter crema y celeste",
          image: ASSETS.products.petCreamBlueSweater,
          price: 79,
        },
        {
          id: "pb-3",
          name: "Chaleco verde para mascota",
          image: ASSETS.products.petGreenVest,
          price: 82,
        },
        {
          id: "pb-4",
          name: "Suéter tejido verde",
          image: ASSETS.products.petGreenSweater,
          price: 76,
        },
      ],
    },
    promoTitle: "Diseñado para tus mascotas",
    promoDescription:
      "Abrigos, accesorios y conjuntos cómodos para que perros y gatos disfruten el invierno contigo.",
    promoImage: ASSETS.mascotas.spotlightCompanions,
    spotlight: {
      eyebrow: "Colección mascota",
      title: "Paseos con más abrigo y mejor presencia",
      description:
        "Usamos la foto principal con perro y gato para reflejar mejor la composición de la referencia sin convertirla en un layout pegado.",
      image: ASSETS.mascotas.spotlightCompanions,
      alt: "Perros y gato usando ropa de invierno",
      tags: ["Perros", "Gatos", "Accesorios termicos"],
    },
    gallery: {
      eyebrow: "Favoritos de la temporada",
      title: "Looks y accesorios para cada paseo",
      description:
        "Imágenes de producto y apoyo visual ya existentes en Cloudinary, ahora ubicadas en bloques coherentes.",
      items: petsGallery,
    },
    promoTiles: [
      {
        title: "Abrigos para salir con estilo",
        description:
          "Capas acolchadas, ponchos y accesorios pensados para tus compañeros de cuatro patas.",
        image: ASSETS.mascotas.bannerPrimary,
        alt: "Promo principal de mascotas",
        destination: "favoritos",
      },
      {
        title: "Más detalles para consentirlos",
        description:
          "Una segunda franja visual con imágenes de la referencia para enriquecer la página sin recortar capturas.",
        image: ASSETS.mascotas.bannerSecondary,
        alt: "Promo secundaria de mascotas",
        destination: "contacto",
      },
    ],
  },
};

export const winterCategories = [
  { name: "Casacas", image: ASSETS.ofertas.categoryJackets },
  { name: "Conjuntos térmicos", image: ASSETS.ofertas.categoryThermalSets },
  { name: "Bufandas", image: ASSETS.ofertas.categoryScarves },
  { name: "Guantes", image: ASSETS.ofertas.categoryGloves },
  { name: "Botas", image: ASSETS.ofertas.categoryBoots },
] as const;
