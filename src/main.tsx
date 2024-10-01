import { createRoot } from 'react-dom/client'
import './index.css'
import Home from "./pages/Home.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Menu from "./pages/Menu.tsx";
import Favorites from "./pages/Favorites.tsx";

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
    },
    {
        path: "/menu",
        element: <Menu />
    },
    {
        path: "/favorites",
        element: <Favorites />
    }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
