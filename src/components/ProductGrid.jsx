import { motion } from 'framer-motion';
import { formatPrice } from '../utils/format';

export default function ProductGrid({ products, onSelectProduct, onAddToCart }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-stone-900">Catalogue</h3>
        <p className="text-sm text-stone-500">{products.length} produits</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <motion.article
            key={product.id}
            whileHover={{ y: -4 }}
            className="glass-card overflow-hidden rounded-2xl shadow-sm"
          >
            <button onClick={() => onSelectProduct(product)} className="w-full text-left">
              <img src={product.image} alt={product.name} className="h-56 w-full object-cover" />
            </button>
            <div className="space-y-3 p-4">
              <div className="flex items-center justify-between">
                <p className="font-medium text-stone-800">{product.name}</p>
                {product.isNew && (
                  <span className="rounded-full bg-gold-300 px-2 py-1 text-xs font-medium text-stone-800">
                    New
                  </span>
                )}
              </div>
              <p className="text-sm text-stone-500">{product.category}</p>
              <div className="flex items-center justify-between">
                <strong className="text-gold-600">{formatPrice(product.price)}</strong>
                <button
                  onClick={() => onAddToCart(product)}
                  className="rounded-full border border-stone-300 px-3 py-1 text-sm transition hover:border-gold-500 hover:text-gold-600"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
