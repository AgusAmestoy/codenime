import React from 'react'
import ReactPlayer from 'react-player';
import { Helmet } from "react-helmet";

function ChapterNavbar(){
    return(
        <div className="ChapterNavbar container">
            <div className="ChapterNavbar">
                <a className="button PC-button" href=""><i className="fas fa-chevron-left"></i>ANTERIOR</a> 
                <a className="button" href=""><i className="fas fa-bars"></i></a>
                <a className="button NC-button" href="">SIGUIENTE<i className="fas fa-chevron-right"></i></a> 
            </div>
        </div>
    )
}

function AnimeVideo(){
    const Anime = "Anime";
    const Chapter = "9";
    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="./Styles/Watch.css"/>
                <title>{Anime} {Chapter} - CodeNime</title>
            </Helmet>
            <section className="Video-container">
                <ReactPlayer
                    url='https://www60.ff-01.com/token=JxSX197PcOQB_pgLebihpQ/1632620404/181.171.0.0/38/a/f4/8da35b92a3c560674e0600c208d57f4a-480p.mp4'
                    controls = "true"
                    width="100%"
                    height="100vh"
                />
                {ChapterNavbar()}
            </section>
        </>
    );
}

export default AnimeVideo;