import { Navigate, createBrowserRouter, useLocation } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Root from "./Root"
import SignUp from "../pages/SignUp"
import MainApp from "./MainApp"
import NewOrder from "../pages/NewOrder"
import Orders from "../pages/Orders"
import { useSelector } from "react-redux"
import OrderDetails from "../pages/OrderDetails"

const AuthRoute = ({ element }) => {
	// const { user } = useSelector((state) => state.userInfo)
	const user = JSON.parse(localStorage.getItem("user"))

	const authRoutes = ['/', '/login', '/signup']

	const location = useLocation()

	return user && authRoutes.includes(location.pathname) ? (
		<Navigate to="/orders" />
	): (
		element
	)
}

const ProtectedRoute = ({ element }) => {
	// const { user } = useSelector((state) => state.userInfo)
	const user = JSON.parse(localStorage.getItem("user"))

	const location = useLocation()

	return user ? (
		element
	) : (
		<Navigate 
			to="/login" 
			state={{ from: location }} 
			replace 
		/>
	)
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <AuthRoute element={<Home />} />
			},
			{
				path: '/login',
				element: <AuthRoute element={<Login />} />
			},
			{
				path: '/signup',
				element: <AuthRoute element={<SignUp />} />
			}
		]
	},
	{
		path: '/orders',
		element: <MainApp />,
		children: [
			{
				path: '/orders',
				element: <ProtectedRoute element={<Orders />} />
			},
			{
				path: '/orders/new-order',
				element: <ProtectedRoute element={<NewOrder />} />
			},
			{
				path: '/orders/:id',
				element: <ProtectedRoute element={<OrderDetails />} />
			}
		]
	}
])

export default router