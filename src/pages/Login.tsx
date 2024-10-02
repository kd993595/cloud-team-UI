import StickyBar from "../components/StickyBar.tsx";
import { userSignup } from '../utils/api.tsx';
import React, { useState } from 'react';

function Login() {
    
    return (
        <>
            <StickyBar/>
            <h2>Login</h2>
            <form id="login-signup-form">
                <div>
                    <div><label><b>Username: </b></label></div>
                    <div>
                        <input/>
                    </div>
                </div>
                <div>
                    <div><label><b>Password: </b></label></div>
                    <div>
                        <input/>
                    </div>
                </div>
                <button type="submit">login</button>
            </form>
        </>
    )
}

export default Login