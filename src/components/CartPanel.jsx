import { Trash2 } from 'lucide-react';
import { formatPrice } from '../utils/format';

export default function CartPanel({ cart, onIncrease, onDecrease, onRemove, total, onStartCheckout }) {
  return (
    <section className="glass-card rounded-2xl p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-stone-900">Panier</h3>
      <div className="mt-4 space-y-3">
        {cart.length === 0 && <p className="text-sm text-stone-500">Votre panier est vide.</p>}

        {cart.map((item) => (
          <article key={item.id} className="rounded-xl border border-stone-200 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-stone-800">{item.name}</p>
                <p className="text-xs text-stone-500">{formatPrice(item.price)}</p>
              </div>
              <button onClick={() => onRemove(item.id)} className="p-1 text-stone-500 hover:text-red-500">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <button onClick={() => onDecrease(item.id)} className="rounded border px-2 py-1 text-sm">
                -
              </button>
              <span className="min-w-6 text-center text-sm">{item.quantity}</span>
              <button onClick={() => onIncrease(item.id)} className="rounded border px-2 py-1 text-sm">
                +
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 border-t border-stone-200 pt-3">
        <div className="flex items-center justify-between text-sm">
          <span>Total</span>
          <strong className="text-gold-600">{formatPrice(total)}</strong>
        </div>
        <button
          onClick={onStartCheckout}
          disabled={!cart.length}
          className="mt-3 w-full rounded-full bg-black px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Passer au checkout
        </button>
      </div>
    </section>
  );
}
