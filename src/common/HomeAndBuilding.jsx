export default function HomeAndBuilding() {
	return (
		<div className="w-1/2 flex flex-col">
			<label className="text-white font-medium self-start mb-2">Building and House Number</label>
			<form class="flex border border-gray-500 rounded-lg bg-black text-white overflow-hidden">
				<input type="text" placeholder="Please tell us your location" className="flex-1 px-4 py-2 bg-[#040409] text-white focus:outline-none"/>
				<button className="bg-[#b9ff66] px-4 py-2"><span className="material-symbols-outlined text-[#040409] text-2xl">pin_drop</span></button>
			</form>
		</div>
	)
}