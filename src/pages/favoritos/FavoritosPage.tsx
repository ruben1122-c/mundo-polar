import { Footer } from "@/app/components/Footer";
import { ProductFavoriteCard } from "@/app/components/ProductFavoriteCard";
import { favoriteProducts } from "@/data/products";
import { Heart } from "lucide-react";
import { useState } from "react";

export default function FavoritosPage() {
  const [products, setProducts] = useState(() => [...favoriteProducts]);

  const removeFavorite = (productId: string) => {
    setProducts((current) =>
      current.filter((product) => product.id !== productId),
    );
  };

  return (
    <>
      <section className="account-page favorites-page">
        <div className="account-page-container">
          <header className="account-page-header">
            <h1>Mis favoritos</h1>
            <p>
              {products.length}{" "}
              {products.length === 1
                ? "producto guardado"
                : "productos guardados"}
            </p>
          </header>

          {products.length ? (
            <div className="favorite-product-list">
              {products.map((product) => (
                <ProductFavoriteCard
                  key={product.id}
                  product={product}
                  onRemove={removeFavorite}
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
