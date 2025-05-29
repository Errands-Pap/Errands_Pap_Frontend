// userSlice.js
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = import.meta.env.API_BASE_URL;

export const server = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).access : null;
if (token) {
  server.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

server.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response.status === 401 && !originalRequest._retry) {
      if (originalRequest.url.includes("auth")) {
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        const token = JSON.parse(localStorage.getItem("user") || '{}');
        
        if (!token || !token.refresh) {
          return Promise.reject(error);
        }

        const { data } = await server.post("/api/auth/token/refresh/", {
          refresh: token.refresh,
        });

        localStorage.setItem("user", JSON.stringify({ ...token, access: data.access }));
        server.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
        originalRequest.headers["Authorization"] = `Bearer ${data.access}`;

        return server(originalRequest);
      } catch (err) {
        localStorage.removeItem("user"); 
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

// Initial state
const initialState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  loading: false,
  error: null,
};

// Login action
export const login = createAsyncThunk(
  'user/login',
  async (values, { rejectWithValue }) => {
    try {
      const { data: auth } = await server.post("/api/auth/token/", values);

      const userId = auth.user_id;
      const { data: userData } = await server.get(`/api/user/${userId}/profile`, {
        headers: {
          "Authorization": `Bearer ${auth.access}`,
        },
      });

      const user = {
        ...userData,
        ...auth,
      };

      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Login Failed");
    }
  }
);

// Token refresh action
export const refreshToken = createAsyncThunk(
  'user/refreshToken',
  async (_, { rejectWithValue }) => {
    try {
      const token = JSON.parse(localStorage.getItem("user") || '{}');
      const { data } = await server.post("/api/auth/token/refresh/", {
        refresh: token.refresh,
      });

      localStorage.setItem("user", JSON.stringify({ ...token, access: data.access }));
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || "Failed to refresh token");
    }
  }
);

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        const newToken = action.payload;
        state.user = { ...state.user, ...newToken };
        localStorage.setItem("user", JSON.stringify(state.user));
      })
      .addCase(refreshToken.rejected, (state) => {
        state.user = null;
        localStorage.removeItem("user");
        window.location.href = "/login";
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
