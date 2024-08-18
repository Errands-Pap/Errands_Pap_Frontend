import { Outlet } from "react-router-dom"
import Header from "../common/Header"

export default function MainApp() {
  return (
		<div className="bg-[#06050f] h-screen">
			<Header />

			<Outlet />
		</div>
	)
}