import React from "react";
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

function Info() {
    React.useEffect(() => {   
        const Script =document.createElement("script");
        Script.src = "./Script/Info.js";
        Script.async = true;
        document.querySelector("body").appendChild(Script);
    })
    return(
    <>
        <Helmet>
            <link rel="stylesheet" href='./Styles/Info.css'/>
            <title>Information - CodeNime</title>
        </Helmet>
        <header className="showcase">
            <div className="showcase-top">
                <Link className="Navbar-logo" to="/"><h1>Code<em>Nime</em></h1></Link>
                <select name="language" className="button button-rounded language">
                    <option value="EN">English</option>
                    <option value="ES">Spanish</option>
                </select>
            </div>
            <div className="showcase-content">
                <h2>Watch Anime Online free!</h2>
                <p>Just with some small advertisements to finance us</p>
                <div className="buttons">
                    <Link to="/Register" className="buttonDark button-large button-rounded2">Register</Link>
                    <Link to="/" className="buttonDark button-large button-rounded2">Continue</Link>
                </div>
            </div>
        </header>
        <section class="pages">
            <div class="container">
                <div id="page-1" class="page-item">
                    <i class="fas fa-info"></i>
                    <p>About us</p>
                </div>
                <div id="page-2" class="page-item page-border">
                    <i class="fas fa-user-secret"></i>
                    <p>privacy politics</p>
                </div>
                <div id="page-3" class="page-item">
                    <i class="fas fa-clipboard-list"></i>
                    <p>Terms and conditions</p>
                </div>
            </div>
        </section>
        <section class="pages-content">
            <div class="container">
                <div id="page-1-content" class="page-content-item">
                    <h1>About us</h1>
                    <p id="AboutUs-text" class="text-lg text-justify"></p>
                </div>
                <div id="page-2-content" class="page-content-item show">
                    <h1>Privacy politics</h1>
                    <p id="Privacy-text" class="text-lg text-justify"></p>
                </div>
                <div id="page-3-content" class="page-content-item">
                    <h1>Terms and conditions</h1>
                    <p id="TermsAndConditions-text" class="text-lg text-justify"></p>
                </div>
            </div>
        </section>
        <Footer></Footer>
    </> 
    )
}

export default Info;