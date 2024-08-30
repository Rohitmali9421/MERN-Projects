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
        const response = await axios.get('https://mern-server-rohit.vercel.app/user/infor');
        setAuth({ user: response.data, token });
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        localStorage.removeItem('token');
      }
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  const addToCart = async (id) => {
    try {
      await axios.patch('https://mern-server-rohit.vercel.app/user/cart', {
        productId: id
      });
      toast.success("Added to cart");
      initializeAuth();
    } catch (error) {
      console.error('Failed to add to cart:', error);
      toast.error('Failed to add to cart.');
    }
  };



  const login = async (email, password, setServerError) => {
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        email,
        password,
      });
      console.log(response)
      // const { user, token } = response.data;
      // setAuth({ user, token });
      // localStorage.setItem('token', token);
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // toast.success('Login successful.');
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Login failed. Please try again.';
      setServerError(errorMessage);

    }
  };

  const signUp = async (name, email, password, setServerError) => {
    try {
      const response = await axios.post('https://mern-server-rohit.vercel.app/user/signup', {
        name,
        email,
        password,
      });
      const { user, token } = response.data;
      setAuth({ user, token });
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      toast.success('Sign up successful.');
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Sign up failed. Please try again.';
      setServerError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const logout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    toast.success('Logged out successfully.');
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout, signUp, addToCart }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
