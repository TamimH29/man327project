import { useState } from 'react';

// Icon components
const Search = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>;
const Heart = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>;
const Star = ({ size = 24, className = "" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
const User = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const Filter = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>;
const X = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;
const Plus = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>;
const ChevronRight = ({ size = 24 }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>;

// Health Score Component
const HealthScore = ({ score }) => (
  <div className="flex items-center gap-2">
    <div className="flex">
      {[...Array(10)].map((_, i) => <Star key={i} size={16} className={i < score ? "fill-green-500 text-green-500" : "text-gray-300"} />)}
    </div>
    <span className="text-sm font-medium">{score}/10</span>
  </div>
);

// Welcome/Landing Page
const WelcomePage = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-6">
          Better<span className="text-blue-600">Bites</span>
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-12">
          What do you want to swap?
        </h2>
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for snacks, foods, drinks..."
              className="w-full px-8 py-6 text-xl rounded-2xl border-2 border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-blue-500 shadow-xl"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition-all"
            >
              <Search size={28} />
            </button>
          </div>
        </form>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Personalized</h3>
            <p className="text-gray-600">Tailored to your family's needs and preferences</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-5xl mb-4">💚</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Healthier Options</h3>
            <p className="text-gray-600">Find better alternatives that kids will love</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quick & Easy</h3>
            <p className="text-gray-600">Get instant results with smart filters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Auth Page
const AuthPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login/signup
    onLogin({ name: formData.name || 'Parent User', email: formData.email });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Better<span className="text-blue-600">Bites</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {isLogin ? 'Welcome back!' : 'Join our community'}
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg"
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>
        
        <p className="text-center mt-6 text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 font-semibold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

// Profile Sidebar
const ProfileSidebar = ({ user, favorites, savedResults, onProfileClick }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
        <User size={24} className="text-white" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-gray-900">{user.name}</h3>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
    </div>
    
    <button
      onClick={onProfileClick}
      className="w-full mb-6 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-all"
    >
      Manage Profile
    </button>
    
    <div className="mb-6">
      <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <Heart size={18} className="text-red-500" />
        Favorites
      </h4>
      {favorites.length > 0 ? (
        <ul className="space-y-2">
          {favorites.map((item, i) => (
            <li key={i} className="text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 italic">No favorites yet</p>
      )}
    </div>
    
    <div>
      <h4 className="font-bold text-gray-900 mb-3">Saved Results</h4>
      {savedResults.length > 0 ? (
        <ul className="space-y-2">
          {savedResults.map((item, i) => (
            <li key={i} className="text-sm text-gray-700 bg-gray-50 p-2 rounded-lg">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500 italic">No saved results</p>
      )}
    </div>
  </div>
);

// Search Results Page
const SearchResultsPage = ({ query, user, onBack, onProfileClick }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    texture: '',
    healthScore: 5,
    allergens: [],
    availability: 'all',
    childProfile: ''
  });
  
  const [favorites, setFavorites] = useState(['Organic Fruit Strips', 'Veggie Chips']);
  const [savedResults, setSavedResults] = useState(['Healthy Cookie Swap']);

  // Mock results data
  const results = [
    { 
      name: "Organic Oat Cookies", 
      brand: "Nature's Best", 
      image: "🍪", 
      healthScore: 8.5, 
      texture: "Crunchy",
      taste: "Mildly Sweet",
      ingredients: ["Organic oats", "Organic coconut oil", "Organic cane sugar"],
      allergens: ["Gluten"],
      price: "$4.99"
    },
    { 
      name: "Apple Cinnamon Bites", 
      brand: "Happy Kids", 
      image: "🍎", 
      healthScore: 9.0, 
      texture: "Soft & Chewy",
      taste: "Naturally Sweet",
      ingredients: ["Organic apples", "Organic apple juice", "Cinnamon"],
      allergens: [],
      price: "$3.99"
    },
    { 
      name: "Banana Oat Bars", 
      brand: "GoodMom", 
      image: "🍌", 
      healthScore: 8.0, 
      texture: "Soft",
      taste: "Sweet & Nutty",
      ingredients: ["Organic oats", "Organic bananas", "Organic honey"],
      allergens: ["Tree Nuts"],
      price: "$5.49"
    },
    { 
      name: "Veggie Crisps", 
      brand: "Garden Fresh", 
      image: "🥕", 
      healthScore: 7.5, 
      texture: "Crispy",
      taste: "Savory",
      ingredients: ["Sweet potatoes", "Beets", "Sea salt"],
      allergens: [],
      price: "$3.49"
    },
    { 
      name: "Fruit & Nut Mix", 
      brand: "Trail Buddies", 
      image: "🥜", 
      healthScore: 8.8, 
      texture: "Mixed",
      taste: "Sweet & Salty",
      ingredients: ["Almonds", "Raisins", "Cashews"],
      allergens: ["Tree Nuts"],
      price: "$6.99"
    },
    { 
      name: "Rice Puffs", 
      brand: "Puffed Treats", 
      image: "🍚", 
      healthScore: 7.0, 
      texture: "Light & Airy",
      taste: "Lightly Sweet",
      ingredients: ["Brown rice", "Organic cane sugar"],
      allergens: [],
      price: "$2.99"
    },
    { 
      name: "Chia Seed Pudding", 
      brand: "Super Seeds", 
      image: "🥄", 
      healthScore: 9.5, 
      texture: "Smooth & Creamy",
      taste: "Vanilla",
      ingredients: ["Chia seeds", "Coconut milk", "Vanilla"],
      allergens: [],
      price: "$4.49"
    },
    { 
      name: "Whole Grain Crackers", 
      brand: "Crunch Time", 
      image: "🧈", 
      healthScore: 7.8, 
      texture: "Crunchy",
      taste: "Savory",
      ingredients: ["Whole wheat", "Olive oil", "Sea salt"],
      allergens: ["Gluten"],
      price: "$3.79"
    },
    { 
      name: "Berry Smoothie Pops", 
      brand: "Frozen Delights", 
      image: "🍓", 
      healthScore: 8.2, 
      texture: "Frozen",
      taste: "Berry Burst",
      ingredients: ["Strawberries", "Blueberries", "Greek yogurt"],
      allergens: ["Dairy"],
      price: "$5.99"
    },
    { 
      name: "Protein Energy Balls", 
      brand: "Power Snacks", 
      image: "⚡", 
      healthScore: 8.9, 
      texture: "Dense & Chewy",
      taste: "Chocolate",
      ingredients: ["Dates", "Peanut butter", "Cocoa"],
      allergens: ["Peanuts"],
      price: "$7.49"
    }
  ];

  const filteredResults = results.filter(item => item.healthScore >= filters.healthScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Better<span className="text-blue-600">Bites</span>
            </h1>
          </div>
          
          {/* Search Bar */}
          <div className="flex gap-4 items-center">
            <div className="relative flex-1">
              <input
                type="text"
                defaultValue={query}
                placeholder="Search for snacks, foods, drinks..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <Filter size={20} />
              Filters
            </button>
          </div>
        </div>
      </header>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white border-b shadow-lg">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Texture</label>
                <select
                  value={filters.texture}
                  onChange={(e) => setFilters({...filters, texture: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Textures</option>
                  <option value="crunchy">Crunchy</option>
                  <option value="soft">Soft</option>
                  <option value="chewy">Chewy</option>
                  <option value="creamy">Creamy</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Min Health Score: {filters.healthScore}</label>
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={filters.healthScore}
                  onChange={(e) => setFilters({...filters, healthScore: parseFloat(e.target.value)})}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                <select
                  value={filters.availability}
                  onChange={(e) => setFilters({...filters, availability: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Stores</option>
                  <option value="local">Local Only</option>
                  <option value="online">Online</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Shopping For</label>
                <select
                  value={filters.childProfile}
                  onChange={(e) => setFilters({...filters, childProfile: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Everyone</option>
                  <option value="child1">Emma (Age 5)</option>
                  <option value="child2">Noah (Age 8)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Results */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Healthier alternatives for "{query}" ({filteredResults.length} results)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResults.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-6xl">{item.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{item.brand}</p>
                      <div className="text-2xl font-bold text-blue-600">{item.price}</div>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <HealthScore score={item.healthScore} />
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-700">Texture:</span>
                      <span className="text-gray-600">{item.texture}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-700">Taste:</span>
                      <span className="text-gray-600">{item.taste}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-gray-700">Key Ingredients:</span>
                      <p className="text-gray-600 mt-1">{item.ingredients.join(', ')}</p>
                    </div>
                    {item.allergens.length > 0 && (
                      <div className="flex items-start gap-2 text-sm">
                        <span className="font-semibold text-red-600">Allergens:</span>
                        <span className="text-red-600">{item.allergens.join(', ')}</span>
                      </div>
                    )}
                  </div>
                  
                  <button
                    onClick={() => setSavedResults([...savedResults, item.name])}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                  >
                    Save Result
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <ProfileSidebar 
              user={user}
              favorites={favorites}
              savedResults={savedResults}
              onProfileClick={onProfileClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Profile Management Page
const ProfilePage = ({ user, onBack }) => {
  const [childProfiles, setChildProfiles] = useState([
    { id: 1, name: 'Emma', age: 5, favorites: ['Apple slices', 'Yogurt'], allergies: ['Peanuts'], conditions: [] },
    { id: 2, name: 'Noah', age: 8, favorites: ['Granola bars', 'Cheese'], allergies: [], conditions: ['Lactose sensitive'] }
  ]);
  
  const [showAddChild, setShowAddChild] = useState(false);
  const [newChild, setNewChild] = useState({ name: '', age: '', favorites: '', allergies: '', conditions: '' });

  const handleAddChild = (e) => {
    e.preventDefault();
    const child = {
      id: childProfiles.length + 1,
      name: newChild.name,
      age: parseInt(newChild.age),
      favorites: newChild.favorites.split(',').map(s => s.trim()).filter(Boolean),
      allergies: newChild.allergies.split(',').map(s => s.trim()).filter(Boolean),
      conditions: newChild.conditions.split(',').map(s => s.trim()).filter(Boolean)
    };
    setChildProfiles([...childProfiles, child]);
    setNewChild({ name: '', age: '', favorites: '', allergies: '', conditions: '' });
    setShowAddChild(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              Better<span className="text-blue-600">Bites</span>
            </h1>
            <button
              onClick={onBack}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Back to Search
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-12">
        {/* User Profile */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                defaultValue={user.name}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Child Profiles */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Child Profiles</h2>
            <button
              onClick={() => setShowAddChild(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <Plus size={20} />
              Add Child
            </button>
          </div>

          {/* Add Child Form */}
          {showAddChild && (
            <div className="bg-blue-50 rounded-xl p-6 mb-6 border-2 border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Add New Child Profile</h3>
                <button
                  onClick={() => setShowAddChild(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleAddChild} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={newChild.name}
                      onChange={(e) => setNewChild({...newChild, name: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="number"
                      value={newChild.age}
                      onChange={(e) => setNewChild({...newChild, age: e.target.value})}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Favorite Foods (comma-separated)</label>
                  <input
                    type="text"
                    value={newChild.favorites}
                    onChange={(e) => setNewChild({...newChild, favorites: e.target.value})}
                    placeholder="e.g., Apples, Crackers, Yogurt"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Allergies (comma-separated)</label>
                  <input
                    type="text"
                    value={newChild.allergies}
                    onChange={(e) => setNewChild({...newChild, allergies: e.target.value})}
                    placeholder="e.g., Peanuts, Dairy, Gluten"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Health Conditions (comma-separated)</label>
                  <input
                    type="text"
                    value={newChild.conditions}
                    onChange={(e) => setNewChild({...newChild, conditions: e.target.value})}
                    placeholder="e.g., Diabetes, Lactose intolerant"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  Save Child Profile
                </button>
              </form>
            </div>
          )}

          {/* Child Profile Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {childProfiles.map((child) => (
              <div key={child.id} className="border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{child.name}</h3>
                    <p className="text-gray-600">Age: {child.age}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                    👶
                  </div>
                </div>
                
                {child.favorites.length > 0 && (
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Favorite Foods:</p>
                    <div className="flex flex-wrap gap-2">
                      {child.favorites.map((food, i) => (
                        <span key={i} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                          {food}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {child.allergies.length > 0 && (
                  <div className="mb-3">
                    <p className="text-sm font-semibold text-red-700 mb-2">Allergies:</p>
                    <div className="flex flex-wrap gap-2">
                      {child.allergies.map((allergy, i) => (
                        <span key={i} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs">
                          {allergy}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {child.conditions.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-orange-700 mb-2">Health Conditions:</p>
                    <div className="flex flex-wrap gap-2">
                      {child.conditions.map((condition, i) => (
                        <span key={i} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('welcome'); // 'welcome', 'auth', 'search', 'profile'
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleWelcomeSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage('auth');
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage('search');
  };

  const handleProfileClick = () => {
    setCurrentPage('profile');
  };

  const handleBackToSearch = () => {
    setCurrentPage('search');
  };

  return (
    <>
      {currentPage === 'welcome' && (
        <WelcomePage onSearch={handleWelcomeSearch} />
      )}
      
      {currentPage === 'auth' && (
        <AuthPage onLogin={handleLogin} />
      )}
      
      {currentPage === 'search' && user && (
        <SearchResultsPage 
          query={searchQuery} 
          user={user}
          onBack={() => setCurrentPage('welcome')}
          onProfileClick={handleProfileClick}
        />
      )}
      
      {currentPage === 'profile' && user && (
        <ProfilePage 
          user={user}
          onBack={handleBackToSearch}
        />
      )}
    </>
  );
}

export default App;
