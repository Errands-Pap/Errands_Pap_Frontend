export default function Team() {
  return (
		<div className="py-10 px-16" id="team">
			<div className="mb-10">
				<h1 className="text-[4rem] font-light text-[#ffffff99]">Team</h1>
			</div>
			<div className="flex gap-5 overflow-x-scroll">
					<div className="relative group max-w-sm flex-shrink-0 bg-black rounded-xl overflow-hidden inline-block">
						<img 
							src="./src/assets/smmuli.jpeg" 
							alt="Samuel Muli" 
							className="w-full h-auto group-hover:blur-sm transition-filter duration-300"
						/>
						<div className="absolute py-10 px-7 inset-0 flex flex-col justify-between text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div>
								<h2 className="text-4xl text-[#b9ff66]">Samuel Muli</h2>
								<p className="text-4xl text-[##ffffff80]">Frontend Dev</p>
							</div>
							<p className="mt-4">
								2+ years of experience in creating and managing web applications. Strong organizational and communication skills.
							</p>
						</div>
					</div>

					<div className="relative group max-w-sm flex-shrink-0 bg-black rounded-xl overflow-hidden inline-block">
						<img 
							src="./src/assets/Cedric.jpeg" 
							alt="Mark Wandera" 
							className="w-full h-auto group-hover:blur-sm transition-filter duration-300"
						/>
						<div className="absolute py-10 px-7 inset-0 flex flex-col justify-between text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div>
								<h2 className="text-4xl text-[#b9ff66]">Cedric Damian</h2>
								<p className="text-4xl text-[##ffffff80]">Backend Dev</p>
							</div>
							<p className="mt-4">
								3+ years of experience in creating and managing web applications. Strong organizational and communication skills.
							</p>
						</div>
					</div>

					<div className="relative group max-w-sm flex-shrink-0 bg-black rounded-xl overflow-hidden inline-block">
						<img 
							src="./src/assets/Hero.png" 
							alt="Mark Wandera" 
							className="w-full h-auto group-hover:blur-sm transition-filter duration-300"
						/>
						<div className="absolute py-10 px-7 inset-0 flex flex-col justify-between text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div>
								<h2 className="text-4xl text-[#b9ff66]">Mark Wandera</h2>
								<p className="text-4xl text-[##ffffff80]">lead designer</p>
							</div>
							<p className="mt-4">
								7+ years of experience in project management and team leadership. Strong organizational and communication skills.
							</p>
						</div>
					</div>

					<div className="relative group max-w-sm flex-shrink-0 bg-black rounded-xl overflow-hidden inline-block">
						<img 
							src="./src/assets/Kendi.jpeg" 
							alt="Kendi Hillary" 
							className="w-full h-auto group-hover:blur-sm transition-filter duration-300"
						/>
						<div className="absolute py-10 px-7 inset-0 flex flex-col justify-between text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div>
								<h2 className="text-4xl text-[#b9ff66]">Hillary Kendi</h2>
								<p className="text-4xl text-[##ffffff80]">Finance Lead</p>
							</div>
							<p className="mt-4">
								7+ years of experience in project management and team leadership. Strong organizational and communication skills.
							</p>
						</div>
					</div>

					<div className="relative group max-w-sm flex-shrink-0 bg-black rounded-xl overflow-hidden inline-block">
						<img 
							src="./src/assets/Shazzy.jpeg" 
							alt="Mark Wandera" 
							className="w-full h-auto group-hover:blur-sm transition-filter duration-300"
						/>
						<div className="absolute py-10 px-7 inset-0 flex flex-col justify-between text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div>
								<h2 className="text-4xl text-[#b9ff66]">Sharon Onsongo</h2>
								<p className="text-4xl text-[##ffffff80]">Marketing</p>
							</div>
							<p className="mt-4">
								7+ years of experience in project management and team leadership. Strong organizational and communication skills.
							</p>
						</div>
					</div>

					<div className="relative group max-w-sm flex-shrink-0 bg-black rounded-xl overflow-hidden inline-block">
						<img 
							src="./src/assets/Hero.png" 
							alt="Mark Wandera" 
							className="w-full h-auto group-hover:blur-sm transition-filter duration-300"
						/>
						<div className="absolute py-10 px-7 inset-0 flex flex-col justify-between text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div>
								<h2 className="text-4xl text-[#b9ff66]">Naima Naneu</h2>
								<p className="text-4xl text-[##ffffff80]">Marketing</p>
							</div>
							<p className="mt-4">
								7+ years of experience in project management and team leadership. Strong organizational and communication skills.
							</p>
						</div>
					</div>
			</div>
		</div>
	)
}