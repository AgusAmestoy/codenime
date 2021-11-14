import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Pagent from "../components/Pagent.js";

function Profile(){

    const Profile = "Nombre de perfil"
    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="./Styles/Directory.css"/>
                <title>{Profile} - CodeNime</title>
            </Helmet>
            <Navbar></Navbar>
            <main className="container">
                <Pagent></Pagent>              
            </main>
            <Footer></Footer>
        </>
    )
}

export default Profile;