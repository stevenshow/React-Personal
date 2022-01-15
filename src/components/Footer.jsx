import React, { Component } from "react";
import "./Footer.css";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">Steven's Website &#169; {new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  }

export default Footer;
