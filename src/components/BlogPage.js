import React from 'react';
import CommentForm from './CommentForm';
import '../blogstyles.css';


function BlogPage() {

  let date = new Date().toLocaleDateString('en-us', { weekday:"long", day:"numeric", month:"long", year:"numeric", time:"numeric"});


  return (
    <article id="content">
      <div id="inner-content">
        <div id="content-setup">
          <h1>Astronomy Picture of the Day</h1>
          <h2>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</h2>
          <p className='content-date'>{date}</p>
          <div className='contentbox'>
            <img alt="The Lagoon Nebula without Stars" src="https://apod.nasa.gov/apod/image/2208/LagoonStarFree_Dhar_960.jpg"/>
          </div>
          <div className='credit'>
            <h3>The Lagoon Nebula without Stars</h3>
            <h3>Image Credit & Copyright: Sameer Dhar</h3>
          </div>
            <p className='content-text'> Explanation: Ridges of glowing interstellar gas and dark dust clouds inhabit the turbulent, cosmic depths of the Lagoon Nebula. Also known as M8, the bright star forming region is about 5,000 light-years distant. But it still makes for a popular stop on telescopic tours of the constellation Sagittarius, toward the center of our Milky Way Galaxy. Dominated by the telltale red emission of ionized hydrogen atoms recombining with stripped electrons, this stunning, deep view of the Lagoon is nearly 100 light-years across. Right of center, the bright, compact, hourglass shape is gas ionized and sculpted by energetic radiation and extreme stellar winds from a massive young star. In fact, although digitally removed from the featured image, the many bright stars of open cluster NGC 6530 drift within the nebula, just formed in the Lagoon several million years ago.
          </p>
          <CommentForm/> 
        </div>
      </div>
    </article>
  )
}

export default BlogPage;