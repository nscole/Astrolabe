import React from 'react'

function SmallDataArticles({result}) {
  return (
    <div className="articles-container" id={result.id}>
        <div className='articles-text'>
          <a href={result.url}>
            
               <div className="box box1">
              <img id='article-images' src={result.imageUrl} alt="News Images"/>
            </div>
              <h2>{result.title}</h2>
              <p>{result.newsSite}</p>
          </a>
        </div>
        
    </div>
  )
}

export default SmallDataArticles;