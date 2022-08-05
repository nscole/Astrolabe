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


function Test1(){
    return<div className="row">
        <div>
            <div>
                <img id="sun-img" src={Sun} alt="Sun Space Image"/>
            </div>
            <div>
                <img id="mercury-img" src={Mercury} alt="Mercury Space Image"/>
                <h4>Mercury</h4>
            </div>
            <div>
                <img id="venus-img" src={Venus} alt="Venus Space Image"/>
                <h4>Venus</h4>
            </div>
            <div>
                <img id="earth-img" src={Earth} alt="Earth Space Image"/>
                <h4>Earth</h4>
            </div>
            <div>
                <img id="mars-img" src={Mars} alt="Mars Space Image"/>
                <h4>Mars</h4>
            </div>
            <div>
                <img id="jupiter-img" src={Jupiter} alt="Jupiter Space Image"/>
                <h4>Jupiter</h4>
            </div>
            <div>
                <img id="saturn-img" src={Saturn} alt="Saturn Space Image"/>
                <h4>Saturn</h4>
            </div>
            <div>
                <img id="uranus-img" src={Uranus} alt="Uranus Space Image"/>
                <h4>Uranus</h4>
            </div>
            <div>
                <img id="neptune-img" src={Neptune} alt="Neptune Space Image"/>
                <h4>Neptune</h4>
            </div>
        </div>
        <TestChild/>
    </div>
}


export default Test1;