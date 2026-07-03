import { ASSETS } from "@/config/assets";
import { Footer } from "@/app/components/Footer";
import {
  PageHero,
  ProductGrid,
  SectionHeader,
  Testimonials,
} from "@/app/components/Storefront";
import { OptimizedImage } from "@/app/components/OptimizedImage";
import { navigateTo } from "@/app/navigation";
import { featuredProducts } from "@/data/catalog";

const storyStats = [
  { label: "Fundación", value: "2019" },
  { label: "Clientes felices", value: "50K+" },
  { label: "Satisfacción", value: "100%" },
] as const;

const trustReasons = [
  "Materiales sostenibles",
  "Diseño pensado para el frío real",
  "Calidad comprobada",
  "Atención cercana para cada compra",
] as const;

const missionValues = [
  {
    id: "01",
    title: "Cálidez",
    text: "Diseñamos para acompañar a familias, no solo para vender una temporada.",
  },
  {
    id: "02",
    title: "Durabilidad",
    text: "Seleccionamos piezas que resistan el uso diario y el clima más frío.",
  },
  {
    id: "03",
    title: "Transparencia",
    text: "Queremos que sepas qué estás comprando y por qué lo elegimos.",
  },
  {
    id: "04",
    title: "Responsabilidad",
    text: "Buscamos materiales y procesos más conscientes con el entorno.",
  },
] as const;

const sustainabilityChecklist = [
  "Lana reciclada y tejidos duraderos",
  "Algodón orgánico certificado",
  "Empaques más ligeros",
  "Menos plástico de un solo uso",
] as const;

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Conoce a Mundo Polar"
        title="Una marca nacida para acompañar el invierno"
        description="Diseño, calidez y materiales responsables en prendas pensadas para personas, familias y mascotas."
        image={ASSETS.nosotros.hero}
        cta="Ver colección"
        destination="ofertas"
      />

      <section className="page-section">
        <div className="page-container contact-story-grid">
          <div className="contact-story-copy">
            <p className="section-eyebrow">Nuestra historia</p>
            <h2>Una marca nacida del frío del sur</h2>
            <p>
              Mundo Polar nace con una idea simple: que el invierno se viva con
              comodidad, estilo y prendas que de verdad acompañen la rutina.
            </p>
            <p>
              Hoy trabajamos desde Lima, Perú, reuniendo colecciones pensadas
              para el clima frío, el uso diario y la vida en familia.
            </p>
            <div className="contact-stats-grid">
              {storyStats.map((stat) => (
                <article key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
          </div>
          <OptimizedImage
            kind="content"
            className="contact-story-image"
            src={ASSETS.nosotros.story04}
            alt="Persona disfrutando un paisaje invernal"
          />
        </div>
      </section>

      <section className="page-section page-section-dark contact-trust-section">
        <div className="page-container">
          <div className="contact-trust-header">
            <div>
              <p className="section-eyebrow">Por qué elegirnos</p>
              <h2>Más que una tienda de ropa</h2>
            </div>
            <p>
              Queremos que la experiencia de comprar abrigo sea clara, cálida y
              útil, no solo bonita.
            </p>
          </div>
          <div className="contact-trust-grid">
            {trustReasons.map((reason) => (
              <article key={reason}>
                <span>{reason.slice(0, 1)}</span>
                <h3>{reason}</h3>
              </article>
            ))}
          </div>
          <div className="contact-trust-cta">
            <p>Una colección pensada para acompañarte todo el invierno.</p>
            <button
              className="primary-button"
              type="button"
              onClick={() => navigateTo("ofertas")}
            >
              Explorar colección
            </button>
          </div>
        </div>
      </section>

      <section className="page-section contact-values-section">
        <div className="page-container">
          <div className="contact-values-header">
            <p className="section-eyebrow">Misión y valores</p>
            <h2>Lo que nos mueve cada día</h2>
            <p>
              Nuestra misión es que ninguna familia sienta que elegir ropa de
              invierno es complicado o impersonal.
            </p>
          </div>
          <div className="contact-values-grid">
            {missionValues.map((value) => (
              <article key={value.id}>
                <span>{value.id}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
          <blockquote className="contact-quote-card">
            <p>
              “Queremos que cada prenda de Mundo Polar se sienta útil, cálida y
              realmente pensada para durar.”
            </p>
            <span>Mundo Polar</span>
          </blockquote>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="page-container contact-sustainability-grid">
          <div>
            <p className="section-eyebrow">Moda responsable</p>
            <h2>Prendas que respetan el planeta</h2>
            <p>
              La referencia muestra una página larga y editorial; aquí
              reforzamos esa idea con una sección de materiales, procesos y
              decisiones responsables.
            </p>
            <ul className="contact-check-list">
              {sustainabilityChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="contact-products-mosaic">
            {featuredProducts.slice(0, 4).map((product) => (
              <article key={product.id}>
                <OptimizedImage
                  kind="product"
                  src={product.image}
                  alt={product.name}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <SectionHeader
            eyebrow="Estamos para ayudarte"
            title="Selección de prendas que representa la marca"
            description="Un bloque adicional de producto para que Nosotros tenga la misma sensación de página completa que la referencia."
          />
          <ProductGrid products={featuredProducts.slice(0, 4)} catalogScope="featured" />
        </div>
      </section>

      <Testimonials />

      <section className="contact-cta">
        <div className="page-container">
          <div>
            <p className="section-eyebrow">¿Tienes una consulta?</p>
            <h2>Conversemos sobre tu próxima compra</h2>
          </div>
          <button
            className="primary-button"
            type="button"
            onClick={() => navigateTo("contacto")}
          >
            Ir a contacto
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
}
