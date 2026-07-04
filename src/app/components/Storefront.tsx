import { Check, Heart, ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { OptimizedImage } from "./OptimizedImage";
import { useShop } from "../context/ShopContext";
import { navigateTo, type Page } from "../navigation";
import { ProductPreviewModal } from "./product/ProductPreviewModal";
import { useToast } from "../context/ToastContext";
import type {
  CollectionConfig,
  CollectionPromoTile,
  CollectionProductSection,
  CollectionSpotlight,
  CollectionVisualItem,
  StoreCategory,
  StoreProduct,
} from "@/data/catalog";
import { ASSETS } from "@/config/assets";
import { Footer } from "./Footer";
import type { CatalogScope } from "@/types/product";
import { useCatalogProducts } from "../context/ProductCatalogContext";
import { ProductCardSkeleton } from "./skeletons/PageSkeleton";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: { label: string; destination: Page };
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <div>
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>
      {action ? (
        <button
          className="text-action"
          type="button"
          onClick={() => navigateTo(action.destination)}
        >
          {action.label}
        </button>
      ) : null}
    </div>
  );
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  cta?: string;
  destination?: Page;
  align?: "left" | "center";
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  cta,
  destination,
  align = "left",
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${align}`}>
      <OptimizedImage
        priority
        kind="hero"
        className="page-hero-image"
        src={image}
        alt=""
      />
      <div className="page-hero-overlay" />
      <div className="page-container page-hero-content">
        {eyebrow ? <p className="hero-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{description}</p>
        {cta && destination ? (
          <button
            className="primary-button"
            type="button"
            onClick={() => navigateTo(destination)}
          >
            {cta}
          </button>
        ) : null}
      </div>
    </section>
  );
}

interface ProductCardProps {
  product: StoreProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, isFavorite, toggleFavorite } = useShop();
  const { showToast } = useToast();
  const [added, setAdded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeartPulse, setIsHeartPulse] = useState(false);
  const favorite = isFavorite(product.id);

  useEffect(() => {
    if (!added) return undefined;
    const timeout = window.setTimeout(() => setAdded(false), 1400);
    return () => window.clearTimeout(timeout);
  }, [added]);

  const handleFavoriteClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggleFavorite(product);
    setIsHeartPulse(true);
    setTimeout(() => setIsHeartPulse(false), 450);

    if (favorite) {
      showToast(`Quitado de favoritos: ${product.name}`, "info");
    } else {
      showToast(`Agregado a favoritos: ${product.name}`, "success");
    }
  };

  return (
    <>
      <article className="product-card">
        <div
          className="product-media group relative cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {product.badge ? <span className="product-badge">{product.badge}</span> : null}
          <OptimizedImage kind="product" src={product.image} alt={product.name} />
          <div className="absolute inset-0 flex items-center justify-center bg-slate-900/30 opacity-0 transition-opacity duration-200 hover:opacity-100">
            <span className="scale-95 rounded-lg bg-white/95 px-3.5 py-1.5 text-xs font-extrabold text-slate-800 shadow-md transition-all hover:scale-100">
              Vista rápida
            </span>
          </div>
        </div>
        <div className="product-content">
          <div className="product-rating" aria-label="5 de 5 estrellas">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} size={15} aria-hidden="true" />
            ))}
          </div>
          <h3
            className="cursor-pointer transition-colors hover:text-blue-600"
            onClick={() => setIsModalOpen(true)}
          >
            {product.name}
          </h3>
          <div className="product-price">
            <strong>S/ {product.price}</strong>
            {product.previousPrice ? <span>S/ {product.previousPrice}</span> : null}
          </div>
          <div className="product-card-actions">
            <button
              className={`${added ? "product-cart-action added" : "product-cart-action"} btn-animate-tap`}
              type="button"
              onClick={() => {
                addToCart(product);
                setAdded(true);
                showToast(`Agregado al carrito: ${product.name}`, "success");
              }}
            >
              {added ? <Check size={17} aria-hidden="true" /> : <ShoppingCart size={17} aria-hidden="true" />}
              {added ? "Agregado" : "Agregar"}
            </button>
            <button
              className={`${favorite ? "product-favorite-action active" : "product-favorite-action"} btn-animate-tap`}
              type="button"
              aria-label={
                favorite
                  ? `Quitar ${product.name} de favoritos`
                  : `Agregar ${product.name} a favoritos`
              }
              aria-pressed={favorite}
              onClick={handleFavoriteClick}
            >
              <Heart
                className={isHeartPulse ? "animate-fav-pulse" : ""}
                size={19}
                fill={favorite ? "currentColor" : "none"}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </article>

      {isModalOpen ? (
        <ProductPreviewModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      ) : null}
    </>
  );
}

interface ProductGridProps {
  products: ReadonlyArray<StoreProduct>;
  className?: string;
  catalogScope?: CatalogScope;
}

export function ProductGrid({
  products: fallbackProducts,
  className = "",
  catalogScope,
}: ProductGridProps) {
  const { products, isLoading } = useCatalogProducts(
    catalogScope,
    fallbackProducts,
  );

  return (
    <div
      className={`product-grid ${className}`}
      aria-busy={isLoading}
      aria-live="polite"
    >
      {isLoading
        ? Array.from(
            { length: Math.min(Math.max(fallbackProducts.length, 4), 8) },
            (_, index) => <ProductCardSkeleton key={`product-skeleton-${index}`} />,
          )
        : products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}

interface CategoryCardProps {
  category: StoreCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <button
      className="category-card"
      type="button"
      onClick={() => navigateTo(category.destination)}
    >
      <OptimizedImage
        kind="content"
        src={category.image}
        alt={`Coleccion ${category.name}`}
      />
      <span>{category.name}</span>
    </button>
  );
}

interface PromoBannerProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  action?: { label: string; destination: Page };
}

export function PromoBanner({
  eyebrow = "Oferta de temporada",
  title,
  description,
  image,
  action,
}: PromoBannerProps) {
  return (
    <section className="promo-banner">
      <OptimizedImage kind="banner" src={image} alt="" />
      <div className="promo-overlay" />
      <div className="promo-content">
        <p className="hero-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
        {action ? (
          <button
            className="secondary-button"
            type="button"
            onClick={() => navigateTo(action.destination)}
          >
            {action.label}
          </button>
        ) : null}
      </div>
    </section>
  );
}

interface FilterChipsProps {
  items: ReadonlyArray<string>;
}

function FilterChips({ items }: FilterChipsProps) {
  return (
    <section className="catalog-filter-strip" aria-label="Filtros de catálogo">
      <div className="page-container">
        <div className="catalog-filter-strip-inner">
          <label>
            <span>Categoría</span>
            <select defaultValue="">
              <option value="" disabled>Seleccionar categoría</option>
              {items.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            <span>Color</span>
            <select defaultValue="">
              <option value="" disabled>Seleccionar color</option>
              <option>Azul</option>
              <option>Negro</option>
              <option>Crema</option>
            </select>
          </label>
          <label className="catalog-price-filter">
            <span>Rango de precio</span>
            <strong>S/ 0.00 – S/ 1,000.00</strong>
            <input type="range" min="0" max="1000" defaultValue="1000" aria-label="Precio máximo" />
          </label>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Valentina R.",
    text: "La prenda se siente cálida y resistente. El acabado superó mis expectativas.",
    image: ASSETS.ofertas.testimonial01,
  },
  {
    name: "Luis Pérez",
    text: "La calidad de las telas se nota desde el primer uso. Volvería a comprar.",
    image: ASSETS.ofertas.testimonial02,
  },
  {
    name: "Juan Soto",
    text: "Excelente confección y muy buen ajuste para los días de más frío.",
    image: ASSETS.ofertas.testimonial03,
  },
] as const;

export function Testimonials() {
  return (
    <section className="page-section page-section-soft">
      <div className="page-container">
        <SectionHeader eyebrow="Opiniones" title="Lo que dice nuestra comunidad" />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <OptimizedImage kind="thumbnail" src={testimonial.image} alt="" />
              <div>
                <div className="product-rating" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={15} />
                  ))}
                </div>
                <blockquote>"{testimonial.text}"</blockquote>
                <strong>{testimonial.name}</strong>
                <span>Compra verificada</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CollectionSpotlightSectionProps {
  spotlight: CollectionSpotlight;
}

function CollectionSpotlightSection({
  spotlight,
}: CollectionSpotlightSectionProps) {
  return (
    <section className="page-section page-section-soft">
      <div className="page-container collection-spotlight">
        <OptimizedImage
          kind="content"
          className="collection-spotlight-image"
          src={spotlight.image}
          alt={spotlight.alt}
        />
        <div className="collection-spotlight-copy">
          <p className="section-eyebrow">{spotlight.eyebrow}</p>
          <h2>{spotlight.title}</h2>
          <p>{spotlight.description}</p>
          {spotlight.tags?.length ? (
            <div className="collection-tag-list" aria-label="Etiquetas visuales">
              {spotlight.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

interface CollectionGallerySectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ReadonlyArray<CollectionVisualItem>;
}

function CollectionGallerySection({
  eyebrow,
  title,
  description,
  items,
}: CollectionGallerySectionProps) {
  return (
    <section className="page-section">
      <div className="page-container">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        <div className="collection-visual-grid">
          {items.map((item) => (
            <article className="collection-visual-card" key={item.id}>
              <OptimizedImage kind="content" src={item.image} alt={item.alt} />
              <div className="collection-visual-copy">
                <h3>{item.title}</h3>
                {item.description ? <p>{item.description}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

interface CollectionPromoTilesProps {
  items: ReadonlyArray<CollectionPromoTile>;
}

function CollectionPromoTiles({ items }: CollectionPromoTilesProps) {
  return (
    <section className="page-section">
      <div className="page-container collection-promo-tile-grid">
        {items.map((item) => (
          <button
            key={item.title}
            className="collection-promo-tile"
            type="button"
            onClick={() => navigateTo(item.destination)}
          >
            <OptimizedImage kind="banner" src={item.image} alt={item.alt} />
            <div className="collection-promo-tile-overlay" />
            <div className="collection-promo-tile-copy">
              <p className="hero-eyebrow">Coleccion destacada</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

interface CollectionProductSectionProps {
  section: CollectionProductSection;
  catalogScope?: CatalogScope;
  className?: string;
}

function CollectionProductSectionBlock({
  section,
  catalogScope,
  className,
}: CollectionProductSectionProps) {
  return (
    <section className={`page-section ${className ?? ""}`.trim()}>
      <div className="page-container">
        <SectionHeader
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <ProductGrid
          products={section.products}
          catalogScope={catalogScope}
          className="mobile-carousel product-carousel"
        />
      </div>
    </section>
  );
}

interface CollectionPageProps {
  config: CollectionConfig;
}

export function CollectionPage({ config }: CollectionPageProps) {
  return (
    <div className={`collection-page collection-page-${config.page}`}>
      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        description={config.description}
        image={config.hero}
        cta={config.cta}
        destination={config.ctaDestination}
      />
      <FilterChips items={config.filterTags} />
      <CollectionProductSectionBlock
        section={config.secondarySection}
        catalogScope={`${config.page}:secondary`}
        className="collection-product-section"
      />
      <section className="page-section">
        <div className="page-container">
          <SectionHeader title="Productos destacados" />
          <ProductGrid
            products={config.products}
            catalogScope={`${config.page}:featured`}
            className="mobile-carousel product-carousel"
          />
        </div>
      </section>
      <div className="page-container">
        <PromoBanner
          title={config.promoTitle}
          description={config.promoDescription}
          image={config.promoImage}
          action={{ label: "Ver colección", destination: config.page }}
        />
      </div>
      <CollectionSpotlightSection spotlight={config.spotlight} />
      <CollectionGallerySection
        eyebrow={config.gallery.eyebrow}
        title={config.gallery.title}
        description={config.gallery.description}
        items={config.gallery.items}
      />
      <CollectionProductSectionBlock
        section={config.bestsellerSection}
        catalogScope={`${config.page}:bestseller`}
        className="collection-product-section"
      />
      <CollectionPromoTiles items={config.promoTiles} />
      <Testimonials />
      <Footer />
    </div>
  );
}
