# Mundo Polar — frontend

Primera versión frontend del ecommerce Mundo Polar, organizada a partir del
prototipo exportado desde Figma Make.

## Tecnología

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 4
- Datos de productos locales en `src/data/products.ts`

## Ejecutar en local

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev
```

Vite mostrará la URL local, normalmente `http://localhost:5173`.

Para validar la compilación de producción:

```bash
npm run build
npm run preview
```

## Alcance actual

Las únicas rutas disponibles son:

- `/` — Inicio
- `/nosotros` — Nosotros
- `/ofertas` — Ofertas
- `/contacto` — Contacto

El buscador y los iconos de favoritos, carrito y usuario son placeholders
visuales. No existe backend, base de datos, autenticación, checkout ni pagos.

## Estructura principal

```text
public/
  assets/
    home/             Recursos exclusivos de Inicio
    logo/             Identidad de Mundo Polar
    nosotros/         Recursos exclusivos de Nosotros
    ofertas/          Banners, categorías y testimonios de Ofertas
    products/         Imágenes de producto compartidas
    shared/           Recursos comunes del footer
src/
  app/
    components/       Header y adaptación responsive del lienzo Figma
    App.tsx           Navegación y carga diferida de páginas
    navigation.ts     Rutas permitidas
  config/
    assets.ts         Fuente única de rutas de imágenes
  data/
    products.ts       Catálogo mock preparado para una integración futura
  pages/
    home/             Página Inicio
    nosotros/         Página Nosotros y bloque ContactSection
    ofertas/          Página Ofertas
    contacto/         Vista independiente del bloque ContactSection
```

Los bloques visuales internos exportados por Figma permanecen intactos para
preservar el diseño original. Las imágenes se consumen desde `ASSETS`, evitando
imports con hashes y copias duplicadas.
