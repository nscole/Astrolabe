import React from "react";
import TestChild from "./Test1child";
import Sun from "../assets/sun.jpg";
import Mercury from "../assets/Mercury.jpg";
import Venus from "../assets/Venus.jpg";
import Earth from "../assets/Earth.jpg";
import Mars from "../assets/Mars.jpg";
import Jupiter from "../assets/Jupiter.jpg";
import Saturn from "../assets/Saturn.jpg";
import Uranus from "../assets/Uranus.jpg";
import Neptune from "../assets/Neptune.jpg";
import '../image.css';


function Test1(){
    return <div className="container-fluid planetstogether">
            <div className="planetdivs">
                <img id="sun-img" src={Sun} alt="Sun Space Image"/>
            </div>
            <div className="planetdivs">
                <img id="mercury-img" src={Mercury} alt="Mercury Space Image"/>
                <h5>Mercury</h5>
            </div>
            <div className="planetdivs">
                <img id="venus-img" src={Venus} alt="Venus Space Image"/>
                <h5>Venus</h5>
            </div>
            <div className="planetdivs">
                <img id="earth-img" src={Earth} alt="Earth Space Image"/>
                <h5>Earth</h5>
            </div>
            <div className="planetdivs">
                <img id="mars-img" src={Mars} alt="Mars Space Image"/>
                <h5>Mars</h5>
            </div>
            <div className="planetdivs">
                <img id="jupiter-img" src={Jupiter} alt="Jupiter Space Image"/>
                <h5>Jupiter</h5>
            </div>
            <div className="planetdivs">
                <img id="saturn-img" src={Saturn} alt="Saturn Space Image"/>
                <h5>Saturn</h5>
            </div>
            <div className="planetdivs">
                <img id="uranus-img" src={Uranus} alt="Uranus Space Image"/>
                <h5>Uranus</h5>
            </div>
            <div className="planetdivs">
                <img id="neptune-img" src={Neptune} alt="Neptune Space Image"/>
                <h5>Neptune</h5>
            </div>
        <TestChild/>
    </div>
}


export default Test1;