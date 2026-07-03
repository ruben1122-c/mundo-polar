import { ASSETS } from "@/config/assets";
import { Footer } from "@/app/components/Footer";
import {
  CategoryCard,
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

const homeFeaturedProducts = [
  ...featuredProducts,
  ...offerProducts.slice(0, 5),
];

const newProducts = [...offerProducts].reverse().slice(0, 10);

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <OptimizedImage
          priority
          kind="hero"
          className="home-hero-image"
          src={ASSETS.home.hero}
          alt="Familia disfrutando de un día de invierno"
        />
        <div className="home-hero-overlay" />
        <div className="page-container home-hero-content">
          <h1>
            Abrígate con estilo
            <span>Mundo Polar</span>
          </h1>
          <p>
            Ropa de invierno para mujer, hombre, niños, niñas y mascotas.
            Comodidad, calidad y estilo para toda la familia.
          </p>
        </div>
      </section>

      <section className="home-about">
        <div className="page-container home-about-grid">
          <AnimateInView className="home-about-copy">
            <h2>¿Quiénes somos?</h2>
            <p>
              En Mundo Polar, creemos que el invierno es una temporada para
              disfrutar en familia, sin dejar de lado el estilo y la comodidad.
              Desde nuestros inicios, nos hemos dedicado a ofrecer prendas de
              alta calidad que combinan diseño minimalista, máxima calidez y
              durabilidad.
            </p>
            <p className="home-about-highlight">
              Nuestro compromiso es mantener a toda tu familia abrigada,
              incluyendo a los más pequeños y a tus mascotas, con materiales
              sostenibles y procesos de fabricación éticos.
            </p>
            <button
              className="outline-button btn-animate-tap"
              type="button"
              onClick={() => navigateTo("nosotros")}
            >
              Conoce más
            </button>
          </AnimateInView>
          <AnimateInView delay={150}>
            <OptimizedImage
              kind="content"
              className="home-about-image"
              src={ASSETS.home.familyAndPet}
              alt="Niña abrigada junto a su mascota"
            />
          </AnimateInView>
        </div>
      </section>

      <section className="home-category-section">
        <div className="page-container">
          <AnimateInView>
            <h2 className="home-centered-title">Compra por categoría</h2>
          </AnimateInView>
          <div className="category-grid mobile-carousel category-carousel">
            {homeCategories.map((category, index) => (
              <AnimateInView key={category.id} delay={index * 80}>
                <CategoryCard category={category} />
              </AnimateInView>
            ))}
          </div>
        </div>
      </section>

      <section className="home-product-section">
        <div className="page-container">
          <AnimateInView>
            <SectionHeader
              title="Productos destacados"
              action={{ label: "Ver todos", destination: "ofertas" }}
            />
          </AnimateInView>
          <AnimateInView delay={80}>
            <ProductGrid
              products={homeFeaturedProducts}
              catalogScope="featured"
              className="home-product-grid mobile-carousel product-carousel"
            />
          </AnimateInView>
        </div>
      </section>

      <AnimateInView>
        <PromoBanner
          eyebrow=""
          title="Nueva colección de invierno"
          description="Descubre las últimas tendencias y mantén el frío a raya. Aprovecha hasta un 30% de descuento en artículos seleccionados."
          image={ASSETS.home.winterCollectionBanner}
          action={{ label: "Ver ofertas", destination: "ofertas" }}
        />
      </AnimateInView>

      <section className="home-product-section home-new-products">
        <div className="page-container">
          <AnimateInView>
            <SectionHeader
              title="Nuevos ingresos"
              action={{ label: "Ver todos", destination: "ofertas" }}
            />
          </AnimateInView>
          <AnimateInView delay={80}>
            <ProductGrid
              products={newProducts}
              catalogScope="new"
              className="home-product-grid mobile-carousel product-carousel"
            />
          </AnimateInView>
        </div>
      </section>

      <Footer />
    </div>
  );
}
