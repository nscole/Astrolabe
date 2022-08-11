import React, {useState} from "react";
import Sun from "../assets/sun.jpg";
import Mercury from "../assets/Mercury.jpg";
import Venus from "../assets/Venus.jpg";
import Earth from "../assets/Earth.jpg";
import Mars from "../assets/Mars.png";
import Jupiter from "../assets/Jupiter.png";
import Saturn from "../assets/Saturn.png";
import Uranus from "../assets/Uranus.png";
import Neptune from "../assets/Neptune.png";
import Popup from "./Popup";
import '../planets.css';

function Planets(){
    const [mercuryPopUp, setMercuryPopUp] = useState(false);
    const [VenusPopUp, setVenusPopUp] = useState(false);
    const [EarthPopUp, setEarthPopUp] = useState(false);
    const [MarsPopUp, setMarsPopUp] = useState(false);
    const [JupiterPopUp, setJupiterPopUp] = useState(false);
    const [SaturnPopUp, setSaturnPopUp] = useState(false);
    const [UranusPopUp, setUranusPopUp] = useState(false);
    const [NeptunePopUp, setNeptunePopUp] = useState(false);


    return <div  className="container-fluid planetstogether">
            <div className="planet-instruction">
                <h1>Click the planets to find out more information</h1>
            </div>
            <div className="planetdivs">
                <img id="sun-img" src={Sun} alt="Sun Space"/>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setMercuryPopUp(true)}><img id="mercury-img" src={Mercury} alt="Mercury Space"/></button>
                    <h5>Mercury</h5>
                </main>

                {/* Triggered Event */}
                <Popup trigger={mercuryPopUp} setTrigger={setMercuryPopUp}>
                    <img className="popupimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/440px-Mercury_in_true_color.jpg" alt="Planet Mercury"/>
                    <h1>Mercury</h1>
                    <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.</p>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setVenusPopUp(true)}><img id="venus-img" src={Venus} alt="Venus Space"/></button>
                    <h5>Venus</h5>
                </main>
                <Popup trigger={VenusPopUp} setTrigger={setVenusPopUp}>
                     <img className="popupimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Venus_from_Mariner_10.jpg/440px-Venus_from_Mariner_10.jpg" alt="Planet Venus"/>
                     <h1>Venus</h1>
                     <p>Venus is the second planet from the Sun and is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be visible to the naked eye in broad daylight.</p>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setEarthPopUp(true)}><img id="earth-img" src={Earth} alt="Earth Space"/></button>
                    <h5>Earth</h5>
                </main>
                <Popup className="popupstyle" trigger={EarthPopUp} setTrigger={setEarthPopUp}>
                     <img className="popupimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/440px-The_Blue_Marble_%28remastered%29.jpg" alt="Planet Eath"/>
                     <h1>Earth</h1>
                     <p>Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large amounts of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers.</p>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setMarsPopUp(true)}><img id="mars-img" src={Mars} alt="Mars Space"/></button>
                    <h5>Mars</h5>
                </main>
                <Popup className="popupstyle" trigger={MarsPopUp} setTrigger={setMarsPopUp}>
                     <img className="popupimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/440px-OSIRIS_Mars_true_color.jpg" alt="Planet Mars"/>
                     <h1>Mars</h1>
                     <p>Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often called the Red Planet.</p>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setJupiterPopUp(true)}><img id="jupiter-img" src={Jupiter} alt="Jupiter Space"/></button>
                    <h5>Jupiter</h5>
                </main>
                <Popup className="popupstyle" trigger={JupiterPopUp} setTrigger={setJupiterPopUp}>
                     <img className="popupimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/440px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg" alt="Planet Jupiter"/>
                     <h1>Jupiter</h1>
                     <p>Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, but slightly less than one-thousandth the mass of the Sun.</p>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setSaturnPopUp(true)}><img id="saturn-img" src={Saturn} alt="Saturn Space"/></button>
                    <h5>Saturn</h5>
                </main>
                <Popup className="popupstyle" trigger={SaturnPopUp} setTrigger={setSaturnPopUp}>
                    <div className="satimgbackground">
                     <img className="popupimgsat" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg" alt="Planet Saturn"/>
                     </div>
                     <h1>Saturn</h1>
                     <p>Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It has only one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.</p>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setUranusPopUp(true)}><img id="uranus-img" src={Uranus} alt="Uranus Space"/></button>
                    <h5>Uranus</h5>
                </main>
                <Popup className="popupstyle" trigger={UranusPopUp} setTrigger={setUranusPopUp}>
                     <img className="popupimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/440px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg" alt="Planet Uranus"/>
                     <h1>Uranus</h1>
                     <p>Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the great-grandfather of Ares, grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.</p>
                </Popup>
            </div>
            <div className="planetdivs">
                <main>
                    <button className="buttonStyle" onClick={()=> setNeptunePopUp(true)}><img id="neptune-img" src={Neptune} alt="Neptune Space"/></button>
                    <h5>Neptune</h5>
                </main>
                <Popup className="popupstyle" trigger={NeptunePopUp} setTrigger={setNeptunePopUp}>
                     <img className="popupimg" alt="Planet Neptune" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/440px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg"/>
                     <h1>Neptune</h1>
                     <p>Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus.</p>
                </Popup>
            </div>
    </div>
}


export default Planets;


