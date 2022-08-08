import React, {useEffect, useState} from 'react';
import SmallBlog from './SmallBlog';

// API: https://api.spaceflightnewsapi.net/v3/blogs?_limit=2

function BlogData() {
    const [blogData, setBlogData] = useState([]);
    useEffect(()=>{
        fetch("https://api.spaceflightnewsapi.net/v3/blogs?_limit=2")
        .then((r)=>r.json())
        .then((data)=>{
            // console.log(data),
            setBlogData(data);
        })
    },[])
    return <div>
        {blogData.map(item => {return <SmallBlog key={item.id} result={item} />})}
    </div>;
}

export default BlogData

