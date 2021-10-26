import React, { Component } from "react";
import "./Jumbotron.css";
import Links from "./Links.jsx";

class Jumbotron extends Component {
    render() {
        return(
           <div className="jumbotron jumbotron-fluid">
               <div className="container">
                   <h1 className="display-3">{this.props.title}</h1>
                   <p className="lead">{this.props.subtitle}</p>
                   <Links/>
               </div>
            </div>
        );
    }
}

export default Jumbotron;