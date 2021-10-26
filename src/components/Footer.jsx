import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">Steven's Website &#169; {new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
