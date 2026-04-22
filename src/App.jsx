import { useMemo, useState } from 'react';
import CartPanel from './components/CartPanel';
import CheckoutSteps from './components/CheckoutSteps';
import Filters from './components/Filters';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsletterAndAds from './components/NewsletterAndAds';
import ProductGrid from './components/ProductGrid';
import ProductModal from './components/ProductModal';
import { products } from './data/products';
import { useLocalStorage } from './hooks/useLocalStorage';

const initialFilters = {
  category: 'all',
  maxPrice: 150,
  onlyNew: false
};

const initialCheckoutState = {
  name: '',
  email: '',
  address: '',
  shipping: 'Livraison standard (48h)'
};

export default function App() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState(initialFilters);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useLocalStorage('gold-shop-cart', []);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [checkoutData, setCheckoutData] = useState(initialCheckoutState);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchSearch = product.name.toLowerCase().includes(search.toLowerCase());
        const matchCategory = filters.category === 'all' || product.category === filters.category;
        const matchPrice = product.price <= filters.maxPrice;
        const matchNew = !filters.onlyNew || product.isNew;

        return matchSearch && matchCategory && matchPrice && matchNew;
      }),
    [search, filters]
  );

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);

      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, action) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) {
            return item;
          }
          const nextQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: nextQuantity };
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  const totalItems = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  const handleCheckoutNext = () => {
    if (checkoutStep < 2) {
      setCheckoutStep((prev) => prev + 1);
      return;
    }

    setCart([]);
    setCheckoutStep(0);
    setCheckoutData(initialCheckoutState);
    setIsCheckoutOpen(false);
  };

  const handleCheckoutBack = () => {
    if (checkoutStep > 0) {
      setCheckoutStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-transparent">
      <Header cartCount={totalItems} search={search} setSearch={setSearch} />
      <Hero />

      <main className="mx-auto mt-8 grid max-w-7xl gap-5 px-4 md:grid-cols-[250px_1fr_320px] md:px-6">
        <Filters filters={filters} setFilters={setFilters} />

        <ProductGrid
          products={filteredProducts}
          onSelectProduct={setSelectedProduct}
          onAddToCart={addToCart}
        />

        <div className="space-y-4">
          <CartPanel
            cart={cart}
            onIncrease={(id) => updateQuantity(id, 'increase')}
            onDecrease={(id) => updateQuantity(id, 'decrease')}
            onRemove={removeFromCart}
            total={total}
            onStartCheckout={() => setIsCheckoutOpen(true)}
          />

          {isCheckoutOpen && (
            <CheckoutSteps
              step={checkoutStep}
              formData={checkoutData}
              setFormData={setCheckoutData}
              onNext={handleCheckoutNext}
              onBack={handleCheckoutBack}
              onClose={() => setIsCheckoutOpen(false)}
            />
          )}
        </div>
      </main>

      <NewsletterAndAds />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
    </div>
  );
}
