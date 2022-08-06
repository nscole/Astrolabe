import React, {useState} from 'react';
import Popup from './test2popup';
import Earth from "../assets/Earth.jpg";
import '../image.css';


function Test2(){
  const [buttonPopUp, setButtonPopUp] = useState(false);
  return (
    <div>
      <main>
        <h1>Popup code</h1>
        <button onClick={()=> setButtonPopUp(true)}><img id="earth-img" src={Earth} alt="Earth Space Image"/></button>
      </main>
       <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
         <h3>My Popup</h3>
       </Popup>
    </div>
  );
};

export default Test2;