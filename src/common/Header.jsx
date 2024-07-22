import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
				<div className="">
					<img src="./src/assets/Vector (1).png" alt="" />
				</div>
				<div className="text-white space-x-12">
					<Link>About Us</Link>
					<Link>How it Works</Link>
					<Link>Benefits</Link>
					<Link>Team</Link>
					<Link>Contacts</Link>
				</div>
				<div className="text-white space-x-6 flex items-center">
					<button className="px-12 py-4 font-medium bg-[#35f42e] text-black rounded-2xl">Login</button>
					<button className="px-12 py-4 font-medium border-2 border-[#35f42e] text-[#35f42e] rounded-2xl">Sign Up</button>
				</div>
      </div>

      <div></div>
    </div>
  )
}