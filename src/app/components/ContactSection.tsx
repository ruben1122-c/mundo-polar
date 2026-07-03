import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Check,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import { ASSETS } from "@/config/assets";
import { featuredProducts } from "@/data/catalog";
import { navigateTo } from "@/app/navigation";
import { OptimizedImage } from "@/app/components/OptimizedImage";

interface ContactValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: ContactValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const supportStats = [
  { label: "Canales activos", value: "03" },
  { label: "Tiempo estimado", value: "24h" },
  { label: "Cobertura", value: "Lima, Perú" },
] as const;

const supportReasons = [
  "Asesoría para elegir tallas",
  "Dudas sobre cambios y envíos",
  "Orientación sobre colecciones",
  "Atención directa y cercana",
] as const;

const supportAreas = [
  {
    id: "01",
    title: "Antes de comprar",
    text: "Te ayudamos a elegir prendas, tallas y categorías según lo que necesites.",
  },
  {
    id: "02",
    title: "Durante tu pedido",
    text: "Resolvemos dudas sobre stock, tiempos y recomendaciones de compra.",
  },
  {
    id: "03",
    title: "Después de comprar",
    text: "Te orientamos con cambios, guía de uso y seguimiento general.",
  },
  {
    id: "04",
    title: "Atención continua",
    text: "Queremos que la experiencia sea clara incluso sin backend de contacto todavía.",
  },
] as const;

const faqChecklist = [
  "Guía de tallas y ajuste",
  "Cobertura de entrega en Lima",
  "Cambios y devoluciones",
  "Recomendaciones por categoría",
] as const;

const reviewCards = [
  {
    author: "Luis Pérez",
    role: "Compra verificada",
    image: ASSETS.ofertas.testimonial01,
    text: "Me orientaron rápido sobre tallas y elegí mejor el abrigo. La experiencia se sintió clara y cercana.",
  },
  {
    author: "Juan Soto",
    role: "Cliente frecuente",
    image: ASSETS.ofertas.testimonial02,
    text: "Las respuestas fueron directas y útiles. Se nota que conocen bien las colecciones del sitio.",
  },
  {
    author: "Marcos Díaz",
    role: "Cliente verificado",
    image: ASSETS.ofertas.testimonial03,
    text: "La página ahora se siente mucho más completa y el bloque de contacto ayuda bastante para cerrar la compra.",
  },
] as const;

