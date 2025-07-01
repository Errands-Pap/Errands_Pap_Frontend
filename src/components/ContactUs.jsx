import ButtonPrimary from "../common/ButtonPrimary"

export default function ContactUs() {
  return (
		<div className="py-3 lg:py-10 px-4 lg:px-16 space-y-2 lg:space-y-10 mb-[2rem] lg:mb-[12rem]" id="contact">
			<div>
				<h1 className="text-2xl lg:text-[4rem] font-light text-[#ffffff99]">Contact Us</h1>
			</div>

			<div className="w-full flex justify-center">
				<form className="flex flex-col items-center w-full lg:w-1/2">
					<label className="text-white font-medium text-sm lg:text-base self-start mb-2" htmlFor="">Name</label>
					<input className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-2 lg:p-3 rounded-xl text-white mb-4 lg:mb-10 text-xs lg:text-base" type="text" placeholder="Enter your name" />

					<label className="text-white font-medium text-sm lg:text-base self-start mb-2" htmlFor="">Email Address</label>
					<input className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-2 lg:p-3 rounded-xl text-white mb-4 lg:mb-10 text-xs lg:text-base" type="email" placeholder="Enter your email address" />

					<label className="text-white font-medium text-sm lg:text-base self-start mb-2" htmlFor="">Message</label>
					<textarea className="w-full bg-[#040409] focus:outline-none border border-[#c8cad0] p-2 lg:p-3 rounded-xl text-white mb-4 lg:mb-10 text-xs lg:text-base" name="" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>

					<ButtonPrimary className="w-full">Send Message</ButtonPrimary>
				</form>
			</div>
		</div>
	)
}