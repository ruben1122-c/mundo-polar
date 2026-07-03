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
import { featuredProducts, homeCategories } from "@/data/catalog";
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
            <ProductGrid products={featuredProducts} className="mobile-carousel product-carousel" />
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
            <ProductGrid products={[...featuredProducts].reverse()} className="mobile-carousel product-carousel" />
          </AnimateInView>
        </div>
      </section>
      <Footer />
    </>
  );
}
