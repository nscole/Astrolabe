import React from "react";
import BlogData from "./BlogData";
import HomepageImage from "../assets/Homepage-img.jpg";
import {useHistory} from "react-router-dom";
import '../home.css';

function Home(){

    let history = useHistory();
    

    return <div id="Homepage">
        <div className="buttonbox">
            <button onClick={() => {history.push("/planets");}} className="glow-on-hover" type="button">Journey into space</button>
        </div>
        <div className="image-box">
            <img className="homepage-image"  src={HomepageImage} alt="Earth from space"/>
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