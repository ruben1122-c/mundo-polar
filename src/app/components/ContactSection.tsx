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

const trustStats = [
  { label: "Fundacion", value: "2019" },
  { label: "Clientes", value: "50K+" },
  { label: "Satisfaccion", value: "100%" },
] as const;

const trustReasons = [
  "Materiales sostenibles",
  "Calidad comprobada",
  "Garantia vitalicia",
  "Envio carbono neutro",
] as const;

const missionValues = [
  {
    id: "01",
    title: "Sostenibilidad",
    text: "Cada decision considera su impacto en el planeta.",
  },
  {
    id: "02",
    title: "Calidez",
    text: "No solo fisica: tambien en como tratamos a nuestra comunidad.",
  },
  {
    id: "03",
    title: "Transparencia",
    text: "Sabemos de donde viene cada material que usamos.",
  },
  {
    id: "04",
    title: "Durabilidad",
    text: "Disenamos para que dure, no para que compres de nuevo.",
  },
] as const;

const sustainabilityChecklist = [
  "Lana 100% reciclada",
  "Algodon organico certificado GOTS",
  "Tintes vegetales y limpios",
  "Empaques sin plastico",
] as const;

const reviewCards = [
  {
    author: "Valentina R.",
    role: "Cliente fiel",
    image: ASSETS.ofertas.testimonial01,
    text: "La chaqueta que compre para mi mascota se ve increible. Super abrigadora y la marca se siente premium.",
  },
  {
    author: "Marcos T.",
    role: "Compra verificada",
    image: ASSETS.ofertas.testimonial02,
    text: "Uno de los inviernos mas frios y mi abrigo de Mundo Polar no me ha fallado ni un dia.",
  },
  {
    author: "Carla M.",
    role: "Cliente frecuente",
    image: ASSETS.ofertas.testimonial03,
    text: "Me encanto que el empaque sea ligero y que usen tejidos de mejor calidad. Repetire compra.",
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
      nextErrors.email = "Ingresa un correo valido.";
    }
    if (!values.subject.trim()) nextErrors.subject = "Ingresa el asunto.";
    if (values.message.trim().length < 10) {
      nextErrors.message = "Escribe un mensaje de al menos 10 caracteres.";
    }

    setErrors(nextErrors);
    setNotice("");

    if (Object.keys(nextErrors).length === 0) {
      setNotice("Formulario de demostracion: no se enviaron datos.");
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
          src={ASSETS.nosotros.hero}
          alt="Paisaje de invierno de Mundo Polar"
        />
        <div className="contact-hero-overlay" />
        <div className="page-container contact-hero-content">
          <p className="section-eyebrow">Conoce a Mundo Polar</p>
          <h1>Estamos para ayudarte y acompanarte todo el invierno</h1>
          <p>
            Cuida tu estilo, resuelve tus dudas y encuentra la prenda ideal con
            un equipo que conoce de abrigo, familia y comodidad.
          </p>
          <div className="contact-hero-actions">
            <button
              className="primary-button"
              type="button"
              onClick={() => navigateTo("ofertas")}
            >
              Ver coleccion
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
              Contactar ahora
            </button>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container contact-story-grid">
          <div className="contact-story-copy">
            <p className="section-eyebrow">Quienes somos</p>
            <h2>Una marca nacida del frio del sur</h2>
            <p>
              Fundados en Santiago en 2019, nacimos con una obsesion: que
              ninguna familia pase frio. Hoy vestimos a personas y mascotas con
              prendas que respetan el planeta y duran mas.
            </p>
            <div className="contact-stats-grid">
              {trustStats.map((stat) => (
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
            alt="Persona observando un paisaje nevado"
          />
        </div>
      </section>

      <section className="page-section page-section-dark contact-trust-section">
        <div className="page-container">
          <div className="contact-trust-header">
            <div>
              <p className="section-eyebrow">Nuestra propuesta de valor</p>
              <h2>Por que elegirnos?</h2>
            </div>
            <p>
              Somos mas que una tienda. Somos el abrigo de las familias en los
              meses mas frios del ano.
            </p>
          </div>
          <div className="contact-trust-grid">
            {trustReasons.map((reason) => (
              <article key={reason}>
                <span>
                  <Check size={16} aria-hidden="true" />
                </span>
                <h3>{reason}</h3>
              </article>
            ))}
          </div>
          <div className="contact-trust-cta">
            <p>Mas de 50,000 familias ya eligieron Mundo Polar.</p>
            <button
              className="primary-button"
              type="button"
              onClick={() => navigateTo("ofertas")}
            >
              Ver coleccion
            </button>
          </div>
        </div>
      </section>

      <section className="page-section contact-values-section">
        <div className="page-container">
          <div className="contact-values-header">
            <p className="section-eyebrow">Mision y valores</p>
            <h2>Lo que nos mueve cada dia</h2>
            <p>
              Mundo Polar nacio con una mision clara: que ninguna familia pase
              frio, y que hacerlo bien no signifique descuidar el planeta.
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
              "Nuestra mision es que cada prenda que vendemos sea una razon
              para disfrutar el invierno."
            </p>
            <span>Mundo Polar</span>
          </blockquote>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="page-container contact-sustainability-grid">
          <div>
            <p className="section-eyebrow">Eco materiales</p>
            <h2>Moda que respeta el planeta</h2>
            <p>
              Todos nuestros materiales son trazables y sostenibles. Lana
              reciclada, algodon organico certificado y tintes de origen
              natural.
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
                <OptimizedImage kind="product" src={product.image} alt={product.name} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <div className="contact-reviews-header">
            <p className="section-eyebrow">Valoracion de clientes</p>
            <h2>Lo que dice nuestra comunidad.</h2>
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
            Ver todas las reseñas
          </button>
        </div>
      </section>

      <section className="page-section page-section-soft" id="contact-form-anchor">
        <div className="page-container contact-bottom-grid">
          <div className="contact-form-column">
            <p className="section-eyebrow">Contactanos</p>
            <h2>Estamos para ayudarte.</h2>
            <p>
              Esta version valida tus datos localmente, pero todavia no envia
              mensajes a un backend real.
            </p>
            <div className="contact-details">
              <p>
                <MapPin aria-hidden="true" /> Lima, Peru
              </p>
              <p>
                <Phone aria-hidden="true" /> +51 962 690 195
              </p>
              <p>
                <Mail aria-hidden="true" /> contacto@mundopolar.com
              </p>
            </div>

            <form className="contact-form contact-form-compact" onSubmit={submit} noValidate>
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
                label="Correo electronico"
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
                  placeholder="Tu mensaje..."
                  rows={5}
                />
                {errors.message ? (
                  <small id="contact-message-error">{errors.message}</small>
                ) : null}
              </label>
              <button className="primary-button contact-submit" type="submit">
                Enviar mensaje
              </button>
              {notice ? <p className="form-notice" role="status">{notice}</p> : null}
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
