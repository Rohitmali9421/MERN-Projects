import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
  });

  const initializeAuth = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get('http://localhost:8000/user/infor');
        setAuth({ user: response.data, token });
       
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        localStorage.removeItem('token');
      }
    }
  };
  const addToCart = async (id) => {
    try {
      await axios.patch('http://localhost:8000/user/cart', {
        productId: id
      });
      toast.success("Added to cart");
    } catch (error) {
      console.error('Failed to fetch user info:', error);
      localStorage.removeItem('Token');
    }
  }

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth,addToCart]);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        email,
        password,
      });
      const { user, token } = response.data;
      setAuth({ user, token });
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.log('Login failed:', error);
    }
  };

  const signUp = async (name, email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/user/signup', {
        name,
        email,
        password,
      });
      const { user, token } = response.data;
      setAuth({ user, token });
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const logout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout, signUp,addToCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
