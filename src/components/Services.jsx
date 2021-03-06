import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/styles/components/Services.css";

const Services = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="services" data-aos="fade-up" id="services">
            <h2 className="services__title">Nuestros servicios</h2>
            <span className="separator">•</span>
            <p className="services__subtitle">Construimos soluciones de softwares adaptadas a tus necesidades</p>
            <div className="services__cards">
                <Link to="contact" smooth="true">
                    <Card
                        icon="fas fa-desktop"
                        title="Creación de sitios web"
                        text="Realizamos diseños exclusivos según la necesitad del cliente. Sitios 100% programados y diseñados a medida. Desde la idea más simple a la más compleja."
                    />
                </Link>
                <Link to="contact" smooth="true">
                    <Card
                        icon="fas fa-mobile-alt"
                        title="Adaptados a móviles"
                        text="Sitios web totalmente adaptados para ser utilizados en cualquier dispositivo, ya sea computadoras de escritorio, tablets, o smartphones."
                    />
                </Link>
                <Link to="contact" smooth="true">
                    <Card
                        icon="fas fa-clipboard-check"
                        title="Asesoramiento"
                        text="Contanos la idea de tu proyecto. Nosotros nos encargamos de entender tu necesidad y llevarlo a cabo."
                    />
                </Link>
            </div>
        </section>
    );
};

export default Services;