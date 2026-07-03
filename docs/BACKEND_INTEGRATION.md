# Integración backend de Mundo Polar

El frontend consume una API FastAPI propia mediante `VITE_API_URL`.

```text
React/Vite -> FastAPI -> PostgreSQL (Supabase)
```

- El navegador no recibe claves de Supabase.
- `GET /api/products` alimenta las tarjetas existentes.
- Si el API no responde, se conserva el catálogo local como fallback.
- Carrito y favoritos invitados continúan en `localStorage`.
- `POST /api/orders` recalcula precios en el servidor y crea un pedido
  `pending`; no procesa pagos.

El esquema, las migraciones y la configuración privada viven en el repositorio
`mundo-polar-backend`.
