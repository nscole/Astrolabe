import React from "react";
import BlogData from "./BlogData";
import HomepageImage from "../assets/Homepage-img.jpg";
import '../home.css';

function Home(){
    return <div id="Homepage">
        <div>
        <button className="glow-on-hover" type="button">Start your Journey Now</button>
            <img className="homepage-image" src={HomepageImage} alt="Earth from space"/>
        </div>
        <div className="homepage-articles-header">
                <h1>Articles</h1>
        </div>
        <div className="articles-home-section">
            <div className="box-c"><BlogData/></div>
        </div>
    </div>
}

export default Home;