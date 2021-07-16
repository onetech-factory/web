import React, { useEffect } from "react";
import Card from "./Card";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/styles/components/Main.css";

const Main = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <section className="main" data-aos="fade-up" id="main">
            <h2 className="main__title">Nuestros servicios</h2>
            <span className="separator">•</span>
            <p className="main__subtitle">Construimos soluciones de softwares adaptadas a tus necesidades</p>
            <div className="main__cards">
                <Card 
                    icon="fas fa-desktop"
                    title="Creación de sitios web"
                    text="Realizamos diseños exclusivos según la necesitad del cliente. Sitios 100% programados y diseñados a medida. Desde la idea más simple a la más compleja."
                />
                <Card 
                    icon="fas fa-mobile-alt"
                    title="Adaptados a móviles"
                    text="Sitios web totalmente adaptados para ser utilizados en cualquier dispositivo, ya sea computadoras de escritorio, tablets, o smartphones."
                />
                <Card 
                    icon="fas fa-clipboard-check"
                    title="Asesoramiento"
                    text="Contanos la idea de tu proyecto. Nosotros nos encargamos de entender tu necesidad y llevarlo a cabo."
                />
            </div>
        </section>
    );
};

export default Main;