import { CreditCard, Smartphone } from "lucide-react";
import { useState } from "react";

type PaymentMethod = "card" | "yape" | "plin";

export function PaymentMethodSelector() {
  const [method, setMethod] = useState<PaymentMethod>("card");

  return (
    <div className="checkout-selector">
      <div
        className="checkout-choice-group"
        aria-label="Método de pago"
        role="group"
      >
        <button
          className={method === "card" ? "selected" : undefined}
          type="button"
          aria-pressed={method === "card"}
          onClick={() => setMethod("card")}
        >
          <CreditCard size={18} aria-hidden="true" />
          Tarjeta
        </button>
        <button
          className={method === "yape" ? "selected" : undefined}
          type="button"
          aria-pressed={method === "yape"}
          onClick={() => setMethod("yape")}
        >
          Yape
        </button>
        <button
          className={method === "plin" ? "selected" : undefined}
          type="button"
          aria-pressed={method === "plin"}
          onClick={() => setMethod("plin")}
        >
          Plin
        </button>
      </div>

      {method === "card" ? (
        <div className="checkout-payment-fields">
          <label className="checkout-field checkout-field-wide">
            <span>Número de tarjeta</span>
            <input
              inputMode="numeric"
              placeholder="0000 0000 0000 0000"
              autoComplete="cc-number"
            />
          </label>
          <label className="checkout-field">
            <span>Vencimiento</span>
            <input
              inputMode="numeric"
              placeholder="MM/AA"
              autoComplete="cc-exp"
            />
          </label>
          <label className="checkout-field">
            <span>CVV</span>
            <input
              inputMode="numeric"
              placeholder="•••"
              autoComplete="cc-csc"
            />
          </label>
        </div>
      ) : (
        <div className="checkout-method-message" role="status">
          <Smartphone size={20} aria-hidden="true" />
          <p>
            {method === "yape"
              ? "El código QR de Yape aparecerá aquí cuando exista una pasarela de pago."
              : "El código QR de Plin aparecerá aquí cuando exista una pasarela de pago."}
          </p>
        </div>
      )}
    </div>
  );
}
