import { useParams, Link } from 'react-router-dom';
import { getIngredientById } from '../data/mockIngredients';
import { getProductsByIds } from '../data/mockProducts';

export default function IngredientDetail() {
  const { id } = useParams();
  const ingredient = getIngredientById(id);

  if (!ingredient) {
    return (
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-gray-600">Ingredient not found</p>
      </main>
    );
  }

  const recipesUsing = getProductsByIds(ingredient.usedIn || []);

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Section */}
      <div className="bg-white rounded-2xl border p-8 mb-6">
        <div className="flex items-start gap-6">
          <div className="text-8xl">{ingredient.image}</div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{ingredient.name}</h1>
            <p className="text-lg text-gray-600">{ingredient.summary}</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-white rounded-2xl border p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
        <p className="text-gray-700 mb-4">{ingredient.description}</p>
        <div className="flex items-start gap-2 text-sm text-gray-600">
          <span className="font-medium">Origin:</span>
          <span>{ingredient.origin}</span>
        </div>
      </div>

      {/* Health Benefits & Concerns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-6">
          <h3 className="text-lg font-bold text-emerald-900 mb-4">✓ Good for you because...</h3>
          <ul className="space-y-2">
            {ingredient.healthBenefits.map((benefit, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-emerald-800">
                <span className="text-emerald-600">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-orange-50 rounded-2xl border border-orange-200 p-6">
          <h3 className="text-lg font-bold text-orange-900 mb-4">⚠️ Watch out if...</h3>
          <ul className="space-y-2">
            {ingredient.concerns.map((concern, idx) => (
              <li key={idx} className="flex gap-2 text-sm text-orange-800">
                <span className="text-orange-600">•</span>
                <span>{concern}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Nutritional Overview */}
      <div className="bg-white rounded-2xl border p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Nutritional Overview</h2>
        <p className="text-sm text-gray-600 mb-4">Per {ingredient.nutrition.per}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(ingredient.nutrition).filter(([key]) => key !== 'per').map(([key, value]) => (
            <div key={key} className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 capitalize">{key}</div>
              <div className="text-2xl font-bold text-gray-900 mt-1">{value}{key === 'calories' ? '' : 'g'}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Substitute Ingredients */}
      <div className="bg-white rounded-2xl border p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Looking for alternatives?</h2>
        <div className="space-y-3">
          {ingredient.substitutes.map((sub, idx) => (
            <Link key={idx} to={`/ingredient/${sub.id}`} className="block p-4 rounded-lg border hover:border-emerald-500 hover:bg-emerald-50 transition-all">
              <div className="font-medium text-gray-900">{sub.name}</div>
              <div className="text-sm text-gray-600 mt-1">{sub.reason}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recipes Using This Ingredient */}
      {recipesUsing.length > 0 && (
        <div className="bg-white rounded-2xl border p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Recipes Using {ingredient.name} ({recipesUsing.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recipesUsing.map(recipe => (
              <Link key={recipe.id} to={`/product/${recipe.id}`} className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-lg transition-shadow">
                <div className="text-4xl">{recipe.image}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900">{recipe.name}</h3>
                  <p className="text-sm text-gray-600">{recipe.brand}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">
                      {recipe.healthScore}/10
                    </span>
                    <span className="text-xs text-gray-500">{recipe.type}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Allergen & Sustainability Info */}
      <div className="bg-white rounded-2xl border p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Info</h2>
        <div className="flex flex-wrap gap-2">
          {ingredient.badges.map(badge => (
            <span key={badge} className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </main>
  );
}
