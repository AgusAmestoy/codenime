'use strict';

import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import {Link} from 'react-router-dom';

function Login(){
    React.useEffect(() => {
        function ToLogin(){
            window.location.pathname = "./Register"
            document.querySelector(".pop-up").style.display = "none";
        }
        const LoginButton = document.getElementById('login');
        LoginButton.innerText = "register";
        LoginButton.addEventListener('click', ToLogin);
    })
    return(
        <>
            <Helmet>
                <link rel="stylesheet" href="./Styles/Login.css"></link>
                <link rel="stylesheet" href="./Styles/Register.css"></link>
                <title>Log In - CodeNime</title>
            </Helmet>
            <Navbar></Navbar>
            <main className="pop-up static register">
                <div className="login-container">
                    <form className="login-content-container">
                        <h2>Log in</h2>
                        <input type="mail" placeholder="e-mail" name="E-Mail" required/>

                        <input type="password" placeholder="password" name="Password" required/>

                        <div className="send">
                            <span>
                                <label className="Remember-me" for="Remember-me">Remember me</label>
                                <input className="Remember-me" type="checkbox" id="Remember-me"/>
                            </span>
                            <button type="button" className ="button button-veryRounded">Log In</button>
                        </div>
                        <a className ="button button-rounded"><i className="fab fa-facebook"></i>Log In with Facebook</a>
                        <a className ="button button-rounded"><i className="fab fa-google-plus-g"></i>Log In with Google</a>
                        <div className="span-button"></div>
                        <span className="button-span"><Link to="#">Forgot password?</Link></span>
                        <span className="button-span"><Link to="/Register">Do not have an account?</Link></span>
                    </form>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default Login;