export function ContactSection() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<ContactValues>>({});
  const [notice, setNotice] = useState("");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<ContactValues> = {};

    if (!values.name.trim()) nextErrors.name = "Ingresa tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Ingresa un correo válido.";
    }
    if (!values.subject.trim()) nextErrors.subject = "Ingresa el asunto.";
    if (values.message.trim().length < 10) {
      nextErrors.message = "Escribe un mensaje de al menos 10 caracteres.";
    }

    setErrors(nextErrors);
    setNotice("");

    if (Object.keys(nextErrors).length === 0) {
      setNotice("Formulario de demostración: no se enviaron datos.");
    }
  };

  const update = (field: keyof ContactValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  return (
    <section className="contact-page-shell">
      <section className="contact-hero">
        <OptimizedImage
          priority
          kind="hero"
          className="contact-hero-image"
          src={ASSETS.nosotros.story06}
          alt="Atención y soporte de Mundo Polar"
        />
        <div className="contact-hero-overlay" />
        <div className="page-container contact-hero-content">
          <p className="section-eyebrow">Contacto Mundo Polar</p>
          <h1>Hablemos sobre tu próximo abrigo</h1>
          <p>
            Resolvemos dudas sobre productos, tallas, envíos y colecciones para
            que tu compra sea más simple y segura.
          </p>
          <div className="contact-hero-actions">
            <button
              className="primary-button"
              type="button"
              onClick={() => navigateTo("ofertas")}
            >
              Ver colección
            </button>
            <button
              className="outline-button"
              type="button"
              onClick={() => {
                document
                  .getElementById("contact-form-anchor")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Escribir mensaje
            </button>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container contact-story-grid">
          <div className="contact-story-copy">
            <p className="section-eyebrow">Cómo te ayudamos</p>
            <h2>Atención cercana para cada consulta</h2>
            <p>
              Esta página ahora cumple mejor el rol de Contacto: explicar cómo
              acompañamos al usuario y dejar un punto claro para escribirnos.
            </p>
            <p>
              Mantenemos el frontend visual y funcional, pero con una estructura
              más completa y alineada a la referencia general del proyecto.
            </p>
            <div className="contact-stats-grid">
              {supportStats.map((stat) => (
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
            src={ASSETS.nosotros.story02}
            alt="Cliente revisando prendas de invierno"
          />
        </div>
      </section>

      <section className="page-section page-section-dark contact-trust-section">
        <div className="page-container">
          <div className="contact-trust-header">
            <div>
              <p className="section-eyebrow">Motivos para escribirnos</p>
              <h2>Estamos aquí para orientarte</h2>
            </div>
            <p>
              Si no sabes qué producto elegir o quieres validar detalles antes
              de comprar, este es el punto de contacto correcto.
            </p>
          </div>
          <div className="contact-trust-grid">
            {supportReasons.map((reason) => (
              <article key={reason}>
                <span>
                  <Check size={16} aria-hidden="true" />
                </span>
                <h3>{reason}</h3>
              </article>
            ))}
          </div>
          <div className="contact-trust-cta">
            <p>Te respondemos con un enfoque práctico y sin rodeos.</p>
            <button
              className="primary-button"
              type="button"
              onClick={() => navigateTo("perfil")}
            >
              Ver mi cuenta
            </button>
          </div>
        </div>
      </section>

      <section className="page-section contact-values-section">
        <div className="page-container">
          <div className="contact-values-header">
            <p className="section-eyebrow">Soporte</p>
            <h2>Así acompañamos tu experiencia</h2>
            <p>
              Reemplazamos el contenido demasiado “nosotros” por una estructura
              más propia de Contacto, manteniendo el lenguaje visual del sitio.
            </p>
          </div>
          <div className="contact-values-grid">
            {supportAreas.map((value) => (
              <article key={value.id}>
                <span>{value.id}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
          <blockquote className="contact-quote-card">
            <p>
              “Queremos que pedir ayuda en Mundo Polar se sienta tan claro como
              comprar una buena prenda de invierno.”
            </p>
            <span>Equipo Mundo Polar</span>
          </blockquote>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="page-container contact-sustainability-grid">
          <div>
            <p className="section-eyebrow">Consultas frecuentes</p>
            <h2>Temas en los que más te orientamos</h2>
            <p>
              Esta sección ocupa el espacio que antes se veía genérico y ayuda a
              que Contacto tenga una narrativa más completa.
            </p>
            <ul className="contact-check-list">
              {faqChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="contact-products-mosaic">
            {featuredProducts.slice(0, 4).map((product) => (
              <article key={product.id}>
                <OptimizedImage kind="product" src={product.image} alt={product.name} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="contact-reviews-header">
            <p className="section-eyebrow">Opiniones</p>
            <h2>Lo que dicen nuestros clientes.</h2>
            <div className="contact-review-score">
              <strong>4.9</strong>
              <div>
                <div className="product-rating" aria-label="5 estrellas">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={15} />
                  ))}
                </div>
                <span>+12,000 reseñas verificadas</span>
              </div>
            </div>
          </div>
          <div className="contact-review-grid">
            {reviewCards.map((review) => (
              <article className="contact-review-card" key={review.author}>
                <p>{review.text}</p>
                <footer>
                  <OptimizedImage
                    kind="thumbnail"
                    src={review.image}
                    alt={review.author}
                  />
                  <div>
                    <strong>{review.author}</strong>
                    <span>{review.role}</span>
                  </div>
                </footer>
              </article>
            ))}
          </div>
          <button className="outline-button contact-review-button" type="button">
            Ver más comentarios
          </button>
        </div>
      </section>

      <section className="page-section page-section-soft" id="contact-form-anchor">
        <div className="page-container contact-bottom-grid">
          <div className="contact-form-column">
            <p className="section-eyebrow">Contáctanos</p>
            <h2>Escríbenos y te orientamos.</h2>
            <p>
              Esta versión valida tus datos localmente, pero todavía no envía
              mensajes a un backend real.
            </p>
            <div className="contact-details">
              <p>
                <MapPin aria-hidden="true" /> Lima, Perú
              </p>
              <p>
                <Phone aria-hidden="true" /> +51 962 690 195
              </p>
              <p>
                <Mail aria-hidden="true" /> contacto@mundopolar.com
              </p>
            </div>

            <form
              className="contact-form contact-form-compact"
              onSubmit={submit}
              noValidate
            >
              <Field
                id="contact-name"
                label="Nombre"
                value={values.name}
                error={errors.name}
                onChange={(value) => update("name", value)}
                autoComplete="name"
              />
              <Field
                id="contact-email"
                label="Correo electrónico"
                value={values.email}
                error={errors.email}
                onChange={(value) => update("email", value)}
                autoComplete="email"
                type="email"
              />
              <Field
                id="contact-subject"
                label="Asunto"
                value={values.subject}
                error={errors.subject}
                onChange={(value) => update("subject", value)}
              />
              <label className="form-field" htmlFor="contact-message">
                <span>Mensaje</span>
                <textarea
                  id="contact-message"
                  value={values.message}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  onChange={(event) => update("message", event.target.value)}
                  placeholder="Cuéntanos tu consulta..."
                  rows={5}
                />
                {errors.message ? (
                  <small id="contact-message-error">{errors.message}</small>
                ) : null}
              </label>
              <button className="primary-button contact-submit" type="submit">
                Enviar mensaje
              </button>
              {notice ? (
                <p className="form-notice" role="status">
                  {notice}
                </p>
              ) : null}
            </form>
          </div>

          <div className="contact-products-column">
            <div className="contact-products-column-header">
              <h3>Productos destacados</h3>
              <button
                className="text-action"
                type="button"
                onClick={() => navigateTo("ofertas")}
              >
                Ver todo <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
            <div className="contact-products-strip">
              {featuredProducts.slice(0, 4).map((product) => (
                <article key={product.id}>
                  <OptimizedImage kind="product" src={product.image} alt={product.name} />
                  <strong>{product.name}</strong>
                  <span>S/ {product.price}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  error?: string;
  type?: "text" | "email";
  autoComplete?: string;
  onChange: (value: string) => void;
}

function Field({
  id,
  label,
  value,
  error,
  type = "text",
  autoComplete,
  onChange,
}: FieldProps) {
  return (
    <label className="form-field" htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      {error ? <small id={`${id}-error`}>{error}</small> : null}
    </label>
  );
}
