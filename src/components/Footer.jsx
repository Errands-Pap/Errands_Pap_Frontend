import { Link } from "react-router-dom"

export default function Footer() {
	const currentYear = new Date().getFullYear()

  return (
		<div className="bg-[#040409] px-16 py-10">

			<img src="./src/assets/Vector (1).png"  className="mb-10" alt="" />

			<div>
				<div className="text-white text-xl space-x-10 mb-20">
					<Link>About Us</Link>
					<Link>How it Works</Link>
					<Link>Benefits</Link>
					<Link>Team</Link>
					<Link>Contacts</Link>
				</div>
			</div>
		
			<div className="border border-[#c8cad0] w-full mb-10"></div>

			<div className="flex justify-between items-center">
				<p className="text-gray-300">© {currentYear} ErrandsPap. All rights reserved.</p>
				<div className="flex gap-5">
					<img src="./src/assets/x-social-media-white-icon.png" alt="" className="h-6" />
					<img src="./src/assets/linkedin.png" alt="" className="h-6" />
				</div>
			</div>
		</div>
	)
}