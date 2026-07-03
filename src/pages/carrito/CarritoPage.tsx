import { Footer } from "@/app/components/Footer";
import { OptimizedImage } from "@/app/components/OptimizedImage";
import { useShop } from "@/app/context/ShopContext";
import { navigateTo } from "@/app/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";

const money = new Intl.NumberFormat("es-PE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export default function CarritoPage() {
  const {
    cartCount,
    cartItems,
    cartSubtotal,
    cartTotal,
    clearCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
  } = useShop();

  return (
    <>
      <section className="cart-page">
        <div className="cart-container">
          <header className="cart-page-header">
            <div>
              <p className="section-eyebrow">Tu selección</p>
              <h1>Carrito de compras</h1>
              <p>
                {cartCount} {cartCount === 1 ? "producto" : "productos"} en tu
                carrito
              </p>
            </div>
            {cartItems.length ? (
              <button className="cart-clear-button" type="button" onClick={clearCart}>
                <Trash2 size={17} aria-hidden="true" />
                Vaciar carrito
              </button>
            ) : null}
          </header>

          {cartItems.length ? (
            <div className="cart-layout">
              <div className="cart-item-list">
                {cartItems.map((item) => (
                  <article className="cart-item-card" key={item.id}>
                    <OptimizedImage
                      kind="thumbnail"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="cart-item-copy">
                      <h2>{item.name}</h2>
                      <p>{item.details ?? "Producto Mundo Polar"}</p>
                      {item.badge ? <span>{item.badge}</span> : null}
                      <strong>S/ {money.format(item.price)}</strong>
                    </div>
                    <div className="cart-item-controls">
                      <div
                        className="cart-quantity"
                        aria-label={`Cantidad de ${item.name}`}
                        role="group"
                      >
                        <button
                          type="button"
                          aria-label={`Disminuir cantidad de ${item.name}`}
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          <Minus size={17} aria-hidden="true" />
                        </button>
                        <span aria-live="polite">{item.quantity}</span>
                        <button
                          type="button"
                          aria-label={`Aumentar cantidad de ${item.name}`}
                          onClick={() => increaseQuantity(item.id)}
                        >
                          <Plus size={17} aria-hidden="true" />
                        </button>
                      </div>
                      <strong>
                        S/ {money.format(item.price * item.quantity)}
                      </strong>
                      <button
                        className="cart-remove-button"
                        type="button"
                        aria-label={`Eliminar ${item.name} del carrito`}
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={18} aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="cart-summary" aria-labelledby="cart-summary-title">
                <h2 id="cart-summary-title">Resumen del pedido</h2>
                <dl>
                  <div>
                    <dt>Subtotal ({cartCount} productos)</dt>
                    <dd>S/ {money.format(cartSubtotal)}</dd>
                  </div>
                  <div>
                    <dt>Envío</dt>
                    <dd className="cart-free-shipping">Gratis</dd>
                  </div>
                  <div className="cart-total-row">
                    <dt>Total</dt>
                    <dd>S/ {money.format(cartTotal)}</dd>
                  </div>
                </dl>
                <button
                  className="cart-checkout-button"
                  type="button"
                  onClick={() => navigateTo("checkout")}
                >
                  Ir a pagar
                  <ArrowRight size={18} aria-hidden="true" />
                </button>
                <button
                  className="cart-continue-button"
                  type="button"
                  onClick={() => navigateTo("inicio")}
                >
                  <ArrowLeft size={18} aria-hidden="true" />
                  Continuar comprando
                </button>
              </aside>
            </div>
          ) : (
            <div className="cart-empty">
              <span>
                <ShoppingBag size={34} aria-hidden="true" />
              </span>
              <h2>Tu carrito está vacío</h2>
              <p>Agrega productos para comenzar a preparar tu pedido.</p>
              <button
                className="primary-button"
                type="button"
                onClick={() => navigateTo("inicio")}
              >
                Continuar comprando
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
