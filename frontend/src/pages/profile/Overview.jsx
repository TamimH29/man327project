import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Overview() {
  const { user } = useAuth();

  const quick = [
    { to: '/profile/favorites', label: 'Favorites', kpi: '3 items' },
    { to: '/profile/saved', label: 'Saved Results', kpi: '3 items' },
    { to: '/profile/preferences', label: 'Preferences', kpi: 'Nut-free, high fiber' },
    { to: '/profile/children', label: 'Child Profiles', kpi: '2 profiles' },
  ];

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-900">Welcome{user?.name ? `, ${user.name}` : ''}</h2>
        <p className="mt-1 text-sm text-gray-600">
          Here’s a quick snapshot of your BetterBites profile. Jump into any section to update details or browse your saved items.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quick.map((q) => (
          <Link key={q.to} to={q.to} className="rounded-2xl border bg-white p-5 hover:shadow-md transition-shadow">
            <div className="text-sm text-gray-600">{q.label}</div>
            <div className="mt-1 text-lg font-semibold text-gray-900">{q.kpi}</div>
            <div className="mt-3 inline-block text-sm text-emerald-700">Manage →</div>
          </Link>
        ))}
      </div>

      <div className="rounded-2xl border bg-emerald-50 p-6">
        <h3 className="font-semibold text-emerald-900">Tips</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-emerald-900/80 space-y-1">
          <li>Set allergens and ingredient preferences to improve recommendations.</li>
          <li>Add child profiles to tailor texture and taste to each kid.</li>
          <li>Use Save on search results to build your go-to list.</li>
        </ul>
      </div>
    </section>
  );
}
