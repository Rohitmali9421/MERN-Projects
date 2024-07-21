import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../../Contexts/UserContext';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const response = await axios.post('http://localhost:8000/user/login', {
        email,
        password,
      });

      const { user, token } = response.data;

      // Update authentication context and local storage
      setAuth({ user, token });
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      // Redirect to home page or desired route
      navigate('/');
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

  // Redirect if user is already authenticated
  if (auth.token) {
    navigate('/');
    return null;
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {serverError && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded">
              {serverError}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                autoComplete="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email format'
                  }
                })}
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters long'
                  },
                  pattern: {
                    value: /(?=.*\d)(?=.*[a-zA-Z])(?=.*[@$!%*?&#])/,
                    message: 'Password must contain at least one letter, one number, and one special character'
                  }
                })}
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
            <Link to="/signup">
              <p className='text-end mt-2 text-sm text-blue-400'>New to PeekMart? Create an account</p>
            </Link>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
