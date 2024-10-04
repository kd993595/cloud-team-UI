import './index.css'
import Home from "./pages/Home.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Menu from "./pages/Menu.tsx";
import Favorites from "./pages/Favorites.tsx";
import SharedContext from "./context/sharedContext.ts";
import {useState} from "react";

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

function App() {
    const [username, setUsername] = useState<string | null>(null);

    return (
        <SharedContext.Provider value={{username, setUsername}}>
            <RouterProvider router={router}/>
        </SharedContext.Provider>
    )
}

export default App;
