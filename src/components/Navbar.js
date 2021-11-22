import React, { useEffect } from "react";
import User from "./Login/User";
import LoginPopUp from "./Login/login";
import {Link, NavLink} from 'react-router-dom';


function NavBar(){
    const State = false;

    useEffect(()=>{
        const ToggleNavbar = document.getElementById('show-menu');
        const Navbar = document.querySelector('.Home-nav');

        ToggleNavbar.addEventListener('click', ()=>{
            Navbar.classList.toggle('show');
        });
    })
    



    return( 
        <header className="Home-header">
            <div className="Home-header-top">
                <div className="top">
                    <Link to="/Home"><h1 className="Navbar-logo">Code<em>Nime</em></h1></Link>
                    <a id="show-menu" className="icon"><i className="fa fa-bars"></i></a>
                </div>
                <nav className="Home-nav">
                    <NavLink activeClassName="active" exact to="/Home">Home</NavLink>
                    <NavLink activeClassName="active" exact to="/HentaiZone">+18</NavLink>
                    <NavLink activeClassName="active" exact to="/Directory">Directory</NavLink>
                    <NavLink activeClassName="active" exact to="/Emision">Emision</NavLink>
                    <NavLink activeClassName="active" exact to="/MyList">My List</NavLink>
                    <input className="Home-nav-search" type="text" placeholder="Search.." /><i className="fas fa-search"></i>
                    <User State={State}></User>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;