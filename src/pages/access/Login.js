import './Login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        // Implement login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className='login-container'>
            <div className='login-header'>
                <h2>Sign In</h2>
            </div>
            <div className='field-container'>
                <div className='username-container'>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className='password-container'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>

            </div>
            <Link to='/dashboard' className='login-button-container'>
                <button className='login-button' onClick={handleLogin}>Login</button>
            </Link>
        </div>
    );
};

export default Login;

