import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/OurMenu/Menu";
import OurShop from "../pages/Shop/OurShop";
import ContactUs from "../pages/ContactUs/ContactUs";

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
            }
        ]
    }
])
export default routes;