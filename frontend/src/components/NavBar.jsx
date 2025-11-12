import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import NotificationsBell from './NotificationsBell';
import ProfileMenu from './ProfileMenu';

export default function NavBar() {
  const location = useLocation();
  const hideSearchOn = ['/', '/about', '/signin', '/signup'];
  const showSearch = !hideSearchOn.includes(location.pathname);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">B</div>
            <span className="font-semibold text-lg text-gray-800">BetterBites</span>
          </Link>

          {showSearch && <SearchBar />}

          <nav className="ml-auto flex items-center gap-2">
            <Link to="/about" className="px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100">About</Link>
            <NotificationsBell />
            <ProfileMenu />
          </nav>
        </div>
      </div>
    </header>
  );
}
