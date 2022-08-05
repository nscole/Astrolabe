import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/star-logo 2.png";


function Header(){
    

    return <div className = "container ">
      <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
        <img src={logo} className="navbar-brand" id="logo"/><h1 id="navh1">Astrolabe</h1>  
        <button className="navbar-toggler align-center" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto" id="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/planets">Planets</NavLink>
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" exact to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
          
    
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <NavLink className="dropdown-item" exact to="/">Home</NavLink>
                <NavLink className="dropdown-item" exact to="/planets">Planets</NavLink>
                <NavLink className="dropdown-item" exact to="/contact-us">Contact Us</NavLink>
            </div>
          </div>
        
      </nav>
    </div>

      
}




export default Header;
