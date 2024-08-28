import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = "http://127.0.0.1:8000"

const createAxiosInstance = () => {
  const token = JSON.parse(localStorage.getItem("user") || '{}')

	return axios.create({
		baseURL: BASE_URL,
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})
}

const server = createAxiosInstance()

server.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config

		if (error.response.status === 401 && !originalRequest._retry) {
			if (originalRequest.url.includes("auth")) {
				return Promise.reject(error)
			}

			originalRequest._retry = true

			try {
				const token = JSON.parse(localStorage.getItem("user") || '{}')
				const response = await server.post("auth/api/token", {
					grant_type: "refresh_token",
					refresh_token: token.refresh
				})

				localStorage.setItem("user", JSON.stringify(response.data))
				server.defaults.headers.common["Authorization"] = `Bearer ${response.data.access}`

				return server(originalRequest)
			} catch(err) {
				return Promise.reject(error)
			}
		}

		return Promise.reject(error)
	}
)

const initialState = {
	user: JSON.parse(localStorage.getItem("user") || '{}'),
	loading: false,
	error: null
}

export const login = createAsyncThunk(
	'user/login',
	async (values, {rejectWithValue}) => {
		try {
			const { data: auth } = await server.post("auth/api/token", values)
			// const { data: userData } = await server.get("auth/api/user", {
			// 	headers: {
			// 		"Authorization": `Bearer ${auth.access}`
			// 	}
			// })

			const user = {
				// ...userData,
				...auth
			}

			localStorage.setItem("user", JSON.stringify(user))
			return user
		} catch(err) {
			return rejectWithValue(err.response?.data?.error || "Login Failed")
		}
	}
)

export const refreshToken = createAsyncThunk(
	'user/refreshToken',
	async (_, {rejectWithValue}) => {
		try {
			const token = JSON.parse(localStorage.getItem("user") || '{}')
			const response = await server.post("auth/api/token/refresh", {
				grant_type: "refresh_token",
				refresh_token: token.refresh
			})

			localStorage.setItem("user", JSON.stringify(response.data))
			return response.data
		} catch(err) {
			return rejectWithValue(err.response?.data?.error || "Failed to refresh token")
		}
	}
)

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem("user")
			state.user = null
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true
				state.error = null
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false
				state.user = action.payload
				state.error = null
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false
				state.error = action.payload
			})
			.addCase(refreshToken.fulfilled, (state, action) => {
				const newToken = action.payload
				state.user = { ...state.user, ...newToken }

				localStorage.setItem("user", JSON.stringify(newToken))
			})
			.addCase(refreshToken.rejected, (state, action) => {
				state.user = null
				localStorage.removeItem("user")
			})
	}
})

export const { logout } = userSlice.actions
export default userSlice.reducer