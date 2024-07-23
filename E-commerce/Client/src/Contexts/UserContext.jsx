import React, { createContext, useState, useEffect, useContext } from 'react';
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
        const response = await axios.get('/user/infor');
        setAuth({ user: response.data, token });
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        localStorage.removeItem('token');
      }
    }
  };

  const addToCart = async (id) => {
    try {
      await axios.patch('/user/cart', {
        productId: id
      });
      toast.success("Added to cart");
      initializeAuth()
    } catch (error) {
      console.error('Failed to add to cart:', error);
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  const login = async (email, password, setServerError) => {
    try {
      const response = await axios.post('/user/login', {
        email,
        password,
      });
      const { user, token } = response.data;
      setAuth({ user, token });
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setServerError(error.response.data.error);
      } else {
        setServerError('Login failed. Please try again.');
      }
    }
  };

  const signUp = async (name, email, password, setServerError) => {
    try {
      const response = await axios.post('/user/signup', {
        name,
        email,
        password,
      });
      const { user, token } = response.data;
      setAuth({ user, token });
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        // Show server error message
        setServerError(error.response.data.error);
      } else {
        // Fallback for other errors
        setServerError('Login failed. Please try again.');
      }
    }
  };

  const logout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout, signUp, addToCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };