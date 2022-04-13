import React, { useEffect } from "react";
import Aos from "aos";
import image1 from "../assets/static/1.png";
import image2 from "../assets/static/2.png";
import image3 from "../assets/static/3.png";
import image4 from "../assets/static/4.png";
import "aos/dist/aos.css";
import "../assets/styles/components/";

const Proyects = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="proyects" data-aos="fade-up" id="proyects">
            <h2 className="proyects__title">Proyectos</h2>
            <span className="separator">•</span>
            <p className="main__subtitle">Estos son algunos de nuestros proyectos</p>
            <div className="proyects__container">
                <div className="proyects__images">
                    <a href="https://www.solucionarte.ar/" target="_blank" rel="noreferrer">
                        <img src={image1} alt="Solucionarte" className="proyects__images--background" title="Ir a Solucionarte" />
                    </a>
                    <a href="https://brilloproducciones.com/" target="_blank" rel="noreferrer">
                        <img src={image2} alt="Brillo" className="proyects__images--background" title="Ir a Brillo" />
                    </a>
                    <a href="http://cardizmudanzas.com.ar/" target="_blank" rel="noreferrer">
                        <img src={image3} alt="Cardiz" className="proyects__images--background" title="Ir a Cardiz" />
                    </a>
                    <a href="https://guayerd.github.io/labsidus-web/index.html" target="_blank" rel="noreferrer">
                        <img src={image4} alt="Sidus" className="proyects__images--background" title="Ir a Sidus" />
                    </a>
                </div>

            </div>
        </section>
    )
};

export default Proyects;