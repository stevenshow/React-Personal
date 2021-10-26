import React, { Component } from "react";

import gitLogo from "../images/github.png";
import linkedLogo from "../images/linkedin.png";

import "./Links.css";

class Links extends React.Component {
  render() {
    return (
      <div>
        <a
          className="link"
          href="https://github.com/stevenshow"
          target="_blank"
        >
          <img src={gitLogo} height="30" width="30" />
        </a>
        <span>stevenshow</span>
        <a
          className="link"
          href="https://www.linkedin.com/in/steven-schoebinger/"
          target="_blank"
        >
          <img src={linkedLogo} height="30" width="30" />
        </a>
        <span>steven-schoebinger</span>
      </div>
    );
  }
}

export default Links;
