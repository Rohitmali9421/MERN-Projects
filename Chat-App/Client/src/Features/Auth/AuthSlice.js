import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.withCredentials = true;

// Async Thunk for User Login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/user/login', userdata);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  }
);

// Async Thunk for User Signup
export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (userdata, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8000/api/user/signup', userdata);
      return response.data; // Assuming the response contains user data
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Signup failed');
    }
  }
);

// Async Thunk for Checking Authentication
export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8000/api/user'); 
      return response.data; 
      
      
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Not authenticated');
    }
  }
);

// Initial State
const initialState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

// Auth Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })

      // Signup
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })

      // Check Authentication
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

// Export Actions and Reducer
export const { logout } = authSlice.actions;
export default authSlice.reducer;
