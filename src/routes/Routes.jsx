import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/OurMenu/Menu";
import OurShop from "../pages/Shop/OurShop";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: "/menu",
                element: <Menu/>
            },
            {
                path: '/our-shop/:category',
                element: <OurShop/>,
            },
            {
                path: '/contact-us',
                element: <ContactUs/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'signup',
                element: <SignUp/>
            }
        ]
    },
    {
        path:'dashboard',
        element: <Dashboard/>,
        children: [
            {
                path: "cart",
                element: <Cart/>
            }
        ],
    }
])
export default routes;