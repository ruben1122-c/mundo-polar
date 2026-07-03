import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

export interface ShopProduct {
  id: string;
  name: string;
  image: string;
  price: number;
  previousPrice?: number;
  details?: string;
  badge?: string;
}

export interface CartItem extends ShopProduct {
  quantity: number;
}

interface ShopContextValue {
  cartItems: ReadonlyArray<CartItem>;
  favoriteItems: ReadonlyArray<ShopProduct>;
  addToCart: (product: ShopProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
  toggleFavorite: (product: ShopProduct) => void;
  isFavorite: (productId: string) => boolean;
  cartCount: number;
  cartSubtotal: number;
  cartTotal: number;
  favoritesCount: number;
}

const CART_STORAGE_KEY = "mundo-polar.cart.v1";
const FAVORITES_STORAGE_KEY = "mundo-polar.favorites.v1";

const ShopContext = createContext<ShopContextValue | undefined>(undefined);

function readStorage<T>(key: string): T[] {
  try {
    const storedValue = window.localStorage.getItem(key);
    if (!storedValue) return [];
    const parsedValue: unknown = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? (parsedValue as T[]) : [];
  } catch {
    return [];
  }
}

export function ShopProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() =>
    readStorage<CartItem>(CART_STORAGE_KEY),
  );
  const [favoriteItems, setFavoriteItems] = useState<ShopProduct[]>(() =>
    readStorage<ShopProduct>(FAVORITES_STORAGE_KEY),
  );

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(favoriteItems),
    );
  }, [favoriteItems]);

  const addToCart = useCallback((product: ShopProduct, quantity = 1) => {
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === product.id);
      if (existingItem) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...current, { ...product, quantity }];
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((current) =>
      current.filter((item) => item.id !== productId),
    );
  }, []);

  const increaseQuantity = useCallback((productId: string) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  }, []);

  const decreaseQuantity = useCallback((productId: string) => {
    setCartItems((current) =>
      current.flatMap((item) => {
        if (item.id !== productId) return [item];
        return item.quantity > 1
          ? [{ ...item, quantity: item.quantity - 1 }]
          : [];
      }),
    );
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const toggleFavorite = useCallback((product: ShopProduct) => {
    setFavoriteItems((current) =>
      current.some((item) => item.id === product.id)
        ? current.filter((item) => item.id !== product.id)
        : [...current, product],
    );
  }, []);

  const isFavorite = useCallback(
    (productId: string) =>
      favoriteItems.some((item) => item.id === productId),
    [favoriteItems],
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const value = useMemo<ShopContextValue>(
    () => ({
      cartItems,
      favoriteItems,
      addToCart,
      removeFromCart,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      toggleFavorite,
      isFavorite,
      cartCount,
      cartSubtotal,
      cartTotal: cartSubtotal,
      favoritesCount: favoriteItems.length,
    }),
    [
      addToCart,
      cartCount,
      cartItems,
      cartSubtotal,
      clearCart,
      decreaseQuantity,
      favoriteItems,
      increaseQuantity,
      isFavorite,
      removeFromCart,
      toggleFavorite,
    ],
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop debe utilizarse dentro de ShopProvider.");
  }
  return context;
}
