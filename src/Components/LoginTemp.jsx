import React, { useState } from 'react';
import { Alert } from "react-bootstrap";
import '../css/App.css';
//import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';

function Login() {
    const [userNameLog, setUserNameLog] = useState("");
    const [PasswordLog, setPasswordLog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(e)
    {
        e.preventDefault();
        let users = await axios.get('users.json');
        const admin = users.users[0];
        const user = users.users[1];


        const password = admin.password;
        let inputPass = localStorage.getItem("password").replace(/"/g, "");

        localStorage.setItem('isLogged', true);
        localStorage.setItem('isAdmin', true);
        localStorage.setItem('username', 'Malek');
    

        localStorage.removeItem('isLogged');
    

        if (!userNameLog || !PasswordLog)
        {
            setFlag(true);
            console.log("Empty");
        }
        else if (userNameLog!==userName || PasswordLog!==pass)
        {
            setFlag(true);
        }
        else
        {
            setHome(!home);
            setFlag(false);
        }
    }

    return (
        <div>
            {home ? (
            <form onSubmit={handleLogin}>
                <h1>Sweets & More</h1>
                <div>
                    <label>Username:</label>
                    <input
                        type='text'
                        className='form-control'
                        placeholder='Username'
                        onChange={(event) => setUserNameLog(event.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <label className='label'>Password:</label>
                    <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                        onChange={(event) => setPasswordLog(event.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-dark btl-lg btn-block'>Login</button>
                {flag && (
                    <Alert color="primary" variant="danger">
                        Please Fill All fields
                    </Alert>
                )}
                
            </form>
            ) : (
            <Home />)}
        </div>
    );
}

export default Login;