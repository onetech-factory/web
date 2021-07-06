import React from "react";
import "../assets/styles/components/Header.css";

const Header = () => {
    return (
        <section className="header">
            <nav className="header__menu">
                <div className="header__brand">
                    <i className="fab fa-servicestack"></i>
                    <h2>NEMF</h2>
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

                <button>Contactanos</button>
            </div>
        </section>
    )
};

export default Header;