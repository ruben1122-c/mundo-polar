import { ASSETS } from "@/config/assets";
import { Footer } from "@/app/components/Footer";
import {
  CategoryCard,
  PageHero,
  ProductGrid,
  PromoBanner,
  SectionHeader,
} from "@/app/components/Storefront";
import { OptimizedImage } from "@/app/components/OptimizedImage";
import {
  featuredProducts,
  homeCategories,
  offerProducts,
} from "@/data/catalog";
import { navigateTo } from "@/app/navigation";
import { AnimateInView } from "@/app/components/ui/AnimateInView";

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Abrígate con estilo"
        description="Ropa de invierno para mujer, hombre, niños y mascotas. Comodidad, calidad y estilo para toda la familia."
        image={ASSETS.home.hero}
        cta="Ver ofertas"
        destination="ofertas"
      />

      <section className="page-section">
        <div className="page-container split-feature">
          <AnimateInView className="flex flex-col">
            <p className="section-eyebrow">Mundo Polar</p>
            <h2>¿Quiénes somos?</h2>
            <p>
              Creemos que el invierno es una temporada para disfrutar en
              familia sin dejar de lado el estilo y la comodidad. Seleccionamos
              prendas cálidas, duraderas y pensadas para el uso diario.
            </p>
            <button
              className="outline-button btn-animate-tap self-start"
              type="button"
              onClick={() => navigateTo("nosotros")}
            >
              Conoce más
            </button>
          </AnimateInView>
          <AnimateInView delay={150}>
            <OptimizedImage
              kind="content"
              src={ASSETS.home.familyAndPet}
              alt="Niña abrigada junto a su mascota"
            />
          </AnimateInView>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="page-container">
          <AnimateInView>
            <SectionHeader
              eyebrow="Para toda la familia"
              title="Compra por categoría"
            />
          </AnimateInView>
          <div className="category-grid mobile-carousel category-carousel">
            {homeCategories.map((category, index) => (
              <AnimateInView key={category.id} delay={index * 100}>
                <CategoryCard category={category} />
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <AnimateInView>
            <SectionHeader
              eyebrow="Selección Mundo Polar"
              title="Productos destacados"
              action={{ label: "Ver ofertas", destination: "ofertas" }}
            />
          </AnimateInView>
          <AnimateInView delay={100}>
            <ProductGrid
              products={featuredProducts}
              catalogScope="featured"
              className="mobile-carousel product-carousel"
            />
          </AnimateInView>
        </div>
      </section>

      <div className="page-container">
        <AnimateInView>
          <PromoBanner
            title="Nueva colección de invierno"
            description="Descubre las últimas tendencias y mantén el frío a raya con prendas seleccionadas."
            image={ASSETS.home.winterCollectionBanner}
            action={{ label: "Ver ofertas", destination: "ofertas" }}
          />
        </AnimateInView>
      </div>

      <section className="page-section">
        <div className="page-container">
          <AnimateInView>
            <SectionHeader title="Nuevos ingresos" />
          </AnimateInView>
          <AnimateInView delay={100}>
            <ProductGrid
              products={[...featuredProducts].reverse()}
              catalogScope="new"
              className="mobile-carousel product-carousel"
            />
          </AnimateInView>
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="page-container home-editorial-grid">
          <AnimateInView>
            <OptimizedImage
              kind="content"
              className="home-editorial-image"
              src={ASSETS.home.familyAndPet}
              alt="Colección de invierno para familias"
            />
          </AnimateInView>
          <AnimateInView delay={100} className="home-editorial-copy">
            <p className="section-eyebrow">Colección editorial</p>
            <h2>Abrigos pensados para el día a día</h2>
            <p>
              Combinamos prendas suaves, colores versátiles y capas cómodas para
              que Inicio tenga la continuidad visual de la referencia sin dejar
              de parecer parte del mismo frontend actual.
            </p>
            <button
              className="outline-button btn-animate-tap"
              type="button"
              onClick={() => navigateTo("nosotros")}
            >
              Conoce la marca
            </button>
          </AnimateInView>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <AnimateInView>
            <SectionHeader
              eyebrow="Más para descubrir"
              title="Esenciales para toda la familia"
              description="Un bloque adicional para que Inicio tenga más profundidad y se acerque mejor a la estructura del mock."
            />
          </AnimateInView>
          <AnimateInView delay={100}>
            <ProductGrid
              products={offerProducts.slice(0, 8)}
              catalogScope="offers"
              className="mobile-carousel product-carousel"
            />
          </AnimateInView>
        </div>
      </section>
      <Footer />
    </>
  );
}
