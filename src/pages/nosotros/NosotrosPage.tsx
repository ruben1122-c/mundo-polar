import { ASSETS } from "@/config/assets";
import { Footer } from "@/app/components/Footer";
import {
  PageHero,
  SectionHeader,
  Testimonials,
} from "@/app/components/Storefront";
import { OptimizedImage } from "@/app/components/OptimizedImage";
import { navigateTo } from "@/app/navigation";

const values = [
  {
    number: "01",
    title: "Calidad garantizada",
    text: "Cada prenda pasa controles de calidad para ofrecer resistencia y comodidad temporada tras temporada.",
  },
  {
    number: "02",
    title: "Materiales responsables",
    text: "Priorizamos materiales reciclados y procesos que reduzcan el impacto ambiental.",
  },
  {
    number: "03",
    title: "Para toda la familia",
    text: "Mujer, hombre, niños y mascotas encuentran abrigo en una sola tienda.",
  },
  {
    number: "04",
    title: "Atención cercana",
    text: "Te orientamos para encontrar la prenda adecuada según tus necesidades.",
  },
] as const;

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Conoce a Mundo Polar"
        title="Más que una tienda de ropa"
        description="Diseño, calidez y materiales responsables en prendas pensadas para toda la familia."
        image={ASSETS.nosotros.hero}
        cta="Ver colección"
        destination="ofertas"
      />

      <section className="page-section">
        <div className="page-container story-layout">
          <OptimizedImage
            kind="content"
            src={ASSETS.nosotros.story01}
            alt="Familia disfrutando del invierno"
          />
          <div>
            <p className="section-eyebrow">Nuestra historia</p>
            <h2>El abrigo de tu familia en los meses más fríos</h2>
            <p>
              Desde nuestros inicios seleccionamos prendas que combinan diseño
              sencillo, máxima calidez y durabilidad. Queremos que cada miembro
              de la familia pueda disfrutar el invierno con comodidad.
            </p>
            <p>
              Mundo Polar trabaja desde Lima, Perú, con una mirada responsable
              hacia los materiales y los procesos de fabricación.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section page-section-dark">
        <div className="page-container">
          <SectionHeader
            eyebrow="Nuestra propuesta de valor"
            title="¿Por qué elegirnos?"
            description="Somos una marca cercana, práctica y comprometida con el bienestar de tu familia."
          />
          <div className="values-grid">
            {values.map((value) => (
              <article key={value.number}>
                <span>{value.number}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container story-layout story-layout-reverse">
          <div>
            <p className="section-eyebrow">Misión y valores</p>
            <h2>Lo que nos mueve cada día</h2>
            <p>
              Diseñamos una experiencia sencilla para que elegir ropa de
              invierno sea fácil, confiable y agradable.
            </p>
            <ul className="check-list">
              <li>Familia primero</li>
              <li>Diseño con propósito</li>
              <li>Responsabilidad ambiental</li>
              <li>Calidad sin concesiones</li>
            </ul>
          </div>
          <OptimizedImage
            kind="content"
            src={ASSETS.nosotros.story04}
            alt="Persona abrigada en un paisaje de invierno"
          />
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="page-container sustainability-layout">
          <div>
            <p className="section-eyebrow">Compromiso ambiental</p>
            <h2>Materiales más responsables</h2>
            <p>
              Elegimos cada material con conciencia para mantener a tu familia
              abrigada sin descuidar el futuro.
            </p>
          </div>
          <div className="sustainability-cards">
            <article><strong>80%</strong><span>Materiales reciclados</span></article>
            <article><strong>0</strong><span>Plástico en empaques</span></article>
            <article><strong>2026</strong><span>Meta de mejora ambiental</span></article>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="contact-cta">
        <div className="page-container">
          <div>
            <p className="section-eyebrow">¿Tienes una consulta?</p>
            <h2>Estamos para ayudarte</h2>
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
