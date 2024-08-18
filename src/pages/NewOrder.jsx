import { useState } from "react"
import ButtonPrimary from "../common/ButtonPrimary"
import HomeAndBuilding from "../common/HomeAndBuilding"

export default function NewOrder() {
	const [fields, setFields] = useState([{ item: '', price: '' }])

	const handleAddField = () => {
		setFields([...fields, { item: '', price: '' }])
	}

	const handleRemoveField = (index) => {
		const newFields = [...fields]
		newFields.splice(index, 1)
		setFields(newFields)
	}

  return (
    <div className="px-16 bg-[#06050f] w-full">
      <div className="flex flex-col justify-center items-center w-full">
				<HomeAndBuilding />

				<h1 className="text-white font-normal text-5xl my-10">New Order</h1>

				<div className="flex flex-col w-1/2">
					<form action="" className="flex flex-col mb-8">
						<label htmlFor="" className="text-white font-medium self-start mb-2">Vendor</label>
						<select name="" id="" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6">
							<option value="" disabled selected hidden>Select Vendor</option>
							<option value="">Vendor 1</option>
							<option value="">Vendor 2</option>
						</select>

						<label htmlFor="" className="text-white font-medium self-start mb-2">Item and Price</label>
						{fields.map((field, index) => (
							<div key={index} class="flex border border-gray-500 rounded-lg bg-black text-white overflow-hidden mb-2">
								<input type="text" placeholder="Item" className="flex-1 px-4 py-2 bg-black text-white focus:outline-none"/>
								<input type="number" placeholder="Price" className="flex-1 px-4 py-2 bg-black border-l text-white focus:outline-none"/>
								{/* <span class="material-symbols-outlined">close</span> */}
							</div>
						))}
						<button type="button" className="text-[#b9ff66] flex items-center self-end my-4" onClick={handleAddField}><span class="material-symbols-outlined text-lg">add</span>Add New Item</button>

						<label htmlFor="" className="text-white font-medium self-start mb-2">Special instructions</label>
						<textarea name="" id="" cols="30" rows="10" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-10"></textarea>

						<ButtonPrimary>Checkout</ButtonPrimary>
					</form>
				</div>
			</div>
    </div>
  )
}