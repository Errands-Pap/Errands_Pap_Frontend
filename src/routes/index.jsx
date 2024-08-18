import { createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Root from "./Root"
import SignUp from "../pages/SignUp"
import MainApp from "./MainApp"
import NewOrder from "../pages/NewOrder"

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
			},
			{
				path: '/signup',
				element: <SignUp />
			}
		]
	},
	{
		path: '/orders',
		element: <MainApp />,
		children: [
			{
				path: '/orders/new-order',
				element: <NewOrder />
			}
		]
	}
])

export default router