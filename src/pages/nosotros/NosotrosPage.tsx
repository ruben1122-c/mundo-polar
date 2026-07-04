import { OptimizedImage } from "@/app/components/OptimizedImage";
import { ProductGrid } from "@/app/components/Storefront";
import { navigateTo } from "@/app/navigation";
import { ASSETS } from "@/config/assets";
import { featuredProducts } from "@/data/catalog";
import { Check } from "lucide-react";

const storyStats = [
  { label: "Fundación", value: "2019" },
  { label: "Clientes", value: "50K+" },
  { label: "Sostenible", value: "100%" },
] as const;

const trustReasons = [
  { title: "Materiales sostenibles", text: "Lana reciclada, algodón orgánico y tintes amigables en cada prenda." },
  { title: "Calidez comprobada", text: "Diseños testeados en condiciones reales de frío extremo en la Patagonia." },
  { title: "Garantía vitalicia", text: "Si se rompe, lo reparamos. Comprometidos con la durabilidad." },
  { title: "Envío carbono neutro", text: "Compensamos el CO₂ de los envíos realizados con cada orden." },
] as const;

const values = [
  { id: "01", title: "Sostenibilidad", text: "Cada decisión considera su impacto en el planeta." },
  { id: "02", title: "Calidez", text: "No solo física: también en cómo tratamos a nuestra comunidad." },
  { id: "03", title: "Transparencia", text: "Sabemos de dónde viene cada material que usamos." },
  { id: "04", title: "Durabilidad", text: "Diseñamos para que dure, no para que compres de nuevo." },
] as const;

const materials = [
  "Lana 100% reciclada",
  "Algodón orgánico certificado GOTS",
  "Tintes vegetales y minerales",
  "Empaque sin plástico",
] as const;

const reviews = [
  { name: "Valentina R.", location: "Lima, Perú", image: ASSETS.nosotros.story01, text: "La chaqueta que compré para mi mascota es increíble. Súper abrigadora y el material se siente premium." },
  { name: "Marcos T.", location: "Mendoza, Argentina", image: ASSETS.nosotros.story02, text: "Llevo dos inviernos usando mi abrigo de Mundo Polar. No se ha deformado ni perdido color." },
  { name: "Carla M.", location: "Lima, Perú", image: ASSETS.nosotros.story03, text: "Me encantó que el empaque llegó sin plástico y con una tarjeta explicando de dónde viene el material." },
] as const;

