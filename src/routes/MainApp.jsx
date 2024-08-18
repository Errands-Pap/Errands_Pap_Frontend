import { Outlet } from "react-router-dom"
import Header from "../common/Header"

export default function MainApp() {
  return (
		<>
			<Header />

			<Outlet />
		</>
	)
}