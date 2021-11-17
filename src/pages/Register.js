'use strict';

import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import {Link} from 'react-router-dom';

function RegisterPage(){
    React.useEffect(() => {   
        const Script =document.createElement("script");
        Script.src = "./Script/Register.js";
        Script.async = true;
        document.querySelector("body").appendChild(Script);
    })

    React.useEffect(() => { 
        function ToLogin(){
            window.location.pathname = "./Login"
            document.querySelector(".pop-up").style.display = "none";
        }
        
        const LoginButton = document.getElementById('login');
        LoginButton.addEventListener('click', ToLogin);
    })

    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="./Styles/Register.css"/>
                <title>Register - CodeNime</title>
            </Helmet>
            <Navbar></Navbar>
            <main className="register">
                <div className="register-container">
                    <div className="image-showcase">
                        <ul>
                            <li><img src="/img/Album/akari.jpg" alt="akari"></img></li>
                            <li><img src="/img/Album/toshino.jpg" alt="toshino"></img></li>
                            <li><img src="/img/Album/y-las-monas-chinas.jpg" alt="un gato montes"></img></li>
                            <li><img src="/img/Album/hentai-collage-not-hd.jpg" alt="definitivamente no es hentai"></img></li>
                        </ul> 
                    </div>
                    <div className="Register-content">
                        <h2>Register</h2>
                        <form className="Register-content-container">
                            <div className="Botton-Registerwith">
                                <a><i className="fab fa-facebook"></i></a>
                                <a><i className="fab fa-google"></i></a>
                            </div>
                            <div className="register-form">
                                <input type="email" placeholder="Enter Mail" name="Mail" required/>
                                <input type="text" placeholder="Username" name="Username" required/>
                                <input type="password" placeholder="Enter Password" name="Password" required/>
                                <input type="password" placeholder="Repeat Password" name="RepeatPassword" required/>
                                <input type="date" id="birthday" name="birthday"/>
                                <span>
                                    <input type="checkbox" name="termsAndConditions"/>  
                                    <label for="termsAndConditions">Agree terms and conditions</label>
                                </span>
                                <button className ="button button-rounded2" value="submit">Register</button>
                            </div>               
                            <Link to="/Login">already you have an account? Log in</Link>
                        </form>
                    </div> 
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default RegisterPage;
