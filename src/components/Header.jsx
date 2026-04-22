import { ShoppingBag } from 'lucide-react';

export default function Header({ cartCount, search, setSearch }) {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Maison Dorée</p>
          <h1 className="text-lg font-semibold text-stone-900">Bijoux plaqué or</h1>
        </div>

        <div className="flex flex-1 items-center justify-end gap-3">
          <input
            type="search"
            placeholder="Rechercher un bijou..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full max-w-sm rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm focus:border-gold-500 focus:outline-none"
          />
          <div className="flex items-center gap-2 rounded-full border border-stone-300 px-3 py-2 text-sm text-stone-700">
            <ShoppingBag className="h-4 w-4" />
            <span>{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
