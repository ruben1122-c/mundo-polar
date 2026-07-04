import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Heart, Minus, Plus, ShoppingCart, X } from "lucide-react";
import { OptimizedImage } from "../OptimizedImage";
import { useShop, type ShopProduct } from "../../context/ShopContext";
import { useToast } from "../../context/ToastContext";

interface ProductMetadata {
  description: string;
  colors: Array<{ name: string; hex: string }>;
  sizes: string[];
}

const DEFAULT_METADATA: ProductMetadata = {
  description:
    "Prenda de invierno premium de nuestra colección. Confeccionada con materiales seleccionados para ofrecer la máxima calidez, suavidad y comodidad durante toda la temporada.",
  colors: [
    { name: "azul marino", hex: "#193153" },
    { name: "celeste hielo", hex: "#badcf2" },
    { name: "beige", hex: "#d9c8ae" },
    { name: "gris pizarra", hex: "#8fa0b0" },
  ],
  sizes: ["S", "M", "L", "XL"],
};

const PRODUCT_METADATA_MAP: Record<string, Partial<ProductMetadata>> = {
  "casaca-impermeable": {
    description:
      "Casaca térmica y ligera para invierno. Ideal para usar en clases, salidas o días fríos. Tiene forro suave, capucha y bolsillos frontales.",
    colors: [
      { name: "azul marino", hex: "#193153" },
      { name: "celeste hielo", hex: "#badcf2" },
      { name: "beige", hex: "#d9c8ae" },
      { name: "gris pizarra", hex: "#8fa0b0" },
    ],
  },
  "chaqueta-capucha": {
    description:
      "Chaqueta de invierno con forro de sherpa y capucha ajustable. Excelente aislamiento térmico para bajas temperaturas.",
    colors: [
      { name: "marrón", hex: "#8B5A2B" },
      { name: "negro", hex: "#111827" },
      { name: "beige", hex: "#d9c8ae" },
    ],
  },
  "abrigo-corto": {
    description:
      "Elegante abrigo corto de lana con botones frontales. Una opción clásica y abrigadora para la temporada de frío.",
    colors: [
      { name: "marrón", hex: "#8B5A2B" },
      { name: "negro", hex: "#111827" },
    ],
  },
  "sueter-beige": {
    description:
      "Suéter de poliéster texturizado de color beige neutro. Tejido de alta calidad y tacto ultra suave.",
    colors: [
      { name: "beige", hex: "#d9c8ae" },
      { name: "hueso", hex: "#f4f1ea" },
      { name: "marrón", hex: "#8B5A2B" },
    ],
  },
  "camiseta-algodon": {
    description:
      "Camiseta clásica de algodón pesado con corte clásico y costuras reforzadas. Ideal como capa base para usar con casacas.",
    colors: [
      { name: "gris pizarra", hex: "#8fa0b0" },
      { name: "negro", hex: "#111827" },
      { name: "blanco", hex: "#F9FAFB" },
    ],
  },
  "sueter-cuello-alto": {
    description:
      "Suéter tejido de cuello alto que proporciona gran calidez y elegancia. Combinación perfecta de confort y sofisticación.",
    colors: [
      { name: "negro", hex: "#111827" },
      { name: "gris pizarra", hex: "#8fa0b0" },
      { name: "beige", hex: "#d9c8ae" },
    ],
  },
  "capa-termica": {
    description:
      "Prenda de capa base para retener el calor corporal en condiciones de frío extremo. Tejido transpirable y de secado rápido.",
  },
  "polo-cuello-alto": {
    description:
      "Polo térmico entallado con cuello alto para una máxima protección del cuello. Ideal para usar debajo de casacas.",
  },
  "vestido-tejido": {
    description:
      "Vestido tejido con ajuste de invierno. Cómodo, elegante y abrigador, ideal para combinar con botas altas.",
    colors: [
      { name: "beige", hex: "#d9c8ae" },
      { name: "gris pizarra", hex: "#8fa0b0" },
      { name: "azul marino", hex: "#193153" },
    ],
  },
  "top-rayas": {
    description:
      "Top tejido con patrón clásico de rayas horizontales. Un toque retro y sofisticado para tus combinaciones invernales.",
  },
  "medias-lana": {
    description:
      "Medias de lana gruesas para calzado de invierno. Suela acolchada para mayor comodidad y calidez al caminar.",
    colors: [
      { name: "gris pizarra", hex: "#8fa0b0" },
      { name: "azul marino", hex: "#193153" },
      { name: "marrón", hex: "#8B5A2B" },
    ],
    sizes: ["M", "L"],
  },
  "botas-invierno": {
    description:
      "Botas con forro térmico impermeable y suela antideslizante de alto agarre. Diseñadas para resistir la lluvia y el frío.",
    colors: [
      { name: "negro", hex: "#111827" },
      { name: "marrón", hex: "#8B5A2B" },
      { name: "beige", hex: "#d9c8ae" },
    ],
    sizes: ["36", "37", "38", "39", "40", "41"],
  },
  "polo-azul": {
    description:
      "Polo de manga larga en tejido de algodón piqué. Cómodo y versátil para el día a día en invierno.",
    colors: [
      { name: "azul marino", hex: "#193153" },
      { name: "gris pizarra", hex: "#8fa0b0" },
    ],
  },
  "gorro-lana": {
    description:
      "Gorro de lana clásico con dobladillo ancho. Elasticidad óptima y gran capacidad de retención de calor.",
    colors: [
      { name: "gris pizarra", hex: "#8fa0b0" },
      { name: "negro", hex: "#111827" },
      { name: "beige", hex: "#d9c8ae" },
      { name: "azul marino", hex: "#193153" },
    ],
    sizes: ["Única"],
  },
  "orejeras": {
    description:
      "Orejeras ajustables forradas con tejido polar ultra suave. Ofrecen protección total contra el viento helado.",
    sizes: ["Única"],
  },
  "top-tejido": {
    description:
      "Top premium confeccionado en hilado suave de punto fino. Silueta cómoda y moderna para llevar sola o en capas.",
  },
  "sueter-invierno": {
    description:
      "Suéter clásico de invierno con detalles acanalados en puños y bajo. Alta resistencia al desgaste y lavado.",
  },
  "abrigo-largo-beige-mujer": {
    description:
      "Abrigo largo de silueta elegante, pensado para combinar con capas ligeras y mantener el calor durante todo el día.",
    colors: [
      { name: "beige", hex: "#d7c0a3" },
      { name: "arena", hex: "#c6b093" },
      { name: "hueso", hex: "#f3ede4" },
    ],
  },
  "casaca-puffer-negra": {
    description:
      "Casaca puffer con aislamiento térmico y acabado mate. Ideal para trayectos urbanos y días de mucho frío.",
    colors: [
      { name: "negro", hex: "#111827" },
      { name: "gris grafito", hex: "#374151" },
    ],
  },
  "sueter-nordico-azul-marino": {
    description:
      "Suéter nórdico de punto grueso con patrón invernal. Abrigo cómodo para usar solo o como capa intermedia.",
    colors: [
      { name: "azul marino", hex: "#1e3356" },
      { name: "gris piedra", hex: "#94a3b8" },
    ],
  },
  "sueter-gris-tejido": {
    description:
      "Suéter tejido de textura suave y fit relajado. Un básico versátil para el clima frío.",
    colors: [
      { name: "gris claro", hex: "#cbd5e1" },
      { name: "gris pizarra", hex: "#64748b" },
    ],
  },
  "conjunto-infantil-azul-marino": {
    description:
      "Conjunto invernal para niños con interior suave y piezas fáciles de combinar para el día a día.",
    colors: [
      { name: "azul marino", hex: "#1e3a5f" },
      { name: "blanco nieve", hex: "#f8fafc" },
    ],
    sizes: ["2A", "4A", "6A", "8A"],
  },
  "conjunto-infantil-rosa": {
    description:
      "Conjunto abrigador para niñas con textura acolchada y tono suave pensado para los días más fríos.",
    colors: [
      { name: "rosa pastel", hex: "#e9b4c0" },
      { name: "crema", hex: "#f5eee5" },
    ],
    sizes: ["2A", "4A", "6A", "8A"],
  },
  "conjunto-infantil-negro": {
    description:
      "Set invernal infantil en tono oscuro, cómodo y resistente para salidas, colegio y paseos familiares.",
    colors: [
      { name: "negro", hex: "#111827" },
      { name: "gris humo", hex: "#6b7280" },
    ],
    sizes: ["4A", "6A", "8A", "10A"],
  },
  "casaca-infantil-roja": {
    description:
      "Casaca infantil acolchada con gran retención térmica, ligera para jugar y fácil de poner.",
    colors: [
      { name: "rojo", hex: "#c2410c" },
      { name: "vino", hex: "#7f1d1d" },
    ],
    sizes: ["4A", "6A", "8A", "10A"],
  },
  "botas-termicas-rosa": {
    description:
      "Botas térmicas livianas con interior suave y acabado impermeable para mantener los pies abrigados.",
    colors: [
      { name: "rosa", hex: "#d19cab" },
      { name: "beige", hex: "#d6c1a2" },
    ],
    sizes: ["28", "29", "30", "31", "32"],
  },
  "botas-invierno-camel": {
    description:
      "Botas de invierno en tono camel con suela firme y acabado resistente para climas fríos.",
    colors: [
      { name: "camel", hex: "#a66b3f" },
      { name: "marrón", hex: "#7c4a23" },
    ],
    sizes: ["36", "37", "38", "39", "40"],
  },
  "sueter-mascota-pinguino-azul": {
    description:
      "Suéter para mascota con diseño divertido y tejido suave que aporta abrigo sin limitar el movimiento.",
    colors: [
      { name: "azul marino", hex: "#1f3b63" },
      { name: "celeste", hex: "#9bc2de" },
    ],
    sizes: ["XS", "S", "M", "L"],
  },
  "sueter-mascota-crema-celeste": {
    description:
      "Suéter crema para mascota con detalles celestes y ajuste cómodo para paseos cortos o largos.",
    colors: [
      { name: "crema", hex: "#efe3d0" },
      { name: "celeste", hex: "#aac8df" },
    ],
    sizes: ["XS", "S", "M", "L"],
  },
  "chaleco-mascota-verde": {
    description:
      "Chaleco ligero para mascota con cobertura cálida y cierre práctico para salir sin complicaciones.",
    colors: [
      { name: "verde oliva", hex: "#556b4d" },
      { name: "beige", hex: "#d9c8ae" },
    ],
    sizes: ["XS", "S", "M", "L"],
  },
  "sueter-mascota-verde": {
    description:
      "Suéter tejido verde para mascota con textura suave y abrigo parejo para días fríos.",
    colors: [
      { name: "verde bosque", hex: "#4b5d42" },
      { name: "crema", hex: "#e8dcc9" },
    ],
    sizes: ["XS", "S", "M", "L"],
  },
};

