import { CreditCard, Smartphone } from "lucide-react";
import type { PaymentMethod } from "@/types/order";

interface PaymentMethodSelectorProps {
  value: PaymentMethod;
  onChange: (method: PaymentMethod) => void;
}

export function PaymentMethodSelector({
  value,
  onChange,
}: PaymentMethodSelectorProps) {
  return (
    <div className="checkout-selector">
      <div
        className="checkout-choice-group"
        aria-label="Método de pago"
        role="group"
      >
        <button
          className={value === "card" ? "selected" : undefined}
          type="button"
          aria-pressed={value === "card"}
          onClick={() => onChange("card")}
        >
          <CreditCard size={18} aria-hidden="true" />
          Tarjeta
        </button>
        <button
          className={value === "yape" ? "selected" : undefined}
          type="button"
          aria-pressed={value === "yape"}
          onClick={() => onChange("yape")}
        >
          Yape
        </button>
        <button
          className={value === "plin" ? "selected" : undefined}
          type="button"
          aria-pressed={value === "plin"}
          onClick={() => onChange("plin")}
        >
          Plin
        </button>
      </div>

      {value === "card" ? (
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
            {value === "yape"
              ? "El código QR de Yape aparecerá aquí cuando exista una pasarela de pago."
              : "El código QR de Plin aparecerá aquí cuando exista una pasarela de pago."}
          </p>
        </div>
      )}
    </div>
  );
}
