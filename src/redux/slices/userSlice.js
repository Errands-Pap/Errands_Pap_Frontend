// import axios from 'axios'
// import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit'

// const BASE_URL = "http://127.0.0.1:8000"

// const createAxiosInstance = () => {
//   const token = JSON.parse(localStorage.getItem("user") || '{}')
	
// 	return axios.create({
// 		baseURL: BASE_URL,
// 		headers: {
// 			"Content-Type": "application/json",
// 			"Authorization": `Bearer ${token.access}`
// 		}
// 	})
// }

// const server = createAxiosInstance()

// server.interceptors.response.use(
// 	(response) => response,
// 	async (error) => {
// 		const originalRequest = error.config

// 		if (error.response.status === 401 && !originalRequest._retry) {
// 			if (originalRequest.url.includes("auth")) {
// 				return Promise.reject(error)
// 			}

// 			originalRequest._retry = true

// 			try {
// 				const token = JSON.parse(localStorage.getItem("user") || '{}')
// 				const response = await server.post("auth/api/token/", {
// 					grant_type: "refresh_token",
// 					refresh_token: token.refresh
// 				})

// 				localStorage.setItem("user", JSON.stringify(response.data))
// 				server.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`

// 				return server(originalRequest)
// 			} catch(err) {
// 				return Promise.reject(error)
// 			}
// 		}

// 		return Promise.reject(error)
// 	}
// )

// const initialState = {
// 	user: JSON.parse(localStorage.getItem("user") || '{}'),
// 	loading: false,
// 	error: null
// }

// export const login = createAsyncThunk(
// 	'user/login',
// 	async (values, {rejectWithValue}) => {
// 		try {
// 			const { data: auth } = await server.post("auth/api/token/", values)

// 			const userId = auth.user_id

// 			const { data: userData } = await server.get(`user/${userId}/profile`, {
// 				headers: {
// 					"Authorization": `Bearer ${JSON.parse(auth.access)}`
// 				}
// 			})

// 			const user = {
// 				...userData,
// 				...auth
// 			}

// 			localStorage.setItem("user", JSON.stringify(user))
// 			return user
// 		} catch(err) {
// 			return rejectWithValue(err.response?.data?.error || "Login Failed")
// 		}
// 	}
// )

// export const refreshToken = createAsyncThunk(
// 	'user/refreshToken',
// 	async (_, {rejectWithValue}) => {
// 		try {
// 			const token = JSON.parse(localStorage.getItem("user") || '{}')
// 			const response = await server.post("auth/api/token/refresh/", {
// 				grant_type: "refresh_token",
// 				refresh_token: token.refresh
// 			})

// 			localStorage.setItem("user", JSON.stringify(response.data))
// 			return response.data
// 		} catch(err) {
// 			return rejectWithValue(err.response?.data?.error || "Failed to refresh token")
// 		}
// 	}
// )

// const userSlice = createSlice({
// 	name: 'user',
// 	initialState,
// 	reducers: {
// 		logout: (state) => {
// 			localStorage.removeItem("user")
// 			state.user = null
// 		}
// 	},
// 	extraReducers: (builder) => {
// 		builder
// 			.addCase(login.pending, (state) => {
// 				state.loading = true
// 				state.error = null
// 			})
// 			.addCase(login.fulfilled, (state, action) => {
// 				state.loading = false
// 				state.user = action.payload
// 				state.error = null
// 			})
// 			.addCase(login.rejected, (state, action) => {
// 				state.loading = false
// 				state.error = action.payload
// 			})
// 			.addCase(refreshToken.fulfilled, (state, action) => {
// 				const newToken = action.payload
// 				state.user = { ...state.user, ...newToken }

// 				localStorage.setItem("user", JSON.stringify(newToken))
// 			})
// 			.addCase(refreshToken.rejected, (state, action) => {
// 				state.user = null
// 				localStorage.removeItem("user")
// 			})
// 	}
// })

// export const { logout } = userSlice.actions

// export default userSlice.reducer

import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import authService from "../authService";

const user = JSON.parse(localStorage.getItem("user") || '{}')

const initialState = {
	user: user ? user : null,
	isLoading: false,
}

// Register user
export const register = createAsyncThunk(
	'user/register',
	async(user, thunkAPI) => {
		try {
			return await authService.register(user)
		}catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.message)
		}
	}
);

// Login user
export const login = createAsyncThunk(
	'user/login',
	async(user, thunkAPI) => {
		try {
			return await authService.login(user)
		}catch (err) {
			return thunkAPI.rejectWithValue(err.response.data.message)
		}
	}
)

// Logout user
export const logout = createAction('user/logout', () => {
	authService.logout()
	return {}
})


export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			state.user = null
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoading = false
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false
			})
			.addCase(login.pending, (state) => {
				state.isLoading = false
			})
			.addCase(login.fulfilled, (state, action) => {
				state.user = action.payload
				state.isLoading = false
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false
			})
	}
})

export default userSlice.reducer