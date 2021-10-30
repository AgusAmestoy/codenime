import React from "react";

function Content(ID){
    const Amount = "12";
    const Anime = "titulo " + ID;
    const Picture = "img/content/content1.jpg";
    return(
        <div className="content">
            <img src={Picture} alt={Anime}></img>
            <p>{Amount} Chapters</p>
            <h6>{Anime}</h6>
        </div>
    )
}


function GenerateContent(Amount, start) {
    var content = [];
    for(let i = start; i <(start + Amount); i++){
        content.push(Content(i));
    }

    return(
        content
    )
}

export {Content, GenerateContent};