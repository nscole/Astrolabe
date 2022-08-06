import React, {useState} from "react";
import Popup from "./Popup";
import Sun from "../assets/sun.jpg";
import Mercury from "../assets/Mercury.jpg";
import Venus from "../assets/Venus.jpg";
import Earth from "../assets/Earth.jpg";
import Mars from "../assets/Mars.png";
import Jupiter from "../assets/Jupiter.png";
import Saturn from "../assets/Saturn.png";
import Uranus from "../assets/Uranus.png";
import Neptune from "../assets/Neptune.png";
import '../image.css';
import '../popup.css';


function Test1(){
    const [mercuryPopUp, setMercuryPopUp] = useState(false);
    const [VenusPopUp, setVenusPopUp] = useState(false);
    const [EarthPopUp, setEarthPopUp] = useState(false);
    const [MarsPopUp, setMarsPopUp] = useState(false);
    const [JupiterPopUp, setJupiterPopUp] = useState(false);
    const [SaturnPopUp, setSaturnPopUp] = useState(false);
    const [UranusPopUp, setUranusPopUp] = useState(false);
    const [NeptunePopUp, setNeptunePopUp] = useState(false);

    return <div className="container-fluid planetstogether">
            <div className="planetdivs">
                <img id="sun-img" src={Sun} alt="Sun Space"/>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setMercuryPopUp(true)}><img id="mercury-img" src={Mercury} alt="Mercury Space"/></button>
                    <h5>Mercury</h5>
                </main>
                <Popup trigger={mercuryPopUp} setTrigger={setMercuryPopUp}>
                     <h3>Mercury</h3>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setVenusPopUp(true)}><img id="venus-img" src={Venus} alt="Venus Space"/></button>
                    <h5>Venus</h5>
                </main>
                <Popup trigger={VenusPopUp} setTrigger={setVenusPopUp}>
                     <h3>Venus</h3>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setEarthPopUp(true)}><img id="earth-img" src={Earth} alt="Earth Space"/></button>
                    <h5>Earth</h5>
                </main>
                <Popup trigger={EarthPopUp} setTrigger={setEarthPopUp}>
                     <h3>Earth</h3>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setMarsPopUp(true)}><img id="mars-img" src={Mars} alt="Mars Space"/></button>
                    <h5>Mars</h5>
                </main>
                <Popup trigger={MarsPopUp} setTrigger={setMarsPopUp}>
                     <h3>Mars</h3>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setJupiterPopUp(true)}><img id="jupiter-img" src={Jupiter} alt="Jupiter Space"/></button>
                    <h5>Jupiter</h5>
                </main>
                <Popup trigger={JupiterPopUp} setTrigger={setJupiterPopUp}>
                     <h3>Jupiter</h3>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setSaturnPopUp(true)}><img id="saturn-img" src={Saturn} alt="Saturn Space"/></button>
                    <h5>Saturn</h5>
                </main>
                <Popup trigger={SaturnPopUp} setTrigger={setSaturnPopUp}>
                     <h3>Saturn</h3>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setUranusPopUp(true)}><img id="uranus-img" src={Uranus} alt="Uranus Space"/></button>
                    <h5>Uranus</h5>
                </main>
                <Popup trigger={UranusPopUp} setTrigger={setUranusPopUp}>
                     <h3>Uranus</h3>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setNeptunePopUp(true)}><img id="neptune-img" src={Neptune} alt="Neptune Space"/></button>
                    <h5>Neptune</h5>
                </main>
                <Popup trigger={NeptunePopUp} setTrigger={setNeptunePopUp}>
                     <h3>Neptune</h3>
                </Popup>
            </div>
    </div>
}


export default Test1;


