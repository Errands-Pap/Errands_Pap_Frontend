import { useEffect, useState } from "react";
import ButtonPrimary from "../common/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/userSlice";

export default function Login() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { loading, error, user } = useSelector(state => state.userInfo)
	// const user = JSON.parse(localStorage.getItem("user"))
	const [isVisible, setIsVisible] = useState(false)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		if (name === "email") {
			setEmail(value)
		} else if (name === "password") {
			setPassword(value)
		}
	}

	const handleLogin = async (e) => {
		e.preventDefault();
		// Dispatch the login action and handle navigation on success
		const resultAction = await dispatch(login({ email, password }));

		if (login.fulfilled.match(resultAction)) {
		navigate("/orders");
		}
	};

  return (
		<div className="bg-[#06050f] flex w-full">
			<img className="h-screen w-1/2 object-cover hidden lg:block" src="/images/Rectangle 79.png" alt="" />

			<div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-[2rem] lg:px-[12rem] py-[1rem] h-screen lg:py-[6rem]">
				<h2 className="text-white font-medium text-lg lg:text-2xl self-center lg:self-start mb-2 lg:mb-5 text-center">Welcome Back!</h2>
				<h1 className="text-[#b9ff66] text-2xl lg:text-5xl font-medium self-center lg:self-start mb-10 text-center">Login</h1>

				<div className="flex flex-col w-full">
					<form onSubmit={handleLogin} className="flex flex-col mb-8">
						<label htmlFor="" className="text-white font-medium self-start mb-2 text-xs lg:text-base">Email Address</label>
						<input 
							type="email" 
							name="email"
							value={email}
							onChange={handleChange}
							placeholder="Email Address" 
							className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-2 lg:p-3 rounded-xl text-white mb-4 lg:mb-10 text-xs lg:text-base" />

						<div className="flex flex-col relative">
							<label htmlFor="" className="text-white font-medium self-start mb-2 text-xs lg:text-base">Password</label>
							<input 
								type={isVisible ? "text" : "password"} 
								name="password"
								value={password}
								onChange={handleChange}
								placeholder="Password" 
								className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-2 lg:p-3 rounded-xl text-white mb-10 text-xs lg:text-base" />
							<span className="material-symbols-outlined absolute right-3 lg:right-5 top-7 lg:top-11 cursor-pointer text-white text-lg" onClick={toggleVisibility}>
								{isVisible ? "visibility" : "visibility_off"}
							</span>
						</div>

						<ButtonPrimary type="submit">Login</ButtonPrimary>
					</form>

					<p className="text-white text-center text-sm font-normal">New User? <Link to="/signup" className="font-bold underline">Sign Up Here</Link></p>
				</div>
			</div>
		</div>
	)
}