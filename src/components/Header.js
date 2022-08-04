import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/star-logo 2.png";


function Header(){
    // function navSlide(){
    //     const burger = document.querySelector("burger");
    //     const nav = document.querySelector("navbox")
    
    //     burger.addEventListener("click", ()=>{
    //         nav.className.toggle("navbox-active")
    //     })
    // }
    
    // navSlide();

    return <div id="header">
        <div id="logoHeader">
            <img src={logo} alt="astrolabe logo" className="logo"/>  <h1>Astrolabe</h1>  
                
        </div>
        <div id="navbox">
            <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink exact to="/planets">Planets</NavLink></li>
                <li><NavLink exact to="/contact-us">Contact Us</NavLink></li>
            </ul>
        </div>
        <div id="burger">
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
        </div>
    </div>;

        // return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        // <a className="navbar-brand" href="#">Navbar</a>
        // <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        // <span className="navbar-toggler-icon"></span>
        // </button>
        // <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        // <div className="navbar-nav">
        //     <NavLink className="nav-item nav-link active" exact to="/">Home</NavLink>
        //     <NavLink exact to="/planets" className="nav-item nav-link">Planets</NavLink>
        //     <NavLink exact to="/contact-us" className="nav-item nav-link" href="#">Contact Us</NavLink>
        // </div>
        // </div>
        // </nav>
        // }
}




export default Header;