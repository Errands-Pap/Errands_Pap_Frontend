import ButtonPrimary from "../common/ButtonPrimary";

export default function Login() {
  return (
		<div className="bg-[#06050f] flex w-full">
			<img className="h-screen w-1/2 object-cover" src="../src/assets/Rectangle 79.png" alt="" />

			<div className="flex flex-col items-center w-1/2 px-[12rem] py-[6rem]">
				<h2 className="text-white font-medium text-2xl self-start mb-5">Welcome Back!</h2>
				<h1 className="text-[#b9ff66] text-5xl font-medium self-start mb-10">Login</h1>

				<div className="flex flex-col w-full">
					<form action="" className="flex flex-col">
						<label htmlFor="" className="text-white font-medium self-start mb-2">Email Address</label>
						<input type="email" placeholder="Email Address" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-3 rounded-xl text-white mb-10" />

						<div className="flex flex-col relative">
							<label htmlFor="" className="text-white font-medium self-start mb-2">Password</label>
							<input type="password" placeholder="Password" className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-3 rounded-xl text-white mb-10" />
						</div>

						<ButtonPrimary>Login</ButtonPrimary>
					</form>

					<p>New User? <a href="">Sign Up Here</a></p>
				</div>
			</div>
		</div>
	)
}