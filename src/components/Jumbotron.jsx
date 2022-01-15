import React, { Component } from "react";
import "./Jumbotron.css";
import Links from "./Links.jsx";

const Jumbotron = (props) => {
        return(
           <div className="jumbotron jumbotron-fluid">
               <div className="container">
                   <h1 className="display-3">{props.title}</h1>
                   <p className="lead">{props.subtitle}</p>
                   <Links/>
               </div>
            </div>
        );
    }

export default Jumbotron;