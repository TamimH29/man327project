import { Link } from 'react-router';
import { getProductById } from '../../data/mockProducts';
import { getIngredientById } from '../../data/mockIngredients';

export default function Favorites() {
  // Demo favorites: mix of products and ingredients
  const favoriteItems = [
    { id: 1, type: 'product' }, // Organic Oat Cookies
    { id: 2, type: 'product' }, // Apple Cinnamon Bites
    { id: 'oats', type: 'ingredient' }, // Oats ingredient (string ID)
  ];

  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Favorites</h2>
      {favoriteItems.length === 0 ? (
        <p className="text-gray-600">No favorites yet.</p>
      ) : (
        <ul className="space-y-3">
          {favoriteItems.map((item) => {
            const data = item.type === 'product' 
              ? getProductById(item.id) 
              : getIngredientById(item.id);
            
            if (!data) return null;

            return (
              <li key={`${item.type}-${item.id}`}>
                <Link
                  to={item.type === 'product' ? `/product/${item.id}` : `/ingredient/${item.id}`}
                  className="flex items-center gap-4 p-4 border rounded-lg bg-white hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl">{data.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{data.name}</h3>
                    <p className="text-sm text-gray-600">
                      {item.type === 'product' ? data.brand : data.summary}
                    </p>
                    {item.type === 'product' && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded">
                          Health Score: {data.healthScore}/10
                        </span>
                        <span className="text-xs text-gray-500">
                          ⭐ {data.rating} ({data.reviews} reviews)
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
