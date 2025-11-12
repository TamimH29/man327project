import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProfileMenu() {
  const { user, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    setOpen(false);
    navigate('/signin');
  };

  return (
    <div className="relative">
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
        <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
          {user?.name?.[0]?.toUpperCase() || 'B'}
        </div>
        <span className="hidden sm:block text-sm text-gray-700">{user?.name || 'Guest'}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-200 z-50">
          <div className="px-4 py-3 border-b">
            <div className="text-sm font-semibold text-gray-800">{user?.name || 'Guest'}</div>
            <div className="text-xs text-gray-500">{user?.email || 'Not signed in'}</div>
          </div>
          <nav className="py-1">
            <Link to="/profile" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Profile</Link>
            <Link to="/profile/favorites" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Favorites</Link>
            <Link to="/profile/saved" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Saved Results</Link>
            <Link to="/profile/preferences" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Preferences</Link>
            <Link to="/profile/children" className="block px-4 py-2.5 text-sm hover:bg-gray-50 text-gray-700">Child Profiles</Link>
            <button onClick={handleSignOut} className="w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 text-red-600">Sign out</button>
          </nav>
        </div>
      )}
    </div>
  );
}
