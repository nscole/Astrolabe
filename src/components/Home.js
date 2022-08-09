import React from "react";
import BlogData from "./BlogData";
import HomepageImage from "../assets/Homepage-img.jpg";
import '../home.css';

function Home(){
    return <div id="Homepage">
        <div className="buttonbox">
            <h1>Welcome to space</h1>
            <br/>
            <button className="glow-on-hover" type="button">Journey into space</button>
        </div>
        <img className="homepage-image" src={HomepageImage} alt="Earth from space"/>

        <div className="homepage-articles-header">
                <h1>Articles</h1>
        </div>
        <div className="articles-home-section">
            <div className="box-c"><BlogData/></div>
        </div>
    </div>
}

export default Home;