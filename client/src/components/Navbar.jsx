//navbar displays on every page
//links/routes go here
import React, { Component, useEffect } from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
// import Footer from "./components/Footer";
// import App from "../App";
// import axios from "axios";
import Router from "express";
import {View, Link} from "react-dom";

class Navbar extends Component {
    render() {
        return (
            <Router>
                <h1>this is my navbar</h1>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/Portfolio">Portfolio</Link>
                </div>
                <div>
                    <Link to="/Contact">Contact Me</Link>
                </div>
            </Router>
        );
    }
}

export default Navbar;