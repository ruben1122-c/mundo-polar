import { Footer } from "@/app/components/Footer";
import { ProductFavoriteCard } from "@/app/components/ProductFavoriteCard";
import { useShop } from "@/app/context/ShopContext";
import { Heart } from "lucide-react";

export default function FavoritosPage() {
  const { addToCart, favoriteItems, toggleFavorite } = useShop();

  return (
    <>
      <section className="account-page favorites-page">
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
                <ProductFavoriteCard
                  key={product.id}
                  product={product}
                  onAddToCart={addToCart}
                  onRemove={() => toggleFavorite(product)}
                />
              ))}
            </div>
          ) : (
            <div className="favorites-empty">
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
