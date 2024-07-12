import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: null,
  });

  const initializeAuth = async () => {
    const token = localStorage.getItem('Token');
    if (token) {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        const response = await axios.get('http://localhost:8000/user/infor');
        setAuth({ user: response.data, token });
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        localStorage.removeItem('Token');
      }
    }
  };

  useEffect(() => {
    initializeAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        email: email,
        password: password,
      });
      const { user, token } = response.data;
      setAuth({ user, token });
      localStorage.setItem('Token', token);
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
      localStorage.setItem('Token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };
  

  const logout = () => {
    setAuth({ user: null, token: null });
    localStorage.removeItem('Token');
    delete axios.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ auth,setAuth, login, logout,signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
