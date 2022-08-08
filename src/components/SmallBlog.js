import React from 'react'

function SmallBlog({result}) {
  return (
    <article className="blog-container">
        <a href={result.url}>
        <div className='blog-text' id={result.id}>
            <img id='blog-images' src={result.imageUrl} alt="News Images"/>
            <h1>{result.title}</h1>
            <p>{result.newsSite}</p>
        </div>   
        </a>
    </article>
  )
}

export default SmallBlog