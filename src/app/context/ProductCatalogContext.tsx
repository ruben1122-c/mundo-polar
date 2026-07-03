import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { fetchCatalogProducts } from "@/services/productService";
import type { CatalogProduct, CatalogScope } from "@/types/product";
import { useToast } from "./ToastContext";

interface ProductCatalogContextValue {
  products: ReadonlyArray<CatalogProduct>;
  isLoading: boolean;
  isRemoteCatalog: boolean;
}

const ProductCatalogContext = createContext<
  ProductCatalogContextValue | undefined
>(undefined);

export function ProductCatalogProvider({ children }: PropsWithChildren) {
  const { showToast } = useToast();
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRemoteCatalog, setIsRemoteCatalog] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetchCatalogProducts(controller.signal)
      .then((remoteProducts) => {
        setProducts(remoteProducts);
        setIsRemoteCatalog(remoteProducts.length > 0);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }
        const message =
          error instanceof Error
            ? error.message
            : "No se pudo cargar el catálogo remoto.";
        showToast(`${message} Se mostrarán los productos locales.`, "error");
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, [showToast]);

  const value = useMemo(
    () => ({ products, isLoading, isRemoteCatalog }),
    [isLoading, isRemoteCatalog, products],
  );

  return (
    <ProductCatalogContext.Provider value={value}>
      {children}
    </ProductCatalogContext.Provider>
  );
}

export function useCatalogProducts(
  scope: CatalogScope | undefined,
  fallbackProducts: ReadonlyArray<CatalogProduct>,
) {
  const context = useContext(ProductCatalogContext);
  if (!context) {
    throw new Error(
      "useCatalogProducts debe utilizarse dentro de ProductCatalogProvider.",
    );
  }

  const scopedProducts = useMemo(() => {
    if (!scope) return [];

    if (scope.includes(":")) {
      const [category, subScope] = scope.split(":");
      const catProducts = context.products.filter(
        (product) => product.categorySlug === category,
      );

      if (subScope === "featured") {
        const featured = catProducts.filter((product) => product.isFeatured);
        if (featured.length > 0) return featured.slice(0, 4);
        return catProducts.slice(0, 4);
      }
      if (subScope === "secondary") {
        const secondary = catProducts.filter((product) => !product.isFeatured);
        const source = secondary.length > 0 ? secondary : catProducts;
        return [...source].reverse().slice(0, 4);
      }
      if (subScope === "bestseller") {
        const bestsellers = catProducts.filter((product) => !product.isFeatured);
        const source = bestsellers.length > 0 ? bestsellers : catProducts;
        return source.slice(2, 6);
      }
      return catProducts;
    }

    return context.products.filter((product) => {
      if (scope === "featured") return product.isFeatured;
      if (scope === "new") return product.isNew;
      if (scope === "offers") return product.isOnSale;
      return product.categorySlug === scope;
    });
  }, [context.products, scope]);

  return {
    products:
      context.isRemoteCatalog && scopedProducts.length > 0
        ? scopedProducts
        : fallbackProducts,
    isLoading: context.isLoading,
    isRemoteCatalog: context.isRemoteCatalog && scopedProducts.length > 0,
  };
}
