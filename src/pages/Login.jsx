import { useState } from "react";
import ButtonPrimary from "../common/ButtonPrimary";
import { Link } from "react-router-dom";

export default function Login() {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
	}

  return (
		<div className="bg-[#06050f] flex w-full">
			<img className="h-screen w-1/2 object-cover" src="../src/assets/Rectangle 79.png" alt="" />

			<div className="flex flex-col items-center w-1/2 px-[12rem] py-[6rem]">
				<h2 className="text-white font-medium text-2xl self-start mb-5">Welcome Back!</h2>
				<h1 className="text-[#b9ff66] text-5xl font-medium self-start mb-10">Login</h1>

				<div className="flex flex-col w-full">
					<form action="" className="flex flex-col mb-8">
						<label htmlFor="" className="text-white font-medium self-start mb-2">Email Address</label>
						<input type="email" placeholder="Email Address" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-3 rounded-xl text-white mb-10" />

						<div className="flex flex-col relative">
							<label htmlFor="" className="text-white font-medium self-start mb-2">Password</label>
							<input type={isVisible ? "text" : "password"} placeholder="Password" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-3 rounded-xl text-white mb-10" />
							<span class="material-symbols-outlined absolute right-5 top-11 cursor-pointer text-white" onClick={toggleVisibility}>
								{isVisible ? "visibility" : "visibility_off"}
							</span>
						</div>

						<ButtonPrimary>Login</ButtonPrimary>
					</form>

					<p className="text-white text-center text-sm font-normal">New User? <Link className="font-bold underline">Sign Up Here</Link></p>
				</div>
			</div>
		</div>
	)
}