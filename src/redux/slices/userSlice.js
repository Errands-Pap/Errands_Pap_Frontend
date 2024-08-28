import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = "http://127.0.0.1:8000"

const createAxiosInstance = () => {
  const token = JSON.parse(localStorage.getItem("user_tokens") || '{}')

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
				const token = JSON.parse(localStorage.getItem("user_tokens") || '{}')
				const response = await server.post("auth/api/token", {
					grant_type: "refresh_token",
					refresh_token: token.refresh
				})

				localStorage.setItem("user_tokens", JSON.stringify(response.data))
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
	user_token: JSON.parse(localStorage.getItem("user_tokens") || '{}'),
	loading: false,
	error: null
}