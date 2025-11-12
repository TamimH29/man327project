import { NavLink, Outlet } from 'react-router-dom';

export default function Profile() {
  const tabs = [
    { to: '/profile', label: 'Overview', end: true },
    { to: '/profile/favorites', label: 'Favorites' },
    { to: '/profile/saved', label: 'Saved Results' },
    { to: '/profile/preferences', label: 'Preferences' },
    { to: '/profile/children', label: 'Child Profiles' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Profile</h1>
      <div className="border-b mb-6">
        <nav className="-mb-px flex flex-wrap gap-4">
          {tabs.map((t) => (
            <NavLink key={t.to} to={t.to} end={t.end}
              className={({ isActive }) => `px-3 py-2 text-sm border-b-2 ${isActive ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'}`}
            >
              {t.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <Outlet />
    </main>
  );
}
