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
			<img className="h-screen w-1/2 object-cover" src="/images/Rectangle 79.png" alt="" />

			<div className="flex flex-col items-center w-1/2 px-[12rem] py-[6rem]">
				<h2 className="text-white font-medium text-2xl self-start mb-5">Welcome Back!</h2>
				<h1 className="text-[#b9ff66] text-5xl font-medium self-start mb-10">Login</h1>

				<div className="flex flex-col w-full">
					<form onSubmit={handleLogin} className="flex flex-col mb-8">
						<label htmlFor="" className="text-white font-medium self-start mb-2">Email Address</label>
						<input 
							type="email" 
							name="email"
							value={email}
							onChange={handleChange}
							placeholder="Email Address" 
							className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-3 rounded-xl text-white mb-10" />

						<div className="flex flex-col relative">
							<label htmlFor="" className="text-white font-medium self-start mb-2">Password</label>
							<input 
								type={isVisible ? "text" : "password"} 
								name="password"
								value={password}
								onChange={handleChange}
								placeholder="Password" 
								className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-3 rounded-xl text-white mb-10" />
							<span className="material-symbols-outlined absolute right-5 top-11 cursor-pointer text-white" onClick={toggleVisibility}>
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