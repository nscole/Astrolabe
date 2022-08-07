import React from "react";
import {NavLink} from "react-router-dom";
import logo from "../assets/star-logo.png";

function Header(){

    return <div className = "container-fluid HeaderNav">
         <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
        <img src={logo} id="logo" alt="Astrolabe Logo"/>
        <button className="navbar-toggler align-center" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse align-center" id="navbarText">
          <ul className="navbar-nav mr-auto" id="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/planets">Planets</NavLink>
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" exact to="/articles">Articles</NavLink>
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" exact to="/contact-us">Contact Us</NavLink>
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" exact to="/test1">Test1</NavLink>
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" exact to="/comment">Comment</NavLink>
            </li>
          </ul>
          
    
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <NavLink className="dropdown-item" exact to="/">Home</NavLink>
                <NavLink className="dropdown-item" exact to="/planets">Planets</NavLink>
                <NavLink className="dropdown-item" exact to="/articles">Articles</NavLink>
                <NavLink className="dropdown-item" exact to="/contact-us">Contact Us</NavLink>
                <NavLink className="dropdown-item" exact to="/Comment
                ">Comment</NavLink>
            </div>
          </div>
      </nav>
    </div>
}


export default Header;
