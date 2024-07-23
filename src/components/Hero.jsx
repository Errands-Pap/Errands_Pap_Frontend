import ButtonPrimary from "../common/ButtonPrimary"

export default function Hero() {
  return (
    <div className="py-10 mb-10">
			<div className="relative mb-10">
				<div className="flex justify-end z-10 object-cover">
					<img src="./src/assets/Hero.png" alt="Delivery girl" className="w-[68%] opacity-40" />
				</div>

				{/* <div className="absolute top-0 right-0 h-full w-[68%] bg-gradient-to-r from-transparent to-black opacity-60"></div> */}
				
				<div className="absolute top-1/3">
					<h1 className="text-8xl text-white flex flex-col space-y-6">
						<span className="text-[#b9ff66]">Get Anything</span>
						<span className="">Delivered Straight to</span>
						<span className="text-[#b9ff66]">Your Door</span>
					</h1>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center w-full">
				<div className="text-white w-3/4 text-center mb-8">
					<p className="text-2xl font-normal">Save time and energy by ordering groceries, essentials, and more from your favorite stores. Enjoy the convenience of having everything you need delivered directly to your apartment without ever stepping out.</p>
				</div>
				<div>
					<ButtonPrimary>Shop Now</ButtonPrimary>
				</div>
			</div>
		</div>
  )
}