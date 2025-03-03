
// Simple authentication handling for the electrician website

import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing user from localStorage:", error);
      }
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Simple authentication - in a real app, this would call an API
    if (username === 's' && password === 's') {
      const userData = {
        id: '1',
        name: 'Demo User',
        email: 'demo@example.com',
        role: 'client'
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
