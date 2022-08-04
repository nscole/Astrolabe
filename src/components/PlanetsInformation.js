import React, {useEffect} from "react";

function PlanetsData (){

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '00d28b8eaamsh2bd70132ad051b9p161d37jsn26de235dfc27',
                'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com'
            }
        };
        
        fetch('https://planets-by-api-ninjas.p.rapidapi.com/v1/planets?name=Venus', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    })

    return <div></div>
}
    

export default PlanetsData;
