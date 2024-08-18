export default function HomeAndBuilding() {
	return (
		<div className="w-1/2 flex flex-col">
			<label className="text-white font-medium self-start mb-2">Building and House Number</label>
			<div class="flex border border-gray-500 rounded-lg bg-black text-white overflow-hidden">
				<input type="text" placeholder="Building" className="flex-1 px-4 py-2 bg-[#040409] text-white focus:outline-none"/>
				<input type="text" placeholder="House Number" className="flex-1 px-4 py-2 bg-[#040409] border-l text-white focus:outline-none"/>
			</div>
		</div>
	)
}