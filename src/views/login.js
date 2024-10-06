import React from "react";

import "./login.css";
import Logo from "./logo.gif";
import SenderProj from "./SenderProj";
import NavComp from "../components/NavComp";
import {Routes, Route } from 'react-router-dom';

const links = [
    { name: "Login", path: "/SenderProj", comp: <SenderProj /> }
    
    ]; 
function Login() {

    return (
        <div className="login-container">
            <div className="login-form">
                <form>
                    <label> User name:
                        <input

                            type="text"
                            placeholder="Username"
                            className="login-input" />
                    </label>
                    <label> Password:
                        <input
                            type="password" // Added password input for better login functionality
                            placeholder="Password"
                            className="login-input" />
                    </label>
                
                    <NavComp links={links} className="login-button"/>
                <Routes>
                {links.map((link) => (
                <Route  path={link.path} element={link.comp}  />
                
                ))}
                </Routes>
                {/* <a href="/send-reciv/src/views/SenderProj.js" style={{ textDecoration: 'none' }}>
  <button type="submit" className="login-button">Login</button>
</a> */}

                    

                </form>
            </div>
            <div className="login-subform">
                <img
                    src={Logo}
                    alt="Login Instructions"


                    className="login-instructions" // Using a class name
                />
                {/* <div className="item-svg"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title/>
        <g data-name="1" id="_1">
            <path d="M441.13,166.52h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z"/>
            <path d="M441.13,279.72h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z"/>
            <path d="M441.13,392.92h-372a15,15,0,1,1,0-30h372a15,15,0,0,1,0,30Z"/>
            </g></svg>
            </div> */}
            </div>

        </div>
    );
}

export default Login; // Change 'login' to 'Login'
