import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Pagent from "../components/Pagent.js";

function MyList(){
    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="./Styles/Directory.css"/>
                <title>My List - CodeNime</title>
            </Helmet>
            <Navbar></Navbar>
            <main className="container">
                <Pagent></Pagent>              
            </main>
            <Footer></Footer>
        </>
    )
}

export default MyList;
    