import React, { Component } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Jumbotron from "../components/Jumbotron.jsx";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron title="Projects" subtitle="Things I have created" />
        <div className="container">
          <div className="card">Hello</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
