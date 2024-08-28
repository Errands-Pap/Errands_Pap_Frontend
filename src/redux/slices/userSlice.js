import axios from 'axios'

const BASE_URL = "http://127.0.0.1:8000"

const createAxiosInstance = () => {
  const token = JSON.parse(localStorage.getItem("token") || '{}')

	return axios.create({
		baseURL: BASE_URL,
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})
}

const server = createAxiosInstance()