import StickyBar from "../components/StickyBar.tsx";
import {useContext} from "react";
import sharedContext from "../context/sharedContext.ts";

function Home() {

    const {username} = useContext(sharedContext)

    return (
        <>
            <StickyBar/>
            {username != null ? <p>Hello {username}! You are logged in.</p> : null}
            <p>This website is under construction!</p>
        </>
    )
}

export default Home
