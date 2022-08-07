import React from 'react'
import AstronomyPic from './AstronomyPic';
import ArticlesData from './ArticlesData';
import BlogData from './BlogData';
import '../articles.css';

function Articles() {


  return (
    <div>
      <h1>Articles</h1>
      <article className="wrapper">
        <div className="box-a"><AstronomyPic/></div>
        <div className="box-b"><ArticlesData/></div>
        <div className="box-c"><BlogData/></div>
      </article>
    </div>
  )
}

export default Articles;