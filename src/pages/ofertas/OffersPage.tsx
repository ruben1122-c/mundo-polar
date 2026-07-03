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
import { navigateTo } from "@/app/navigation";
import { offerProducts, winterCategories } from "@/data/catalog";

const offerStats = [
  { value: "30%", label: "Descuento máximo" },
  { value: "45+", label: "Prendas destacadas" },
  { value: "7 días", label: "Campaña vigente" },
] as const;

export default function OffersPage() {
  return (
    <>
      <PageHero
        eyebrow="Hasta 30% de descuento"
        title="Encuentra el abrigo perfecto"
        description="Ropa térmica, casacas, gorros y accesorios seleccionados para disfrutar el invierno con mejores precios."
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

      <section className="page-section page-section-soft">
        <div className="page-container offer-stats-grid">
          {offerStats.map((stat) => (
            <article key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <SectionHeader
            eyebrow="Los más vendidos"
            title="Selección de rebajas destacadas"
            description="Una selección local de prendas y accesorios con precios de temporada."
          />
          <ProductGrid
            products={offerProducts.slice(0, 8)}
            catalogScope="offers"
            className="mobile-carousel product-carousel"
          />
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="page-container">
          <SectionHeader
            eyebrow="Compra por categoría"
            title="Encuentra tu descuento ideal"
          />
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

      <div className="page-container">
        <PromoBanner
          title="Sets de invierno con descuento"
          description="Combinaciones listas para comprar con prendas pensadas para mantener el estilo y la calidez."
          image={ASSETS.ofertas.kidsCollectionBanner}
          action={{ label: "Explorar ofertas", destination: "ofertas" }}
        />
      </div>

      <section className="page-section">
        <div className="page-container offers-editorial-grid">
          <div className="offers-editorial-copy">
            <p className="section-eyebrow">Nueva colección</p>
            <h2>Nuevas combinaciones de temporada</h2>
            <p>
              Reforzamos esta página con más bloques de catálogo y apoyo visual
              para que se acerque a la longitud del diseño de referencia, sin
              convertirlo en una captura pegada.
            </p>
            <button
              className="primary-button btn-animate-tap"
              type="button"
              onClick={() => navigateTo("mujer")}
            >
              Ver colección mujer
            </button>
          </div>
          <OptimizedImage
            kind="content"
            className="offers-editorial-image"
            src={ASSETS.ofertas.trendsBanner}
            alt="Tendencias de invierno en promoción"
          />
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="page-container">
          <SectionHeader
            eyebrow="Más descuentos"
            title="Piezas recomendadas para seguir comprando"
            description="Un bloque extra de productos para que Ofertas tenga una estructura más completa."
          />
          <ProductGrid
            products={offerProducts.slice(4, 12)}
            catalogScope="offers"
            className="mobile-carousel product-carousel"
          />
        </div>
      </section>

      <section className="page-section">
        <div className="page-container newsletter-strip">
          <div>
            <p className="section-eyebrow">Recibe alertas</p>
            <h2>Entérate primero de las nuevas promociones</h2>
            <p>
              Este bloque reemplaza los espacios vacíos de la versión anterior y
              mantiene la composición comercial de la referencia.
            </p>
          </div>
          <button
            className="outline-button btn-animate-tap"
            type="button"
            onClick={() => navigateTo("contacto")}
          >
            Ir a contacto
          </button>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </>
  );
}
