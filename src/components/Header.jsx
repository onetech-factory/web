import React from "react";
import "../assets/styles/components/Header.css";
import logo from "../assets/static/logo.png";
import Particles from "react-particles-js";
import Fondo from "../assets/static/fondo.svg";

const Header = () => {
    return (
        <section className="header">
            <nav className="header__menu">
                <div className="header__brand">
                    <img src={logo} alt="logo onetech" />
                </div>

                <div className="header__links">
                    <a href="/">Home</a>
                    <a href="/">Servicios</a>
                    <a href="/">Acerca de</a>
                    <a href="/">Contacto</a>
                </div>
            </nav>

            <div className="header__phrase">
                <h1>
                    Conectamos Hoy con el Futuro,
                    entregando siempre la milla extra.
                </h1>
                <i class="fas fa-arrow-down"></i>
                <img src={Fondo} alt="website" />
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