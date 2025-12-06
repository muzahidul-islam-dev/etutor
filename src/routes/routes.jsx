import { createBrowserRouter, Outlet } from "react-router";
import App from "../App";
import { Rootlayout } from "../components/shared/RootLayout";
import { Home } from "../pages/frontend/Home/Home";
import Register from "../pages/frontend/Register/Register";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Rootlayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'user',
                element: <Outlet />,
                children: [
                    {
                        path: 'register',
                        element: <Register />
                    }
                ]
            }
        ]
    }
]);

export default routes;