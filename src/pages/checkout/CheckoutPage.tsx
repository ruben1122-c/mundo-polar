import { CheckoutSection } from "@/app/components/checkout/CheckoutSection";
import { CheckoutSummary } from "@/app/components/checkout/CheckoutSummary";
import { PaymentMethodSelector } from "@/app/components/checkout/PaymentMethodSelector";
import { ShippingMethodSelector } from "@/app/components/checkout/ShippingMethodSelector";
import { Footer } from "@/app/components/Footer";
import { useAuth } from "@/app/context/AuthContext";
import { useShop } from "@/app/context/ShopContext";
import { navigateTo } from "@/app/navigation";
import { createPendingOrder } from "@/services/orderService";
import type { PaymentMethod, ShippingMethod } from "@/types/order";
import { ChevronRight, Mail, Phone, UserRound } from "lucide-react";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useShop();
  const { profile, session } = useAuth();
  const [notice, setNotice] = useState("");
  const [shippingMethod, setShippingMethod] =
    useState<ShippingMethod>("delivery");
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("card");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fullName = profile
    ? `${profile.first_name} ${profile.last_name}`.trim()
    : "";
  const customerDetails = profile
    ? [
        { label: "Nombre completo", value: fullName, Icon: UserRound },
        { label: "Correo", value: profile.email, Icon: Mail },
        {
          label: "Teléfono",
          value: profile.phone || "No registrado",
          Icon: Phone,
        },
      ]
    : [];

  const handleConfirm = async () => {
    if (!cartItems.length || !profile || !session || isSubmitting) return;

    try {
      setIsSubmitting(true);
      setNotice("");
      const order = await createPendingOrder(
        {
          customer_name: fullName,
          customer_email: profile.email,
          customer_phone: profile.phone ?? undefined,
          shipping_method: shippingMethod,
          shipping_address:
            shippingMethod === "delivery"
              ? { address: "Av. Polar 123", city: "Lima", country: "Perú" }
              : undefined,
          payment_method: paymentMethod,
          notes: notes.trim() || undefined,
          items: cartItems.map((item) => ({
            product_reference: item.id,
            quantity: item.quantity,
          })),
        },
        session.access_token,
      );

      clearCart();
      setNotice(
        `Pedido ${order.order_number} registrado como pendiente. No se procesó ningún pago.`,
      );
    } catch (error: unknown) {
      setNotice(
        error instanceof Error
          ? error.message
          : "No se pudo registrar el pedido.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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
                {profile ? (
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
                ) : (
                  <p className="auth-message error">
                    No se pudo cargar tu perfil. Vuelve a iniciar sesión.
                  </p>
                )}
              </CheckoutSection>

              <CheckoutSection
                title="Método de envío"
                description="Elige cómo quieres recibir tu pedido."
              >
                <ShippingMethodSelector
                  value={shippingMethod}
                  onChange={setShippingMethod}
                />
              </CheckoutSection>

              <CheckoutSection
                title="Método de pago"
                description="Selecciona una opción para esta demostración."
              >
                <PaymentMethodSelector
                  value={paymentMethod}
                  onChange={setPaymentMethod}
                />
              </CheckoutSection>

              <CheckoutSection title="Observación">
                <label className="checkout-field">
                  <span>Observaciones adicionales</span>
                  <textarea
                    rows={5}
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    placeholder="Ejemplo: usar el timbre, entregar al portero, referencia de dirección, etc."
                  />
                </label>
              </CheckoutSection>
            </div>

            <CheckoutSummary
              notice={notice}
              products={cartItems}
              isSubmitting={isSubmitting || !profile}
              onConfirm={handleConfirm}
              onBack={() => navigateTo("carrito")}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
