import React from "react";
import { Link } from "react-router-dom";
import "../views/login.css";

function NavComp(props) {
return (
    <nav className="links">
    <ul>
        {props.links.map((link) => (
            <button key={link.name}>
            <Link to={link.path}>{link.name}</Link>
            </button>
        
        ))}
    </ul>
    </nav>
);
}

export default NavComp;
