import { Footer } from "@/app/components/Footer";
import { ProductFavoriteCard } from "@/app/components/ProductFavoriteCard";
import { useShop } from "@/app/context/ShopContext";
import { useToast } from "@/app/context/ToastContext";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function FavoritosPage() {
  const { addToCart, favoriteItems, toggleFavorite } = useShop();
  const { showToast } = useToast();
  const [removingId, setRemovingId] = useState<string | null>(null);

  const handleRemove = (product: any) => {
    setRemovingId(product.id);
    setTimeout(() => {
      toggleFavorite(product);
      showToast(`Quitado de favoritos: ${product.name}`, "info");
    }, 320);
  };

  const handleAddToCart = (product: any) => {
    addToCart(product);
    showToast(`Agregado al carrito: ${product.name}`, "success");
  };

  return (
    <>
      <section className="account-page favorites-page animate-page-enter">
        <div className="account-page-container">
          <header className="account-page-header">
            <h1>Mis favoritos</h1>
            <p>
              {favoriteItems.length}{" "}
              {favoriteItems.length === 1
                ? "producto guardado"
                : "productos guardados"}
            </p>
          </header>

          {favoriteItems.length ? (
            <div className="favorite-product-list">
              {favoriteItems.map((product) => (
                <div
                  key={product.id}
                  className={`transition-all duration-300 ${
                    removingId === product.id ? "cart-item-removing" : ""
                  }`}
                >
                  <ProductFavoriteCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onRemove={() => handleRemove(product)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="favorites-empty animate-page-enter">
              <span>
                <Heart size={28} aria-hidden="true" />
              </span>
              <h2>Aún no tienes favoritos</h2>
              <p>Los productos que guardes aparecerán en esta sección.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
