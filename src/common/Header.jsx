import { useLocation, useNavigate } from "react-router-dom"
import ButtonPrimary from "./ButtonPrimary"
import ButtonSecondary from "./ButtonSecondary"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/slices/userSlice"

export default function Header() {

	// const { user } = useSelector((state) => state.userInfo)
	const user = JSON.parse(localStorage.getItem("user"))
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()

	const isHomePage = location.pathname === "/"

	const handleLogout = () => {
		dispatch(logout())
		navigate("/")
	}

  return (
    <div className="mb-12 px-16 py-6 bg-[#06050f]">
      <div className="flex justify-between items-center w-full">
				<div className="">
					<img src="/images/Vector (1).png" alt="" onClick={() => navigate("/")} />
				</div>
				<div className="flex items-center space-x-10">
					{isHomePage && (
						<div className="text-white text-xl space-x-10">
							<a href="#about">About Us</a>
							<a href="#work">How it Works</a>
							<a href="#benefits">Benefits</a>
							<a href="#team">Team</a>
							<a href="#contact">Contacts</a>
						</div>
					)}
					<div className="text-white space-x-6 flex items-center">
						{!user && (
							<>
								<ButtonPrimary onClick={() => navigate("/login")}>Login</ButtonPrimary>
								<ButtonSecondary onClick={() => navigate("/signup")}>Signup</ButtonSecondary>
							</>
						)}
						{user && (
							<ButtonSecondary onClick={handleLogout}>Logout</ButtonSecondary>
						)}
					</div>
				</div>
      </div>
    </div>
  )
}