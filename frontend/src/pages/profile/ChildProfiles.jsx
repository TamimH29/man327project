import { useState } from 'react';

export default function ChildProfiles() {
  const [children, setChildren] = useState([
    { id: 1, name: 'Emma', age: 5, allergies: ['Peanuts'] },
    { id: 2, name: 'Noah', age: 8, allergies: [] },
  ]);
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({ name: '', age: '' });

  const addChild = (e) => {
    e.preventDefault();
    setChildren((prev) => [...prev, { id: prev.length + 1, name: form.name, age: Number(form.age), allergies: [] }]);
    setForm({ name: '', age: '' });
    setShowAdd(false);
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Child Profiles</h2>
        <button onClick={() => setShowAdd(true)} className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-sm">Add child</button>
      </div>

      {showAdd && (
        <form onSubmit={addChild} className="mb-6 p-4 border rounded-xl bg-white grid grid-cols-1 sm:grid-cols-3 gap-3 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input className="w-full border rounded-lg px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
            <input type="number" className="w-full border rounded-lg px-3 py-2" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} required />
          </div>
          <div>
            <button type="submit" className="w-full px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Save</button>
          </div>
        </form>
      )}

      <ul className="space-y-3">
        {children.map((c) => (
          <li key={c.id} className="p-4 border rounded-xl bg-white flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900">{c.name}</p>
              <p className="text-sm text-gray-600">Age {c.age} {c.allergies.length ? `• Allergies: ${c.allergies.join(', ')}` : ''}</p>
            </div>
            <div className="text-xs text-gray-500">ID {c.id}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
