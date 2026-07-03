import { ASSETS } from "@/config/assets";
import { Footer } from "@/app/components/Footer";
import {
  PageHero,
  ProductGrid,
  PromoBanner,
  SectionHeader,
  Testimonials,
} from "@/app/components/Storefront";
import { OptimizedImage } from "@/app/components/OptimizedImage";
import { offerProducts, winterCategories } from "@/data/catalog";

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Hasta 25% de descuento"
        title="Encuentra el abrigo perfecto"
        description="Ropa térmica, casacas, gorros y accesorios seleccionados para disfrutar el invierno."
        image={ASSETS.ofertas.hero}
        cta="Ver productos"
        destination="ofertas"
      />

      <section className="season-offer">
        <div className="page-container season-offer-content">
          <div>
            <p className="section-eyebrow">Promoción vigente</p>
            <h2>Oferta de temporada</h2>
          </div>
          <p>
            Precios especiales en productos seleccionados, disponibles durante
            la campaña de invierno.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <SectionHeader
            eyebrow="Ofertas especiales"
            title="Productos destacados"
            description="Una selección local de prendas y accesorios con precios de temporada."
          />
          <ProductGrid products={offerProducts} className="mobile-carousel product-carousel" />
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="page-container">
          <SectionHeader title="Compra por categoría" />
          <div className="winter-category-grid mobile-carousel category-carousel">
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

      <div className="page-container promo-stack">
        <PromoBanner
          title="Diseñado para los más pequeños"
          description="Prendas abrigadoras para que niños y niñas disfruten del invierno con comodidad y estilo."
          image={ASSETS.ofertas.kidsCollectionBanner}
        />
        <PromoBanner
          title="Tendencias para este invierno"
          description="Capas, texturas y accesorios que combinan fácilmente durante toda la temporada."
          image={ASSETS.ofertas.trendsBanner}
        />
      </div>

      <Testimonials />
      <Footer />
    </>
  );
}
