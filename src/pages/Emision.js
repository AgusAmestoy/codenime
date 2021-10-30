import React from "react";
import Emisionani from "../components/Animemision";
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Filter from "../components/Filters.js";


function Emision(){
    var Page = useLocation().pathname.replace("/", "");
    Page = Page.replace(/([A-Z])/g, ' $1').trim()
    const MainSearch = "All Animes";

    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="./Styles/Directory.css"/>
                <title>{Page} - CodeNime</title>
            </Helmet>
            <Navbar></Navbar>
            <main className="container">
                <div className="directory-navbar">  
                    <h1><i className="fab fa-sistrix"></i>{Page} - {MainSearch}</h1>
                    
                </div>
                <section className="directory-content">
                    <Emisionani></Emisionani>
                    <div id="content-list" className="content-container">
                    </div>
               </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Emision;