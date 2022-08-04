import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/star-logo 2.png";


function Header()
{
    return <div id="header">
        <div id="logoHeader">
            <img src={logo} alt="astrolabe logo" className="logo"/>  <h1>Astrolabe</h1>  
                
        </div>
        <div id="navbox">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/planets">Planets</NavLink>
                <NavLink exact to="/contact-us">Contact Us</NavLink>
        </div>
    </div>;
}

export default Header;