import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import GeneratePagination from "../components/Pagination.js";

import Filter from "../components/Filters.js";

import Animelist from "../components/Animelist.js";


function Directory(){
    var Page = useLocation().pathname.replace("/", "");
    Page = Page.replace(/([A-Z])/g, ' $1').trim();
    const MainSearch = "All Animes";

    React.useEffect(() => {   
		const Script = document.createElement("script");
		Script.src = "./Script/Pagination.js";
		Script.async = true;
		document.querySelector("body").appendChild(Script);
	}, [])

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
                    <Filter></Filter>
                </div>
                <section className="directory-content">
                    <div className="content-container">
                    {Animelist()}
                    </div>
                    {GeneratePagination(999)}
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Directory;
    