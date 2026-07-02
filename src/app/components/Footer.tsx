import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ASSETS } from "@/config/assets";
import { OptimizedImage } from "./OptimizedImage";
import { navigateTo } from "../navigation";

export function Footer() {
  const [notice, setNotice] = useState("");

  return (
    <footer className="site-footer">
      <div className="page-container footer-newsletter">
        <div>
          <p className="section-eyebrow">Novedades Mundo Polar</p>
          <h2>Mantente al día</h2>
          <p>
            Recibe novedades y promociones de nuestra colección de invierno.
          </p>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setNotice("Suscripción de demostración: no se enviaron datos.");
          }}
        >
          <label className="sr-only" htmlFor="footer-email">
            Correo electrónico
          </label>
          <input
            id="footer-email"
            name="email"
            type="email"
            placeholder="Tu correo electrónico"
            required
          />
          <button type="submit">Suscribirme</button>
          {notice ? <p className="form-notice" role="status">{notice}</p> : null}
        </form>
      </div>

      <div className="footer-main">
        <div className="page-container footer-grid">
          <div className="footer-brand">
            <OptimizedImage
              loading="lazy"
              src={ASSETS.logo}
              alt="Mundo Polar"
            />
            <p>
              Ropa de invierno para mujer, hombre, niños y mascotas. Calidez y
              estilo para toda la familia.
            </p>
          </div>

          <div>
            <h3>Contacto</h3>
            <ul className="footer-list">
              <li><MapPin size={18} aria-hidden="true" /> Lima, Perú</li>
              <li><Phone size={18} aria-hidden="true" /> +51 962 690 195</li>
              <li><Mail size={18} aria-hidden="true" /> contacto@mundopolar.com</li>
            </ul>
          </div>

          <div>
            <h3>Conócenos</h3>
            <ul className="footer-links">
              <li><button type="button" onClick={() => navigateTo("nosotros")}>Sobre nosotros</button></li>
              <li><button type="button" onClick={() => navigateTo("ofertas")}>Nuestra colección</button></li>
              <li><button type="button" onClick={() => navigateTo("contacto")}>Contáctanos</button></li>
            </ul>
          </div>

          <div>
            <h3>Información</h3>
            <ul className="footer-links">
              <li>Términos y condiciones</li>
              <li>Política de privacidad</li>
              <li>Guía de tallas</li>
              <li>Cambios y devoluciones</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="page-container">
          <p>© 2026 Mundo Polar — Todos los derechos reservados.</p>
          <OptimizedImage src={ASSETS.shared.footerMarks} alt="" />
        </div>
      </div>
    </footer>
  );
}
