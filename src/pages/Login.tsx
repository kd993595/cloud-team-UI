import React, {useContext, useState} from 'react';
import StickyBar from "../components/StickyBar.tsx";
import { userLogin } from '../utils/api.tsx';
import sharedContext from "../context/sharedContext.ts";
import {useNavigate} from "react-router-dom";

function Login() {
    // For form state
    const [formUsername, setFormUsername] = useState('');
    const [formPassword, setFormPassword] = useState('');

    // For site state, only update when signup successful
    const {setUsername} = useContext(sharedContext);

    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            // console.log("submitting");
            const response = await userLogin(formUsername, formPassword);
            console.log(response);

            setUsername(formUsername);
            // change page to home
            navigate("/");

            alert('Login successful');

        } catch (error) {
            console.error('Error during Login:', error);
            alert('An error occurred during Login. Please try again.');
        }
    };

    return (
        <>
            <StickyBar />
            <h2>Login</h2>
            <form onSubmit={handleLogin} id="login-signup-form">
                <div>
                    <div>
                        <label htmlFor="username"><b>Username: </b></label>
                    </div>
                    <div>
                        <input
                            type="text"
                            id="username"
                            value={formUsername}
                            onChange={(e) => setFormUsername(e.target.value)}
                            required
                        />
                    </div>
                </div>
                
                <div>
                    <div>
                        <label htmlFor="password"><b>Password: </b></label>
                    </div>
                    <div>
                        <input
                            type="password"
                            id="password"
                            value={formPassword}
                            onChange={(e) => setFormPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;