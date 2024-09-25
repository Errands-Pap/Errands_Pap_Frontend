import { useEffect, useState } from "react"
import useOrders from "../hooks/useOrders"

export default function HomeAndBuilding() {
	const { submitAddresses } = useOrders()
	const [address, setAddress] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()

		if(address){
			submitAddresses(address)
		}
	}

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"))
		if (user.addresses){
			setAddress(user.addresses[0].physical_address)
		}
	}, [])

	return (
		<div className="w-1/2 flex flex-col">
			<label className="text-white font-medium self-start mb-2">Building and House Number</label>
			<form onSubmit={handleSubmit} class="flex border border-gray-500 rounded-lg bg-black text-white overflow-hidden">
				<input 
					onChange={(e) => setAddress(e.target.value)} 
					type="text" 
					placeholder="Please tell us your location" 
					className="flex-1 px-4 py-2 bg-[#040409] text-white focus:outline-none"
					value={address ? address : ""}
				/>
				<button className="bg-[#b9ff66] px-4 py-2"><span className="material-symbols-outlined text-[#040409] text-2xl">pin_drop</span></button>
			</form>
		</div>
	)
}