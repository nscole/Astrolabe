import React from 'react'

function SmallBlog({result}) {
  return (
    <article className="blog-container">
            <div className='blog-text' id={result.id}>
                    <h1>{result.title}</h1>
                    <img src={result.imageUrl} alt="News Images"/>
                    <p>{result.newsSite}</p>
            </div>   
    </article>
  )
}

export default SmallBlog