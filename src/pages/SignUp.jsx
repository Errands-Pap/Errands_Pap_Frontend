import { useState } from "react"
import ButtonPrimary from "../common/ButtonPrimary"
import { Link } from "react-router-dom"

export default function SignUp() {
	const [isVisible, setIsVisible] = useState(false)
	const [isVisible2, setIsVisible2] = useState(false)

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
	}

	const toggleVisibility2 = () => {
		setIsVisible2(!isVisible2)
	}

  return (
    <div className="bg-[#06050f] flex w-full">
			<img className="h-screen w-1/2 object-cover" src="../src/assets/Rectangle 79.png" alt="" />

			<div className="flex flex-col items-center w-1/2 px-[12rem] pt-[3rem]">
				<h2 className="text-white font-medium text-2xl self-start mb-2">Let's Get You Started</h2>
				<h1 className="text-[#b9ff66] text-5xl font-medium self-start mb-6">Sign Up</h1>

				<div className="flex flex-col w-full">
					<form action="" className="flex flex-col mb-8">
						<label htmlFor="" className="text-white font-medium self-start mb-1">First Name</label>
						<input type="text" placeholder="Jane" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6" />

						<label htmlFor="" className="text-white font-medium self-start mb-1">Last Name</label>
						<input type="text" placeholder="Doe" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6" />

						<label htmlFor="" className="text-white font-medium self-start mb-1">Email Address</label>
						<input type="email" placeholder="janedoe@example.com" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6" />

						<label htmlFor="" className="text-white font-medium self-start mb-1">Phone Number</label>
						<input type="tel" placeholder="0712345678" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6" />

						<div className="flex flex-col relative">
							<label htmlFor="" className="text-white font-medium self-start mb-1">Password</label>
							<input type={isVisible ? "text" : "password"} placeholder="Password" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6" />
							<span class="material-symbols-outlined absolute right-5 top-9 cursor-pointer text-white" onClick={toggleVisibility}>
								{isVisible ? "visibility" : "visibility_off"}
							</span>
						</div>

						<div className="flex flex-col relative">
							<label htmlFor="" className="text-white font-medium self-start mb-1">Confirm Password</label>
							<input type={isVisible2 ? "text" : "password"} placeholder="Password" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-10" />
							<span class="material-symbols-outlined absolute right-5 top-9 cursor-pointer text-white" onClick={toggleVisibility2}>
								{isVisible2 ? "visibility" : "visibility_off"}
							</span>
						</div>

						<ButtonPrimary>Login</ButtonPrimary>
					</form>

					<p className="text-white text-center text-sm font-normal">New User? <Link to="/login" className="font-bold underline">Login Here</Link></p>
				</div>
			</div>
    </div>
  )
}