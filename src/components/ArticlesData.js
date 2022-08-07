import React, {useEffect, useState} from "react";
import SmallDataArticles from "./SmallDataArticles";

function ArticlesData() {

    const [artData, setArtData] = useState([]);
    useEffect(()=>{
        fetch("https://api.spaceflightnewsapi.net/v3/articles?_limit=6")
        .then((r)=>r.json())
        .then((data)=>{
            // console.log(data);
            setArtData(data);
        })
    },[])
    return <div className="most-popular-container">
            <h1>Most Popular</h1>
        {artData.map(item => {return <SmallDataArticles key={item.id} result={item} />})}
    </div>;
}

export default ArticlesData;
