import '../index.css'
import {Link} from "react-router-dom";
import {useContext} from "react";
import sharedContext from "../context/sharedContext.ts";

function StickyBar() {

    const {username, setUsername} = useContext(sharedContext);

    const handleLogout = () => {
        setUsername(null)
    }

    return (
        <div id="outer-sticky-bar">
            <div id="sticky-bar">
                <div id="button-row-left">
                    <Link to={"/"}>
                        <button id="title">Dining Bot</button>
                    </Link>
                    <Link to={"/menu"}>
                        <button>Daily Menu</button>
                    </Link>
                    <Link to={"/favorites"}>
                        <button>Favorites</button>
                    </Link>
                </div>
                <div id="button-row-right">
                    {
                        username == null ? (
                            <>
                                <Link to={"/login"}>
                                    <button>Login</button>
                                </Link>
                                <Link to={"/signup"}>
                                    <button>Signup</button>
                                </Link>
                            </>
                        ) :
                            <Link to={"/"}>
                                <button onClick={handleLogout}>Logout</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default StickyBar