function getProductMetadata(product: ShopProduct): ProductMetadata {
  const custom = PRODUCT_METADATA_MAP[product.id];
  return {
    description: custom?.description ?? DEFAULT_METADATA.description,
    colors: custom?.colors ?? DEFAULT_METADATA.colors,
    sizes: custom?.sizes ?? DEFAULT_METADATA.sizes,
  };
}

const priceFormatter = new Intl.NumberFormat("es-PE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function ProductPreviewModal({
  product,
  onClose,
}: {
  product: ShopProduct;
  onClose: () => void;
}) {
  const { addToCart, isFavorite, toggleFavorite } = useShop();
  const { showToast } = useToast();
  const metadata = getProductMetadata(product);

  const [selectedColor, setSelectedColor] = useState(metadata.colors[0]);
  const [selectedSize, setSelectedSize] = useState(metadata.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isHeartPulse, setIsHeartPulse] = useState(false);

  const favorite = isFavorite(product.id);

  useEffect(() => {
    setIsMounted(true);

    // Calculate scrollbar width to prevent layout shift
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!added) return undefined;
    const timeout = window.setTimeout(() => setAdded(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [added]);

  const handleAddToCart = () => {
    const productWithSelections = {
      ...product,
      details: `${selectedColor.name.charAt(0).toUpperCase() + selectedColor.name.slice(1)} · Talla ${selectedSize}`,
    };
    addToCart(productWithSelections, quantity);
    setAdded(true);
    showToast(`Agregado al carrito: ${product.name} (${quantity} ud.)`, "success");
  };

  const handleFavoriteClick = () => {
    toggleFavorite(product);
    setIsHeartPulse(true);
    setTimeout(() => setIsHeartPulse(false), 450);
    if (favorite) {
      showToast(`Quitado de favoritos: ${product.name}`, "info");
    } else {
      showToast(`Agregado a favoritos: ${product.name}`, "success");
    }
  };

  const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isMounted && !isClosing ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden relative border border-slate-100 flex flex-col md:flex-row p-6 md:p-10 gap-8 max-h-[90vh] overflow-y-auto transition-all duration-300 ${
          isMounted && !isClosing
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-95 translate-y-4 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer btn-animate-tap"
          type="button"
          onClick={handleClose}
          aria-label="Cerrar modal"
        >
          <X size={24} aria-hidden="true" />
        </button>

        {/* Left Column */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <div>
            <h2
              id="modal-product-title"
              className="text-2xl md:text-3xl font-extrabold text-slate-800"
            >
              {product.name}
            </h2>
          </div>

          <div className="aspect-[4/5] bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center p-4 border border-slate-100 relative group">
            {product.badge ? (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold shadow-sm animate-badge-bounce">
                {product.badge}
              </span>
            ) : null}
            <OptimizedImage
              kind="product"
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          <button
            className={`w-full py-3.5 px-6 border-2 rounded-full font-bold flex items-center justify-center gap-2 transition-all cursor-pointer btn-animate-tap ${
              favorite
                ? "border-blue-600 text-blue-600 bg-blue-50/50 hover:bg-blue-50"
                : "border-slate-200 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300"
            }`}
            type="button"
            onClick={handleFavoriteClick}
            aria-pressed={favorite}
          >
            <Heart
              className={isHeartPulse ? "animate-fav-pulse" : ""}
              size={20}
              fill={favorite ? "currentColor" : "none"}
            />
            {favorite ? "Quitar de favoritos" : "Agregar a favoritos"}
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:w-1/2 justify-between py-2 gap-6">
          <div className="flex flex-col gap-5">
            {/* Price */}
            <div className="flex items-baseline gap-3">
              <strong className="text-3xl font-black text-blue-600">
                S/ {priceFormatter.format(product.price)}
              </strong>
              {product.previousPrice ? (
                <span className="text-lg text-slate-400 line-through font-medium">
                  S/ {priceFormatter.format(product.previousPrice)}
                </span>
              ) : null}
            </div>

            {/* Selected Color Name */}
            <p className="text-sm font-semibold text-slate-500">
              Color: <span className="text-slate-800 font-bold capitalize">{selectedColor.name}</span>
            </p>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-slate-800">Descripción</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {metadata.description}
              </p>
            </div>

            {/* Colors Grid */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-slate-800">Colores disponibles</h4>
              <div className="flex flex-wrap gap-3">
                {metadata.colors.map((color) => {
                  const isActive = selectedColor.name === color.name;
                  return (
                    <button
                      key={color.name}
                      style={{ backgroundColor: color.hex }}
                      className={`w-9 h-9 rounded-full cursor-pointer transition-transform hover:scale-110 shadow-inner relative border ${
                        color.hex.toLowerCase() === "#ffffff" || color.hex.toLowerCase() === "#fafafa" || color.hex.toLowerCase() === "#f9fafb"
                          ? "border-slate-200"
                          : "border-transparent"
                      }`}
                      type="button"
                      onClick={() => setSelectedColor(color)}
                      title={color.name}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-full border-2 border-white ring-2 ring-blue-600 scale-95" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sizes selector */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-slate-800">Tallas disponibles</h4>
              <div className="flex flex-wrap gap-2">
                {metadata.sizes.map((size) => {
                  const isActive = selectedSize === size;
                  return (
                    <button
                      key={size}
                      className={`min-w-[48px] h-12 px-4 rounded-xl font-bold text-sm border-2 transition-all cursor-pointer ${
                        isActive
                          ? "border-blue-600 bg-blue-50/20 text-blue-600"
                          : "border-slate-200 text-slate-700 bg-white hover:border-slate-300 hover:bg-slate-50"
                      }`}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity */}
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-slate-800">Cantidad</h4>
              <div className="flex items-center border border-slate-200 rounded-xl bg-white w-32 justify-between p-1">
                <button
                  className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer btn-animate-tap"
                  type="button"
                  onClick={handleDecrease}
                  aria-label="Disminuir cantidad"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="font-extrabold text-slate-800 w-8 text-center text-base" aria-live="polite">
                  {quantity}
                </span>
                <button
                  className="w-10 h-10 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer btn-animate-tap"
                  type="button"
                  onClick={handleIncrease}
                  aria-label="Aumentar cantidad"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Primary Action Button */}
            <button
              className={`w-full py-4 px-6 rounded-full font-bold flex items-center justify-center gap-2.5 transition-all text-base cursor-pointer shadow-md shadow-blue-500/10 btn-animate-tap ${
                added
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/10"
                  : "bg-blue-600 hover:bg-blue-700 text-white hover:-translate-y-[1px]"
              }`}
              type="button"
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <ShoppingCart size={20} />
                  <span>¡Agregado al carrito!</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
                  <span>
                    Agregar al carrito — S/ {priceFormatter.format(product.price * quantity)}
                  </span>
                </>
              )}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-col gap-1.5 border-t border-slate-100 pt-4">
              <p className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-badge-bounce" />
                Envío gratis en compras mayores a S/ 200
              </p>
              <p className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-badge-bounce" />
                Garantía de calidad MundoPolar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
