import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { ShopProvider } from "./app/context/ShopContext.tsx";
import { ToastProvider } from "./app/context/ToastContext.tsx";
import { ProductCatalogProvider } from "./app/context/ProductCatalogContext.tsx";
import { AuthProvider } from "./app/context/AuthContext.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ShopProvider>
      <ToastProvider>
        <ProductCatalogProvider>
          <App />
        </ProductCatalogProvider>
      </ToastProvider>
    </ShopProvider>
  </AuthProvider>,
);
