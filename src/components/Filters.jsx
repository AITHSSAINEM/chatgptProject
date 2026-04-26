import { categories } from '../data/products';

export default function Filters({ filters, setFilters }) {
  return (
    <aside className="glass-card h-fit rounded-2xl p-5">
      <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Navigation</p>
      <h3 className="mt-2 font-serif text-xl text-white">Filtres collection</h3>

      <div className="mt-6 space-y-5 text-sm">
        <div>
          <label className="mb-2 block uppercase tracking-[0.2em] text-stone-400">Catégorie</label>
          <select
            value={filters.category}
            onChange={(event) => setFilters((prev) => ({ ...prev, category: event.target.value }))}
            className="w-full rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-stone-200"
          >
            <option value="all">Toutes</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block uppercase tracking-[0.2em] text-stone-400">
            Prix maximum: {filters.maxPrice}€
          </label>
          <input
            type="range"
            min="30"
            max="150"
            value={filters.maxPrice}
            onChange={(event) =>
              setFilters((prev) => ({ ...prev, maxPrice: Number(event.target.value) }))
            }
            className="w-full"
          />
        </div>

        <label className="flex items-center justify-between rounded-lg border border-stone-700 bg-stone-900 px-3 py-2 text-stone-200">
          <span>Nouveautés uniquement</span>
          <input
            type="checkbox"
            checked={filters.onlyNew}
            onChange={(event) => setFilters((prev) => ({ ...prev, onlyNew: event.target.checked }))}
          />
        </label>
      </div>
    </aside>
  );
}
