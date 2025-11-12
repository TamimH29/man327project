import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({ initialQuery = '' }) {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form onSubmit={onSubmit} className="flex-1 max-w-2xl">
      <div className="flex items-center gap-2 bg-white rounded-full border border-gray-300 px-4 py-2 shadow-sm">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search for a snack, brand, or ingredient..."
          className="flex-1 outline-none text-gray-800 placeholder:text-gray-400"
        />
        <button type="submit" className="px-4 py-1.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700">
          Search
        </button>
      </div>
    </form>
  );
}
