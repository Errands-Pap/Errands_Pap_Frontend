import React, { useState } from "react";
import axios from "axios";
import { server } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";


const BASE_URL = "http://127.0.0.1:8000";
const useOrders = () => {
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem("user"))
	const userId = user?.user_id

  const [orders, setOrders] = useState([])

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

	// const createOrder = async(data, selectedAddress) => {
	// 	try{
	// 		const formData = new FormData();
	// 		formData.append("user", userId)
  //     formData.append("delivery_location", selectedAddress)
	// 		formData.append("order[special_instructions]", data.special_instructions)
			
	// 		data.items.forEach((item, index) => {
	// 			formData.append(`order[items][${index}][name]`, item.order_description);
	// 			formData.append(`order[items][${index}][category]`, item.order_category);
	// 			formData.append(`order[items][${index}][price]`, item.total_amount);
	// 		});

	// 		const totalAmount = data.items.reduce((acc, item) => acc + parseFloat(item.total_amount), 0)
	// 		formData.append("order[total_amount]", totalAmount)

	// 		const payload = formData

	// 		const response = await server.post(`/orders/create-order/`, payload, {
	// 			headers: {
	// 				'Content-Type': 'multipart/form-data',
	// 			}
	// 		})
	// 	}catch {
	// 		console.log(error)
	// 	}
	// }

	const createOrder = async(data, selectedAddress) => {
		try {
			const payload = {
				user: userId,
				order: {
					items: data.items.map((item) => ({
						name: item.order_description,
						category: item.order_category,
						price: item.total_amount
					})),
					special_instructions: data.special_instructions,
					delivery_location: selectedAddress,
					total_amount: data.items.reduce((acc, item) => acc + parseFloat(item.total_amount), 0)
				}
			}
	
			const response = await server.post(`/orders/create-order/`, payload, {
				headers: {
					'Content-Type': 'application/json',
				}
			})
		} catch (error) {
			console.log(error)
		}
	}
	

  const fetchOrders = async() => {
    try {
      const response = await server.get(`/orders/user-orders/`)
      setOrders(response.data)
    } catch (error) {
      console.log(error)
    }
  }

	return {
		submitAddresses,
		createOrder,
    fetchOrders,
    orders
	}
}

export default useOrders