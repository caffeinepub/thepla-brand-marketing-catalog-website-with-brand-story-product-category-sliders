import { theplas, otherProducts, categories } from '../data/products';
import ProductCarousel from '../components/ProductCarousel';

export default function CategoriesPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Our Products</h1>

        {/* Thepla Categories */}
        {categories.map((category) => {
          const categoryProducts = theplas.filter((p) => p.category === category);
          return (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">{category}</h2>
              <ProductCarousel products={categoryProducts} />
            </section>
          );
        })}

        {/* Other Products */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Other Products</h2>
          <p className="text-muted-foreground mb-4">
            Authentic pickles and condiments to complement your meals
          </p>
          <ProductCarousel products={otherProducts} showQuantityControl={true} />
        </section>
      </div>
    </div>
  );
}
