import { Star } from "lucide-react";
import { OptimizedImage } from "./OptimizedImage";
import { navigateTo, type Page } from "../navigation";
import type {
  CollectionConfig,
  StoreCategory,
  StoreProduct,
} from "@/data/catalog";
import { winterCategories } from "@/data/catalog";
import { ASSETS } from "@/config/assets";
import { Footer } from "./Footer";

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
  return (
    <article className="product-card">
      <div className="product-media">
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        <OptimizedImage
          kind="product"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="product-content">
        <div className="product-rating" aria-label="5 de 5 estrellas">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} size={15} aria-hidden="true" />
          ))}
        </div>
        <h3>{product.name}</h3>
        <div className="product-price">
          <strong>S/ {product.price}</strong>
          {product.previousPrice ? (
            <span>S/ {product.previousPrice}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

interface ProductGridProps {
  products: ReadonlyArray<StoreProduct>;
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
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
        alt={`Colección ${category.name}`}
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
        <SectionHeader
          eyebrow="Opiniones"
          title="Lo que dice nuestra comunidad"
        />
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <OptimizedImage
                kind="thumbnail"
                src={testimonial.image}
                alt=""
              />
              <div>
                <div className="product-rating" aria-hidden="true">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={15} />
                  ))}
                </div>
                <blockquote>“{testimonial.text}”</blockquote>
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

interface CollectionPageProps {
  config: CollectionConfig;
}

export function CollectionPage({ config }: CollectionPageProps) {
  return (
    <>
      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        description={config.description}
        image={config.hero}
        cta={config.cta}
        destination={config.ctaDestination}
      />
      <section className="page-section">
        <div className="page-container">
          <SectionHeader
            eyebrow="Selección Mundo Polar"
            title="Productos destacados"
            description="Prendas escogidas para combinar calidez, comodidad y estilo."
            action={{ label: "Ver ofertas", destination: "ofertas" }}
          />
          <ProductGrid products={config.products} />
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
      <section className="page-section">
        <div className="page-container">
          <SectionHeader title="Compra por categoría" />
          <div className="winter-category-grid">
            {winterCategories.map((category) => (
              <article className="winter-category-card" key={category.name}>
                <OptimizedImage
                  kind="content"
                  src={category.image}
                  alt={category.name}
                />
                <h3>{category.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
      <Footer />
    </>
  );
}
