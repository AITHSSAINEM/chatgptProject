import { categories } from '../data/products';

export default function Filters({ filters, setFilters }) {
  return (
    <aside className="glass-card h-fit rounded-2xl p-4 shadow-sm">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-600">Filtres</h3>

      <div className="mt-4 space-y-4 text-sm">
        <div>
          <label className="mb-1 block text-stone-700">Catégorie</label>
          <select
            value={filters.category}
            onChange={(event) => setFilters((prev) => ({ ...prev, category: event.target.value }))}
            className="w-full rounded-lg border border-stone-300 px-3 py-2"
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
          <label className="mb-1 block text-stone-700">Prix max: {filters.maxPrice}€</label>
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

        <label className="flex items-center justify-between rounded-lg border border-stone-300 px-3 py-2">
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
