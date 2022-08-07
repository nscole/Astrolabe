import React from 'react'

function SmallDataArticles({result}) {
  return (
    <div className="articles-container" id={result.id}>
        <div className='articles-text'>
        <h1>{result.title}</h1>
        <img src={result.imageUrl} alt="News Images"/>
        <p>{result.newsSite}</p>
        </div>
    </div>
  )
}

export default SmallDataArticles;