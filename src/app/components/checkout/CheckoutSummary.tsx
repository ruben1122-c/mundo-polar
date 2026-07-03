import { OptimizedImage } from "@/app/components/OptimizedImage";
import type { CheckoutProduct } from "@/data/products";
import { ArrowLeft, LockKeyhole } from "lucide-react";

interface CheckoutSummaryProps {
  notice: string;
  onBack: () => void;
  onConfirm: () => void;
  products: ReadonlyArray<CheckoutProduct>;
}

const money = new Intl.NumberFormat("es-PE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function CheckoutSummary({
  notice,
  onBack,
  onConfirm,
  products,
}: CheckoutSummaryProps) {
  const itemCount = products.reduce((total, product) => total + product.quantity, 0);
  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <aside className="checkout-summary" aria-labelledby="checkout-summary-title">
      <h2 id="checkout-summary-title">Resumen</h2>

      <div className="checkout-summary-products">
        {products.map((product) => (
          <article key={product.id} className="checkout-summary-product">
            <OptimizedImage
              kind="thumbnail"
              src={product.image}
              alt={product.name}
            />
            <div>
              <h3>{product.name}</h3>
              <p>{product.details}</p>
              {product.badge ? <span>{product.badge}</span> : null}
              <small>Cantidad: {product.quantity}</small>
            </div>
            <strong>S/ {money.format(product.price * product.quantity)}</strong>
          </article>
        ))}
      </div>

      <dl className="checkout-totals">
        <div>
          <dt>Subtotal ({itemCount} productos)</dt>
          <dd>S/ {money.format(subtotal)}</dd>
        </div>
        <div>
          <dt>Envío</dt>
          <dd className="checkout-free-shipping">Gratis</dd>
        </div>
        <div className="checkout-total-row">
          <dt>Total</dt>
          <dd>S/ {money.format(subtotal)}</dd>
        </div>
      </dl>

      <div className="checkout-summary-actions">
        <button className="checkout-confirm-button" type="button" onClick={onConfirm}>
          <LockKeyhole size={18} aria-hidden="true" />
          Confirmar pago
        </button>
        <button className="checkout-back-button" type="button" onClick={onBack}>
          <ArrowLeft size={18} aria-hidden="true" />
          Volver al carrito
        </button>
      </div>

      {notice ? (
        <p className="checkout-summary-notice" role="status">
          {notice}
        </p>
      ) : null}
    </aside>
  );
}
