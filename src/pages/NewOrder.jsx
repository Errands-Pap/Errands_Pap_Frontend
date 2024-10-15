import { useState } from "react"
import ButtonPrimary from "../common/ButtonPrimary"
import HomeAndBuilding from "../common/HomeAndBuilding"
import useOrders from "../hooks/useOrders"
import { useNavigate } from "react-router-dom"

export default function NewOrder() {
	const [fields, setFields] = useState([{ item: '', price: '', vendor: '' }])
	const [vendor, setVendor] = useState("")
	const [specialInstructions, setSpecialInstructions] = useState("")
	const [selectedAddress, setSelectedAddress] = useState("")
	const navigate = useNavigate()

	const { createOrder } = useOrders()

	const handleAddField = () => {
		setFields([...fields, { item: '', price: '' }])
	}

	const handleRemoveField = (index) => {
		const newFields = [...fields]
		newFields.splice(index, 1)
		setFields(newFields)
	}

	const handleFieldChange = (index, event) => {
		const newFields = [...fields]
		newFields[index][event.target.name] = event.target.value
		setFields(newFields)
	}

	const handleSubmit = async(e) => {
		e.preventDefault()
		
		const orderItems = fields.map(field => ({
			order_description: field.item,
			order_category: field.vendor,
			total_amount: field.price
		}))

		const data = {
			items: orderItems,
			special_instructions: specialInstructions,
		}

		await createOrder(data, selectedAddress)

		navigate("/orders")
	}

  return (
    <div className="px-16 bg-[#06050f] w-full">
      <div className="flex flex-col justify-center items-center w-full">
				<HomeAndBuilding onAddressSelect={setSelectedAddress} />

				<h1 className="text-white font-normal text-5xl my-10">New Order</h1>

				<div className="flex flex-col w-1/2">
					<form onSubmit={handleSubmit} className="flex flex-col mb-8">
						<label htmlFor="" className="text-white font-medium self-start mb-2">Item and Price</label>
						{fields.map((field, index) => (
							<div key={index} class="flex border border-gray-500 rounded-lg bg-black text-white overflow-hidden mb-2">
								<select 
									value={field.vendor} 
									onChange={(e) => handleFieldChange(index, e)} 
									name="vendor" 
									id="vendor"
									className="flex-1 px-4 py-2 bg-black text-white focus:outline-none"
								>
									<option value="" disabled selected hidden>Select Vendor</option>
									<option value="Groceries">Groceries</option>
									<option value="Alcohol">Alcohol</option>
									<option value="Supplies">Supplies</option>
								</select>
								<input 
									type="text" 
									placeholder="Item" 
									className="flex-1 px-4 py-2 bg-black border-l text-white focus:outline-none"
									name="item"
									value={field.item}
									onChange={(e) => handleFieldChange(index, e)}
								/>
								<input 
									type="number" 
									placeholder="Price" 
									className="flex-1 px-4 py-2 bg-black border-l text-white focus:outline-none"
									name="price"
									value={field.price}
									onChange={(e) => handleFieldChange(index, e)}
								/>
								<span class="material-symbols-outlined text-lg cursor-pointer" onClick={() => handleRemoveField(index)}>close</span>
							</div>
						))}
						<button type="button" className="text-[#b9ff66] flex items-center self-end my-4" onClick={handleAddField}><span class="material-symbols-outlined text-lg">add</span>Add New Item</button>

						<label htmlFor="special_instructions" className="text-white font-medium self-start mb-2">Special instructions</label>
						<textarea 
							name="special_instructions" 
							id="special_instructions" 
							cols="30" 
							rows="10" 
							className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-10"
							value={specialInstructions}
							onChange={(e) => setSpecialInstructions(e.target.value)}
						></textarea>

						<ButtonPrimary>Checkout</ButtonPrimary>
					</form>
				</div>
			</div>
    </div>
  )
}