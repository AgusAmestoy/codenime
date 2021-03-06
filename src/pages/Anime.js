import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Comments from "../components/Comments.js"

import Pagent from "../components/Pagent.js";

function Anime(){
    const Anime = "Nombre de anime"
    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="./Styles/Directory.css"/>
                <title>{Anime} - CodeNime</title>
            </Helmet>
            <Navbar></Navbar>
            <main className="container">
                <Pagent></Pagent>
                <Comments></Comments>            
            </main>
            <Footer></Footer>
        </>
    )
}

export default Anime;