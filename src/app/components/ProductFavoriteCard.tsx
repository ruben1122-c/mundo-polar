import { OptimizedImage } from "@/app/components/OptimizedImage";
import type { FavoriteProduct } from "@/data/products";
import { Check, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface ProductFavoriteCardProps {
  product: FavoriteProduct;
  onRemove: (productId: string) => void;
}

const priceFormatter = new Intl.NumberFormat("es-PE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function ProductFavoriteCard({
  product,
  onRemove,
}: ProductFavoriteCardProps) {
  const [added, setAdded] = useState(false);

  return (
    <article className="favorite-product-card">
      <OptimizedImage
        className="favorite-product-image"
        kind="thumbnail"
        src={product.image}
        alt={product.name}
      />

      <div className="favorite-product-copy">
        <h2>{product.name}</h2>
        <p>{product.details}</p>
        {product.badge ? <span>{product.badge}</span> : null}
        <strong>S/ {priceFormatter.format(product.price)}</strong>
      </div>

      <div className="favorite-product-actions">
        <button
          className={added ? "favorite-cart-button added" : "favorite-cart-button"}
          type="button"
          onClick={() => setAdded((current) => !current)}
          aria-pressed={added}
        >
          {added ? (
            <Check size={18} aria-hidden="true" />
          ) : (
            <ShoppingCart size={18} aria-hidden="true" />
          )}
          {added ? "Agregado" : "Agregar al carrito"}
        </button>
        <button
          className="favorite-heart-button"
          type="button"
          aria-label={`Quitar ${product.name} de favoritos`}
          onClick={() => onRemove(product.id)}
        >
          <Heart size={21} fill="currentColor" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}
