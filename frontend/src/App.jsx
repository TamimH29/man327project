import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail';
import IngredientDetail from './pages/IngredientDetail';
import Profile from './pages/profile/Profile';
import Favorites from './pages/profile/Favorites';
import SavedResults from './pages/profile/SavedResults';
import Preferences from './pages/profile/Preferences';
import ChildProfiles from './pages/profile/ChildProfiles';
import Overview from './pages/profile/Overview';

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Outlet />
      <footer className="mt-16 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} BetterBites
        </div>
      </footer>
    </div>
  );
}

function RequireAuth({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/signin" replace />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="search" element={<SearchResults />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="ingredient/:id" element={<IngredientDetail />} />
            <Route
              path="profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            >
              <Route index element={<Overview />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="saved" element={<SavedResults />} />
              <Route path="preferences" element={<Preferences />} />
              <Route path="children" element={<ChildProfiles />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
