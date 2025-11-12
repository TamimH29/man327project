import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function Home() {
  const trending = ['Goldfish', 'Oreos', 'Fruit snacks', 'Mac & cheese', 'Yogurt'];
  const categories = [
    { key: 'snacks', label: 'Snacks' },
    { key: 'drinks', label: 'Drinks' },
    { key: 'breakfast', label: 'Breakfast' },
    { key: 'lunchbox', label: 'Lunchbox' },
    { key: 'desserts', label: 'Desserts' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 border-b">
        <span className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-emerald-300/40 blur-3xl animate-pulse" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Find healthier swaps kids will actually eat
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              BetterBites helps parents quickly discover nutritious alternatives tailored to your family’s tastes and needs.
            </p>

            <div className="mt-8">
              <SearchBar />
            </div>

            <div className="mt-6 text-sm text-gray-600">
              Trending: {' '}
              {trending.map((t, i) => (
                <Link key={t} to={`/search?q=${encodeURIComponent(t)}`} className="underline hover:text-emerald-700">
                  {t}{i < trending.length - 1 ? ', ' : ''}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <Link key={c.key} to={`/search?q=${encodeURIComponent(c.label)}`} className="px-4 py-2 rounded-full border bg-white hover:bg-gray-50 text-gray-800 text-sm">
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Personalized banner (static demo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-2xl border bg-white p-6 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-gray-900">Welcome back!</h3>
            <p className="text-sm text-gray-600">Based on your preferences, we highlighted nut-free, high-fiber options.</p>
          </div>
          <Link to="/profile/preferences" className="px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 text-sm">
            Edit preferences
          </Link>
        </div>
      </section>
    </main>
  );
}
