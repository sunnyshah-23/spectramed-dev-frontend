import React from "react";
import "./Header.css";
import logo from "../images/sm-logo1.png";
//import './Header_animate'
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky">
        {/* Brand */}
        {/* <a className="navbar-brand" href="#">Spectramed</a> */}
        <Link to="/">
          <img className="logo" src={logo} alt="Logo"></img>
        </Link>
        {/* <!-- Toggler/collapsibe Button --> */}
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
              </button> */}
        {/* <!-- Navbar links --> */}
        {/* <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ">
              <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
              
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
              </li>
              <li>
                 
              </li>
              </ul>
              </div> */}
      </nav>
    </div>
  );
}

export default Header;
