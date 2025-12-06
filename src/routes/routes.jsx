import { createBrowserRouter, Outlet } from "react-router";
import App from "../App";
import { Rootlayout } from "../components/shared/RootLayout";
import { Home } from "../pages/frontend/Home/Home";
import Register from "../pages/frontend/Register/Register";
import Login from "../pages/frontend/Login/Login";
import TuitionsPage from "../pages/frontend/Tutions/TutionsPage";
import TuitionDetailsPage from "../pages/frontend/TutionDetails/TutionDetails";

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
                path: '/tutions',
                element: <TuitionsPage />
            },
            {
                path: '/tutions/:id',
                element: <TuitionDetailsPage />
            },
            {
                path: 'user',
                element: <Outlet />,
                children: [
                    {
                        path: 'register',
                        element: <Register />
                    },
                    {
                        path: 'login',
                        element: <Login />
                    }
                ]
            }
        ]
    }
]);

export default routes;