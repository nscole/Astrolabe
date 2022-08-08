import React, {useEffect, useState} from "react";

function AstronomyPic() {
  const [spaceImage, setSpaceImage] = useState("");

  useEffect(() =>{
    fetch("https://api.nasa.gov/planetary/apod?api_key=iknsQjHvAEl1d54oyvgyDCCAVKbbXbEdidtg1mwd")
    .then((r)=>r.json())
    .then((data)=> {
      console.log(data);
      setSpaceImage(data);
    })
  }, []);

  return <div className="NASA-header">
    <h1>NASA Picture Of The Day</h1>
      <div className="space-image-container">
        <img id="SpaceImage" alt="Space Images" src={spaceImage.url}/>
        <h2>{spaceImage.title}</h2>
        <p>{spaceImage.date}</p>
      </div>
  </div>;
}

export default AstronomyPic;
