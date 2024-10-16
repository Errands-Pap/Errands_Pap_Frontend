import React, { useEffect, useState } from "react";
import ButtonPrimary from "../common/ButtonPrimary";
import useOrders from "../hooks/useOrders";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function OrderDetails() {
	const { state } = useLocation()
	const { orderId } = useParams()
	const navigate = useNavigate()
	const [order, setOrder] = useState(null)

	useEffect(() => {
    if (state && state.order) {
      setOrder(state.order);
    } else {
      const storedOrder = localStorage.getItem("selectedOrder");
      if (storedOrder) {
        setOrder(JSON.parse(storedOrder));
      } else {
        navigate("/orders");
      }
    }
  }, [state, navigate]);

	useEffect(() => {
    return () => {
      localStorage.removeItem("selectedOrder");
    };
  }, []);

	if (!order) {
    return <div>Loading...</div>;
  }

  return (
		<div className="px-16 w-full">
			<div className="flex flex-col justify-center items-center w-full">
				<h1 className="text-white font-medium text-5xl mb-10">Preview</h1>

				<h2 className="text-white font-bold text-lg">Building and House Number</h2>
				<h4 className="text-white font-normal text-sm mt-2">{order.order.delivery_location ? order.order.delivery_location : '--'}</h4>

				<div className="border-b-[0.5px] w-1/2 my-6"></div>

				<h2 className="text-white font-bold text-lg">Items</h2>

				{order.order.items.map((item) => (
					<div className="flex justify-between items-center mt-2 w-1/3">
						<p className="text-white">{item.name}</p>
						<p className="text-white">{item.price}</p>
					</div>
				))}

				<div className="flex justify-between items-center mt-10 w-1/3">
					<p className="text-white">Subtotal</p>
					<p className="text-white">{order.order.total_amount}</p>
				</div>

				<div className="border-b-[0.5px] w-1/2 my-6"></div>
				
				<h2 className="text-white font-bold text-lg">Special Instructions</h2>
				<p className="text-white w-1/2">{order.order.special_instructions ? order.order.special_instructions : '--'}</p>

				<div className="border-b-[0.5px] w-1/2 my-6"></div>

				<div className="w-1/2 mt-12">
					<ButtonPrimary onClick={() => navigate("/orders")}>Back to Orders</ButtonPrimary>
				</div>
			</div>
		</div>
	)
}