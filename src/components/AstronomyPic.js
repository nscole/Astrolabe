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
        <div className="spacebox box2"> 
        {(spaceImage.media_type === "image") ? <img alt="Space Images" src={spaceImage.url}/>: "https://apod.nasa.gov/apod/image/2208/LagoonStarFree_Dhar_960.jpg"}
        </div>
        <h2>{spaceImage.title}</h2>
        <p className="space-img-date">{spaceImage.date}</p>
      </div>
  </div>;
}

export default AstronomyPic;
