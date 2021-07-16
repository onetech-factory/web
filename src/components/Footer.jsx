import React from "react";
import logo from "../assets/static/logo.png";
import "../assets/styles/components/Footer.css";

const Footer = () => (
    <section className="footer">
        <img src={logo} alt="logo onetech" />
        <h4 className="footer__copyright">
            onetech | © 2021
        </h4>
    </section>
);

export default Footer;