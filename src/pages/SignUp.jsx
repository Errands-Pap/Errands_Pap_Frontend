import { useState } from "react"
import ButtonPrimary from "../common/ButtonPrimary"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../redux/slices/userSlice"

export default function SignUp() {
	const [isVisible, setIsVisible] = useState(false)
	const [isVisible2, setIsVisible2] = useState(false)
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const { isLoading } = useSelector(state => state.userInfo)

	const toggleVisibility = () => {
		setIsVisible(!isVisible)
	}

	const toggleVisibility2 = () => {
		setIsVisible2(!isVisible2)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		if (name === "firstName") {
			setFirstName(value)
		} else if (name === "lastName") {
			setLastName(value)
		} else if (name === "email") {
			setEmail(value)
		} else if (name === "phone") {
			setPhone(value)
		} else if (name === "password") {
			setPassword(value)
		} else if (name === "confirmPassword") {
			setConfirmPassword(value)
		}
	}

	const handleSignUp = async (e) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			alert("Passwords do not match")
			return
		}

		try {
			const userData = {
				first_name: firstName,
				last_name: lastName,
				email,
				phone_number: phone,
				password,
				password2: confirmPassword
			}

			dispatch(register(userData)).unwrap().then(() => navigate("/login"))
		}catch (err) {
			console.log(err)
		}
	}

  return (
    <div className="bg-[#06050f] flex w-full">
			<img className="h-screen w-1/2 object-cover" src="../src/assets/Rectangle 79.png" alt="" />

			<div className="flex flex-col items-center w-1/2 px-[12rem] pt-[3rem]">
				<h2 className="text-white font-medium text-2xl self-start mb-2">Let's Get You Started</h2>
				<h1 className="text-[#b9ff66] text-5xl font-medium self-start mb-6">Sign Up</h1>

				<div className="flex flex-col w-full">
					<form onSubmit={handleSignUp} className="flex flex-col mb-8">
						<label htmlFor="" className="text-white font-medium self-start mb-1">First Name</label>
						<input 
							type="text"
							name="firstName"
							value={firstName}
							onChange={handleChange}
							placeholder="Jane"
							className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6" 
						/>

						<label htmlFor="" className="text-white font-medium self-start mb-1">Last Name</label>
						<input 
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleChange}
							placeholder="Doe" 
							className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6" 
						/>

						<label htmlFor="" className="text-white font-medium self-start mb-1">Email Address</label>
						<input 
							type="email" 
							name="email"
							value={email}
							onChange={handleChange}
							placeholder="janedoe@example.com" 
							className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6" 
						/>

						<label htmlFor="" className="text-white font-medium self-start mb-1">Phone Number</label>
						<input 
							type="tel" 
							name="phone"
							value={phone}
							onChange={handleChange}
							placeholder="+254712345678" 
							className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6" 
						/>

						<div className="flex flex-col relative">
							<label htmlFor="" className="text-white font-medium self-start mb-1">Password</label>
							<input 
								type={isVisible ? "text" : "password"} 
								name="password"
								value={password}
								onChange={handleChange}
								placeholder="Password" 
								className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-6" 
							/>
							<span class="material-symbols-outlined absolute right-5 top-9 cursor-pointer text-white" onClick={toggleVisibility}>
								{isVisible ? "visibility" : "visibility_off"}
							</span>
						</div>

						<div className="flex flex-col relative">
							<label htmlFor="" className="text-white font-medium self-start mb-1">Confirm Password</label>
							<input 
								type={isVisible2 ? "text" : "password"} 
								name="confirmPassword"
								value={confirmPassword}
								onChange={handleChange}
								placeholder="Password"
								className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] py-2 px-3 rounded-xl text-white mb-10" 
							/>
							<span class="material-symbols-outlined absolute right-5 top-9 cursor-pointer text-white" onClick={toggleVisibility2}>
								{isVisible2 ? "visibility" : "visibility_off"}
							</span>
						</div>

						<ButtonPrimary type="submit">Sign Up</ButtonPrimary>
					</form>

					<p className="text-white text-center text-sm font-normal">New User? <Link to="/login" className="font-bold underline">Login Here</Link></p>
				</div>
			</div>
    </div>
  )
}