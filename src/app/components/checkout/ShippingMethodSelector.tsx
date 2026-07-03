import { MapPin, Store } from "lucide-react";
import { useState } from "react";

type ShippingMethod = "delivery" | "store";

export function ShippingMethodSelector() {
  const [method, setMethod] = useState<ShippingMethod>("delivery");
  const [addressAdded, setAddressAdded] = useState(false);

  return (
    <div className="checkout-selector">
      <div
        className="checkout-choice-group"
        aria-label="Método de envío"
        role="group"
      >
        <button
          className={method === "delivery" ? "selected" : undefined}
          type="button"
          aria-pressed={method === "delivery"}
          onClick={() => setMethod("delivery")}
        >
          <MapPin size={18} aria-hidden="true" />
          Delivery
        </button>
        <button
          className={method === "store" ? "selected" : undefined}
          type="button"
          aria-pressed={method === "store"}
          onClick={() => setMethod("store")}
        >
          <Store size={18} aria-hidden="true" />
          Recojo en tienda
        </button>
      </div>

      {method === "delivery" ? (
        <div className="checkout-method-detail">
          <p>
            {addressAdded
              ? "Dirección mock: Av. Polar 123, Lima."
              : "No tienes una dirección guardada."}
          </p>
          <button
            className="checkout-inline-action"
            type="button"
            onClick={() => setAddressAdded((current) => !current)}
          >
            <MapPin size={17} aria-hidden="true" />
            {addressAdded ? "Quitar dirección" : "Añadir dirección"}
          </button>
        </div>
      ) : (
        <div className="checkout-method-message" role="status">
          <Store size={20} aria-hidden="true" />
          <p>
            Recojo mock en la tienda Mundo Polar de Lima. Te avisaremos cuando
            el pedido esté listo.
          </p>
        </div>
      )}
    </div>
  );
}
