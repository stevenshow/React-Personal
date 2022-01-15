import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/s_logo.png";

const Navbar = () => {
    const [active, setActive] = useState(false);
  
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} width="40" height="40" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
              <Link className="nav-item nav-link" to="/projects" onClick={() => setActive(active), console.log(active)}>
                Projects
              </Link>
              <Link className="nav-item nav-link" to="/about" onClick={() => setActive(active), console.log(active)}>
                About
              </Link>
              <Link className="nav-item nav-link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

export default Navbar;
