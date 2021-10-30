import React from "react";
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <div>
                <p>Legal and similar stuff here</p>
                <div className="info">
                    <Link to="/Information">About us</Link>
                    <Link to="/Information">Terms and conditions</Link>
                    <Link to="/Information">privacy politics</Link>      
                </div>
            </div>
            <div>
                <p>Follow us: </p>
                <div className="social-media">
                    <a href="https://www.facebook.com/" target="_blank" className="social-media-facebook"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/launick9/" target="_blank" className="social-media-instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://twitter.com/home/" target="_blank" className="social-media-twitter"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;