export default function NosotrosPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <OptimizedImage priority kind="hero" className="about-hero-image" src={ASSETS.nosotros.hero} alt="Perro abrigado en la nieve" />
        <div className="about-hero-overlay" />
        <div className="page-container about-hero-content">
          <h1>Conoce a<br /><strong>Mundo Polar</strong></h1>
          <p>Somos Mundo Polar — una tienda de ropa de invierno para toda la familia. Diseño, calidez y materiales sostenibles en cada prenda.</p>
          <div className="about-hero-actions">
            <button type="button" onClick={() => navigateTo("ofertas")}>Ver colección</button>
            <button type="button" onClick={() => document.querySelector(".about-story")?.scrollIntoView({ behavior: "smooth" })}>Nuestra historia</button>
          </div>
        </div>
      </section>

      <section className="about-section about-story">
        <div className="page-container about-story-grid">
          <div>
            <p className="about-kicker">Quiénes somos</p>
            <h2>Una marca nacida<br />del frío del sur.</h2>
            <p>Fundados en Lima, Perú, en 2019, nacimos con una obsesión: que ninguna familia pase frío. Hoy vestimos a miles de personas en todo el país y Latinoamérica con prendas que respetan el planeta y duran años.</p>
            <div className="about-stats">
              {storyStats.map((stat) => <article key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}
            </div>
          </div>
          <OptimizedImage kind="content" src={ASSETS.nosotros.story04} alt="Persona contemplando una montaña nevada" />
        </div>
      </section>

      <section className="about-trust">
        <div className="page-container">
          <header className="about-trust-header">
            <div><p className="about-kicker">Nuestra propuesta de valor</p><h2>¿Por qué<br />elegirnos?</h2></div>
            <p>Somos más que una tienda. Somos el abrigo de tu familia en los meses más fríos del año.</p>
          </header>
          <div className="about-trust-grid">
            {trustReasons.map((reason) => (
              <article key={reason.title}><span><Check size={15} aria-hidden="true" /></span><h3>{reason.title}</h3><p>{reason.text}</p></article>
            ))}
          </div>
          <div className="about-trust-cta"><span>Más de 50,000 familias ya eligieron Mundo Polar</span><button type="button" onClick={() => navigateTo("ofertas")}>Ver colección</button></div>
        </div>
      </section>

      <section className="about-section about-values">
        <div className="page-container">
          <header><p className="about-kicker">Misión y valores</p><h2>Lo que nos mueve<br />cada día.</h2><p>Mundo Polar nació con una misión clara: que ninguna familia pase frío — y que hacerlo bien no signifique descuidar el planeta.</p></header>
          <div className="about-values-grid">
            {values.map((value) => <article key={value.id}><span>{value.id}</span><h3>{value.title}</h3><p>{value.text}</p></article>)}
          </div>
          <blockquote><p>“Nuestra misión es que cada prenda que vendemos sea una razón para disfrutar el invierno.”</p><footer><strong>Mundo Polar</strong><span>Fundada en 2019 · Perú</span></footer></blockquote>
        </div>
      </section>

      <section className="about-section about-materials">
        <div className="page-container about-materials-grid">
          <div><p className="about-kicker">Eco materiales</p><h2>Moda que respeta<br />el planeta.</h2><p>Todos nuestros materiales son trazables y sostenibles. La lana reciclada de la Patagonia, algodón orgánico certificado y tintes de origen natural.</p><ul>{materials.map((item) => <li key={item}><Check size={13} aria-hidden="true" />{item}</li>)}</ul></div>
          <div className="about-material-images">
            <OptimizedImage kind="content" src={ASSETS.nosotros.story01} alt="Material reciclado" />
            <OptimizedImage kind="content" src={ASSETS.nosotros.story02} alt="Material orgánico" />
            <OptimizedImage kind="content" src={ASSETS.nosotros.story03} alt="Tintes naturales" />
            <OptimizedImage kind="content" src={ASSETS.nosotros.story05} alt="Empaque responsable" />
          </div>
        </div>
      </section>

      <section className="about-section about-community">
        <div className="page-container">
          <header><p className="about-kicker">Valoración de clientes</p><h2>Lo que dice nuestra comunidad.</h2><div><strong>4.9</strong><span>★★★★★<small>+2,500 reseñas verificadas</small></span></div></header>
          <div className="about-review-grid">
            {reviews.map((review) => <article key={review.name}><OptimizedImage kind="content" src={review.image} alt="" /><p>“{review.text}”</p><footer><span className="about-review-avatar">{review.name.charAt(0)}</span><strong>{review.name}<small>{review.location}</small></strong><em>Compra verificada</em></footer></article>)}
          </div>
          <button className="about-all-reviews" type="button">Ver todas las reseñas ›</button>
        </div>
      </section>

      <section className="about-section about-contact-products">
        <div className="page-container about-contact-products-grid">
          <form onSubmit={(event) => event.preventDefault()}>
            <p className="about-kicker">Contáctanos</p><h2>Estamos para<br />ayudarte.</h2>
            <input aria-label="Nombre" placeholder="Nombre" required />
            <input type="email" aria-label="Correo electrónico" placeholder="Correo electrónico" required />
            <textarea aria-label="Mensaje" placeholder="Tu mensaje..." required />
            <button type="submit">Enviar mensaje</button>
          </form>
          <div><header><h3>Productos destacados</h3><button type="button" onClick={() => navigateTo("ofertas")}>Ver todo ›</button></header><ProductGrid products={featuredProducts.slice(0, 4)} catalogScope="featured" /></div>
        </div>
      </section>
      <div className="about-bottom-space" />
    </div>
  );
}
