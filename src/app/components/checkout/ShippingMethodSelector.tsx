import { MapPin, Store } from "lucide-react";
import { useState } from "react";

import type { ShippingMethod } from "@/types/order";

interface ShippingMethodSelectorProps {
  value: ShippingMethod;
  onChange: (method: ShippingMethod) => void;
}

export function ShippingMethodSelector({
  value,
  onChange,
}: ShippingMethodSelectorProps) {
  const [addressAdded, setAddressAdded] = useState(false);

  return (
    <div className="checkout-selector">
      <div
        className="checkout-choice-group"
        aria-label="Método de envío"
        role="group"
      >
        <button
          className={value === "delivery" ? "selected" : undefined}
          type="button"
          aria-pressed={value === "delivery"}
          onClick={() => onChange("delivery")}
        >
          <MapPin size={18} aria-hidden="true" />
          Delivery
        </button>
        <button
          className={value === "store_pickup" ? "selected" : undefined}
          type="button"
          aria-pressed={value === "store_pickup"}
          onClick={() => onChange("store_pickup")}
        >
          <Store size={18} aria-hidden="true" />
          Recojo en tienda
        </button>
      </div>

      {value === "delivery" ? (
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
