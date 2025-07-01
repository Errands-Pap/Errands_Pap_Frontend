import { useState } from "react"

export default function HowItWorks() {
	const [openOne, setOpenOne] = useState(false)
	const [openTwo, setOpenTwo] = useState(false)
	const [openThree, setOpenThree] = useState(false)
	const [openFour, setOpenFour] = useState(false)
	const [openFive, setOpenFive] = useState(false)
	const [openSix, setOpenSix] = useState(false)

	const toggleOne = () => setOpenOne(!openOne)
	const toggleTwo = () => setOpenTwo(!openTwo)
	const toggleThree = () => setOpenThree(!openThree)
	const toggleFour = () => setOpenFour(!openFour)
	const toggleFive = () => setOpenFive(!openFive)
	const toggleSix = () => setOpenSix(!openSix)

  return (
    <div className="py-3 lg:py-10 px-4 lg:px-16 space-y-4 lg:space-y-10" id="work">
      <div>
				<h1 className="text-2xl lg:text-[4rem] font-light text-[#ffffff99]">How It Works</h1>
			</div>

			<div className="p-3 lg:p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-2 lg:space-y-6" onClick={toggleOne}>
				<div className="flex justify-between">
					<h2 className="text-xl lg:text-4xl">Login or Sign Up</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 text-2xl lg:text-4xl ${openOne ? 'rotate-180' : 'rotate-0'}`}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-full lg:w-3/4 ${openOne ? "block" : "hidden"} text-xs lg:text-base`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>

			<div className="p-3 lg:p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-2 lg:space-y-6" onClick={toggleTwo}>
				<div className="flex justify-between">
					<h2 className="text-xl lg:text-4xl">Select Location and Building</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 text-2xl lg:text-4xl ${openTwo ? 'rotate-180' : 'rotate-0'}`}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-full lg:w-3/4 ${openTwo ? "block" : "hidden"} text-xs lg:text-base`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>

			<div className="p-3 lg:p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-2 lg:space-y-6" onClick={toggleThree}>
				<div className="flex justify-between">
					<h2 className="text-xl lg:text-4xl">Select Products to be Delivered</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 text-2xl lg:text-4xl ${openThree ? 'rotate-180' : 'rotate-0'}`}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-full lg:w-3/4 ${openThree ? "block" : "hidden"} text-xs lg:text-base`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>

			<div className="p-3 lg:p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-2 lg:space-y-6" onClick={toggleFour}>
				<div className="flex justify-between">
					<h2 className="text-xl lg:text-4xl">Track your Ordered Products</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 text-2xl lg:text-4xl ${openFour ? 'rotate-180' : 'rotate-0'}`}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-full lg:w-3/4 ${openFour ? "block" : "hidden"} text-xs lg:text-base`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>

			<div className="p-3 lg:p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-2 lg:space-y-6" onClick={toggleFive}>
				<div className="flex justify-between">
					<h2 className="text-xl lg:text-4xl">Receive your Products</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 text-2xl lg:text-4xl ${openFive ? 'rotate-180' : 'rotate-0'}`}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-full lg:w-3/4 ${openFive ? "block" : "hidden"} text-xs lg:text-base`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>

			<div className="p-3 lg:p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-2 lg:space-y-6" onClick={toggleSix}>
				<div className="flex justify-between">
					<h2 className="text-xl lg:text-4xl">Pay</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 text-2xl lg:text-4xl ${openSix ? 'rotate-180' : 'rotate-0'}`}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-full lg:w-3/4 ${openSix ? "block" : "hidden"} text-xs lg:text-base`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>
    </div>
  )
}