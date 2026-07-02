# Mundo Polar — frontend

Primera versión frontend del ecommerce Mundo Polar, organizada a partir del
prototipo exportado desde Figma Make.

## Tecnología

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 4
- Datos de productos locales en `src/data/products.ts` y `src/data/catalog.ts`

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
- `/mujer` — Colección Mujer
- `/hombre` — Colección Hombre
- `/mascotas` — Colección Mascotas

El buscador funciona con los productos mock locales y redirige a la categoría
correspondiente. Los botones de Inicio conectan con Mujer, Hombre, Mascotas y
Ofertas; Niños redirige a Ofertas porque el prototipo no incluye todavía una
pantalla infantil independiente.

Los iconos de favoritos, carrito y usuario muestran un aviso informativo y
siguen reservados para una implementación futura. No existe backend, base de
datos, autenticación, checkout ni pagos.

## Estructura principal

```text
public/
  assets/
    logo/             Identidad de Mundo Polar
    shared/           Recursos comunes del footer
src/
  app/
    components/       Header, footer y componentes comerciales responsivos
    App.tsx           Navegación y carga diferida de páginas
    navigation.ts     Rutas permitidas
  config/
    assets.ts         Fuente única de rutas de imágenes
  data/
    products.ts       Datos del buscador local
    catalog.ts        Productos, categorías y colecciones visuales
  pages/
    home/             Página Inicio
    hombre/           Colección Hombre
    mascotas/         Colección Mascotas
    mujer/            Colección Mujer
    nosotros/         Página Nosotros
    ofertas/          Página Ofertas
    contacto/         Vista independiente del bloque ContactSection
```

El frontend usa layouts semánticos con Grid y Flexbox. Las páginas se adaptan
desde 320 px hasta pantallas de escritorio sin escalar un lienzo fijo. Las
imágenes se consumen desde `ASSETS`, evitando imports con hashes y copias
duplicadas.

El formulario de contacto y el newsletter solo realizan validación local y
muestran un aviso de demostración; no envían información a ningún servicio.

## Imágenes

Las fotografías, productos y banners se sirven desde Cloudinary mediante
`src/config/assets.ts`. `OptimizedImage` genera formatos y tamaños responsivos,
además de aplicar carga diferida fuera del primer viewport.

Solo el logo y las marcas gráficas compartidas permanecen en `public/assets`.
La API Key y el API Secret de Cloudinary no son necesarios en el navegador ni
deben añadirse al repositorio.
