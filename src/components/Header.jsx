import React from "react";
import Typical from 'react-typical'
/* import { Link } from "react-scroll"; */
import "../assets/styles/components/Header.css";
import logo from "../assets/static/logo.png";
import Particles from "react-particles-js";
import Fondo from "../assets/static/fondo.svg";

const Header = () => {

    return (
        <section className="header" id="header">
            {/* <nav className="header__menu">
                <div className="header__brand">
                    <img src={logo} alt="logo onetech" />
                </div>

                <div className="header__links">
                    <Link to="header" smooth="true" className="header__link">Inicio</Link>
                    <Link to="main" smooth="true" className="header__link">Servicios</Link>
                    <Link to="about" smooth="true" className="header__link">Acerca de</Link>
                    <Link to="contact" smooth="true" className="header__link">Contacto</Link>
                </div>
            </nav> */}

            <img src={logo} alt="logo onetech" />
            <div className="header__phrase">
                <h1>
                    Somos <span>onetech<i className="fas fa-location-arrow"></i></span>
                    <Typical
                        steps={[
                            ' Sitios web a medida.', 2000,
                            ' Adaptado para moviles.', 2000
                        ]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h1>
                {/* <img src={Fondo} alt="website" /> */}
            </div>
            <Particles
                className="header__particles"
                options={{
                    background: {
                        color: {
                            value: "#ff0000",
                        }
                    }
                }}
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        },
                        "color": {
                            "value": "#000000"
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        }
                    },
                    detectRetina: true,
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }} />
        </section>
    )
};

export default Header;