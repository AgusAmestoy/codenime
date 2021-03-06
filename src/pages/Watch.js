'use strict';

import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import AnimeVideo from "../components/AnimeVideo.js";
import Comments from "../components/Comments.js"

function Watch(){
    var Anime = "Anime";
    var Chapter = "Chapter";

    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="./Styles/Watch.css"/>
                <title>{Anime} {Chapter} - CodeNime</title>
            </Helmet>
            <Navbar></Navbar>
            <AnimeVideo></AnimeVideo>
            <section className="container">
                
                <Comments></Comments>
            </section>
            <Footer></Footer>
        </>
    );
};

export default Watch;