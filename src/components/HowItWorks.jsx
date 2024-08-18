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
    <div className="py-10 px-16 space-y-10" id="work">
      <div>
				<h1 className="text-[4rem] font-light text-[#ffffff99]">How It Works</h1>
			</div>

			<div className="p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-6" onClick={toggleOne}>
				<div className="flex justify-between">
					<h2 className="text-4xl">Login or Sign Up</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 ${openOne ? 'rotate-180' : 'rotate-0'}`} style={{ fontSize: "2.25rem" }}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-3/4 ${openOne ? "block" : "hidden"}`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>

			<div className="p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-6" onClick={toggleTwo}>
				<div className="flex justify-between">
					<h2 className="text-4xl">Select Location and Building</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 ${openTwo ? 'rotate-180' : 'rotate-0'}`} style={{ fontSize: "2.25rem" }}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-3/4 ${openTwo ? "block" : "hidden"}`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>

			<div className="p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-6" onClick={toggleThree}>
				<div className="flex justify-between">
					<h2 className="text-4xl">Select Products to be Delivered</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 ${openThree ? 'rotate-180' : 'rotate-0'}`} style={{ fontSize: "2.25rem" }}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-3/4 ${openThree ? "block" : "hidden"}`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>

			<div className="p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-6" onClick={toggleFour}>
				<div className="flex justify-between">
					<h2 className="text-4xl">Track your Ordered Products</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 ${openFour ? 'rotate-180' : 'rotate-0'}`} style={{ fontSize: "2.25rem" }}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-3/4 ${openFour ? "block" : "hidden"}`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>

			<div className="p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-6" onClick={toggleFive}>
				<div className="flex justify-between">
					<h2 className="text-4xl">Receive your Products</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 ${openFive ? 'rotate-180' : 'rotate-0'}`} style={{ fontSize: "2.25rem" }}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-3/4 ${openFive ? "block" : "hidden"}`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>

			<div className="p-10 border rounded-2xl border-[#c8cad0] text-white cursor-pointer space-y-6" onClick={toggleSix}>
				<div className="flex justify-between">
					<h2 className="text-4xl">Pay</h2>
					<span className={`material-symbols-outlined transition-transform duration-200 ${openSix ? 'rotate-180' : 'rotate-0'}`} style={{ fontSize: "2.25rem" }}>
						keyboard_arrow_down
					</span>
				</div>

				<div className={`w-3/4 ${openSix ? "block" : "hidden"}`}>
					<p>Begin your ErrandsPap journey by effortlessly creating a new account or seamlessly logging in with your existing credentials, enabling you to tailor your experience and dive into a world of convenient shopping.</p>
				</div>
			</div>
    </div>
  )
}