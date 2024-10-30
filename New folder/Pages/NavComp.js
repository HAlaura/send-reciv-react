import React from "react";
import { Link } from "react-router-dom";

function NavComp(props) {
return (
    <nav >
        <ul>

            <li>
                <Link to="/">الوارد</Link>
            </li>
            <li>
                <Link to="/saderinput">الصادر</Link>
            </li>
            <li>
                <Link to="/">الارشفة</Link>
            </li>
        </ul>
   
    </nav>
);
}

export default NavComp;
