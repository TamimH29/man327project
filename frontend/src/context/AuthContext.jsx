import { createContext, useContext, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signIn = async ({ username, password }) => {
    // Demo: accept any non-empty credentials
    if (username && password) {
      setUser({ name: username, email: `${username}@example.com` });
      return { ok: true };
    }
    return { ok: false, error: 'Invalid credentials' };
  };

  const signUp = async ({ firstName, lastName, email, password }) => {
    if (firstName && lastName && email && password) {
      setUser({ name: `${firstName} ${lastName}`, email });
      return { ok: true };
    }
    return { ok: false, error: 'Invalid input' };
  };

  const signOut = () => setUser(null);

  const value = useMemo(() => ({ user, signIn, signUp, signOut }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
