import React, {useEffect, useState} from "react";
import PlanetsDB from "./Planetsdb";

function Article(){

    const[mercuryData, setMercuryData] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:4000/Mercury")
    .then(response => response.json())
    .then((data) => {
        // console.log(data),
        setMercuryData(data);
    })
}, [])
    return <div>
        {mercuryData.map(mercuryitem => <PlanetsDB key={mercuryitem.id} mercuryresult={mercuryitem}/>)}
    </div>
}

export default Article;