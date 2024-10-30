import React, { useState } from "react";
import './login.css';

// import Logo from "./logo.gif";
// import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

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
        
                    <label className="login-sys"> نظام الصادر و الوارد</label>
                        <label className="login-msg">يرجى ادخال معلومات الحساب لاستخدام النظام</label>
                        <input

                            type="text"
                            placeholder="اسم المستخدم"
                            className="login-inputu" 
                            value={username}
                            onChange={handleUsernameChange}
                            required 

                            />
                    
                    
                        <input
                            type="password" // Added password input for better login functionality
                            placeholder="كلمة المرور"
                            className="login-inputp"
                            value={password}
                            onChange={handlepasswordChange}
                            required
                            
                            />
                            {error &&<h6 className="error-message"> {error} </h6>} 
               
                        <a href="/send-reciv/src/components/WaredView.js" >
                        <button type="submit" className="login-button">تسجيل دخول</button>
                        </a> 
                        <div className="link"><Link to="/dashbored">sign</Link></div>
                </form>
                
            </div>
            <div className="img">
            <img src="../assets/login.png" alt="" />

            </div>
        </div>
    );
}

export default Login; // Change 'login' to 'Login'
