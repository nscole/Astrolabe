import React from 'react'

function SmallBlog({result}) {
  return (
    <article className="blog-container">
        <a href={result.url}>
        <div className='blog-text' id={result.id}>
            <div className='blogbox box3'>
            <img id='blog-images' src={result.imageUrl} alt="News Images"/>
            </div>
            <h1>{result.title}</h1>
            <p>{result.newsSite}</p>
        </div>   
        </a>
    </article>
  )
}

export default SmallBlog