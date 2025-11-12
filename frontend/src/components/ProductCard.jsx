export default function ProductCard({ item }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold">
          {item.name?.[0] || 'P'}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{item.name}</h3>
            <span className="text-sm px-2 py-1 rounded-full bg-emerald-50 text-emerald-700">Health {item.healthScore}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">Texture: {item.texture} • Taste: {item.taste}
            {item.availability && <span className="ml-2 text-xs text-gray-500">({item.availability})</span>}
          </p>
          <p className="text-xs text-gray-500 mt-2">Ingredients: {item.ingredients?.join(', ')}</p>
          {item.allergens?.length > 0 && (
            <p className="text-xs text-red-600 mt-1">Allergens: {item.allergens.join(', ')}</p>
          )}
          <div className="mt-3 flex gap-2">
            <button className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 hover:bg-gray-50">Save</button>
            <button className="px-3 py-1.5 text-sm rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Compare</button>
          </div>
        </div>
      </div>
    </div>
  );
}
