import { X } from 'lucide-react';
import { formatPrice } from '../utils/format';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 flex items-end bg-black/50 p-4 md:items-center md:justify-center">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-5 shadow-2xl">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xl font-semibold">Détail produit</h3>
          <button onClick={onClose} className="rounded-full p-1 hover:bg-stone-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <img src={product.image} alt={product.name} className="h-72 w-full rounded-xl object-cover" />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{product.category}</p>
            <h4 className="mt-2 text-2xl font-semibold text-stone-900">{product.name}</h4>
            <p className="mt-3 text-sm text-stone-600">{product.description}</p>
            <p className="mt-4 text-2xl font-semibold text-gold-600">{formatPrice(product.price)}</p>
            <button
              onClick={() => onAddToCart(product)}
              className="mt-6 w-full rounded-full bg-black px-4 py-3 font-medium text-white hover:bg-stone-800"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
