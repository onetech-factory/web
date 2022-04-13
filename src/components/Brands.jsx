import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../assets/styles/components/Brand.scss";
import brillo from '../assets/images/brands/brillo.png';
import guayerd from '../assets/images/brands/guayerd.png';
import ride from '../assets/images/brands/RIDE.png';
import run from '../assets/images/brands/RUN.png';
import solucionarte from '../assets/images/brands/solucionarte.png';
import swim from '../assets/images/brands/SWIM.png';
import tri from '../assets/images/brands/TRI.png';
import trenes from '../assets/images/brands/trenes.png';
import sidus from '../assets/images/brands/sidus.svg';

const Brands = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])

    return (
        <section className="brand" data-aos="fade-up" id="brand">
            <h2 className="brand__title">Casos de éxito</h2>
            <span className="separator">•</span>
            <p className="main__subtitle">Estas son las marcas que confian en nosotros</p>
            <div className="brand__container">
                <div className="slider">
                    <div className="slide-track">
                        <div className="slide">
                            <img src={brillo} alt={brillo} />
                        </div>
                        <div className="slide">
                            <img src={guayerd} alt={guayerd} />
                        </div>
                        <div className="slide">
                            <img src={solucionarte} alt={solucionarte} />
                        </div>
                        <div className="slide">
                            <img src={ride} alt={ride} />
                        </div>
                        <div className="slide">
                            <img src={run} alt={run} />
                        </div>
                        <div className="slide">
                            <img src={swim} alt={swim} />
                        </div>
                        <div className="slide">
                            <img src={tri} alt={tri} />
                        </div>
                        <div className="slide">
                            <img src={trenes} alt={trenes} />
                        </div>
                        <div className="slide">
                            <img src={sidus} alt={sidus} />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands