import { Link } from 'react-router';
import { getProductById } from '../../data/mockProducts';

export default function SavedResults() {
  // Demo saved products
  const savedItems = [
    { id: 3, type: 'product' }, // Banana Oat Bars
    { id: 4, type: 'product' }, // Veggie Crisps
    { id: 1, type: 'product' }, // Organic Oat Cookies
  ];

  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Saved Results</h2>
      {savedItems.length === 0 ? (
        <p className="text-gray-600">No saved results yet.</p>
      ) : (
        <ul className="space-y-3">
          {savedItems.map((item) => {
            const product = getProductById(item.id);
            
            if (!product) return null;

            return (
              <li key={item.id}>
                <Link
                  to={`/product/${item.id}`}
                  className="flex items-center gap-4 p-4 border rounded-lg bg-white hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl">{product.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{product.brand}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded">
                        Health Score: {product.healthScore}/10
                      </span>
                      <span className="text-xs text-gray-500">
                        ⭐ {product.rating} ({product.reviews} reviews)
                      </span>
                      {product.type === 'recipe' && (
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-800 rounded">
                          Recipe
                        </span>
                      )}
                    </div>
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
