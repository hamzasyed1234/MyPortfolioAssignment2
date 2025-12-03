import React, { createContext, useState, useEffect, useContext } from 'react';
import authService from '../services/authService.js';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signin = async (credentials) => {
    try {
      const response = await authService.signin(credentials);
      const { token, user } = response.data;
      setToken(token);
      setUser(user);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || 'Signin failed' };
    }
  };

  const signup = async (userData) => {
    try {
      const response = await authService.signup(userData);
      const { token, user } = response.data;
      setToken(token);
      setUser(user);
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.error || 'Signup failed' };
    }
  };

  const signout = async () => {
    try {
      await authService.signout();
    } finally {
      setToken(null);
      setUser(null);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  };

  const isAdmin = () => user?.role === 'admin';

  const value = { user, token, loading, signin, signup, signout, isAdmin, isAuthenticated: !!token };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};
