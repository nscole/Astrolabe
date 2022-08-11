import React from 'react'
import AstronomyPic from './AstronomyPic';
import ArticlesData from './ArticlesData';
import BlogData from './BlogData';
import '../articles.css';

function Articles() {

  return (
    <div className='articles'>
      <article className="wrapper">
          <a href="/blogpage" className="box-a"><AstronomyPic/></a>
          <div className="box-b"><ArticlesData/></div>
          <div className="box-c"><BlogData/></div>
      </article>
    </div>
  )
}

export default Articles;