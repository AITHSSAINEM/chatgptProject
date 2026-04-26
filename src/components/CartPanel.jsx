import { Trash2 } from 'lucide-react';
import { formatPrice } from '../utils/format';

export default function CartPanel({ cart, onIncrease, onDecrease, onRemove, total, onStartCheckout }) {
  return (
    <section className="glass-card rounded-2xl p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Votre sélection</p>
      <h3 className="mt-2 font-serif text-2xl text-white">Panier</h3>
      <div className="mt-4 space-y-3">
        {cart.length === 0 && <p className="text-sm text-stone-500">Votre panier est vide.</p>}

        {cart.map((item) => (
          <article key={item.id} className="rounded-xl border border-stone-700 bg-stone-900 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium text-stone-100">{item.name}</p>
                <p className="text-xs text-stone-400">{formatPrice(item.price)}</p>
              </div>
              <button onClick={() => onRemove(item.id)} className="p-1 text-stone-500 transition hover:text-red-400">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <button onClick={() => onDecrease(item.id)} className="rounded border border-stone-600 px-2 py-1 text-sm text-stone-200">
                -
              </button>
              <span className="min-w-6 text-center text-sm text-stone-200">{item.quantity}</span>
              <button onClick={() => onIncrease(item.id)} className="rounded border border-stone-600 px-2 py-1 text-sm text-stone-200">
                +
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-5 border-t border-stone-700 pt-4">
        <div className="flex items-center justify-between text-sm text-stone-300">
          <span>Total</span>
          <strong className="text-gold-300">{formatPrice(total)}</strong>
        </div>
        <button
          onClick={onStartCheckout}
          disabled={!cart.length}
          className="mt-4 w-full rounded-full bg-gold-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Passer au checkout
        </button>
      </div>
    </section>
  );
}
