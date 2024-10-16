// import React, { useState } from "react";
import "./login.css";
import Logo from "./logo.gif";
import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

const handleUsernameChange = (e) => {
    setUsername(e.target.value);
}
const handlepasswordChange = (e) => {
    setPassword(e.target.value);
}
const handleSubmit = async(event) =>{
    event.preventDefault();


    try
    {
        
        const response = await axios.post('http://localhost:3001/api/account/login',{
            userName: username,
            password: password,
        });   
        
        const user= response.data;
        console.log(user);
        if(user && user.token){
            localStorage.setItem('token',user.token);
            console.log(user);
            navigate('/SenderProj');
        }
        else{
            setError('Invalid username or password');
        }
    }
        catch(error){
            console.error('Login error:',error);
        }
    };
    return (
        <div className="login-container">
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <label> User name:
                        <input

                            type="text"
                            placeholder="Enter your Username"
                            className="login-input" 
                            value={username}
                            onChange={handleUsernameChange}
                            required 

                            />
                    </label>
                    <label> Password:
                        <input
                            type="password" // Added password input for better login functionality
                            placeholder="Enter your Password"
                            className="login-input"
                            value={password}
                            onChange={handlepasswordChange}
                            required
                            
                            />
                            {error &&<h6 className="error-message"> {error} </h6>} 
                    </label>
                        <a href="/send-reciv/src/views/SenderProj.js" style={{ textDecoration: 'none' }}>
                        <button type="submit" className="login-button">Login</button>
                        </a> 

                </form>
            </div>
            <div className="login-subform">
                <img
                    src={Logo}
                    alt="Login Instructions"


                    className="login-instructions" // Using a class name
                />
    
            </div>

        </div>
    );
}

export default Login; // Change 'login' to 'Login'
