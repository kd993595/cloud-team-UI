import React, { useState } from 'react';
import StickyBar from "../components/StickyBar.tsx";
import { userLogin } from '../utils/api.tsx';

function Login() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            // console.log("submitting");
            const response = await userLogin(username, password); 
            // console.log(response);

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
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;