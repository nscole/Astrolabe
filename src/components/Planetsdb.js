import React, {useEffect} from "react";

function PlanetsDb(){
    useEffect(()=>{
        fetch('http://localhost:4000/Planets')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
            })
    }, [])

    return <ul>
        <div>Planets</div>
    
</ul>;
}

export default PlanetsDb;