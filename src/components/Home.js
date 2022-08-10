import React from "react";
import BlogData from "./BlogData";
import HomepageImage from "../assets/Homepage-imgg.jpg";
import {useHistory} from "react-router-dom";
import '../home.css';

function Home(){

    let history = useHistory();
    

    return <div id="homepage">
                <div className="bckgr-image">
                <div className="buttonbox">
                    <button onClick={() => {history.push("/planets");}} className="glow-on-hover" type="button">Journey into space </button>
                </div>
                <div className="image-box">
                    <div className="homepage-image"/>
                </div>
                
                <div className="articles-home-section">
                    <div className="homepage-articles-header">
                        <div onClick={() => {history.push("/articles");}} className="homepage-art-h1">
                        <h1>Articles</h1>
                        </div>
                        <br/>
                    <div className="box-c"><BlogData/></div>
                    </div>
                </div>  
                </div>  
            </div>    

}

export default Home;