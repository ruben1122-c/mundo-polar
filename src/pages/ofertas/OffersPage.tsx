import { ASSETS } from "@/config/assets";
import { Footer } from "@/app/components/Footer";
import { ProductGrid } from "@/app/components/Storefront";
import { OptimizedImage } from "@/app/components/OptimizedImage";
import { navigateTo } from "@/app/navigation";
import { offerProducts, type StoreProduct } from "@/data/catalog";
import { AnimateInView } from "@/app/components/ui/AnimateInView";

interface OfferSection {
  eyebrow: string;
  title: string;
  products: ReadonlyArray<StoreProduct>;
}

function productsForSection(index: number) {
  return Array.from({ length: 4 }, (_, position) => {
    const product = offerProducts[(index * 2 + position) % offerProducts.length];
    return {
      ...product,
      id: `oferta-${index}-${product.id}`,
      badge: product.badge ?? `-${15 + index * 3}%`,
    };
  });
}

const offerSections: ReadonlyArray<OfferSection> = [
  {
    eyebrow: "Ofertas destacadas",
    title: "Los más vendidos",
    products: productsForSection(0),
  },
  {
    eyebrow: "Niños · Mascotas · Familia",
    title: "Para los pequeños y engreídos de la familia",
    products: productsForSection(1),
  },
  {
    eyebrow: "Mujer · Colección activa",
    title: "Nueva colección de temporada con descuento",
    products: productsForSection(2),
  },
  {
    eyebrow: "Niños · Mascotas · Familia",
    title: "Sets de invierno en promoción",
    products: productsForSection(3),
  },
  {
    eyebrow: "Últimas unidades",
    title: "¡Solo para los primeros en comprar!",
    products: productsForSection(4),
  },
];

function OfferProductSection({ section }: { section: OfferSection }) {
  return (
    <section className="offers-product-section">
      <div className="page-container">
        <AnimateInView className="offers-section-heading">
          <p>{section.eyebrow}</p>
          <h2>{section.title}</h2>
          <button type="button" onClick={() => navigateTo("ofertas")}>
            Ver todos <span aria-hidden="true">›</span>
          </button>
        </AnimateInView>
        <AnimateInView delay={80}>
          <ProductGrid
            products={section.products}
            className="offers-product-grid mobile-carousel product-carousel"
          />
        </AnimateInView>
      </div>
    </section>
  );
}

export default function OffersPage() {
  return (
    <div className="offers-page">
      <section className="offers-hero">
        <OptimizedImage
          priority
          kind="hero"
          className="offers-hero-image"
          src={ASSETS.ofertas.hero}
          alt="Paisaje nevado de la campaña de ofertas"
        />
        <div className="offers-hero-overlay" />
        <div className="page-container offers-hero-layout">
          <div className="offers-hero-copy">
            <p className="offers-hero-kicker">Temporada de invierno</p>
            <h1>
              Hasta <strong>30%</strong>
              <span>de descuento.</span>
            </h1>
            <p>
              Descuentos en ropa de invierno para mujer, hombre, niños y
              mascotas. Sin códigos, sin vueltas: el precio ya está rebajado.
            </p>
            <button type="button" onClick={() => navigateTo("ofertas")}>
              Ver ofertas <span aria-hidden="true">›</span>
            </button>
          </div>
          <div className="offers-discount-stack" aria-label="Descuentos disponibles">
            <span className="discount-blue"><strong>30%</strong> en mujer</span>
            <span className="discount-red"><strong>35%</strong> en niños</span>
            <span className="discount-dark"><strong>25%</strong> en mascotas</span>
          </div>
        </div>
      </section>

      <section className="offers-countdown" aria-label="Tiempo restante de la oferta">
        <div className="page-container offers-countdown-layout">
          <p><span aria-hidden="true">⚡</span> Oferta relámpago · Termina pronto</p>
          <div className="countdown-values">
            <span><strong>02</strong><small>Días</small></span>
            <span><strong>18</strong><small>Horas</small></span>
            <span><strong>43</strong><small>Minutos</small></span>
            <span><strong>07</strong><small>Segundos</small></span>
          </div>
          <small>El invierno no espera</small>
        </div>
      </section>

      <OfferProductSection section={offerSections[0]} />
      <OfferProductSection section={offerSections[1]} />

      <section className="offers-set-banner">
        <div className="page-container offers-set-layout">
          <div>
            <p>Nueva colección · Precios especiales</p>
            <h2>Set invernal completo<br />con 36% de descuento.</h2>
            <span>Compra ropa para ti y tu familia en una sola orden.</span>
            <button type="button" onClick={() => navigateTo("ofertas")}>Ver packs ›</button>
          </div>
          <div className="offers-set-gallery" aria-label="Productos del set invernal">
            <OptimizedImage src={ASSETS.ofertas.categoryJackets} alt="Casaca del set" />
            <OptimizedImage src={ASSETS.ofertas.categoryThermalSets} alt="Conjunto térmico" />
            <OptimizedImage src={ASSETS.home.categoryKids} alt="Set para niños" />
            <OptimizedImage src={ASSETS.home.categoryPets} alt="Set para mascotas" />
          </div>
        </div>
      </section>

      <OfferProductSection section={offerSections[2]} />
      <OfferProductSection section={offerSections[3]} />
      <OfferProductSection section={offerSections[4]} />

      <section className="offers-newsletter">
        <div className="page-container offers-newsletter-layout">
          <div>
            <h2>Recibe ofertas antes que nadie.</h2>
            <p>Solo recibirás las novedades y promociones que valen la pena.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="offers-email">Correo electrónico</label>
            <input id="offers-email" type="email" placeholder="tu@email.com" required />
            <button type="submit">Quiero recibir</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
