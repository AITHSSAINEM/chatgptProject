import { Menu, Search, ShoppingBag } from 'lucide-react';

export default function Header({ cartCount, search, setSearch }) {
  return (
    <header className="sticky top-0 z-30 border-b border-stone-800 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <button className="rounded-full border border-stone-700 p-2 text-stone-200 transition hover:border-gold-400 hover:text-white">
          <Menu className="h-4 w-4" />
        </button>

        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400">Maison Dorée</p>
          <h1 className="font-serif text-lg tracking-[0.2em] text-white md:text-xl">ATELIER PARIS</h1>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <label className="group relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-500 group-focus-within:text-gold-400" />
            <input
              type="search"
              placeholder="Rechercher"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-52 rounded-full border border-stone-700 bg-stone-950 py-2 pl-9 pr-3 text-sm text-stone-100 placeholder:text-stone-500 focus:border-gold-400 focus:outline-none"
            />
          </label>
          <div className="flex items-center gap-2 rounded-full border border-stone-700 px-3 py-2 text-sm text-stone-200">
            <ShoppingBag className="h-4 w-4" />
            <span>{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
