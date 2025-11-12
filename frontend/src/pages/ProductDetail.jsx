import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getProductsByIds } from '../data/mockProducts';
import { useAuth } from '../context/AuthContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const product = getProductById(id);
  const [showComparison, setShowComparison] = useState(false);
  const [showRecipe, setShowRecipe] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [saveToProfile, setSaveToProfile] = useState('personal');

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-gray-600">Product not found</p>
      </main>
    );
  }

  const swapSuggestions = getProductsByIds(product.swapSuggestions || []);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In real app: API call to save to user profile
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    // In real app: API call to save for later
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Section */}
      <div className="bg-white rounded-2xl border p-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center bg-gray-50 rounded-xl p-12">
            <div className="text-9xl">{product.image}</div>
          </div>
          
          <div>
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                <p className="text-lg text-gray-600 mt-1">{product.brand}</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100">
                  <span className="text-2xl font-bold text-emerald-700">{product.healthScore}</span>
                  <span className="text-sm text-emerald-600">/10</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-xl ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.map(tag => (
                <span key={tag} className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">{tag}</span>
              ))}
            </div>

            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            <div className="flex gap-3">
              <button onClick={handleFavorite} className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${isFavorite ? 'bg-red-500 text-white' : 'bg-red-50 text-red-600 hover:bg-red-100'}`}>
                ❤️ {isFavorite ? 'Favorited' : 'Add to Favorites'}
              </button>
              <button onClick={handleSave} className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${isSaved ? 'bg-emerald-500 text-white' : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'}`}>
                📌 {isSaved ? 'Saved' : 'Save For Later'}
              </button>
            </div>

            {(isFavorite || isSaved) && user && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-2">Save to profile:</label>
                <select value={saveToProfile} onChange={(e) => setSaveToProfile(e.target.value)} className="w-full px-3 py-2 rounded-lg border text-sm">
                  <option value="personal">My Profile</option>
                  <option value="child1">Emma (Age 5)</option>
                  <option value="child2">Noah (Age 8)</option>
                </select>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Nutrition Snapshot */}
      <div className="bg-white rounded-2xl border p-8 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Nutrition Facts</h2>
          <button onClick={() => setShowComparison(!showComparison)} className="px-4 py-2 rounded-lg border hover:bg-gray-50 text-sm">
            {showComparison ? 'Hide' : 'Show'} Comparison
          </button>
        </div>

        <div className={`grid ${showComparison ? 'grid-cols-2' : 'grid-cols-1'} gap-6`}>
          {showComparison && (
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-semibold text-red-900 mb-4">Original Snack</h3>
              <div className="space-y-3">
                {Object.entries(product.originalNutrition).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-red-700 capitalize">{key}</span>
                    <span className="font-medium text-red-900">{value}{key === 'calories' ? '' : 'g'}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={`${showComparison ? 'bg-emerald-50' : 'bg-gray-50'} rounded-xl p-6`}>
            {showComparison && <h3 className="font-semibold text-emerald-900 mb-4">Better Option</h3>}
            <div className="space-y-3">
              {Object.entries(product.nutrition).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span className={`${showComparison ? 'text-emerald-700' : 'text-gray-700'} capitalize`}>{key}</span>
                  <span className={`font-medium ${showComparison ? 'text-emerald-900' : 'text-gray-900'}`}>{value}{key === 'calories' ? '' : 'g'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients List */}
      <div className="bg-white rounded-2xl border p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ingredients</h2>
        <div className="space-y-3">
          {product.ingredients.map((ing, idx) => (
            <Link key={idx} to={`/ingredient/${ing.id}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 border transition-colors">
              <span className="font-medium text-gray-900">{ing.name}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">{ing.tag}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Allergen Info */}
      <div className="bg-white rounded-2xl border p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Allergen Information</h2>
        {product.allergens.length > 0 ? (
          <div>
            <div className="flex flex-wrap gap-3 mb-4">
              {product.allergens.map(allergen => (
                <span key={allergen} className="px-4 py-2 rounded-lg bg-red-100 text-red-700 font-medium">
                  ⚠️ Contains {allergen}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600">Please check packaging for complete allergen information.</p>
          </div>
        ) : (
          <div className="flex items-center gap-3 p-4 bg-emerald-50 rounded-lg">
            <span className="text-2xl">✓</span>
            <div>
              <p className="font-medium text-emerald-900">No major allergens detected</p>
              <p className="text-sm text-emerald-700">Safe for nut-free classrooms</p>
            </div>
          </div>
        )}
      </div>

      {/* Recipe Instructions (if applicable) */}
      {product.type === 'recipe' && product.recipeSteps && (
        <div className="bg-white rounded-2xl border p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Recipe Instructions</h2>
            <button onClick={() => setShowRecipe(!showRecipe)} className="text-sm text-emerald-700 hover:underline">
              {showRecipe ? 'Collapse' : 'Expand'}
            </button>
          </div>
          {showRecipe && (
            <ol className="space-y-4">
              {product.recipeSteps.map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-semibold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <p className="flex-1 text-gray-700 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}

      {/* Why This Match */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">💡 Why This Match?</h2>
        <p className="text-gray-700 text-lg">{product.whyMatch}</p>
      </div>

      {/* Swap Suggestions */}
      {swapSuggestions.length > 0 && (
        <div className="bg-white rounded-2xl border p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">If you like this, try...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {swapSuggestions.map(item => (
              <Link key={item.id} to={`/product/${item.id}`} className="border rounded-xl p-4 hover:shadow-lg transition-shadow">
                <div className="text-5xl text-center mb-3">{item.image}</div>
                <h3 className="font-semibold text-gray-900 text-center mb-1">{item.name}</h3>
                <p className="text-sm text-gray-600 text-center">{item.brand}</p>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    {item.healthScore}/10
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <div className="bg-white rounded-2xl border p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Rate This Product</h2>
        <div className="flex items-center gap-4 mb-6">
          <p className="text-gray-700">Your rating:</p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(star => (
              <button key={star} onClick={() => setUserRating(star)} className={`text-3xl transition-colors ${star <= userRating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-200'}`}>
                ★
              </button>
            ))}
          </div>
          {userRating > 0 && <span className="text-sm text-gray-600">You rated: {userRating}/5</span>}
        </div>
        <p className="text-sm text-gray-500 italic">Full review system coming soon!</p>
      </div>
    </main>
  );
}
