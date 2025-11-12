import { useState } from 'react';

export default function Preferences() {
  const [prefs, setPrefs] = useState({
    allergens: 'Peanuts, Dairy',
    avoidIngredients: 'High fructose corn syrup',
    taste: 'Not too sweet',
  });

  return (
    <section className="max-w-2xl">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">Preferences</h2>
      <div className="space-y-4 bg-white border rounded-xl p-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Allergens</label>
          <input className="w-full border rounded-lg px-3 py-2" value={prefs.allergens} onChange={(e) => setPrefs({ ...prefs, allergens: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Avoid ingredients</label>
          <input className="w-full border rounded-lg px-3 py-2" value={prefs.avoidIngredients} onChange={(e) => setPrefs({ ...prefs, avoidIngredients: e.target.value })} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Taste notes</label>
          <input className="w-full border rounded-lg px-3 py-2" value={prefs.taste} onChange={(e) => setPrefs({ ...prefs, taste: e.target.value })} />
        </div>
        <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Save</button>
      </div>
    </section>
  );
}
