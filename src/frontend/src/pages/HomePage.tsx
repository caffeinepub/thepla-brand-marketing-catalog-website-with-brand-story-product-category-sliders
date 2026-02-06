import { Link, useNavigate } from '@tanstack/react-router';
import { ArrowRight, Heart, Users, Award, Leaf, ShoppingCart } from 'lucide-react';
import { useCart } from '../cart/CartProvider';
import { theplas } from '../data/products';

export default function HomePage() {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // Add Methi Thepla (most popular) to cart
    const defaultProduct = theplas.find((p) => p.id === 'methi-thepla');
    if (defaultProduct) {
      addItem(defaultProduct, 1);
      navigate({ to: '/cart' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Hero Text */}
              <div className="text-center md:text-left order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Taste of Home, Made with Love
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Authentic theplas crafted by skilled women, bringing tradition to your table
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <button
                    onClick={handleBuyNow}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Buy Now
                  </button>
                  <Link
                    to="/categories"
                    className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    Explore Products
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 md:order-2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/generated/hero-thepla.dim_1400x900.png"
                    alt="Fresh homemade thepla"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              Our Story
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg">
              <div className="font-obra text-xs leading-relaxed space-y-4 text-foreground/90">
                <p>
                  Thepla is more than a meal — it's a memory. The aroma of fresh methi on a hot tawa, a steel dabba packed with care, and the quiet reassurance of "thepla rakhjo, kaam aavse." For generations, it has been India's most trusted companion on school mornings, office days, and long journeys. Rooted in tradition, our theplas are made the way they always were: with honest ingredients, no preservatives, and the warmth of home in every bite.
                </p>
                <p>
                  But our story goes beyond food. Every thepla is prepared by women working from their own homes — skilled hands turning heritage recipes into livelihood and independence. As life gets faster and meals lose meaning, we bring back something familiar and real for students, professionals, travelers, and Indians far from home. This is not just convenience; it's culture with purpose, tradition with a future, and a journey that begins with one soft, warm thepla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Griha Mahila Udyog Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        {/* Background Image with Stronger Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/generated/women-udyog-meeting-bg.dim_1600x900.png"
            alt="Women empowerment meeting"
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-background/95"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Empowering Women Through Griha Mahila Udyog
              </h2>
              <p className="text-lg text-foreground/80">
                Building financial independence, one home at a time
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg mb-12">
              <div className="font-obra text-xs leading-relaxed space-y-4 text-black">
                <p>
                  At the heart of our brand is a commitment to women's empowerment through our Griha Mahila Udyog initiative. We believe that every woman deserves the opportunity to earn with dignity, without having to choose between family and financial independence.
                </p>
                <p>
                  Our model is simple yet transformative: we partner with skilled homemakers who prepare our theplas from the comfort of their own kitchens. These women bring generations of culinary wisdom, perfected techniques, and an unmatched dedication to quality. In return, they receive fair compensation, flexible working hours, and the pride of being entrepreneurs in their own right.
                </p>
                <p>
                  Each thepla you enjoy represents more than just a meal — it's a step toward economic empowerment, a celebration of traditional skills, and a bridge between heritage and modernity. Through this initiative, we're not just preserving recipes; we're creating opportunities, building confidence, and fostering a community of strong, independent women.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border text-center shadow-lg">
                <Heart className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Made with Care</h3>
                <p className="text-sm text-muted-foreground">
                  Every thepla is crafted with the same love and attention as a mother would give
                </p>
              </div>
              <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border text-center shadow-lg">
                <Award className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Quality Assured</h3>
                <p className="text-sm text-muted-foreground">
                  Traditional methods meet modern hygiene standards for the best results
                </p>
              </div>
              <div className="bg-card/95 backdrop-blur-sm p-6 rounded-xl border border-border text-center shadow-lg">
                <Leaf className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Pure Ingredients</h3>
                <p className="text-sm text-muted-foreground">
                  No preservatives, no shortcuts — just honest, wholesome food
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Authentic Taste?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Browse our collection of handcrafted theplas and pickles
          </p>
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with <Heart className="w-4 h-4 inline text-red-500" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
