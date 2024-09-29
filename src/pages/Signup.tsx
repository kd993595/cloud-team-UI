import React, { useState } from 'react';
import StickyBar from "../components/StickyBar.tsx";

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();
        
        try {
            console.log("submitting");
            const response = await fetch('http://127.0.0.1:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_email: email,
                    password: password,
                }),
            });
            console.log(response);

            if (response.ok) {
                alert('Signup successful');
            } else {
                alert('Signup failed');
            }
        } catch (error) {
            console.error('Error during signup:', error);
            alert('An error occurred during signup. Please try again.');
        }
    };

    return (
        <>
            <StickyBar />
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Signup</button>
            </form>
        </>
    );
}

export default Signup;