import { useEffect, useState } from "react"
import useOrders from "../hooks/useOrders"

export default function HomeAndBuilding({ onAddressSelect }) {
	const { submitAddresses } = useOrders()
	const [addresses, setAddresses] = useState([])
	const [selectedAddress, setSelectedAddress] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()

		if(addresses){
			localStorage.setItem("selectedAddress", selectedAddress)
			submitAddresses(selectedAddress)
			onAddressSelect(selectedAddress)
		}
	}

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"))
		const savedAddress = localStorage.getItem("selectedAddress")
		if (user.addresses){
			setAddresses(user.addresses)

			const initialAddress = savedAddress || user.addresses[0]?.physical_address
			setSelectedAddress(initialAddress)
			
			if(onAddressSelect){
				onAddressSelect(initialAddress)
			}
		}
	}, [onAddressSelect])

	return (
		<div className="w-1/2 flex flex-col">
			<label className="text-white font-medium self-start mb-2">Building and House Number</label>
			<form onSubmit={handleSubmit} class="flex border border-gray-500 rounded-lg bg-black text-white overflow-hidden">
				<select 
					onChange={(e) => {
						setSelectedAddress(e.target.value);
						onAddressSelect(e.target.value)
					}}
					className="flex-1 px-4 py-2 bg-[#040409] text-white focus:outline-none"
					value={selectedAddress}
				>
					{addresses.map((address, index) => (
						<option key={index} value={address.physical_address}>
							{address.physical_address}
						</option>
					))}
				</select>
				<button className="bg-[#b9ff66] px-4 py-2"><span className="material-symbols-outlined text-[#040409] text-2xl">pin_drop</span></button>
			</form>
		</div>
	)
}