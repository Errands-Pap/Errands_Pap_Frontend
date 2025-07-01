import React, { useEffect, useState } from "react";
import HomeAndBuilding from "../common/HomeAndBuilding"
import ButtonPrimary from "../common/ButtonPrimary"
import { useNavigate } from "react-router-dom";
import useOrders from "../hooks/useOrders";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-KE', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const formatDateShorter = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-KE', {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
  });
};

export default function Orders(){
	const [expandedRows, setExpandedRows] = useState([])
	const { fetchOrders, orders } = useOrders()
	const [name, setName] = useState('')
	
	const navigate = useNavigate()

	useEffect(() => {
		fetchOrders()
	}, [])

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'))
		if (user) {
			setName(user.first_name + " " + user.last_name)
		}
	}, [])

	const handleRowClick = (orderId) => {
    const isRowExpanded = expandedRows.includes(orderId);
    const newExpandedRows = isRowExpanded ? [] : [orderId];
    setExpandedRows(newExpandedRows);
	};

	const handleOrderClick = (order) => {
		localStorage.setItem("selectedOrder", JSON.stringify(order));
		navigate(`/orders/${order.id}`, { state: { order } });
	};

	const getItemsWithEllipsis = (items) => {
		const itemsArray = items.split(', ');
		if (itemsArray.length > 3) {
			return itemsArray.slice(0, 3).join(', ') + '...';
		}
		return items;
	}

	const formatStatus = (status) => {
		if(status === "delivered") {
			return "Delivered"
		} else if (status === "pending") {
			return "Pending"
		}
	}

  return (
    <div className="px-2 md:px-16 pb-20 bg-[#06050f] w-full">
			<div className="flex flex-col justify-center items-center w-full space-y-10">
				{/* <HomeAndBuilding /> */}
				<h1 className="text-white font-medium text-2xl md:text-5xl">Welcome {name}</h1>

				<div className="w-1/8">
					<ButtonPrimary onClick={() => navigate("/orders/new-order")}>New Order</ButtonPrimary>
				</div>

				<div>
					<table className="min-w-full rounded-t-xl overflow-hidden text-white mt-8">
						<thead className="border-b border-[#3f3f3f] bg-[#14151a]">
							<tr>
								<th></th>
								<th className="px-3 md:px-6 py-1.5 md:py-3 text-left text-xs md:text-sm font-medium text-gray-400">Order Number and Items</th>
								<th className="px-3 md:px-6 py-1.5 md:py-3 text-left text-xs md:text-sm font-medium text-gray-400">Date</th>
								<th className="px-3 md:px-6 py-1.5 md:py-3 text-left text-xs md:text-sm font-medium text-gray-400">Delivered To</th>
								<th className="px-3 md:px-6 py-1.5 md:py-3 text-left text-xs md:text-sm font-medium text-gray-400">Status</th>
							</tr>
						</thead>
						<tbody className="bg-[#040409] w-full">
							{orders.map((order) => (
								<React.Fragment key={order.id}>
									<tr className={`cursor-pointer hover:bg-[#0e0e11cc] ${expandedRows.includes(order.id) ? 'bg-[#0e0e11cc]' : 'border-b border-[#3f3f3f]'}`}>
										<td className="py-4 align-top flex justify-center items-center">
											<span 
												className={`material-symbols-outlined px-1 md:px-2 transform transition-transform origin-center duration-300 ${expandedRows.includes(order.id) ? 'rotate-180' : 'rotate-0'}`} 
												onClick={() => handleRowClick(order.id)}>
													keyboard_arrow_down</span>
										</td>
										<td className="px-1 md:px-6 py-4">
											<div className="flex flex-col gap-2 font-medium text-xs md:text-lg">
												<span onClick={() => handleOrderClick(order)}>Order #{order.id}</span>
												<span className="text-xs md:text-sm text-gray-500 text-ellipsis">{getItemsWithEllipsis(order.order.items.map(item => item.name).join(", "))}</span>
											</div>
										</td>
										<td className="hidden md:table-cell px-1 md:px-6 py-4 align-top font-medium text-xs md:text-lg">{formatDate(order.date_ordered)}</td>
										<td className="md:hidden px-1 md:px-6 py-4 align-top font-medium text-xs md:text-lg">{formatDateShorter(order.date_ordered)}</td>
										<td className="px-1 md:px-6 py-4 align-top font-medium text-xs md:text-lg">{order.order.delivery_location}</td>
										<td className="px-1 md:px-6 md:py-4 flex gap-20">
											<span className={`inline-flex items-center px-1.5 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-medium text-white ${
												order?.status === 'pending' ? 'bg-orange-400' : 'bg-[#25bd6c]'
											}`}>
												{formatStatus(order?.status)}
											</span>
											{/* <img src="/images/delete-bin-5-line.png" className="pr-10" alt="" /> */}
										</td>
									</tr>
									{expandedRows.includes(order.id) && (
										<tr className="border-b border-[#3f3f3f] w-full bg-[#0e0e11cc]">
											<td colSpan="5" className="md:px-6 py-2 md:py-4">
												<div className="text-sm pl-[2.7rem]">
													<p className="font-medium text-xs md:text-base">Item: <span className="font-normal">{order.order.items.map(item => `${item.name} (${item.price})`).join(", ")}</span></p>
													<p className="font-medium text-xs md:text-base">Total Amount: <span className="font-normal">Kshs. {order.order.total_amount}</span></p>
												</div>
											</td>
										</tr>
									)}
								</React.Fragment>
							))}
						</tbody>
					</table>
				</div>
		  </div>
		</div>
  )
}