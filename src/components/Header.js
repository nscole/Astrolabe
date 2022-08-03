import React from "react";
import {NavLink} from "react-router-dom";

function Header()
{
    return <div id="header">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/planets">Planets</NavLink>
        <NavLink exact to="/contact-us">Contact Us</NavLink>
    </div>;
}

export default Header;