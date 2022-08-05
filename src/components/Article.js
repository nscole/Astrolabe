import React from "react";
// import React, {useEffect} from "react";

function Article(){


    fetch("http://localhost:4000/Planets")
    .then(response => response.json())
    .then((data) => {console.log(data)});

    return <div>
        ArticlePage
    </div>
}

export default Article;