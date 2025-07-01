import { useLocation, useNavigate } from "react-router-dom"
import ButtonPrimary from "./ButtonPrimary"
import ButtonSecondary from "./ButtonSecondary"
import { useDispatch } from "react-redux"
import { logout } from "../redux/slices/userSlice"
import { useState } from "react"

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)

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
    <div className="mb-12 px-4 lg:px-16 py-3 lg:py-6 bg-[#06050f]">
      <div className="flex justify-between items-center w-full">
		<div className="">
			<img src="/images/Vector (1).png" alt="" className="h-6 lg:h-10" onClick={() => navigate("/")} />
		</div>

		<div className="flex items-center space-x-10">
			{isHomePage && (
				<div className="text-white text-xl space-x-10 hidden lg:flex">
					<a href="#about">About Us</a>
					<a href="#work">How it Works</a>
					<a href="#benefits">Benefits</a>
					<a href="#team">Team</a>
					<a href="#contact">Contacts</a>
				</div>
			)}
			<div className="text-white space-x-3 lg:space-x-6 flex items-center">
				{!user && (
					<>
						<ButtonPrimary onClick={() => navigate("/login")}>Login</ButtonPrimary>
						<ButtonSecondary onClick={() => navigate("/signup")}>Signup</ButtonSecondary>
					</>
				)}
				{user && (
					<ButtonSecondary onClick={handleLogout}>Logout</ButtonSecondary>
				)}

				<div className="block lg:hidden">
					<span className="material-symbols-outlined cursor-pointer" onClick={() => setMenuOpen(o => !o)}>
						{menuOpen ? "close" : "menu"}
					</span>
				</div>
			</div>
		</div>
      </div>

	  	{isHomePage && (
          <nav
            className={`
              absolute inset-x-0 top-20 z-50
              bg-[#06050f] text-white flex flex-col items-center
              space-y-6 py-6
              transform transition-all duration-300
              ${menuOpen
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-full opacity-0 pointer-events-none"
              }
            `}
          >
            <a href="#about"    onClick={() => setMenuOpen(false)} className="text-sm">About Us</a>
            <a href="#work"     onClick={() => setMenuOpen(false)} className="text-sm">How it Works</a>
            <a href="#benefits" onClick={() => setMenuOpen(false)} className="text-sm">Benefits</a>
            <a href="#team"     onClick={() => setMenuOpen(false)} className="text-sm">Team</a>
            <a href="#contact"  onClick={() => setMenuOpen(false)} className="text-sm">Contacts</a>
          </nav>
        )}
    </div>
  )
}