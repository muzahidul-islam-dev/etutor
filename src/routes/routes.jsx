import { createBrowserRouter, Outlet } from "react-router";
import App from "../App";
import { Rootlayout } from "../components/shared/RootLayout";
import { Home } from "../pages/frontend/Home/Home";
import Register from "../pages/frontend/Register/Register";
import Login from "../pages/frontend/Login/Login";
import TuitionsPage from "../pages/frontend/Tutions/TutionsPage";
import TuitionDetailsPage from "../pages/frontend/TutionDetails/TutionDetails";
import TutorsPage from "../pages/frontend/Tutors/Tutors";
import TutorProfilePage from "../pages/frontend/SingleTutor/SingleTutor";
import ContactPage from "../pages/frontend/Contact/Contact";
import AboutPage from "../pages/frontend/AboutUs/AboutUs";
import { Studentlayout } from "../pages/dashboard/Student/Layout/StudentLayout";
import MyTutions from "../pages/dashboard/Student/pages/MyTutions/MyTutions";

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
                path: '/tutors',
                element: <TutorsPage />
            },
            {
                path: '/tutors/:id',
                element: <TutorProfilePage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
            {
                path: '/about',
                element: <AboutPage />
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
                    },
                    {
                        path: 'student',
                        element: <Studentlayout />,
                        children: [
                            {
                                path: 'my-tution',
                                element: <MyTutions />
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);

export default routes;