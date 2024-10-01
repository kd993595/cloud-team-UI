import '../index.css'
import {Link} from "react-router-dom";

function StickyBar() {


    return (
        <div id="outer-sticky-bar">
            <div id="sticky-bar">
                <div>
                    <Link to={"/"}>
                        <button id="title">Dining Bot</button>
                    </Link>
                </div>
                <div id="button-row">
                    <Link to={"/menu"}>
                        <button>Daily Menu</button>
                    </Link>
                    <Link to={"/favorites"}>
                        <button>Favorites</button>
                    </Link>
                    <Link to={"/login"}>
                        <button>Login</button>
                    </Link>
                    <Link to={"/signup"}>
                        <button>Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StickyBar
