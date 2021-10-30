import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";


import Filter from "../components/Filters.js";
import GeneratePagination from "../components/Pagination.js"
import Animelist from "../components/Animelist.js";


function Directory(){
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
                    <Animelist></Animelist>
                    <div id="content-list" className="content-container">
                    </div>
{/*                     {GeneratePagination(2)}
 */}                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Directory;
    