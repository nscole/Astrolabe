import React from 'react'

function PlanetsDB({mercuryresult}) {
  return (
    <div id={mercuryresult.id}>
        <img src={mercuryresult.img}/>
        <h1>{mercuryresult.Name}</h1>
        <p>{mercuryresult.description}</p>
    </div>
  )
}

export default PlanetsDB;