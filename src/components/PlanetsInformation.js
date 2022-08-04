import React from "react";

function PlanetsData ({result}){

    return <div id={result.id}>
        <h1>{result.name}</h1>
        <p>{result.description}</p>
    </div>
    
}
    

export default PlanetsData;
