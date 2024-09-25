import React from "react";
import axios from "axios";
import { server } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";


const BASE_URL = "http://127.0.0.1:8000";
const useOrders = () => {
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("user"))
	const userId = user?.user_id

	const submitAddresses = async(data) => {
		try {
			const formData = new FormData();
			formData.append("user", userId)
			formData.append("physical_address", data)
			const payload = formData

			const response = await server.post(`/address/create-address/`, payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				}
			})
		} catch (error) {
			console.log(error)
		}
	}

	const createOrder = async(data) => {
		try{
			const formData = new FormData();
			formData.append("user", userId)
			formData.append("delivery_location", user.addresses[0].physical_address)
			formData.append("order_category", data.order_category)
			formData.append("order_description", data.order_description)
			formData.append("total_amount", data.total_amount)

			const payload = formData

			const response = await server.post(`/orders/create-order/`, payload, {
				headers: {
					'Content-Type': 'multipart/form-data',
				}
			})
		}catch {

		}
	}

	return {
		submitAddresses
	}
}

export default useOrders