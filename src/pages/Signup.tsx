import React, {useContext, useState} from 'react';
import StickyBar from "../components/StickyBar.tsx";
import { userSignup } from '../utils/api.tsx';
import sharedContext from "../context/sharedContext.ts";
import {useNavigate} from "react-router-dom";

function Signup() {
    // For form state
    const [formEmail, setFormEmail] = useState('');
    const [formPassword, setFormPassword] = useState('');
    const [formUsername, setFormUsername] = useState('');

    // For site state, only update when signup successful
    const {setUsername} = useContext(sharedContext);

    const navigate = useNavigate();

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            // console.log("submitting");
            const response = await userSignup(formUsername, formEmail, formPassword);
            console.log(response);

            setUsername(response.username);
            // change page to home
            navigate("/");

            alert('Signup successful');

        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred during signup. Please try again.');
        }
    };

    return (
        <>
            <StickyBar />
            <h2>Signup</h2>
            <form onSubmit={handleSignup} id="login-signup-form">
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
                        <label htmlFor="email"><b>Email: </b></label>
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
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
                <button type="submit">Signup</button>
            </form>
        </>
    );
}

export default Signup;