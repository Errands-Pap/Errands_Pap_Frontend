import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Root from "./Root"

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/login',
				element: <Login />
			}
		]
	}
])

export default router