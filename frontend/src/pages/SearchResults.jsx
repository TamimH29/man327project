import { useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchResults() {
  const query = useQuery().get('q') || '';
  const [showFilters] = useState(true);
  const [showComparison, setShowComparison] = useState(false);
  const [sortBy, setSortBy] = useState('healthiest');
  
  const [filters, setFilters] = useState({
    textures: [],
    allergens: [],
    availability: 'all',
    minHealthScore: 0,
    maxHealthScore: 10,
    dietTypes: []
  });

  const textureOptions = ['Crunchy', 'Creamy', 'Chewy', 'Soft', 'Crispy'];
  const allergenOptions = ['Peanuts', 'Tree Nuts', 'Dairy', 'Gluten', 'Soy', 'Eggs'];
  const availabilityOptions = [
    { value: 'all', label: 'All' },
    { value: 'local', label: 'Local Stores' },
    { value: 'online', label: 'Online' }
  ];
  const dietTypeOptions = ['Vegan', 'Keto', 'Low-Sugar', 'Gluten-free'];

  const toggleFilter = (category, value) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(v => v !== value)
        : [...prev[category], value]
    }));
  };

  const filtered = mockProducts.filter(item => {
    if (item.healthScore < filters.minHealthScore || item.healthScore > filters.maxHealthScore) return false;
    if (filters.textures.length && !filters.textures.includes(item.texture)) return false;
    if (filters.allergens.length && item.allergens.some(a => filters.allergens.includes(a))) return false;
    if (filters.availability !== 'all' && item.availability !== filters.availability) return false;
    if (filters.dietTypes.length && !filters.dietTypes.some(d => item.dietType.includes(d))) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'healthiest': return b.healthScore - a.healthScore;
      case 'rating': return b.rating - a.rating;
      case 'price': return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      default: return 0;
    }
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Results for "{query}" <span className="text-gray-500 font-normal">({sorted.length})</span>
        </h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setShowComparison(!showComparison)} className="px-4 py-2 rounded-lg border hover:bg-gray-50 text-sm">
            {showComparison ? 'Hide' : 'Show'} Comparison
          </button>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2 rounded-lg border text-sm">
            <option value="healthiest">Healthiest</option>
            <option value="rating">Most Popular</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Filters Sidebar */}
        {showFilters && (
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-20 bg-white rounded-xl border p-4 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-900">Filters</h2>
                <button onClick={() => setFilters({ textures: [], allergens: [], availability: 'all', minHealthScore: 0, maxHealthScore: 10, dietTypes: [] })} className="text-xs text-emerald-700 hover:underline">
                  Clear all
                </button>
              </div>

              {/* Health Score */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Health Score</label>
                <div className="space-y-2">
                  <input type="range" min="0" max="10" step="0.5" value={filters.minHealthScore} onChange={(e) => setFilters(prev => ({ ...prev, minHealthScore: parseFloat(e.target.value) }))} className="w-full" />
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>{filters.minHealthScore}</span>
                    <span>{filters.maxHealthScore}</span>
                  </div>
                </div>
              </div>

              {/* Texture */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Texture</label>
                <div className="space-y-1">
                  {textureOptions.map(t => (
                    <label key={t} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={filters.textures.includes(t)} onChange={() => toggleFilter('textures', t)} className="rounded" />
                      {t}
                    </label>
                  ))}
                </div>
              </div>

              {/* Allergens */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Avoid Allergens</label>
                <div className="space-y-1">
                  {allergenOptions.map(a => (
                    <label key={a} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={filters.allergens.includes(a)} onChange={() => toggleFilter('allergens', a)} className="rounded" />
                      {a}
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                <select value={filters.availability} onChange={(e) => setFilters(prev => ({ ...prev, availability: e.target.value }))} className="w-full px-3 py-2 rounded-lg border text-sm">
                  {availabilityOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Diet Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Diet Type</label>
                <div className="space-y-1">
                  {dietTypeOptions.map(d => (
                    <label key={d} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" checked={filters.dietTypes.includes(d)} onChange={() => toggleFilter('dietTypes', d)} className="rounded" />
                      {d}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Results */}
        <div className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sorted.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="block bg-white rounded-xl border p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{item.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.brand}</p>
                      </div>
                      <span className="text-sm px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 whitespace-nowrap">
                        {item.healthScore}/10
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({item.reviews})</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">{tag}</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 mt-3 line-clamp-2">{item.description}</p>
                    
                    {showComparison && (
                      <div className="mt-4 pt-4 border-t">
                        <p className="text-xs font-medium text-gray-700 mb-2">💡 Why this match?</p>
                        <p className="text-xs text-gray-600">{item.whyMatch}</p>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-red-50 rounded p-2">
                            <div className="font-medium text-red-900">Original</div>
                            <div className="text-red-700">{item.originalNutrition.calories} cal • {item.originalNutrition.sugar}g sugar</div>
                          </div>
                          <div className="bg-emerald-50 rounded p-2">
                            <div className="font-medium text-emerald-900">Better Option</div>
                            <div className="text-emerald-700">{item.nutrition.calories} cal • {item.nutrition.sugar}g sugar</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
