import { formatPrice } from '../utils/format';

export default function ProductGrid({ products, onSelectProduct, onAddToCart }) {
  return (
    <section>
      <div className="mb-5 flex items-end justify-between border-b border-stone-800 pb-3">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-stone-500">Sélection éditée</p>
          <h3 className="mt-2 font-serif text-2xl text-white">Catalogue maison</h3>
        </div>
        <p className="text-sm text-stone-400">{products.length} produits</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.id}
            className="overflow-hidden rounded-2xl border border-stone-800 bg-stone-950/80 transition hover:-translate-y-1.5"
          >
            <button onClick={() => onSelectProduct(product)} className="group w-full text-left">
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
            <div className="space-y-4 p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-medium text-stone-100">{product.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-stone-500">{product.category}</p>
                </div>
                {product.isNew && (
                  <span className="rounded-full border border-gold-400/70 bg-gold-500/20 px-2 py-1 text-xs font-medium text-gold-200">
                    New
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <strong className="text-lg text-gold-300">{formatPrice(product.price)}</strong>
                <button
                  onClick={() => onAddToCart(product)}
                  className="rounded-full border border-stone-600 px-4 py-1.5 text-sm text-stone-100 transition hover:border-gold-400 hover:text-gold-200"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
