import { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../cart/CartProvider';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  showQuantityControl?: boolean;
}

export default function ProductCard({ product, showQuantityControl = false }: ProductCardProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        packSize: product.packSize,
        image: product.image,
      },
      showQuantityControl ? quantity : 1
    );
    setTimeout(() => setIsAdding(false), 500);
  };

  const formatPrice = (price: number | { min: number; max: number }) => {
    if (typeof price === 'number') {
      return price === 0 ? null : `₹${price}`;
    }
    return `₹${price.min}–₹${price.max}`;
  };

  const priceDisplay = formatPrice(product.price);

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow flex-shrink-0 w-64">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{product.packSize}</p>
        {priceDisplay && (
          <p className="text-lg font-bold text-primary mb-3">{priceDisplay}</p>
        )}
        
        {showQuantityControl && (
          <div className="flex items-center gap-2 mb-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-1 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-sm font-medium w-8 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-1 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        )}

        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <ShoppingCart className="w-4 h-4" />
          {isAdding ? 'Added!' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
