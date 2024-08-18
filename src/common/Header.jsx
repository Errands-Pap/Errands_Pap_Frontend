import { Link } from "react-router-dom"
import ButtonPrimary from "./ButtonPrimary"
import ButtonSecondary from "./ButtonSecondary"

export default function Header() {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center w-full">
				<div className="">
					<img src="./src/assets/Vector (1).png" alt="" />
				</div>
				<div className="flex items-center space-x-10">
					<div className="text-white text-xl space-x-10">
						<Link>About Us</Link>
						<Link>How it Works</Link>
						<Link>Benefits</Link>
						<Link>Team</Link>
						<Link>Contacts</Link>
					</div>
					<div className="text-white space-x-6 flex items-center">
						<ButtonPrimary>Login</ButtonPrimary>
						<ButtonSecondary>Signup</ButtonSecondary>
					</div>
				</div>
      </div>
    </div>
  )
}