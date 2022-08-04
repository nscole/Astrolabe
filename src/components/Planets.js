import React, {useEffect, useState} from "react";
import PlanetsData from "./PlanetsInformation";

function Planets(){
    const[planets, setPlanets] = useState([]);
    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '00d28b8eaamsh2bd70132ad051b9p161d37jsn26de235dfc27',
                'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
            }
        };
        
        fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options)
            .then(response => response.json())
            .then((data) => {
                // console.log(data),
                setPlanets(data);
            })
    }, [])

    return <ul>
        <div>Planets</div>
    {planets.map(item => {return <PlanetsData key={item.id} result={item} />})}
</ul>;
}

export default Planets;