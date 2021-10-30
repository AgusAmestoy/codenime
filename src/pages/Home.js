import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";

import {Slider, GenerateSliders} from "../components/Slider.js";
import Categories from "../components/Categories.js"

function Home() {
    var Title = "Title";
    var Description = "Description"

    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.css"/>
                <script src="https://cdn.jsdelivr.net/npm/glider-js@1/glider.min.js" async></script>
                <link rel="stylesheet" href="./Styles/Home.css"/>
                <link rel="stylesheet" href="./Styles/Slider.css"/>
                <title>CodeNime</title>
            </Helmet>
            <Navbar></Navbar>
            <main className="Home-showcase-main">
                <section className="principal-recommendation">  
                    <div className="container">
                        <h2 className="Title">{Title}</h2>
                        <p className="Description">{Description}</p>
                        <a href="#" className="buttonDark button-rounded"><i className="fas fa-play"></i> Play</a>
                        <a href="#" className="buttonDark button-rounded"><i className="fas fa-info-circle"></i> More info</a>
                    </div>    
                </section>
                <section className="best-recommendations container">
                    {Slider("Recomended for you")}
                </section>
                <Categories></Categories>
                <section className="best-recommendations container">
                    {GenerateSliders(15)}
                </section>
            </main>
            <Footer></Footer>
        </>
    )
}
export default Home;