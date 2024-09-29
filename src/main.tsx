import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./pages/Home.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
