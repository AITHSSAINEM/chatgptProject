import { X } from 'lucide-react';
import { formatPrice } from '../utils/format';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 flex items-end bg-black/70 p-4 md:items-center md:justify-center">
      <div className="w-full max-w-2xl rounded-2xl border border-stone-700 bg-stone-950 p-5 text-stone-100 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-serif text-2xl">Détail produit</h3>
          <button onClick={onClose} className="rounded-full p-1 transition hover:bg-stone-800">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <img src={product.image} alt={product.name} className="h-72 w-full rounded-xl object-cover" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{product.category}</p>
            <h4 className="mt-2 font-serif text-3xl text-white">{product.name}</h4>
            <p className="mt-3 text-sm text-stone-400">{product.description}</p>
            <p className="mt-4 text-2xl font-semibold text-gold-300">{formatPrice(product.price)}</p>
            <button
              onClick={() => onAddToCart(product)}
              className="mt-6 w-full rounded-full bg-gold-500 px-4 py-3 font-medium text-black transition hover:bg-gold-400"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
