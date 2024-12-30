import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/OurMenu/Menu";
import OurShop from "../pages/Shop/OurShop";

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
            }
        ]
    }
])
export default routes;