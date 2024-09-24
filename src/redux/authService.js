import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000"

const register = async (data) => {
  const response = await axios.post(`${BASE_URL}/user/register/`, data)

	if(response.data) {
		localStorage.setItem("user", JSON.stringify(response.data))
	}

	return response.data
}

const login = async (data) => {
	const response = await axios.post(`${BASE_URL}/auth/api/token/`, data)

	if(response.data) {
		localStorage.setItem("user", JSON.stringify(response.data))
	}

	return response.data
}

const logout = () => {
	localStorage.removeItem("user")
}

// const refreshToken = async () => {
// 	const user = JSON.parse(localStorage.getItem("user"))

// 	if(!user) return

// 	const response = await axios.post(`${BASE_URL}/auth/api/token/refresh/`, {
// 		refresh: user.refresh
// 	})

// 	if(response.data) {
// 		localStorage.setItem("user", JSON.stringify(response.data))
// 	}

// 	return response.data
// }

const authService = {
	register,
	login,
	logout
	// refreshToken
}

export default authService