import { CheckoutSection } from "@/app/components/checkout/CheckoutSection";
import { CheckoutSummary } from "@/app/components/checkout/CheckoutSummary";
import { PaymentMethodSelector } from "@/app/components/checkout/PaymentMethodSelector";
import { ShippingMethodSelector } from "@/app/components/checkout/ShippingMethodSelector";
import { Footer } from "@/app/components/Footer";
import { useShop } from "@/app/context/ShopContext";
import { navigateTo } from "@/app/navigation";
import { ChevronRight, Mail, Phone, UserRound } from "lucide-react";
import { useState } from "react";

const customerDetails = [
  { label: "Nombre completo", value: "Jose Perez", Icon: UserRound },
  { label: "Correo", value: "joseperez@email.com", Icon: Mail },
  { label: "Teléfono", value: "999 999 999", Icon: Phone },
] as const;

export default function CheckoutPage() {
  const { cartItems } = useShop();
  const [notice, setNotice] = useState("");

  return (
    <>
      <section className="checkout-page">
        <div className="checkout-container">
          <nav className="checkout-breadcrumb" aria-label="Ruta de compra">
            <button type="button" onClick={() => navigateTo("carrito")}>
              Carrito
            </button>
            <ChevronRight size={16} aria-hidden="true" />
            <strong aria-current="page">Checkout</strong>
          </nav>

          <header className="checkout-page-header">
            <p className="section-eyebrow">Checkout</p>
            <h1>Ir a pagar</h1>
            <p>
              Revisa tu pedido, completa tus datos y elige el método de envío y
              pago.
            </p>
          </header>

          <div className="checkout-layout">
            <div className="checkout-form-column">
              <CheckoutSection title="Información del cliente">
                <dl className="checkout-customer-grid">
                  {customerDetails.map(({ Icon, label, value }) => (
                    <div key={label}>
                      <span className="checkout-detail-icon">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </CheckoutSection>

              <CheckoutSection
                title="Método de envío"
                description="Elige cómo quieres recibir tu pedido."
              >
                <ShippingMethodSelector />
              </CheckoutSection>

              <CheckoutSection
                title="Método de pago"
                description="Selecciona una opción para esta demostración."
              >
                <PaymentMethodSelector />
              </CheckoutSection>

              <CheckoutSection title="Observación">
                <label className="checkout-field">
                  <span>Observaciones adicionales</span>
                  <textarea
                    rows={5}
                    placeholder="Ejemplo: usar el timbre, entregar al portero, referencia de dirección, etc."
                  />
                </label>
              </CheckoutSection>
            </div>

            <CheckoutSummary
              notice={notice}
              products={cartItems}
              onConfirm={() =>
                setNotice(
                  "Pago de demostración confirmado. No se procesó ningún cobro.",
                )
              }
              onBack={() => navigateTo("carrito")}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
