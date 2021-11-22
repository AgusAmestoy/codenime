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
            <section className="Video-container">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=_N_PcApaK5A'
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