import React, {useEffect, useState} from "react";

function NasaImage() {
  const [spaceImage, setSpaceImage] = useState("");

  useEffect(() =>{
    fetch("https://api.nasa.gov/planetary/apod?api_key=iknsQjHvAEl1d54oyvgyDCCAVKbbXbEdidtg1mwd")
    .then((r)=>r.json())
    .then((data)=> {
      console.log(data);
      setSpaceImage(data);
    })
  }, []);

  return <div>
    <img id="SpaceImage" alt="Space Images" src={spaceImage.url}/>
  </div>;
}

export default NasaImage;
