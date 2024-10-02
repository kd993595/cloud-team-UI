import React, { useState } from 'react';
import StickyBar from "../components/StickyBar.tsx";
import { userSignup } from '../utils/api.tsx';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            // console.log("submitting");
            const response = await userSignup(username, email, password); 
            // console.log(response);

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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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