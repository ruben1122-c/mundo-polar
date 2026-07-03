import { Footer } from "@/app/components/Footer";
import { OptimizedImage } from "@/app/components/OptimizedImage";
import { navigateTo } from "@/app/navigation";
import { ASSETS } from "@/config/assets";
import {
  ChevronDown,
  CircleHelp,
  CreditCard,
  Mail,
  MessageCircle,
  Package,
  RotateCcw,
  Search,
  ShieldCheck,
  Tag,
  Truck,
} from "lucide-react";
import { useMemo, useState } from "react";

type HelpCategory = "Todas" | "Envíos" | "Devoluciones" | "Pagos" | "Pedidos" | "Ofertas" | "Garantía";

interface FaqItem {
  id: string;
  category: Exclude<HelpCategory, "Todas">;
  question: string;
  answer: string;
}

const categories: ReadonlyArray<HelpCategory> = ["Todas", "Envíos", "Devoluciones", "Pagos", "Pedidos", "Ofertas", "Garantía"];

const faqs: ReadonlyArray<FaqItem> = [
  { id: "shipping-time", category: "Envíos", question: "¿Cuánto demora el envío estándar?", answer: "El envío estándar demora entre 2 y 5 días hábiles en Lima y entre 4 y 8 días hábiles para otras ciudades del Perú." },
  { id: "free-shipping", category: "Envíos", question: "¿Tienen envío gratis?", answer: "Sí. Ofrecemos envío gratis en campañas seleccionadas y para compras que superen el monto promocional indicado en el carrito." },
  { id: "return-size", category: "Devoluciones", question: "¿Puedo devolver un producto si no me quedó bien la talla?", answer: "Sí. Puedes solicitar un cambio o devolución mientras la prenda conserve sus etiquetas y no presente señales de uso." },
  { id: "return-process", category: "Devoluciones", question: "¿Cómo inicio un proceso de devolución?", answer: "Escríbenos desde Contacto con tu número de pedido. Nuestro equipo te enviará los pasos y la etiqueta de devolución cuando corresponda." },
  { id: "payment-methods", category: "Pagos", question: "¿Qué métodos de pago aceptan?", answer: "Aceptamos tarjetas de crédito y débito, además de los medios de pago mostrados durante el proceso de compra." },
  { id: "secure-payment", category: "Pagos", question: "¿Es seguro pagar en su sitio web?", answer: "Sí. La información de pago se procesa mediante conexiones seguras y Mundo Polar no almacena los datos completos de tu tarjeta." },
  { id: "track-order", category: "Pedidos", question: "¿Cómo puedo rastrear mi pedido?", answer: "Cuando tu pedido sea despachado recibirás el código de seguimiento. También puedes consultar el estado desde la opción Mis pedidos." },
  { id: "change-order", category: "Pedidos", question: "¿Puedo cancelar o modificar un pedido ya realizado?", answer: "Contáctanos cuanto antes. Si el pedido todavía no fue preparado, podremos ayudarte a modificarlo o cancelarlo." },
  { id: "new-offers", category: "Ofertas", question: "¿Con qué frecuencia publican nuevas ofertas?", answer: "Actualizamos las promociones durante toda la temporada. Suscríbete al boletín para conocerlas antes que nadie." },
  { id: "quality-warranty", category: "Garantía", question: "¿Qué cubre la garantía de calidad Mundo Polar?", answer: "Cubre defectos de fabricación en costuras, cierres y materiales dentro del plazo informado para cada producto." },
];

function CategoryIcon({ category }: { category: HelpCategory }) {
  const props = { size: 16, "aria-hidden": true as const };
  if (category === "Envíos") return <Truck {...props} />;
  if (category === "Devoluciones") return <RotateCcw {...props} />;
  if (category === "Pagos") return <CreditCard {...props} />;
  if (category === "Pedidos") return <Package {...props} />;
  if (category === "Ofertas") return <Tag {...props} />;
  if (category === "Garantía") return <ShieldCheck {...props} />;
  return null;
}

export default function HelpPage() {
  const [category, setCategory] = useState<HelpCategory>("Todas");
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const filteredFaqs = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("es");
    return faqs.filter((faq) => {
      const matchesCategory = category === "Todas" || faq.category === category;
      const matchesQuery = !normalized || `${faq.question} ${faq.answer}`.toLocaleLowerCase("es").includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="help-page">
      <section className="help-hero">
        <OptimizedImage priority kind="hero" className="help-hero-image" src={ASSETS.help.hero} alt="Persona abrigada durante una nevada" />
        <div className="help-hero-overlay" />
        <div className="page-container help-hero-content">
          <p className="help-eyebrow"><CircleHelp size={17} aria-hidden="true" /> Centro de ayuda</p>
          <h1>¿En qué podemos<br />ayudarte?</h1>
          <p>Encuentra respuestas rápidas a las preguntas más comunes sobre envíos, pagos, tallas y más.</p>
          <label className="help-search">
            <Search size={21} aria-hidden="true" />
            <span className="sr-only">Buscar una pregunta</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busca tu pregunta, ej: ¿cómo rastreo mi pedido?" />
          </label>
        </div>
      </section>

      <section className="help-faq-section">
        <div className="page-container">
          <div className="help-category-list" aria-label="Filtrar preguntas por categoría">
            {categories.map((item) => (
              <button key={item} className={category === item ? "active" : undefined} type="button" onClick={() => setCategory(item)} aria-pressed={category === item}>
                <CategoryIcon category={item} />{item}
              </button>
            ))}
          </div>

          {filteredFaqs.length ? (
            <div className="help-faq-grid">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <article className={isOpen ? "help-faq-card open" : "help-faq-card"} key={faq.id}>
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : faq.id)} aria-expanded={isOpen}>
                      <span className="help-faq-category">{faq.category}</span>
                      <strong>{faq.question}</strong>
                      <ChevronDown size={20} aria-hidden="true" />
                    </button>
                    {isOpen ? <p>{faq.answer}</p> : null}
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="help-empty-state">
              <CircleHelp size={30} aria-hidden="true" />
              <h2>No encontramos esa pregunta</h2>
              <p>Prueba con otra palabra o selecciona una categoría diferente.</p>
            </div>
          )}
        </div>
      </section>

      <section className="help-contact-strip">
        <div className="page-container help-contact-layout">
          <div>
            <p>¿No encontraste lo que buscabas?</p>
            <h2>Habla con nuestro equipo</h2>
            <span>Estamos disponibles de lunes a sábado de 9am a 7pm.<br />Respondemos en menos de 2 horas.</span>
          </div>
          <div className="help-contact-actions">
            <button type="button" onClick={() => navigateTo("contacto")}><MessageCircle size={18} aria-hidden="true" /> WhatsApp</button>
            <button type="button" onClick={() => navigateTo("contacto")}><Mail size={18} aria-hidden="true" /> Enviar correo</button>
          </div>
        </div>
      </section>

      <button className="help-chat-button" type="button" onClick={() => navigateTo("contacto")} aria-label="Abrir chat de ayuda">
        <MessageCircle size={26} aria-hidden="true" /><span />
      </button>
      <Footer />
    </div>
  );
}
