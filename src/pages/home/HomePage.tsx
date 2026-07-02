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
          <div>
            <p className="section-eyebrow">Mundo Polar</p>
            <h2>¿Quiénes somos?</h2>
            <p>
              Creemos que el invierno es una temporada para disfrutar en
              familia sin dejar de lado el estilo y la comodidad. Seleccionamos
              prendas cálidas, duraderas y pensadas para el uso diario.
            </p>
            <button
              className="outline-button"
              type="button"
              onClick={() => navigateTo("nosotros")}
            >
              Conoce más
            </button>
          </div>
          <OptimizedImage
            kind="content"
            src={ASSETS.home.familyAndPet}
            alt="Niña abrigada junto a su mascota"
          />
        </div>
      </section>

      <section className="page-section page-section-soft">
        <div className="page-container">
          <SectionHeader
            eyebrow="Para toda la familia"
            title="Compra por categoría"
          />
          <div className="category-grid">
            {homeCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="page-container">
          <SectionHeader
            eyebrow="Selección Mundo Polar"
            title="Productos destacados"
            action={{ label: "Ver ofertas", destination: "ofertas" }}
          />
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <div className="page-container">
        <PromoBanner
          title="Nueva colección de invierno"
          description="Descubre las últimas tendencias y mantén el frío a raya con prendas seleccionadas."
          image={ASSETS.home.winterCollectionBanner}
          action={{ label: "Ver ofertas", destination: "ofertas" }}
        />
      </div>

      <section className="page-section">
        <div className="page-container">
          <SectionHeader title="Nuevos ingresos" />
          <ProductGrid products={[...featuredProducts].reverse()} />
        </div>
      </section>
      <Footer />
    </>
  );
}
